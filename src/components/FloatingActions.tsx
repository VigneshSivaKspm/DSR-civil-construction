import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingActions: React.FC = () => {
  const [showPhoneSelector, setShowPhoneSelector] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage || 'Hello DSR Civil Constructions, I would like to discuss my plot and building project.'
  )}`;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Call Selector Popover (When activated) */}
      {showPhoneSelector && (
        <div
          role="dialog"
          aria-label="Choose a phone line to call"
          className="bg-dsr-navy text-white p-4 rounded-sm shadow-2xl border border-dsr-cyan/40 w-72 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          <div className="flex items-center justify-between pb-2 border-b border-dsr-civil/60 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-dsr-cyan">
              Direct Phone Lines
            </span>
            <button
              type="button"
              onClick={() => setShowPhoneSelector(false)}
              className="p-1 text-dsr-silver hover:text-white rounded-xs focus:outline-none focus:ring-1 focus:ring-dsr-cyan"
              aria-label="Close phone menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={siteConfig.primaryPhone.tel}
              className="flex items-center space-x-3 p-2.5 bg-dsr-civil/60 hover:bg-dsr-roof rounded-xs border border-dsr-roof/40 transition-colors group"
            >
              <div className="p-2 bg-dsr-roof group-hover:bg-dsr-cyan group-hover:text-dsr-navy text-white rounded-xs transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-dsr-cyan font-mono uppercase">Primary Line</p>
                <p className="text-sm font-bold text-white">{siteConfig.primaryPhone.display}</p>
              </div>
            </a>

            <a
              href={siteConfig.secondaryPhone.tel}
              className="flex items-center space-x-3 p-2.5 bg-dsr-civil/60 hover:bg-dsr-roof rounded-xs border border-dsr-roof/40 transition-colors group"
            >
              <div className="p-2 bg-dsr-roof group-hover:bg-dsr-cyan group-hover:text-dsr-navy text-white rounded-xs transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-dsr-cyan font-mono uppercase">Secondary Line</p>
                <p className="text-sm font-bold text-white">{siteConfig.secondaryPhone.display}</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Call Button */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setShowPhoneSelector(!showPhoneSelector)}
          aria-expanded={showPhoneSelector}
          aria-label="Call DSR Civil Constructions"
          className="min-h-[50px] min-w-[50px] sm:min-h-[54px] sm:min-w-[54px] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-dsr-civil to-dsr-roof text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-106 active:scale-95 transition-all duration-200 border-2 border-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-dsr-gold animate-bounce-subtle" />
        </button>

        {/* Tooltip on Desktop */}
        <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-dsr-navy text-white text-xs font-semibold rounded-xs shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-dsr-silver/20">
          Call Civil Team
        </span>
      </div>

      {/* Floating WhatsApp Button */}
      {siteConfig.whatsapp.enabled && (
        <div className="relative group">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with DSR Civil Constructions on WhatsApp"
            className="min-h-[50px] min-w-[50px] sm:min-h-[54px] sm:min-w-[54px] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-106 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            {/* WhatsApp Vector Icon */}
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z" />
            </svg>
          </a>

          {/* Tooltip on Desktop */}
          <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#128C7E] text-white text-xs font-semibold rounded-xs shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/20">
            Chat on WhatsApp
          </span>
        </div>
      )}

    </div>
  );
};
