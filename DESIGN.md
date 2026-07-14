# Madhur Fashion Design System Specs

## Visual Direction
The visual identity of Madhur Fashion is rooted in **warm elegance, size-inclusive confidence, and premium editorial quality**. It rejects generic, cold grids and bubbly gradients in favor of curated typography, refined spacing, and warm tone harmonies.

---

## 1. Color Palette

```
Warm Ivory (Base Bg)       : #FCFAF6
Pure White (Card Bg)       : #FFFFFF
Deep Charcoal (Text/Dark)  : #1E1E1E
Muted Alabaster (Secondary): #F5F2EB
Muted Burgundy (Accent 1)  : #8A2E44
Antique Gold (Accent 2)    : #C2A478
Soft Border                : #EBE6DD
```

*   **Primary Background:** `#FCFAF6` (Warm Ivory). Creates a soft, premium, boutique atmosphere, much softer than stark `#ffffff` or clinical grays.
*   **Text & Core UI:** `#1E1E1E` (Deep Charcoal) for readability and modern edge. Avoids stark pitch black.
*   **Primary Brand Accent:** `#8A2E44` (Muted Burgundy / Wine Red). Evokes femininity, heritage, and premium fashion quality.
*   **Secondary Brand Accent:** `#C2A478` (Antique Champagne Gold). Used for elegant labels, fine borders, and decorative metadata.
*   **Borders & Dividers:** `#EBE6DD` (Soft Beige-Gray) for thin, clean lines that divide content gracefully.

---

## 2. Typography

*   **Primary Display / Headings:**
    *   **Font Family:** `Cormorant Garamond`, serif (imported from Google Fonts).
    *   **Style:** Very elegant, slightly italicized variants for display highlights, light and regular weights.
    *   **Application:** Hero headlines, section titles, brand story titles.
*   **Body & Interface Copy:**
    *   **Font Family:** `Plus Jakarta Sans`, sans-serif (imported from Google Fonts).
    *   **Style:** Clean, geometric, and highly readable. Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold).
    *   **Application:** Body paragraphs, product cards, navigation menu links, button text.
*   **Captions / UI Accents / Labels:**
    *   **Font Family:** `Plus Jakarta Sans` or `Montserrat` (uppercase, tracking/letter-spacing `0.1em` to `0.2em`).
    *   **Application:** Announcement bar, categories, breadcrumbs, tags.

---

## 3. Layout & Structure

*   **Grid System:** Responsive grids, desktop utilizing asymmetrical structures where appropriate to feel editorial, mobile stacking cleanly with generous vertical margins.
*   **Whitespace (Negative Space):** Large padding blocks (`py-16` to `py-24` on desktop) to give sections breathing room. Never let items feel cramped.
*   **Borders & Radii:**
    *   **Border Radius:** 2px (`rounded-sm`) or 0px (`rounded-none`). Rounded corners are kept minimal to maintain a clean, crisp, editorial layout, avoiding the bubbly "AI application" aesthetic.
    *   **Borders:** Fine, 1px lines (`border-[1px] border-soft-beige`) to structure segments elegant.
*   **Shadows:** Extremely subtle. Only `shadow-sm` or custom low-opacity shadows (e.g. `rgba(30, 30, 30, 0.03)`). No heavy overlays.

---

## 4. Interaction Patterns & Motion

*   **Hover States:**
    *   **Product Cards:** Smooth scale transitions on the image (`scale-102` to `scale-105`), shifting buttons, and revealing detail states (like sizes or wishlist).
    *   **Buttons:** Inverse background fills or fine gold borders shifting on hover with `duration-300` transitions.
    *   **Navigation Links:** Underline expand-from-center animations in Muted Burgundy.
*   **Reveal Animations (using Framer Motion):**
    *   **Scroll Triggered:** Gentle vertical slide-ups (`y: 20` to `y: 0`, opacity `0` to `1`) for sections.
    *   **Page Load:** Quick fade-in for header and staggered entry for Hero banner components.

---

## 5. UI Layout Inspiration from Iconic India
*   **Minimal Announcement Bar:** Elegant 1-2 sentence carousel, thin heights, centered text.
*   **Overlaid Sticky Header:** Blends with the hero background on top, turning into solid Warm Ivory on scroll with refined thin bottom border.
*   **Editorial Hero:** Non-centered text block on hero banners (placed left or right matching the empty space of the photography).
*   **Fine-line Dividers:** 1px borders between sections instead of solid background color shifts.
