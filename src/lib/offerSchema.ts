import type {Metadata} from 'next';
import type {Offer} from '@/components/OfferLanding';
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

const SITE = 'https://www.fijisolutions.net';

export function buildOfferMetadata(offer: Offer, lang: Language): Metadata {
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

export function offerSchema(offer: Offer, lang: Language) {
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
        areaServed: {'@type': 'Country', name: 'Greece'},
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
