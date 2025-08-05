import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VapiChatWidget from '@/components/VapiChatWidget';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Fiji Solutions | We help your business grow online',
  description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
  keywords: 'software development, IT consulting, custom software development, mobile app development, big data consulting, enterprise software development, solution consulting, software consulting, Thessaloniki Greece',
  authors: [{ name: 'Fiji Solutions' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://fijisolutions.net/en',
    title: 'Fiji Solutions | We help your business grow online',
    description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
    images: [
      {
        url: 'https://fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions'
      }
    ],
    siteName: 'Fiji Solutions'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Fiji Solutions | We help your business grow online',
    description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
    images: ['https://fijisolutions.net/fijisolutions.png']
  },
  alternates: {
    canonical: 'https://fijisolutions.net/en',
    languages: {
      'en': 'https://fijisolutions.net/en',
      'el': 'https://fijisolutions.net/el'
    }
  },
  other: {
    'theme-color': '#0086ff',
    'msapplication-TileColor': '#0086ff'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const assistantId = "d6683411-62fe-42cb-ad6f-54dc1eb9eeb7";
  const vapiApiKey = "4fb313ff-b3ca-4e50-869f-2a28d0939c6f";

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script 
          id="vtag-ai-js" 
          async 
          src="https://r2.leadsy.ai/tag.js" 
          data-pid="18ImLiEFzTBP83210" 
          data-version="062024"
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
            <VapiChatWidget
              apiKey={vapiApiKey}
              assistantId={assistantId}
            />
            <Analytics />
            <SpeedInsights />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}