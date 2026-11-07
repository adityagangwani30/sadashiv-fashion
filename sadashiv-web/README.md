# Sadashiv Fashions — Official Website

Production-grade website for **Sadashiv Fashions**, a Jaipur-based boutique fashion and textile store in Malviya Nagar, Jaipur, Rajasthan.

---

## 🌸 About the Project

Sadashiv Fashions serves both retail customers and wholesale buyers with a curated selection of women's ethnic wear (Suits, Kurtis, Fabrics, and Dupattas). This website is a high-performance digital catalogue and direct WhatsApp enquiry channel designed with an authentic, editorial Jaipur boutique aesthetic.

- **Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript 5, Tailwind CSS v4
- **Fonts:** Cormorant Garamond (display) & Inter (body) via `next/font/google`
- **Enquiry Channel:** WhatsApp (+91 63766 48869)
- **Deployment Target:** Vercel

---

## 📁 Repository Structure

```
sadashiv-web/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout (fonts, metadata, header, footer)
│   ├── globals.css                 # Tailwind v4 theme & brand tokens
│   ├── collections/
│   │   ├── page.tsx                # Collections overview
│   │   ├── suits/page.tsx          # Suits category
│   │   ├── kurtis/page.tsx         # Kurtis category
│   │   ├── fabrics/page.tsx        # Fabrics & dress materials category
│   │   └── dupattas/page.tsx       # Dupattas category
│   ├── about/page.tsx              # About Us (Suresh & Kashish Gangwani)
│   ├── gallery/page.tsx            # Visual journal with store photography
│   ├── visit/page.tsx              # Visit Us (address, hours, map, delivery info)
│   ├── sitemap.ts                  # Auto-generated XML sitemap
│   └── robots.ts                   # Search crawler directives
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Brand logo, sticky navigation, WhatsApp CTA
│   │   ├── Footer.tsx              # 3-column footer with address, links & brand
│   │   └── MobileNav.tsx           # Off-canvas sliding drawer with Escape listener
│   └── shared/
│       ├── ProductCard.tsx         # Product card with hash anchor & WhatsApp CTA
│       ├── WhatsAppButton.tsx      # Configurable WhatsApp CTA button
│       └── FloatingWhatsApp.tsx    # Mobile-only floating WhatsApp quick action
├── data/
│   └── products.ts                 # Typed product catalogue data
└── public/
    ├── brand/                      # Transparent, white & black logo assets
    └── images/
        ├── store/                  # Store exterior, window display & night signage
        └── owners/                 # Directory for owner portrait photos
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Run production preview
```bash
npm run start
```

---

## 🎨 Brand Design Tokens

| Token | Hex | Role |
|---|---|---|
| `brand-magenta` | `#D4197D` | Authentic Devanagari brand logo & restrained active states |
| `warm-ivory` | `#F7F3EC` | Primary page background |
| `soft-chalk` | `#FCFAF6` | Alternating section background |
| `jaipur-rose` | `#C98780` | Accent highlights & monogram avatars |
| `dusty-terracotta` | `#A85F50` | Links & uppercase category eyebrows |
| `deep-maroon` | `#4A2927` | Primary dark buttons & hover states |
| `warm-charcoal` | `#292522` | Editorial typography & dark cards |
| `sandstone-beige` | `#E6D8C8` | Structural dividers & image frames |

---

## 🛍️ Managing Product Data

Products are maintained in [`data/products.ts`](./data/products.ts). To add a product:

```typescript
{
  id: 'suit-05',
  name: 'Suit Set 05',
  category: 'suits', // 'suits' | 'kurtis' | 'fabrics' | 'dupattas'
  slug: 'suit-set-05',
  image: '/images/store/your-photo.jpg',
  description: 'Product description here.',
  featured: true, // true to display on homepage
}
```

---

## 📞 WhatsApp Enquiry Integration

- **Number:** `+91 63766 48869`
- Prefilled message formats:
  - **General:** `Hello Sadashiv Fashions, I am interested in your collection. Please share details.`
  - **Wholesale:** `Hello Sadashiv Fashions, I am enquiring about a wholesale purchase. Please share your catalogue, pricing and terms.`
  - **Product:** Dynamically populated with Product Name, Category, and URL.

---

## 📝 Pre-Launch Checklist (Owner Input)

1. **Owner Portraits:** Place high-res portraits of Suresh Gangwani and Kashish Gangwani into `public/images/owners/` and link them in `app/about/page.tsx`.
2. **Owner Bios:** Update approved role titles and biographies in `app/about/page.tsx`.
3. **Store Timings:** Confirm operating hours in `app/visit/page.tsx`.
4. **Google Maps Link:** Replace the search placeholder link in `app/visit/page.tsx` with the official Google Business Profile share link.

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. Set the Root Directory to `sadashiv-web`.
4. Deploy with default Next.js settings.
