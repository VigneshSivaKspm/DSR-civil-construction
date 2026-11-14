import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-dsr-gold focus:text-dsr-navy focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-dsr-navy"
    >
      Skip to main content
    </a>
  );
};
