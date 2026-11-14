import fs from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import type { Plugin } from 'vite';
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  notFoundSeo,
  routes,
  schemasForRoute,
  type RouteSeo,
} from '../src/config/seoConfig';

const START = '<!-- seo:start -->';
const END = '<!-- seo:end -->';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** JSON for inline <script>: escape "<" so "</script>" can never terminate the block. */
const jsonForScript = (o: object) => JSON.stringify(o).replace(/</g, '\\u003c');

/** The per-route <head> block. Mirrors what <SeoHead /> does at runtime. */
export const headBlock = (route: RouteSeo): string => {
  const img = route.image ?? DEFAULT_OG_IMAGE;
  const url = absoluteUrl(route.path);
  const ogTitle = route.ogTitle ?? route.title;
  const robots = route.index
    ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    : 'noindex, nofollow';
  const lines = [
    START,
    `<title>${esc(route.title)}</title>`,
    `<meta name="title" content="${esc(route.title)}" />`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<meta name="keywords" content="${esc(route.keywords.join(', '))}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta name="googlebot" content="${robots}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...(route.path === '/'
      ? ['<link rel="preload" as="image" href="/images/architecture/hero-home.webp" type="image/webp" fetchpriority="high" />']
      : []),
    `<link rel="alternate" hreflang="en-IN" href="${url}" />`,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(ogTitle)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:image" content="${img.url}" />`,
    `<meta property="og:image:secure_url" content="${img.url}" />`,
    `<meta property="og:image:type" content="${img.type}" />`,
    `<meta property="og:image:width" content="${img.width}" />`,
    `<meta property="og:image:height" content="${img.height}" />`,
    `<meta property="og:image:alt" content="${esc(img.alt)}" />`,
    `<meta name="twitter:url" content="${url}" />`,
    `<meta name="twitter:title" content="${esc(ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${img.url}" />`,
    `<meta name="twitter:image:alt" content="${esc(img.alt)}" />`,
    ...schemasForRoute(route).map(
      (s) => `<script type="application/ld+json" data-seo="jsonld">${jsonForScript(s)}</script>`,
    ),
    END,
  ];
  return lines.join('\n    ');
};

/** Crawlable fallback markup placed inside #root; React replaces it on mount. */
const fallbackBody = (route: RouteSeo): string => {
  const nav = routes
    .map((r) => `<li><a href="${r.path}">${esc(r.breadcrumb)}</a></li>`)
    .join('');
  const sr =
    'position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0';
  return `<div id="root"><div data-seo-fallback style="${sr}"><header><p>DSR Civil Constructions</p><nav aria-label="Primary"><ul>${nav}</ul></nav></header><main><h1>${esc(
    route.h1,
  )}</h1><p>${esc(route.intro)}</p><p>Phone: <a href="tel:+917373212354">+91 73732 12354</a>, <a href="tel:+919080346867">+91 90803 46867</a></p></main></div></div>`;
};

const renderRoute = (template: string, route: RouteSeo, withFallback = false): string => {
  const startIdx = template.indexOf(START);
  const endIdx = template.indexOf(END);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error('[seo] index.html is missing the <!-- seo:start --> / <!-- seo:end --> markers');
  }
  let html = template.slice(0, startIdx) + headBlock(route) + template.slice(endIdx + END.length);
  if (withFallback) html = html.replace(/<div id="root">\s*<\/div>/, fallbackBody(route));
  return html;
};

const sitemapXml = (lastmod: string): string => {
  const urls = routes
    .filter((r) => r.index)
    .map((r) => {
      const img = r.image ?? DEFAULT_OG_IMAGE;
      return `  <url>
    <loc>${absoluteUrl(r.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="en-IN" href="${absoluteUrl(r.path)}" />
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${esc(r.ogTitle ?? r.title)}</image:title>
    </image:image>
  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
};

const robotsTxt = `# robots.txt for ${SITE_URL}
User-agent: *
Allow: /

# Search engines
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

# AI / answer-engine crawlers are welcome so the business can be cited accurately
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

/**
 * Build-time SEO: injects the home route's tags into index.html (also in dev),
 * then after `vite build` writes one HTML file per route plus sitemap.xml and robots.txt.
 */
export const seoPlugin = (): Plugin => {
  let outDir = 'dist';
  let root = process.cwd();
  return {
    name: 'dsr-seo',
    configResolved(cfg) {
      outDir = cfg.build.outDir;
      root = cfg.root;
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return renderRoute(html, routes[0]);
      },
    },
    closeBundle: {
      order: 'post',
      sequential: true,
      handler() {
        const dist = path.resolve(root, outDir);
        const indexPath = path.join(dist, 'index.html');
        if (!fs.existsSync(indexPath)) return; // dev server / non-HTML build
        const built = fs.readFileSync(indexPath, 'utf8');
        // The built index.html already contains the home block; re-render per route from it.
        for (const route of routes) {
          const html = renderRoute(built, route, true);
          if (route.path === '/') {
            fs.writeFileSync(indexPath, html);
          } else {
            const dir = path.join(dist, route.path.replace(/^\//, ''));
            fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(path.join(dir, 'index.html'), html);
          }
        }
        // 404 shell for hosts that serve /404.html (noindex)
        const notFound = renderRoute(
          built,
          {
            ...routes[0],
            path: '/404',
            title: notFoundSeo.title,
            description: notFoundSeo.description,
            index: false,
            breadcrumb: '404',
            h1: 'Page not found',
            intro: notFoundSeo.description,
          },
          true,
        ).replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${SITE_URL}/" />`);
        fs.writeFileSync(path.join(dist, '404.html'), notFound);

        let lastmod = new Date().toISOString().slice(0, 10);
        try {
          // Use the date of the last real content change rather than the build date.
          const d = execSync('git log -1 --format=%cs -- src public', { cwd: root }).toString().trim();
          if (/^\d{4}-\d{2}-\d{2}$/.test(d)) lastmod = d;
        } catch {
          /* not a git checkout: fall back to build date */
        }
        fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemapXml(lastmod));
        fs.writeFileSync(path.join(dist, 'robots.txt'), robotsTxt);
        console.log(`[seo] wrote ${routes.length} route pages, 404.html, sitemap.xml, robots.txt`);
      },
    },
  };
};
