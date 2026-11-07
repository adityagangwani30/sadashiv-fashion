import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts, categoryMeta } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';
import Logo from '@/components/shared/Logo';

export const metadata: Metadata = {
  title: 'Sadashiv Fashions Jaipur | Ethnic Wear, Suits, Kurtis & Fabrics',
  description:
    'Explore suits, kurtis, fabrics and dupattas at Sadashiv Fashions in Malviya Nagar, Jaipur. Browse the collection and enquire directly on WhatsApp.',
  openGraph: {
    title: 'Sadashiv Fashions Jaipur | Ethnic Wear, Suits, Kurtis & Fabrics',
    description:
      'Explore suits, kurtis, fabrics and dupattas at Sadashiv Fashions in Malviya Nagar, Jaipur.',
    images: [{ url: '/images/store/store-window.webp', width: 1200, height: 630 }],
  },
};

const WA_GENERAL =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20interested%20in%20your%20curated%20collection.%20Please%20guide%20me.';
const WA_WHOLESALE =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20enquiring%20about%20a%20wholesale%20purchase.%20Please%20share%20your%20catalogue%2C%20pricing%20and%20terms.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Sadashiv Fashions',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2/72, Krishna Nand Marg, near Government Girls Senior Secondary School',
    addressLocality: 'Malviya Nagar',
    addressRegion: 'Rajasthan',
    postalCode: '302017',
    addressCountry: 'IN',
  },
  telephone: '+916376648869',
  url: 'https://sadashivfashions.in',
  sameAs: ['https://www.instagram.com/sadashivfashionsjaipur/'],
  priceRange: 'Contact on WhatsApp for pricing',
};

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. Hero: Cinematic Editorial Poise ───────────────────────── */}
      <section className="relative min-h-[92dvh] flex items-end pb-16 sm:pb-24 pt-20 px-4 sm:px-8 overflow-hidden bg-[#1A1817]">
        {/* Background Visual */}
        <Image
          src="/images/store/store-window.webp"
          alt="Sadashiv Fashions Jaipur store window display — suits, kurtis and ethnic wear"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-102 transition-transform duration-1000"
        />

        {/* Cinematic Dusk Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817] via-[#1A1817]/65 to-[#1A1817]/25" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#1A1817]/40 to-[#1A1817]/85" />

        {/* Content Spine */}
        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="max-w-3xl">
            {/* Chapter Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF6F0]/10 backdrop-blur-md border border-[#C5A059]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4197D] animate-pulse" />
              <span className="font-serif italic text-xs text-[#C5A059]">I · Malviya Nagar Atelier</span>
              <span className="text-white/30 text-[10px]">|</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#FAF6F0]/90 font-medium">
                Jaipur, Rajasthan
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display font-light text-5xl sm:text-7xl lg:text-8xl text-[#FAF6F0] leading-[1.05] tracking-tight mb-6">
              Tradition, <br />
              <span className="font-normal italic text-[#C5A059]">thoughtfully</span> styled.
            </h1>

            <p className="text-sm sm:text-base text-[#D4C4B8] leading-relaxed max-w-xl mb-10 font-sans">
              Discover women&apos;s ethnic wear, curated suit sets, handcrafted kurtis, heirloom dupattas, and fine dress materials. Sourced and tailored for both retail wardrobes and wholesale partners.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/collections"
                className="group inline-flex items-center gap-3 bg-[#FAF6F0] text-[#1A1817] rounded-full pl-6 pr-2 py-2 text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_rgba(250,246,240,0.2)] active:scale-95"
              >
                <span>Explore Collections</span>
                <span className="w-8 h-8 rounded-full bg-[#1A1817] text-[#FAF6F0] flex items-center justify-center transition-transform group-hover:rotate-45">
                  ↗
                </span>
              </Link>

              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 text-[#FAF6F0] border border-white/20 backdrop-blur-md rounded-full px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:border-[#D4197D]"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>WhatsApp Atelier</span>
              </a>
            </div>
          </div>

          {/* Heritage Credentials Strip */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <p className="font-serif italic text-sm text-[#C5A059]">01</p>
              <p className="text-[11px] uppercase tracking-wider text-[#D4C4B8] mt-1 font-medium">Bespoke Curation</p>
            </div>
            <div>
              <p className="font-serif italic text-sm text-[#C5A059]">02</p>
              <p className="text-[11px] uppercase tracking-wider text-[#D4C4B8] mt-1 font-medium">Handloom Weaves</p>
            </div>
            <div>
              <p className="font-serif italic text-sm text-[#C5A059]">03</p>
              <p className="text-[11px] uppercase tracking-wider text-[#D4C4B8] mt-1 font-medium">Wholesale &amp; Retail</p>
            </div>
            <div>
              <p className="font-serif italic text-sm text-[#C5A059]">04</p>
              <p className="text-[11px] uppercase tracking-wider text-[#D4C4B8] mt-1 font-medium">Jaipur Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Brand Identity & Heritage Statement ───────────────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative p-6 sm:p-8 bg-[#F3ECE2] rounded-3xl border border-[#E6D8C8] shadow-sm max-w-md w-full text-center">
              <Logo variant="trishul" theme="magenta" size="lg" className="mx-auto mb-4" />
              <Logo variant="compact" theme="magenta" size="md" className="mx-auto" />
              <div className="mt-6 pt-4 border-t border-[#E6D8C8] flex justify-around text-xs text-[#7A6358]">
                <span>Malviya Nagar</span>
                <span>•</span>
                <span>Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#9E4736] font-semibold mb-4">
              <span>✦</span>
              <span>Jaipur Fashion &amp; Textile Boutique</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1817] leading-tight mb-6">
              A Jaipur-based house bringing together curated women&apos;s ethnic wear and pure fabrics.
            </h2>
            <p className="text-sm sm:text-base text-[#5A4A42] leading-relaxed mb-6 font-sans">
              Located in the heart of Malviya Nagar, Sadashiv Fashions is dedicated to honoring Rajasthan&apos;s rich textile vocabulary. From delicately embroidered suit sets to breathable daily kurtis and authentic dress materials, we serve individual fashion seekers and wholesale buyers alike.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link
                href="/about"
                className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1A1817] hover:text-[#D4197D] transition-colors border-b-2 border-[#1A1817] pb-1 hover:border-[#D4197D]"
              >
                Meet the Custodians →
              </Link>
              <Link
                href="/visit"
                className="text-xs uppercase tracking-[0.18em] font-semibold text-[#7A6358] hover:text-[#1A1817] transition-colors"
              >
                Showroom Directions &amp; Hours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Curated Collections: Editorial Asymmetric Grid ────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 border-b border-[#E6D8C8] pb-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-2">
              Curated Chapters
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1817]">Our Collections</h2>
          </div>
          <Link
            href="/collections"
            className="text-xs uppercase tracking-[0.18em] text-[#9E4736] hover:text-[#D4197D] font-medium link-underline mt-3 sm:mt-0"
          >
            Explore Complete Catalogue →
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Tile 1: Suits (Large 7 col feature) */}
          <Link
            href="/collections/suits"
            className="group relative md:col-span-7 aspect-[4/3] md:aspect-[16/11] rounded-3xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-xs"
          >
            <Image
              src="/images/products/mannequin-left.webp"
              alt="Women's Suits Collection"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-104"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C5A059] mb-1.5 block">
                {categoryMeta.suits.tagline}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-white mb-2">
                {categoryMeta.suits.label}
              </h3>
              <p className="text-xs text-[#D4C4B8] max-w-md line-clamp-2">
                {categoryMeta.suits.description}
              </p>
            </div>
            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </div>
          </Link>

          {/* Tile 2: Kurtis (5 col feature) */}
          <Link
            href="/collections/kurtis"
            className="group relative md:col-span-5 aspect-[4/3] md:aspect-[16/11] rounded-3xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-xs"
          >
            <Image
              src="/images/products/mannequin-right.webp"
              alt="Curated Kurtis Collection"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-104"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C5A059] mb-1.5 block">
                {categoryMeta.kurtis.tagline}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                {categoryMeta.kurtis.label}
              </h3>
              <p className="text-xs text-[#D4C4B8] max-w-xs line-clamp-2">
                {categoryMeta.kurtis.description}
              </p>
            </div>
            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </div>
          </Link>

          {/* Tile 3: Fabrics (5 col feature) */}
          <Link
            href="/collections/fabrics"
            className="group relative md:col-span-5 aspect-[4/3] md:aspect-[16/11] rounded-3xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-xs"
          >
            <Image
              src="/images/products/detail-fabric-weave.webp"
              alt="Handloom Fabrics & Dress Materials"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-104"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C5A059] mb-1.5 block">
                {categoryMeta.fabrics.tagline}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                {categoryMeta.fabrics.label}
              </h3>
              <p className="text-xs text-[#D4C4B8] max-w-xs line-clamp-2">
                {categoryMeta.fabrics.description}
              </p>
            </div>
            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </div>
          </Link>

          {/* Tile 4: Dupattas (7 col feature) */}
          <Link
            href="/collections/dupattas"
            className="group relative md:col-span-7 aspect-[4/3] md:aspect-[16/11] rounded-3xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-xs"
          >
            <Image
              src="/images/products/mannequin-center.webp"
              alt="Artisanal Hand-Finished Dupattas"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-104"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#C5A059] mb-1.5 block">
                {categoryMeta.dupattas.tagline}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-white mb-2">
                {categoryMeta.dupattas.label}
              </h3>
              <p className="text-xs text-[#D4C4B8] max-w-md line-clamp-2">
                {categoryMeta.dupattas.description}
              </p>
            </div>
            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </div>
          </Link>
        </div>
      </section>

      {/* ── 4. Showroom Highlights: Product Showcase ────────────────── */}
      <section className="bg-[#FCFAF6] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E6D8C8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-2">
                Showroom Curation
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1A1817]">Featured in Store</h2>
            </div>
            <Link
              href="/collections"
              className="text-xs uppercase tracking-[0.18em] text-[#1A1817] hover:text-[#D4197D] font-medium link-underline mt-3 sm:mt-0"
            >
              Browse Complete Inventory →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Retail & Wholesale Concierge ─────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Retail Card */}
          <div className="bg-[#FAF6F0] border border-[#E6D8C8] rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#9E4736]">
                  Retail Client
                </span>
                <span className="font-serif italic text-xs text-[#C5A059]">Wardrobe Consultation</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#1A1817] mb-4">
                Shopping for your wardrobe?
              </h3>
              <p className="text-sm text-[#5A4A42] leading-relaxed mb-6 font-sans">
                Browse our collection of suits, kurtis, fabrics and dupattas. Contact our WhatsApp concierge to confirm fabric composition, exact sizing, colorways, and local delivery in Jaipur and nearby areas.
              </p>
            </div>
            <div>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#1A1817] hover:bg-[#D4197D] text-[#FAF6F0] rounded-full px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300"
              >
                <span>Enquire as Retail Client</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Wholesale Card (Rich Midnight Velvet) */}
          <div className="bg-[#1A1817] text-[#FAF6F0] rounded-3xl p-8 sm:p-10 shadow-xl border border-[#C5A059]/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4197D]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#C5A059]">
                  Wholesale Partner
                </span>
                <span className="font-serif italic text-xs text-[#D4C4B8]">Boutique &amp; Merchant Supply</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#FAF6F0] mb-4">
                Wholesale enquiries welcome.
              </h3>
              <p className="text-sm text-[#D4C4B8] leading-relaxed mb-6 font-sans">
                Sadashiv Fashions supplies boutiques, fashion labels, and fabric merchants. Send us your products of interest, approximate quantity, and destination city on WhatsApp to receive catalogue and terms.
              </p>
            </div>
            <div className="relative z-10">
              <a
                href={WA_WHOLESALE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#FAF6F0] hover:bg-white text-[#1A1817] rounded-full px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300"
              >
                <span>Send Wholesale Enquiry</span>
                <span className="text-[#D4197D]">✦</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. About the Custodians Preview ─────────────────────────── */}
      <section className="bg-[#FCFAF6] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E6D8C8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#E6D8C8] shadow-md border border-[#E6D8C8]">
            <Image
              src="/images/store/store-exterior.jpg"
              alt="Sadashiv Fashions store in Malviya Nagar, Jaipur"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF6F0]/90 backdrop-blur-md rounded-2xl border border-white/40">
              <p className="font-display text-base text-[#1A1817]">Suresh Gangwani &amp; Kashish Gangwani</p>
              <p className="text-xs text-[#7A6358]">Sadashiv Fashions · Malviya Nagar Atelier</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-3">
              The People Behind
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1817] leading-snug mb-5">
              Meet the people behind Sadashiv Fashions
            </h2>
            <p className="text-sm text-[#5A4A42] leading-relaxed mb-6 font-sans">
              Sadashiv Fashions is a Jaipur-based fashion and textile store bringing together a considered selection of women&apos;s ethnic wear and fabrics. Get to know the people behind the store and explore our collection in person or through our digital catalogue.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#1A1817] hover:text-[#D4197D] border-b border-[#1A1817] pb-1 hover:border-[#D4197D] transition-colors"
            >
              <span>Read Our Full Story</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. Visit Atelier: Malviya Nagar, Jaipur ─────────────────── */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1A1817]">
        <Image
          src="/images/store/store-signage.webp"
          alt="Sadashiv Fashions illuminated Hindi signage in Jaipur"
          fill
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1817]/95 via-[#1A1817]/85 to-[#1A1817]/70" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#C5A059] font-bold mb-4 block">
              Jaipur Atelier
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#FAF6F0] mb-5 leading-tight">
              Come see the collection in person.
            </h2>
            <address className="not-italic text-sm text-[#D4C4B8] leading-relaxed mb-8 font-sans">
              2/72, Krishna Nand Marg,<br />
              near Government Girls Senior Secondary School,<br />
              Malviya Nagar, Jaipur — 302017, Rajasthan
            </address>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://maps.google.com/?q=Sadashiv+Fashions+Malviya+Nagar+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FAF6F0] text-[#1A1817] text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 rounded-full hover:bg-white transition-colors"
              >
                <span>Google Maps Directions</span>
                <span>↗</span>
              </a>

              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <span>WhatsApp Directions</span>
              </a>
            </div>

            <p className="mt-8 text-xs text-[#8A7C73]">
              * Local delivery available in Jaipur and nearby areas. Direct WhatsApp confirmation for delivery radius and charges.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
