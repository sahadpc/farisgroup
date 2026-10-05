import React, { useState, useRef } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import type { MenuItem } from '../data/farisData';
import { 
  UtensilsCrossed, 
  Flame, 
  ChevronLeft, 
  ChevronRight, 
  Bike, 
  ShoppingBag, 
  Users, 
  Plus, 
  MessageCircle, 
  Award 
} from 'lucide-react';

interface RestaurantSectionProps {
  onSelectItemForOrder: (item: MenuItem) => void;
  onOpenGeneralOrder: () => void;
}

export const RestaurantSection: React.FC<RestaurantSectionProps> = ({ 
  onSelectItemForOrder, 
  onOpenGeneralOrder 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredMenuItems = activeCategory === 'all'
    ? FARIS_CONFIG.menuItems
    : FARIS_CONFIG.menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="restaurant" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-faris-50 border border-faris-200 text-faris-800 text-xs font-bold tracking-wider uppercase">
              <UtensilsCrossed className="w-3.5 h-3.5 text-faris-600" />
              <span>Faris Restaurant & Dining</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-faris-950 tracking-tight">
              Culinary Malabar at Its{' '}
              <span className="text-faris-600 italic">Finest Dum & Flame.</span>
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              From dawn to past midnight, indulge in authentic Malabar dum biryanis, pit-smoked Arabic Kuzhi Manthi, charcoal grills, coastal seafood curries, and sizzlers.
            </p>
          </div>

          {/* Service Features Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cream-100 border border-cream-200 text-xs font-semibold text-neutral-800">
              <Users className="w-4 h-4 text-faris-600" />
              <span>Dine-In & AC Family Room</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cream-100 border border-cream-200 text-xs font-semibold text-neutral-800">
              <ShoppingBag className="w-4 h-4 text-faris-600" />
              <span>Takeaway / Collection</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cream-100 border border-cream-200 text-xs font-semibold text-neutral-800">
              <Bike className="w-4 h-4 text-faris-600" />
              <span>Home Delivery (till 10:30 PM)</span>
            </div>
          </div>
        </div>

        {/* 1. SIGNATURE DISHES SHOWCASE CAROUSEL */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-faris-950 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>Signature Dishes of Edavannappara</span>
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                The recipes that made Faris famous across Malappuram
              </p>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-10 h-10 rounded-full border border-faris-200 flex items-center justify-center text-faris-800 hover:bg-faris-50 transition-colors shadow-sm"
                aria-label="Previous dishes"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-10 h-10 rounded-full border border-faris-200 flex items-center justify-center text-faris-800 hover:bg-faris-50 transition-colors shadow-sm"
                aria-label="Next dishes"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {FARIS_CONFIG.signatureDishes.map((dish, idx) => (
              <div
                key={idx}
                className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 bg-[#F8FAF7] rounded-3xl overflow-hidden border border-faris-100 shadow-md hover:shadow-xl transition-all duration-300 snap-start flex flex-col group"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-faris-950/80 backdrop-blur-md text-gold-300 text-[11px] font-bold">
                      {dish.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-faris-950 text-xs font-extrabold shadow">
                      {dish.price}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-faris-600">
                      {dish.cuisine}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-faris-950 mt-0.5">
                      {dish.name}
                    </h4>
                    <p className="text-neutral-600 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${FARIS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Faris Group, I would like to order the signature dish: *${dish.name}* (${dish.price}). Please share delivery/dining availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-faris-100 hover:bg-faris-500 text-faris-900 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. FILTERABLE MENU PREVIEW */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-faris-950">
              Explore Our Curated Menu
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500">
              Filter by cuisine to explore our daily feasts and chef specials
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {FARIS_CONFIG.menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-faris-900 text-white shadow-md'
                    : 'bg-cream-100 hover:bg-faris-50 text-neutral-700 border border-faris-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8FAF7] rounded-2xl overflow-hidden border border-faris-100/90 shadow-sm hover:shadow-lg transition-all p-4 flex gap-4 items-center group"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.badge && (
                    <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-faris-900/90 text-gold-300 text-[9px] font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h5 className="font-serif text-sm sm:text-base font-bold text-faris-950 truncate">
                        {item.name}
                      </h5>
                    </div>
                    <p className="text-neutral-500 text-[11px] sm:text-xs mt-1 line-clamp-2 leading-snug">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-cream-200">
                    <span className="font-extrabold text-faris-700 text-sm">
                      {item.price}
                    </span>

                    <button
                      onClick={() => onSelectItemForOrder(item)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-faris-500 hover:bg-faris-600 text-white text-[11px] font-bold shadow-sm transition-colors"
                      title={`Order ${item.name}`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dining Perks & Private Hall Notice */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-faris-950 via-faris-900 to-faris-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold border border-gold-400/30">
                <Award className="w-3.5 h-3.5" />
                <span>Special Dining Services</span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold">
                Private Dining Room & All-You-Can-Eat Celebrations
              </h4>
              <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl">
                Planning a family gathering, business lunch, or wedding feast? We offer an air-conditioned private dining hall with customized menus and dedicated banquet service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={onOpenGeneralOrder}
                className="btn-luxury-green px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap shadow-md"
              >
                Place Custom Order
              </button>
              <a
                href={`tel:${FARIS_CONFIG.contact.primaryPhoneTel}`}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold whitespace-nowrap text-center transition-colors"
              >
                Reserve Table / Hall
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
