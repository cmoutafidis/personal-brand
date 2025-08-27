import type {Metadata} from 'next';
import {Inter, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/context/ThemeContext';
import {LanguageProvider} from '@/context/LanguageContext';
import Navbar from '../components/Navbar';
import React from "react";
import VapiChatWidget from "@/components/VapiChatWidget";

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
  title: 'Fiji Solutions | Leading Software Company in Thessaloniki, Greece | Custom Development & IT Consulting',
  description: 'Fiji Solutions is the leading software company in Thessaloniki, Greece, specializing in custom software development, AI solutions, mobile applications, web development, and comprehensive IT consulting services for businesses across Greece and internationally.',
  keywords: 'Fiji Solutions, Fiji Solutions Thessaloniki, Fiji Solutions Greece, software company Thessaloniki, IT consulting Greece, custom software development, mobile app development Thessaloniki, web development Greece, AI solutions, enterprise software development, blockchain development, payment integration, digital transformation Greece, software consulting Thessaloniki, IT services Greece',
  authors: [{name: 'Fiji Solutions'}],
  robots: 'index, follow',
  themeColor: '#0086ff',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en',
    title: 'Fiji Solutions | Leading Software Company in Thessaloniki, Greece',
    description: 'Leading software company in Thessaloniki specializing in custom software development, AI solutions, mobile applications, and IT consulting services.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
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
    title: 'Fiji Solutions | Leading Software Company in Thessaloniki, Greece',
    description: 'Leading software company in Thessaloniki specializing in custom software development, AI solutions, mobile applications, and IT consulting services.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
  alternates: {
    canonical: 'https://www.fijisolutions.net/en',
    languages: {
      'en': 'https://www.fijisolutions.net/en',
      'el': 'https://www.fijisolutions.net/el',
      'x-default': 'https://www.fijisolutions.net/en',
    },
  },
  other: {
    'linkedin:title': 'Fiji Solutions | We help your business grow online',
    'linkedin:description': 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
    'linkedin:image': 'https://www.fijisolutions.net/fijisolutions.png',
    'msapplication-TileColor': '#0086ff',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const assistantId = "d6683411-62fe-42cb-ad6f-54dc1eb9eeb7";
  const vapiApiKey = "4fb313ff-b3ca-4e50-869f-2a28d0939c6f";
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    </head>
    <body className="antialiased">
    <ThemeProvider>
      <LanguageProvider>
        <div
          className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
          <Navbar/>
          <main>
            {children}

            {/* Global Chat Widget - visible on all pages */}
            <VapiChatWidget
              apiKey={vapiApiKey}
              assistantId={assistantId}
            />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}