import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { RootProvider } from '@/components/providers/root-provider';
import { Preloader } from '@/components/shared/preloader';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const siteUrl = 'https://black-island.example.com';
const ogImage =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Black Island Cafe Restaurant — Antalya Konyaaltı',
    template: '%s | Black Island Cafe Restaurant',
  },
  description:
    'Black Island Cafe Restaurant в Коньяалты сочетает русскую и средиземноморскую кухни. Бронирование столов в премиальной атмосфере.',
  keywords: [
    'Black Island',
    'Konyaaltı restaurant',
    'Russian cuisine Antalya',
    'Mediterranean fine dining',
    'Cafe Restaurant Antalya',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/',
      'en-US': '/en',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Black Island Cafe Restaurant — Antalya Konyaaltı',
    description:
      'Авторская русская и средиземноморская кухня в сердце Konyaaltı. Бронирование столов и фирменное меню.',
    url: siteUrl,
    siteName: 'Black Island Cafe Restaurant',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Black Island Cafe Restaurant interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@blackislandcafe',
    creator: '@blackislandcafe',
    title: 'Black Island Cafe Restaurant — Antalya Konyaaltı',
    description: 'Русская и средиземноморская кухня в Анталии.',
    images: [ogImage],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Black Island Cafe Restaurant',
  image: ogImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'LİMAN MAHALLESİ BOĞAÇAY CADDESİ YASEMİN APARTMANI 17B/1',
    addressLocality: 'Konyaaltı',
    addressRegion: 'Antalya',
    postalCode: '07130',
    addressCountry: 'TR',
  },
  telephone: '+905539545078',
  servesCuisine: ['Russian', 'Mediterranean'],
  openingHours: 'Mo-Su 10:00-00:00',
  priceRange: '$$$',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.8572,
    longitude: 30.6186,
  },
  url: siteUrl,
  sameAs: [
    'https://www.instagram.com/_blackisland_',
    'https://www.tripadvisor.com/Restaurant_Review-g297962-d21410372-Reviews-Black_Island_Cafe_Restaurant-Antalya_Turkish_Mediterranean_Coast.html',
    'https://wa.me/905418462550',
  ],
  menu: `${siteUrl}/menu`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-[#e5e5e5]">
        <RootProvider>
          <Preloader />
          <Header />
          <main className="pt-28">{children}</main>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
