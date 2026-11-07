import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';

export const metadata: Metadata = {
  title: 'About — The People Behind Sadashiv Fashions',
  description:
    'Meet Suresh Gangwani and Kashish Gangwani, the people behind Sadashiv Fashions — a Jaipur-based fashion and textile store in Malviya Nagar.',
  openGraph: {
    title: 'About | Sadashiv Fashions',
    description: 'Meet the people behind Sadashiv Fashions, Jaipur.',
    images: [{ url: '/images/store/store-exterior.jpg' }],
  },
};

const WA_GENERAL =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20interested%20in%20your%20collection.%20Please%20share%20details.';

const owners = [
  {
    name: 'Suresh Gangwani',
    initials: 'SG',
    tagline: 'Sadashiv Fashions · Malviya Nagar, Jaipur',
  },
  {
    name: 'Kashish Gangwani',
    initials: 'KG',
    tagline: 'Sadashiv Fashions · Malviya Nagar, Jaipur',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* ── 1. Page Header ─────────────────────────────────────────── */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E6D8C8]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4197D]" />
            <span>— II · The Atelier &amp; Custodians —</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-6xl text-[#1A1817] leading-tight mb-5">
            Meet the people behind <br />
            <span className="font-normal italic text-[#D4197D]">Sadashiv Fashions</span>
          </h1>
          <p className="text-sm sm:text-base text-[#5A4A42] leading-relaxed font-sans">
            A Jaipur-based fashion and textile store bringing together a curated selection of women&apos;s ethnic wear and fabrics. Get to know the people behind the store and explore the collections in person or through our online catalogue.
          </p>
        </div>
      </section>

      {/* ── 2. Showroom Architectural Strip ───────────────────────── */}
      <section className="relative h-64 md:h-96 overflow-hidden bg-[#1A1817]">
        <Image
          src="/images/store/store-exterior.jpg"
          alt="Sadashiv Fashions store exterior in Malviya Nagar, Jaipur"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817] via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-4 left-6 sm:left-12 p-3 bg-[#FAF6F0]/90 backdrop-blur-md rounded-xl border border-white/50 text-xs text-[#1A1817]">
          <span className="font-medium">Malviya Nagar Showroom</span> · Jaipur, Rajasthan
        </div>
      </section>

      {/* ── 3. Custodian Profiles: Suresh & Kashish Gangwani ────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-[10px] uppercase tracking-[0.26em] text-[#9E4736] font-semibold mb-3">
            Showroom Leadership
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1A1817]">
            The People Behind the Store
          </h2>
          <p className="text-xs text-[#7A6358] mt-2">
            Welcoming both individual retail shoppers and wholesale merchant partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {owners.map((owner) => (
            <article
              key={owner.name}
              className="bg-[#F3ECE2]/80 rounded-3xl p-3 sm:p-4 border border-[#E6D8C8] shadow-sm flex flex-col justify-between"
            >
              {/* Inner Double-Bezel Plate */}
              <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  {/* Portrait Plate with Architectural Jaipur Arch & Monogram */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F3ECE2] border border-[#C5A059]/30 flex flex-col items-center justify-center p-6 text-center mb-6 shadow-inner">
                    {/* Arch Motif Header */}
                    <div className="w-12 h-6 border-t-2 border-x-2 border-[#C5A059]/40 rounded-t-full mb-3" />

                    {/* Monogram Medallion */}
                    <div className="w-20 h-20 rounded-full border border-[#C5A059] bg-[#FAF6F0] flex items-center justify-center shadow-xs mb-4">
                      <span className="font-display text-3xl text-[#D4197D] font-light">
                        {owner.initials}
                      </span>
                    </div>

                    <p className="font-display text-xl text-[#1A1817] mb-1">{owner.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#9E4736] font-semibold">
                      Sadashiv Fashions · Jaipur
                    </p>

                    <p className="text-xs text-[#7A6358] mt-4 max-w-xs leading-relaxed italic font-serif">
                      Owner portrait to be added. Please supply an approved photograph.
                    </p>

                    {/* Antique Gold Seal Star */}
                    <div className="absolute top-3 right-3 text-[#C5A059] text-xs">✦</div>
                  </div>

                  {/* Profile Header */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#9E4736]">
                      [Role to be confirmed]
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-[#1A1817] mt-1">
                      {owner.name}
                    </h3>
                    <p className="text-xs text-[#7A6358] mt-0.5">{owner.tagline}</p>
                  </div>

                  {/* Factual Narrative Placeholder */}
                  <div className="border-t border-[#E6D8C8] pt-4 mb-6">
                    <p className="text-sm text-[#5A4A42] leading-relaxed font-sans italic">
                      [Biography to be provided and approved by the owner.]
                    </p>
                    <p className="text-xs text-[#7A6358] mt-3 leading-relaxed">
                      At Sadashiv Fashions, the focus is on curating dependable quality women&apos;s ethnic wear, suits, kurtis, and dress materials with personal attention to every customer and wholesale enquiry.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6D8C8]/60 flex items-center justify-between">
                  <span className="text-xs font-serif italic text-[#C5A059]">Malviya Nagar Showroom</span>
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.16em] font-semibold text-[#D4197D] hover:text-[#9E4736] transition-colors"
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 4. The Store Experience ─────────────────────────────────── */}
      <section className="bg-[#FCFAF6] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E6D8C8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#9E4736] font-semibold mb-3">
              <span>✦</span>
              <span>Our Boutique</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1817] leading-tight mb-5">
              Visit us in Malviya Nagar, Jaipur
            </h2>
            <address className="not-italic text-sm text-[#5A4A42] leading-relaxed mb-6 font-sans">
              2/72, Krishna Nand Marg,<br />
              near Government Girls Senior Secondary School,<br />
              Malviya Nagar, Jaipur — 302017,<br />
              Rajasthan, India
            </address>
            <p className="text-sm text-[#5A4A42] leading-relaxed mb-8 font-sans">
              We welcome walk-in visitors to inspect our fabrics, suit sets, and kurtis in person. For local customers, delivery is available across Jaipur and nearby areas, with details confirmed over WhatsApp.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4197D] hover:bg-[#B31468] text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 rounded-full transition-colors shadow-sm"
              >
                <span>WhatsApp Enquiry</span>
                <span>↗</span>
              </a>

              <a
                href="tel:+916376648869"
                className="inline-flex items-center gap-2 bg-[#1A1817] hover:bg-[#292522] text-[#FAF6F0] text-xs font-semibold uppercase tracking-[0.16em] px-5 py-3.5 rounded-full transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Call Us</span>
              </a>

              <a
                href="https://maps.google.com/?q=Sadashiv+Fashions+Malviya+Nagar+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#1A1817]/25 hover:border-[#1A1817] text-[#1A1817] text-xs font-semibold uppercase tracking-[0.16em] px-5 py-3.5 rounded-full transition-colors"
              >
                <span>Get Directions ↗</span>
              </a>

              <Link
                href="/collections"
                className="inline-flex items-center gap-2 border border-[#1A1817]/25 hover:border-[#1A1817] text-[#1A1817] text-xs font-semibold uppercase tracking-[0.16em] px-5 py-3.5 rounded-full transition-colors"
              >
                <span>Explore Collections</span>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#E6D8C8] shadow-md border border-[#E6D8C8]">
            <Image
              src="/images/store/store-signage.webp"
              alt="Sadashiv Fashions store signage in Jaipur"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
