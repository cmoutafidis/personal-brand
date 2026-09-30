import type {Metadata} from 'next';
import type {Faq} from '@/components/OfferLanding';
import {Language} from '@/types/language';
import {buildAlternates} from '@/lib/alternates';

// Metadata and JSON-LD for the front-end offer pages, derived from the offer data file.
//
// Sixteen route files would otherwise each hand-write a title, a description, an OpenGraph block,
// a Twitter block and two JSON-LD nodes. That is sixteen chances for a canonical to be written
// bare (which silently deletes the layout's hreflang map — see lib/alternates.ts) and sixteen
// chances for the marked-up FAQ to drift away from the rendered one. Both are derived here
// instead, from the same object the page renders.
//
// ⛔ There is deliberately NO `offers` node in the Service schema. This site publishes no price,
// in copy or in structured data. An `offers` node without a price is also not added: it would be
// an empty promise to a crawler.
// ⛔ There is no `aggregateRating` and no `review` node. There is no consented review data.
//
// 2026-09-30 (G19): /offers/sheet-to-app is the one page whose BODY publishes prices (the dated
// exception to CLAUDE.md rule 7, offer-os PLAN.md D68 and D69). Its structured data still carries
// none: no `offers` node, no price, and its FAQ answers, which feed the FAQPage node, hold no figure.
// Three changes that day, for G19 step 2:
//  1. `siteName` is re-declared in openGraph. Next replaces the layout's whole openGraph object when
//    a page declares its own, so every offer page shipped without og:site_name until today (the
//    same fix src/app/(el)/el/page.tsx made for the Greek homepage).
//  2. `areaServed` is per locale when the offer declares it (sheet-to-app: the United States on the
//    English page, Greece on the Greek page, D97). The seven workbook offers declare none and keep
//    Greece.
//  3. Both functions take the fields they read, so an offer with its own layout (SheetToAppLanding)
//    feeds them the same way an OfferLanding offer does.

/** The fields metadata and JSON-LD are built from. Every `Offer` and `SheetToAppOffer` fits it. */
export type OfferSchemaSource = {
  slug: string;
  serviceType: string;
  /** schema.org areaServed country names per locale. Omitted: Greece. */
  areaServed?: Record<Language, string[]>;
  copy: Record<
    Language,
    {metaTitle: string; metaDescription: string; metaKeywords: string; ogAlt: string; faqs: Faq[]}
  >;
};

const SITE = 'https://www.fijisolutions.net';

export function buildOfferMetadata(offer: OfferSchemaSource, lang: Language): Metadata {
  const c = offer.copy[lang];
  const url = `${SITE}/${lang}/${offer.slug}`;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.metaKeywords,
    // Never a bare canonical. buildAlternates emits the canonical AND the full hreflang map.
    alternates: buildAlternates(`/${offer.slug}`, lang),
    openGraph: {
      type: 'website',
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      siteName: 'Fiji Solutions',
      locale: lang === 'el' ? 'el_GR' : 'en_US',
      images: [
        {
          url: `${SITE}/fijisolutions.png`,
          width: 1200,
          height: 630,
          alt: c.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@fiji_solutions',
      title: c.metaTitle,
      description: c.metaDescription,
      images: [`${SITE}/fijisolutions.png`],
    },
  };
}

function areaServed(offer: OfferSchemaSource, lang: Language) {
  const names = offer.areaServed?.[lang] ?? ['Greece'];
  const nodes = names.map((name) => ({'@type': 'Country', name}));
  return nodes.length === 1 ? nodes[0] : nodes;
}

export function offerSchema(offer: OfferSchemaSource, lang: Language) {
  const c = offer.copy[lang];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: c.metaTitle.split('|')[0].trim(),
        serviceType: offer.serviceType,
        description: c.metaDescription,
        url: `${SITE}/${lang}/${offer.slug}`,
        provider: {'@id': `${SITE}/#organisation`},
        areaServed: areaServed(offer, lang),
      },
      {
        '@type': 'FAQPage',
        // Built from the SAME array the page renders. Google requires marked-up FAQ content to be
        // present on the page, and a hand-written second copy drifts within one commit.
        mainEntity: c.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {'@type': 'Answer', text: faq.a},
        })),
      },
    ],
  };
}
