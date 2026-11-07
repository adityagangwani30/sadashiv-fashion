import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProductsByCategory, categoryMeta } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';

export const metadata: Metadata = {
  title: 'Boutique Collections — Suits, Kurtis, Fabrics & Dupattas',
  description:
    'Explore the curated collections at Sadashiv Fashions in Malviya Nagar, Jaipur. Tailored women’s suits, breathable kurtis, handloom fabrics and heirloom dupattas. Direct WhatsApp and in-store inquiries.',
  openGraph: {
    title: 'Boutique Collections | Sadashiv Fashions Jaipur',
    description:
      'Curated women’s ethnic wear and pure textiles at Sadashiv Fashions, Malviya Nagar, Jaipur.',
    images: [{ url: '/images/products/mannequin-left.webp' }],
  },
};

const TEL_LINK = 'tel:+916376648869';
const MAPS_LINK = 'https://maps.google.com/?q=Sadashiv+Fashions+Malviya+Nagar+Jaipur';
const WA_BASE = 'https://wa.me/916376648869';

const sections = [
  { id: 'suits', label: 'Suits', num: '01' },
  { id: 'kurtis', label: 'Kurtis', num: '02' },
  { id: 'fabrics', label: 'Fabrics', num: '03' },
  { id: 'dupattas', label: 'Dupattas', num: '04' },
] as const;

export default function CollectionsPage() {
  const suits = getProductsByCategory('suits');
  const kurtis = getProductsByCategory('kurtis');
  const fabrics = getProductsByCategory('fabrics');
  const dupattas = getProductsByCategory('dupattas');

  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E6D8C8]">
        <div className="max-w-3xl">
          <div className="inline-flex max-w-full items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.26em] text-[#9E4736] font-semibold mb-4 overflow-hidden truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4197D] flex-shrink-0" />
            <span className="truncate">— Showroom Collections · Malviya Nagar, Jaipur —</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-6xl text-[#1A1817] leading-tight mb-4">
            The Curated Collections
          </h1>
          <p className="text-sm sm:text-base text-[#5A4A42] leading-relaxed font-sans">
            Sadashiv Fashions presents four core textile traditions of the Pink City. From impeccably tailored women&apos;s suit sets and breathable cotton kurtis to unstitched dress materials and hand-finished dupattas, each piece is selected for timeless grace and authentic craft.
          </p>

          {/* Quick Jump Navigation — Scroll-friendly & accessible touch targets */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-8">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#7A6358] font-semibold mr-1 w-full sm:w-auto mb-1 sm:mb-0">
              Explore:
            </span>
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="min-h-[40px] inline-flex items-center gap-1.5 bg-[#F3ECE2] hover:bg-[#1A1817] text-[#1A1817] hover:text-[#FAF6F0] text-xs uppercase tracking-[0.16em] px-4 py-2.5 rounded-full font-medium transition-all duration-200 border border-[#E6D8C8] active:scale-98"
              >
                <span className="font-serif italic text-xs text-[#856020]">{sec.num}</span>
                <span>{sec.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 1. Women's Suits Gallery Section ────────────────────────── */}
      <section id="suits" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6D8C8]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-2">
              <span className="font-serif italic text-sm text-[#856020]">I ·</span>
              <span>Tailored Grace</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-[#1A1817]">
              Women&apos;s Tailored Suits
            </h2>
            <p className="text-sm text-[#5A4A42] leading-relaxed mt-2 font-sans">
              Complete suit ensembles inspired by Jaipur&apos;s regal heritage. Featuring straight-cut silhouettes, angrakha overlaps, and fine cotton-silk blends adorned with delicate resham and zari necklines.
            </p>
          </div>

          <a
            href={`${WA_BASE}?text=${encodeURIComponent(
              'Hello Sadashiv Fashions, I would like to enquire about your Women’s Suits collection in Malviya Nagar.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#D4197D] hover:text-[#1A1817] transition-colors min-h-[40px] py-1.5"
          >
            <span>Enquire on WhatsApp</span>
            <span>↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {suits.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* ── 2. Curated Kurtis Gallery Section ────────────────────────── */}
      <section id="kurtis" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28 border-t border-[#E6D8C8]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6D8C8]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-2">
              <span className="font-serif italic text-sm text-[#856020]">II ·</span>
              <span>Boutique Silhouettes</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-[#1A1817]">
              Curated Kurtis
            </h2>
            <p className="text-sm text-[#5A4A42] leading-relaxed mt-2 font-sans">
              Breathable mulmul, slub cotton, and chanderi kurtis designed for day-long ease and festive charm. Finished with delicate hand-block floral motifs, resham embroidery, and clean piping.
            </p>
          </div>

          <a
            href={`${WA_BASE}?text=${encodeURIComponent(
              'Hello Sadashiv Fashions, I would like to enquire about your Kurti designs and current sizes.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#D4197D] hover:text-[#1A1817] transition-colors min-h-[40px] py-1.5"
          >
            <span>Enquire on WhatsApp</span>
            <span>↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {kurtis.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* ── 3. Handloom Textiles & Fabrics Gallery Section ───────────── */}
      <section id="fabrics" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28 border-t border-[#E6D8C8]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6D8C8]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-2">
              <span className="font-serif italic text-sm text-[#856020]">III ·</span>
              <span>Textiles &amp; Dress Materials</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-[#1A1817]">
              Fabrics &amp; Weaves
            </h2>
            <p className="text-sm text-[#5A4A42] leading-relaxed mt-2 font-sans">
              Unstitched fabric bolts across Pure Chanderi, Viscose Chiffon, Handwoven Cotton Ikat, Poly Santoon, and Art Silk. Available cut-to-length for bespoke tailoring and in full rolls for boutiques and designers.
            </p>
          </div>

          <a
            href={`${WA_BASE}?text=${encodeURIComponent(
              'Hello Sadashiv Fashions, I am interested in purchasing fabrics (retail / wholesale rolls). Please share current weave options.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#D4197D] hover:text-[#1A1817] transition-colors min-h-[40px] py-1.5"
          >
            <span>Wholesale &amp; Retail Enquiry</span>
            <span>↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {fabrics.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* ── 4. Heirloom Dupattas Gallery Section ────────────────────── */}
      <section id="dupattas" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28 border-t border-[#E6D8C8]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6D8C8]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-2">
              <span className="font-serif italic text-sm text-[#856020]">IV ·</span>
              <span>The Crowning Drape</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-[#1A1817]">
              Heirloom Dupattas
            </h2>
            <p className="text-sm text-[#5A4A42] leading-relaxed mt-2 font-sans">
              Hand-finished Kota Doria, Zari Chanderi, and crushed chiffon dupattas with delicate gota-patti and resham borders. Designed to bring festive grandeur to any traditional attire.
            </p>
          </div>

          <a
            href={`${WA_BASE}?text=${encodeURIComponent(
              'Hello Sadashiv Fashions, I am looking for dupattas to match my ensemble. Please assist.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#D4197D] hover:text-[#1A1817] transition-colors min-h-[40px] py-1.5"
          >
            <span>Enquire on WhatsApp</span>
            <span>↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {dupattas.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* ── Showroom Invitation & Primary Actions Plate ──────────────── */}
      <section className="bg-[#FCFAF6] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E6D8C8]">
        <div className="max-w-4xl mx-auto text-center bg-[#FAF6F0] p-5 sm:p-10 lg:p-14 rounded-3xl border border-[#E6D8C8] shadow-xs">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#9E4736] font-semibold mb-3 block">
            Visit Our Physical Showroom
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1A1817] leading-tight mb-4">
            Experience the Fabrics in Person
          </h2>
          <p className="text-sm text-[#5A4A42] leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Every textile has a drape, texture, and sheen that photograph cannot fully capture. We warmly welcome you to our Malviya Nagar boutique in Jaipur to explore hundreds of unstitched cuts, tailored suits, and bespoke fabrics.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3">
            <a
              href={`${WA_BASE}?text=${encodeURIComponent(
                'Hello Sadashiv Fashions, I am interested in visiting your Malviya Nagar showroom or enquiring about your collection.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-2.5 bg-[#D4197D] hover:bg-[#B31468] text-white py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-colors shadow-sm active:scale-98"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>WhatsApp Enquiry</span>
            </a>

            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center">
              <a
                href={TEL_LINK}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#1A1817] hover:bg-[#292522] text-[#FAF6F0] py-3.5 px-5 sm:px-6 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Call Us</span>
              </a>

              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-1.5 border border-[#1A1817]/25 hover:border-[#1A1817] text-[#1A1817] py-3.5 px-5 sm:px-6 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-colors"
              >
                <span>Directions ↗</span>
              </a>
            </div>

            <Link
              href="/gallery"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 border border-[#1A1817]/25 hover:border-[#1A1817] text-[#1A1817] py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <span>Visual Journal</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E6D8C8] text-xs text-[#7A6358] space-y-1">
            <p className="font-medium text-[#1A1817]">2/72, Krishna Nand Marg, near Government Girls Senior Secondary School</p>
            <p>Malviya Nagar, Jaipur — 302017, Rajasthan</p>
          </div>
        </div>
      </section>
    </div>
  );
}
