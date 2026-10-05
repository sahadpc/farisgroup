import React from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { 
  UtensilsCrossed, 
  BedDouble, 
  Cake, 
  ArrowRight, 
  Check, 
  Sparkles 
} from 'lucide-react';

interface ThreeDivisionsProps {
  onOpenOrderModal: () => void;
  onOpenRoomModal: () => void;
}

export const ThreeDivisions: React.FC<ThreeDivisionsProps> = ({ 
  onOpenOrderModal, 
  onOpenRoomModal 
}) => {
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'restaurant':
        return UtensilsCrossed;
      case 'hotel':
        return BedDouble;
      case 'bakery':
        return Cake;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-faris-50 border border-faris-200 text-faris-800 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-faris-600" />
            <span>Three Pillars of Faris</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-faris-950 tracking-tight">
            One Landmark.{' '}
            <span className="text-faris-600 italic">Three World-Class Experiences.</span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Discover why Edavannappara chooses Faris Group for unforgettable dining, peaceful stays, and celebration confectioneries.
          </p>
        </div>

        {/* 3 Large Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FARIS_CONFIG.divisions.map((division) => {
            const Icon = getDivisionIcon(division.id);

            return (
              <div
                key={division.id}
                className="group relative rounded-3xl overflow-hidden bg-[#F8FAF7] border border-faris-100/80 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2"
              >
                {/* Image Header with Zoom on Hover */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-faris-950/90 via-faris-950/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-faris-900 text-xs font-bold shadow-md">
                      {division.badge}
                    </span>
                  </div>

                  {/* Division Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <div className="w-10 h-10 rounded-xl bg-faris-500/90 backdrop-blur-md text-white flex items-center justify-center mb-2 shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold tracking-tight">
                      {division.title}
                    </h3>
                    <p className="text-xs text-gold-300 font-medium">
                      {division.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {division.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-2 border-t border-cream-200">
                    {division.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs text-neutral-700">
                        <div className="w-4 h-4 rounded-full bg-faris-100 text-faris-700 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-3">
                    <a
                      href={division.link}
                      className="flex-1 py-3 px-4 rounded-xl bg-faris-900 hover:bg-faris-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md group-hover:bg-faris-600"
                    >
                      <span>Explore {division.title.split(' ')[1] || division.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {division.id === 'restaurant' && (
                      <button
                        onClick={onOpenOrderModal}
                        className="py-3 px-3.5 rounded-xl bg-faris-100 text-faris-800 hover:bg-faris-200 text-xs font-bold transition-colors"
                        title="Quick Order Food"
                      >
                        Order
                      </button>
                    )}

                    {division.id === 'hotel' && (
                      <button
                        onClick={onOpenRoomModal}
                        className="py-3 px-3.5 rounded-xl bg-gold-100 text-gold-800 hover:bg-gold-200 text-xs font-bold transition-colors"
                        title="Book Room"
                      >
                        Book
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
