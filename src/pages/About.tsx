import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Users, ShieldCheck, SunMedium } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Meet DSR Civil Constructions"
        description="A building brief starts with the people who will use the space. Learn how DSR Civil Constructions approaches plot evaluation, family priorities, and structural engineering."
      />

      <main id="main-content" className="w-full bg-dsr-white">
        
        {/* =========================================================
            1. ABOUT HERO: Mostly White with Asymmetric Glass-Blue Panel
            ========================================================= */}
        <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-dsr-silver relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal className="max-w-3xl mb-12">
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-dsr-cyan mb-3">
                <span className="w-6 h-0.5 bg-dsr-cyan" />
                <span>Our Architectural & Civil Philosophy</span>
              </div>

              {/* Single H1 for About */}
              <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-dsr-navy tracking-tight leading-[1.05]">
                Meet DSR Civil Constructions.
              </h1>

              {/* Opening Core Premise */}
              <p className="text-xl sm:text-2xl text-dsr-civil font-medium mt-4 leading-snug">
                A building brief starts with the people who will use the space.
              </p>
            </ScrollReveal>

            {/* Asymmetric Composition: Drawing Desk Photography & Glass-Blue Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left 7 Columns: Close-up of Drawing Desk */}
              <ScrollReveal delay={0.1} className="lg:col-span-7 relative overflow-hidden rounded-sm border border-dsr-silver shadow-md bg-white group">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src="/images/architecture/drawing-desk.webp"
                    alt="Close-up of an architectural drafting desk with technical drawings, scale rules, pencil and blueprint dimensions"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                    loading="eager"
                    width="1200"
                    height="675"
                  />
                </div>
                <div className="p-4 bg-dsr-ice-wash border-t border-dsr-silver flex items-center justify-between text-xs text-dsr-navy/80 font-mono">
                  <span>Site Coordination & Elevation Studies</span>
                  <span className="text-dsr-roof font-semibold">Scale 1:100</span>
                </div>
              </ScrollReveal>

              {/* Right 5 Columns: Asymmetric Glass-Blue Field (#51BDFB wash) */}
              <ScrollReveal delay={0.2} className="lg:col-span-5 bg-gradient-to-br from-[#51BDFB]/15 via-dsr-ice-wash to-white border border-[#51BDFB]/40 rounded-sm p-8 sm:p-10 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-md">
                <div className="space-y-4">
                  <div className="inline-block p-2 bg-dsr-roof text-white rounded-xs">
                    <SunMedium className="w-5 h-5" />
                  </div>
                  <h2 className="font-headline font-bold text-2xl sm:text-3xl text-dsr-navy leading-tight">
                    Enduring engineering rooted in everyday routines.
                  </h2>
                  <p className="text-base text-dsr-navy/85 leading-relaxed">
                    We look at civil construction not merely as pouring concrete and laying bricks, but as structuring permanent protection against heat, rain, and changing family requirements over decades.
                  </p>
                  <p className="text-sm text-dsr-navy/80 leading-relaxed">
                    By translating plot orientation and local soil conditions into coordinated structural frames, every room earns its place before execution begins.
                  </p>
                </div>

                <div className="pt-6 border-t border-dsr-silver/60">
                  <p className="text-xs font-mono uppercase tracking-wider text-dsr-civil font-semibold">
                    Direct Team Oversight on Site
                  </p>
                  <p className="text-sm font-semibold text-dsr-navy mt-1">
                    Tamil Nadu Civil & Structural Projects
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* =========================================================
            2. WHAT MATTERS IN THE FIRST CONVERSATION (3 Passages)
            ========================================================= */}
        <section className="py-16 sm:py-24 bg-dsr-ice-wash/60 border-b border-dsr-silver" aria-labelledby="matters-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal className="max-w-3xl mb-14">
              <span className="text-xs uppercase tracking-widest text-dsr-cyan font-mono font-semibold">
                Consultation Methodology
              </span>
              <h2
                id="matters-heading"
                className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-dsr-navy tracking-tight mt-1 mb-4"
              >
                What matters in the first conversation
              </h2>
              <p className="text-base sm:text-lg text-dsr-navy/80 leading-relaxed">
                Before talking about square footage or finishing tiles, we unpack three fundamental dimensions that govern how well your building will function.
              </p>
            </ScrollReveal>

            {/* Three Short Passages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Passage 1: The Site */}
              <ScrollReveal delay={0.05} className="bg-white border border-dsr-silver rounded-sm p-7 space-y-4 shadow-xs hover:shadow-md hover:border-dsr-cyan/50 transition-all duration-300">
                <div className="flex items-center space-x-3 text-dsr-roof">
                  <div className="p-2.5 bg-dsr-ice-wash rounded-xs">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-dsr-cyan">01. CONTEXT</span>
                </div>
                
                <h3 className="font-headline font-bold text-2xl text-dsr-navy">
                  The Site
                </h3>

                <p className="text-sm text-dsr-navy/85 leading-relaxed">
                  Every plot possesses distinct sun angles, boundary setbacks, access roads, and soil strata that dictate structural foundation design.
                </p>

                <div className="p-3.5 bg-dsr-ice-wash rounded-xs border-l-2 border-dsr-roof">
                  <p className="text-xs font-semibold text-dsr-civil uppercase tracking-wider mb-1">
                    Practical Example
                  </p>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    Aligning the building mass to catch south-westerly breezes during hot afternoons while establishing natural stormwater runoff gradients toward rainwater recharge sumps.
                  </p>
                </div>
              </ScrollReveal>

              {/* Passage 2: The People Using It */}
              <ScrollReveal delay={0.15} className="bg-white border border-dsr-silver rounded-sm p-7 space-y-4 shadow-xs hover:shadow-md hover:border-dsr-cyan/50 transition-all duration-300">
                <div className="flex items-center space-x-3 text-dsr-roof">
                  <div className="p-2.5 bg-dsr-ice-wash rounded-xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-dsr-cyan">02. PEOPLE</span>
                </div>
                
                <h3 className="font-headline font-bold text-2xl text-dsr-navy">
                  The People Using It
                </h3>

                <p className="text-sm text-dsr-navy/85 leading-relaxed">
                  Spaces must serve the daily habits, quiet hours, gathering rituals, and long-term aging-in-place needs of everyone under the roof.
                </p>

                <div className="p-3.5 bg-dsr-ice-wash rounded-xs border-l-2 border-dsr-roof">
                  <p className="text-xs font-semibold text-dsr-civil uppercase tracking-wider mb-1">
                    Practical Example
                  </p>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    Placing an accessible master suite on the ground floor with zero threshold transitions for grandparents, buffered from living room activity and street noise.
                  </p>
                </div>
              </ScrollReveal>

              {/* Passage 3: The Priorities They Want to Protect */}
              <ScrollReveal delay={0.25} className="bg-white border border-dsr-silver rounded-sm p-7 space-y-4 shadow-xs hover:shadow-md hover:border-dsr-cyan/50 transition-all duration-300">
                <div className="flex items-center space-x-3 text-dsr-roof">
                  <div className="p-2.5 bg-dsr-ice-wash rounded-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-dsr-cyan">03. PRIORITIES</span>
                </div>
                
                <h3 className="font-headline font-bold text-2xl text-dsr-navy">
                  Priorities to Protect
                </h3>

                <p className="text-sm text-dsr-navy/85 leading-relaxed">
                  Balancing private retreat with family connection, and preventing harsh climate exposure without feeling enclosed behind fortress walls.
                </p>

                <div className="p-3.5 bg-dsr-ice-wash rounded-xs border-l-2 border-dsr-roof">
                  <p className="text-xs font-semibold text-dsr-civil uppercase tracking-wider mb-1">
                    Practical Example
                  </p>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    Shading a west-facing living room with deep horizontal concrete sunshades without losing the garden view or restricting gentle evening daylight.
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* =========================================================
            3. RESERVED SPACE: Founder Story / Team Portrait
            (Reserved only when supplied; strictly tied to verified info)
            ========================================================= */}
        <section className="py-14 sm:py-20 bg-dsr-white border-b border-dsr-silver" aria-labelledby="leadership-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="p-8 sm:p-12 border border-dsr-silver rounded-sm bg-dsr-ice-wash/30 text-center max-w-4xl mx-auto space-y-6">
              
              {/* Official Brand Artwork on White Surface with Colours Intact */}
              <div className="inline-block p-4 sm:p-6 bg-white rounded-sm border border-dsr-silver/80 shadow-sm mx-auto">
                <img
                  src="/images/logo/dsr-logo-cropped.png"
                  alt="DSR Civil Constructions official emblem featuring the modern house, sloping blue roof and yellow hard hat"
                  className="h-28 sm:h-36 w-auto object-contain mx-auto"
                  width="144"
                  height="144"
                />
              </div>

              <div>
                <span className="inline-block text-xs uppercase tracking-widest text-dsr-civil font-mono font-semibold px-2.5 py-1 bg-white border border-dsr-silver rounded-xs">
                  Civil Engineering Leadership
                </span>
                <h2 id="leadership-heading" className="font-headline font-bold text-2xl sm:text-3xl text-dsr-navy mt-2">
                  Hands-on Engineering from Soil to Slab
                </h2>
              </div>

              <p className="text-sm sm:text-base text-dsr-navy/80 max-w-2xl mx-auto leading-relaxed">
                DSR Civil Constructions is anchored by on-site civil engineers who supervise every pour, steel reinforcement cage, and curing cycle. Detailed founder biographies and field team portraits will be published here as approved documentation is catalogued.
              </p>
              <div className="pt-2 flex items-center justify-center space-x-6 text-xs text-dsr-navy/60 font-mono">
                <span>Verified Quality Checks</span>
                <span>•</span>
                <span>On-Site Supervision</span>
                <span>•</span>
                <span>Direct Accountability</span>
              </div>
            </ScrollReveal>
          </div>
        </section>


        {/* =========================================================
            4. CLOSING: “Talk about your plans”
            ========================================================= */}
        <section className="py-16 sm:py-20 bg-dsr-navy text-white" aria-labelledby="talk-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <ScrollReveal className="space-y-6">
              <h2 id="talk-heading" className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Talk about your plans
              </h2>
              <p className="text-base sm:text-lg text-dsr-silver/90 max-w-xl mx-auto leading-relaxed">
                Whether you have an empty plot, municipal blueprints, or questions about construction stages, we are ready to discuss your build.
              </p>
              <div className="pt-2">
                <Magnetic strength={10}>
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
    </>
  );
};
