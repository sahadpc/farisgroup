import React from 'react';
import { Sparkles, CheckCircle2, MapPin } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#F8FAF7] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-faris-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Parallax / Overlapping cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
                  alt="Faris Group Hospitality and Malabar Ambience"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-faris-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold mb-2">
                    <MapPin className="w-3 h-3 text-gold-300" />
                    <span>Edavannappara, Malappuram</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold">
                    A Legacy of Authentic Malabar Hospitality
                  </h4>
                </div>
              </div>

              {/* Floating Secondary Image Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 sm:w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600"
                  alt="Signature Faris Dum Biryani"
                  className="w-full h-36 object-cover"
                />
                <div className="p-3 text-center bg-white">
                  <p className="font-serif font-bold text-faris-950 text-xs">
                    Authentic Dum Biryani
                  </p>
                  <p className="text-[10px] text-faris-600 font-medium">
                    Slow-cooked to perfection
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-faris-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-faris-500 text-white flex items-center justify-center font-serif text-xl font-bold">
                  F
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">4.1★ on Google</div>
                  <div className="text-[11px] text-neutral-500">1,266+ Happy Patrons</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Brand Story */}
          <div className="lg:col-span-6 space-y-6 text-neutral-700">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-faris-50 border border-faris-200 text-faris-800 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-faris-600" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-faris-950 tracking-tight leading-[1.2]">
              Rooted in Malabar.{' '}
              <span className="text-faris-600 italic block sm:inline">
                Dedicated to Excellence.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
              Nestled strategically on Airport Road near the bustling Edavannappara Bus Station, <strong className="font-semibold text-faris-950">Faris Group</strong> was born from a singular vision: to create a comprehensive haven where Malabar’s rich culinary soul meets the uncompromising comfort of modern hospitality.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Whether you are craving the deep, aromatic dum of our signature Beef Biryani, the charcoal smokiness of Yemeni Kuzhi Manthi, seeking a serene, soundproof air-conditioned room before a flight, or picking up a handcrafted birthday cake for someone you love — Faris Group welcomes you with genuine Malabari warmth.
            </p>

            {/* Core Values Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: 'Generous Malabari Portions', desc: 'Prepared with whole spices and pristine ingredients' },
                { title: 'Soundproof Sanctuary', desc: 'Acoustic glass rooms designed for total peace' },
                { title: 'Artisan Cake Mastery', desc: 'Bespoke designs baked fresh daily in our ovens' },
                { title: 'Airport Route Convenience', desc: 'Swift access with expansive private parking' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-faris-100/80 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-faris-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-faris-950">{item.title}</h5>
                    <p className="text-[11px] text-neutral-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Quote */}
            <div className="p-4 rounded-2xl bg-faris-50/70 border-l-4 border-faris-500 text-xs sm:text-sm text-faris-950 italic font-serif">
              “To us, hospitality is not merely a service; it is an inheritance of Malabar generosity. When you enter Faris, you are family.”
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
