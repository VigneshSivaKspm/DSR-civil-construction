import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  HardHat,
  Ruler,
  MapPin,
  Clock,
  ArrowUpRight,
  Award,
  Sparkles,
  Camera,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';
import { siteConfig } from '../config/siteConfig';

export const Owner: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    'வணக்கம் திரு. D. செல்வராஜ் அவர்களுக்கு, எனது மனை மற்றும் புதிய கட்டுமானத் திட்டம் குறித்து தங்களிடம் நேரடியாக ஆலோசிக்க விரும்புகிறேன்.'
  )}`;

  return (
    <>
      <SeoHead
        title="Mr. D. Selvaraj | Founder & Civil Contractor | DSR Civil Constructions"
        description="Meet Mr. D. Selvaraj, Founder & Chief Civil Engineer of DSR Civil Constructions. Direct on-site engineering supervision from soil to slab across Tamil Nadu. Call +91 73732 12354 or +91 90803 46867."
      />

      <main id="main-content" className="w-full bg-dsr-white">
        
        {/* =========================================================
            1. HERO / EXECUTIVE PROFILE SECTION
            ========================================================= */}
        <section
          className="relative bg-gradient-to-b from-dsr-navy via-dsr-civil to-dsr-navy text-white pt-12 pb-16 lg:pt-18 lg:pb-24 overflow-hidden border-b border-dsr-civil"
          aria-labelledby="owner-heading"
        >
          {/* Subtle architectural grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#51BDFB_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left 5 Columns: Official Executive Portrait */}
              <ScrollReveal className="lg:col-span-5 relative">
                <figure
                  itemScope
                  itemType="https://schema.org/Person"
                  className="relative aspect-[4/3] sm:aspect-[4/3] rounded-sm overflow-hidden border-2 border-dsr-cyan/40 shadow-2xl bg-black/60 group m-0"
                >
                  <img
                    src="/images/founder/selvaraj.jpeg"
                    alt="Mr. D. Selvaraj, Founder and Chief Civil Engineer of DSR Civil Constructions"
                    title="Mr. D. Selvaraj — Founder & Chief Civil Engineer"
                    itemProp="image"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                    loading="eager"
                    fetchPriority="high"
                    width="1280"
                    height="960"
                  />
                  <meta itemProp="name" content="Mr. D. Selvaraj" />
                  <meta itemProp="jobTitle" content="Founder & Chief Civil Engineer" />
                  <meta itemProp="worksFor" content="DSR Civil Constructions" />

                  {/* Corner Architectural Frame Motif */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-dsr-gold pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-dsr-gold pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-dsr-gold pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-dsr-gold pointer-events-none" />

                  {/* Overlay Nameplate */}
                  <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dsr-navy/95 via-dsr-navy/70 to-transparent p-5 text-white">
                    <span className="text-[11px] font-mono text-dsr-gold uppercase tracking-widest font-semibold flex items-center space-x-1.5">
                      <Award className="w-3.5 h-3.5 text-dsr-gold" />
                      <span>Founder & Managing Director</span>
                    </span>
                    <p className="font-headline font-bold text-2xl text-white mt-0.5">
                      Mr. D. Selvaraj
                    </p>
                    <p className="text-xs text-dsr-silver/90 font-mono mt-0.5">
                      DSR Civil Constructions • Tamil Nadu
                    </p>
                  </figcaption>
                </figure>

                {/* Verified Badge */}
                <div className="mt-4 flex items-center justify-between p-3 bg-dsr-navy/80 border border-dsr-civil rounded-xs text-xs text-dsr-silver">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-dsr-cyan flex-shrink-0" />
                    <span>நேரடி களப் பொறியியல் & நிர்வாகம்</span>
                  </div>
                  <span className="font-mono text-dsr-gold font-semibold">100% Hands-on</span>
                </div>
              </ScrollReveal>

              {/* Right 7 Columns: Vision, Name & Immediate Call Actions */}
              <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-6">
                
                {/* Architectural Tag */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-dsr-cyan/30 rounded-xs">
                  <span className="w-2 h-2 rounded-full bg-dsr-gold animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-dsr-cyan">
                    Leadership Profile • தலைமைச் செய்தி
                  </span>
                </div>

                {/* Primary H1 */}
                <div>
                  <h1
                    id="owner-heading"
                    className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]"
                  >
                    Mr. D. Selvaraj
                  </h1>
                  <p className="text-lg sm:text-xl text-dsr-gold font-medium mt-1">
                    நிறுவனர் மற்றும் முதன்மை சிவில் பொறியாளர் (Founder & Chief Civil Engineer)
                  </p>
                </div>

                {/* Core Philosophy Quote */}
                <div className="p-4 sm:p-5 bg-dsr-civil/50 border-l-4 border-dsr-gold rounded-xs space-y-2">
                  <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
                    “ஒரு கட்டிடத்தின் நிலைப்புத்தன்மையும் பாதுகாப்பும் வெறும் வரைபடத்தில் முடிந்துவிடுவதில்லை; அது அமைந்திடும் நிலத்தின் தரம், சரியான பொருட்கள் தேர்வு மற்றும் களத்தில் பொறியாளரின் சமரசமற்ற நேரடிக் கண்காணிப்பில் தான் நிலைத்து நிற்கிறது.”
                  </p>
                  <p className="text-xs font-mono text-dsr-silver/80 text-right">
                    — திரு. D. செல்வராஜ்
                  </p>
                </div>

                <p className="text-base text-dsr-silver/90 leading-relaxed">
                  டி.எஸ்.ஆர் சிவில் கன்ஸ்ட்ரக்ஷன்ஸ் நிறுவனத்தின் நிறுவனர் திரு. D. செல்வராஜ் அவர்கள், தமிழ்நாடு முழுவதும் உள்ள வீட்டு மனைகள் மற்றும் வணிகத் தளங்களுக்கு அஸ்திவாரம் முதல் இறுதி வேலைப்பாடு வரை ஒவ்வொரு நிலையிலும் பொறியியல் தரத்தை நேரடியாக உறுதி செய்து வருகிறார்.
                </p>

                {/* =========================================================
                    BOTH CONTACT OPTIONS (PROMINENT CALL BUTTONS)
                    ========================================================= */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-mono text-dsr-cyan uppercase tracking-wider font-semibold">
                    திரு. D. செல்வராஜ் அவர்களை நேரடியாகத் தொடர்பு கொள்ள:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Primary Phone */}
                    <Magnetic strength={5}>
                      <a
                        href={siteConfig.primaryPhone.tel}
                        className="flex items-center justify-between p-3.5 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold rounded-sm shadow-md transition-all group"
                        aria-label={`Call primary number ${siteConfig.primaryPhone.display}`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-dsr-navy text-dsr-gold rounded-xs">
                            <Phone className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-mono tracking-wider opacity-80">Primary Call Line</p>
                            <p className="text-base font-bold leading-tight">{siteConfig.primaryPhone.display}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Magnetic>

                    {/* Secondary Phone */}
                    <Magnetic strength={5}>
                      <a
                        href={siteConfig.secondaryPhone.tel}
                        className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 text-white border border-dsr-cyan/40 rounded-sm transition-all group"
                        aria-label={`Call secondary number ${siteConfig.secondaryPhone.display}`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-dsr-roof text-dsr-cyan rounded-xs">
                            <Phone className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-mono tracking-wider text-dsr-cyan">Field Supervision Line</p>
                            <p className="text-base font-bold leading-tight">{siteConfig.secondaryPhone.display}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Magnetic>

                  </div>

                  {/* WhatsApp Quick Link */}
                  {siteConfig.whatsapp.enabled && (
                    <div className="pt-1">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-xs font-semibold text-dsr-cyan hover:text-white transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-dsr-cyan" />
                        <span>வாட்ஸ்அப் (WhatsApp) மூலம் நேரடியாகத் தகவல் அனுப்ப இங்கே கிளிக் செய்யவும்</span>
                      </a>
                    </div>
                  )}

                </div>

              </ScrollReveal>

            </div>
          </div>
        </section>


        {/* =========================================================
            2. ON-SITE EXECUTION IN ACTION: PHOTO HIGHLIGHTS
            ========================================================= */}
        <section className="py-16 sm:py-24 bg-dsr-ice-wash/60 border-b border-dsr-silver" aria-labelledby="hands-on-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-dsr-roof mb-2">
                <HardHat className="w-4 h-4 text-dsr-gold" />
                <span>On-Site Presence • நேரடிக் களப் பணிகள்</span>
              </div>
              <h2
                id="hands-on-heading"
                className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-dsr-navy tracking-tight"
              >
                Soil to Slab: Direct Site Supervision.
              </h2>
              <p className="text-base sm:text-lg text-dsr-navy/80 mt-3 leading-relaxed">
                திரு. D. செல்வராஜ் அவர்கள் ஒவ்வொரு கட்டுமானத் தளத்திலும் நேரடியாக நின்று வழிநடத்தும் சில முக்கியத் தருணங்கள்:
              </p>
            </ScrollReveal>

            {/* 3 Real On-Site Photographs of Mr. D. Selvaraj */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Photo 1: Site Leadership with Drawings */}
              <ScrollReveal delay={0.05} className="bg-white border border-dsr-silver rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] relative bg-black/40 overflow-hidden">
                  <img
                    src="/images/gallery/1 (1).jpeg"
                    alt="Mr. D. Selvaraj supervising concrete masonry and RCC columns on construction site"
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-dsr-navy/85 text-dsr-cyan text-[11px] font-mono px-2 py-0.5 rounded-xs border border-dsr-cyan/30">
                    தள மேற்பார்வை
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-headline font-bold text-xl text-dsr-navy">
                    திட்ட வரைபடங்களை களத்தில் சரிபார்த்தல்
                  </h3>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    களத்தில் வரைபடங்களை கையில் கொண்டு, ஆர்.சி.சி தூண்கள் மற்றும் சாலிட் பிளாக் சுவர்களின் அமைவிடங்களை நேரடியாக ஆய்வு செய்கிறார்.
                  </p>
                </div>
              </ScrollReveal>

              {/* Photo 2: Precision Measurement with Tape */}
              <ScrollReveal delay={0.12} className="bg-white border border-dsr-silver rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] relative bg-black/40 overflow-hidden">
                  <img
                    src="/images/gallery/1 (5).jpeg"
                    alt="Mr. D. Selvaraj verifying concrete beam and column dimensions using measuring tape"
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-dsr-navy/85 text-dsr-gold text-[11px] font-mono px-2 py-0.5 rounded-xs border border-dsr-gold/30">
                    அளவீட்டுத் துல்லியம்
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-headline font-bold text-xl text-dsr-navy">
                    சென்டிமீட்டர் துல்லிய அளவீடுகள்
                  </h3>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    கான்கிரீட் பீம்கள் மற்றும் சுவர்களின் தடிமன் மற்றும் மட்டங்களை டேப் கொண்டு துல்லியமாக அளவிட்டு தரத்தை உறுதி செய்கிறார்.
                  </p>
                </div>
              </ScrollReveal>

              {/* Photo 3: Commercial Framing Review */}
              <ScrollReveal delay={0.19} className="bg-white border border-dsr-silver rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] relative bg-black/40 overflow-hidden">
                  <img
                    src="/images/gallery/1 (4).jpeg"
                    alt="Mr. D. Selvaraj discussing structural blueprints with site engineer"
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-dsr-navy/85 text-dsr-cyan text-[11px] font-mono px-2 py-0.5 rounded-xs border border-dsr-cyan/30">
                    பொறியாளர் வழிகாட்டல்
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-headline font-bold text-xl text-dsr-navy">
                    பொறியியல் குழுவுக்கு வழிகாட்டல்
                  </h3>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    வணிக மற்றும் குடியிருப்பு வளாகங்களில் உதவிப் பொறியாளர்கள் மற்றும் மேஸ்திரிகளுக்கு அடுத்தகட்ட பணிகளை விளக்குகிறார்.
                  </p>
                </div>
              </ScrollReveal>

            </div>

            {/* Gallery Link */}
            <div className="mt-8 text-center">
              <Link
                to="/gallery"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-dsr-roof hover:text-dsr-civil py-1 group"
              >
                <Camera className="w-4 h-4 text-dsr-roof group-hover:scale-110 transition-transform" />
                <span>அனைத்து 13+ களப் புகைப்படங்களையும் புகைப்படத் தொகுப்பில் பார்க்க (View Full Gallery)</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </div>
        </section>


        {/* =========================================================
            3. 4 CORE PRINCIPLES OF MR. D. SELVARAJ
            ========================================================= */}
        <section className="py-16 sm:py-24 bg-dsr-white border-b border-dsr-silver" aria-labelledby="principles-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal className="max-w-3xl mb-14">
              <span className="text-xs uppercase tracking-widest text-dsr-cyan font-mono font-semibold">
                Guiding Construction Principles
              </span>
              <h2
                id="principles-heading"
                className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-dsr-navy tracking-tight mt-1 mb-4"
              >
                What Mr. D. Selvaraj guarantees for every build.
              </h2>
              <p className="text-base sm:text-lg text-dsr-navy/80 leading-relaxed">
                ஒவ்வொரு மனை உரிமையாளருக்கும் திரு. D. செல்வராஜ் அவர்களின் தனிப்பட்ட உறுதிமொழிகள்:
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Principle 1 */}
              <ScrollReveal delay={0.05} className="bg-dsr-ice-wash/50 border border-dsr-silver rounded-sm p-7 space-y-3 hover:border-dsr-roof transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-dsr-roof text-white rounded-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-dsr-cyan font-semibold">01. STRUCTURAL INTEGRITY</span>
                    <h3 className="font-headline font-bold text-2xl text-dsr-navy">
                      சமரசமற்ற கட்டமைப்புத் தரம்
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-dsr-navy/85 leading-relaxed">
                  அங்கீகரிக்கப்பட்ட முதன்மை Fe 550D TMT கம்பிகள் மற்றும் ஆய்வகப் பரிசோதனை செய்யப்பட்ட கான்கிரீட் மட்டுமே பயன்படுத்தப்படுகிறது. அஸ்திவாரம் மற்றும் தூண்களில் எவ்வித சமரசமும் செய்யப்படுவதில்லை.
                </p>
              </ScrollReveal>

              {/* Principle 2 */}
              <ScrollReveal delay={0.12} className="bg-dsr-ice-wash/50 border border-dsr-silver rounded-sm p-7 space-y-3 hover:border-dsr-roof transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-dsr-roof text-white rounded-xs">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-dsr-cyan font-semibold">02. BLUEPRINT ADHERENCE</span>
                    <h3 className="font-headline font-bold text-2xl text-dsr-navy">
                      துல்லியமான CAD வரைபடப் பொருத்தம்
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-dsr-navy/85 leading-relaxed">
                  கணினி வரைபடத்தில் திட்டமிடப்பட்ட கூரை மட்டங்கள், நிழல் தரும் சன்ஷேடுகள், சாளரங்கள் மற்றும் பால்கனி அமைப்புகள் களத்தில் அதே துல்லியத்துடன் கான்கிரீட்டாக மாற்றப்படுகின்றன.
                </p>
              </ScrollReveal>

              {/* Principle 3 */}
              <ScrollReveal delay={0.19} className="bg-dsr-ice-wash/50 border border-dsr-silver rounded-sm p-7 space-y-3 hover:border-dsr-roof transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-dsr-roof text-white rounded-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-dsr-cyan font-semibold">03. SYSTEMATIC CURING</span>
                    <h3 className="font-headline font-bold text-2xl text-dsr-navy">
                      முறையான நீர் ஊற்றிப் பதப்படுத்துதல்
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-dsr-navy/85 leading-relaxed">
                  கான்கிரீட் ஊற்றிய பின் அதன் முழு வலிமையைப் பெறுவதற்குத் தேவையான 21 நாட்கள் முறையான நீர் ஊற்றிப் பதப்படுத்துதல் (Water Curing) கண்டிப்புடன் பின்பற்றப்படுகிறது.
                </p>
              </ScrollReveal>

              {/* Principle 4 */}
              <ScrollReveal delay={0.26} className="bg-dsr-ice-wash/50 border border-dsr-silver rounded-sm p-7 space-y-3 hover:border-dsr-roof transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-dsr-roof text-white rounded-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-dsr-cyan font-semibold">04. TRANSPARENCY</span>
                    <h3 className="font-headline font-bold text-2xl text-dsr-navy">
                      மறைமுகச் செலவுகளற்ற வெளிப்படைத்தன்மை
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-dsr-navy/85 leading-relaxed">
                  கட்டுமான நிலைகள், செலவு விபரங்கள் மற்றும் பொருட்கள் கொள்முதல் அனைத்தும் மனை உரிமையாளருக்கு ஒவ்வொரு நிலையிலும் வெளிப்படையாகத் தெரிவிக்கப்படும்.
                </p>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* =========================================================
            4. DIRECT CONSULTATION INVITATION (RICH NAVY SECTION)
            ========================================================= */}
        <section className="py-16 sm:py-24 bg-dsr-navy text-white relative overflow-hidden" aria-labelledby="consult-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            
            <ScrollReveal className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-dsr-gold font-semibold">
                Direct Appointment & Consultation
              </span>
              <h2
                id="consult-heading"
                className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
              >
                Discuss your plot directly with Mr. D. Selvaraj
              </h2>
              <p className="text-base sm:text-lg text-dsr-silver/90 max-w-2xl mx-auto leading-relaxed">
                உங்கள் மனையின் அமைவிடம், மண் தன்மை, வரைபடம் அல்லது பட்ஜெட் எதுவாக இருந்தாலும், திரு. D. செல்வராஜ் அவர்களிடம் நேரடியாகப் பேசி முறையான வழிகாட்டலைப் பெறுங்கள்.
              </p>
            </ScrollReveal>

            {/* Contact Panel Card */}
            <ScrollReveal delay={0.1} className="bg-dsr-civil/40 border border-dsr-cyan/30 rounded-sm p-6 sm:p-10 max-w-3xl mx-auto space-y-6 backdrop-blur-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Primary Call Box */}
                <a
                  href={siteConfig.primaryPhone.tel}
                  className="p-4 bg-dsr-navy hover:bg-dsr-roof border border-dsr-civil hover:border-dsr-cyan rounded-xs transition-all flex items-center space-x-3 text-left group"
                >
                  <div className="p-3 bg-dsr-roof text-dsr-cyan group-hover:scale-105 transition-transform rounded-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-dsr-cyan uppercase tracking-wider">Primary Call Line</p>
                    <p className="text-lg font-bold text-white group-hover:text-dsr-cyan transition-colors">{siteConfig.primaryPhone.display}</p>
                  </div>
                </a>

                {/* Secondary Call Box */}
                <a
                  href={siteConfig.secondaryPhone.tel}
                  className="p-4 bg-dsr-navy hover:bg-dsr-roof border border-dsr-civil hover:border-dsr-cyan rounded-xs transition-all flex items-center space-x-3 text-left group"
                >
                  <div className="p-3 bg-dsr-roof text-dsr-cyan group-hover:scale-105 transition-transform rounded-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-dsr-cyan uppercase tracking-wider">Field Line</p>
                    <p className="text-lg font-bold text-white group-hover:text-dsr-cyan transition-colors">{siteConfig.secondaryPhone.display}</p>
                  </div>
                </a>

              </div>

              {/* Site Consultation Note */}
              <div className="pt-4 border-t border-dsr-civil/60 flex flex-col sm:flex-row items-center justify-between text-xs text-dsr-silver/80 gap-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-dsr-cyan" />
                  <span>தமிழ்நாடு முழுவதும் முன்பதிவு அடிப்படையில் நேரடி மனை ஆய்வு</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-dsr-gold" />
                  <span>காலை 9:00 - மாலை 7:00 (திங்கள் - சனி)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Magnetic strength={8}>
                  <Link
                    to="/contact?topic=Direct%20Consultation%20with%20Mr.%20D.%20Selvaraj"
                    className="min-h-[50px] w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-base tracking-wide rounded-sm shadow-md transition-all"
                  >
                    <span>ஆன்லைனில் மனை விபரங்களைப் பகிர</span>
                    <ArrowUpRight className="ml-2 w-5 h-5 text-dsr-navy" />
                  </Link>
                </Magnetic>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[50px] w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-dsr-cyan/40 font-semibold text-base rounded-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-dsr-cyan mr-2" />
                  <span>WhatsApp செய்தி அனுப்ப</span>
                </a>
              </div>

            </ScrollReveal>

          </div>
        </section>

      </main>
    </>
  );
};
