import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Home as HomeIcon, Building2, Wrench, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SeoHead } from '../components/SeoHead';
import { RooflineMotif } from '../components/RooflineMotif';
import { ElevationComparison } from '../components/ElevationComparison';
import { ProcessSequence } from '../components/ProcessSequence';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';
import { siteConfig } from '../config/siteConfig';
import { EASE_ARCHITECTURAL } from '../motion/motionTokens';

export const Home: React.FC = () => {
  return (
    <>
      <SeoHead
        title="What will you build on your plot?"
        description="Tell us about your land, the space you have in mind and the decisions you'd like help making. DSR Civil Constructions crafts enduring residential and commercial structures."
      />

      <main id="main-content" className="w-full">
        {/* =========================================================
            1. HERO SECTION: Architectural Composition (12-column Grid)
            ========================================================= */}
        <section
          className="relative bg-gradient-to-b from-dsr-white via-dsr-white to-dsr-ice-wash pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-dsr-silver"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left 5 Columns: Headline, Supporting Copy, Action Controls */}
              <div className="lg:col-span-5 space-y-6 sm:space-y-8 z-10">
                
                {/* Architectural Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE_ARCHITECTURAL }}
                  className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-dsr-silver rounded-xs shadow-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-dsr-gold animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-dsr-civil font-headline">
                    Site Consultations & Civil Construction
                  </span>
                </motion.div>

                {/* Primary Hero Headline (Barlow Condensed) */}
                <motion.h1
                  id="hero-heading"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08, ease: EASE_ARCHITECTURAL }}
                  className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-dsr-navy tracking-tight leading-[1.05]"
                >
                  What will you build on your plot?
                </motion.h1>

                {/* Supporting Copy (Inter >= 16px) */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: EASE_ARCHITECTURAL }}
                  className="text-base sm:text-lg text-dsr-navy/85 max-w-xl leading-relaxed"
                >
                  Tell us about your land, the space you have in mind and the decisions you’d like help making.
                </motion.p>

                {/* Primary CTA & Secondary Link */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.28, ease: EASE_ARCHITECTURAL }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
                >
                  <Magnetic strength={7}>
                    <Link
                      to="/contact"
                      className="min-h-[50px] w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-base tracking-wide rounded-sm shadow-sm hover:shadow transition-all duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-navy active:scale-98"
                    >
                      <span>{siteConfig.primaryAction}</span>
                      <ArrowUpRight className="ml-2 w-5 h-5 text-dsr-navy" />
                    </Link>
                  </Magnetic>

                  <Link
                    to="/projects#ideas"
                    className="min-h-[50px] inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-dsr-ice-wash text-dsr-roof hover:text-dsr-civil border border-dsr-roof/40 font-semibold text-base rounded-sm transition-all duration-180 hover:border-dsr-roof"
                  >
                    <span>Explore building ideas</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>

              </div>

              {/* Right 7 Columns: Striking Modern Indian Residence Photograph */}
              <div className="lg:col-span-7 relative">
                
                {/* Decorative Architectural Roofline Drawn over 650ms */}
                <div className="hidden lg:block absolute -top-8 -left-12 right-0 z-20 pointer-events-none">
                  <RooflineMotif variant="hero" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.985, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.15, ease: EASE_ARCHITECTURAL }}
                  className="relative overflow-hidden rounded-sm border border-dsr-silver shadow-lg bg-dsr-silver/40 aspect-[4/3] sm:aspect-[16/11]"
                >
                  <img
                    src="/images/architecture/hero-home.webp"
                    alt="Modern contemporary Indian residence with cantilevered concrete sunshades, verandahs and shaded balconies against a clear blue sky"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                    loading="eager"
                    width="1600"
                    height="1067"
                  />

                  {/* Architectural Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dsr-navy/90 via-dsr-navy/60 to-transparent p-4 sm:p-6 text-white flex items-end justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-dsr-cyan">
                        Passive Climate Response
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-dsr-silver">
                        Cantilevered concrete sunshade meeting shaded garden verandah
                      </p>
                    </div>
                    <span className="hidden sm:inline-block text-[11px] font-mono text-dsr-silver/70 border border-dsr-silver/30 px-2 py-0.5 rounded-xs">
                      Tamil Nadu Plot Study
                    </span>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            2. SECTION: “What are you planning?” (Editorial Rows)
            ========================================================= */}
        <section
          className="py-16 sm:py-24 bg-dsr-ice-wash/70 border-b border-dsr-silver relative"
          aria-labelledby="planning-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs uppercase tracking-widest text-dsr-civil font-semibold font-mono">
                Enquiry Topics & Civil Briefs
              </span>
              <h2
                id="planning-heading"
                className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-dsr-navy tracking-tight mt-1 mb-4"
              >
                What are you planning?
              </h2>
              <p className="text-base sm:text-lg text-dsr-navy/80 leading-relaxed">
                Choose the focus that matches your plot. Each topic carries directly into your first consultation.
              </p>
            </ScrollReveal>

            {/* Three Editorial Rows */}
            <div className="space-y-4">
              
              {/* Row 1: A new home */}
              <ScrollReveal delay={0.05}>
                <div className="group bg-white border border-dsr-silver hover:border-dsr-roof rounded-sm p-6 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-4 flex items-start space-x-4">
                      <div className="p-3 bg-dsr-ice-wash text-dsr-roof group-hover:bg-dsr-roof group-hover:text-white rounded-xs transition-colors duration-200">
                        <HomeIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-dsr-cyan">01</span>
                        <h3 className="font-headline font-bold text-2xl sm:text-3xl text-dsr-navy group-hover:text-dsr-roof transition-colors">
                          A new home
                        </h3>
                        <p className="text-xs text-dsr-navy/60 font-medium">Independent villa or multi-level family build</p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-1.5">
                      <p className="text-base font-semibold text-dsr-civil">
                        “Who needs a room on the ground floor?”
                      </p>
                      <p className="text-sm text-dsr-navy/80 leading-relaxed">
                        Material detail: Cantilevered RCC sunshade overhangs, floor-to-ceiling cross-ventilation, and shaded verandah thresholds.
                      </p>
                    </div>

                    <div className="lg:col-span-3 flex lg:justify-end">
                      <Link
                        to="/contact?topic=A%20new%20home"
                        className="min-h-[44px] inline-flex items-center space-x-2 text-sm font-semibold text-dsr-roof hover:text-dsr-civil group-hover:translate-x-1.5 transition-all py-2"
                      >
                        <span>Discuss a new home</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Row 2: A space for business */}
              <ScrollReveal delay={0.12}>
                <div className="group bg-white border border-dsr-silver hover:border-dsr-roof rounded-sm p-6 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-4 flex items-start space-x-4">
                      <div className="p-3 bg-dsr-ice-wash text-dsr-roof group-hover:bg-dsr-roof group-hover:text-white rounded-xs transition-colors duration-200">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-dsr-cyan">02</span>
                        <h3 className="font-headline font-bold text-2xl sm:text-3xl text-dsr-navy group-hover:text-dsr-roof transition-colors">
                          A space for business
                        </h3>
                        <p className="text-xs text-dsr-navy/60 font-medium">Commercial floor plates & retail street presence</p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-1.5">
                      <p className="text-base font-semibold text-dsr-civil">
                        “How will customers move through the entrance?”
                      </p>
                      <p className="text-sm text-dsr-navy/80 leading-relaxed">
                        Material detail: Wide column-free interior spans, recessed customer pause zones, and heavy-duty structural flooring.
                      </p>
                    </div>

                    <div className="lg:col-span-3 flex lg:justify-end">
                      <Link
                        to="/contact?topic=A%20space%20for%20business"
                        className="min-h-[44px] inline-flex items-center space-x-2 text-sm font-semibold text-dsr-roof hover:text-dsr-civil group-hover:translate-x-1.5 transition-all py-2"
                      >
                        <span>Discuss commercial space</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Row 3: Changes to an existing building */}
              <ScrollReveal delay={0.18}>
                <div className="group bg-white border border-dsr-silver hover:border-dsr-roof rounded-sm p-6 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-4 flex items-start space-x-4">
                      <div className="p-3 bg-dsr-ice-wash text-dsr-roof group-hover:bg-dsr-roof group-hover:text-white rounded-xs transition-colors duration-200">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-dsr-cyan">03</span>
                        <h3 className="font-headline font-bold text-2xl sm:text-3xl text-dsr-navy group-hover:text-dsr-roof transition-colors">
                          Changes to an existing building
                        </h3>
                        <p className="text-xs text-dsr-navy/60 font-medium">Vertical expansions & structural alterations</p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-1.5">
                      <p className="text-base font-semibold text-dsr-civil">
                        “Which part of the building needs to work better?”
                      </p>
                      <p className="text-sm text-dsr-navy/80 leading-relaxed">
                        Material detail: Load-bearing integrity checks, water-sealed old-to-new slab junctions, and tie-beam reinforcement.
                      </p>
                    </div>

                    <div className="lg:col-span-3 flex lg:justify-end">
                      <Link
                        to="/contact?topic=Changes%20to%20an%20existing%20building"
                        className="min-h-[44px] inline-flex items-center space-x-2 text-sm font-semibold text-dsr-roof hover:text-dsr-civil group-hover:translate-x-1.5 transition-all py-2"
                      >
                        <span>Discuss renovations</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* =========================================================
            3. FEATURE SECTION: “One house, two views.” (Comparison)
            ========================================================= */}
        <section
          className="py-16 sm:py-24 bg-dsr-white border-b border-dsr-silver"
          aria-labelledby="comparison-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Explanatory Column */}
              <ScrollReveal className="lg:col-span-4 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-dsr-cyan font-semibold font-mono">
                    Architectural Demonstration
                  </span>
                  <h2
                    id="comparison-heading"
                    className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-dsr-navy tracking-tight mt-1 mb-4"
                  >
                    One house, two views.
                  </h2>
                </div>

                <p className="text-base text-dsr-navy/85 leading-relaxed">
                  Every solid build starts as an architectural elevation before becoming a concrete structure. See how rooflines, shading projections and balcony levels translate directly from technical line drawings to the finished building.
                </p>

                <div className="p-4 bg-dsr-ice-wash border-l-4 border-dsr-roof rounded-xs space-y-2">
                  <p className="text-xs uppercase tracking-wider font-bold text-dsr-civil">
                    Structural Alignment
                  </p>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    Notice how the cantilevered upper roof trim and window mullions line up precisely between the CAD blueprint and the finished residence.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/projects#ideas"
                    className="inline-flex items-center text-sm font-semibold text-dsr-roof hover:text-dsr-civil py-1 group"
                  >
                    <span>View more architectural concepts</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Right Interactive Comparison Stage */}
              <ScrollReveal delay={0.1} className="lg:col-span-8">
                <ElevationComparison />
              </ScrollReveal>

            </div>
          </div>
        </section>


        {/* =========================================================
            4. PROCESS SECTION: “What happens before the first brick?”
            ========================================================= */}
        <section
          className="py-20 lg:py-28 bg-gradient-to-br from-dsr-navy via-dsr-civil to-dsr-navy text-white relative overflow-hidden"
          aria-labelledby="process-heading"
        >
          {/* Subtle architectural grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#51BDFB_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <ScrollReveal className="max-w-3xl mb-14 sm:mb-20">
              <span className="text-xs uppercase tracking-widest text-dsr-cyan font-semibold font-mono">
                Project Preparation
              </span>
              <h2
                id="process-heading"
                className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-1 mb-4"
              >
                What happens before the first brick?
              </h2>
              <p className="text-base sm:text-lg text-dsr-silver/90 leading-relaxed">
                Before excavation equipment arrives on your land, four deliberate decisions turn a concept into a predictable, well-sequenced construction programme.
              </p>
            </ScrollReveal>

            {/* 4 Process Stages Sequence */}
            <ProcessSequence />

          </div>
        </section>


        {/* =========================================================
            5. CLOSING INVITATION: “Have a plot in mind?”
            ========================================================= */}
        <section
          className="py-16 sm:py-20 bg-dsr-ice-wash border-t border-dsr-silver"
          aria-labelledby="invitation-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <ScrollReveal variant="scale" className="space-y-6">
              <h2
                id="invitation-heading"
                className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-dsr-navy tracking-tight"
              >
                Have a plot in mind?
              </h2>

              <p className="text-lg sm:text-xl text-dsr-navy/85 max-w-2xl mx-auto leading-relaxed">
                Bring a location, a sketch or simply an idea.
              </p>

              <div className="pt-2">
                <Magnetic strength={8}>
                  <Link
                    to="/contact"
                    className="min-h-[52px] inline-flex items-center justify-center px-8 py-4 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-base sm:text-lg tracking-wide rounded-sm shadow-md hover:shadow-lg transition-all duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-navy active:scale-98"
                  >
                    <span>{siteConfig.primaryAction}</span>
                    <ArrowUpRight className="ml-2 w-5 h-5 text-dsr-navy" />
                  </Link>
                </Magnetic>
              </div>

              <p className="text-xs text-dsr-navy/60 font-mono pt-2">
                Plot evaluation & structural brief consultations across Tamil Nadu
              </p>
            </ScrollReveal>

          </div>
        </section>

      </main>
    </>
  );
};
