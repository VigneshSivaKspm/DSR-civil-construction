import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, HelpCircle, Users, Clock, Hammer, ShieldCheck } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../config/siteConfig';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (7)' },
    { id: 'residential', label: 'Residential & Renovations' },
    { id: 'commercial', label: 'Commercial Buildings' },
    { id: 'planning', label: 'Planning & Turnkey' },
    { id: 'specialized', label: 'Industrial & Infrastructure' },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <>
      <SeoHead
        title="Comprehensive Construction & Civil Services"
        description="From residential villas and commercial complexes to turnkey execution, industrial sheds, and site development. Explore all civil construction offerings from DSR Civil Constructions."
      />

      <main id="main-content" className="w-full bg-dsr-white">
        
        {/* =========================================================
            1. ROYAL-BLUE MASTHEAD: White Type & Slim Cyan Rule
            ========================================================= */}
        <section className="bg-gradient-to-r from-dsr-civil via-dsr-roof to-dsr-civil text-white pt-12 pb-16 lg:pt-16 lg:pb-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              
              {/* Slim Cyan Rule Motif */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-12 h-1 bg-dsr-cyan rounded-full" />
                <span className="text-xs uppercase tracking-widest text-dsr-cyan font-mono font-semibold">
                  Comprehensive Civil Scope
                </span>
              </div>

              {/* Single H1 for Services */}
              <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                What kind of build are you planning?
              </h1>

              <p className="text-lg sm:text-xl text-dsr-silver/95 mt-4 leading-relaxed max-w-3xl">
                Start with the rooms you need today and the space you might need later. Every project begins with a structured review of your plot and family or commercial requirements.
              </p>

            </div>
          </div>

          {/* Slim Cyan Boundary Line */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-dsr-cyan" />
        </section>


        {/* =========================================================
            2. CATEGORY FILTER NAVIGATION TABS
            ========================================================= */}
        <section className="sticky top-20 z-30 bg-dsr-white/95 backdrop-blur-md border-b border-dsr-silver py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs font-mono font-semibold text-dsr-civil uppercase tracking-wider hidden md:inline mr-2">
                Filter Scope:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`min-h-[40px] px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-sm transition-all whitespace-nowrap flex items-center ${
                    activeCategory === cat.id
                      ? 'bg-dsr-civil text-white shadow-xs'
                      : 'bg-dsr-ice-wash text-dsr-navy hover:bg-dsr-silver/60 border border-dsr-silver/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================
            3. NUMBERED EDITORIAL LIST OF ALL 7 SERVICES ON WHITE
            ========================================================= */}
        <section className="py-16 sm:py-20 bg-dsr-white border-b border-dsr-silver">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="space-y-16">
              {filteredServices.map((service, index) => (
                <ScrollReveal
                  key={service.id}
                  delay={Math.min(0.2, index * 0.05)}
                >
                  <article
                    id={service.slug}
                    className="group bg-white border border-dsr-silver hover:border-dsr-roof rounded-sm p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      
                      {/* Left Column: Number & Title & Starter Line */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center space-x-3">
                          <span className="font-mono font-bold text-3xl sm:text-4xl text-dsr-cyan">
                            {service.number}
                          </span>
                          {/* Dynamic Cyan Rule extending on hover in 180ms */}
                          <div className="h-0.5 w-12 bg-dsr-cyan/40 group-hover:w-28 group-hover:bg-dsr-cyan transition-all duration-[180ms] ease-out" />
                          <span className="text-xs font-mono uppercase tracking-wider text-dsr-civil font-semibold">
                            Confirmed Service
                          </span>
                        </div>

                        <h2 className="font-headline font-bold text-3xl sm:text-4xl text-dsr-navy tracking-tight group-hover:text-dsr-roof transition-colors">
                          {service.title}
                        </h2>

                        {/* Required Starter Line */}
                        <p className="text-base sm:text-lg font-semibold text-dsr-civil leading-snug">
                          “{service.starterLine}”
                        </p>

                        {/* Who It Suits */}
                        <div className="pt-2 space-y-1.5">
                          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-dsr-navy">
                            <Users className="w-4 h-4 text-dsr-roof" />
                            <span>Who it suits</span>
                          </div>
                          <p className="text-sm text-dsr-navy/85 leading-relaxed">
                            {service.whoItSuits}
                          </p>
                        </div>

                        {/* Estimated Execution Timeline */}
                        {service.estimatedTimeline && (
                          <div className="flex items-center space-x-2 text-xs font-mono text-dsr-civil pt-1">
                            <Clock className="w-3.5 h-3.5 text-dsr-cyan" />
                            <span>Timeline: {service.estimatedTimeline}</span>
                          </div>
                        )}

                        {/* Key Materials */}
                        {service.keyMaterials && (
                          <div className="pt-2">
                            <p className="text-[11px] font-mono uppercase tracking-wider text-dsr-navy/60 mb-1.5">
                              Key Material Specifications:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {service.keyMaterials.map((mat, mIdx) => (
                                <span
                                  key={mIdx}
                                  className="text-xs bg-dsr-ice-wash text-dsr-civil border border-dsr-silver px-2.5 py-1 rounded-xs font-medium"
                                >
                                  {mat}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Column: Scope to Discuss & Helpful Question & Enquiry CTA */}
                      <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-dsr-ice-wash/50 p-6 sm:p-8 rounded-sm border border-dsr-silver/80">
                        
                        {/* Scope to Discuss */}
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Hammer className="w-4 h-4 text-dsr-roof" />
                            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-dsr-civil">
                              Scope to discuss in your consultation:
                            </h3>
                          </div>
                          <ul className="space-y-2.5">
                            {service.scopeToDiscuss.map((item, idx) => (
                              <li key={idx} className="flex items-start text-sm text-dsr-navy/85 leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-dsr-roof mr-2.5 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Helpful Question */}
                        <div className="p-4 bg-white border-l-4 border-dsr-gold rounded-xs shadow-xs space-y-1">
                          <div className="flex items-center space-x-2 text-xs font-bold text-dsr-navy uppercase tracking-wider">
                            <HelpCircle className="w-4 h-4 text-dsr-gold" />
                            <span>Helpful Question to Consider</span>
                          </div>
                          <p className="text-sm font-semibold text-dsr-civil">
                            {service.helpfulQuestion}
                          </p>
                        </div>

                        {/* Action Button: Enquire about this service (preselecting topic) */}
                        <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-dsr-silver/60">
                          <Magnetic strength={6}>
                            <Link
                              to={`/contact?topic=${encodeURIComponent(service.enquiryTopic)}`}
                              className="min-h-[48px] inline-flex items-center justify-center px-6 py-3 bg-dsr-civil hover:bg-dsr-roof text-white font-semibold text-sm rounded-sm transition-all shadow-xs hover:shadow-md"
                            >
                              <span>Enquire about this service</span>
                              <ArrowUpRight className="ml-2 w-4 h-4 text-dsr-cyan" />
                            </Link>
                          </Magnetic>

                          <span className="text-xs font-mono text-dsr-navy/60">
                            Preselects “{service.enquiryTopic}” on Contact
                          </span>
                        </div>

                      </div>

                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {/* Quality Standards & Materials Checkpoint Box */}
            <ScrollReveal delay={0.1} className="mt-16 p-8 sm:p-10 bg-dsr-navy text-white rounded-sm shadow-md border border-dsr-civil">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-dsr-cyan">
                    <ShieldCheck className="w-4 h-4 text-dsr-gold" />
                    <span>DSR Civil Quality Standards</span>
                  </div>
                  <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white">
                    Direct on-site engineering supervision at every pour.
                  </h3>
                  <p className="text-sm text-dsr-silver leading-relaxed">
                    We exclusively deploy laboratory batch-tested concrete, primary mill Fe 550D TMT steel rebar, and verified water-curing regimes for all residential and commercial structural frameworks across Tamil Nadu.
                  </p>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <Magnetic strength={10}>
                    <Link
                      to="/contact"
                      className="min-h-[50px] inline-flex items-center justify-center px-7 py-3.5 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-sm tracking-wide rounded-sm transition-all shadow-sm hover:shadow-md"
                    >
                      <span>{siteConfig.primaryAction}</span>
                      <ArrowUpRight className="ml-1.5 w-4 h-4 text-dsr-navy" />
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

      </main>
    </>
  );
};
