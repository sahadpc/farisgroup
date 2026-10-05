import React, { useState } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import type { RoomItem } from '../data/farisData';
import { 
  BedDouble, 
  Wind, 
  ShieldCheck, 
  Wifi, 
  Car, 
  Trees, 
  UtensilsCrossed, 
  Clock, 
  Tv, 
  Users, 
  ChevronRight, 
  Check, 
  Sparkles,
  PhoneCall,
  Send,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RoomsSectionProps {
  onOpenBookingModal: (room?: RoomItem) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenBookingModal }) => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<{ [key: string]: number }>({
    'deluxe-ac': 0,
    'executive-suite': 0,
    'family-comfort': 0,
  });

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    roomType: 'Deluxe Air-Conditioned Room',
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleQuickAvailability = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#22A94D', '#C9A862', '#0B3D1F'],
      });
    } catch {
      // Fallback
    }

    const message = `*Hotel Faris & Rooms - Room Booking Inquiry*\n\n` +
      `👤 *Guest Name:* ${bookingForm.name}\n` +
      `📞 *Phone:* ${bookingForm.phone}\n` +
      `🛏️ *Room Selected:* ${bookingForm.roomType}\n` +
      `📅 *Check-in Date:* ${bookingForm.checkIn || 'To be confirmed'}\n` +
      `📅 *Check-out Date:* ${bookingForm.checkOut || 'To be confirmed'}\n` +
      `👥 *Number of Guests:* ${bookingForm.guests}\n\n` +
      `_Please confirm availability and current tariffs. Sent from Faris Group Website_`;

    const waUrl = `https://wa.me/${FARIS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setBookingSuccess(true);
  };

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return Wind;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Wifi':
        return Wifi;
      case 'Car':
        return Car;
      case 'Trees':
        return Trees;
      case 'UtensilsCrossed':
        return UtensilsCrossed;
      case 'Clock':
        return Clock;
      case 'Tv':
        return Tv;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-900 text-xs font-bold tracking-wider uppercase">
              <BedDouble className="w-3.5 h-3.5 text-gold-600" />
              <span>Hotel Faris & Rooms</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-faris-950 tracking-tight">
              Soundproof Comfort.{' '}
              <span className="text-faris-600 italic">Restful Malabar Stays.</span>
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Quiet, fully air-conditioned sanctuaries on Airport Road. Designed for Calicut airport travelers, business visitors, and wedding guests seeking acoustic privacy, clean beds, and free private parking.
            </p>
          </div>

          {/* Timings Callout Pill */}
          <div className="bg-[#F8FAF7] border border-faris-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-faris-500 text-white flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-faris-950">
                Check-in: <span className="text-faris-700">{FARIS_CONFIG.hours.hotel.checkIn}</span> | Check-out: <span className="text-faris-700">{FARIS_CONFIG.hours.hotel.checkOut}</span>
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                24/7 Reception Desk • Early arrival assistance
              </div>
            </div>
          </div>
        </div>

        {/* 1. ROOM SUITES CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {FARIS_CONFIG.rooms.map((room) => {
            const currentImgIndex = selectedRoomIndex[room.id] || 0;

            return (
              <div
                key={room.id}
                className="bg-[#F8FAF7] rounded-3xl overflow-hidden border border-faris-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Slider / Gallery */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.images[currentImgIndex]}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-faris-950/80 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {room.popular && (
                      <span className="px-3 py-1 rounded-full bg-gold-500 text-faris-950 text-xs font-bold shadow">
                        Most Booked
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-faris-900 text-xs font-semibold shadow">
                      {room.size}
                    </span>
                  </div>

                  {/* Tariff On Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] text-gold-300 uppercase tracking-wider font-semibold block">
                        Starts From
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-2xl font-bold">{room.pricePerNight}</span>
                        <span className="text-xs text-white/70">/ night</span>
                      </div>
                    </div>

                    {/* Image thumbnail indicators */}
                    <div className="flex gap-1.5">
                      {room.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedRoomIndex({ ...selectedRoomIndex, [room.id]: i })}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            currentImgIndex === i ? 'bg-white scale-125' : 'bg-white/40'
                          }`}
                          aria-label={`View photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-faris-950">
                      {room.name}
                    </h3>
                    <p className="text-neutral-600 text-xs leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Room Metadata */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-cream-200">
                    <div className="flex items-center gap-1.5 text-neutral-700">
                      <Users className="w-3.5 h-3.5 text-faris-600" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-700">
                      <BedDouble className="w-3.5 h-3.5 text-faris-600" />
                      <span>{room.bedType}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5">
                    {room.features.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <Check className="w-3.5 h-3.5 text-faris-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onOpenBookingModal(room)}
                      className="btn-luxury-green flex-1 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>Check Availability</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <a
                      href={`tel:${FARIS_CONFIG.contact.primaryPhoneTel}`}
                      className="p-3 rounded-xl bg-faris-50 text-faris-800 hover:bg-faris-100 transition-colors"
                      title="Direct Room Inquiry"
                    >
                      <PhoneCall className="w-4 h-4 text-faris-600" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 2. AMENITIES GRID */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-faris-950 via-faris-900 to-faris-950 text-white shadow-2xl relative overflow-hidden mb-16">
          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-300">
                Crafted for Tranquility
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Guest Amenities & Privileges
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/80">
                Every stay at Hotel Faris is curated with attentive Kerala hospitality
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {FARIS_CONFIG.amenities.map((item, idx) => {
                const Icon = getAmenityIcon(item.icon);

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col items-center text-center space-y-2"
                  >
                    <div className="w-10 h-10 rounded-xl bg-faris-500/20 text-faris-300 border border-faris-500/30 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-serif text-sm font-bold text-white">
                      {item.label}
                    </div>
                    <p className="text-[11px] text-cream-200/70 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. FAST AVAILABILITY WHATSAPP FORM */}
        <div className="bg-[#F8FAF7] rounded-3xl p-6 sm:p-10 border border-faris-100 shadow-md">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 space-y-1">
              <h4 className="font-serif text-2xl font-bold text-faris-950">
                Quick WhatsApp Room Reservation
              </h4>
              <p className="text-xs text-neutral-500">
                Lock in your stay directly with Hotel Faris reception. No hidden online booking commissions.
              </p>
            </div>

            <form onSubmit={handleQuickAvailability} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Guest Name *
                </label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  placeholder="Your Mobile"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Room Category
                </label>
                <select
                  value={bookingForm.roomType}
                  onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white text-neutral-800"
                >
                  <option value="Deluxe Air-Conditioned Room">Deluxe AC Room (₹1,500)</option>
                  <option value="Executive Soundproof Suite">Executive Suite (₹2,200)</option>
                  <option value="Family Comfort Multi-Bed Suite">Family Suite (₹2,800)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={bookingForm.checkIn}
                  onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={bookingForm.checkOut}
                  onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Guests
                </label>
                <select
                  value={bookingForm.guests}
                  onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white text-neutral-800"
                >
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                  <option value="3 Adults">3 Adults</option>
                  <option value="Family (4+ People)">Family (4+ People)</option>
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-3 pt-2">
                <button
                  type="submit"
                  className="btn-luxury-green w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Check Availability on WhatsApp</span>
                </button>
              </div>

              {bookingSuccess && (
                <div className="sm:col-span-2 lg:col-span-3 p-3 rounded-xl bg-faris-100 text-faris-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-faris-600 flex-shrink-0" />
                  <span>WhatsApp inquiry sent! Front desk team will confirm your room shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
