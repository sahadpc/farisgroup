# Faris Group - Super-Premium Hospitality Website

A luxury, mobile-first responsive web application built for **Faris Group**, an iconic hospitality brand in Edavannappara, Malappuram, Kerala, featuring its **Restaurant**, **Hotel (Rooms)**, and **Bakery**.

---

## 🌟 Brand Highlights & Design System

- **Official Brand Logo**: Pristine authentic Faris emblem (`public/faris-logo.jpg`), applied across the sticky header, footer, favicon, and animated preloader.
- **Brand Colors**:
  - **Faris Green**: `#22A94D` (Primary brand color sampled directly from emblem)
  - **Deep Forest Green**: `#0B3D1F` & `#062413` (Luxury contrast and depth)
  - **Warm Cream**: `#F8FAF7` (Soft off-white background)
  - **Champagne Gold Accent**: `#C9A862` (Refined highlights)
- **Typography**:
  - Headings: **Playfair Display** (Google Serif)
  - Body & UI: **Plus Jakarta Sans** (Google Modern Sans)
- **Motions & Micro-Interactions**:
  - Animated Brand Reveal Preloader with green sweep
  - Custom Desktop Green Cursor follower (disabled automatically on touch devices)
  - Sticky Glassmorphism Header with mobile full-screen drawer
  - Signature Dishes Carousel with swipe & button navigation
  - Interactive Filterable Menu Preview
  - Custom Cake WhatsApp Enquiry Generator with confetti celebration
  - Hotel Room Availability WhatsApp Dispatcher
  - Moments at Faris Masonry Gallery with interactive Lightbox modal
  - Verified Google Reviews Slider (1,266+ reviews, 4.1★ score)
  - Mobile-first Thumb-friendly Bottom Bar (Call, WhatsApp, GPS Directions, Order)
  - Desktop Floating WhatsApp Button with greeting bubble

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer recommended, tested on Node v24)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, tree-shaken static production bundle in the `dist/` directory.

---

## 📝 How to Edit Content (Owner Configuration)

All content, telephone numbers, operating hours, prices, menu items, room suites, and customer reviews are centralized in a single file:

📁 **[`src/data/farisData.ts`](file:///d:/freelance/farisgroup/src/data/farisData.ts)**

### ⚠️ Items to Confirm & Replace for the Owner:

1. **Contact Phone Numbers**:
   - Primary Phone: Currently set to `094478 45310` (voice calls)
   - WhatsApp Number: Currently set to `+91 97466 68894`
   - *Action required*: Check lines 52–61 of `src/data/farisData.ts` to confirm preferred primary lines.

2. **Hotel Room Tariffs**:
   - Deluxe AC Room: Currently placeholder `₹1,500/night`
   - Executive Suite: Currently placeholder `₹2,200/night`
   - Family Suite: Currently placeholder `₹2,800/night`
   - *Action required*: Update `pricePerNight` values in `FARIS_CONFIG.rooms` inside `src/data/farisData.ts`.

3. **High-Resolution Photography**:
   - High-quality curated Unsplash imagery is currently provided as placeholders for food, rooms, and cakes.
   - *To drop in real Faris photos*: Save photos into `public/images/` and replace the URLs in `src/data/farisData.ts`.

---

## 🌐 Deployment to Vercel

1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import the `farisgroup` repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Your luxury site will be live on a global CDN with SSL enabled.

---

## 📄 License & Attribution

Designed and developed for **Faris Group**, Edavannappara, Malappuram, Kerala 673645.
All rights reserved © Faris Group.
