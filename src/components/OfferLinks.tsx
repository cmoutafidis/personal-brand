import React from 'react';
import Link from 'next/link';
import type {Offer} from '@/components/OfferLanding';
import type {Language} from '@/types/language';
import {OFFER_BLURB, OFFER_LINKS_COPY, type OfferSlug} from '@/data/offerLinks';

// The body block that links /offers/* pages from a page that is a way into them. Server component,
// like everything that renders it — no 'use client', so the offer data files never reach the
// browser bundle.
//
// Deliberately PROSE LINKS, not a card grid. The thing this site deleted on 2026-08-15 was a grid
// of service categories; a grid of eight offer cards would be the same object with new labels.
// Two to five underlined text links under one honest question is a route for a reader who has
// already decided, which is what a direct-response page owes them.
//
// The anchor is `offer.copy[lang].eyebrow` and is never passed in: it is the destination page's
// own exact primary keyword, so the link text and the page it points at cannot disagree, and
// nothing here can degrade into "learn more".
//
// ⛔ This component may be rendered from a page BODY only — ServicePage, the audit page. Rendering
// it from Navbar, Footer, QuickLinks, Services or either /portfolio route rebuilds the service list.
// CLAUDE.md names the grep that catches that.

export default function OfferLinks({
  lang,
  variant,
  offers
}: {
  lang: Language;
  variant: 'service' | 'website';
  offers: Offer[];
}) {
  if (offers.length === 0) return null;

  const c = OFFER_LINKS_COPY[variant][lang];

  return (
    <section className="border-t border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white md:text-3xl">{c.heading}</h2>
        <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">{c.intro}</p>
        <ul className="mt-6 space-y-4">
          {offers.map((offer) => (
            <li key={offer.slug} className="text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg">
              <Link
                href={`/${lang}/${offer.slug}`}
                className="font-semibold text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {offer.copy[lang].eyebrow}
              </Link>{' '}
              — {OFFER_BLURB[offer.slug as OfferSlug][lang]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
