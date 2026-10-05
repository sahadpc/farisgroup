import React, { useState } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Navigation, 
  MessageCircle, 
  CheckCircle2 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    department: 'General / Restaurant',
    message: '',
  });

  const [formSent, setFormSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Contact Message - Faris Group*\n\n` +
      `👤 *Name:* ${contactForm.name}\n` +
      `📞 *Phone:* ${contactForm.phone}\n` +
      `🏢 *Department:* ${contactForm.department}\n` +
      `💬 *Message:* ${contactForm.message}\n\n` +
      `_Sent from Faris Group Website_`;

    const waUrl = `https://wa.me/${FARIS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-faris-50 border border-faris-200 text-faris-800 text-xs font-bold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-faris-600" />
            <span>Visit or Connect</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-faris-950 tracking-tight">
            Find Us in{' '}
            <span className="text-faris-600 italic">Edavannappara.</span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Conveniently located on Airport Road near Edavannappara Bus Station. Our doors and phone lines are open to serve you daily.
          </p>
        </div>

        {/* Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${FARIS_CONFIG.contact.primaryPhoneTel}`}
                className="btn-luxury-green p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-md group"
              >
                <Phone className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold">Call Front Desk</span>
                <span className="text-[10px] text-white/80">{FARIS_CONFIG.contact.primaryPhoneDisplay}</span>
              </a>

              <a
                href={FARIS_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#25D366] hover:bg-[#20BA59] text-white flex flex-col items-center justify-center text-center shadow-md transition-colors group"
              >
                <MessageCircle className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold">WhatsApp Direct</span>
                <span className="text-[10px] text-white/90">Instant replies</span>
              </a>

              <a
                href={FARIS_CONFIG.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-gold p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-md group"
              >
                <Navigation className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold">Get Directions</span>
                <span className="text-[10px] text-neutral-800">Google Maps GPS</span>
              </a>
            </div>

            {/* Address & Timings Card */}
            <div className="bg-[#F8FAF7] rounded-3xl p-6 sm:p-8 border border-faris-100 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-faris-500/10 text-faris-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-faris-950">
                    Location & Landmark
                  </h4>
                  <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">
                    {FARIS_CONFIG.contact.address.fullAddress}
                  </p>
                  <p className="text-[11px] text-faris-700 font-medium">
                    Opposite / Near Edavannappara Bus Stand & Fish Market • Ample private parking in front
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-cream-200">
                <div className="w-10 h-10 rounded-xl bg-faris-500/10 text-faris-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <h4 className="font-serif text-lg font-bold text-faris-950">
                    Operating Hours
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-white border border-faris-100">
                      <span className="font-bold text-faris-950 block">Restaurant</span>
                      <span className="text-neutral-600">7:00 AM – 12:30 AM</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-faris-100">
                      <span className="font-bold text-faris-950 block">Hotel Faris</span>
                      <span className="text-neutral-600">24/7 Reception Desk</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-faris-100">
                      <span className="font-bold text-faris-950 block">Bakery Studio</span>
                      <span className="text-neutral-600">7:00 AM – 11:30 PM</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-faris-100">
                      <span className="font-bold text-faris-950 block">Food Delivery</span>
                      <span className="text-neutral-600">Active till 10:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-faris-950">Direct Contact Numbers:</span>
                  <div className="text-neutral-600 flex flex-wrap gap-2 mt-0.5">
                    <a href={`tel:${FARIS_CONFIG.contact.primaryPhoneTel}`} className="hover:text-faris-700 underline font-semibold">
                      {FARIS_CONFIG.contact.primaryPhoneDisplay}
                    </a>
                    <span>•</span>
                    <a href={`tel:${FARIS_CONFIG.contact.secondaryPhoneTel}`} className="hover:text-faris-700 underline font-semibold">
                      {FARIS_CONFIG.contact.secondaryPhoneDisplay}
                    </a>
                  </div>
                </div>
                <span className="text-[10px] text-neutral-400">
                  TODO: Owner to confirm preferred primary line
                </span>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-[#F8FAF7] rounded-3xl p-6 sm:p-8 border border-faris-100 shadow-sm">
              <h4 className="font-serif text-xl font-bold text-faris-950 mb-1">
                Drop Us a Message
              </h4>
              <p className="text-xs text-neutral-500 mb-6">
                Have a query or feedback? Send directly to management via WhatsApp.
              </p>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Mobile / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="Phone"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Inquiry Topic</label>
                  <select
                    value={contactForm.department}
                    onChange={(e) => setContactForm({ ...contactForm, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white"
                  >
                    <option value="General / Restaurant">Restaurant & Catering</option>
                    <option value="Hotel Faris Rooms">Hotel Rooms & Tariff</option>
                    <option value="Bakery & Custom Cakes">Bakery & Custom Cakes</option>
                    <option value="Banquet / Private Dining">Private Dining Hall Booking</option>
                    <option value="Customer Feedback">Customer Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Your Message</label>
                  <textarea
                    rows={3}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="How may we assist you?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-luxury-green w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>

                {formSent && (
                  <div className="p-3 rounded-xl bg-faris-100 text-faris-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-faris-600 flex-shrink-0" />
                    <span>Inquiry prepared! We look forward to connecting with you.</span>
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Visual */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] relative">
              <iframe
                title="Faris Group Edavannappara Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1256086782574!2d75.99268687593717!3d11.252063850239634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64380a1334f59%3A0x3be86493dd377cdd!2sHotel%20Faris%20%26%20Bakery!5e0!3m2!1sen!2sin!4v1717500000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="bg-[#F8FAF7] rounded-3xl p-6 border border-faris-100 shadow-sm">
              <h5 className="font-serif font-bold text-faris-950 text-base mb-3">
                Key Travel Transit Points
              </h5>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-faris-100">
                  <span className="font-bold text-faris-950 block">Edavannappara Bus Stand</span>
                  <span className="text-neutral-500">2 min walk (~100m)</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-faris-100">
                  <span className="font-bold text-faris-950 block">Calicut Airport (CCJ)</span>
                  <span className="text-neutral-500">Approx. 18-20 km (Direct route)</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-faris-100">
                  <span className="font-bold text-faris-950 block">Kozhikode City</span>
                  <span className="text-neutral-500">Approx. 28 km</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-faris-100">
                  <span className="font-bold text-faris-950 block">Malappuram Town</span>
                  <span className="text-neutral-500">Approx. 26 km</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
