/**
 * FARIS GROUP - BRAND DATA & CONFIGURATION
 * 
 * Centralized data source for Faris Group (Restaurant, Hotel, Bakery)
 * Located at Edavannappara, Malappuram, Kerala.
 * 
 * OWNER INSTRUCTIONS:
 * All details can be edited here directly.
 * 
 * TODO [OWNER ACTION REQUIRED]:
 * 1. Confirm your preferred primary phone number between:
 *    - 094478 45310 (Currently set as primary voice call number)
 *    - +91 97466 68894 (Currently set as primary WhatsApp & secondary number)
 * 2. Verify hotel room starting tariffs (currently placeholder ₹1,500/night).
 * 3. Add any seasonal festival specials or specific cake flavors as desired.
 */

export interface MenuItem {
  id: string;
  name: string;
  malayalamName?: string;
  description: string;
  price: string;
  category: 'biryani' | 'arabic' | 'malabar' | 'chinese' | 'bakery' | 'beverages';
  isSignature?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  badge?: string;
  image: string;
}

export interface RoomItem {
  id: string;
  name: string;
  type: string;
  pricePerNight: string;
  description: string;
  capacity: string;
  bedType: string;
  size: string;
  features: string[];
  images: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  source: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'rooms' | 'bakery' | 'ambience';
  image: string;
  aspect?: string;
}

export const FARIS_CONFIG = {
  brand: {
    name: 'Faris Group',
    tagline: 'Taste of Malabar. Comfort of Home.',
    subline: 'Restaurant • Hotel • Bakery, Edavannappara',
    establishedYear: '2012',
    logo: '/faris-logo.jpg',
    logoAlt: 'Faris Group - Official Emblem & Wordmark',
    description:
      'A cherished Malabar landmark in Edavannappara, Malappuram. Offering authentic Malabari and Arabic culinary feasts, pristine air-conditioned hotel rooms, and handcrafted artisan bakery celebrations under one hospitable roof.',
    googleRating: 4.1,
    googleReviewCount: 1266,
    priceRange: '₹200 - ₹400 per person',
    halalCertified: true,
  },

  // CONTACT INFORMATION
  // TODO: Owner to confirm preferred primary phone numbers
  contact: {
    primaryPhoneDisplay: '094478 45310',
    primaryPhoneTel: '+919447845310',
    secondaryPhoneDisplay: '+91 97466 68894',
    secondaryPhoneTel: '+919746668894',
    whatsappNumber: '919746668894', // without + or spaces
    whatsappLink: 'https://wa.me/919746668894',
    email: 'contact@farisgroup.in',
    address: {
      street: 'Busterminal Rd, Airport Road',
      landmark: 'Near Edavannappara Bus Station & Fish Market',
      city: 'Edavannappara',
      district: 'Malappuram',
      state: 'Kerala',
      pincode: '673645',
      fullAddress:
        'Busterminal Rd, near Edavannappara bus station & fish market, Airport Road, Edavannappara, Malappuram, Kerala 673645',
    },
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1256086782574!2d75.99268687593717!3d11.252063850239634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64380a1334f59%3A0x3be86493dd377cdd!2sHotel%20Faris%20%26%20Bakery!5e0!3m2!1sen!2sin!4v1717500000000!5m2!1sen!2sin',
    googleMapsDirectionsUrl:
      'https://maps.google.com/?q=Hotel+Faris+Bakery+Edavannappara+Malappuram+Kerala',
    googleReviewUrl: 'https://g.page/r/Cd38N9KTZOg7EB0/review',
  },

  // SOCIAL LINKS
  social: {
    instagram: 'https://www.instagram.com/faris_group_/',
    facebook: 'https://www.facebook.com/Farisgroups',
    linktree: 'https://linktr.ee/FarisHotel',
  },

  // OPERATING HOURS
  hours: {
    restaurant: {
      label: 'Restaurant & Dine-in',
      days: 'All 7 Days',
      time: '7:00 AM – 12:30 AM',
      deliveryTime: 'Home delivery until 10:30 PM',
    },
    hotel: {
      label: 'Hotel & Rooms Front Desk',
      days: '24 Hours / 7 Days',
      time: '24/7 Reception',
      checkIn: '1:00 PM',
      checkOut: '11:00 AM',
    },
    bakery: {
      label: 'Bakery & Cake Studio',
      days: 'All 7 Days',
      time: '7:00 AM – 11:30 PM',
    },
  },

  // TRUST STATS COUNTER
  trustStats: [
    {
      value: '4.1★',
      numeric: 4.1,
      label: 'Google Rating',
      subtext: 'From verified diners & hotel guests',
    },
    {
      value: '1,266+',
      numeric: 1266,
      label: 'Google Reviews',
      subtext: 'The highest reviewed hub in Edavannappara',
    },
    {
      value: '3-in-1',
      numeric: 3,
      label: 'Hospitality Divisions',
      subtext: 'Restaurant • Rooms • Bakery together',
    },
    {
      value: '17.5 hrs',
      numeric: 17.5,
      label: 'Daily Service',
      subtext: 'Serving 7:00 AM till past Midnight',
    },
  ],

  // DIVISIONS
  divisions: [
    {
      id: 'restaurant',
      title: 'Faris Restaurant',
      subtitle: 'Malabari, Arabic & Continental Feasts',
      description:
        'Renowned across Malappuram for authentic Beef Biryani, tender Kuzhi Manthi, charcoal Shawaya, juicy Shawarma, and traditional Kerala seafood preparations.',
      tag: 'Fine Dining & Takeaway',
      link: '#restaurant',
      badge: 'Halal Certified',
      accentColor: 'emerald',
      image:
        'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1200',
      highlights: ['Authentic Malabar Biryani', 'Kuzhi Manthi & Arabic Grills', 'Private Dining & Family AC Room', 'Late Night Dining'],
    },
    {
      id: 'hotel',
      title: 'Hotel Faris & Rooms',
      subtitle: 'Serene Comfort on Airport Road',
      description:
        'Soundproofed, fully air-conditioned guest rooms with high-speed Wi-Fi, modern en-suite bathrooms, free private parking, and lush garden terraces.',
      tag: 'Stay & Relax',
      link: '#rooms',
      badge: 'Starts ₹1,500/night',
      accentColor: 'gold',
      image:
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      highlights: ['Soundproof & Air Conditioned', 'Free Private Parking', '24/7 In-Room Food Service', 'Close to Kozhikode Calicut Airport'],
    },
    {
      id: 'bakery',
      title: 'Faris Bakery & Cakes',
      subtitle: 'Handcrafted Celebrations & Fresh Bakes',
      description:
        'Freshly baked daily breads, signature custom birthday and wedding celebration cakes, buttery tea-time puffs, Malabar savouries, and confectionery.',
      tag: 'Confectionery & Custom Cakes',
      link: '#bakery',
      badge: 'Custom Cakes on Order',
      accentColor: 'rose',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200',
      highlights: ['Fresh Birthday & Wedding Cakes', 'Malabar Tea-time Snacks & Puffs', 'Live Oven Breads & Cookies', 'Same-day WhatsApp Ordering'],
    },
  ],

  // SIGNATURE DISHES CAROUSEL
  signatureDishes: [
    {
      name: 'Faris Malabar Beef Biryani',
      cuisine: 'Signature Malabar',
      tag: 'House Special',
      description:
        'Slow-dum cooked fragrant Kaima rice layered with meltingly tender beef chunks infused with Malabar spices, golden fried onions, cashews, and sultanas.',
      price: '₹180',
      image:
        'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1000',
    },
    {
      name: 'Authentic Kuzhi Manthi',
      cuisine: 'Traditional Arabic',
      tag: 'Bestseller',
      description:
        'Smoky pit-cooked Yemeni Mandi rice paired with succulent, fall-off-the-bone spiced chicken, served with spicy tomato salsa and refreshing garlic mayo.',
      price: '₹220',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000',
    },
    {
      name: 'Malabari Fish Curry & Ghee Rice',
      cuisine: 'Coastal Kerala',
      tag: 'Local Favorite',
      description:
        'Fresh catch cooked in an earthen pot with Kudampuli, roasted coconut, and curry leaves, accompanied by piping hot aromatic Neychoru.',
      price: '₹240',
      image:
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=1000',
    },
    {
      name: 'Charcoal Grilled Shawaya',
      cuisine: 'Arabic Grills',
      tag: 'Chef Recommendation',
      description:
        'Whole spring chicken marinated in secret Arabic herbs and spices, slow-grilled over fiery charcoal until crisp-skinned and juicy.',
      price: '₹210',
      image:
        'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=1000',
    },
    {
      name: 'Special Rumali Shawarma Roll',
      cuisine: 'Street Delights',
      tag: 'Evening Favorite',
      description:
        'Freshly shaved marinated rotisserie chicken loaded with house garlic toum, pickles, and fries wrapped warmly in handmade soft rumali roti.',
      price: '₹110',
      image:
        'https://images.unsplash.com/photo-1648899450765-7489da262b9f?auto=format&fit=crop&q=80&w=1000',
    },
    {
      name: 'Crispy Southern Fried Chicken',
      cuisine: 'Crispy Favourites',
      tag: 'Kids & Family Craving',
      description:
        'Signature double-dredged chicken fried to golden crunch perfection with a spicy Malabar-Southern spice blend and coleslaw.',
      price: '₹190',
      image:
        'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1000',
    },
  ],

  // FILTERABLE MENU PREVIEW
  menuCategories: [
    { id: 'all', label: 'All Specials' },
    { id: 'biryani', label: 'Biryani & Manthi' },
    { id: 'arabic', label: 'Arabic & Grills' },
    { id: 'malabar', label: 'Kerala & Seafood' },
    { id: 'chinese', label: 'Chinese & Wok' },
    { id: 'bakery', label: 'Bakery & Sweets' },
    { id: 'beverages', label: 'Beverages & Juices' },
  ],

  menuItems: [
    {
      id: 'm1',
      name: 'Faris Special Beef Biryani',
      description: 'Classic Malabar dum biryani with succulent beef, Kaima rice, pickle, salad, and date chutney.',
      price: '₹180',
      category: 'biryani' as const,
      isSignature: true,
      badge: 'Chef Special',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm2',
      name: 'Chicken Kuzhi Manthi (Half)',
      description: 'Pit-smoked spiced rice with tender chicken, served with tomato chutney, mayonnaise & green salad.',
      price: '₹220',
      category: 'biryani' as const,
      isSignature: true,
      badge: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm3',
      name: 'Malabar Chicken Dum Biryani',
      description: 'Fragrant ghee-tempered rice with tender farm-fresh chicken and Malabar aromatic spices.',
      price: '₹170',
      category: 'biryani' as const,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm4',
      name: 'Charcoal Full Shawaya Chicken',
      description: 'Whole chicken roasted over slow coals, infused with Arabian spices and olive marinade.',
      price: '₹390',
      category: 'arabic' as const,
      isSignature: true,
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm5',
      name: 'Special Chicken Shawarma Plate',
      description: 'Generous platter of thinly sliced rotisserie chicken, homemade toum garlic paste, fries & kubbus.',
      price: '₹150',
      category: 'arabic' as const,
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm6',
      name: 'Authentic Al Faham Chicken',
      description: 'Arabian barbecue grilled chicken seasoned with cracked black pepper, lemon, and aromatic sumac.',
      price: '₹210',
      category: 'arabic' as const,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm7',
      name: 'Malabar Fish Curry (Ayala/Neymeen)',
      description: 'Fresh coastal fish simmered in a spicy, tangy gravy with Kudampuli and fresh curry leaves.',
      price: '₹220',
      category: 'malabar' as const,
      isSignature: true,
      badge: 'Catch of Day',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm8',
      name: 'Kerala Ghee Rice with Beef Roast',
      description: 'Rich basmati ghee rice served with dry-roasted caramelized spicy Malabar beef roast.',
      price: '₹210',
      category: 'malabar' as const,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm9',
      name: 'Traditional Kerala Meals Thali',
      description: 'Wholesome Kerala noon rice with sambar, rasam, avial, thoran, moru curry, pappadam & payasam.',
      price: '₹100',
      category: 'malabar' as const,
      isVegetarian: true,
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm10',
      name: 'Dragon Chicken',
      description: 'Crispy chicken strips tossed in a fiery Indo-Chinese red chilli glaze with cashews and capsicum.',
      price: '₹230',
      category: 'chinese' as const,
      isSpicy: true,
      image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm11',
      name: 'Faris Mixed Fried Rice',
      description: 'Fragrant wok-tossed rice with shredded chicken, beef strips, prawns, eggs, and crisp vegetables.',
      price: '₹220',
      category: 'chinese' as const,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm12',
      name: 'Belgian Chocolate Truffle Cake',
      description: 'Decadent multi-layered dark chocolate sponge soaked with chocolate ganache and chocolate curls.',
      price: '₹650/kg',
      category: 'bakery' as const,
      isSignature: true,
      badge: 'Bakery Favorite',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm13',
      name: 'Fresh Red Velvet Cream Cheese Gateau',
      description: 'Silky red velvet crumb with rich whipped cream cheese frosting, baked fresh every morning.',
      price: '₹700/kg',
      category: 'bakery' as const,
      image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm14',
      name: 'Malabar Hot Tea & Crispy Meat Puffs',
      description: 'Strong cardamom ginger Sulaimani / milk tea paired with piping hot flaky layered chicken puff.',
      price: '₹40',
      category: 'bakery' as const,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm15',
      name: 'Fresh Mint Lime & Kulukki Sarbath',
      description: 'Refreshing shaken Kerala spiced lemonade with sweet basil seeds, green chilli, and ice.',
      price: '₹40',
      category: 'beverages' as const,
      isVegetarian: true,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm16',
      name: 'Special Falooda Faris Deluxe',
      description: 'Royal dessert beverage packed with rose syrup, vermicelli, sabja seeds, dry fruits & ice cream.',
      price: '₹120',
      category: 'beverages' as const,
      isVegetarian: true,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
    },
  ] as MenuItem[],

  // HOTEL ROOMS
  rooms: [
    {
      id: 'deluxe-ac',
      name: 'Deluxe Air-Conditioned Room',
      type: 'King / Twin Bed',
      pricePerNight: '₹1,500', // Editable placeholder
      description:
        'Peaceful and modern room tailored for business travellers and couples. Features acoustic soundproofing, whisper-quiet AC, and dedicated work desk.',
      capacity: '2 Adults, 1 Child',
      bedType: 'King-sized luxury mattress',
      size: '220 sq ft',
      popular: true,
      features: [
        'Whisper-quiet Air Conditioning',
        'Acoustic Soundproofing',
        'High-Speed Wi-Fi',
        '32" Smart LED TV with Cable',
        'Private en-suite bathroom with 24/7 hot water',
        'Work desk & ergonomic chair',
        'Spacious wardrobe & luggage rack',
        'Daily housekeeping',
      ],
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000',
      ],
    },
    {
      id: 'executive-suite',
      name: 'Executive Soundproof Suite',
      type: 'Premium Suite with Garden View',
      pricePerNight: '₹2,200', // Editable placeholder
      description:
        'Extra spacious luxury room with garden/terrace outlook, plush seating nook, mini beverage station, and premier room-service privileges from Faris Restaurant.',
      capacity: '3 Adults or Family',
      bedType: '1 King Bed + Extra rollaway',
      size: '340 sq ft',
      popular: false,
      features: [
        'Acoustically insulated double-glazed windows',
        'Climate-controlled Split Air Conditioning',
        'Garden / Terrace private outlook',
        'High-speed seamless Wi-Fi for video calls',
        '43" Smart TV with streaming apps',
        'Spacious luxury vanity bathroom',
        'Complimentary bottled water & tea kit',
        'Priority room dining from Faris Restaurant',
      ],
      images: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000',
      ],
    },
    {
      id: 'family-comfort',
      name: 'Family Comfort Multi-Bed Suite',
      type: 'Family Living',
      pricePerNight: '₹2,800', // Editable placeholder
      description:
        'Designed specifically for families and groups visiting Malappuram, weddings, and airport transit. Accommodates up to 4 adults with total privacy and space.',
      capacity: '4 Adults, 2 Children',
      bedType: '2 Queen Beds',
      size: '420 sq ft',
      popular: false,
      features: [
        'Dual Queen Beds with orthopaedic mattresses',
        'Quiet multi-zone Air Conditioning',
        'Large en-suite bathroom with premium fixtures',
        'High-speed Wi-Fi across multiple devices',
        'Free secure parking for large SUVs & cars',
        'Direct elevator and ground floor accessibility',
        'Late check-out available upon request',
        'Kids special menu from Faris Bakery',
      ],
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000',
      ],
    },
  ],

  // HOTEL AMENITIES
  amenities: [
    { icon: 'Wind', label: 'Air Conditioned', desc: 'Whisper-quiet split AC in all rooms' },
    { icon: 'ShieldCheck', label: 'Soundproofed', desc: 'Acoustic glass for total peace & sleep' },
    { icon: 'Wifi', label: 'High-Speed Wi-Fi', desc: 'Fast, reliable internet across all floors' },
    { icon: 'Car', label: 'Free Private Parking', desc: 'Spacious on-site car and bus parking' },
    { icon: 'Trees', label: 'Garden & Terrace', desc: 'Fresh open green patio to relax' },
    { icon: 'UtensilsCrossed', label: 'On-Site Restaurant', desc: 'Food served to your door 7am - midnight' },
    { icon: 'Clock', label: '24/7 Front Desk', desc: 'Always available for early/late arrivals' },
    { icon: 'Tv', label: 'Smart LED TV', desc: 'HD entertainment in every suite' },
  ],

  // BAKERY HIGHLIGHTS
  bakeryHighlights: [
    {
      title: 'Custom Celebration Cakes',
      desc: 'Bespoke designs for Birthdays, Engagements, Anniversaries & Corporate Milestones. Eggless options available.',
      icon: 'Cake',
    },
    {
      title: 'Artisan Pastries & Desserts',
      desc: 'Chocolate truffles, Black Forest, Tres Leches, Red Velvet, Cheesecakes and French fruit tartlets.',
      icon: 'Sparkles',
    },
    {
      title: 'Freshly Baked Breads & Puffs',
      desc: 'Warm milk breads, sweet buns, crunchy chicken puffs, beef samosas, and Malabar evening tea savouries.',
      icon: 'Cookie',
    },
    {
      title: 'Same-Day WhatsApp Ordering',
      desc: 'Instant consultation on WhatsApp. Pick up fresh at Edavannappara or have it delivered to your event.',
      icon: 'MessageCircle',
    },
  ],

  // GALLERY ITEMS
  gallery: [
    {
      id: 'g1',
      title: 'Signature Faris Beef Biryani Platter',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=900',
      aspect: 'portrait',
    },
    {
      id: 'g2',
      title: 'Deluxe Air-Conditioned Suite',
      category: 'rooms',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=900',
      aspect: 'landscape',
    },
    {
      id: 'g3',
      title: 'Handcrafted Chocolate Fudge Cake',
      category: 'bakery',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=900',
      aspect: 'square',
    },
    {
      id: 'g4',
      title: 'Yemeni Style Chicken Kuzhi Manthi',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=900',
      aspect: 'landscape',
    },
    {
      id: 'g5',
      title: 'Warm Hospitality & Dining Hall',
      category: 'ambience',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=900',
      aspect: 'landscape',
    },
    {
      id: 'g6',
      title: 'Executive Suite Bathroom & Vanity',
      category: 'rooms',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=900',
      aspect: 'portrait',
    },
    {
      id: 'g7',
      title: 'Fresh Red Velvet Celebration Cake',
      category: 'bakery',
      image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=900',
      aspect: 'square',
    },
    {
      id: 'g8',
      title: 'Sizzling Charcoal Shawaya Chicken',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=900',
      aspect: 'landscape',
    },
    {
      id: 'g9',
      title: 'Hotel Faris Garden & Balcony View',
      category: 'ambience',
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=900',
      aspect: 'landscape',
    },
  ],

  // TESTIMONIALS (Exact Google reviews from user brief)
  testimonials: [
    {
      id: 't1',
      name: 'Muhammed Shafeeque',
      location: 'Local Guide • Edavannappara',
      rating: 5,
      date: 'Google Review',
      review: 'Meals were very tasty with variety of foods and good service',
      source: 'Google Verified Diner',
    },
    {
      id: 't2',
      name: 'Rinshad P.K',
      location: 'Malappuram',
      rating: 5,
      date: 'Google Review',
      review: 'Tasty Malabari food especially fish and regular Biriyani, ghee rice etc.',
      source: 'Google Verified Diner',
    },
    {
      id: 't3',
      name: 'Abdul Basith',
      location: 'Calicut Traveler',
      rating: 5,
      date: 'Google Review',
      review: 'Good customer service, good food and have parking area in front of the restaurant',
      source: 'Google Verified Guest',
    },
    {
      id: 't4',
      name: 'Fathima Zahra',
      location: 'Edavannappara',
      rating: 5,
      date: 'Google Review',
      review: 'Ordered a customized birthday cake from Faris Bakery. Presentation was spectacular and it tasted so fresh. The staff was polite and delivered right on time.',
      source: 'Google Verified Customer',
    },
    {
      id: 't5',
      name: 'Noufal K.',
      location: 'Airport Transit Guest',
      rating: 5,
      date: 'Google Review',
      review: 'Clean and calm soundproof room near Calicut Airport route. Very convenient check-in, ample parking, and delicious food round the clock downstairs.',
      source: 'Google Verified Hotel Guest',
    },
  ],

  // VALUE PILLARS
  whyChooseUs: [
    {
      title: '100% Halal & Fresh Daily',
      desc: 'All meats and seafood are handpicked fresh every morning from local Kerala markets and strictly halal prepared.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Authentic Malabari Mastery',
      desc: 'Traditional slow-cooking techniques, age-old spice masalas, and seasoned Malabar master chefs.',
      icon: 'Flame',
    },
    {
      title: 'Hassle-Free Free Parking',
      desc: 'Spacious dedicated private parking right outside for family cars, travelers, and tourist coaches.',
      icon: 'ParkingSquare',
    },
    {
      title: 'Sanitized Soundproof Stays',
      desc: 'Pristine hygiene standards, premium mattresses, and acoustic insulation for peaceful rest.',
      icon: 'BedDouble',
    },
    {
      title: 'Open 7 AM Till Midnight',
      desc: 'From sunrise breakfast appam-stew to late-night midnight biryani cravings and early-morning airport departures.',
      icon: 'Clock3',
    },
    {
      title: 'Complete 3-in-1 Convenience',
      desc: 'Dine in luxury, book a soundproof room, and order a fresh celebration cake without stepping off the premises.',
      icon: 'Building2',
    },
  ],
};
