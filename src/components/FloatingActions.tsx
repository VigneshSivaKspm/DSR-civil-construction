import React, { useState } from 'react';
import { Phone, PhoneCall, X } from 'lucide-react';
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
          className="bg-dsr-navy/95 backdrop-blur-xl text-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,24,88,0.5)] border border-dsr-cyan/30 w-72 mb-2 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-dsr-cyan">
                Civil Engineering Team
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowPhoneSelector(false)}
              className="p-1 text-white/60 hover:text-white rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-dsr-cyan"
              aria-label="Close phone menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={siteConfig.primaryPhone.tel}
              className="flex items-center space-x-3 p-3 bg-white/5 hover:bg-dsr-roof/80 rounded-lg border border-white/10 hover:border-dsr-cyan/40 transition-all duration-200 group"
            >
              <div className="p-2.5 bg-gradient-to-br from-[#0055D4] to-[#0038A8] text-white rounded-lg shadow-sm group-hover:scale-105 transition-transform">
                <PhoneCall className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-dsr-cyan font-mono uppercase tracking-wider">Primary Civil Line</p>
                <p className="text-sm font-bold text-white tracking-wide">{siteConfig.primaryPhone.display}</p>
              </div>
            </a>

            <a
              href={siteConfig.secondaryPhone.tel}
              className="flex items-center space-x-3 p-3 bg-white/5 hover:bg-dsr-roof/80 rounded-lg border border-white/10 hover:border-dsr-cyan/40 transition-all duration-200 group"
            >
              <div className="p-2.5 bg-gradient-to-br from-[#0055D4] to-[#0038A8] text-white rounded-lg shadow-sm group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-dsr-cyan font-mono uppercase tracking-wider">Secondary Field Line</p>
                <p className="text-sm font-bold text-white tracking-wide">{siteConfig.secondaryPhone.display}</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Modern Floating Call Button */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setShowPhoneSelector(!showPhoneSelector)}
          aria-expanded={showPhoneSelector}
          aria-label="Call DSR Civil Constructions"
          className="relative min-h-[52px] min-w-[52px] sm:min-h-[56px] sm:min-w-[56px] w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#0066FF] via-[#0047BA] to-[#002060] text-white flex items-center justify-center shadow-[0_10px_25px_-3px_rgba(0,102,255,0.5),0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_14px_30px_-2px_rgba(0,102,255,0.65),0_6px_16px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 ease-out border border-white/30 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan"
        >
          {/* Glass Specular Curved Sheen */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/35 via-white/5 to-transparent pointer-events-none" />

          {/* Crisp Modern White PhoneCall Icon */}
          <PhoneCall className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </button>

        {/* Modern Sleek Hover Pill */}
        <div className="hidden sm:flex items-center space-x-2.5 absolute right-16 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-dsr-navy/95 backdrop-blur-xl text-white text-xs font-semibold rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-white/15 whitespace-nowrap translate-x-2 group-hover:translate-x-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/80">Call Engineer:</span>
          <span className="font-bold text-dsr-cyan tracking-wide">{siteConfig.primaryPhone.display}</span>
        </div>
      </div>

      {/* Modern Floating WhatsApp Button */}
      {siteConfig.whatsapp.enabled && (
        <div className="relative group">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with DSR Civil Constructions on WhatsApp"
            className="relative min-h-[52px] min-w-[52px] sm:min-h-[56px] sm:min-w-[56px] w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#30E875] via-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_10px_25px_-3px_rgba(37,211,102,0.5),0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_14px_30px_-2px_rgba(37,211,102,0.65),0_6px_16px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 ease-out border border-white/35 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            {/* Glass Specular Curved Sheen */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/35 via-white/5 to-transparent pointer-events-none" />

            {/* Crisp Modern WhatsApp Vector Icon */}
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z" />
            </svg>
          </a>

          {/* Modern Sleek Hover Pill */}
          <div className="hidden sm:flex items-center space-x-2.5 absolute right-16 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-[#075E54]/95 backdrop-blur-xl text-white text-xs font-semibold rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-emerald-400/25 whitespace-nowrap translate-x-2 group-hover:translate-x-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-white tracking-wide">Chat on WhatsApp</span>
            <span className="text-emerald-200/80 text-[11px]">• Instant Reply</span>
          </div>
        </div>
      )}

    </div>
  );
};
