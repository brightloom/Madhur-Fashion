# Madhur Fashion Asset Requirements & Source Log

## Asset Sourcing Philosophy
To build a premium, believable homepage and avoid the generic "AI template" look, we use high-quality, professional photographs that align with the brand’s Indian ethnic and western styles. 
*   **Production Goal:** We generate working model assets representing the actual product style using the system's image generator. These serve as realistic high-fidelity assets for the demo.
*   **Instagram Handover:** If the client wants to replace these demo images with their actual inventory photos from Instagram, they must provide clean, high-resolution original source files.

---

## 1. Required Visual Assets & Specifications

### A. Branding & Identity
*   **Logo Text / Icon:** Madhur Fashion wordmark. Elegant Serif typeface (`Cormorant Garamond`).
*   **Favicon:** Clean brand mark ('M' in Champagne Gold inside deep burgundy background).

### B. Header & Backgrounds
*   **Body Background:** Warm off-white / Ivory gradient or flat tone (`#FCFAF6`).

### C. Major Sections & Banners

| Asset Name | Target Dimensions | Visual Description | File Path | Status | Source |
|---|---|---|---|---|---|
| `logo.svg` | Vector / Custom | Refined text logo in Burgundy / Gold | `/public/assets/logo.svg` | Pending | Generated Code |
| `hero_model.jpg` | 1600 x 900 px | Elegant Indian model in a premium floral printed cotton kurti set, bright background | `/public/images/hero_model.webp` | Pending | Generated AI |
| `promo_model.jpg` | 1600 x 800 px | Mid-shot of an Indian model in a designer co-ord set, warm neutral background | `/public/images/promo_model.webp` | Pending | Generated AI |
| `brand_story.jpg` | 800 x 1000 px | Close-up of premium handloom cotton fabrics, showing texture and embroidery | `/public/images/brand_story.webp` | Pending | Generated AI |

### D. Categories Grid (6 Cards, 600 x 800 px, Portrait 3:4)

| Category | Visual Description | Target File Path | Status |
|---|---|---|---|
| **Kurtis** | Indian model wearing a classic A-line printed kurti in white and burgundy | `/public/images/cat_kurti.webp` | Pending |
| **Co-ord Sets** | Modern linen co-ord set in olive green or terracotta on model | `/public/images/cat_coord.webp` | Pending |
| **Festive Wear** | Premium embroidered Anarkali suit set in wine red with gold borders | `/public/images/cat_festive.webp` | Pending |
| **Western Wear** | Casual pastel floral dress on model | `/public/images/cat_western.webp` | Pending |
| **Cotton Essentials** | Indigo blue block-printed cotton tunic and pants set | `/public/images/cat_cotton.webp` | Pending |
| **Plus Size** | Plus-size Indian model smiling, in an elegant printed straight kurti set | `/public/images/cat_plus.webp` | Pending |

### E. New Arrivals (4 Product Cards, 600 x 800 px, Portrait 3:4)

| Product | Visual Description | Target File Path | Status |
|---|---|---|---|
| **1. Classic Indigo Kurti Set** | Indigo blue block printed cotton kurti with dupatta | `/public/images/prod_indigo.webp` | Pending |
| **2. Terracotta Co-ord Set** | Terracotta linen top and pants co-ord set | `/public/images/prod_terracotta.webp` | Pending |
| **3. Festive Wine Anarkali** | Rich burgundy wine cotton-silk Anarkali with gold embroidery | `/public/images/prod_wine.webp` | Pending |
| **4. Pastel Green Short Kurti** | Soft mint green short kurti with delicate hand embroidery | `/public/images/prod_green.webp` | Pending |

### F. Instagram Gallery (6 Square Images, 600 x 600 px)
*   `ig_1.webp` to `ig_6.webp`: Lifestyle and detail shots of outfits, fabrics, details, and happy clients representing the @madhur_fashions feed.

---

## 2. Guidelines for Client Handover
If the client wishes to replace the demo assets:
1.  **Format:** Provide high-res JPEGs or PNGs (minimum 1200px width for products, 2000px width for banners).
2.  **Composition:** Ensure subjects are centered or slightly offset to leave space for overlays, shot in bright natural light, with plain or neutral backgrounds.
3.  **Filenames:** Keep filenames matching the names above to allow drop-in replacement without editing code files.
