import type {Metadata, Viewport} from 'next';
import {Inter, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/context/ThemeContext';
import {LanguageProvider} from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import React from 'react';
import VapiChatWidget from '@/components/VapiChatWidget';
import CookieConsent from '@/components/CookieConsent';
import Analytics from '@/components/Analytics';
import {Language, assistantId, vapiApiKey} from '@/types/language';
import {FIRST_FIX_DAYS} from '@/lib/offer';

// One shell, two root layouts.
//
// `src/app/(en)/layout.tsx` and `src/app/(el)/layout.tsx` are BOTH root layouts — there is
// deliberately no `src/app/layout.tsx`. That is the only way to emit a correct `<html lang>` per
// locale while keeping every page statically prerendered: a single root layout would have to read
// the request to know the locale, which makes every route dynamic.
//
// Before 2026-08-15 the root layout hardcoded `lang="en"`, so every Greek page on the site
// declared itself English to Google and to screen readers. Do not collapse these back into one.

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const SITE = 'https://www.fijisolutions.net';

const COPY: Record<Language, { title: string; description: string; ogDescription: string }> = {
  en: {
    title: `Fiji Solutions: one process automated in ${FIRST_FIX_DAYS} days from build start | Thessaloniki`,
    description:
      `We map how your business actually runs, put a euro figure on the three bottlenecks costing you most, and automate the first one within ${FIRST_FIX_DAYS} days of the build starting.`,
    ogDescription:
      `A written map of the three bottlenecks costing you money, then the first one automated within ${FIRST_FIX_DAYS} days of the build starting.`,
  },
  el: {
    title: `Fiji Solutions: μία διαδικασία αυτοματοποιημένη σε ${FIRST_FIX_DAYS} μέρες υλοποίησης | Θεσσαλονίκη`,
    description:
      `Χαρτογραφούμε πώς δουλεύει πραγματικά η επιχείρησή σου, βάζουμε νούμερο σε ευρώ στα τρία σημεία που σου κοστίζουν περισσότερο και αυτοματοποιούμε το πρώτο μέσα σε ${FIRST_FIX_DAYS} μέρες από την έναρξη της υλοποίησης.`,
    ogDescription:
      `Γραπτό πλάνο με τα τρία σημεία που σου κοστίζουν χρήματα, και το πρώτο αυτοματοποιημένο μέσα σε ${FIRST_FIX_DAYS} μέρες από την έναρξη της υλοποίησης.`,
  },
};

export function buildRootMetadata(lang: Language): Metadata {
  const c = COPY[lang];
  return {
    metadataBase: new URL(SITE),
    title: c.title,
    description: c.description,
    authors: [{name: 'Fiji Solutions'}],
    robots: 'index, follow',
    manifest: '/site.webmanifest',
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
    },
    openGraph: {
      type: 'website',
      url: `${SITE}/${lang}`,
      title: c.title,
      description: c.ogDescription,
      locale: lang === 'el' ? 'el_GR' : 'en_US',
      images: [
        {
          url: `${SITE}/fijisolutions.png`,
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
      title: c.title,
      description: c.ogDescription,
      images: [`${SITE}/fijisolutions.png`],
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#0086ff',
};

// One ProfessionalService node per locale, with a stable @id so the two never compete.
// `serviceType` carried 19 entries until 2026-08-15 — a machine-readable version of the same
// service list the site stopped selling. It is now the three things actually sold.
function organisationSchema(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE}/#organisation`,
    name: 'Fiji Solutions',
    alternateName: 'Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE)',
    description: COPY[lang].description,
    url: `${SITE}/${lang}`,
    logo: `${SITE}/fijisolutions.png`,
    image: `${SITE}/fijisolutions.png`,
    telephone: '+30 231 107 0108',
    email: 'info@fijisolutions.net',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nikiforou Ouranou & Minotavrou 15, Building G1, Porto Center, 3rd Floor',
      addressLocality: 'Thessaloniki',
      postalCode: '54627',
      addressRegion: 'Central Macedonia',
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.568785',
      longitude: '22.981762',
    },
    sameAs: [
      'https://x.com/fiji_solutions',
      'https://www.facebook.com/fijisolutions/',
      'https://www.linkedin.com/company/fijisolutionsnet/',
      'https://github.com/cmoutafidis',
    ],
    founder: {
      '@type': 'Person',
      name: 'Charalampos Moutafidis',
    },
    areaServed: [{'@type': 'Country', name: 'Greece'}],
    serviceType: [
      'Business Process Automation',
      'Custom Software Development',
      'Snowflake Consulting',
    ],
  };
}

export default function RootShell({
  lang,
  children,
}: {
  lang: Language;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${inter.variable} ${plusJakartaSans.variable}`}>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(organisationSchema(lang))}}
      />
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
          {/* Leadsy + Google Ads load from here, and ONLY after consent. See Analytics.tsx. */}
          <Analytics/>
          <CookieConsent/>
        </div>
      </LanguageProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
