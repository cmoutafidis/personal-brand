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
import {PERSON_REF, ORGANISATION_ID} from '@/lib/person';

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
    // Not rendered as a page <title> or description anywhere: all 34 routes declare their own
    // `metadata`. Live consumers: organisationSchema()'s `description` below, and — because the six
    // /services/* routes declare `openGraph` but no `twitter` — the twitter:title of those pages.
    // Retargeted 2026-09-01 at the category and the city («εταιρεία λογισμικού» 260/mo LOW), away
    // from vocabulary DataForSEO measured at zero. See offer-os/gtm/keyword-research-2026-09-01.md.
    title: 'Εταιρεία λογισμικού στη Θεσσαλονίκη | Fiji Solutions',
    description:
      'Εταιρεία λογισμικού στη Θεσσαλονίκη: λογισμικό, αυτοματισμοί και κατασκευή ιστοσελίδων για επιχειρήσεις. Ξεκινάμε με δωρεάν έλεγχο διαδικασιών και γραπτό πλάνο.',
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

// The address is already published in both locales — translations.ts `contact.address.*` and the
// legal page. The Greek node carries the Greek strings so a Greek directory or answer engine
// matching this entity does not have to transliterate. `addressCountry` stays 'GR' — schema.org
// values stay English (CLAUDE.md rule 4).
const ADDRESS: Record<Language, {streetAddress: string; addressLocality: string; addressRegion: string}> = {
  en: {
    streetAddress: 'Nikiforou Ouranou & Minotavrou 15, Building G1, Porto Center, 3rd Floor',
    addressLocality: 'Thessaloniki',
    addressRegion: 'Central Macedonia',
  },
  el: {
    streetAddress: 'Νικηφόρου Ουρανού 15 και Μινώταυρου, Κτίριο Γ1, Porto Center, 3ος όροφος',
    addressLocality: 'Θεσσαλονίκη',
    addressRegion: 'Κεντρική Μακεδονία',
  },
};

// The registered name, as it is published on /legal in each locale.
const LEGAL_NAME: Record<Language, string> = {
  en: 'Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE)',
  el: 'Fiji Solutions ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ',
};

// A Maps search URL built from the published address. It carries no coordinates, so it cannot
// drift the way `geo` did.
const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Fiji%20Solutions%2C%20Nikiforou%20Ouranou%2015%2C%20Thessaloniki%2054627';

// One ProfessionalService node per locale, with a stable @id so the two never compete.
// `serviceType` carried 19 entries until 2026-08-15 — a machine-readable version of the same
// service list the site stopped selling. It stays at the three things the rendered Services
// section sells («Τρία πράγματα», translations.ts). The two website offers are linked from page
// bodies, not declared as a fourth and fifth service here — taking this to five while the page
// still says three is the machine-readable/human-readable divergence this comment exists to catch.
//
// ⚠️ `geo` was WRONG from the day it was written and was corrected on 2026-09-01. It read
// 40.568785, 22.981762 — about 10 km away in Πυλαία, postcode 570 01, a different municipality
// from the address on the same node. The value below is the Porto Center building on Νικηφόρου
// Ουρανού at 546 27, which is the building Fiji's own published address names.
// TODO(charis): confirm this pin against the one on the verified Google Business Profile. The two
// must agree — a JSON-LD pin that disagrees with the GBP pin is a contradiction, not a second opinion.
//
// ⛔ No `priceRange`. Rule 7: no price on any surface, and structured data is a surface.
// ⛔ No `aggregateRating` and no `review`. Both profiles have zero Google reviews
//    (offer-os/gtm/baseline-2026-09-01.md); marking one up would be fabricated.
// ⛔ No `openingHoursSpecification`. The only hours anywhere say "Open 24 hours", which is the
//    Google Business Profile default and not a claim anyone made. TODO(charis).
// ⛔ No `vatID`. The tax number on /legal is the PARTNER's personal ΑΦΜ, filed under «Εταίρος».
function organisationSchema(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORGANISATION_ID,
    name: 'Fiji Solutions',
    legalName: LEGAL_NAME[lang],
    description: COPY[lang].description,
    // ⚠️ `url` IS THE SITE ROOT, NOT `${SITE}/${lang}`. Corrected 2026-09-02.
    //
    // This node ships under ONE `@id` on all 50 pages, but `url` was locale-dependent — so the same
    // identifier declared `…/el` on 25 pages and `…/en` on 25 others. One organisation has one
    // official website; a field that varies per locale under a shared `@id` gives a parser two
    // answers to the same question, and the canonical Person node's `worksFor` edge inherits the
    // ambiguity. The root 308s to /en, which is the correct behaviour for an official-site URL.
    //
    // `legalName` is deliberately LEFT per-locale: «Fiji Solutions ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ» and "Fiji
    // Solutions SINGLE MEMBER PRIVATE COMPANY (IKE)" are the same registered name in two scripts,
    // both true, and both are the form the respective registry-facing surfaces use.
    url: SITE,
    logo: `${SITE}/fijisolutions.png`,
    image: `${SITE}/fijisolutions.png`,
    telephone: '+30 231 107 0108',
    email: 'info@fijisolutions.net',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS[lang].streetAddress,
      addressLocality: ADDRESS[lang].addressLocality,
      postalCode: '54627',
      addressRegion: ADDRESS[lang].addressRegion,
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.643639',
      longitude: '22.912267',
    },
    hasMap: MAP_URL,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'GEMI',
      value: '185101306000',
    },
    knowsLanguage: ['el', 'en'],
    // ⚠️ `sameAs` is an identity claim, not a link list. Every entry must be a page that identifies
    // THIS entity and that a search engine can reach — a profile we control, or an authoritative
    // third-party record of us. Nothing aspirational, and nothing that implies a credential we do
    // not hold.
    //
    // The Snowflake entry was added 2026-09-02 after a citation audit found it: it is the single
    // most authoritative inbound link either company has, it is a real accreditation (AI Data Cloud
    // Select Partner) that belongs to Fiji and to Fiji alone, and until now the relationship was
    // one-way. This makes it reciprocal. It must NEVER appear on a Peak Code surface — that company
    // holds no accreditation of any kind, and the identical badge file sitting unused in the Peak
    // Code repo is a copy of Fiji's by accident.
    //
    // ⚠️ Two entries here publish an address that is NOT this company's. LinkedIn and Facebook both
    // carry "Marinou Antipa 40, 570 01" — the old Pylaia address the JSON-LD `geo` above was
    // corrected away from on 2026-09-01 — and search-engine answer summaries repeat it. Both are
    // fixed inside those platforms' own admin UIs and cannot be fixed from this repo. The audit and
    // the exact steps are in offer-os/gtm/citation-pack-2026-09-02.md, items A1 and A3.
    //
    // ⚠️ `https://github.com/cmoutafidis` WAS REMOVED FROM THIS ARRAY ON 2026-09-02, and it must
    // not come back. It is Charis's PERSONAL GitHub account, and an entry in a company's `sameAs`
    // asserts that the page IS this company — so this line told search engines that a person's
    // GitHub profile is the Greek IKE. With `x.com/fiji_solutions` beside it, two of six identity
    // assertions here were person-shaped, teaching exactly the association he ruled out: his name
    // should reach his sites, and "Fiji" should reach the company, but the company should not be
    // him. The account now sits where it belongs, in the `sameAs` of the canonical Person node at
    // charismoutafidis.com, which this node references through `founder` below.
    //
    // It is still rendered as a visible link in the footer, which is correct — that is a link, not
    // an identity claim.
    sameAs: [
      'https://x.com/fiji_solutions',
      'https://www.facebook.com/fijisolutions/',
      'https://www.linkedin.com/company/fijisolutionsnet/',
      'https://www.instagram.com/fijisolutionsnet/',
      'https://www.snowflake.com/en/why-snowflake/partners/all-partners/fiji-solutions/',
    ],
    // ⚠️ TikTok is DELIBERATELY ABSENT. `social-media-content/brands/fiji-solutions/targets.json`
    // records the handle `fiji.solutions`, but the publisher's own config gates TikTok off
    // ("absent, and must stay absent for now") and the account could not be verified — tiktok.com is
    // blocked by the Chrome extension's site permissions. A `sameAs` entry is an identity claim, so
    // it goes in only after somebody has looked at the profile. Same for YouTube, which has no
    // channel recorded at all.
    // Instagram @fijisolutionsnet WAS verified on 2026-09-02: real, 5 posts, bio "We help
    // businesses grow online", and it already links back to www.fijisolutions.net.
    // ⚠️ @fijisolutions (no "net") is NOT this company — it is a Brazilian fintech with 11K
    // followers. Never add it.
    // The canonical Person node, not a bare name string. Byte-identical to the reference the Peak
    // Code repo emits, so the two companies' founders are one person rather than two matching
    // strings. See src/lib/person.ts.
    founder: PERSON_REF,
    areaServed: [
      {'@type': 'Country', name: 'Greece'},
      {'@type': 'City', name: 'Thessaloniki'},
    ],
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
