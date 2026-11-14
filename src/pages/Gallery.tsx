import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Maximize2, Camera, ShieldCheck, HardHat, Compass } from 'lucide-react';
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

  // Modal lightbox state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  // Filtered photos based on active category
  const filteredPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeCategory);

  // Modal items mapped for ProjectModal
  const modalItems = filteredPhotos.map((p) => ({
    url: p.url,
    caption: `${p.title} — ${p.caption}`,
    alt: p.alt,
  }));

  const handleOpenModal = (index: number, e: React.MouseEvent<HTMLElement>) => {
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
                  onClick={() => setActiveCategory(cat.id)}
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
            3. INTERACTIVE 13-PHOTO GALLERY GRID
            ========================================================= */}
        <section className="py-12 sm:py-18 bg-dsr-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-dsr-civil/70">
              <div>
                <p className="text-xs font-mono text-dsr-cyan uppercase tracking-wider">
                  Verified Construction Photos
                </p>
                <p className="text-sm font-medium text-dsr-silver/90 mt-0.5">
                  காண்பிக்கப்படும் படங்கள்: {filteredPhotos.length} / {galleryPhotos.length}
                </p>
              </div>

              <span className="text-xs font-mono text-dsr-silver/70 hidden sm:inline">
                பெரிதாக்கிப் பார்க்க ஏதேனும் ஒரு புகைப்படத்தைக் கிளிக் செய்யவும்
              </span>
            </div>

            {/* Gallery Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPhotos.map((photo, index) => (
                <ScrollReveal
                  key={photo.id}
                  delay={Math.min(0.25, (index % 6) * 0.05)}
                  className="group bg-dsr-civil/30 border border-dsr-civil hover:border-dsr-cyan/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Photo Container */}
                  <div
                    className={`relative w-full overflow-hidden bg-black/60 cursor-pointer ${
                      photo.aspect === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'
                    }`}
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
                      height="1280"
                    />

                    {/* Gradient Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dsr-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 bg-dsr-navy/85 backdrop-blur-sm text-dsr-cyan text-xs font-mono px-2.5 py-1 rounded-xs border border-dsr-cyan/30 flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-dsr-cyan animate-pulse" />
                      <span>{photo.categoryLabel}</span>
                    </div>

                    {/* Floating Zoom Button */}
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
