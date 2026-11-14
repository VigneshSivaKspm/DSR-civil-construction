import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Eye, Compass } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export const ElevationComparison: React.FC = () => {
  const { setCursorMode, setCursorLabel } = useCursor();
  // Slider position from 0 (all drawing) to 100 (all finished view), default 50%
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update position from pointer (mouse/touch)
  const updatePositionFromPointer = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(Math.round(percentage));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePositionFromPointer(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updatePositionFromPointer(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if not captured
    }
  };

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div className="w-full">
      {/* Top Controls Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center px-2.5 py-1 bg-dsr-civil/10 text-dsr-civil border border-dsr-civil/20 text-xs font-semibold uppercase tracking-wider rounded-xs">
            Design Concept
          </span>
          <span className="text-xs text-dsr-navy/70 hidden sm:inline">
            Drag handle or use arrow keys to inspect the structural alignment
          </span>
        </div>

        {/* Quick-switch buttons */}
        <div className="inline-flex items-center p-1 bg-dsr-ice-wash border border-dsr-silver rounded-sm space-x-1" role="group" aria-label="View toggle">
          <button
            type="button"
            onClick={() => setSliderPosition(0)}
            className={`min-h-[40px] px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-all flex items-center space-x-1.5 ${
              sliderPosition < 30
                ? 'bg-dsr-civil text-white shadow-xs'
                : 'text-dsr-navy hover:text-dsr-roof'
            }`}
            aria-pressed={sliderPosition < 30}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Drawing</span>
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(100)}
            className={`min-h-[40px] px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-all flex items-center space-x-1.5 ${
              sliderPosition > 70
                ? 'bg-dsr-civil text-white shadow-xs'
                : 'text-dsr-navy hover:text-dsr-roof'
            }`}
            aria-pressed={sliderPosition > 70}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Finished view</span>
          </button>
        </div>
      </div>

      {/* Comparison Stage Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          setCursorMode('drag');
          setCursorLabel('DRAG');
        }}
        onMouseLeave={() => {
          setCursorMode('default');
          setCursorLabel(undefined);
        }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Compare architectural drawing and finished view"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={sliderPosition}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden select-none touch-none rounded-sm border border-dsr-silver bg-slate-950 cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan shadow-md"
      >
        {/* Layer 1: Finished Building View (Underneath full width) */}
        <div className="absolute inset-0">
          <img
            src="/images/architecture/elevation-villa.webp"
            alt="Finished architectural view of modern residence with cantilevered roofline and sunshades"
            className="w-full h-full object-cover"
            loading="lazy"
            width="1400"
            height="1050"
          />
          {/* Subtle label overlay */}
          <div className="absolute bottom-4 right-4 bg-dsr-navy/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-xs border border-white/20 font-medium">
            Finished View
          </div>
        </div>

        {/* Layer 2: Architectural CAD / Elevation Line Drawing (Clipped to sliderPosition) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-full">
            {/* Base CAD Blueprint Image */}
            <img
              src="/images/architecture/elevation-drawing.webp"
              alt="CAD front elevation line drawing matching the exact villa roofline and window grid"
              className="w-full h-full object-cover filter contrast-125 brightness-95"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                maxWidth: 'none',
              }}
              loading="lazy"
              width="1400"
              height="1050"
            />

            {/* Precision Architectural Grid Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              }}
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Elevation Level Lines */}
                <line x1="0" y1="28%" x2="100%" y2="28%" stroke="#00B7FD" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />
                <text x="16" y="27%" fill="#001858" fontSize="11" fontWeight="600" fontFamily="monospace">ROOF SLAB +6.80m</text>

                <line x1="0" y1="52%" x2="100%" y2="52%" stroke="#005FDD" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
                <text x="16" y="51%" fill="#001858" fontSize="11" fontWeight="600" fontFamily="monospace">FIRST FLOOR +3.60m</text>

                <line x1="0" y1="84%" x2="100%" y2="84%" stroke="#032E7D" strokeWidth="1.5" opacity="0.7" />
                <text x="16" y="83%" fill="#001858" fontSize="11" fontWeight="600" fontFamily="monospace">PLINTH LEVEL +0.60m</text>

                {/* Vertical Axis Columns */}
                <line x1="28%" y1="20%" x2="28%" y2="85%" stroke="#001858" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                <circle cx="28%" cy="18%" r="9" fill="#E3E7F2" stroke="#001858" strokeWidth="1" />
                <text x="28%" y="19.5%" textAnchor="middle" fill="#001858" fontSize="10" fontWeight="bold">A</text>

                <line x1="72%" y1="20%" x2="72%" y2="85%" stroke="#001858" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                <circle cx="72%" cy="18%" r="9" fill="#E3E7F2" stroke="#001858" strokeWidth="1" />
                <text x="72%" y="19.5%" textAnchor="middle" fill="#001858" fontSize="10" fontWeight="bold">B</text>
              </svg>
            </div>

            {/* Drawing Label */}
            <div className="absolute bottom-4 left-4 bg-dsr-civil/90 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-xs border border-dsr-cyan/40 font-mono">
              Elevation Drawing
            </div>
          </div>
        </div>

        {/* Draggable Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Divider Line */}
          <div className="w-0.5 h-full bg-dsr-cyan shadow-[0_0_8px_rgba(0,183,253,0.8)]" />

          {/* Central Architectural Grip */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-dsr-navy text-dsr-cyan border-2 border-dsr-cyan rounded-full flex items-center justify-center shadow-lg pointer-events-auto">
            <Sliders className="w-4 h-4 transform rotate-90" />
          </div>
        </div>
      </div>

      {/* Accessible Native Range Slider for Assistive Technologies */}
      <div className="mt-4 flex items-center space-x-3">
        <label htmlFor="elevation-range-input" className="text-xs font-medium text-dsr-navy/80 min-w-max">
          Comparison Ratio:
        </label>
        <input
          id="elevation-range-input"
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="w-full h-1.5 bg-dsr-silver rounded-lg appearance-none cursor-pointer accent-dsr-roof focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan"
          aria-label="Adjust percentage between architectural drawing and finished photograph"
        />
        <span className="text-xs font-mono font-semibold text-dsr-civil min-w-[3rem] text-right">
          {sliderPosition}%
        </span>
      </div>
    </div>
  );
};
