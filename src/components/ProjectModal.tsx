import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onNavigate: (index: number) => void;
  items: Array<{
    url: string;
    caption: string;
    alt: string;
  }>;
  projectTitle: string;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onNavigate,
  items,
  projectTitle,
  triggerRef,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Return focus on close
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else if (triggerRef && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onNavigate((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onNavigate, onClose]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} Gallery`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dsr-navy/95 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Top Header Bar */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20 text-white">
        <div>
          <p className="text-xs uppercase tracking-widest text-dsr-cyan font-mono">
            {projectTitle}
          </p>
          <p className="text-sm font-semibold">
            புகைப்படம் {currentIndex + 1} / {items.length}
          </p>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan"
          aria-label="Close project gallery"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative max-w-5xl w-full max-h-[82vh] flex flex-col items-center justify-center">
        
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="min-h-[44px] min-w-[44px] absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-dsr-navy/80 hover:bg-dsr-roof text-white border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="min-h-[44px] min-w-[44px] absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-dsr-navy/80 hover:bg-dsr-roof text-white border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Display Image with 220ms Crossfade */}
        <div className="w-full flex items-center justify-center overflow-hidden rounded-sm bg-black/40">
          <img
            key={currentItem.url}
            src={currentItem.url}
            alt={currentItem.alt}
            className="max-h-[68vh] w-auto max-w-full object-contain transition-opacity duration-[220ms] ease-in-out"
          />
        </div>

        {/* Caption Bar */}
        <div className="w-full mt-4 p-3 bg-dsr-civil/60 backdrop-blur-sm border border-dsr-cyan/30 rounded-xs text-center">
          <p className="text-sm text-dsr-silver leading-snug">
            {currentItem.caption}
          </p>
        </div>

      </div>
    </div>
  );
};
