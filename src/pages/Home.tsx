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
                  உங்கள் மனை, நீங்கள் அமைத்திட விரும்பும் இடவசதி மற்றும் திட்டமிட வேண்டிய முக்கிய முடிவுகளை எங்களுடன் பகிர்ந்துகொள்ளுங்கள்.
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
                        சூரிய வெப்பம் தடுக்கும் சன்ஷேடு மற்றும் நிழல் தரும் தோட்டத் திண்ணை
                      </p>
                    </div>
                    <span className="hidden sm:inline-block text-[11px] font-mono text-dsr-silver/70 border border-dsr-silver/30 px-2 py-0.5 rounded-xs">
                      தமிழ்நாடு மனை ஆய்வு
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
                உங்கள் மனைக்கு ஏற்ற திட்டத்தைத் தேர்ந்தெடுங்கள். ஒவ்வொரு தலைப்பும் உங்கள் முதல் ஆலோசனையுடன் நேரடியாகத் தொடர்புடையது.
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
                        <p className="text-xs text-dsr-navy/60 font-medium">தனி வீடு அல்லது பல தலைமுறை குடும்ப இல்லம்</p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-1.5">
                      <p className="text-base font-semibold text-dsr-civil">
                        “தரைத்தளத்தில் யாருக்கு அறை தேவை?”
                      </p>
                      <p className="text-sm text-dsr-navy/80 leading-relaxed">
                        கட்டமைப்பு விவரம்: வெப்பம் தடுக்கும் சன்ஷேடுகள், தரை முதல் கூரை வரையிலான காற்றோட்டம் மற்றும் நிழல் தரும் திண்ணை.
                      </p>
                    </div>

                    <div className="lg:col-span-3 flex lg:justify-end">
                      <Link
                        to="/contact?topic=A%20new%20home"
                        className="min-h-[44px] inline-flex items-center space-x-2 text-sm font-semibold text-dsr-roof hover:text-dsr-civil group-hover:translate-x-1.5 transition-all py-2"
                      >
                        <span>புதிய இல்லம் பற்றிக் கலந்துரையாட</span>
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
                        <p className="text-xs text-dsr-navy/60 font-medium">வணிகத் தளங்கள் மற்றும் பிரதான தெரு முகப்பு</p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-1.5">
                      <p className="text-base font-semibold text-dsr-civil">
                        “வாடிக்கையாளர்கள் நுழைவாயில் வழியாக எளிதாக எவ்வாறு வந்து செல்ல வேண்டும்?”
                      </p>
                      <p className="text-sm text-dsr-navy/80 leading-relaxed">
                        கட்டமைப்பு விவரம்: தூண்களற்ற பரந்த உட்புற இடவசதி, வாடிக்கையாளர் நுழைவு பகுதி மற்றும் அதிக சுமை தாங்கும் தரைத்தளம்.
                      </p>
                    </div>

                    <div className="lg:col-span-3 flex lg:justify-end">
                      <Link
                        to="/contact?topic=A%20space%20for%20business"
                        className="min-h-[44px] inline-flex items-center space-x-2 text-sm font-semibold text-dsr-roof hover:text-dsr-civil group-hover:translate-x-1.5 transition-all py-2"
                      >
                        <span>வணிக வளாகம் பற்றிக் கலந்துரையாட</span>
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
                        <p className="text-xs text-dsr-navy/60 font-medium">மேல்தள விரிவாக்கம் மற்றும் கட்டமைப்பு மாற்றங்கள்</p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-1.5">
                      <p className="text-base font-semibold text-dsr-civil">
                        “தற்போதைய கட்டிடத்தில் எந்தப் பகுதி சிறந்த இடவசதியுடன் மேம்படுத்தப்பட வேண்டும்?”
                      </p>
                      <p className="text-sm text-dsr-navy/80 leading-relaxed">
                        கட்டமைப்பு விவரம்: அஸ்திவார உறுதித்தன்மை ஆய்வு, பழைய மற்றும் புதிய தளங்களின் நீர்க்கசிவுத் தடுப்பு இணைப்பு.
                      </p>
                    </div>

                    <div className="lg:col-span-3 flex lg:justify-end">
                      <Link
                        to="/contact?topic=Changes%20to%20an%20existing%20building"
                        className="min-h-[44px] inline-flex items-center space-x-2 text-sm font-semibold text-dsr-roof hover:text-dsr-civil group-hover:translate-x-1.5 transition-all py-2"
                      >
                        <span>கட்டிட விரிவாக்கம் பற்றிக் கலந்துரையாட</span>
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
                  ஒவ்வொரு உறுதியான கட்டிடமும் கான்கிரீட் கட்டமைப்பாக மாறுவதற்கு முன்பு பொறியியல் வரைபடமாகவே துவங்குகிறது. கூரை அமைப்புகள், நிழல் தரும் முகப்புகள் மற்றும் பால்கனி மட்டங்கள் எவ்வாறு தொழில்நுட்ப வரைபடத்திலிருந்து உண்மையான கட்டிடமாக மாறுகின்றன என்பதை ஒப்பிட்டுப் பாருங்கள்.
                </p>

                <div className="p-4 bg-dsr-ice-wash border-l-4 border-dsr-roof rounded-xs space-y-2">
                  <p className="text-xs uppercase tracking-wider font-bold text-dsr-civil">
                    Structural Alignment
                  </p>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    கணினி வரைபடத்திற்கும் (CAD Blueprint) முடிக்கப்பட்ட வீட்டிற்கும் இடையே மேற்கூரை மற்றும் ஜன்னல் அமைப்புகள் எவ்வாறு துல்லியமாகப் பொருந்துகின்றன என்பதைக் கவனியுங்கள்.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/projects#ideas"
                    className="inline-flex items-center text-sm font-semibold text-dsr-roof hover:text-dsr-civil py-1 group"
                  >
                    <span>கூடுதல் கட்டடக் கலை வடிவங்களை பார்வையிட</span>
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
                உங்கள் நிலத்தில் பூமி தோண்டும் இயந்திரங்கள் இறங்குவதற்கு முன்பே, நான்கு தெளிவான திட்டமிடல்கள் ஒரு கற்பனையைத் துல்லியமான கட்டுமானப் பணியாக மாற்றுகின்றன.
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
                மனையின் இருப்பிடம், ஒரு சிறிய வரைபடம் அல்லது உங்கள் கனவு எதுவாக இருந்தாலும் கொண்டு வாருங்கள்.
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
                தமிழ்நாடு முழுவதும் மனை மதிப்பீடு மற்றும் கட்டுமான ஆலோசனைகள்
              </p>
            </ScrollReveal>

          </div>
        </section>

      </main>
    </>
  );
};
