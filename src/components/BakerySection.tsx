import React, { useState } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { 
  Cake, 
  Sparkles, 
  Send, 
  CheckCircle, 
  Calendar, 
  User, 
  Phone, 
  Gift 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const BakerySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: 'Birthday',
    date: '',
    weight: '1 kg',
    flavor: 'Chocolate Truffle',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22A94D', '#C9A862', '#0B3D1F'],
      });
    } catch {
      // Fallback
    }

    const text = `*New Custom Cake Enquiry - Faris Bakery*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🎉 *Occasion:* ${formData.occasion}\n` +
      `📅 *Date Needed:* ${formData.date || 'Soon'}\n` +
      `🎂 *Weight:* ${formData.weight}\n` +
      `🍫 *Preferred Flavor:* ${formData.flavor}\n` +
      `📝 *Message/Custom Design Note:* ${formData.message || 'Please send available photo designs.'}\n\n` +
      `_Sent from Faris Group Website_`;

    const waUrl = `https://wa.me/${FARIS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="bakery" className="py-20 lg:py-28 bg-[#F4F7F2] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-faris-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-faris-100/80 border border-faris-200 text-faris-900 text-xs font-bold tracking-wider uppercase">
            <Cake className="w-3.5 h-3.5 text-faris-600" />
            <span>Faris Bakery & Cake Studio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-faris-950 tracking-tight">
            Sweet Beginnings &{' '}
            <span className="text-faris-600 italic">Artisan Celebrations.</span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            From oven-fresh morning breads and flaky tea-time puffs to showstopping tiered birthday and wedding cakes crafted by master pastry chefs.
          </p>
        </div>

        {/* 2-Column Showcase: Visual Cards & Custom Order Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white bg-white">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1000"
                  alt="Faris Bakery Handcrafted Custom Cakes"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-faris-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-gold-500/90 text-faris-950 text-xs font-bold mb-2 inline-block">
                    Live Bakery Daily
                  </span>
                  <h3 className="font-serif text-2xl font-bold">
                    Custom Cakes Made with Malabar Love
                  </h3>
                  <p className="text-xs text-cream-100/80 mt-1">
                    Chocolate Truffle • Red Velvet • Mango Gateau • Pistachio Tres Leches
                  </p>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-cream-200">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-bold text-faris-950">100% Fresh Daily</div>
                  <div className="text-[11px] text-neutral-500">Zero artificial preservatives</div>
                </div>
                <div className="text-center sm:text-left border-t sm:border-t-0 sm:border-l border-cream-200 pt-2 sm:pt-0 sm:pl-4">
                  <div className="text-xs font-bold text-faris-950">Same-Day Baking</div>
                  <div className="text-[11px] text-neutral-500">Pick up or local drop</div>
                </div>
                <div className="text-center sm:text-left border-t sm:border-t-0 sm:border-l border-cream-200 pt-2 sm:pt-0 sm:pl-4">
                  <div className="text-xs font-bold text-faris-950">Eggless Options</div>
                  <div className="text-[11px] text-neutral-500">Custom diet requests</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-faris-100/80 shadow-sm flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-faris-50 text-faris-600 flex items-center justify-center flex-shrink-0">
                  <Cake className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-faris-950">Designer Cakes</h5>
                  <p className="text-[11px] text-neutral-500">Photo & Fondant art</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-faris-100/80 shadow-sm flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-faris-950">Tea-Time Puffs</h5>
                  <p className="text-[11px] text-neutral-500">Chicken, Meat, Veg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Cake Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-faris-100 relative">
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-faris-700 uppercase tracking-wider">
                  <Gift className="w-4 h-4 text-faris-500" />
                  <span>Instant WhatsApp Booking</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-faris-950">
                  Order Your Custom Cake
                </h3>
                <p className="text-xs text-neutral-500">
                  Tell us your dream cake details and receive instant design previews and pricing on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Shafeeq Rahman"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs text-neutral-800"
                      />
                      <User className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-3" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      WhatsApp Phone *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98460 12345"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs text-neutral-800"
                      />
                      <Phone className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-3" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs text-neutral-800 bg-white"
                    >
                      <option value="Birthday">Birthday</option>
                      <option value="Wedding / Engagement">Wedding / Engagement</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Baby Shower / Welcome">Baby Shower / Welcome</option>
                      <option value="Farewell / Party">Farewell / Party</option>
                      <option value="Festival / Eid">Festival / Eid</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Needed Date & Time
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs text-neutral-800"
                      />
                      <Calendar className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Approx Weight
                    </label>
                    <select
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs text-neutral-800 bg-white"
                    >
                      <option value="0.5 kg">0.5 kg (Small)</option>
                      <option value="1 kg">1 kg (Standard Party)</option>
                      <option value="1.5 kg">1.5 kg</option>
                      <option value="2 kg">2 kg (Grand Party)</option>
                      <option value="3+ kg Multi-Tier">3+ kg Multi-Tier</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Favorite Flavor
                    </label>
                    <select
                      value={formData.flavor}
                      onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs text-neutral-800 bg-white"
                    >
                      <option value="Belgian Chocolate Truffle">Belgian Chocolate Truffle</option>
                      <option value="Red Velvet Cream Cheese">Red Velvet Cream Cheese</option>
                      <option value="Black Forest Classic">Black Forest Classic</option>
                      <option value="White Forest Delight">White Forest Delight</option>
                      <option value="Pistachio Tres Leches">Pistachio Tres Leches</option>
                      <option value="Mango / Fresh Fruit Gateau">Mango / Fresh Fruit Gateau</option>
                      <option value="Spanish Delight Butterscotch">Spanish Delight Butterscotch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Text on Cake / Theme Instructions
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. 'Happy 25th Birthday Farhan!' / Eggless request / Theme design"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs text-neutral-800"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-luxury-green w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Cake Enquiry to WhatsApp</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-faris-50 border border-faris-200 text-faris-800 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-faris-600 flex-shrink-0" />
                    <span>WhatsApp chat opened! Our pastry coordinator will reply promptly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
