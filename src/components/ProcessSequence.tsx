import React from 'react';
import { MessageSquareText, Compass, CheckSquare, CalendarDays } from 'lucide-react';
import { ProcessStage } from '../types';

const stages: (ProcessStage & { icon: React.ComponentType<{ className?: string }> })[] = [
  {
    step: '01',
    title: 'Share the brief',
    decision: 'எந்த அறைகளுக்கு காலை வெளிச்சம் தேவை?',
    detail: 'குடும்பத்தின் தினசரி பழக்கங்கள், தனிமை விருப்பங்கள், தரைத்தளத்தில் பெரியவர்களுக்கான வசதிகள் மற்றும் பகல் நேரப் பயன்பாடு குறித்து கலந்துரையாடுகிறோம்.',
    icon: MessageSquareText,
  },
  {
    step: '02',
    title: 'Study the site',
    decision: 'நிலச் சரிவும் காற்றும் கட்டிடத்தை எவ்வாறு வழிநடத்துகிறது?',
    detail: 'இயற்கையான தட்பவெப்ப வசதியை உறுதிசெய்ய மனை எல்லைகள், மண்ணின் தன்மை, மழைநீர் வடிதல் மற்றும் வீசும் காற்றின் திசையை ஆய்வு செய்கிறோம்.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'Agree the scope',
    decision: 'தொடக்க மதிப்பீடு எவற்றை உள்ளடக்கியிருக்க வேண்டும்?',
    detail: 'கான்கிரீட் கட்டமைப்பு நிலைகள், கம்பி மற்றும் சிமெண்ட்டின் தரம், குழாய் அமைப்புகள் மற்றும் வெளிப்படையான பணி ஒப்படைப்பு நிலைகளை வரையறுக்கிறோம்.',
    icon: CheckSquare,
  },
  {
    step: '04',
    title: 'Plan the sequence',
    decision: 'பொருட்கள் வரத்து மற்றும் கான்கிரீட் சுழற்சி?',
    detail: 'பூமி தோண்டுவதற்கு முன்பே, நீர் ஊற்றும் நாட்கள் (Curing), தளம் அமைக்கும் அட்டவணை மற்றும் பொருட்கள் கொள்முதலைத் திட்டமிட்டு தேக்கமின்றிப் பணிகளை நகர்த்துகிறோம்.',
    icon: CalendarDays,
  },
];

export const ProcessSequence: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Desktop Horizontal Connecting Line */}
      <div className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-gradient-to-r from-dsr-cyan via-dsr-roof to-dsr-cyan/40 z-0" aria-hidden="true" />

      {/* Grid of 4 Stages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = idx === 0; // First step highlighted with gold hard hat color

          return (
            <div
              key={stage.step}
              className="relative flex flex-col p-6 rounded-sm bg-dsr-navy/60 border border-dsr-civil/60 backdrop-blur-xs transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Top Step Number & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm border-2 ${
                    isActive
                      ? 'bg-dsr-gold text-dsr-navy border-dsr-gold shadow-[0_0_12px_rgba(255,187,2,0.4)]'
                      : 'bg-dsr-civil text-white border-dsr-roof'
                  }`}
                >
                  {stage.step}
                </span>

                <div className="p-2 rounded-xs bg-dsr-civil/40 text-dsr-cyan border border-dsr-cyan/30">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-headline font-bold text-2xl text-white tracking-wide mb-2">
                {stage.title}
              </h3>

              {/* Pictureable Decision Tag */}
              <div className="mb-3">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-dsr-cyan bg-dsr-civil/60 px-2 py-1 rounded-xs border border-dsr-cyan/30">
                  முடிவு: {stage.decision}
                </span>
              </div>

              {/* Detail */}
              <p className="text-dsr-silver/90 text-sm leading-relaxed mt-auto pt-2">
                {stage.detail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
