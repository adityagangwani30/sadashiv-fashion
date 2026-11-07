'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  tag: 'store' | 'display' | 'textile';
  categoryLabel: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/images/store/store-window.webp',
    alt: 'Women\'s ethnic wear displayed in the Sadashiv Fashions store window — rani pink gown, suit and kurti',
    caption: 'Store Window Display — Festive Ensembles & Kurtis',
    tag: 'display',
    categoryLabel: 'Window Display',
  },
  {
    src: '/images/products/mannequin-left.webp',
    alt: 'Rani rose embroidered suit ensemble on display',
    caption: 'Festive Rani Rose Suit — Detailed Neckline Embroidery',
    tag: 'display',
    categoryLabel: 'Curated Ensemble',
  },
  {
    src: '/images/store/store-signage.webp',
    alt: 'Illuminated Sadashiv Fashions Hindi signage in Jaipur',
    caption: 'Evening Glow — Illuminated Hindi Store Signage',
    tag: 'store',
    categoryLabel: 'Showroom Facade',
  },
  {
    src: '/images/products/detail-embroidery.webp',
    alt: 'Close-up texture of delicate butta embroidery',
    caption: 'Textile Craft — Hand-Finished Butta Needlework',
    tag: 'textile',
    categoryLabel: 'Textile Detail',
  },
  {
    src: '/images/products/mannequin-center.webp',
    alt: 'Chanderi cotton suit set with woven buttas',
    caption: 'Chanderi Weave — Ivory & Pastel Ensemble',
    tag: 'display',
    categoryLabel: 'Curated Ensemble',
  },
  {
    src: '/images/products/detail-fabric-weave.webp',
    alt: 'Close-up weave of traditional Jaipur cotton fabric',
    caption: 'Authentic Fabric Weave — Pure Breathable Cotton',
    tag: 'textile',
    categoryLabel: 'Textile Detail',
  },
  {
    src: '/images/store/store-exterior.jpg',
    alt: 'Sadashiv Fashions store exterior in Malviya Nagar, Jaipur — daytime',
    caption: 'Malviya Nagar Showroom — Day View',
    tag: 'store',
    categoryLabel: 'Showroom Facade',
  },
  {
    src: '/images/products/mannequin-right.webp',
    alt: 'Classic Jaipur embroidered straight kurti',
    caption: 'Straight Kurti — Tonal Resham Embroidery',
    tag: 'display',
    categoryLabel: 'Curated Ensemble',
  },
];

const INSTAGRAM = 'https://www.instagram.com/sadashivfashionsjaipur/';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'store' | 'display' | 'textile'>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.tag === filter);

  useEffect(() => {
    if (!activeLightbox) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightbox]);

  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E6D8C8]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4197D]" />
            <span>— Visual Journal &amp; Lookbook —</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-6xl text-[#1A1817] leading-tight mb-4">
            The Visual Journal
          </h1>
          <p className="text-sm sm:text-base text-[#5A4A42] leading-relaxed font-sans">
            A photographic journal of our Malviya Nagar boutique, window displays, and handcrafted textile weaves. Click any image to examine in high resolution.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`text-xs uppercase tracking-[0.16em] px-4 py-2 rounded-full font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-[#1A1817] text-white'
                  : 'bg-[#F3ECE2] text-[#1A1817] hover:bg-[#E6D8C8]'
              }`}
            >
              All Photographs
            </button>
            <button
              onClick={() => setFilter('display')}
              className={`text-xs uppercase tracking-[0.16em] px-4 py-2 rounded-full font-medium transition-colors ${
                filter === 'display'
                  ? 'bg-[#1A1817] text-white'
                  : 'bg-[#F3ECE2] text-[#1A1817] hover:bg-[#E6D8C8]'
              }`}
            >
              Window Displays
            </button>
            <button
              onClick={() => setFilter('textile')}
              className={`text-xs uppercase tracking-[0.16em] px-4 py-2 rounded-full font-medium transition-colors ${
                filter === 'textile'
                  ? 'bg-[#1A1817] text-white'
                  : 'bg-[#F3ECE2] text-[#1A1817] hover:bg-[#E6D8C8]'
              }`}
            >
              Textiles &amp; Weaves
            </button>
            <button
              onClick={() => setFilter('store')}
              className={`text-xs uppercase tracking-[0.16em] px-4 py-2 rounded-full font-medium transition-colors ${
                filter === 'store'
                  ? 'bg-[#1A1817] text-white'
                  : 'bg-[#F3ECE2] text-[#1A1817] hover:bg-[#E6D8C8]'
              }`}
            >
              Store Facade
            </button>
          </div>
        </div>
      </section>

      {/* ── Editorial Masonry Grid ──────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              aria-label={`Open view for ${item.caption}`}
              onClick={() => setActiveLightbox(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveLightbox(item);
                }
              }}
              className="group cursor-pointer bg-[#F3ECE2]/80 p-2.5 rounded-2xl border border-[#E6D8C8] shadow-xs hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4197D]"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#E6D8C8]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#FAF6F0] bg-[#1A1817]/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/80 text-[#1A1817] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  ⤢
                </div>
              </div>
              <div className="pt-3 px-1">
                <p className="font-display text-base text-[#1A1817] group-hover:text-[#D4197D] transition-colors line-clamp-1">
                  {item.caption}
                </p>
                <p className="text-xs text-[#7A6358] mt-0.5">Sadashiv Fashions · Jaipur</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox Overlay ────────────────────────────────────────── */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Image Lightbox"
          className="fixed inset-0 z-50 bg-[#1A1817]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#FAF6F0] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1A1817] flex items-center justify-center shadow-md transition-colors"
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#1A1817]">
              <Image
                src={activeLightbox.src}
                alt={activeLightbox.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="p-6 bg-[#FAF6F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#E6D8C8]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#9E4736] font-semibold">
                  {activeLightbox.categoryLabel}
                </span>
                <h3 className="font-display text-xl text-[#1A1817] mt-0.5">
                  {activeLightbox.caption}
                </h3>
              </div>
              <a
                href="https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20enquiring%20about%20a%20piece%20featured%20in%20your%20Visual%20Journal."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4197D] text-white text-xs uppercase tracking-[0.16em] font-semibold px-5 py-2.5 rounded-full hover:bg-[#B31468] transition-colors whitespace-nowrap"
              >
                Enquire on WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Instagram Connection Strip ──────────────────────────────── */}
      <section className="bg-[#1A1817] py-16 px-4 sm:px-6 lg:px-8 text-center text-[#FAF6F0] border-t border-[#C5A059]/30">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#C5A059] font-bold mb-3">
          Daily Atelier Updates
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-[#FAF6F0] mb-4">
          Follow Our Journey on Instagram
        </h2>
        <p className="text-sm text-[#D4C4B8] mb-8 max-w-md mx-auto font-sans leading-relaxed">
          See new seasonal arrivals, fabric arrivals, and store updates on our official Instagram account.
        </p>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#FAF6F0] text-[#1A1817] hover:bg-white text-xs uppercase tracking-[0.16em] font-semibold px-7 py-3.5 rounded-full transition-colors shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          <span>@sadashivfashionsjaipur</span>
        </a>
      </section>
    </div>
  );
}
