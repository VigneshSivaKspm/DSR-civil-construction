import React from 'react';
import { MessageSquareText, Compass, CheckSquare, CalendarDays } from 'lucide-react';
import { ProcessStage } from '../types';

const stages: (ProcessStage & { icon: React.ComponentType<{ className?: string }> })[] = [
  {
    step: '01',
    title: 'Share the brief',
    decision: 'Which rooms need morning light?',
    detail: 'We discuss family routines, privacy preferences, elders’ access on the ground floor, and how your household uses living spaces throughout the day.',
    icon: MessageSquareText,
  },
  {
    step: '02',
    title: 'Study the site',
    decision: 'How slope & wind guide placement?',
    detail: 'We examine plot boundary setbacks, soil conditions, monsoon water runoff, and prevailing breezes to anchor the building’s passive thermal comfort.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'Agree the scope',
    decision: 'What should the first estimate cover?',
    detail: 'We define the concrete structural milestones, material grades for steel and cement, plumbing ducts, and transparent delivery checkpoints.',
    icon: CheckSquare,
  },
  {
    step: '04',
    title: 'Plan the sequence',
    decision: 'Material staging and casting cycles?',
    detail: 'Before excavation begins, we lock in curing cycles, structural slab schedules, and procurement lead times so execution proceeds without idle days.',
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
                  Decision: {stage.decision}
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
