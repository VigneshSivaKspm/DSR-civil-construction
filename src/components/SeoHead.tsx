import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

interface SeoHeadProps {
  title: string;
  description: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top or anchor hash on route change
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }

    // Set page title
    document.title = `${title} | ${siteConfig.brand}`;

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const url = `https://${siteConfig.domain}${location.pathname}`;
      canonicalLink.setAttribute('href', url);
    }
  }, [location, title, description]);

  return null;
};
