import type {Metadata} from 'next';
import type {Faq} from '@/components/OfferLanding';
import {Language} from '@/types/language';
import {buildAlternates} from '@/lib/alternates';
import {routeLastmod} from '@/lib/routes';
import {ORGANISATION_ID} from '@/lib/person';

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
// 2026-10-08 (F17 of offer-os gtm/followups-and-search, F-D143 to F-D146):
//  4. Every offer page emits a WebPage node with a two-item BreadcrumbList (the home page, named as
//    blogSchema.ts names it, then the offer). There is no /offers index page, so the trail has no middle item. The trail is JSON-LD
//    only; nothing changes on screen.
//  5. The FAQPage carries `inLanguage`.
//  6. An offer that sets `ogImage` gets its own preview image; the rest keep fijisolutions.png.
//  7. An offer that sets `showUpdated` prints "Updated <date>" at the page end and its WebPage node
//    carries `dateModified`, both read from its sitemap lastmod (src/lib/routes.ts), so the three
//    agree. Only sheet-to-app sets it.

/** The fields metadata and JSON-LD are built from. Every `Offer` and `SheetToAppOffer` fits it. */
export type OfferSchemaSource = {
  slug: string;
  serviceType: string;
  /** schema.org areaServed country names per locale. Omitted: Greece. */
  areaServed?: Record<Language, string[]>;
  /** Site-relative path of the offer's own 1200x630 preview image per locale. Omitted: fijisolutions.png. */
  ogImage?: Record<Language, string>;
  /** The page prints its sitemap lastmod as a visible date; the WebPage node carries it as dateModified. */
  showUpdated?: boolean;
  copy: Record<
    Language,
    {metaTitle: string; metaDescription: string; metaKeywords: string; ogAlt: string; faqs: Faq[]}
  >;
};

const SITE = 'https://www.fijisolutions.net';
const WEBSITE_ID = `${SITE}/#website`;

/** The date an offer page states as its last update: its sitemap lastmod. */
export function offerLastmod(offer: Pick<OfferSchemaSource, 'slug'>): string {
  return routeLastmod(`/${offer.slug}`);
}

export function buildOfferMetadata(offer: OfferSchemaSource, lang: Language): Metadata {
  const c = offer.copy[lang];
  const url = `${SITE}/${lang}/${offer.slug}`;
  const image = `${SITE}${offer.ogImage?.[lang] ?? '/fijisolutions.png'}`;

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
          url: image,
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
      images: [image],
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
  const url = `${SITE}/${lang}/${offer.slug}`;
  const name = c.metaTitle.split('|')[0].trim();

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        inLanguage: lang,
        isPartOf: {'@id': WEBSITE_ID},
        about: {'@id': `${url}#service`},
        breadcrumb: {'@id': `${url}#breadcrumb`},
        ...(offer.showUpdated ? {dateModified: offerLastmod(offer)} : {}),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: lang === 'el' ? 'Αρχική' : 'Home', item: `${SITE}/${lang}`},
          {'@type': 'ListItem', position: 2, name, item: url},
        ],
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name,
        serviceType: offer.serviceType,
        description: c.metaDescription,
        url,
        provider: {'@id': ORGANISATION_ID},
        areaServed: areaServed(offer, lang),
      },
      {
        '@type': 'FAQPage',
        inLanguage: lang,
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
