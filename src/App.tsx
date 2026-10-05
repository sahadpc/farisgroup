import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { OurStory } from './components/OurStory';
import { ThreeDivisions } from './components/ThreeDivisions';
import { RestaurantSection } from './components/RestaurantSection';
import { BakerySection } from './components/BakerySection';
import { RoomsSection } from './components/RoomsSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { FloatingWhatsAppDesktop } from './components/FloatingWhatsAppDesktop';
import { OrderFoodModal } from './components/OrderFoodModal';
import { RoomBookingModal } from './components/RoomBookingModal';
import type { MenuItem, RoomItem } from './data/farisData';

export function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);

  const handleOpenOrderWithItem = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setOrderModalOpen(true);
  };

  const handleOpenGeneralOrder = () => {
    setSelectedMenuItem(null);
    setOrderModalOpen(true);
  };

  const handleOpenRoomModal = (room?: RoomItem) => {
    setSelectedRoom(room || null);
    setRoomModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAF7] text-neutral-900 overflow-x-hidden">
      {/* 1. Brand Logo Reveal Preloader */}
      <Preloader />

      {/* 2. Desktop Custom Green Cursor */}
      <CustomCursor />

      {/* 3. Sticky Glassmorphism Navbar */}
      <Navbar
        onOpenOrderModal={handleOpenGeneralOrder}
        onOpenRoomModal={() => handleOpenRoomModal()}
      />

      <main>
        {/* 4. Cinematic Hero Section */}
        <Hero
          onOpenOrderModal={handleOpenGeneralOrder}
          onOpenRoomModal={() => handleOpenRoomModal()}
        />

        {/* 5. Trust Bar with 1,266+ Google Reviews & 4.1★ Counter */}
        <TrustBar />

        {/* 6. Editorial Our Story / About Faris Group */}
        <OurStory />

        {/* 7. Three Divisions Showcase (Restaurant, Hotel, Bakery) */}
        <ThreeDivisions
          onOpenOrderModal={handleOpenGeneralOrder}
          onOpenRoomModal={() => handleOpenRoomModal()}
        />

        {/* 8. Faris Restaurant (Signature Dishes Carousel + Filterable Menu) */}
        <RestaurantSection
          onSelectItemForOrder={handleOpenOrderWithItem}
          onOpenGeneralOrder={handleOpenGeneralOrder}
        />

        {/* 9. Faris Bakery & Custom Cake Studio */}
        <BakerySection />

        {/* 10. Hotel Faris & Rooms (Soundproof AC Suites + Amenities) */}
        <RoomsSection
          onOpenBookingModal={(room) => handleOpenRoomModal(room)}
        />

        {/* 11. Moments at Faris (Masonry Photo Gallery with Lightbox) */}
        <GallerySection />

        {/* 12. Verified Google Reviews & Testimonials Slider */}
        <TestimonialsSection />

        {/* 13. The Faris Distinction (Why Choose Us - Dark Contrast Section) */}
        <WhyChooseUs />

        {/* 14. Location & Contact (Google Maps, Directions & Direct Phones) */}
        <ContactSection />
      </main>

      {/* 15. Premium Hospitality Footer */}
      <Footer />

      {/* 16. Mobile Bottom Action Bar (Thumb-friendly Call, WhatsApp, Map, Order) */}
      <MobileBottomBar onOpenOrderModal={handleOpenGeneralOrder} />

      {/* 17. Desktop Floating WhatsApp Button with Greeting Pulse */}
      <FloatingWhatsAppDesktop />

      {/* Interactive Food Ordering Modal */}
      <OrderFoodModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialItem={selectedMenuItem}
      />

      {/* Interactive Room Booking Modal */}
      <RoomBookingModal
        isOpen={roomModalOpen}
        onClose={() => setRoomModalOpen(false)}
        initialRoom={selectedRoom}
      />
    </div>
  );
}

export default App;
