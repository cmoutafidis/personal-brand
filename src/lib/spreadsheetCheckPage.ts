import type {Metadata} from 'next';
import type {Language} from '@/types/language';
import {buildAlternates} from '@/lib/alternates';

// Metadata and JSON-LD of the spreadsheet check, /en/tools/spreadsheet-check and
// /el/tools/spreadsheet-check (offer-os gtm/seo-loop-2026-10 S14). The page itself is
// src/components/SpreadsheetCheck.tsx with its data in src/data/tools/spreadsheetCheck.ts.
//
// The JSON-LD is a BreadcrumbList and nothing else (SL-D66): the GEO rule in CLAUDE.md freezes new
// per page markup, and a two item breadcrumb is the node every offer page already carries. No
// price anywhere, here included (rule 7).
// Superseded 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-13): the freeze on per page markup no longer
// holds. Fixing broken markup and adding schema types Google itself uses (SoftwareApplication for a
// tool page, for example) is allowed; nothing is added only for AI tools. Goals C5, C10 and C14 carry
// it out; until then the BreadcrumbList stays as it is. The no price line above still holds: this
// tool is not an offer with a set price (D-08).

const SITE = 'https://www.fijisolutions.net';
const PATH = '/tools/spreadsheet-check';

const META: Record<Language, {title: string; description: string; name: string}> = {
  en: {
    title: 'Spreadsheet check for teams sharing Excel or Google Sheets',
    description:
      '11 questions about how your team uses its shared spreadsheet. See what to try in Excel or Google Sheets, where they stop, and what an app built around the sheet adds. Your answers stay in your browser.',
    name: 'Spreadsheet check',
  },
  el: {
    title: 'Τεστ για το κοινό Excel της ομάδας σου',
    description:
      '11 ερωτήσεις για το πώς δουλεύει η ομάδα σου στο κοινό Excel ή στο Google Sheets. Δες τι να δοκιμάσεις, πού σταματά και τι προσθέτει μια εφαρμογή χτισμένη γύρω από το αρχείο σου. Οι απαντήσεις σου μένουν στον browser σου.',
    name: 'Τεστ για το κοινό Excel',
  },
};

export function spreadsheetCheckMetadata(lang: Language): Metadata {
  const m = META[lang];
  const url = `${SITE}/${lang}${PATH}`;
  const image = `${SITE}/fijisolutions.png`;
  return {
    title: m.title,
    description: m.description,
    // Never a bare canonical. buildAlternates emits the canonical AND the full hreflang map.
    alternates: buildAlternates(PATH, lang),
    openGraph: {
      type: 'website',
      title: m.title,
      description: m.description,
      url,
      siteName: 'Fiji Solutions',
      locale: lang === 'el' ? 'el_GR' : 'en_US',
      images: [{url: image, width: 1200, height: 630, alt: m.name}],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@fiji_solutions',
      title: m.title,
      description: m.description,
      images: [image],
    },
  };
}

export function spreadsheetCheckSchema(lang: Language) {
  const url = `${SITE}/${lang}${PATH}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      {'@type': 'ListItem', position: 1, name: lang === 'el' ? 'Αρχική' : 'Home', item: `${SITE}/${lang}`},
      {'@type': 'ListItem', position: 2, name: META[lang].name, item: url},
    ],
  };
}
