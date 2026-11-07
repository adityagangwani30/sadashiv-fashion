import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory, categoryMeta } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';

export const metadata: Metadata = {
  title: 'Suits — Women\'s Suit Sets',
  description:
    'Browse women\'s suit sets at Sadashiv Fashions in Malviya Nagar, Jaipur. Enquire on WhatsApp for price, availability and details.',
  openGraph: {
    title: 'Suits | Sadashiv Fashions',
    description: 'Women\'s suit sets — Sadashiv Fashions, Jaipur.',
    images: [{ url: '/images/products/mannequin-left.webp' }],
  },
};

export default function SuitsPage() {
  const products = getProductsByCategory('suits');
  const meta = categoryMeta.suits;

  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* Header */}
      <section className="pt-14 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E6D8C8]">
        <nav className="text-xs text-[#9E4736] mb-4 flex items-center gap-2 font-medium" aria-label="Breadcrumb">
          <Link href="/collections" className="hover:text-[#1A1817] transition-colors">
            Collections
          </Link>
          <span className="text-[#C5A059]">/</span>
          <span className="text-[#1A1817]">Suits</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-2">
              {meta.tagline}
            </p>
            <h1 className="font-display font-light text-4xl sm:text-6xl text-[#1A1817] leading-tight">
              Women&apos;s Suits
            </h1>
            <p className="mt-3 text-sm text-[#5A4A42] leading-relaxed font-sans">
              {meta.description} Available for individual wardrobe tailoring and boutique wholesale distribution.
            </p>
          </div>

          {/* Sibling Category Switcher */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/collections/kurtis"
              className="bg-[#F3ECE2] hover:bg-[#E6D8C8] text-[#1A1817] text-xs uppercase tracking-[0.14em] px-4 py-2 rounded-full font-medium transition-colors"
            >
              Kurtis →
            </Link>
            <Link
              href="/collections/fabrics"
              className="bg-[#F3ECE2] hover:bg-[#E6D8C8] text-[#1A1817] text-xs uppercase tracking-[0.14em] px-4 py-2 rounded-full font-medium transition-colors"
            >
              Fabrics →
            </Link>
            <Link
              href="/collections/dupattas"
              className="bg-[#F3ECE2] hover:bg-[#E6D8C8] text-[#1A1817] text-xs uppercase tracking-[0.14em] px-4 py-2 rounded-full font-medium transition-colors"
            >
              Dupattas →
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 p-6 bg-[#F3ECE2]/80 rounded-2xl border border-[#E6D8C8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5A4A42]">
            Contact us on WhatsApp to confirm current size availability, fabric compositions, and Jaipur local delivery terms.
          </p>
          <a
            href="https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20enquiring%20about%20your%20Suits%20collection."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-[#D4197D] text-white text-xs uppercase tracking-[0.16em] font-semibold px-5 py-2.5 rounded-full hover:bg-[#B31468] transition-colors"
          >
            Enquire Suits on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
