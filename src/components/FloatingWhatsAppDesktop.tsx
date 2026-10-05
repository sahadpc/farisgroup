import React, { useState } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsAppDesktop: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
      {/* Friendly greeting tooltip */}
      {showTooltip && (
        <div className="relative bg-white rounded-2xl p-3.5 shadow-2xl border border-faris-100 max-w-xs text-xs animate-[slideUp_0.4s_ease-out]">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            <span className="font-bold text-faris-950">Faris Group Online Desk</span>
          </div>
          <p className="text-neutral-600 pr-3 text-[11px] leading-relaxed">
            Need a table reservation, soundproof room, or custom cake? Chat with us instantly on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={FARIS_CONFIG.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Faris Group on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white flex items-center justify-center shadow-2xl shadow-green-600/30 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <span className="absolute -inset-1 rounded-full bg-green-400 opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
