import React from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { Phone, MessageCircle, Navigation, UtensilsCrossed } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenOrderModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-200/80 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-4 gap-1.5 items-center">
        
        {/* Call Button */}
        <a
          href={`tel:${FARIS_CONFIG.contact.primaryPhoneTel}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-neutral-700 hover:text-faris-700 hover:bg-faris-50 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-faris-50 text-faris-600 flex items-center justify-center mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={FARIS_CONFIG.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-neutral-700 hover:text-green-600 hover:bg-green-50 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-green-50 text-[#25D366] flex items-center justify-center mb-0.5">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={FARIS_CONFIG.contact.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-neutral-700 hover:text-gold-700 hover:bg-gold-50 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center mb-0.5">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Directions</span>
        </a>

        {/* Order Now Button */}
        <button
          onClick={onOpenOrderModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-faris-600 to-faris-500 text-white shadow-md active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-0.5">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Order Now</span>
        </button>

      </div>
    </div>
  );
};
