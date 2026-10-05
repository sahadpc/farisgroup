import React, { useState, useEffect } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { 
  Phone, 
  Menu as MenuIcon, 
  X, 
  UtensilsCrossed, 
  BedDouble, 
  ChevronRight,
  Clock,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenRoomModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, onOpenRoomModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Restaurant', href: '#restaurant' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Bakery', href: '#bakery' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-panel shadow-lg shadow-faris-950/5 py-3 border-b border-faris-900/10'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Title */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-faris-500 rounded-xl p-1"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center border border-white/80 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={FARIS_CONFIG.brand.logo}
                  alt={FARIS_CONFIG.brand.logoAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 leading-tight ${
                    isScrolled ? 'text-faris-950' : 'text-white'
                  }`}
                >
                  FARIS GROUP
                </span>
                <span
                  className={`text-[10px] sm:text-[11px] font-medium tracking-wider uppercase transition-colors duration-300 ${
                    isScrolled ? 'text-faris-700' : 'text-cream-100/90'
                  }`}
                >
                  Edavannappara
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-black/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isScrolled
                      ? 'text-neutral-700 hover:text-faris-700 hover:bg-faris-50'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${FARIS_CONFIG.contact.primaryPhoneTel}`}
                className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-faris-900 hover:bg-faris-50'
                    : 'text-white hover:bg-white/10'
                }`}
                title="Call Faris Group"
              >
                <Phone className="w-3.5 h-3.5 text-faris-500" />
                <span>{FARIS_CONFIG.contact.primaryPhoneDisplay}</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="btn-luxury-green px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide flex items-center gap-2 shadow-sm"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Order Food</span>
              </button>

              <button
                onClick={onOpenRoomModal}
                className="btn-luxury-gold px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide flex items-center gap-2 shadow-sm"
              >
                <BedDouble className="w-3.5 h-3.5" />
                <span>Book a Stay</span>
              </button>
            </div>

            {/* Mobile Actions: Order Quick Button + Menu Trigger */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={onOpenOrderModal}
                className="btn-luxury-green px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Order</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className={`p-2.5 rounded-xl transition-colors ${
                  isScrolled
                    ? 'bg-faris-50 text-faris-900 hover:bg-faris-100'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
                }`}
              >
                <MenuIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Glass Drawer */}
      <div
        className={`fixed inset-0 z-[100] xl:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-faris-950/80 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white flex flex-col justify-between p-6 shadow-2xl transition-transform duration-500 overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-cream-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-faris-50 p-1 border border-faris-200 flex items-center justify-center">
                  <img
                    src={FARIS_CONFIG.brand.logo}
                    alt={FARIS_CONFIG.brand.logoAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-faris-950 text-lg">FARIS GROUP</h3>
                  <p className="text-[11px] text-faris-600 uppercase tracking-wider">Edavannappara</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="btn-luxury-green py-3 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Order Food</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRoomModal();
                }}
                className="btn-luxury-gold py-3 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <BedDouble className="w-4 h-4" />
                <span>Book Stay</span>
              </button>
            </div>

            <nav className="mt-6 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-neutral-800 font-semibold hover:bg-faris-50 hover:text-faris-700 transition-colors text-sm"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-cream-200 space-y-4">
            <div className="flex items-start gap-2.5 text-xs text-neutral-600">
              <MapPin className="w-4 h-4 text-faris-600 flex-shrink-0 mt-0.5" />
              <span>Airport Rd, near Edavannappara Bus Station, Malappuram</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-neutral-600">
              <Clock className="w-4 h-4 text-faris-600 flex-shrink-0" />
              <span>7:00 AM – 12:30 AM (Daily)</span>
            </div>

            <a
              href={`tel:${FARIS_CONFIG.contact.primaryPhoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-faris-50 text-faris-800 rounded-xl font-bold text-xs border border-faris-200"
            >
              <Phone className="w-4 h-4 text-faris-600" />
              <span>Call: {FARIS_CONFIG.contact.primaryPhoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
