export interface Product {
  id: string;
  name: string;
  category: 'suits' | 'kurtis' | 'fabrics' | 'dupattas';
  slug: string;
  image: string;
  images?: string[];
  fabric?: string;
  craft?: string;
  badge?: string;
  description: string;
  details?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  // ── Suits ───────────────────────────────────────────────────────────
  {
    id: 'suit-01',
    name: 'Rani Rose Embroidered Suit Set',
    category: 'suits',
    slug: 'rani-rose-embroidered-suit-set',
    image: '/images/products/mannequin-left.webp',
    images: [
      '/images/products/mannequin-left.webp',
      '/images/products/detail-embroidery.webp',
      '/images/store/store-window.webp',
    ],
    fabric: 'Fine Cotton Silk blend',
    craft: 'Embroidered neckline & detailed hem',
    badge: 'Store Display Highlight',
    description:
      'An exquisite women\'s suit set featuring classic Jaipur tailoring, rich rose tones, and intricate neckline embroidery. Available for retail and wholesale enquiry.',
    details: [
      'Tailored ethnic silhouette with graceful drape',
      'Accompanied by coordinating bottom and dupatta',
      'Sizes and customization confirmed on WhatsApp',
      'Local delivery across Jaipur and nearby areas',
    ],
    featured: true,
  },
  {
    id: 'suit-02',
    name: 'Ivory & Butta Occasion Suit Set',
    category: 'suits',
    slug: 'ivory-butta-occasion-suit-set',
    image: '/images/products/mannequin-center.webp',
    images: [
      '/images/products/mannequin-center.webp',
      '/images/products/detail-fabric-weave.webp',
    ],
    fabric: 'Chanderi Cotton',
    craft: 'Traditional Butta work & delicate border',
    badge: 'Boutique Collection',
    description:
      'Sophisticated ivory and soft pastel suit set crafted in lightweight Chanderi weave with delicate hand-finished butta embellishment.',
    details: [
      'Boutique exclusive design from our Jaipur showroom',
      'Breathable texture suitable for festive daytime wear',
      'Single piece and bulk orders welcome',
    ],
    featured: true,
  },
  {
    id: 'suit-03',
    name: 'Jaipur Heritage Straight Suit Set',
    category: 'suits',
    slug: 'jaipur-heritage-straight-suit-set',
    image: '/images/products/mannequin-right.webp',
    images: [
      '/images/products/mannequin-right.webp',
      '/images/products/detail-embroidery.webp',
    ],
    fabric: 'Pure Cotton',
    craft: 'Tonal Zari threadwork',
    description:
      'Classic straight-cut suit set designed for understated elegance. Tailored with neat finishing and comfortable everyday wearability.',
    details: [
      'Pure natural breathable cotton fabric',
      'Detailed sleeve hems and neckline piping',
      'Contact for current size availability and shade options',
    ],
    featured: false,
  },
  {
    id: 'suit-04',
    name: 'Festive Angrakha Style Suit Set',
    category: 'suits',
    slug: 'festive-angrakha-style-suit-set',
    image: '/images/store/store-window.webp',
    images: ['/images/store/store-window.webp'],
    fabric: 'Cotton Georgette',
    craft: 'Angrakha overlap with potli button trim',
    description:
      'Part of our current store collection at Malviya Nagar. Graceful flared silhouette inspired by traditional Rajasthani royal court attire.',
    details: [
      'Flattering wrap silhouette with tassels',
      'Enquire on WhatsApp for color choices and size chart',
    ],
    featured: false,
  },

  // ── Kurtis ──────────────────────────────────────────────────────────
  {
    id: 'kurti-01',
    name: 'Classic Pink City Embroidered Kurti',
    category: 'kurtis',
    slug: 'classic-pink-city-embroidered-kurti',
    image: '/images/products/mannequin-right.webp',
    images: [
      '/images/products/mannequin-right.webp',
      '/images/products/detail-embroidery.webp',
    ],
    fabric: 'Slub Cotton',
    craft: 'Resham thread embroidery',
    badge: 'Showroom Favourite',
    description:
      'A versatile, breathable kurti featuring delicate thread embroidery across the yoke. Perfectly balanced for casual daywear and family gatherings.',
    details: [
      'Straight cut with side slits',
      'Standard boutique sizing available',
      'Enquire on WhatsApp for current stock',
    ],
    featured: true,
  },
  {
    id: 'kurti-02',
    name: 'Jaipur Floral Motif A-Line Kurti',
    category: 'kurtis',
    slug: 'jaipur-floral-motif-aline-kurti',
    image: '/images/products/mannequin-left.webp',
    images: [
      '/images/products/mannequin-left.webp',
      '/images/products/detail-fabric-weave.webp',
    ],
    fabric: 'Mulmul Cotton',
    craft: 'Hand-block style floral print',
    badge: 'Summer Essential',
    description:
      'Featherlight mulmul kurti designed to stay effortlessly comfortable in Jaipur summers. Features subtle flared hem and neat piping.',
    details: [
      'Ultra-soft natural cotton handle',
      'Round neck with subtle slit opening',
      'Retail & wholesale orders fulfilled',
    ],
    featured: false,
  },
  {
    id: 'kurti-03',
    name: 'Tonal Zari Yoke Festive Kurti',
    category: 'kurtis',
    slug: 'tonal-zari-yoke-festive-kurti',
    image: '/images/products/mannequin-center.webp',
    images: ['/images/products/mannequin-center.webp'],
    fabric: 'Chanderi Rayon blend',
    craft: 'Muted gold Zari stitch',
    description:
      'Graceful festive kurti featuring understated zari shimmer on the front panel. Pair with palazzos, cigarette pants, or salwars.',
    details: [
      'Occasion-ready festive sheen',
      'Three-quarter sleeves with accent border',
    ],
    featured: false,
  },
  {
    id: 'kurti-04',
    name: 'Everyday Comfort Straight Kurti',
    category: 'kurtis',
    slug: 'everyday-comfort-straight-kurti',
    image: '/images/products/mannequin-right.webp',
    images: ['/images/products/mannequin-right.webp'],
    fabric: '100% Cambric Cotton',
    craft: 'Minimalist piping detail',
    description:
      'Reliable, long-lasting cambric cotton kurti cut for easy daily wear. Holds shape and vibrant color after regular washing.',
    details: [
      'Calf length with classic side vents',
      'Pocket detail on side seam',
    ],
    featured: false,
  },

  // ── Fabrics ─────────────────────────────────────────────────────────
  {
    id: 'fabric-01',
    name: 'Traditional Butta Cotton Fabric',
    category: 'fabrics',
    slug: 'traditional-butta-cotton',
    image: '/images/products/detail-fabric-weave.webp',
    images: [
      '/images/products/detail-fabric-weave.webp',
      '/images/store/store-window.webp',
    ],
    fabric: 'Pure Cotton',
    craft: 'Traditional Jaipur Butta weave',
    badge: 'Wholesale Leader',
    description:
      'Premium grade cotton fabric featuring authentic traditional butta motifs. Highly popular for tailored suits, kurtas, and custom boutique garments.',
    details: [
      'Width: Standard 44 inches (approx.)',
      'Available cut-to-length for retail and full rolls for wholesale',
      'Soft pre-washed hand feel with crisp drape',
      'Direct enquiry for bulk metreage pricing',
    ],
    featured: true,
  },
  {
    id: 'fabric-02',
    name: 'Embroidered Butta Chiffon Fabric',
    category: 'fabrics',
    slug: 'embroidered-butta-chiffon',
    image: '/images/products/detail-embroidery.webp',
    images: [
      '/images/products/detail-embroidery.webp',
      '/images/store/store-window.webp',
    ],
    fabric: 'Fine Viscose Chiffon',
    craft: 'All-over embroidered floral butta',
    badge: 'Occasion Special',
    description:
      'Delicate, ethereal chiffon fabric embellished with finely spaced floral butta needlework. Excellent for flowing dupattas, anarkalis, and sarees.',
    details: [
      'Lightweight translucent texture with luxurious fall',
      'Gentle resham thread with micro-sheen',
      'Wholesale and retail enquiry welcome',
    ],
    featured: true,
  },
  {
    id: 'fabric-03',
    name: 'Fancy Jari Net Fabric',
    category: 'fabrics',
    slug: 'fancy-jari-net',
    image: '/images/products/detail-embroidery.webp',
    images: ['/images/products/detail-embroidery.webp'],
    fabric: 'Poly Jari Net',
    craft: 'Metallic thread jacquard work',
    description:
      'Shimmering occasion net fabric interwoven with fine zari. Ideal for celebratory jackets, lehenga overlays, sleeve trims, and dupattas.',
    details: [
      'High tensile strength and crisp structure',
      'Glints beautifully under warm ambient lighting',
    ],
    featured: false,
  },
  {
    id: 'fabric-04',
    name: 'Handcrafted Butta Silk Fabric',
    category: 'fabrics',
    slug: 'handcrafted-butta-silk',
    image: '/images/products/detail-fabric-weave.webp',
    images: ['/images/products/detail-fabric-weave.webp'],
    fabric: 'Art Silk / Tussar blend',
    craft: 'Woven zari butta motifs',
    description:
      'Rich textured handcrafted silk fabric with distinguished surface grain and regal woven motifs. A timeless choice for custom occasion ensembles.',
    details: [
      'Subtle natural silk sheen without synthetic glare',
      'Firm structure suitable for structured jackets and kurtas',
    ],
    featured: false,
  },
  {
    id: 'fabric-05',
    name: 'Poly Santoon Lining & Dress Material',
    category: 'fabrics',
    slug: 'poly-santoon',
    image: '/images/products/detail-fabric-weave.webp',
    images: ['/images/products/detail-fabric-weave.webp'],
    fabric: 'Smooth Poly Santoon',
    craft: 'High-density uniform plain weave',
    description:
      'Smooth, opaque poly santoon fabric providing an exceptional finish as inner lining, salwar material, or structured base fabric.',
    details: [
      'Anti-static soft finish next to skin',
      'Available in diverse shade spectrum on enquiry',
    ],
    featured: false,
  },
  {
    id: 'fabric-06',
    name: 'Handwoven Cotton Ikat Fabric',
    category: 'fabrics',
    slug: 'handwoven-cotton-ikat',
    image: '/images/products/detail-fabric-weave.webp',
    images: ['/images/products/detail-fabric-weave.webp'],
    fabric: '100% Handloom Cotton',
    craft: 'Resist-dyed geometric Ikat weave',
    description:
      'Artisanal handwoven cotton ikat with geometric diamond patterns. Loved by independent designers and tailoring boutiques for contemporary silhouettes.',
    details: [
      'Woven from yarn-dyed natural cotton fibers',
      'Reversible character with identical vibrancy on both sides',
    ],
    featured: false,
  },

  // ── Dupattas ────────────────────────────────────────────────────────
  {
    id: 'dupatta-01',
    name: 'Zari Bordered Festive Dupatta',
    category: 'dupattas',
    slug: 'zari-bordered-festive-dupatta',
    image: '/images/products/mannequin-left.webp',
    images: [
      '/images/products/mannequin-left.webp',
      '/images/products/detail-embroidery.webp',
    ],
    fabric: 'Chanderi Silk',
    craft: 'Broad woven antique zari border & corner tassels',
    badge: 'Festive Signature',
    description:
      'A regal Chanderi silk dupatta with wide woven gold borders and hand-tied corner tassels. Instantly elevates any solid kurti or suit.',
    details: [
      'Length: Approx. 2.4 metres, Width: 36 inches',
      'Featherlight weight with elegant drape',
      'Available for retail gifting and wholesale packs',
    ],
    featured: true,
  },
  {
    id: 'dupatta-02',
    name: 'Jaipur Kota Doria Handloom Dupatta',
    category: 'dupattas',
    slug: 'jaipur-kota-doria-handloom-dupatta',
    image: '/images/products/mannequin-center.webp',
    images: ['/images/products/mannequin-center.webp'],
    fabric: 'Kota Doria Cotton Silk',
    craft: 'Khat check weave with delicate border',
    badge: 'Artisan Weave',
    description:
      'Signature Rajasthani Kota Doria dupatta distinguished by its airy square check (khat) weave. Airy, delicate, and quintessentially Jaipur.',
    details: [
      'Semi-sheer ethereal appearance',
      'Breathable in hot weather, holds crisp pleats',
    ],
    featured: false,
  },
  {
    id: 'dupatta-03',
    name: 'Floral Butta Sheer Chiffon Dupatta',
    category: 'dupattas',
    slug: 'floral-butta-sheer-chiffon-dupatta',
    image: '/images/products/mannequin-right.webp',
    images: ['/images/products/mannequin-right.webp'],
    fabric: 'Viscose Chiffon',
    craft: 'All-over small floral buttas with scalloped lace',
    description:
      'Flowing chiffon dupatta edged with fine scalloped embroidery and miniature butta motifs scattered across the body.',
    details: [
      'Generous drape with liquid movement',
      'Ask on WhatsApp for color matching with your kurta',
    ],
    featured: false,
  },
  {
    id: 'dupatta-04',
    name: 'Classic Bandhani Inspired Dupatta',
    category: 'dupattas',
    slug: 'classic-bandhani-inspired-dupatta',
    image: '/images/products/mannequin-left.webp',
    images: ['/images/products/mannequin-left.webp'],
    fabric: 'Georgette blend',
    craft: 'Traditional dotted tie-dye aesthetic with gota patti',
    description:
      'Celebratory dupatta accented with gota patti borders and traditional dotted patterns. A joyful companion for festival wardrobes.',
    details: [
      'Durable textured crinkle handle',
      'Wholesale bundle discounts available on WhatsApp',
    ],
    featured: false,
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const getProductsByCategory = (category: Product['category']) =>
  products.filter((p) => p.category === category);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const categoryMeta = {
  suits: {
    label: 'Suits',
    subtitle: 'Women’s Tailored Ensembles',
    description:
      'Complete women\'s suit sets featuring traditional Jaipur tailoring, refined necklines, and rich textile drapes for every occasion.',
    image: '/images/products/mannequin-left.webp',
    tagline: 'Tailored Grace',
  },
  kurtis: {
    label: 'Kurtis',
    subtitle: 'Curated Boutique Silhouettes',
    description:
      'A curated collection of kurtis across breathable cottons, festive chanderis, and subtle thread embroidery for effortless everyday chic.',
    image: '/images/products/mannequin-right.webp',
    tagline: 'Effortless Everyday',
  },
  fabrics: {
    label: 'Fabrics',
    subtitle: 'Textiles & Dress Materials',
    description:
      'Premium dress materials, authentic butta cottons, embroidered chiffons, and ikat weaves available for retail tailoring and wholesale rolls.',
    image: '/images/products/detail-fabric-weave.webp',
    tagline: 'Pure Craft & Weave',
  },
  dupattas: {
    label: 'Dupattas',
    subtitle: 'Hand-Finished Drapes',
    description:
      'Hand-finished dupattas in kota doria, zari chanderi, and embroidered chiffon designed to bring completeness to any Indian ensemble.',
    image: '/images/products/mannequin-center.webp',
    tagline: 'The Crowning Drape',
  },
} as const;
