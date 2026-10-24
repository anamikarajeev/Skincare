# ✨ Glow & Grace — Clean, Conscious & Radiant Skincare

An elegant, luxurious skincare e-commerce web application designed with a **pastel pink, white, and soft lavender** aesthetic. Built with semantic **HTML5, modern CSS3 with glassmorphism, pure JavaScript (ES6+), and Bootstrap 5.3**.

---

## 🌸 Aesthetic & Design System

- **Color Palette**:
  - **Pastel Pink**: `#FFF5F7`, `#FDE8EC`, `#FBD5DF`, `#EF82A1`, `#CF3F6B`
  - **Soft Lavender**: `#FAF8FD`, `#F3EFF9`, `#E6DEF3`, `#B29CD8`, `#6B4D9E`
  - **Clean Pearlescent White & Cream**: `#FFFFFF`, `#FDFBF7`, `rgba(255, 255, 255, 0.85)`
  - **Warm Gold & Emerald Accents**: `#D4A373`, `#4E9F76`
- **Typography**:
  - **Headings & Editorial Serif**: *Playfair Display* & *Cormorant Garamond*
  - **Body & Controls**: *Plus Jakarta Sans*
- **Visual Effects**:
  - Glassmorphic translucent surfaces (`backdrop-filter: blur(14px)`)
  - Subtle floating ambient badges with slow breathing keyframe animations
  - Pill buttons, curated product badges (Best Seller, Award Winner, Clean Formula, New)
  - Animated heart toggle with micro-spring pop animation

---

## 🌿 Key Features & Components

### 1. Premium Landing Page & Hero Section
- Dynamic announcement bar with promo codes and free shipping announcements.
- Editorial headline with gradient glow text and dual call-to-actions.
- Floating glassmorphic benefit badges ("Dermatologist Tested", "72h Deep Barrier Hydration").
- Social proof with customer avatars and a 4.9/5 rating.
- Trust & value proposition bar (Free Express Delivery over $50, Leaping Bunny Certified, 30-Day Guarantee, Eco-Glass Packaging).

### 2. Skincare Product Catalog
- **12 Curated Botanical Products** across 6 categories:
  - *Cleansers & Toners* (Rose Quartz Gel Wash, Milky Silk Essence Mist)
  - *Active Serums* (10% Niacinamide + Zinc, Sakura Radiance 15% Vitamin C + E)
  - *Moisturizers & Creams* (Velvet Petal Ceramide Cloud Cream, Hydra-Plump 4D Water Gel)
  - *Invisible Sun Protection* (Aura Shield Mineral SPF 50+, Sun Petal Tinted Glow Fluid SPF 40)
  - *Restorative Masks* (Lavender Moon Sleeping Jelly, French Pink Clay Detox Mask)
  - *Eye & Lip Elixirs* (Peptide Blossom Firming Eye Elixir, Glow Glaze Lip Oil Treatment)
- **Live Instant Search**: Real-time filtering by formula name, subtitle, category, skin concern, or active ingredient.
- **Category Filter Pills**: Interactive buttons to isolate specific routine steps.
- **Skin Concern Chips**: Quick filtering for Hydration, Radiance, Pores, Sensitive Skin, and Sun Defense.
- **Price & Sort Dropdown**:
  - Featured & Best Sellers
  - Price: Low to High
  - Price: High to Low
  - Highest Customer Rating
  - Alphabetical (A to Z)

### 3. Product Quick View & Detail Modal
- Multi-image gallery with clickable thumbnail selector.
- Volume / Size selector with dynamic price updating (`30ml`, `50ml`, `100ml`).
- Quantity stepper controls (`-` / `+`).
- Recommended skin types and active ingredient breakdown cards with specific roles.
- Accordion sections for:
  - Key Active Ingredients & Clinical Benefits
  - Daily Ritual Application Guide (AM / PM routine)
  - Full INCI Ingredient Transparency
- Direct Add to Bag and Wishlist toggle buttons.

### 4. Shopping Cart Drawer (Slide-out Offcanvas)
- Slide-in side drawer with live item count and persistent storage (`localStorage`).
- **Free Shipping Progress Bar**: Dynamic dollar calculation showing progress toward the $50 free shipping threshold.
- Individual item controls with thumbnail, size badge, unit price, quantity increment/decrement, and removal.
- **Promo Code System**:
  - `GLOW20` — 20% discount on the entire order
  - `GLOW15` — 15% discount for new club members
  - `FREESHIP` — Complimentary express delivery
- Real-time order summary calculation (Subtotal, Shipping, Discount, Total).
- Clear Bag option and Empty State illustration.
- Checkout flow triggering an interactive **Instant Express Checkout Modal**.

### 5. Wishlist Drawer (Slide-out Offcanvas)
- Heart icon toggle on each product card and detail modal with animation.
- Real-time badge counter on desktop and mobile headers.
- Slide-out drawer with options to "Move to Bag" individually or "Move All to Bag".
- Fully synced and persisted in `localStorage`.

### 6. Interactive 60-Second Skin Diagnostic Quiz
- 3-step interactive questionnaire (Midday Skin Feel, #1 Concern, Preferred Glow Finish).
- Tailored clinical recommendations presenting the top 3 matching formulas for that skin profile.
- Direct "Add to Bag" buttons for recommended items and quiz retake option.

### 7. Customer Reviews & Community Feedback
- Highlighting verified buyer reviews with skin profiles, star ratings, and purchased products.
- Interactive **"Write a Review" Modal** allowing visitors to submit their own review, which immediately gets added to the live review feed.

### 8. Skincare Tips Blog ("The Glow Journal")
- Editorial cards featuring skincare advice from dermatologists and cosmetic chemists.
- Interactive **Blog Reading Modal** presenting complete step-by-step guides (e.g. *The Glass Skin Routine*, *Niacinamide vs. Vitamin C*, *Barrier Repair 101*).

### 9. Newsletter & Glow Club Unlock
- Newsletter signup with email validation.
- Submitting immediately triggers a celebration toast and applies promo code `GLOW15` to the shopping bag.

### 10. Responsive Design & Toast Alerts
- Fully responsive across mobile, tablet, and desktop viewports.
- Bootstrap 5 Toast notifications for cart updates, wishlist actions, promo codes, and reviews.
- Smooth scrolling and floating "Back to Top" button.

---

## 🚀 How to Run Locally

You can open the project in any web browser:

### Option 1: Direct File Opening
Double-click `index.html` or open it with your favorite browser (Chrome, Edge, Safari, Firefox).

### Option 2: Local Python Server (Recommended)
Run the following in your terminal:
```bash
python -m http.server 8080 --directory "c:\Users\ANAMIKA\OneDrive\Desktop\github\skincare"
```
Then navigate to:
```
http://localhost:8080
```

---

## 📁 Project File Structure

```
skincare/
├── index.html          # Main HTML document & Bootstrap 5 structure
├── css/
│   └── style.css       # Custom pastel pink & lavender design system
├── js/
│   ├── products.js     # Curated skincare catalog, blog posts, & reviews
│   └── app.js          # Cart, wishlist, filters, search, modals, & state
└── README.md           # Documentation & feature overview
```
