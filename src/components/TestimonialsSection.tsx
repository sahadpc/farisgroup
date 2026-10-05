import React, { useState } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { 
  Star, 
  Quote, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2 
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = FARIS_CONFIG.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-900 text-xs font-bold tracking-wider uppercase">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Verified Patron Voices</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-faris-950 tracking-tight">
              Beloved by 1,266+ Guests.{' '}
              <span className="text-faris-600 italic">4.1★ on Google.</span>
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Read authentic feedback from families, transit travelers, and food lovers who consider Faris Group their favorite stop in Malappuram.
            </p>
          </div>

          {/* View on Google Official Button */}
          <div className="flex-shrink-0">
            <a
              href={FARIS_CONFIG.contact.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-faris-50 hover:bg-faris-100 text-faris-900 border border-faris-200 font-bold text-xs transition-colors shadow-sm"
            >
              <span>View All on Google</span>
              <ExternalLink className="w-4 h-4 text-faris-600" />
            </a>
          </div>
        </div>

        {/* Featured Testimonial Hero Slider */}
        <div className="relative rounded-3xl bg-[#F8FAF7] border border-faris-100 p-8 sm:p-12 shadow-lg mb-12">
          <div className="absolute top-6 right-8 text-faris-200 pointer-events-none">
            <Quote className="w-20 h-20 opacity-40 rotate-180" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1 text-amber-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-faris-100 text-faris-800 text-[11px] font-bold">
                {testimonials[currentIndex].date}
              </span>
            </div>

            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-faris-950 font-medium leading-relaxed italic">
              “{testimonials[currentIndex].review}”
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-12 h-12 rounded-full bg-faris-600 text-white font-serif font-bold text-lg flex items-center justify-center shadow-md">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-sm text-faris-950 flex items-center gap-1.5">
                  <span>{testimonials[currentIndex].name}</span>
                  <CheckCircle2 className="w-4 h-4 text-faris-500" />
                </h4>
                <p className="text-xs text-neutral-500">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].source}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-cream-200">
            <button
              onClick={prevTestimonial}
              aria-label="Previous review"
              className="p-2.5 rounded-full border border-faris-200 text-faris-800 hover:bg-white transition-colors shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-semibold text-neutral-500">
              {currentIndex + 1} of {testimonials.length}
            </span>

            <button
              onClick={nextTestimonial}
              aria-label="Next review"
              className="p-2.5 rounded-full border border-faris-200 text-faris-800 hover:bg-white transition-colors shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-faris-100/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
                    Google Review
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-faris-950">{item.name}</div>
                  <div className="text-[10px] text-neutral-500">{item.location}</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-faris-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
