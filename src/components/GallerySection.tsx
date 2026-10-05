import React, { useState } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { 
  Images, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn 
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'rooms' | 'bakery' | 'ambience'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Signature Dishes' },
    { id: 'rooms', label: 'Hotel Rooms' },
    { id: 'bakery', label: 'Artisan Bakery' },
    { id: 'ambience', label: 'Ambience & Grounds' },
  ];

  const filteredItems = activeCategory === 'all'
    ? FARIS_CONFIG.gallery
    : FARIS_CONFIG.gallery.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8FAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-faris-50 border border-faris-200 text-faris-800 text-xs font-bold tracking-wider uppercase">
            <Images className="w-3.5 h-3.5 text-faris-600" />
            <span>Visual Glimpse</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-faris-950 tracking-tight">
            Moments at{' '}
            <span className="text-faris-600 italic">Faris Group.</span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            A window into the flavors, serenity, and celebration cakes waiting for you in Edavannappara.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-faris-900 text-white shadow-md'
                    : 'bg-white hover:bg-faris-50 text-neutral-700 border border-faris-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-72 sm:h-80 border border-faris-100/70"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faris-950/85 via-faris-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Overlay Info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-30"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightbox}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[activeLightboxIndex]?.image}
              alt={filteredItems[activeLightboxIndex]?.title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h5 className="font-serif text-xl font-bold">
                {filteredItems[activeLightboxIndex]?.title}
              </h5>
              <p className="text-xs text-gold-300 capitalize mt-0.5">
                Category: {filteredItems[activeLightboxIndex]?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
