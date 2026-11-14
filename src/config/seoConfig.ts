/**
 * Single source of truth for all SEO data.
 *
 * Consumed by:
 *  - src/components/SeoHead.tsx  (runtime head updates on client-side navigation)
 *  - seo/vitePluginSeo.ts        (build-time: per-route HTML, sitemap.xml, robots.txt)
 *
 * Keep this file free of React / browser imports so it can run in Node.
 */
import { servicesData } from '../data/servicesData';

export const SITE_URL = 'https://dsrcivilconstructions.in';
export const SITE_NAME = 'DSR Civil Constructions';
export const SITE_LOCALE = 'en_IN';
export const SITE_TWITTER_CARD = 'summary_large_image';

/** 1200x630-ish social image. JPG is used because it is the most widely supported format for crawlers. */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/images/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: 'Contemporary residence built by DSR Civil Constructions with deep sunshades and shaded balconies',
  type: 'image/jpeg',
};

export const LOGO_URL = `${SITE_URL}/images/logo/dsr-logo-cropped.png`;

export const PHONES = ['+91-73732-12354', '+91-90803-46867'];

export interface RouteSeo {
  path: string;
  /** Full <title> (no brand suffix is appended). Keep under ~60 chars. */
  title: string;
  /** Meta description. Keep 120-160 chars. */
  description: string;
  keywords: string[];
  /** Social-share title (can be more conversational than <title>). */
  ogTitle?: string;
  image?: typeof DEFAULT_OG_IMAGE;
  /** Controls the sitemap entry. */
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  /** Whether the page should be indexed. */
  index: boolean;
  /** schema.org type of the page itself. */
  schemaType: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  breadcrumb: string;
  /** Crawlable fallback content injected into prerendered HTML (replaced by React on load). */
  h1: string;
  intro: string;
}

const baseKeywords = [
  'DSR Civil Constructions',
  'civil contractors Tamil Nadu',
  'building contractors Tamil Nadu',
  'construction company Tamil Nadu',
  'house construction Tamil Nadu',
];

export const routes: RouteSeo[] = [
  {
    path: '/',
    title: 'DSR Civil Constructions | Building Contractors in Tamil Nadu',
    ogTitle: 'DSR Civil Constructions | What will you build on your plot?',
    description:
      'DSR Civil Constructions builds homes, villas, commercial buildings and industrial sheds across Tamil Nadu. Turnkey civil contracting. Call +91 73732 12354.',
    keywords: [
      ...baseKeywords,
      'home builders Tamil Nadu',
      'villa construction',
      'commercial building construction',
      'turnkey construction contractors',
      'RCC construction',
      'residential construction company',
      'custom home builders',
      'house construction cost per sq ft Tamil Nadu',
      'வீடு கட்டுமானம்',
      'கட்டுமான நிறுவனம் தமிழ்நாடு',
      'சிவில் காண்ட்ராக்டர்',
    ],
    changefreq: 'weekly',
    priority: 1.0,
    index: true,
    schemaType: 'WebPage',
    breadcrumb: 'Home',
    h1: 'What will you build on your plot?',
    intro:
      'DSR Civil Constructions is a civil construction company in Tamil Nadu building contemporary homes, villas, commercial buildings, industrial sheds and compound walls, with turnkey delivery from foundation to finishing. Tell us about your land, the space you have in mind and the decisions you would like help making.',
  },
  {
    path: '/about',
    title: 'About DSR Civil Constructions | Our Building Approach',
    ogTitle: 'Meet DSR Civil Constructions',
    description:
      'How DSR Civil Constructions plans a build: plot evaluation, family priorities, sound structural engineering and honest site execution across Tamil Nadu.',
    keywords: [
      ...baseKeywords,
      'about DSR Civil Constructions',
      'structural engineering contractors',
      'plot evaluation',
      'quality construction materials',
      'Fe 550D TMT construction',
      'trusted builders Tamil Nadu',
    ],
    changefreq: 'monthly',
    priority: 0.7,
    index: true,
    schemaType: 'AboutPage',
    breadcrumb: 'About',
    h1: 'Meet DSR Civil Constructions',
    intro:
      'A building brief starts with the people who will use the space. DSR Civil Constructions approaches plot evaluation, family priorities and structural engineering with practical, site-first decisions.',
  },
  {
    path: '/services',
    title: 'Construction Services | Homes, Commercial & Turnkey Builds',
    ogTitle: 'Construction & Civil Services | DSR Civil Constructions',
    description:
      'Residential construction, commercial buildings, turnkey contracting, renovations, 2D/3D planning, industrial sheds and compound walls in Tamil Nadu.',
    keywords: [
      ...baseKeywords,
      'residential construction services',
      'commercial building contractors',
      'turnkey civil contractors',
      'house renovation and extension',
      '2D 3D elevation design and approvals',
      'industrial shed construction',
      'warehouse construction',
      'compound wall construction',
      'site levelling',
      'building plan approval',
    ],
    changefreq: 'monthly',
    priority: 0.9,
    index: true,
    schemaType: 'CollectionPage',
    breadcrumb: 'Services',
    h1: 'Construction and civil services',
    intro:
      'Residential construction and custom homes, commercial buildings and retail complexes, turnkey civil delivery, renovations and extensions, architectural planning with 2D/3D elevations and approvals, industrial sheds and warehouses, and compound walls with site development.',
  },
  {
    path: '/projects',
    title: 'Our Projects & Building Ideas | DSR Civil Constructions',
    ogTitle: 'Inside the build | Projects & Building Ideas',
    description:
      'See verified civil construction work and practical building ideas from DSR Civil Constructions: RCC structure, sunshades, verandahs and shopfronts in Tamil Nadu.',
    keywords: [
      ...baseKeywords,
      'construction projects Tamil Nadu',
      'house elevation designs',
      'contemporary home design India',
      'RCC structure work',
      'sunshade design',
      'shopfront design',
      'building ideas for plot owners',
    ],
    changefreq: 'monthly',
    priority: 0.8,
    index: true,
    schemaType: 'CollectionPage',
    breadcrumb: 'Projects',
    h1: 'Inside the build',
    intro:
      'Verified construction execution and practical building ideas from DSR Civil Constructions across Tamil Nadu, including a contemporary multi-level residence with RCC structure and deep sunshades.',
  },
  {
    path: '/contact',
    title: 'Contact DSR Civil Constructions | Call +91 73732 12354',
    ogTitle: 'Tell us about your plot | Contact DSR Civil Constructions',
    description:
      'Share your plot location and a rough idea to start your project. Call DSR Civil Constructions on +91 73732 12354 or +91 90803 46867, or message on WhatsApp.',
    keywords: [
      ...baseKeywords,
      'contact DSR Civil Constructions',
      'construction enquiry',
      'free site consultation',
      'get a construction quote',
      'building contractor phone number',
      'WhatsApp builder enquiry',
    ],
    changefreq: 'yearly',
    priority: 0.8,
    index: true,
    schemaType: 'ContactPage',
    breadcrumb: 'Contact',
    h1: 'Tell us about your plot',
    intro:
      'A location and a rough idea are enough to start. Call +91 73732 12354 or +91 90803 46867, or send an enquiry about your land or building project.',
  },
];

/** Used for the SPA 404 route (never in sitemap, always noindex). */
export const notFoundSeo = {
  title: 'Page Not Found (404) | DSR Civil Constructions',
  description:
    'The page you are looking for does not exist. Return to the DSR Civil Constructions homepage or discuss your plot.',
};

export const getRouteSeo = (pathname: string): RouteSeo | undefined => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return routes.find((r) => r.path === clean);
};

export const absoluteUrl = (path: string): string => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

/* ------------------------------------------------------------------ */
/* JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['GeneralContractor', 'HomeAndConstructionBusiness', 'LocalBusiness'],
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: ['DSR Civil', 'DSR Constructions', 'டி.எஸ்.ஆர் சிவில் கன்ஸ்ட்ரக்ஷன்ஸ்'],
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: 863,
    height: 885,
  },
  image: DEFAULT_OG_IMAGE.url,
  description:
    'Civil construction company in Tamil Nadu delivering residential homes, villas, commercial buildings, industrial sheds, renovations and compound walls with turnkey execution.',
  telephone: PHONES[0],
  contactPoint: PHONES.map((telephone, i) => ({
    '@type': 'ContactPoint',
    telephone,
    contactType: i === 0 ? 'customer service' : 'sales',
    areaServed: 'IN-TN',
    availableLanguage: ['English', 'Tamil'],
  })),
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'State', name: 'Tamil Nadu', containedInPlace: { '@type': 'Country', name: 'India' } },
  ],
  knowsAbout: [
    'Residential construction',
    'Commercial construction',
    'RCC structural work',
    'Turnkey civil contracting',
    'Building renovation',
    'Industrial shed construction',
    'Architectural planning and approvals',
  ],
  makesOffer: servicesData
    .filter((s) => s.isPublished)
    .map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        serviceType: s.title,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'State', name: 'Tamil Nadu' },
        url: `${SITE_URL}/services`,
      },
    })),
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: ['en-IN', 'ta-IN'],
  publisher: { '@id': ORG_ID },
});

const breadcrumbSchema = (route: RouteSeo) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement:
    route.path === '/'
      ? [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }]
      : [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: route.breadcrumb, item: absoluteUrl(route.path) },
        ],
});

const webPageSchema = (route: RouteSeo) => ({
  '@context': 'https://schema.org',
  '@type': route.schemaType,
  '@id': `${absoluteUrl(route.path)}#webpage`,
  url: absoluteUrl(route.path),
  name: route.title,
  description: route.description,
  inLanguage: 'en-IN',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  primaryImageOfPage: { '@type': 'ImageObject', url: (route.image ?? DEFAULT_OG_IMAGE).url },
  breadcrumb: { '@id': `${absoluteUrl(route.path)}#breadcrumb` },
});

const servicesListSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Construction and civil services by DSR Civil Constructions',
  itemListElement: servicesData
    .filter((s) => s.isPublished)
    .map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'State', name: 'Tamil Nadu' },
      },
    })),
});

/**
 * All JSON-LD blocks for a route. Organisation + website entities are repeated on every page so each
 * page is self-contained for crawlers that do not resolve cross-page @id references.
 */
export const schemasForRoute = (route: RouteSeo): object[] => {
  const blocks: object[] = [];
  blocks.push(organizationSchema(), websiteSchema());
  blocks.push(webPageSchema(route));
  const crumb = breadcrumbSchema(route) as Record<string, unknown>;
  blocks.push({ ...crumb, '@id': `${absoluteUrl(route.path)}#breadcrumb` });
  if (route.path === '/services') blocks.push(servicesListSchema());
  return blocks;
};
