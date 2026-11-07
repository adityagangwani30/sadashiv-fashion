import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Visit Us — Showroom Location & Contact',
  description:
    'Visit Sadashiv Fashions at Malviya Nagar, Jaipur. Enquire on WhatsApp for showroom directions, timings and local delivery in Jaipur and nearby areas.',
  openGraph: {
    title: 'Visit Us | Sadashiv Fashions',
    description: 'Contact and visit Sadashiv Fashions in Malviya Nagar, Jaipur.',
    images: [{ url: '/images/store/store-exterior.jpg' }],
  },
};

const WA_GENERAL =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20interested%20in%20your%20collection.%20Please%20share%20details.';
const WA_DIRECTIONS =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20would%20like%20to%20visit%20the%20store.%20Could%20you%20share%20the%20exact%20location%20and%20today%27s%20timings%3F';
const WA_WHOLESALE =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20enquiring%20about%20a%20wholesale%20purchase.%20Please%20share%20your%20catalogue%2C%20pricing%20and%20terms.';
const INSTAGRAM = 'https://www.instagram.com/sadashivfashionsjaipur/';
const MAPS_URL = 'https://maps.google.com/?q=Sadashiv+Fashions+Malviya+Nagar+Jaipur';

export default function VisitPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E6D8C8]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4197D]" />
            <span>— Showroom &amp; Contact Concierge —</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-6xl text-[#1A1817] leading-tight mb-4">
            Visit the Atelier
          </h1>
          <p className="text-sm sm:text-base text-[#5A4A42] leading-relaxed font-sans">
            We are located in Malviya Nagar, Jaipur. Visit our boutique to inspect our fabrics, suits, and kurtis in person, or connect directly through WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Main Details Grid ───────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Contact & Location Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Showroom Address Card */}
            <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#E6D8C8] shadow-xs">
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-bold block mb-3">
                Showroom Address
              </span>
              <address className="not-italic text-base sm:text-lg text-[#1A1817] leading-relaxed font-display mb-5">
                2/72, Krishna Nand Marg,<br />
                near Government Girls Senior Secondary School,<br />
                Malviya Nagar, Jaipur — 302017,<br />
                Rajasthan, India
              </address>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1A1817] hover:bg-[#D4197D] text-white text-xs uppercase tracking-[0.16em] font-semibold px-5 py-3.5 rounded-full transition-colors shadow-sm"
                >
                  <span>Get Directions on Google Maps</span>
                  <span>↗</span>
                </a>
                <a
                  href="tel:+916376648869"
                  className="inline-flex items-center gap-2 bg-[#FAF6F0] hover:bg-[#E6D8C8] text-[#1A1817] border border-[#1A1817]/25 text-xs uppercase tracking-[0.16em] font-semibold px-5 py-3.5 rounded-full transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>Call: +91 63766 48869</span>
                </a>
                <a
                  href={WA_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#1A1817]/30 text-[#1A1817] text-xs uppercase tracking-[0.16em] font-semibold px-5 py-3.5 rounded-full hover:bg-[#1A1817] hover:text-white transition-colors"
                >
                  <span>WhatsApp Directions</span>
                </a>
              </div>
              <p className="mt-4 text-[11px] text-[#7A6358]">
                * Exact Google Maps destination to be confirmed by the owners.
              </p>
            </div>

            {/* Timings & Delivery */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Timings */}
              <div className="bg-[#F3ECE2]/80 p-6 rounded-2xl border border-[#E6D8C8]">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E4736] font-bold block mb-2">
                  Operating Hours
                </span>
                <p className="text-sm font-medium text-[#1A1817] mb-1">
                  10:30 AM – 9:00 PM (approx.)
                </p>
                <p className="text-xs text-[#5A4A42] leading-relaxed mb-3">
                  Please message us on WhatsApp before visiting to confirm current daily hours.
                </p>
                <a
                  href={WA_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#D4197D] hover:underline"
                >
                  Check Today&apos;s Hours →
                </a>
              </div>

              {/* Local Delivery */}
              <div className="bg-[#F3ECE2]/80 p-6 rounded-2xl border border-[#E6D8C8]">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E4736] font-bold block mb-2">
                  Local Jaipur Delivery
                </span>
                <p className="text-sm font-medium text-[#1A1817] mb-1">
                  Jaipur &amp; Nearby Areas
                </p>
                <p className="text-xs text-[#5A4A42] leading-relaxed mb-3">
                  Local delivery is serviced across Jaipur. Exact serviceability and charges are confirmed on WhatsApp.
                </p>
                <span className="text-[11px] font-medium text-[#7A6358]">
                  WhatsApp dispatch confirmation
                </span>
              </div>
            </div>

            {/* Direct Digital Channels */}
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#E6D8C8] space-y-3">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E4736] font-bold block mb-1">
                Direct Channels
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1A1817] hover:text-[#D4197D] font-medium"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                  <span>WhatsApp: +91 63766 48869</span>
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1A1817] hover:text-[#D4197D]"
                >
                  <span>Instagram: @sadashivfashionsjaipur</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Concierge Action Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A1817] text-[#FAF6F0] p-8 sm:p-10 rounded-3xl border border-[#C5A059]/40 shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4197D]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#C5A059]">
                    Atelier Concierge
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-[#FAF6F0] mb-4 leading-tight">
                  Connect Directly on WhatsApp
                </h3>

                <p className="text-sm text-[#D4C4B8] leading-relaxed mb-8 font-sans">
                  Whether you are planning a showroom visit, inquiring about a particular suit set, or placing a wholesale order for fabric bolts, our team responds directly on WhatsApp.
                </p>

                <div className="space-y-3">
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between bg-[#D4197D] hover:bg-[#B31468] text-white py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-colors shadow-sm"
                  >
                    <span>Retail Enquiry</span>
                    <span>↗</span>
                  </a>

                  <a
                    href={WA_WHOLESALE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between border border-white/20 hover:border-white text-white py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-colors"
                  >
                    <span>Wholesale &amp; Bulk Enquiries</span>
                    <span>✦</span>
                  </a>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/10 text-xs text-[#8A7C73]">
                <p>Sadashiv Fashions · Malviya Nagar, Jaipur, Rajasthan</p>
                <p className="mt-1">Phone / WhatsApp: +91 63766 48869</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Showroom Visual Strip ───────────────────────────────────── */}
      <section className="relative h-64 sm:h-80 overflow-hidden bg-[#E6D8C8] border-t border-[#E6D8C8]">
        <Image
          src="/images/store/store-signage.webp"
          alt="Sadashiv Fashions store in Jaipur"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1A1817]/30" />
      </section>
    </div>
  );
}
