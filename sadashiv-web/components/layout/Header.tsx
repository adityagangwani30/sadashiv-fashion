'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/shared/Logo';
import MobileNav from './MobileNav';

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'Our Story' },
  { href: '/gallery', label: 'Visual Journal' },
  { href: '/visit', label: 'Visit Atelier' },
];

const TEL_LINK = 'tel:+916376648869';
const MAPS_LINK = 'https://maps.google.com/?q=Sadashiv+Fashions+Malviya+Nagar+Jaipur';
const WA_CONCIERGE =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20would%20like%20to%20enquire%20about%20your%20boutique%20collection%20in%20Malviya%20Nagar%2C%20Jaipur.';

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
      {/* ── Top Announcement Strip with Direct Contact ───────────────── */}
      <div className="bg-[#1A1817] text-[#FAF6F0] py-2 px-3 sm:px-4 border-b border-[#C5A059]/25 text-[10px] sm:text-[11px] font-sans tracking-[0.14em] sm:tracking-[0.22em] uppercase select-none relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4197D] flex-shrink-0" />
            <span className="hidden sm:inline">Physical Fashion Boutique ·</span>
            <span className="truncate">Malviya Nagar, Jaipur</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[10px] flex-shrink-0">
            <a
              href={TEL_LINK}
              className="text-[#FAF6F0] hover:text-[#C5A059] transition-colors flex items-center gap-1.5 py-0.5"
              aria-label="Call Sadashiv Fashions"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="hidden xs:inline">Call: </span>
              <span>+91 63766 48869</span>
            </a>
            <span className="text-[#C5A059] hidden md:inline">✦</span>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline hover:text-[#C5A059] transition-colors py-0.5"
            >
              Get Directions ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Sticky Navigation Bar ─────────────────────────────── */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(26,24,23,0.06)] border-b border-[#E6D8C8]'
            : 'bg-[#FAF6F0] border-b border-[#E6D8C8]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            {/* Brand Logo with Variants & Interactive Glow */}
            <div className="flex-shrink-0 py-1.5 sm:py-2">
              {/* Desktop Full Logo */}
              <div className="hidden lg:block">
                <Logo variant="full" theme="magenta" size="lg" asLink priority />
              </div>
              {/* Tablet Compact Logo (Prominent 48px height) */}
              <div className="hidden md:block lg:hidden">
                <Logo variant="compact" theme="magenta" size="lg" asLink priority />
              </div>
              {/* Mobile Compact Logo (Comfortable 38px height) */}
              <div className="md:hidden">
                <Logo variant="compact" theme="magenta" size="md" asLink priority />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[11px] uppercase tracking-[0.24em] font-medium transition-colors duration-200 py-1 link-underline ${
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

            {/* Desktop Action Buttons: Call Us, WhatsApp, Get Directions */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-1.5 border border-[#1A1817]/20 hover:border-[#1A1817] text-[#1A1817] hover:bg-[#1A1817] hover:text-[#FAF6F0] rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-200"
                aria-label="Call Sadashiv Fashions Showroom"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Call Us</span>
              </a>

              <a
                href={WA_CONCIERGE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#D4197D] hover:bg-[#B31468] text-[#FAF6F0] rounded-full pl-3.5 pr-4 py-2 text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md active:scale-98"
                aria-label="Direct WhatsApp Enquiry"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>WhatsApp</span>
              </a>

              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#1A1817]/20 hover:border-[#1A1817] text-[#1A1817] rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-200"
                aria-label="Get Directions to Malviya Nagar Showroom"
              >
                <span>Directions</span>
                <span>↗</span>
              </a>
            </div>

            {/* Mobile Actions: Accessible 44px Touch Targets */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              <a
                href={TEL_LINK}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#1A1817]/20 text-[#1A1817] hover:bg-[#1A1817]/5 active:scale-95 transition-all md:hidden"
                aria-label="Call Boutique"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>

              <a
                href={WA_CONCIERGE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#D4197D] text-white shadow-sm active:scale-95 transition-all md:hidden"
                aria-label="Quick WhatsApp Consultation"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.5l5.773-1.516A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.044-1.394l-.361-.214-3.735.979 1-3.639-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
              </a>

              <button
                className="w-11 h-11 flex items-center justify-center rounded-full text-[#1A1817] hover:bg-[#E6D8C8]/40 active:scale-95 transition-colors"
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
        telLink={TEL_LINK}
        mapsLink={MAPS_LINK}
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
