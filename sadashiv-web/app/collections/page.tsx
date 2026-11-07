import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { products, categoryMeta } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';

export const metadata: Metadata = {
  title: 'Collections — Suits, Kurtis, Fabrics & Dupattas',
  description:
    'Browse all collections at Sadashiv Fashions — women\'s suits, kurtis, fabrics and dupattas in Malviya Nagar, Jaipur. Retail and wholesale enquiries welcome.',
  openGraph: {
    title: 'Collections | Sadashiv Fashions',
    description: 'Browse women\'s ethnic wear and fabrics at Sadashiv Fashions, Malviya Nagar, Jaipur.',
    images: [{ url: '/images/products/mannequin-left.webp' }],
  },
};

const categories = Object.entries(categoryMeta) as [
  keyof typeof categoryMeta,
  (typeof categoryMeta)[keyof typeof categoryMeta]
][];

export default function CollectionsPage() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E6D8C8]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4197D]" />
            <span>— Complete Atelier Catalogue —</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-6xl text-[#1A1817] leading-tight mb-4">
            The Collections
          </h1>
          <p className="text-sm sm:text-base text-[#5A4A42] leading-relaxed font-sans">
            Women&apos;s tailored ethnic wear, graceful kurtis, heirloom dupattas, and unstitched dress materials. Sourced and curated in the Pink City for retail wardrobes and wholesale partners.
          </p>

          {/* Quick Category Selector Links */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link
              href="/collections"
              className="bg-[#1A1817] text-white text-xs uppercase tracking-[0.16em] px-4 py-2 rounded-full font-medium"
            >
              All Categories
            </Link>
            {categories.map(([key, cat]) => (
              <Link
                key={key}
                href={`/collections/${key}`}
                className="bg-[#F3ECE2] hover:bg-[#E6D8C8] text-[#1A1817] text-xs uppercase tracking-[0.16em] px-4 py-2 rounded-full font-medium transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Portals ────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.22em] text-[#7A6358] font-semibold mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(([key, cat]) => (
            <Link
              key={key}
              href={`/collections/${key}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#E6D8C8] border border-[#E6D8C8] shadow-xs"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A059] font-medium block mb-1">
                  {cat.tagline}
                </span>
                <h3 className="font-display text-2xl text-white mb-1.5">{cat.label}</h3>
                <p className="text-xs text-[#D4C4B8] line-clamp-2">{cat.description}</p>
              </div>
              <div className="absolute top-3 right-3 text-white text-xs bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                View →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Complete Featured Showcase ──────────────────────────────── */}
      <section className="bg-[#FCFAF6] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#E6D8C8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-1">
                Showroom Favourites
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[#1A1817]">
                Featured Across All Categories
              </h2>
            </div>
            <p className="text-xs text-[#7A6358] hidden sm:block">
              1-Click WhatsApp Enquiry for sizing and availability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 p-6 sm:p-8 bg-[#FAF6F0] rounded-2xl border border-[#E6D8C8] text-center max-w-2xl mx-auto">
            <h3 className="font-display text-xl text-[#1A1817] mb-2">Looking for a specific fabric or custom cut?</h3>
            <p className="text-xs text-[#5A4A42] leading-relaxed mb-4">
              Our store in Malviya Nagar, Jaipur stocks extensive variations. Contact us on WhatsApp with your exact preference or roll requirement.
            </p>
            <a
              href="https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20looking%20for%20a%20specific%20product%20or%20fabric.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4197D] text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3 rounded-full hover:bg-[#B31468] transition-colors"
            >
              Ask Atelier on WhatsApp ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
