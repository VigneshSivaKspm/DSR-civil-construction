import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowUpRight, Globe } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-dsr-navy text-dsr-white border-t border-dsr-civil relative overflow-hidden" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        
        {/* Fine Cyan Geometric Accent Line on the Top Edge */}
        <div className="h-1 w-full bg-gradient-to-r from-dsr-cyan via-dsr-roof to-dsr-civil" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Col 1-5: Brand & Purpose */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block bg-white p-2.5 rounded-sm border border-dsr-silver/40 shadow-sm">
                <img
                  src="/images/logo/dsr-logo-cropped.png"
                  alt="DSR Civil Constructions brand emblem"
                  className="h-16 sm:h-20 w-auto object-contain"
                  width="80"
                  height="80"
                  loading="lazy"
                />
              </div>

              <div>
                <p className="font-headline font-bold text-2xl text-white tracking-wide">
                  DSR CIVIL CONSTRUCTIONS
                </p>
                <p className="text-dsr-glass text-sm mt-1 font-medium">
                  நவீன மனைகளுக்கான பிரத்யேகக் குடியிருப்பு மற்றும் கட்டமைப்புப் பொறியியல்.
                </p>
              </div>

              <p className="text-dsr-silver/90 text-sm max-w-sm leading-relaxed">
                ஒரு கட்டிட வரைவு, அந்த இடத்தில் வாழப்போகும் மனிதர்களின் தினசரி தேவைகளிலிருந்தே துவங்குகிறது. உங்கள் மனை, நீங்கள் அமைத்திட விரும்பும் இடவசதி மற்றும் திட்டமிட வேண்டிய முக்கிய முடிவுகளை எங்களுடன் பகிர்ந்துகொள்ளுங்கள்.
              </p>

              {/* Verified domain indicator */}
              <div className="flex items-center space-x-2 text-xs font-mono text-dsr-cyan">
                <Globe className="w-3.5 h-3.5 text-dsr-cyan" />
                <a
                  href={`https://${siteConfig.domain}`}
                  className="hover:underline hover:text-white transition-colors"
                >
                  {siteConfig.domain}
                </a>
              </div>
            </div>

            {/* Col 6-8: Navigation & Exploration */}
            <div className="lg:col-span-3 space-y-4">
              <p className="font-headline font-semibold text-lg text-white uppercase tracking-wider border-b border-dsr-civil/60 pb-2">
                Explore The Site
              </p>
              <ul className="space-y-2.5 text-sm">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-dsr-silver/80 hover:text-dsr-cyan transition-colors flex items-center group py-1"
                    >
                      <span className="w-1.5 h-1.5 bg-dsr-roof rounded-full mr-2.5 group-hover:bg-dsr-cyan transition-colors" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/projects#ideas"
                    className="text-dsr-silver/80 hover:text-dsr-cyan transition-colors flex items-center group py-1"
                  >
                    <span className="w-1.5 h-1.5 bg-dsr-roof rounded-full mr-2.5 group-hover:bg-dsr-cyan transition-colors" />
                    <span>Building Ideas</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 9-12: Contact Details & Direct Call Access */}
            <div className="lg:col-span-4 space-y-4">
              <p className="font-headline font-semibold text-lg text-white uppercase tracking-wider border-b border-dsr-civil/60 pb-2">
                Plot Discussions & Enquiries
              </p>
              <p className="text-sm text-dsr-silver/90">
                எங்கள் சிவில் பொறியியல் மற்றும் கள ஆய்வு குழுவினருடன் நேரடியாகப் பேசுங்கள்:
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={siteConfig.primaryPhone.tel}
                  className="flex items-center justify-between p-3.5 bg-dsr-civil/50 hover:bg-dsr-civil border border-dsr-roof/40 rounded-sm transition-all group"
                  aria-label={`Call primary phone ${siteConfig.primaryPhone.display}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-dsr-roof text-white rounded-xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-dsr-cyan font-mono uppercase tracking-wider">Primary Call Line</p>
                      <p className="text-base font-semibold text-white group-hover:text-dsr-cyan transition-colors">
                        {siteConfig.primaryPhone.display}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-dsr-cyan group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={siteConfig.secondaryPhone.tel}
                  className="flex items-center justify-between p-3.5 bg-dsr-civil/50 hover:bg-dsr-civil border border-dsr-roof/40 rounded-sm transition-all group"
                  aria-label={`Call secondary phone ${siteConfig.secondaryPhone.display}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-dsr-roof text-white rounded-xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-dsr-cyan font-mono uppercase tracking-wider">Secondary Call Line</p>
                      <p className="text-base font-semibold text-white group-hover:text-dsr-cyan transition-colors">
                        {siteConfig.secondaryPhone.display}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-dsr-cyan group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center px-5 py-3 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-sm tracking-wide rounded-sm transition-colors shadow-sm"
                >
                  <span>{siteConfig.primaryAction}</span>
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Sub-footer Legal & Architecture Line */}
          <div className="mt-14 pt-8 border-t border-dsr-civil/50 flex flex-col sm:flex-row items-center justify-between text-xs text-dsr-silver/70 space-y-4 sm:space-y-0">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span>Domain: {siteConfig.domain}</span>
              <span className="hidden sm:inline">•</span>
              <span>முன்பதிவு அடிப்படையில் நேரடி மனை ஆய்வுகள்</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Action Priority Bar (Visible on mobile/tablet screens only) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-dsr-white/95 backdrop-blur-md border-t border-dsr-silver p-2.5 px-4 shadow-lg flex items-center space-x-3">
        <a
          href={siteConfig.primaryPhone.tel}
          className="flex-1 min-h-[46px] inline-flex items-center justify-center px-4 py-2.5 bg-dsr-ice-wash border border-dsr-civil/30 text-dsr-navy font-semibold text-sm rounded-sm active:bg-dsr-silver"
          aria-label={`Call ${siteConfig.primaryPhone.display}`}
        >
          <Phone className="w-4 h-4 text-dsr-roof mr-2" />
          <span>Call</span>
        </a>
        <Link
          to="/contact"
          className="flex-2 min-h-[46px] inline-flex items-center justify-center px-5 py-2.5 bg-dsr-gold text-dsr-navy font-bold text-sm tracking-wide rounded-sm shadow-sm active:bg-dsr-gold-hover"
        >
          <span>{siteConfig.primaryAction}</span>
          <ArrowUpRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </>
  );
};
