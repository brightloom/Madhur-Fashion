# Madhur Fashion Implementation Plan

This plan details the technical steps to build the flagship homepage for Madhur Fashion. The project will be built using **Next.js (App Router), TypeScript, and Tailwind CSS**, with custom styling, Framer Motion animations, and Lucide icons.

---

## 1. Directory Structure

The complete project will be structured inside `Client Work/Madhur Fashion/`:

```
Client Work/Madhur Fashion/
├── PROJECT.md                # Project definition & spec
├── DESIGN.md                 # Design system & visual tokens
├── CONTENT.md                # Editorial copywriting & content guides
├── ASSET_REQUIREMENTS.md     # Specifications & logs for visual assets
├── IMPLEMENTATION_PLAN.md    # This technical execution plan
└── madhur-fashion-website/   # Next.js TypeScript App
    ├── package.json
    ├── tailwind.config.js
    ├── next.config.js
    ├── tsconfig.json
    ├── public/
    │   ├── assets/           # SVG icons, logo
    │   └── images/           # Generated model photos (WebP format)
    └── src/
        ├── app/
        │   ├── layout.tsx    # Root layout with fonts & meta
        │   ├── page.tsx      # Main Homepage
        │   └── globals.css   # Main CSS & custom style utilities
        └── components/
            ├── AnnouncementBar.tsx
            ├── Header.tsx
            ├── Hero.tsx
            ├── CategoryGrid.tsx
            ├── ProductGrid.tsx
            ├── ProductCard.tsx
            ├── PromoBanner.tsx
            ├── USPs.tsx
            ├── BrandStory.tsx
            ├── InstagramGallery.tsx
            ├── ContactStore.tsx
            └── Footer.tsx
```

---

## 2. Phase-by-Phase Technical Tasks

### Phase A: Environment Setup & Project Initialization
1.  Initialize a clean Next.js app in `madhur-fashion-website` using `npx create-next-app@latest` with Tailwind CSS, TypeScript, ESLint, and App Router, configured non-interactively.
2.  Install dependencies: `lucide-react`, `framer-motion`.
3.  Configure tailwind colors and custom typography in `tailwind.config.js` to match the brand specs in `DESIGN.md`.
4.  Import premium fonts (`Cormorant Garamond` and `Plus Jakarta Sans`) inside `src/app/layout.tsx`.

### Phase B: Asset Generation
1.  Create `/public/images` and `/public/assets` directories.
2.  Use the `generate_image` tool to create realistic high-resolution Indian model photographs representing:
    *   Hero lifestyle photo (`hero_model.webp`)
    *   Promo banner photo (`promo_model.webp`)
    *   Category grid cards (kurtis, co-ords, festive wear, western wear, cotton essentials, plus size catalog)
    *   New Arrival product cards (4 items)
    *   Fabric detail (`brand_story.webp`)
    *   6 Instagram-style square gallery cards (`ig_1.webp` to `ig_6.webp`)
3.  Convert all generated images to high-performance WebP formats.

### Phase C: Core Layout & Style Initialization
1.  Set up `globals.css` with custom theme classes, visual overrides, and styling tokens.
2.  Build the base `layout.tsx` to handle SEO titles, descriptions, viewport settings, and smooth-scrolling containers.

### Phase D: Component Development
1.  **AnnouncementBar:** Scrolling news ticker for promos & sizing info.
2.  **Header:** Overlay-to-opaque sticky header with elegant text-logo, navigation links, and utility icons.
3.  **Hero:** Large background banner with left/right text layout, premium typography, and CTAs.
4.  **CategoryGrid:** Interactive 3x2 grid with overlay zoom.
5.  **ProductCard / ProductGrid:** Multi-variant cards with size select states, favorite icons, and instant WhatsApp inquiry paths.
6.  **PromoBanner:** Full-width high-fashion promo banner.
7.  **USPs:** A 4-column brand values highlight block.
8.  **BrandStory:** Dual-column text and fabric texture visual.
9.  **InstagramGallery:** Grid of square lifestyle photos with hover overlays.
10. **ContactStore:** Dedicated address card with working deep links to WhatsApp (`wa.me`) and Google Maps directions.
11. **Footer:** Premium footer structure.

### Phase E: Interactive Features & Verification
1.  Verify that all WhatsApp links use the verified number (`+91 91660 40591`) and proper URL encoding.
2.  Add Framer Motion fade-ins and stagger-load transitions for visual polish.
3.  Run compilation builds and verify that there are no console errors, typescript errors, or hydration mismatches.
