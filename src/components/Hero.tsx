import React from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { 
  Star, 
  UtensilsCrossed, 
  BedDouble, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Clock 
} from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenRoomModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onOpenRoomModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-faris-950"
    >
      {/* Background Cinematic Food & Hospitality Collage */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=85&w=2000"
          alt="Faris Group Malabar Hospitality Feast"
          className="w-full h-full object-cover object-center scale-105 animate-[pulseSubtle_12s_infinite]"
        />
        {/* Layered Gradient Overlays for Luxury Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-faris-950/95 via-faris-950/80 to-faris-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-faris-950 via-faris-950/50 to-black/60" />
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Brand Pill & Google Rating Badge */}
            <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cream-50 text-xs font-semibold shadow-inner">
                <span className="w-2 h-2 rounded-full bg-faris-400 animate-ping" />
                <span className="text-white">Edavannappara’s Premier Hospitality Landmark</span>
              </div>

              {/* Floating Google Rating Pill */}
              <a
                href={FARIS_CONFIG.contact.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-bold hover:bg-gold-500/30 transition-colors"
                title="Read Google Reviews"
              >
                <div className="flex items-center text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>4.1★</span>
                <span className="text-white/70 font-normal">| 1,266+ Google Reviews</span>
              </a>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.12]">
              Taste of Malabar.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cream-100 via-gold-200 to-faris-200 italic font-serif">
                Comfort of Home.
              </span>
            </h1>

            {/* Sub-line */}
            <p className="text-lg sm:text-xl text-cream-100/90 font-light max-w-2xl leading-relaxed">
              Restaurant • Hotel • Bakery, Edavannappara
            </p>

            <p className="text-sm sm:text-base text-cream-200/80 font-normal max-w-xl leading-relaxed">
              The cherished culinary and lodging destination on Airport Road. Celebrated for slow-cooked Beef Biryani, smoky Kuzhi Manthi, soundproof AC rooms, and fresh celebration cakes.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 justify-center sm:justify-start">
              <a
                href="#restaurant"
                className="btn-luxury-green px-7 py-4 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center gap-2.5 shadow-xl shadow-faris-500/25 group"
              >
                <UtensilsCrossed className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Menu</span>
              </a>

              <button
                onClick={onOpenRoomModal}
                className="btn-luxury-gold px-7 py-4 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center gap-2.5 shadow-xl shadow-gold-500/25 group"
              >
                <BedDouble className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Book a Stay</span>
              </button>

              <button
                onClick={onOpenOrderModal}
                className="px-6 py-4 rounded-xl text-sm font-semibold tracking-wide text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-gold-300" />
                <span>Quick Order</span>
              </button>
            </div>

            {/* Trust highlights checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
              {[
                { label: '100% Halal Food', icon: ShieldCheck },
                { label: 'Soundproof AC Rooms', icon: BedDouble },
                { label: 'Free Private Parking', icon: MapPin },
                { label: 'Open 7 AM - Midnight', icon: Clock },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-cream-100/75 py-1"
                >
                  <badge.icon className="w-3.5 h-3.5 text-faris-400 flex-shrink-0" />
                  <span className="truncate">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Floating Visual Card */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-white/20 via-faris-500/20 to-transparent backdrop-blur-xl shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-faris-900/80 p-6 border border-white/10 text-white space-y-5">
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center">
                    <img
                      src={FARIS_CONFIG.brand.logo}
                      alt={FARIS_CONFIG.brand.logoAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">Faris Hospitality</h3>
                    <p className="text-xs text-gold-300 font-medium">Under One Roof</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between text-xs font-semibold text-faris-300 mb-1">
                      <span>Restaurant</span>
                      <span className="text-[10px] text-white/60">₹200 - ₹400 / person</span>
                    </div>
                    <p className="text-xs text-cream-100/80">
                      Biryani, Kuzhi Manthi, Shawarma & Fresh Seafood
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between text-xs font-semibold text-gold-300 mb-1">
                      <span>Hotel Faris Rooms</span>
                      <span className="text-[10px] text-white/60">From ₹1,500 / night</span>
                    </div>
                    <p className="text-xs text-cream-100/80">
                      Soundproof AC suites, Free Wi-Fi, Airport transit
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between text-xs font-semibold text-rose-300 mb-1">
                      <span>Faris Bakery & Cakes</span>
                      <span className="text-[10px] text-white/60">Custom on order</span>
                    </div>
                    <p className="text-xs text-cream-100/80">
                      Artisan birthday cakes, fresh pastries, evening snacks
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${FARIS_CONFIG.contact.primaryPhoneTel}`}
                  className="w-full py-3 bg-gradient-to-r from-faris-600 to-faris-500 hover:from-faris-500 hover:to-faris-400 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Quick Desk: {FARIS_CONFIG.contact.primaryPhoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <a
        href="#trust-bar"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
