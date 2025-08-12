import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';
import VapiChatWidget from '../components/VapiChatWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Fiji Solutions | We help your business grow online',
  description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
  keywords: 'software development, IT consulting, custom software development, mobile app development, big data consulting, enterprise software development, solution consulting, software consulting, Thessaloniki Greece',
  authors: [{ name: 'Fiji Solutions' }],
  robots: 'index, follow',
  themeColor: '#0086ff',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
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
        alt: 'Fiji Solutions',
      },
    ],
    siteName: 'Fiji Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Fiji Solutions | We help your business grow online',
    description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
    images: ['https://fijisolutions.net/fijisolutions.png'],
  },
  alternates: {
    canonical: 'https://fijisolutions.net/en',
    languages: {
      'en': 'https://fijisolutions.net/en',
      'el': 'https://fijisolutions.net/el',
      'x-default': 'https://fijisolutions.net/en',
    },
  },
  other: {
    'linkedin:title': 'Fiji Solutions | We help your business grow online',
    'linkedin:description': 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
    'linkedin:image': 'https://fijisolutions.net/fijisolutions.png',
    'msapplication-TileColor': '#0086ff',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // VAPI configuration
  const assistantId = "d6683411-62fe-42cb-ad6f-54dc1eb9eeb7";
  const vapiApiKey = "4fb313ff-b3ca-4e50-869f-2a28d0939c6f";

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
              <Navbar />
              <main>
                {children}
              </main>
              <Footer />
              
              {/* Global Chat Widget - visible on all pages */}
              <VapiChatWidget
                apiKey={vapiApiKey}
                assistantId={assistantId}
              />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        
        {/* Leadsy AI Script */}
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="18ImLiEFzTBP83210"
          data-version="062024"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}