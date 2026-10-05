import React, { useState, useEffect } from 'react';
import { FARIS_CONFIG } from '../data/farisData';
import type { MenuItem } from '../data/farisData';
import { 
  X, 
  UtensilsCrossed, 
  Plus, 
  Minus, 
  Send, 
  ShoppingBag, 
  Bike, 
  Users, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: MenuItem | null;
}

export const OrderFoodModal: React.FC<OrderFoodModalProps> = ({
  isOpen,
  onClose,
  initialItem,
}) => {
  const [selectedItemName, setSelectedItemName] = useState<string>(
    initialItem ? initialItem.name : FARIS_CONFIG.menuItems[0].name
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway' | 'dinein'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialItem) {
      setSelectedItemName(initialItem.name);
      setQuantity(1);
    }
  }, [initialItem]);

  if (!isOpen) return null;

  const currentItem =
    FARIS_CONFIG.menuItems.find((item) => item.name === selectedItemName) ||
    FARIS_CONFIG.menuItems[0];

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

    const typeLabel =
      orderType === 'delivery'
        ? '🛵 Home Delivery'
        : orderType === 'takeaway'
        ? '🛍️ Takeaway / Pickup'
        : '🍽️ Dine-In Table Order';

    const orderText =
      `*New Food Order - Faris Restaurant*\n\n` +
      `📌 *Order Mode:* ${typeLabel}\n` +
      `🍛 *Dish:* ${currentItem.name} (${currentItem.price})\n` +
      `🔢 *Quantity:* ${quantity}\n` +
      `👤 *Name:* ${customerName}\n` +
      `📞 *Phone:* ${customerPhone}\n` +
      (orderType === 'delivery' ? `📍 *Address/Location:* ${deliveryLocation}\n` : '') +
      (orderType === 'dinein' ? `🪑 *Table Note:* ${deliveryLocation || 'Will arrive soon'}\n` : '') +
      (specialInstructions ? `📝 *Notes:* ${specialInstructions}\n\n` : '\n') +
      `_Sent from Faris Group Website_`;

    const waUrl = `https://wa.me/${FARIS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(orderText)}`;
    window.open(waUrl, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[250] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-faris-100 my-8 animate-[slideUp_0.3s_ease-out]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-faris-950 to-faris-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-faris-500/30 border border-faris-400/40 flex items-center justify-center text-faris-300">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Faris Restaurant Order</h3>
              <p className="text-[11px] text-cream-200/80">Direct WhatsApp Kitchen Order</p>
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

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Order Type Selector */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1.5">
              Service Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 border transition-all ${
                  orderType === 'delivery'
                    ? 'bg-faris-50 border-faris-500 text-faris-900 shadow-sm'
                    : 'bg-white border-neutral-200 text-neutral-600'
                }`}
              >
                <Bike className="w-4 h-4 text-faris-600" />
                <span>Home Delivery</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType('takeaway')}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 border transition-all ${
                  orderType === 'takeaway'
                    ? 'bg-faris-50 border-faris-500 text-faris-900 shadow-sm'
                    : 'bg-white border-neutral-200 text-neutral-600'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-faris-600" />
                <span>Takeaway</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType('dinein')}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 border transition-all ${
                  orderType === 'dinein'
                    ? 'bg-faris-50 border-faris-500 text-faris-900 shadow-sm'
                    : 'bg-white border-neutral-200 text-neutral-600'
                }`}
              >
                <Users className="w-4 h-4 text-faris-600" />
                <span>Dine-In</span>
              </button>
            </div>
          </div>

          {/* Dish Selection & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Select Dish
              </label>
              <select
                value={selectedItemName}
                onChange={(e) => setSelectedItemName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs bg-white text-neutral-800"
              >
                {FARIS_CONFIG.menuItems.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name} ({item.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Quantity
              </label>
              <div className="flex items-center justify-between border border-neutral-300 rounded-xl px-2 py-1.5 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-sm text-faris-950">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Mobile number"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs"
              />
            </div>
          </div>

          {/* Address / Location */}
          {orderType === 'delivery' && (
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Delivery Address in / around Edavannappara *
              </label>
              <input
                type="text"
                required
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                placeholder="Building / House / Landmark"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs"
              />
            </div>
          )}

          {/* Special Instructions */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Cooking / Delivery Instructions (Optional)
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Medium spicy, extra mayonnaise, deliver hot"
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-faris-500 text-xs"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="btn-luxury-green w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Send to WhatsApp Kitchen</span>
            </button>
          </div>

          {isSuccess && (
            <div className="p-3 rounded-xl bg-faris-100 text-faris-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-faris-600 flex-shrink-0" />
              <span>WhatsApp message opened! Our team will confirm the order immediately.</span>
            </div>
          )}
        </form>

      </div>
    </div>
  );
};
