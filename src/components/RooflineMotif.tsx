import React from 'react';

interface RooflineMotifProps {
  className?: string;
  variant?: 'hero' | 'divider' | 'inline' | 'masthead';
}

export const RooflineMotif: React.FC<RooflineMotifProps> = ({
  className = '',
  variant = 'divider',
}) => {
  if (variant === 'hero') {
    return (
      <div className={`relative w-full pointer-events-none select-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 overflow-visible"
        >
          {/* Base elevation guide line */}
          <line
            x1="0"
            y1="36"
            x2="480"
            y2="36"
            stroke="#001858"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
          {/* Sloping roofline motif drawn dynamically toward the photograph */}
          <path
            d="M 480 36 L 680 12 L 860 12 L 1200 12"
            stroke="#005FDD"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-roofline"
          />
          {/* Cyan highlight edge */}
          <path
            d="M 680 12 L 860 12"
            stroke="#00B7FD"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Architectural datum marker */}
          <circle cx="480" cy="36" r="3" fill="#001858" />
          <circle cx="680" cy="12" r="3.5" fill="#FFBB02" />
        </svg>
      </div>
    );
  }

  if (variant === 'masthead') {
    return (
      <div className={`flex items-center space-x-2 ${className}`} aria-hidden="true">
        <span className="w-10 h-0.5 bg-dsr-cyan" />
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path d="M 0 10 L 14 2 L 24 2" stroke="#00B7FD" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="w-16 h-px bg-dsr-cyan/40" />
      </div>
    );
  }

  return (
    <div className={`flex items-center w-full py-4 ${className}`} aria-hidden="true">
      <div className="h-px bg-dsr-silver flex-grow" />
      <svg width="60" height="16" viewBox="0 0 60 16" fill="none" className="mx-3 flex-shrink-0">
        <path d="M 2 13 L 26 3 L 42 3 L 58 13" stroke="#005FDD" strokeWidth="2" strokeLinecap="round" />
        <path d="M 26 3 L 42 3" stroke="#00B7FD" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="26" cy="3" r="2" fill="#FFBB02" />
      </svg>
      <div className="h-px bg-dsr-silver flex-grow" />
    </div>
  );
};
