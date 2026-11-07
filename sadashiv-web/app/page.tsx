import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts, categoryMeta } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';
import Logo from '@/components/shared/Logo';

export const metadata: Metadata = {
  title: 'Sadashiv Fashions Jaipur | Boutique Ethnic Wear, Suits, Kurtis & Fabrics',
  description:
    'Sadashiv Fashions is an authentic physical fashion boutique in Malviya Nagar, Jaipur, offering women’s suits, kurtis, pure fabrics, and dupattas. Explore collections, call us, or get showroom directions.',
  openGraph: {
    title: 'Sadashiv Fashions Jaipur | Boutique Ethnic Wear & Handloom Fabrics',
    description:
      'Visit Sadashiv Fashions at Malviya Nagar, Jaipur. Tailored women’s ethnic wear and pure textiles.',
    images: [{ url: '/images/store/store-window.webp', width: 1200, height: 630 }],
  },
};

const TEL_LINK = 'tel:+916376648869';
const MAPS_LINK = 'https://maps.google.com/?q=Sadashiv+Fashions+Malviya+Nagar+Jaipur';
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
  description: 'A physical fashion boutique and textile atelier in Malviya Nagar, Jaipur.',
};

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. Hero: Cinematic Editorial Boutique Presence ───────────── */}
      <section className="relative min-h-[92dvh] flex items-end pb-16 sm:pb-24 pt-20 px-4 sm:px-8 overflow-hidden bg-[#1A1817]">
        {/* Background Visual */}
        <Image
          src="/images/store/store-window.webp"
          alt="Sadashiv Fashions Jaipur store window display — suits, kurtis and ethnic wear"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-1000"
        />

        {/* Cinematic Dusk Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817] via-[#1A1817]/65 to-[#1A1817]/25" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#1A1817]/40 to-[#1A1817]/85" />

        {/* Content Spine */}
        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="max-w-3xl">
            {/* Chapter Eyebrow — Responsive padding & truncation shield */}
            <div className="inline-flex max-w-full items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#FAF6F0]/10 backdrop-blur-md border border-[#C5A059]/30 mb-6 overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-[#D4197D] animate-pulse flex-shrink-0" />
              <span className="font-serif italic text-xs text-[#C5A059] truncate">I · Malviya Nagar Atelier</span>
              <span className="text-white/30 text-[10px]">|</span>
              <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.24em] text-[#FAF6F0]/90 font-medium truncate">
                Jaipur, Rajasthan
              </span>
            </div>

            {/* Display Headline — Fluid typography for compact screens */}
            <h1 className="font-display font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF6F0] leading-[1.08] sm:leading-[1.05] tracking-tight mb-6">
              Tradition, <br />
              <span className="font-normal italic text-[#C5A059]">thoughtfully</span> styled.
            </h1>

            <p className="text-sm sm:text-base text-[#D4C4B8] leading-relaxed max-w-xl mb-8 sm:mb-10 font-sans">
              Welcome to Sadashiv Fashions, a landmark physical fashion boutique in Malviya Nagar, Jaipur. We bring together a considered selection of women&apos;s tailored suit sets, breathable kurtis, pure fabrics, and heirloom dupattas.
            </p>

            {/* Primary Actions: Structured clean layout for mobile, inline for desktop */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <Link
                href="/collections"
                className="group inline-flex items-center justify-between sm:justify-start gap-3 bg-[#FAF6F0] text-[#1A1817] rounded-full pl-6 pr-2 py-2 min-h-[44px] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_rgba(250,246,240,0.2)] active:scale-98"
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
                className="inline-flex items-center justify-center gap-2.5 bg-[#D4197D] hover:bg-[#B31468] text-white rounded-full px-6 py-3.5 min-h-[44px] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm active:scale-98"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>WhatsApp Enquiry</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center">
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-[#FAF6F0] border border-white/20 backdrop-blur-md rounded-full px-4 sm:px-5 py-3.5 min-h-[44px] text-xs uppercase tracking-[0.16em] font-medium transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>Call Us</span>
                </a>

                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 border border-white/20 hover:border-white text-white rounded-full px-4 sm:px-5 py-3.5 min-h-[44px] text-xs uppercase tracking-[0.16em] font-medium transition-colors"
                >
                  <span>Directions</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Heritage Credentials Strip */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <p className="font-serif italic text-sm text-[#C5A059]">01</p>
              <p className="text-[11px] uppercase tracking-wider text-[#D4C4B8] mt-1 font-medium">Physical Boutique</p>
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
              <p className="text-[11px] uppercase tracking-wider text-[#D4C4B8] mt-1 font-medium">Local Jaipur Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Brand Identity & Heritage Statement ───────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5 flex justify-center md:justify-start">
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

          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#9E4736] font-semibold mb-4">
              <span>✦</span>
              <span>Jaipur Fashion &amp; Textile Boutique</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1817] leading-tight mb-6">
              A Jaipur house dedicated to women&apos;s ethnic grace and tactile textiles.
            </h2>
            <p className="text-sm sm:text-base text-[#5A4A42] leading-relaxed mb-6 font-sans">
              Located on Krishna Nand Marg in Malviya Nagar, Sadashiv Fashions is an authentic brick-and-mortar destination for curated ethnic wear. We invite you to explore our racks in person, feel the textures of pure cotton and silk, and consult with our team for wardrobe styling or bulk fabric requirements.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1A1817] hover:text-[#D4197D] transition-colors border-b-2 border-[#1A1817] pb-1 hover:border-[#D4197D]"
              >
                Our Story &amp; Custodians →
              </Link>
              <Link
                href="/visit"
                className="text-xs uppercase tracking-[0.18em] font-semibold text-[#7A6358] hover:text-[#1A1817] transition-colors"
              >
                Visit Showroom &amp; Hours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Four Core Collections: Visual Bento Grid ─────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 sm:mb-12 border-b border-[#E6D8C8] pb-6">
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
            Explore Complete Collections Gallery →
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid — Balanced 2-col on Tablet, 12-col on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Tile 1: Suits (7 col feature on lg, equal on md) */}
          <Link
            href="/collections#suits"
            className="group relative lg:col-span-7 aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/11] rounded-3xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-xs"
          >
            <Image
              src="/images/products/mannequin-left.webp"
              alt="Women's Suits Collection at Sadashiv Fashions"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 sm:p-8">
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
            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              ↗
            </div>
          </Link>

          {/* Tile 2: Kurtis (5 col feature on lg, equal on md) */}
          <Link
            href="/collections#kurtis"
            className="group relative lg:col-span-5 aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/11] rounded-3xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-xs"
          >
            <Image
              src="/images/products/mannequin-right.webp"
              alt="Curated Kurtis Collection"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 sm:p-8">
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
            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              ↗
            </div>
          </Link>

          {/* Tile 3: Fabrics (5 col feature on lg, equal on md) */}
          <Link
            href="/collections#fabrics"
            className="group relative lg:col-span-5 aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/11] rounded-3xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-xs"
          >
            <Image
              src="/images/products/detail-fabric-weave.webp"
              alt="Handloom Fabrics & Dress Materials"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 sm:p-8">
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
            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              ↗
            </div>
          </Link>

          {/* Tile 4: Dupattas (7 col feature on lg, equal on md) */}
          <Link
            href="/collections#dupattas"
            className="group relative lg:col-span-7 aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/11] rounded-3xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-xs"
          >
            <Image
              src="/images/products/mannequin-center.webp"
              alt="Artisanal Hand-Finished Dupattas"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 sm:p-8">
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
            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              ↗
            </div>
          </Link>
        </div>
      </section>

      {/* ── 4. Showroom Highlights: Pure Editorial Gallery ──────────── */}
      <section className="bg-[#FCFAF6] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E6D8C8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-2">
                Showroom Curation
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1A1817]">Featured in Boutique</h2>
            </div>
            <Link
              href="/collections"
              className="text-xs uppercase tracking-[0.18em] text-[#1A1817] hover:text-[#D4197D] font-medium link-underline mt-3 sm:mt-0"
            >
              Explore All Collections →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Featuring the Custodians: Suresh & Kashish Gangwani ──── */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FAF6F0] rounded-3xl border border-[#E6D8C8] p-5 sm:p-10 lg:p-14 shadow-xs">
          <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-center">
            {/* Showroom & People Card */}
            <div className="md:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-sm">
              <Image
                src="/images/store/store-exterior.jpg"
                alt="Sadashiv Fashions boutique exterior in Malviya Nagar, Jaipur"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/75 via-[#1A1817]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF6F0]/95 backdrop-blur-md rounded-xl border border-white/40">
                <p className="font-display text-base text-[#1A1817]">Suresh Gangwani &amp; Kashish Gangwani</p>
                <p className="text-xs text-[#7A6358] mt-0.5">Custodians · Sadashiv Fashions</p>
              </div>
            </div>

            {/* Editorial Introduction */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-3">
                <span>✦</span>
                <span>The People Behind the Boutique</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1A1817] leading-snug mb-5">
                Guided by personal passion for Jaipur’s textile traditions.
              </h2>
              <p className="text-sm text-[#5A4A42] leading-relaxed mb-6 font-sans">
                At Sadashiv Fashions, store owners Suresh Gangwani and Kashish Gangwani oversee the curation of every ensemble, unstitched fabric bolt, and handcrafted kurti. Our Malviya Nagar boutique offers warm hospitality, personal style guidance, and wholesale partnerships built on trust.
              </p>

              {/* Custodians names: 1 col on mobile <640px, 2 col on sm+ to prevent awkward text wrapping */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 mb-8">
                <div className="p-4 bg-[#F3ECE2] rounded-2xl border border-[#E6D8C8]">
                  <p className="font-display text-lg text-[#1A1817]">Suresh Gangwani</p>
                  <p className="text-xs text-[#7A6358] mt-0.5 font-serif italic">Boutique Leadership</p>
                </div>
                <div className="p-4 bg-[#F3ECE2] rounded-2xl border border-[#E6D8C8]">
                  <p className="font-display text-lg text-[#1A1817]">Kashish Gangwani</p>
                  <p className="text-xs text-[#7A6358] mt-0.5 font-serif italic">Curatorial Direction</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#1A1817] hover:text-[#D4197D] border-b border-[#1A1817] pb-1 hover:border-[#D4197D] transition-colors"
                >
                  <span>Learn More in Our Story</span>
                  <span>→</span>
                </Link>
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-[#7A6358] hover:text-[#1A1817] transition-colors py-1"
                >
                  <span>Call Atelier: +91 63766 48869</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Showroom Visit & Direct Guidance ──────────────────────── */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1A1817]">
        <Image
          src="/images/store/store-signage.webp"
          alt="Sadashiv Fashions illuminated Hindi signage in Jaipur"
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1817]/95 via-[#1A1817]/85 to-[#1A1817]/75" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#C5A059] font-bold mb-4 block">
              Malviya Nagar Boutique
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#FAF6F0] mb-5 leading-tight">
              We welcome you to visit our physical showroom.
            </h2>
            <address className="not-italic text-sm text-[#D4C4B8] leading-relaxed mb-8 font-sans">
              2/72, Krishna Nand Marg,<br />
              near Government Girls Senior Secondary School,<br />
              Malviya Nagar, Jaipur — 302017, Rajasthan
            </address>

            {/* Visit Actions: Structured stack for mobile, inline for tablet/desktop */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#FAF6F0] text-[#1A1817] text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 rounded-full hover:bg-white transition-colors shadow-sm active:scale-98"
              >
                <span>Get Directions on Google Maps</span>
                <span>↗</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center">
                <a
                  href={TEL_LINK}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-[#FAF6F0] border border-white/20 text-xs font-semibold uppercase tracking-[0.16em] px-5 py-3.5 rounded-full transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>Call Us</span>
                </a>

                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#D4197D] hover:bg-[#B31468] text-white text-xs font-semibold uppercase tracking-[0.16em] px-5 py-3.5 rounded-full transition-colors shadow-sm active:scale-98"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <p className="mt-8 text-xs text-[#8A7C73]">
              * Serving individual wardrobe clients and boutique wholesale merchants. Local delivery available in Jaipur and nearby areas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
