import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  getRouteSeo,
  notFoundSeo,
  schemasForRoute,
} from '../config/seoConfig';

interface SeoHeadProps {
  /** Fallback title for routes that are not in seoConfig (e.g. 404). */
  title: string;
  description: string;
  /** Set on the 404 page so it is never indexed. */
  noIndex?: boolean;
}

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Keeps <head> in sync with the current route on client-side navigation.
 * The same data is baked into each route's static HTML at build time (see seo/vitePluginSeo.ts),
 * so crawlers that do not execute JavaScript see identical tags.
 */
export const SeoHead: React.FC<SeoHeadProps> = ({ title, description, noIndex = false }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to anchor on hash change (top-of-page scrolling is handled by <ScrollToTop /> in App).
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  useEffect(() => {
    const route = getRouteSeo(location.pathname);
    const pageTitle = route?.title ?? (noIndex ? notFoundSeo.title : `${title} | ${SITE_NAME}`);
    const pageDescription = route?.description ?? description;
    const indexable = route ? route.index && !noIndex : false;
    const image = route?.image ?? DEFAULT_OG_IMAGE;
    // Unknown paths canonicalise to the homepage so 404 URLs never dilute the index.
    const canonical = absoluteUrl(route ? route.path : '/');
    const ogTitle = route?.ogTitle ?? pageTitle;

    document.title = pageTitle;
    setMeta('name', 'title', pageTitle);
    setMeta('name', 'description', pageDescription);
    if (route) setMeta('name', 'keywords', route.keywords.join(', '));
    setMeta(
      'name',
      'robots',
      indexable
        ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        : 'noindex, nofollow',
    );
    setLink('canonical', canonical);
    document.head
      .querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]')
      .forEach((l) => l.setAttribute('href', canonical));

    setMeta('property', 'og:title', ogTitle);
    setMeta('property', 'og:description', pageDescription);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', image.url);
    setMeta('property', 'og:image:alt', image.alt);
    setMeta('name', 'twitter:title', ogTitle);
    setMeta('name', 'twitter:description', pageDescription);
    setMeta('name', 'twitter:url', canonical);
    setMeta('name', 'twitter:image', image.url);
    setMeta('name', 'twitter:image:alt', image.alt);

    // Replace route-specific JSON-LD
    document.head.querySelectorAll('script[data-seo="jsonld"]').forEach((n) => n.remove());
    if (route) {
      schemasForRoute(route).forEach((schema) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', 'jsonld');
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [location.pathname, title, description, noIndex]);

  return null;
};
