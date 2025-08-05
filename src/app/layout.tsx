import { Metadata } from 'next';
import { ReactNode } from 'react';

// Define metadata using Next.js Metadata API
export const metadata: Metadata = {
  title: 'Fiji Solutions | We help your business grow online',
  description:
    'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
  keywords:
    'software development, IT consulting, custom software development, mobile app development, big data consulting, enterprise software development, solution consulting, software consulting, Thessaloniki Greece',
  authors: [{ name: 'Fiji Solutions' }],
  robots: 'index, follow',
  themeColor: '#0086ff',
  // Open Graph metadata
  openGraph: {
    type: 'website',
    url: 'https://fijisolutions.net/en',
    title: 'Fiji Solutions | We help your business grow online',
    description:
      'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
    images: ['https://fijisolutions.net/fijisolutions.png'],
    siteName: 'Fiji Solutions',
  },
  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Fiji Solutions | We help your business grow online',
    description:
      'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
    images: ['https://fijisolutions.net/fijisolutions.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
    <head>
      {/* Favicon and theme icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="msapplication-TileColor" content="#0086ff" />

      {/* Font preconnects and styles */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body suppressHydrationWarning={true}>
    <div id="root">{children}</div>
    </body>
    </html>
  );
}
