import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sadashivfashions.in'),
  title: {
    default: 'Sadashiv Fashions Jaipur | Ethnic Wear, Suits, Kurtis & Fabrics',
    template: '%s | Sadashiv Fashions',
  },
  description:
    'Explore suits, kurtis, fabrics and dupattas at Sadashiv Fashions in Malviya Nagar, Jaipur. Browse the collection and enquire directly on WhatsApp.',
  keywords: [
    'Sadashiv Fashions Jaipur',
    'ethnic wear Jaipur',
    'women suits Jaipur',
    'kurtis Jaipur',
    'fabrics Malviya Nagar',
    'dupatta store Jaipur',
    'wholesale fabric Jaipur',
  ],
  icons: {
    icon: '/brand/variants/logo-trishul.png',
    apple: '/brand/variants/logo-trishul.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sadashiv Fashions',
    images: [{ url: '/brand/variants/logo-full.png', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body selection:bg-[#D4197D]/20 selection:text-[#1A1817]">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
