import React, { useState, useEffect } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import type { RoomItem } from '../data/farisData';
import { 
  X, 
  BedDouble, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RoomBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: RoomItem | null;
}

export const RoomBookingModal: React.FC<RoomBookingModalProps> = ({
  isOpen,
  onClose,
  initialRoom,
}) => {
  const [selectedRoomName, setSelectedRoomName] = useState<string>(
    initialRoom ? initialRoom.name : FARIS_CONFIG.rooms[0].name
  );
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState('2 Adults');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialRoom) {
      setSelectedRoomName(initialRoom.name);
    }
  }, [initialRoom]);

  if (!isOpen) return null;

  const currentRoom =
    FARIS_CONFIG.rooms.find((r) => r.name === selectedRoomName) ||
    FARIS_CONFIG.rooms[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22A94D', '#C9A862', '#0B3D1F'],
      });
    } catch {
      // Ignore
    }

    const bookingText =
      `*Hotel Faris & Rooms - Reservation Request*\n\n` +
      `🛏️ *Room Category:* ${currentRoom.name} (${currentRoom.pricePerNight}/night)\n` +
      `👤 *Primary Guest:* ${guestName}\n` +
      `📞 *Phone Number:* ${guestPhone}\n` +
      `📅 *Check-In:* ${checkInDate || 'To be specified'}\n` +
      `📅 *Check-Out:* ${checkOutDate || 'To be specified'}\n` +
      `👥 *Number of Guests:* ${guestCount}\n` +
      (specialRequests ? `📝 *Special Requests:* ${specialRequests}\n\n` : '\n') +
      `_Sent from Faris Group Website_`;

    const waUrl = `https://wa.me/${FARIS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(bookingText)}`;
    window.open(waUrl, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[250] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-faris-100 my-8 animate-[slideUp_0.3s_ease-out]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-faris-950 to-faris-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
              <BedDouble className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Book a Soundproof Stay</h3>
              <p className="text-[11px] text-cream-200/80">Direct WhatsApp Front Desk Reservation</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Room Selection */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Select Room Suite
            </label>
            <select
              value={selectedRoomName}
              onChange={(e) => setSelectedRoomName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white text-neutral-800"
            >
              {FARIS_CONFIG.rooms.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name} — starts from {r.pricePerNight}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-neutral-400 mt-1">
              *Tariff is indicative placeholder. Reception will provide final quote for dates.
            </p>
          </div>

          {/* Guest Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Guest Name *
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                required
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="Mobile number"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Check-out Date
              </label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs"
              />
            </div>
          </div>

          {/* Guests Count */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Number of Guests
            </label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white text-neutral-800"
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
              <option value="3 Adults">3 Adults</option>
              <option value="Family / 4+ Guests">Family / 4+ Guests</option>
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Special Requests (Optional)
            </label>
            <input
              type="text"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="e.g. Airport transit, early arrival, ground floor"
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs"
            />
          </div>

          <div className="p-3 rounded-xl bg-faris-50 border border-faris-100 text-[11px] text-faris-900">
            Check-in time: <strong>1:00 PM</strong> • Check-out time: <strong>11:00 AM</strong>. Free private parking included.
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-luxury-green w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Check Availability on WhatsApp</span>
            </button>
          </div>

          {isSuccess && (
            <div className="p-3 rounded-xl bg-faris-100 text-faris-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-faris-600 flex-shrink-0" />
              <span>WhatsApp message opened! Reception will confirm room availability instantly.</span>
            </div>
          )}
        </form>

      </div>
    </div>
  );
};
