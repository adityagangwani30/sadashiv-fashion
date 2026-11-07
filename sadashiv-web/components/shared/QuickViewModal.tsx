'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { buildProductWaLink } from './WhatsAppButton';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  baseUrl?: string;
}

export default function QuickViewModal({
  product,
  onClose,
  baseUrl = 'https://sadashivfashions.in',
}: QuickViewModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const activeImage = images[activeImageIndex] || product.image;
  const productUrl = `${baseUrl}/collections/${product.category}#${product.slug}`;
  const waLink = buildProductWaLink(product.name, product.category, productUrl);
  const waWholesaleLink = `https://wa.me/916376648869?text=${encodeURIComponent(
    `Hello Sadashiv Fashions,\n\nI am enquiring about wholesale/bulk orders for:\nProduct: ${product.name}\nCategory: ${product.category}\n\nPlease share wholesale pricing and minimum order quantities.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1817]/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-[#FAF6F0] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E6D8C8] overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1A1817] flex items-center justify-center shadow-md transition-all duration-200"
          aria-label="Close dialog"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: Gallery Column */}
        <div className="md:w-1/2 p-6 sm:p-8 bg-[#F3ECE2]/60 flex flex-col justify-between">
          <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#E6D8C8] shadow-inner">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#D4197D] scale-102 shadow-sm'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details Column */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#9E4736] bg-[#F3ECE2] px-2.5 py-1 rounded-full">
                {product.category}
              </span>
              {product.badge && (
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4197D] bg-[#D4197D]/10 px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            <h2 className="font-display text-2xl sm:text-3xl text-[#1A1817] leading-tight mb-3">
              {product.name}
            </h2>

            {product.fabric && (
              <p className="text-xs text-[#7A6358] mb-1">
                <span className="font-medium text-[#1A1817]">Fabric:</span> {product.fabric}
              </p>
            )}

            {product.craft && (
              <p className="text-xs text-[#7A6358] mb-4">
                <span className="font-medium text-[#1A1817]">Craft &amp; Weave:</span> {product.craft}
              </p>
            )}

            <p className="text-sm text-[#4A3E39] leading-relaxed mb-6 font-sans">
              {product.description}
            </p>

            {product.details && product.details.length > 0 && (
              <div className="mb-6 pt-4 border-t border-[#E6D8C8]">
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#1A1817] mb-2.5">
                  Specifications &amp; Availability
                </h4>
                <ul className="space-y-1.5 text-xs text-[#5A4A42]">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4197D] mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-6 border-t border-[#E6D8C8]">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#D4197D] text-white py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#B31468] transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.5l5.773-1.516A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.044-1.394l-.361-.214-3.735.979 1-3.639-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Enquire on WhatsApp
            </a>

            <a
              href={waWholesaleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 border border-[#1A1817]/20 text-[#1A1817] py-2.5 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#1A1817] hover:text-[#FAF6F0] transition-colors"
            >
              Wholesale / Bulk Enquiry
            </a>

            <p className="text-[11px] text-center text-[#7A6358]">
              Local delivery in Jaipur &amp; nearby areas · WhatsApp confirmation for pricing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
