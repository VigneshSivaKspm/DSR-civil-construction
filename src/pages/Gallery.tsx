import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Maximize2,
  Camera,
  ShieldCheck,
  HardHat,
  Compass,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  LayoutGrid,
  SlidersHorizontal,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ProjectModal } from '../components/ProjectModal';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';
import { useCursor } from '../context/CursorContext';
import { galleryPhotos, galleryCategories } from '../data/galleryData';
import { buildingIdeas } from '../data/projectsData';
import { siteConfig } from '../config/siteConfig';

export const Gallery: React.FC = () => {
  const { setCursorMode, setCursorLabel } = useCursor();

  // Category filter state
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // View mode state: 'slider' (default right-to-left slider) or 'grid'
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Drag interaction state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Modal lightbox state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  // Filtered photos based on active category
  const filteredPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeCategory);

  // Reset slider index when category changes
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Scroll to a specific card index smoothly
  const scrollToIndex = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>('[data-gallery-card]');
    if (cards[index]) {
      const card = cards[index];
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const offset = cardRect.left - containerRect.left + container.scrollLeft;
      container.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  }, []);

  // Slide right-to-left (next slide)
  const handleNext = useCallback(() => {
    if (!filteredPhotos.length) return;
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    scrollToIndex(nextIndex);
  }, [currentIndex, filteredPhotos.length, scrollToIndex]);

  // Slide left-to-right (previous slide)
  const handlePrev = useCallback(() => {
    if (!filteredPhotos.length) return;
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    scrollToIndex(prevIndex);
  }, [currentIndex, filteredPhotos.length, scrollToIndex]);

  // Auto-play interval for smooth right-to-left sliding
  useEffect(() => {
    if (!isAutoPlaying || isHovered || viewMode !== 'slider' || filteredPhotos.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, viewMode, handleNext, filteredPhotos.length]);

  // Track manual scroll to update current index indicator
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>('[data-gallery-card]');
    if (!cards.length) return;

    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const diff = Math.abs(card.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  // Keyboard navigation for slider
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  // Mouse drag support for smooth manual sliding
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 6) {
      hasDraggedRef.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
    setIsHovered(false);
  };

  // Modal items mapped for ProjectModal
  const modalItems = filteredPhotos.map((p) => ({
    url: p.url,
    caption: `${p.title} — ${p.caption}`,
    alt: p.alt,
  }));

  const handleOpenModal = (index: number, e: React.MouseEvent<HTMLElement>) => {
    if (hasDraggedRef.current) {
      // Prevent opening modal if user was dragging
      return;
    }
    triggerButtonRef.current = e.currentTarget as HTMLButtonElement;
    setModalIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <SeoHead
        title="Project Gallery & Construction Work | DSR Civil Constructions"
        description="Explore real on-site civil construction photos, engineering supervision, RCC structures, and practical building ideas from DSR Civil Constructions across Tamil Nadu."
      />

      <main id="main-content" className="w-full bg-dsr-navy text-white min-h-screen">
        
        {/* =========================================================
            1. HERO SECTION: Project & Field Execution Gallery
            ========================================================= */}
        <section className="pt-12 pb-14 lg:pt-18 lg:pb-20 border-b border-dsr-civil relative overflow-hidden">
          {/* Subtle architectural grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#51BDFB_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <ScrollReveal className="max-w-3xl mb-10">
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-dsr-cyan mb-3">
                <span className="w-8 h-0.5 bg-dsr-cyan" />
                <span>Verified Field Execution & Gallery</span>
              </div>

              <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                Inside the build.
              </h1>

              <p className="text-lg sm:text-xl text-dsr-silver/90 mt-4 leading-relaxed">
                நேரடிக் களக் கட்டுமானம், பொறியியல் மேற்பார்வை மற்றும் உறுதியான கட்டமைப்புப் பணிகள். தரைத்தளம் முதல் மேல்தளம் வரை சிவில் பொறியாளர்களின் நேரடிக் கண்காணிப்பில் உருவான நிஜப் புகைப்படங்கள்.
              </p>
            </ScrollReveal>

            {/* Credibility Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 sm:p-4 bg-dsr-civil/40 border border-dsr-civil/70 rounded-xs flex items-center space-x-3">
                <Camera className="w-5 h-5 text-dsr-cyan flex-shrink-0" />
                <div>
                  <p className="text-base sm:text-lg font-bold text-white font-mono leading-none">13+</p>
                  <p className="text-[11px] text-dsr-silver/80 font-medium mt-1">களப் புகைப்படங்கள்</p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-dsr-civil/40 border border-dsr-civil/70 rounded-xs flex items-center space-x-3">
                <HardHat className="w-5 h-5 text-dsr-gold flex-shrink-0" />
                <div>
                  <p className="text-base sm:text-lg font-bold text-white font-mono leading-none">100%</p>
                  <p className="text-[11px] text-dsr-silver/80 font-medium mt-1">நேரடிக் கண்காணிப்பு</p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-dsr-civil/40 border border-dsr-civil/70 rounded-xs flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-dsr-cyan flex-shrink-0" />
                <div>
                  <p className="text-base sm:text-lg font-bold text-white font-mono leading-none">Fe 550D</p>
                  <p className="text-[11px] text-dsr-silver/80 font-medium mt-1">தரமான TMT & கான்கிரீட்</p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-dsr-civil/40 border border-dsr-civil/70 rounded-xs flex items-center space-x-3">
                <Compass className="w-5 h-5 text-dsr-gold flex-shrink-0" />
                <div>
                  <p className="text-base sm:text-lg font-bold text-white font-mono leading-none">CAD & 3D</p>
                  <p className="text-[11px] text-dsr-silver/80 font-medium mt-1">கட்டமைப்பு வரைபடங்கள்</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================
            2. CATEGORY FILTER TABS
            ========================================================= */}
        <section className="sticky top-20 z-30 bg-dsr-navy/95 backdrop-blur-md border-b border-dsr-civil py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs font-mono font-semibold text-dsr-cyan uppercase tracking-wider hidden sm:inline mr-2">
                புகைப்படப் பிரிவுகள்:
              </span>
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`min-h-[40px] px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-sm transition-all whitespace-nowrap flex items-center ${
                    activeCategory === cat.id
                      ? 'bg-dsr-gold text-dsr-navy shadow-xs font-bold'
                      : 'bg-dsr-civil/60 text-white hover:bg-dsr-civil border border-dsr-civil'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================
            3. INTERACTIVE RIGHT-TO-LEFT SLIDER GALLERY
            ========================================================= */}
        <section className="py-10 sm:py-16 bg-dsr-navy overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Controls Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-dsr-civil/70 gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-dsr-cyan animate-pulse" />
                  <p className="text-xs font-mono text-dsr-cyan uppercase tracking-wider">
                    Verified Field Execution • வலமிருந்து இடமாக நகரும் ஸ்லைடர்
                  </p>
                </div>
                <h2 className="font-headline font-bold text-2xl sm:text-3xl text-white mt-1">
                  Construction Work Gallery ({filteredPhotos.length})
                </h2>
                <p className="text-xs sm:text-sm text-dsr-silver/85 mt-0.5">
                  புகைப்படங்கள் வலமிருந்து இடமாகச் சுழல்கின்றன. ஏதேனும் ஒரு படத்தைக் கிளிக் செய்து பெரிதாக்கலாம்.
                </p>
              </div>

              {/* Slider Action Controls */}
              <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
                {/* Slide Counter Badge */}
                <div className="bg-dsr-civil/70 border border-dsr-civil px-3 py-1.5 rounded-xs text-xs font-mono text-dsr-cyan font-bold tracking-wider flex items-center space-x-1">
                  <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-dsr-silver/40">/</span>
                  <span className="text-dsr-silver/80">{String(filteredPhotos.length).padStart(2, '0')}</span>
                </div>

                {/* Slider Nav Buttons (Prev, Auto-play toggle, Next) */}
                {viewMode === 'slider' && (
                  <div className="flex items-center space-x-1 bg-dsr-civil/50 p-1 rounded-xs border border-dsr-civil">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="min-h-[36px] min-w-[36px] p-2 bg-dsr-navy/80 hover:bg-dsr-roof text-white rounded-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan flex items-center justify-center"
                      title="Previous Photo (முந்தைய படம்)"
                      aria-label="Previous Photo"
                    >
                      <ChevronLeft className="w-4 h-4 text-dsr-cyan hover:text-white" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className={`min-h-[36px] px-2.5 py-1 rounded-xs transition-colors flex items-center space-x-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan ${
                        isAutoPlaying
                          ? 'bg-dsr-navy/80 text-dsr-cyan hover:bg-dsr-roof hover:text-white'
                          : 'bg-dsr-gold text-dsr-navy font-bold'
                      }`}
                      title={isAutoPlaying ? 'Pause Auto Slider' : 'Play Auto Slider'}
                      aria-label={isAutoPlaying ? 'Pause Auto Slider' : 'Play Auto Slider'}
                    >
                      {isAutoPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-mono uppercase hidden sm:inline">Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-mono uppercase hidden sm:inline">Play</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="min-h-[36px] min-w-[36px] p-2 bg-dsr-navy/80 hover:bg-dsr-roof text-white rounded-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan flex items-center justify-center"
                      title="Next Photo (அடுத்த படம் - Slide Right to Left)"
                      aria-label="Next Photo"
                    >
                      <ChevronRight className="w-4 h-4 text-dsr-cyan hover:text-white" />
                    </button>
                  </div>
                )}

                {/* View Mode Toggle: Slider vs Grid */}
                <div className="flex items-center space-x-1 bg-dsr-civil/50 p-1 rounded-xs border border-dsr-civil">
                  <button
                    type="button"
                    onClick={() => setViewMode('slider')}
                    className={`min-h-[36px] px-3 py-1 text-xs font-mono font-medium rounded-xs flex items-center space-x-1.5 transition-colors ${
                      viewMode === 'slider'
                        ? 'bg-dsr-cyan text-dsr-navy font-bold shadow-xs'
                        : 'text-dsr-silver/80 hover:text-white'
                    }`}
                    aria-label="Slider View (Right to Left)"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Slider View</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={`min-h-[36px] px-3 py-1 text-xs font-mono font-medium rounded-xs flex items-center space-x-1.5 transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-dsr-cyan text-dsr-navy font-bold shadow-xs'
                        : 'text-dsr-silver/80 hover:text-white'
                    }`}
                    aria-label="Grid View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Grid View</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------
                MODE A: RIGHT-TO-LEFT HORIZONTAL SLIDER
                --------------------------------------------------------- */}
            {viewMode === 'slider' ? (
              <div className="relative">
                {/* Desktop Left / Right Direct Floating Arrow Buttons */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="min-h-[44px] min-w-[44px] absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-dsr-navy/95 hover:bg-dsr-roof text-dsr-cyan hover:text-white border border-dsr-cyan/40 shadow-2xl backdrop-blur-md transition-all hidden md:flex items-center justify-center hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="min-h-[44px] min-w-[44px] absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-dsr-navy/95 hover:bg-dsr-roof text-dsr-cyan hover:text-white border border-dsr-cyan/40 shadow-2xl backdrop-blur-md transition-all hidden md:flex items-center justify-center hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan"
                  aria-label="Next slide (Right to Left)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Horizontal Slider Scroll Track */}
                <div
                  ref={sliderRef}
                  onScroll={handleScroll}
                  onKeyDown={handleKeyDown}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUpOrLeave}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseUpOrLeave}
                  tabIndex={0}
                  role="region"
                  aria-label="Right-to-left photo gallery slider"
                  className="flex space-x-5 sm:space-x-7 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1 cursor-grab active:cursor-grabbing select-none"
                >
                  {filteredPhotos.map((photo, index) => {
                    const isActive = index === currentIndex;
                    return (
                      <article
                        key={photo.id}
                        data-gallery-card
                        className={`w-[290px] xs:w-[320px] sm:w-[380px] md:w-[410px] shrink-0 snap-start bg-dsr-civil/35 rounded-sm border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl ${
                          isActive
                            ? 'border-dsr-cyan ring-1 ring-dsr-cyan/50 shadow-dsr-cyan/15 -translate-y-1'
                            : 'border-dsr-civil/80 hover:border-dsr-cyan/50 hover:bg-dsr-civil/45 hover:-translate-y-0.5'
                        }`}
                      >
                        {/* Photo Container */}
                        <div
                          className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-black/60 cursor-pointer group"
                          onClick={(e) => handleOpenModal(index, e)}
                          onMouseEnter={() => {
                            setCursorMode('view');
                            setCursorLabel('ZOOM');
                          }}
                          onMouseLeave={() => {
                            setCursorMode('default');
                            setCursorLabel(undefined);
                          }}
                        >
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                            loading={index < 4 ? 'eager' : 'lazy'}
                            width="1024"
                            height="768"
                          />

                          {/* Gradient Vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-dsr-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3 bg-dsr-navy/85 backdrop-blur-sm text-dsr-cyan text-xs font-mono px-2.5 py-1 rounded-xs border border-dsr-cyan/30 flex items-center space-x-1.5 pointer-events-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-dsr-cyan animate-pulse" />
                            <span>{photo.categoryLabel}</span>
                          </div>

                          {/* Zoom Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenModal(index, e);
                            }}
                            className="min-h-[40px] min-w-[40px] absolute bottom-3 right-3 p-2 bg-dsr-navy/85 hover:bg-dsr-roof text-dsr-cyan hover:text-white border border-dsr-cyan/40 rounded-sm backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan shadow-md"
                            aria-label={`View photo ${photo.title} full screen`}
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Title & Caption */}
                        <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                          <div>
                            <p className="text-[11px] font-mono text-dsr-silver/70 uppercase tracking-wider">
                              {photo.subtitle}
                            </p>
                            <h3 className="font-headline font-bold text-lg sm:text-xl text-white hover:text-dsr-cyan transition-colors mt-0.5 leading-snug">
                              {photo.title}
                            </h3>
                            <p className="text-xs text-dsr-silver/85 leading-relaxed pt-2 mt-2 border-t border-dsr-civil/60">
                              {photo.caption}
                            </p>
                          </div>

                          {/* Action Button */}
                          <button
                            type="button"
                            onClick={(e) => handleOpenModal(index, e)}
                            className="w-full min-h-[38px] text-xs font-mono uppercase tracking-wider text-dsr-cyan hover:text-white bg-dsr-navy/70 hover:bg-dsr-civil border border-dsr-cyan/30 rounded-xs transition-colors py-2 flex items-center justify-center space-x-2"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>பெரிதாக்கிப் பார்க்க (View Photo)</span>
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Bottom Progress Bar & Jump Dots */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-dsr-civil/50">
                  {/* Progress Line */}
                  <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <span className="text-[11px] font-mono text-dsr-silver/70">PROGRESS</span>
                    <div className="w-full sm:w-56 h-1.5 bg-dsr-civil/80 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-dsr-cyan via-dsr-glass to-dsr-gold transition-all duration-300 ease-out"
                        style={{
                          width: `${((currentIndex + 1) / filteredPhotos.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Dot jump buttons */}
                  <div className="flex items-center space-x-1.5 overflow-x-auto max-w-full py-1">
                    {filteredPhotos.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => scrollToIndex(i)}
                        className={`transition-all rounded-full ${
                          i === currentIndex
                            ? 'w-6 h-2 bg-dsr-cyan'
                            : 'w-2 h-2 bg-dsr-civil hover:bg-dsr-silver/60'
                        }`}
                        aria-label={`Jump to photo ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* RTL Helper Tag */}
                  <div className="text-[11px] font-mono text-dsr-silver/70 tracking-wider flex items-center space-x-1.5">
                    <span>← வலமிருந்து இடமாக சுழலும் (Slide Right to Left)</span>
                  </div>
                </div>
              </div>
            ) : (
              /* ---------------------------------------------------------
                  MODE B: CLASSIC MULTI-COLUMN GRID VIEW
                  --------------------------------------------------------- */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredPhotos.map((photo, index) => (
                  <ScrollReveal
                    key={photo.id}
                    delay={Math.min(0.25, (index % 6) * 0.05)}
                    className="group bg-dsr-civil/30 border border-dsr-civil hover:border-dsr-cyan/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Photo Container */}
                    <div
                      className="relative w-full aspect-[4/3] overflow-hidden bg-black/60 cursor-pointer"
                      onMouseEnter={() => {
                        setCursorMode('view');
                        setCursorLabel('ZOOM');
                      }}
                      onMouseLeave={() => {
                        setCursorMode('default');
                        setCursorLabel(undefined);
                      }}
                      onClick={(e) => handleOpenModal(index, e)}
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                        loading={index < 4 ? 'eager' : 'lazy'}
                        width="1024"
                        height="768"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-dsr-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      <div className="absolute top-3 left-3 bg-dsr-navy/85 backdrop-blur-sm text-dsr-cyan text-xs font-mono px-2.5 py-1 rounded-xs border border-dsr-cyan/30 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-dsr-cyan animate-pulse" />
                        <span>{photo.categoryLabel}</span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(index, e);
                        }}
                        className="min-h-[40px] min-w-[40px] absolute bottom-3 right-3 p-2 bg-dsr-navy/85 hover:bg-dsr-roof text-dsr-cyan hover:text-white border border-dsr-cyan/40 rounded-sm backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan shadow-md"
                        aria-label={`View photo ${photo.title} full screen`}
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Caption & Title Details */}
                    <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-[11px] font-mono text-dsr-silver/70 uppercase tracking-wider">
                          {photo.subtitle}
                        </p>
                        <h3 className="font-headline font-bold text-lg sm:text-xl text-white group-hover:text-dsr-cyan transition-colors mt-0.5 leading-snug">
                          {photo.title}
                        </h3>
                      </div>

                      <p className="text-xs text-dsr-silver/85 leading-relaxed pt-2 border-t border-dsr-civil/60">
                        {photo.caption}
                      </p>
                    </div>

                    {/* Quick Action Footer */}
                    <div className="p-5 pt-0">
                      <button
                        type="button"
                        onClick={(e) => handleOpenModal(index, e)}
                        className="w-full min-h-[38px] text-xs font-mono uppercase tracking-wider text-dsr-cyan hover:text-white bg-dsr-navy/60 hover:bg-dsr-civil/80 border border-dsr-cyan/30 rounded-xs transition-colors py-2 flex items-center justify-center space-x-2"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>பெரிதாக்கிப் பார்க்க (View Photo)</span>
                      </button>
                    </div>

                  </ScrollReveal>
                ))}
              </div>
            )}

          </div>
        </section>


        {/* =========================================================
            4. BUILDING IDEAS SECTION: #ideas
            ========================================================= */}
        <section
          id="ideas"
          className="py-16 sm:py-24 bg-dsr-navy border-t border-dsr-civil relative"
          aria-labelledby="ideas-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal className="max-w-3xl mb-14">
              <span className="text-xs uppercase tracking-widest text-dsr-gold font-mono font-semibold">
                Design Studies & Practical Solutions
              </span>
              <h2
                id="ideas-heading"
                className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-1 mb-4"
              >
                Building ideas
              </h2>
              <p className="text-base sm:text-lg text-dsr-silver/90 leading-relaxed">
                நிழல் தரும் முகப்புகள், இயற்கை வெளிச்சம் மற்றும் வாடிக்கையாளர் நுழைவுப் பாதைகளை மேம்படுத்த உதவும் நடைமுறைத் திட்டங்கள்.
              </p>
            </ScrollReveal>

            {/* Three Labelled Concepts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {buildingIdeas.map((concept, idx) => (
                <ScrollReveal
                  key={concept.id}
                  delay={idx * 0.1}
                  className="group bg-dsr-civil/30 border border-dsr-civil hover:border-dsr-cyan/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Visual with Visible Concept Tag */}
                    <div
                      className="relative aspect-[16/10] w-full bg-black/50 overflow-hidden cursor-pointer"
                      onMouseEnter={() => {
                        setCursorMode('view');
                        setCursorLabel('STUDY');
                      }}
                      onMouseLeave={() => {
                        setCursorMode('default');
                        setCursorLabel(undefined);
                      }}
                    >
                      <img
                        src={concept.image}
                        alt={concept.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        width="1200"
                        height="800"
                      />
                      <div className="absolute top-3 left-3 bg-dsr-navy/85 backdrop-blur-sm text-dsr-cyan text-xs font-mono px-2.5 py-1 rounded-xs border border-dsr-cyan/30">
                        Concept Study
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <p className="text-xs font-mono text-dsr-silver/70 uppercase tracking-wider">
                          {concept.subtitle}
                        </p>
                        <h3 className="font-headline font-bold text-2xl text-white group-hover:text-dsr-cyan transition-colors mt-0.5">
                          {concept.title}
                        </h3>
                      </div>

                      {/* Visible Design Decision Explanation */}
                      <div className="p-3.5 bg-dsr-navy/80 rounded-xs border-l-2 border-dsr-cyan space-y-1">
                        <p className="text-xs font-semibold text-dsr-cyan uppercase tracking-wider">
                          வெளிப்படையான வடிவமைப்புத் திட்டம்
                        </p>
                        <p className="text-sm font-semibold text-white leading-snug">
                          “{concept.designDecision}”
                        </p>
                      </div>

                      <p className="text-xs text-dsr-silver/80 leading-relaxed pt-1">
                        {concept.explanation}
                      </p>
                    </div>
                  </div>

                  {/* Pre-filled Link to Contact */}
                  <div className="p-6 pt-0">
                    <Link
                      to={`/contact?topic=${encodeURIComponent(concept.enquiryTopic)}`}
                      className="min-h-[44px] w-full inline-flex items-center justify-between px-4 py-2.5 bg-dsr-civil hover:bg-dsr-roof text-white font-semibold text-xs tracking-wider uppercase rounded-xs transition-colors border border-dsr-roof hover:border-dsr-cyan/40"
                    >
                      <span>உங்கள் மனையில் இத்திட்டத்தை அமைத்திட</span>
                      <ArrowUpRight className="w-4 h-4 text-dsr-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================
            5. CLOSING CTA: Discuss Your Build
            ========================================================= */}
        <section className="py-16 sm:py-20 bg-dsr-civil/40 border-t border-dsr-civil text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <ScrollReveal className="space-y-4">
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white">
                Have a plot or commercial site in mind?
              </h2>
              <p className="text-base sm:text-lg text-dsr-silver/90 max-w-2xl mx-auto leading-relaxed">
                எங்கள் சிவில் பொறியாளர்களைக் கொண்டு உங்கள் மனையை ஆய்வு செய்து, துல்லியமான திட்ட வரைபடம் மற்றும் மதிப்பீட்டைப் பெறுங்கள்.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Magnetic strength={8}>
                  <Link
                    to="/contact"
                    className="min-h-[50px] inline-flex items-center justify-center px-8 py-3.5 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-base tracking-wide rounded-sm shadow-sm transition-all hover:shadow-md"
                  >
                    <span>{siteConfig.primaryAction}</span>
                    <ArrowUpRight className="ml-2 w-5 h-5 text-dsr-navy" />
                  </Link>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      {/* Keyboard-Accessible Full-Screen Lightbox Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentIndex={modalIndex}
        onNavigate={(newIdx) => setModalIndex(newIdx)}
        items={modalItems}
        projectTitle="DSR Civil Constructions Field Execution"
        triggerRef={triggerButtonRef}
      />
    </>
  );
};
