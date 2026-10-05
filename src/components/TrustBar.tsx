import React from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { Star, MessageSquareCheck, Layers, Clock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: Star,
      value: `${FARIS_CONFIG.brand.googleRating}★`,
      title: 'Google Rating',
      desc: 'Based on 1,266+ verified reviews',
      highlight: 'Top Rated in Edavannappara',
    },
    {
      icon: MessageSquareCheck,
      value: '1,266+',
      title: 'Google Reviews',
      desc: 'Trusted by families & travelers',
      highlight: 'Authentic Malabar Taste',
    },
    {
      icon: Layers,
      value: '3-in-1',
      title: 'Hospitality Hub',
      desc: 'Restaurant, Hotel & Bakery',
      highlight: 'Everything Under One Roof',
    },
    {
      icon: Clock,
      value: '7 AM – 12:30 AM',
      title: 'Daily Service',
      desc: 'Delivery active till 10:30 PM',
      highlight: 'Late-Night Food Ready',
    },
  ];

  return (
    <section id="trust-bar" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-faris-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-faris-100">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-faris-50 text-faris-600 flex items-center justify-center">
                  <stat.icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-faris-700 bg-faris-50/80 px-2 py-0.5 rounded-full">
                  {stat.highlight}
                </span>
              </div>

              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-faris-950 tracking-tight">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm font-bold text-neutral-800 mt-1">
                {stat.title}
              </div>

              <div className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
