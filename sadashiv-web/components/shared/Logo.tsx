'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type LogoVariant = 'full' | 'compact' | 'trishul';
export type LogoTheme = 'magenta' | 'white' | 'gold' | 'charcoal';
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'custom';

export interface LogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  size?: LogoSize;
  animated?: boolean;
  showTagline?: boolean;
  tagline?: string;
  asLink?: boolean;
  priority?: boolean;
  className?: string;
  customHeight?: number;
}

const ASSET_MAP: Record<LogoVariant, Record<LogoTheme, string>> = {
  full: {
    magenta: '/brand/variants/logo-full.png',
    white: '/brand/variants/logo-full-white.png',
    gold: '/brand/variants/logo-full-gold.png',
    charcoal: '/brand/variants/logo-full-charcoal.png',
  },
  compact: {
    magenta: '/brand/variants/logo-compact.png',
    white: '/brand/variants/logo-compact-white.png',
    gold: '/brand/variants/logo-compact-gold.png',
    charcoal: '/brand/variants/logo-full-charcoal.png',
  },
  trishul: {
    magenta: '/brand/variants/logo-trishul.png',
    white: '/brand/variants/logo-trishul-white.png',
    gold: '/brand/variants/logo-trishul-gold.png',
    charcoal: '/brand/variants/logo-trishul-charcoal.png',
  },
};

// Intrinsic aspect ratios of the cropped variants
const ASPECT_RATIOS: Record<LogoVariant, number> = {
  full: 1572 / 945,    // ~1.66
  compact: 1475 / 430, // ~3.43
  trishul: 370 / 945,  // ~0.39
};

const HEIGHT_PRESETS: Record<LogoVariant, Record<Exclude<LogoSize, 'custom'>, number>> = {
  full: {
    sm: 36,
    md: 48,
    lg: 64,
    xl: 84,
    hero: 110,
  },
  compact: {
    sm: 28,
    md: 38,
    lg: 48,
    xl: 60,
    hero: 76,
  },
  trishul: {
    sm: 32,
    md: 44,
    lg: 60,
    xl: 80,
    hero: 104,
  },
};

export default function Logo({
  variant = 'full',
  theme = 'magenta',
  size = 'md',
  animated = true,
  showTagline = false,
  tagline = 'JAIPUR · BOUTIQUE & TEXTILES',
  asLink = false,
  priority = false,
  className = '',
  customHeight,
}: LogoProps) {
  const assetSrc = ASSET_MAP[variant][theme] || ASSET_MAP[variant].magenta;
  const aspectRatio = ASPECT_RATIOS[variant];
  const height = customHeight ?? (size === 'custom' ? 48 : HEIGHT_PRESETS[variant][size]);
  const width = Math.round(height * aspectRatio);

  const content = (
    <div
      className={`group/logo relative inline-flex flex-col items-center select-none ${className}`}
      style={{ minHeight: height }}
    >
      <div className="relative overflow-visible flex items-center justify-center">
        {/* Ambient glow effect for animated logo */}
        {animated && theme === 'magenta' && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#D4197D]/15 blur-xl rounded-full scale-110 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 pointer-events-none"
          />
        )}
        {animated && theme === 'gold' && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#C5A059]/20 blur-xl rounded-full scale-110 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 pointer-events-none"
          />
        )}

        {/* The Core Image Asset */}
        <div
          className={`relative transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            animated ? 'group-hover/logo:scale-[1.03]' : ''
          }`}
          style={{ width, height }}
        >
          <Image
            src={assetSrc}
            alt="Sadashiv Fashions — Jaipur"
            width={width}
            height={height}
            priority={priority}
            className="w-full h-full object-contain filter drop-shadow-sm"
          />

          {/* Shimmer light reflection sweep on hover */}
          {animated && (
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300"
            >
              <div
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover/logo:animate-[shimmer_1.2s_ease-in-out_infinite]"
              />
            </div>
          )}
        </div>
      </div>

      {/* Optional luxury typography subtext / tagline */}
      {showTagline && (
        <span
          className={`mt-1.5 text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-medium transition-colors duration-300 ${
            theme === 'white'
              ? 'text-[#E6D8C8]/80 group-hover/logo:text-[#FAF6F0]'
              : theme === 'gold'
              ? 'text-[#C5A059]'
              : 'text-[#9E4736] group-hover/logo:text-[#D4197D]'
          }`}
        >
          {tagline}
        </span>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        aria-label="Sadashiv Fashions — Home"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4197D]/50 rounded-sm"
      >
        {content}
      </Link>
    );
  }

  return content;
}
