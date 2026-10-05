import React from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { 
  ShieldCheck, 
  Flame, 
  ParkingSquare, 
  BedDouble, 
  Clock3, 
  Building2, 
  Sparkles 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Flame':
        return Flame;
      case 'ParkingSquare':
        return ParkingSquare;
      case 'BedDouble':
        return BedDouble;
      case 'Clock3':
        return Clock3;
      case 'Building2':
        return Building2;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-faris-950 via-faris-900 to-faris-950 text-white relative overflow-hidden">
      {/* Decorative green and gold ambient lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-faris-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>The Faris Distinction</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Why Edavannappara Puts Its{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream-100 via-gold-200 to-faris-300 italic">
              Trust in Faris.
            </span>
          </h2>

          <p className="text-cream-200/80 text-sm sm:text-base leading-relaxed">
            Crafting uncompromised dining and lodging standards since day one. Here is why our patrons return again and again.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FARIS_CONFIG.whyChooseUs.map((pillar, idx) => {
            const Icon = getIcon(pillar.icon);

            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-faris-500/30 to-gold-500/20 border border-faris-400/30 flex items-center justify-center text-faris-400 group-hover:text-gold-300 transition-colors shadow-lg">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-cream-200/75 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-faris-400 group-hover:text-gold-300 transition-colors">
                  <span>Guaranteed Standard</span>
                  <span className="text-xs">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
