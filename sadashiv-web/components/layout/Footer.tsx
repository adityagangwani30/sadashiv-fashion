import Link from 'next/link';
import Logo from '@/components/shared/Logo';

const WA_GENERAL =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20interested%20in%20your%20collection.%20Please%20share%20details.';
const WA_WHOLESALE =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20enquiring%20about%20a%20wholesale%20purchase.%20Please%20share%20your%20catalogue%2C%20pricing%20and%20terms.';
const INSTAGRAM = 'https://www.instagram.com/sadashivfashionsjaipur/';

export default function Footer() {
  return (
    <footer className="bg-[#1A1817] text-[#FAF6F0] border-t border-[#C5A059]/30 relative overflow-hidden">
      {/* Subtle Jaipur Pattern Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4197D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Column (Span 2 on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="full" theme="white" size="lg" asLink priority />
            <p className="text-sm text-[#D4C4B8] leading-relaxed max-w-sm font-sans">
              An exclusive boutique in Malviya Nagar, Jaipur, dedicated to fine women&apos;s ethnic wear, curated suits, graceful kurtis, heirloom dupattas, and pure handloom fabrics.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#C5A059] border border-[#C5A059]/40 rounded-full px-3 py-1">
                Retail &amp; Wholesale
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#D4C4B8] border border-white/15 rounded-full px-3 py-1">
                Jaipur Atelier
              </span>
            </div>
          </div>

          {/* Curations Column */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold mb-4">
              Curations
            </p>
            <nav className="flex flex-col space-y-1.5 text-sm" aria-label="Collections Navigation">
              <Link href="/collections" className="text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1 inline-block">
                All Collections
              </Link>
              <Link href="/collections#suits" className="text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1 inline-block">
                Tailored Suits
              </Link>
              <Link href="/collections#kurtis" className="text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1 inline-block">
                Boutique Kurtis
              </Link>
              <Link href="/collections#fabrics" className="text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1 inline-block">
                Dress Materials &amp; Fabrics
              </Link>
              <Link href="/collections#dupattas" className="text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1 inline-block">
                Hand-Finished Dupattas
              </Link>
            </nav>
          </div>

          {/* House & Story Column */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold mb-4">
              The Atelier
            </p>
            <nav className="flex flex-col space-y-1.5 text-sm" aria-label="Atelier Navigation">
              <Link href="/about" className="text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1 inline-block">
                Our Story &amp; People
              </Link>
              <Link href="/gallery" className="text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1 inline-block">
                Visual Lookbook
              </Link>
              <Link href="/visit" className="text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1 inline-block">
                Visit Malviya Nagar
              </Link>
              <a
                href={WA_WHOLESALE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4C4B8] hover:text-[#D4197D] transition-colors py-1 inline-flex items-center gap-1.5"
              >
                <span>Wholesale Desk</span>
                <span className="text-[10px]">↗</span>
              </a>
            </nav>
          </div>

          {/* Contact & Location Column */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold mb-4">
              Showroom
            </p>
            <address className="not-italic text-sm text-[#D4C4B8] leading-relaxed mb-4">
              2/72, Krishna Nand Marg,<br />
              near Govt. Girls Sr. Sec. School,<br />
              Malviya Nagar, Jaipur — 302017,<br />
              Rajasthan, India
            </address>

            <div className="space-y-2 pt-1 text-sm">
              <div>
                <a
                  href="tel:+916376648869"
                  className="inline-flex items-center gap-2 text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>Call: +91 63766 48869</span>
                </a>
              </div>

              <div>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4C4B8] hover:text-[#FAF6F0] transition-colors py-1"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>

              <div>
                <a
                  href="https://maps.google.com/?q=Sadashiv+Fashions+Malviya+Nagar+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D4C4B8] hover:text-[#C5A059] transition-colors py-1"
                >
                  <span>Google Maps Directions</span>
                  <span>↗</span>
                </a>
              </div>

              <div>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4C4B8] hover:text-[#D4197D] transition-colors py-1"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span>@sadashivfashionsjaipur</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar — Fully Wrap-Safe across 360px–1280px+ */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A7C73] text-center md:text-left">
          <p className="order-2 md:order-1">
            © 2026 Sadashiv Fashions · Malviya Nagar, Jaipur, Rajasthan
          </p>
          <div className="order-1 md:order-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs">
            <span>Local Delivery in Jaipur</span>
            <span className="text-[#C5A059]/60">•</span>
            <span>Wholesale &amp; Retail</span>
            <span className="text-[#C5A059]/60">•</span>
            <span className="font-serif italic text-[#C5A059]">Jaipur Pink City Heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
