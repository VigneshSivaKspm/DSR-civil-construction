import React from 'react';
import { Phone, MapPin, Globe, Clock, ShieldCheck } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { EnquiryForm } from '../components/EnquiryForm';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Tell us about your plot | Contact & Enquiry"
        description="A location and a rough idea are enough to start. Share what you know so far about your land or building project. Direct calls: +91 73732 12354 and +91 90803 46867."
      />

      <main id="main-content" className="w-full bg-gradient-to-b from-[#51BDFB]/12 via-dsr-ice-wash to-dsr-white min-h-screen py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title Area */}
          <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-dsr-roof mb-3">
              <span className="w-6 h-0.5 bg-dsr-cyan" />
              <span>Direct Civil Consultations</span>
            </div>

            {/* Single H1 for Contact */}
            <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-dsr-navy tracking-tight leading-[1.05]">
              Tell us about your plot.
            </h1>

            {/* Required Opening Copy */}
            <p className="text-lg sm:text-xl text-dsr-civil font-medium mt-4 leading-relaxed">
              மனையின் இருப்பிடமும் ஒரு சிறிய திட்டமும் இருந்தாலே போதுமானது. உங்கள் நிலத்தைப் பற்றி நீங்கள் அறிந்தவற்றை எங்களிடம் பகிருங்கள்.
            </p>
          </ScrollReveal>

          {/* Grid Layout: White Form Surface & Rich Navy Call Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Columns: White Form Surface */}
            <ScrollReveal delay={0.08} className="lg:col-span-7 bg-white border border-dsr-silver rounded-sm p-6 sm:p-10 shadow-sm">
              <div className="mb-6 pb-4 border-b border-dsr-silver">
                <h2 className="font-headline font-bold text-2xl text-dsr-navy">
                  Share Your Plot & Vision
                </h2>
                <p className="text-sm text-dsr-navy/70 mt-1">
                  * குறியிடப்பட்டவை கட்டாயப் புலங்கள். உங்கள் தனிப்பட்ட விவரங்கள் முழுப் பாதுகாப்புடன் வைக்கப்படும்.
                </p>
              </div>

              {/* Robust Enquiry Form Component */}
              <EnquiryForm />
            </ScrollReveal>

            {/* Right 5 Columns: Rich Navy Panel Containing Click-to-Call Numbers */}
            <ScrollReveal delay={0.16} className="lg:col-span-5 bg-dsr-navy text-white rounded-sm p-6 sm:p-8 space-y-6 shadow-md border border-dsr-civil relative overflow-hidden">
              {/* Cyan top edge accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-dsr-cyan to-dsr-roof" />

              <div>
                <span className="text-[11px] font-mono text-dsr-cyan uppercase tracking-widest">
                  Immediate Phone Access
                </span>
                <h2 id="direct-lines-heading" className="font-headline font-bold text-2xl sm:text-3xl text-white mt-1">
                  Call our engineers directly
                </h2>
                <p className="text-sm text-dsr-silver/90 mt-2 leading-relaxed">
                  உங்கள் மனை எல்லைகள், மண் தன்மை அல்லது கட்டுமான நேரம் குறித்து எங்கள் பொறியாளர்களுடன் தொலைபேசியில் நேரடியாகப் பேசுங்கள்:
                </p>
              </div>

              {/* Both Click-to-Call Phone Numbers */}
              <div className="space-y-3 pt-2">
                
                {/* Primary Phone */}
                <Magnetic strength={5}>
                  <a
                    href={siteConfig.primaryPhone.tel}
                    className="flex items-center justify-between p-4 bg-dsr-civil/60 hover:bg-dsr-civil border border-dsr-roof/50 hover:border-dsr-cyan/60 rounded-sm transition-all group"
                    aria-label={`Call primary line ${siteConfig.primaryPhone.display}`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 bg-dsr-roof text-white rounded-xs group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-dsr-cyan" />
                      </div>
                      <div>
                        <p className="text-[11px] text-dsr-cyan font-mono uppercase tracking-wider">
                          Primary Civil Line
                        </p>
                        <p className="text-lg font-bold text-white group-hover:text-dsr-cyan transition-colors">
                          {siteConfig.primaryPhone.display}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-dsr-navy/80 text-dsr-cyan rounded-xs border border-dsr-cyan/30 group-hover:border-dsr-cyan">
                      Call Now
                    </span>
                  </a>
                </Magnetic>

                {/* Secondary Phone */}
                <Magnetic strength={5}>
                  <a
                    href={siteConfig.secondaryPhone.tel}
                    className="flex items-center justify-between p-4 bg-dsr-civil/60 hover:bg-dsr-civil border border-dsr-roof/50 hover:border-dsr-cyan/60 rounded-sm transition-all group"
                    aria-label={`Call secondary line ${siteConfig.secondaryPhone.display}`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 bg-dsr-roof text-white rounded-xs group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-dsr-cyan" />
                      </div>
                      <div>
                        <p className="text-[11px] text-dsr-cyan font-mono uppercase tracking-wider">
                          Secondary Field Line
                        </p>
                        <p className="text-lg font-bold text-white group-hover:text-dsr-cyan transition-colors">
                          {siteConfig.secondaryPhone.display}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-dsr-navy/80 text-dsr-cyan rounded-xs border border-dsr-cyan/30 group-hover:border-dsr-cyan">
                      Call Now
                    </span>
                  </a>
                </Magnetic>

              </div>

              {/* Consultation Details */}
              <div className="border-t border-dsr-civil/70 pt-6 space-y-4 text-xs text-dsr-silver/90">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-dsr-cyan mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Site Visits & Field Inspections</p>
                    <p className="mt-0.5 text-dsr-silver/80">
                      முன்பதிவு அடிப்படையில் தமிழ்நாடு முழுவதும் உள்ள மனைகளுக்கு நேரடி கள ஆய்வுகள் மேற்கொள்ளப்படும்.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-dsr-cyan mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Consultation Hours</p>
                    <p className="mt-0.5 text-dsr-silver/80">
                      திங்கள் முதல் சனி வரை: காலை 9:00 முதல் மாலை 7:00 வரை (IST)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-4 h-4 text-dsr-cyan mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Official Domain</p>
                    <p className="mt-0.5 font-mono text-dsr-cyan">
                      {siteConfig.domain}
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Assurance */}
              <div className="p-3 bg-dsr-civil/40 rounded-xs border border-dsr-cyan/20 flex items-center space-x-2 text-[11px] text-dsr-silver/80">
                <ShieldCheck className="w-4 h-4 text-dsr-cyan flex-shrink-0" />
                <span>உங்கள் தொடர்பு விவரங்கள் தனிப்பட்ட முறையில் முழுப் பாதுகாப்புடன் வைக்கப்படும்.</span>
              </div>

            </ScrollReveal>

          </div>

        </div>
      </main>
    </>
  );
};
