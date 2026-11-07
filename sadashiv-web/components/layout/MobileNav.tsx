'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  pathname: string;
  waLink: string;
}

export default function MobileNav({ isOpen, onClose, links, pathname, waLink }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[#1A1817]/70 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-84 max-w-[90vw] z-50 bg-[#FAF6F0] shadow-2xl transform transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] xl:hidden flex flex-col justify-between border-l border-[#E6D8C8] overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Top Header */}
        <div className="p-6 border-b border-[#E6D8C8] flex items-center justify-between">
          <Logo variant="compact" theme="magenta" size="sm" />
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#1A1817] hover:bg-[#E6D8C8]/50 transition-colors"
            aria-label="Close Menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 flex-1 flex flex-col gap-1" aria-label="Mobile Navigation">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#9E4736] font-semibold mb-3">
            Atelier Directory
          </p>
          {links.map((link, idx) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href + '/'));

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`py-3 px-3 rounded-lg text-base tracking-wide flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-[#F3ECE2] text-[#D4197D] font-medium'
                    : 'text-[#292522] hover:bg-[#F3ECE2]/50 hover:text-[#D4197D]'
                }`}
              >
                <span>{link.label}</span>
                <span className="font-serif italic text-xs text-[#C5A059]">0{idx + 1}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Contact & Atelier Card */}
        <div className="p-6 bg-[#F3ECE2]/80 border-t border-[#E6D8C8] space-y-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#D4197D] text-white rounded-full text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#B31468] transition-colors shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.5l5.773-1.516A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.044-1.394l-.361-.214-3.735.979 1-3.639-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            WhatsApp Concierge
          </a>

          <div className="text-center text-xs text-[#7A6358] space-y-1">
            <p className="font-medium text-[#1A1817]">2/72, Krishna Nand Marg, Malviya Nagar</p>
            <p>Jaipur — 302017, Rajasthan</p>
            <p className="text-[11px] text-[#9E4736] pt-1">Wholesale &amp; Retail Inquiries</p>
          </div>
        </div>
      </div>
    </>
  );
}
