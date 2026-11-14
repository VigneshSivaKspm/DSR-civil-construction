import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Maximize2, MapPin, CheckCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ProjectModal } from '../components/ProjectModal';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';
import { useCursor } from '../context/CursorContext';
import { verifiedProjects, buildingIdeas } from '../data/projectsData';

export const Projects: React.FC = () => {
  const { setCursorMode, setCursorLabel } = useCursor();

  // Modal gallery state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  // Active verified project
  const featuredProject = verifiedProjects[0];

  const handleOpenGallery = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerButtonRef.current = e.currentTarget;
    setModalIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <SeoHead
        title="Inside the build | Projects & Concepts"
        description="Explore verified civil construction execution and practical architectural building ideas from DSR Civil Constructions across Tamil Nadu."
      />

      <main id="main-content" className="w-full bg-dsr-navy text-white min-h-screen">
        
        {/* =========================================================
            1. RICHEST NAVY HERO & VERIFIED PROJECT LEAD
            ========================================================= */}
        <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-dsr-civil relative overflow-hidden">
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#51BDFB_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Page Header */}
            <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-dsr-cyan mb-3">
                <span className="w-8 h-0.5 bg-dsr-cyan" />
                <span>Verified Execution & Studies</span>
              </div>

              {/* Single H1 for Projects */}
              <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                Inside the build.
              </h1>

              <p className="text-lg sm:text-xl text-dsr-silver/90 mt-4 leading-relaxed">
                ஒவ்வொரு திட்டத்தின் பின்னணியிலும் உள்ள கட்டமைப்பு நுணுக்கங்கள், கட்டுமானப் பொருட்கள் மற்றும் நேரடிக் கட்டுமான வரிசைகளை உற்றுநோக்குங்கள்.
              </p>
            </ScrollReveal>

            {/* Featured Lead Project: Verified Details & Heroic Large Photography */}
            {featuredProject && (
              <ScrollReveal delay={0.1} className="bg-dsr-civil/40 border border-dsr-civil rounded-sm overflow-hidden shadow-2xl backdrop-blur-xs">
                
                {/* Large Photography Hero Frame */}
                <div
                  className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-black/60 overflow-hidden group cursor-pointer"
                  onMouseEnter={() => {
                    setCursorMode('view');
                    setCursorLabel('VIEW');
                  }}
                  onMouseLeave={() => {
                    setCursorMode('default');
                    setCursorLabel(undefined);
                  }}
                  onClick={(e) => handleOpenGallery(0, e as any)}
                >
                  <img
                    src={featuredProject.heroImage}
                    alt={featuredProject.gallery[0]?.alt || featuredProject.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                    loading="eager"
                    width="1600"
                    height="800"
                  />

                  {/* Expand Gallery Action Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenGallery(0, e);
                    }}
                    className="min-h-[44px] absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center space-x-2 px-4 py-2.5 bg-dsr-navy/85 hover:bg-dsr-roof text-white border border-dsr-cyan/40 rounded-sm text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan shadow-lg"
                    aria-label={`Open photo gallery for ${featuredProject.title}`}
                  >
                    <Maximize2 className="w-4 h-4 text-dsr-cyan" />
                    <span>புகைப்படத் தொகுப்பைப் பார்க்க ({featuredProject.gallery.length} படங்கள்)</span>
                  </button>

                  {/* Verified Project Badge */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center space-x-2 bg-dsr-navy/80 backdrop-blur-md px-3 py-1.5 rounded-xs border border-white/20">
                    <CheckCircle className="w-4 h-4 text-dsr-cyan" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Verified Client Project
                    </span>
                  </div>
                </div>

                {/* Verified Details Matrix: Type, Location, Stage, Scope */}
                <div className="p-6 sm:p-10 space-y-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-dsr-civil pb-6">
                    <div>
                      <h2 className="font-headline font-bold text-2xl sm:text-3xl text-white">
                        {featuredProject.title}
                      </h2>
                      <p className="text-sm text-dsr-silver/90 mt-1 max-w-2xl leading-relaxed">
                        {featuredProject.description}
                      </p>
                    </div>

                    <Magnetic strength={8}>
                      <Link
                        to="/contact?topic=A%20new%20home"
                        className="min-h-[46px] inline-flex items-center justify-center px-6 py-2.5 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-sm rounded-sm transition-all shadow-sm hover:shadow-md self-start lg:self-center flex-shrink-0"
                      >
                        <span>இதேபோன்ற இல்லம் பற்றிக் கலந்துரையாட</span>
                        <ArrowUpRight className="ml-1.5 w-4 h-4 text-dsr-navy" />
                      </Link>
                    </Magnetic>
                  </div>

                  {/* 4-Item Data Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    <div className="p-4 bg-dsr-navy/60 border border-dsr-civil/60 rounded-xs transition-colors hover:border-dsr-cyan/40">
                      <p className="text-[11px] font-mono text-dsr-cyan uppercase tracking-wider">திட்ட வகை</p>
                      <p className="text-sm font-semibold text-white mt-1">{featuredProject.type}</p>
                    </div>

                    <div className="p-4 bg-dsr-navy/60 border border-dsr-civil/60 rounded-xs transition-colors hover:border-dsr-cyan/40">
                      <p className="text-[11px] font-mono text-dsr-cyan uppercase tracking-wider">அமைவிடம்</p>
                      <p className="text-sm font-semibold text-white mt-1 flex items-center">
                        <MapPin className="w-3.5 h-3.5 text-dsr-roof mr-1 inline" />
                        {featuredProject.location}
                      </p>
                    </div>

                    <div className="p-4 bg-dsr-navy/60 border border-dsr-civil/60 rounded-xs transition-colors hover:border-dsr-gold/40">
                      <p className="text-[11px] font-mono text-dsr-gold uppercase tracking-wider">கட்டுமான நிலை</p>
                      <p className="text-sm font-semibold text-white mt-1">{featuredProject.stage}</p>
                    </div>

                    <div className="p-4 bg-dsr-navy/60 border border-dsr-civil/60 rounded-xs transition-colors hover:border-dsr-cyan/40">
                      <p className="text-[11px] font-mono text-dsr-cyan uppercase tracking-wider">கட்டுமானப் பணிகள்</p>
                      <p className="text-xs font-medium text-dsr-silver/90 mt-1 leading-snug">{featuredProject.scope}</p>
                    </div>

                  </div>

                  {/* Interactive Thumbnails for Gallery Access */}
                  <div className="pt-2">
                    <p className="text-xs font-mono text-dsr-silver/70 mb-3 uppercase tracking-wider">
                      பெரிதாக்கிப் பார்க்க ஏதேனும் ஒரு புகைப்படத்தைக் கிளிக் செய்யவும்:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {featuredProject.gallery.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={(e) => handleOpenGallery(pIdx, e)}
                          onMouseEnter={() => {
                            setCursorMode('view');
                            setCursorLabel('ZOOM');
                          }}
                          onMouseLeave={() => {
                            setCursorMode('default');
                            setCursorLabel(undefined);
                          }}
                          className="min-h-[44px] group relative aspect-[4/3] rounded-xs overflow-hidden border border-dsr-civil hover:border-dsr-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan transition-all text-left"
                        >
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-dsr-navy/40 group-hover:bg-transparent transition-colors" />
                          <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] text-white font-mono bg-black/70 px-1 py-0.5 rounded-xs truncate">
                            {photo.caption}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

              </ScrollReveal>
            )}

          </div>
        </section>


        {/* =========================================================
            2. BUILDING IDEAS SECTION: #ideas
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

            {/* Three Labelled Concepts with Staggered Scroll Reveal */}
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

                      {/* Required Visible Design Decision Explanation */}
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

      </main>

      {/* Keyboard-Accessible Modal Gallery */}
      {featuredProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentIndex={modalIndex}
          onNavigate={(newIdx) => setModalIndex(newIdx)}
          items={featuredProject.gallery}
          projectTitle={featuredProject.title}
          triggerRef={triggerButtonRef}
        />
      )}
    </>
  );
};
