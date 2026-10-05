import React from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { 
  Share2, 
  Phone, 
  MapPin, 
  ArrowUp 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-faris-950 text-white relative pt-16 pb-28 sm:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-lg flex items-center justify-center">
                <img
                  src={FARIS_CONFIG.brand.logo}
                  alt={FARIS_CONFIG.brand.logoAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  FARIS GROUP
                </h3>
                <p className="text-xs text-gold-300 font-medium tracking-wider uppercase">
                  Edavannappara • Malappuram
                </p>
              </div>
            </div>

            <p className="text-cream-200/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              The celebrated home of authentic Malabari dum biryanis, pit-smoked Kuzhi Manthi, soundproof air-conditioned guest rooms, and artisan celebration cakes on Airport Road.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={FARIS_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-faris-500 text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={FARIS_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-faris-500 text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href={FARIS_CONFIG.social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gold-500 hover:text-faris-950 text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Linktree"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-gold-300 tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-200/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#restaurant" className="hover:text-white transition-colors">Restaurant & Menu</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Hotel Faris Rooms</a></li>
              <li><a href="#bakery" className="hover:text-white transition-colors">Bakery & Cakes</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Google Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-gold-300 tracking-wider uppercase">
              Operating Hours
            </h4>
            <div className="space-y-3 text-xs text-cream-200/80">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-bold text-white block">Restaurant</span>
                <span>7:00 AM – 12:30 AM (Daily)</span>
                <span className="block text-[10px] text-faris-400 mt-0.5">Delivery till 10:30 PM</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-bold text-white block">Hotel Rooms</span>
                <span>24/7 Front Desk Active</span>
                <span className="block text-[10px] text-gold-300 mt-0.5">Check-in: 1:00 PM • Out: 11:00 AM</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-bold text-white block">Bakery Studio</span>
                <span>7:00 AM – 11:30 PM</span>
              </div>
            </div>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-gold-300 tracking-wider uppercase">
              Edavannappara Hub
            </h4>
            
            <div className="space-y-3 text-xs text-cream-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-faris-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Busterminal Rd, Airport Road, near Edavannappara Bus Station & Fish Market, Malappuram, Kerala 673645
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-faris-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${FARIS_CONFIG.contact.primaryPhoneTel}`} className="hover:text-white">
                    {FARIS_CONFIG.contact.primaryPhoneDisplay} (Primary)
                  </a>
                  <a href={`tel:${FARIS_CONFIG.contact.secondaryPhoneTel}`} className="hover:text-white text-[11px] text-white/60">
                    {FARIS_CONFIG.contact.secondaryPhoneDisplay} (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={FARIS_CONFIG.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-300 hover:text-gold-200 underline"
                >
                  <span>Open in Google Maps GPS</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60">
          <div>
            © {new Date().getFullYear()} Faris Group. All rights reserved. Edavannappara, Malappuram, Kerala.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
