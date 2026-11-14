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
                ஒரு கட்டிட வரைவு, அந்த இடத்தில் வாழப்போகும் மனிதர்களின் தினசரி தேவைகளிலிருந்தே துவங்குகிறது.
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
                  <span>மனை ஒருங்கிணைப்பு மற்றும் முகப்புத் தோற்ற ஆய்வுகள்</span>
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
                    அன்றாட வாழ்க்கைத் தேவைகளில் வேரூன்றிய நீடித்த பொறியியல்.
                  </h2>
                  <p className="text-base text-dsr-navy/85 leading-relaxed">
                    நாங்கள் கட்டுமானத்தை வெறும் கான்கிரீட் கலவையாகவோ, செங்கல் அடுக்குகளாகவோ மட்டும் பார்ப்பதில்லை; வெயில், மழை மற்றும் குடும்பத்தின் தலைமுறைத் தேவைகளைத் தாங்கி நிற்கும் பாதுகாப்பான கட்டமைப்பாகவே உருவாக்குகிறோம்.
                  </p>
                  <p className="text-sm text-dsr-navy/80 leading-relaxed">
                    மனையின் அமைவிடம் மற்றும் உள்ளூர் மண்ணின் தன்மையை ஆராய்ந்து பிரதான கட்டமைப்புத் தூண்களை அமைப்பதன் மூலம், ஒவ்வொரு அறையும் உறுதியான பயன்பாட்டைப் பெறுகிறது.
                  </p>
                </div>

                <div className="pt-6 border-t border-dsr-silver/60">
                  <p className="text-xs font-mono uppercase tracking-wider text-dsr-civil font-semibold">
                    களத்தில் பொறியாளர்களின் நேரடிக் கண்காணிப்பு
                  </p>
                  <p className="text-sm font-semibold text-dsr-navy mt-1">
                    தமிழ்நாடு சிவில் மற்றும் கட்டமைப்புப் பணிகள்
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
                அளவுகள் அல்லது டைல்ஸ் பற்றிப் பேசுவதற்கு முன், கட்டிடம் சிறப்பாகச் செயல்பட உதவும் மூன்று அடிப்படைக் காரணிகளை ஆராய்கிறோம்.
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
                  ஒவ்வொரு மனைக்கும் தனித்துவமான சூரிய வெளிச்சம், எல்லை இடைவெளிகள் மற்றும் அஸ்திவாரத்தைத் தீர்மானிக்கும் மண் அடுக்குகள் உள்ளன.
                </p>

                <div className="p-3.5 bg-dsr-ice-wash rounded-xs border-l-2 border-dsr-roof">
                  <p className="text-xs font-semibold text-dsr-civil uppercase tracking-wider mb-1">
                    நடைமுறை உதாரணம்
                  </p>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    பிற்பகல் தென்மேற்கு காற்றைப் பெறும் வகையிலும், மழைநீர் சேகரிப்புக்குத் தகுந்த வடிகால் வசதியுடனும் கட்டிடத்தை அமைத்தல்.
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
                  கட்டிடம் அங்கு வசிப்பவர்களின் அன்றாடப் பழக்கங்கள், அமைதியான நேரங்கள் மற்றும் முதியோர்களின் வசதிக்கேற்ப அமைய வேண்டும்.
                </p>

                <div className="p-3.5 bg-dsr-ice-wash rounded-xs border-l-2 border-dsr-roof">
                  <p className="text-xs font-semibold text-dsr-civil uppercase tracking-wider mb-1">
                    நடைமுறை உதாரணம்
                  </p>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    பெரியவர்களுக்காகத் தரைத்தளத்திலேயே படி ஏறி இறங்கத் தேவையில்லாத படுக்கையறையை அமைத்து, வரவேற்பறைச் சத்தத்திலிருந்து தனித்து வைத்தல்.
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
                  குடும்பத்தின் தனிப்பட்ட சுதந்திரத்தையும் அதே நேரத்தில் இயற்கையான காற்றோட்டத்தையும் சமநிலைப்படுத்துதல்.
                </p>

                <div className="p-3.5 bg-dsr-ice-wash rounded-xs border-l-2 border-dsr-roof">
                  <p className="text-xs font-semibold text-dsr-civil uppercase tracking-wider mb-1">
                    நடைமுறை உதாரணம்
                  </p>
                  <p className="text-xs text-dsr-navy/80 leading-relaxed">
                    மேற்குப் பகுதி வரவேற்பறைக்கு ஆழமான கான்கிரீட் சன்ஷேடுகள் அமைத்து, தோட்டக் காட்சியையும் வெளிச்சத்தையும் குறைக்காமல் வெப்பத்தைத் தடுத்தல்.
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* =========================================================
            3. FOUNDER & CIVIL ENGINEERING LEADERSHIP
            ========================================================= */}
        <section className="py-14 sm:py-20 bg-dsr-white border-b border-dsr-silver" aria-labelledby="leadership-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="p-6 sm:p-10 lg:p-12 border border-dsr-silver rounded-sm bg-dsr-ice-wash/40 max-w-5xl mx-auto shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Official Founder Portrait */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-sm overflow-hidden border border-dsr-silver shadow-md bg-white">
                    <img
                      src="/images/founder/selvaraj.jpeg"
                      alt="Er. Selvaraj, Founder & Chief Civil Engineer of DSR Civil Constructions"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      width="1280"
                      height="960"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dsr-navy/95 via-dsr-navy/60 to-transparent p-4 text-white">
                      <p className="text-xs font-mono uppercase tracking-widest text-dsr-cyan">
                        Founder & Chief Engineer
                      </p>
                      <p className="text-base font-bold text-white mt-0.5">
                        Mr. D. Selvaraj
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center space-x-3">
                    <span className="inline-block text-xs uppercase tracking-widest text-dsr-civil font-mono font-semibold px-2.5 py-1 bg-white border border-dsr-silver rounded-xs">
                      Leadership & Direct Supervision
                    </span>
                    <span className="text-xs font-mono text-dsr-roof font-semibold">100% Verified</span>
                  </div>

                  <h2 id="leadership-heading" className="font-headline font-bold text-3xl sm:text-4xl text-dsr-navy tracking-tight leading-tight">
                    Hands-on Engineering from Soil to Slab.
                  </h2>

                  <p className="text-base text-dsr-navy/85 leading-relaxed">
                    “ஒரு உறுதியான கட்டிடம் அலுவலக மேஜை வரைபடங்களில் மட்டும் முடிந்துவிடுவதில்லை; ஒவ்வொரு மனையின் மண் பரிசோதனை, அஸ்திவாரம் தோண்டுதல், கான்கிரீட் தரம், டி.எம்.டி கம்பி பிணைப்பு மற்றும் நீர் ஊற்றிப் பதப்படுத்துதல் (Curing) வரை களத்தில் நின்று நேரடியாக மேற்பார்வையிடுவதே எங்களின் தர உத்தரவாதம்.”
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-dsr-navy/80 font-mono">
                    <div className="p-3 bg-white rounded-xs border border-dsr-silver flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-dsr-cyan flex-shrink-0" />
                      <span>ஆய்வகப் பரிசோதனை கான்கிரீட்</span>
                    </div>
                    <div className="p-3 bg-white rounded-xs border border-dsr-silver flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-dsr-gold flex-shrink-0" />
                      <span>நேரடிக் களக் கண்காணிப்பு</span>
                    </div>
                    <div className="p-3 bg-white rounded-xs border border-dsr-silver flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-dsr-roof flex-shrink-0" />
                      <span>Fe 550D TMT கம்பிகள்</span>
                    </div>
                    <div className="p-3 bg-white rounded-xs border border-dsr-silver flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-dsr-civil flex-shrink-0" />
                      <span>துல்லியமான CAD திட்டமிடல்</span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
                    <Link
                      to="/owner"
                      className="inline-flex items-center space-x-2 text-sm font-bold text-dsr-navy bg-dsr-gold hover:bg-dsr-gold-hover px-4 py-2.5 rounded-xs shadow-xs transition-colors"
                    >
                      <span>திரு. D. செல்வராஜ் அவர்களின் விபரங்கள் (Meet Founder & Owner)</span>
                      <ArrowUpRight className="w-4 h-4 text-dsr-navy" />
                    </Link>
                    <Link
                      to="/gallery"
                      className="inline-flex items-center space-x-2 text-sm font-semibold text-dsr-roof hover:text-dsr-civil group py-1"
                    >
                      <span>களப் புகைப்படங்களைப் பார்வையிட (View Gallery)</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

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
                வெற்று மனை, நகராட்சி வரைபடம் அல்லது கட்டுமான நிலைகள் குறித்த சந்தேகங்கள் எதுவாக இருந்தாலும், நாங்கள் உங்கள் திட்டத்தைப் பற்றிக் கலந்துரையாடத் தயாராக உள்ளோம்.
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
