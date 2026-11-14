import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../config/siteConfig';

export const NotFound: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Page Not Found (404)"
        description="The architectural page you are looking for does not exist. Return to the DSR Civil Constructions homepage or discuss your plot."
      />

      <main id="main-content" className="w-full bg-dsr-white min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-dsr-cyan font-bold bg-dsr-ice-wash px-3 py-1 rounded-xs border border-dsr-silver">
            Error 404 • Coordinate Not Found
          </span>

          <h1 className="font-headline font-bold text-5xl sm:text-6xl text-dsr-navy tracking-tight">
            Page Not Found
          </h1>

          <p className="text-base text-dsr-navy/80 leading-relaxed">
            The page or elevation drawing you requested is not currently mapped. Return to the home overview or speak directly with our civil team about your plot.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-dsr-civil hover:bg-dsr-roof text-white font-semibold text-sm rounded-sm transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/contact"
              className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-sm rounded-sm transition-colors"
            >
              <span>{siteConfig.primaryAction}</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-dsr-silver text-xs text-dsr-navy/60">
            <span>Direct enquiries: </span>
            <a href={siteConfig.primaryPhone.tel} className="font-semibold text-dsr-roof hover:underline">
              {siteConfig.primaryPhone.display}
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
