'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { buildProductWaLink } from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const waLink = buildProductWaLink(product.name, product.category);

  const categoryLabel =
    {
      suits: 'Suits',
      kurtis: 'Kurtis',
      fabrics: 'Fabrics',
      dupattas: 'Dupattas',
    }[product.category] || 'Collection';

  const secondaryImage =
    product.images && product.images.length > 1 ? product.images[1] : null;

  return (
    <article
      id={product.slug}
      className={`group relative bg-[#F3ECE2]/80 p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl border border-[#E6D8C8] hover:border-[#C5A059]/60 transition-all duration-400 hover:shadow-[0_12px_36px_rgba(41,37,34,0.06)] flex flex-col justify-between ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inner Frame */}
      <div className="bg-[#FAF6F0] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col flex-1">
        {/* Image Container Aspect 3:4 */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E6D8C8]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              secondaryImage && isHovered
                ? 'opacity-0 scale-105'
                : 'opacity-100 group-hover:scale-[1.03]'
            }`}
          />

          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt={`${product.name} — detail`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={`object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isHovered
                  ? 'opacity-100 scale-[1.02]'
                  : 'opacity-0 scale-100 pointer-events-none'
              }`}
            />
          )}

          {/* Discreet Tag */}
          <div className="absolute top-3 left-3 pointer-events-none">
            <span className="bg-[#FAF6F0]/90 backdrop-blur-md text-[#9E4736] text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-[#E6D8C8]/80 shadow-xs">
              {product.fabric ? product.fabric.split(' ')[0] : categoryLabel}
            </span>
          </div>
        </div>

        {/* Caption & Boutique Details */}
        <div className="p-4 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#9E4736] font-semibold mb-1">
              <span>{categoryLabel}</span>
              <span className="font-serif italic text-xs text-[#856020] lowercase tracking-normal">
                jaipur atelier
              </span>
            </div>

            <h3 className="font-display text-base sm:text-lg text-[#1A1817] leading-snug group-hover:text-[#D4197D] transition-colors duration-200 line-clamp-1">
              {product.name}
            </h3>

            {product.craft && (
              <p className="text-xs text-[#7A6358] mt-1 line-clamp-1 font-serif italic">
                {product.craft}
              </p>
            )}

            {product.description && (
              <p className="text-xs text-[#5A4A42] leading-relaxed mt-1.5 line-clamp-2 font-sans">
                {product.description}
              </p>
            )}
          </div>

          {/* Action: Enquire via WhatsApp — Safe for tight columns at 1024px & accessible touch targets */}
          <div className="pt-3 mt-3 border-t border-[#E6D8C8]/70 flex items-center justify-between gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1.5 text-xs font-semibold text-[#D4197D] hover:text-[#9E4736] transition-colors group/btn min-h-[38px] active:scale-98"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.5l5.773-1.516A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.044-1.394l-.361-.214-3.735.979 1-3.639-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              <span className="whitespace-nowrap">WhatsApp</span>
              <span className="text-[11px] transform group-hover/btn:translate-x-0.5 transition-transform">
                ↗
              </span>
            </a>

            {/* Hidden in 170px tight 1024px columns, shown on mobile, tablet & wide desktop */}
            <span className="text-[10px] text-[#7A6358] font-sans whitespace-nowrap hidden sm:inline lg:hidden xl:inline">
              Malviya Nagar
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
