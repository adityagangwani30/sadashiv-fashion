'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/shared/Logo';
import MobileNav from './MobileNav';

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/collections/suits', label: 'Suits' },
  { href: '/collections/kurtis', label: 'Kurtis' },
  { href: '/collections/fabrics', label: 'Fabrics' },
  { href: '/collections/dupattas', label: 'Dupattas' },
  { href: '/about', label: 'Our Story' },
  { href: '/gallery', label: 'Visual Journal' },
  { href: '/visit', label: 'Visit Atelier' },
];

const WA_CONCIERGE =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20interested%20in%20your%20curated%20collection.%20Please%20guide%20me.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Top Announcement Marquee Banner ────────────────────────── */}
      <div className="bg-[#1A1817] text-[#FAF6F0] py-2 px-4 overflow-hidden border-b border-[#C5A059]/25 text-[10px] sm:text-[11px] font-sans tracking-[0.24em] uppercase select-none relative z-50">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4197D]" />
            Sadashiv Fashions · Malviya Nagar, Jaipur
          </span>
          <span className="mx-6 text-[#C5A059]">✦</span>
          <span className="mx-6">Suits · Kurtis · Handloom Fabrics · Dupattas</span>
          <span className="mx-6 text-[#C5A059]">✦</span>
          <span className="mx-6">Wholesale &amp; Retail Enquiries Welcome</span>
          <span className="mx-6 text-[#C5A059]">✦</span>
          <span className="mx-6">Local Delivery Across Jaipur &amp; Nearby Areas</span>
          <span className="mx-6 text-[#C5A059]">✦</span>

          {/* Repeat for seamless loop */}
          <span className="mx-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4197D]" />
            Sadashiv Fashions · Malviya Nagar, Jaipur
          </span>
          <span className="mx-6 text-[#C5A059]">✦</span>
          <span className="mx-6">Suits · Kurtis · Handloom Fabrics · Dupattas</span>
          <span className="mx-6 text-[#C5A059]">✦</span>
          <span className="mx-6">Wholesale &amp; Retail Enquiries Welcome</span>
          <span className="mx-6 text-[#C5A059]">✦</span>
          <span className="mx-6">Local Delivery Across Jaipur &amp; Nearby Areas</span>
          <span className="mx-6 text-[#C5A059]">✦</span>
        </div>
      </div>

      {/* ── Main Sticky Navigation Bar ─────────────────────────────── */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(26,24,23,0.06)] border-b border-[#E6D8C8]'
            : 'bg-[#FAF6F0] border-b border-[#E6D8C8]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Brand Logo with Variants & Interactive Glow */}
            <div className="flex-shrink-0 py-2">
              {/* Desktop Full Logo */}
              <div className="hidden lg:block">
                <Logo variant="full" theme="magenta" size="lg" asLink priority />
              </div>
              {/* Tablet & Mobile Balanced Compact Logo */}
              <div className="lg:hidden">
                <Logo variant="compact" theme="magenta" size="md" asLink priority />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href + '/'));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-200 py-1 link-underline ${
                      isActive
                        ? 'text-[#D4197D] font-semibold'
                        : 'text-[#292522] hover:text-[#D4197D]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4197D]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Concierge CTA & Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={WA_CONCIERGE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-[#1A1817] hover:bg-[#D4197D] text-[#FAF6F0] rounded-full pl-4 pr-2 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-98"
                aria-label="Direct WhatsApp Concierge"
              >
                <span>Concierge</span>
                <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                </span>
              </a>

              <Link
                href="/visit"
                className="inline-flex items-center gap-1.5 border border-[#1A1817]/25 hover:border-[#1A1817] text-[#1A1817] rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-200"
              >
                Malviya Nagar
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={WA_CONCIERGE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#D4197D] text-white shadow-sm md:hidden"
                aria-label="Quick WhatsApp Consultation"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.5l5.773-1.516A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.044-1.394l-.361-.214-3.735.979 1-3.639-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
              </a>

              <button
                className="p-2.5 rounded-full text-[#1A1817] hover:bg-[#E6D8C8]/40 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Navigation Drawer ───────────────────────────────── */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
        waLink={WA_CONCIERGE}
      />
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
