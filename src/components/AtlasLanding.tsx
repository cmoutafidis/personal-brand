import React from 'react';
import TrackedLink from '@/components/TrackedLink';
import SheetToAppStickyCta from '@/components/SheetToAppStickyCta';
import AtlasApplicationForm from '@/components/AtlasApplicationForm';
import {CTA_CLICK_EVENT} from '@/utils/gtag';
import {Language} from '@/types/language';
import type {AtlasOffer, StackRow} from '@/data/offers/atlas';

// The Atlas page, /en/offers/atlas and /el/offers/atlas. Built 2026-10-18 from offer-os
// `offers/fiji-solutions--atlas` (02-architecture.md is the build contract, 03-copy.md the approved
// copy, AT-D26). Copy lives in src/data/offers/atlas.ts.
//
// WHY A THIRD OFFER LAYOUT. The contract is a short page (300 to 500 words, AT-D15) with a value
// stack and a two-step application form, which neither OfferLanding's fixed section set nor
// SheetToAppLanding's nineteen sections fit. It follows SheetToAppLanding's idiom: a server
// component, one bilingual data file, every section with a stable id, every button an in-page link
// to the form, and the same sticky mobile bar.
//
// SECTION ORDER. page.sections in offer.yaml is S01, S07, S08, S18, S17, S21, S05, S19, S18. This
// renders S17, S05, S21, as 03-copy.md does ("Section order" note), so the subjectless method line
// follows a block whose subject is Atlas.
//
// ATTENTION RATIO (offer.yaml page.attention_ratio_notes). The route is in LANDING_PATHS
// (src/lib/landing.ts): the Navbar is logo-only and the Vapi chat bubble does not load. The body
// links nowhere except its own anchors, the privacy link inside the form, and the Sheet-to-App call
// in the form's "Not yet" / "No" success state. No other offer is linked, and Atlas is not in
// src/data/offerLinks.ts (AT-D8). The routes render AtlasFooter, which carries the privacy and
// legal links only (QA round 1, 2026-10-18, CRO1), in place of the shared Footer.

const FORM_ID = 'atlas-apply';
const HERO_ID = 's01-hero';
const OFFER_SLUG = 'atlas';

function CtaButton({label, location, language}: {label: string; location: string; language: Language}) {
  return (
    <TrackedLink
      event={CTA_CLICK_EVENT}
      params={{cta_location: location, locale: language, offer_slug: OFFER_SLUG}}
      href={`#${FORM_ID}`}
      className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-center text-lg font-medium text-white shadow-lg shadow-primary-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      {label}
    </TrackedLink>
  );
}

/**
 * One stack table: name, value, benefit line, then an optional bold total row. The core table has
 * none since AT-D36 (its total is a line under the table); the bonus table keeps its row.
 *
 * Below 640px each row is a two-column grid (name and value side by side, the benefit line full
 * width under them) and the column heads are visually hidden, so the table never scrolls sideways
 * and no benefit cell is squeezed into a third of a phone screen (QA round 1, 2026-10-18, 375px
 * checks 6 and 7: the old 32rem minimum width scrolled with no affordance and wrapped cells to 8
 * lines). From 640px up it is an ordinary three-column table.
 */
function StackTable({head, rows, total}: {head: [string, string, string]; rows: StackRow[]; total?: [string, string]}) {
  const rowClass = 'grid grid-cols-[1fr_auto] gap-x-4 py-3 sm:table-row sm:py-0';
  return (
    <table className="block w-full border-collapse text-left text-base leading-7 sm:table">
      <thead className="sr-only sm:not-sr-only sm:table-header-group">
        <tr className="border-b-2 border-primary-200 dark:border-primary-900 sm:table-row">
          {head.map((cell) => (
            <th
              key={cell}
              scope="col"
              className="px-3 py-3 align-bottom font-semibold text-gray-950 first:pl-0 dark:text-white"
            >
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="block sm:table-row-group">
        {rows.map(([name, value, benefit]) => (
          <tr key={name} className={`${rowClass} border-b border-gray-200 dark:border-gray-800`}>
            <th scope="row" className="pl-0 align-top font-semibold text-gray-950 dark:text-white sm:py-3 sm:pr-3">
              {name}
            </th>
            <td className="whitespace-nowrap text-right align-top font-medium text-gray-950 dark:text-white sm:px-3 sm:py-3 sm:text-left">
              {value}
            </td>
            <td className="col-span-2 pt-1 align-top text-gray-700 dark:text-gray-300 sm:px-3 sm:py-3">{benefit}</td>
          </tr>
        ))}
        {total && (
          <tr className={`${rowClass} border-b-2 border-primary-200 dark:border-primary-900`}>
            <th scope="row" className="pl-0 align-top font-bold text-gray-950 dark:text-white sm:py-3 sm:pr-3">
              <strong>{total[0]}</strong>
            </th>
            <td className="whitespace-nowrap text-right align-top font-bold text-gray-950 dark:text-white sm:px-3 sm:py-3 sm:text-left">
              <strong>{total[1]}</strong>
            </td>
            <td className="hidden sm:table-cell"/>
          </tr>
        )}
      </tbody>
    </table>
  );
}

/** The hero diagram (03-copy.md S01 visual brief): departments as boxes, all feeding one system. */
function HeroDiagram({center, boxes}: {center: string; boxes: string[]}) {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-md">
      <div className="grid grid-cols-2 gap-3">
        {boxes.slice(0, 2).map((box) => (
          <span
            key={box}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-semibold text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
          >
            {box}
          </span>
        ))}
      </div>
      <div className="flex justify-around py-2">
        <span className="h-6 w-0.5 bg-primary-300 dark:bg-primary-800"/>
        <span className="h-6 w-0.5 bg-primary-300 dark:bg-primary-800"/>
      </div>
      <div className="rounded-2xl bg-primary-600 px-6 py-6 text-center text-2xl font-bold text-white shadow-xl dark:bg-primary-500">
        {center}
      </div>
      <div className="flex justify-around py-2">
        <span className="h-6 w-0.5 bg-primary-300 dark:bg-primary-800"/>
        <span className="h-6 w-0.5 bg-primary-300 dark:bg-primary-800"/>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {boxes.slice(2).map((box) => (
          <span
            key={box}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-semibold text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
          >
            {box}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AtlasLanding({offer, language}: {offer: AtlasOffer; language: Language}) {
  const c = offer.copy[language];

  return (
    <>
      {/* S01: the hero. No price here (AT-D34, 2026-10-18): the reader meets it after the core total (AT-D36). */}
      <section
        id={HERO_ID}
        className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-200/60 blur-3xl dark:bg-primary-900/30"/>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-200/60 blur-3xl dark:bg-secondary-900/30"/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-36">
          <div>
            <p className="mb-4 text-sm font-semibold text-primary-700 dark:text-primary-300">
              {c.eyebrow}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-950 dark:text-white md:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="mb-8 max-w-[60ch] text-base leading-7 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-8 md:text-xl">
              {c.subhead}
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaButton label={c.button} location="hero" language={language}/>
            </div>
          </div>
          <HeroDiagram center={c.diagramCenter} boxes={c.diagramBoxes}/>
        </div>
      </section>

      {/* S07: the offer stack, eight core parts with their values (AT-D18, AT-D20). Its heading
          names the 8 core parts and their value (AT-D36). The core total is its own line under the
          table, and the price reveal sits on its own line under it at the same weight, never folded
          into the total sentence: the first price on the page (AT-D34, AT-D36, 03-copy.md S07
          builder note). */}
      <section id="s07-offer-stack" className="scroll-mt-24 bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-8 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{c.stackSubhead}</h2>
          <StackTable head={c.stackHead} rows={c.stackRows}/>
          <div className="max-w-[65ch]">
            <p className="mt-10 text-2xl font-bold leading-9 text-gray-950 dark:text-white">{c.coreTotalLine}</p>
            <p id="s07-price-reveal" className="mt-2 text-2xl font-bold leading-9 text-primary-700 dark:text-primary-300">
              {c.priceReveal}
            </p>
          </div>
        </div>
      </section>

      {/* S08: the bonus stack, added on top of the price (AT-D36), then the total value line and the
          basis line. */}
      <section id="s08-bonus-stack" className="scroll-mt-24 bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-8 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{c.bonusSubhead}</h2>
          <StackTable head={c.bonusHead} rows={c.bonusRows} total={c.bonusTotal}/>
          {/* 65ch, as every other prose block (QA round 1, KN6 measure: the basis line ran 92
              characters on one line inside max-w-4xl at 1440px). */}
          <div className="max-w-[65ch]">
            <p className="mt-10 text-2xl font-bold leading-9 text-gray-950 dark:text-white">{c.totalLine}</p>
            <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">{c.basisLine}</p>
          </div>
        </div>
      </section>

      {/* S18 block 1: the CTA after the stack total value. No reason-to-act-now line (constraint_source null). */}
      <section id="s18-cta-1" className="bg-white py-14 dark:bg-gray-900 md:py-20">
        <div className="mx-auto max-w-[65ch] px-4 text-center sm:px-6">
          <p className="text-xl font-semibold leading-8 text-gray-950 dark:text-white">{c.cta1Line}</p>
          <div className="mt-8">
            <CtaButton label={c.button} location="stack" language={language}/>
          </div>
        </div>
      </section>

      {/* S17 (who it is for, with the damaging admission), S05 (method line), S21 (founder line). */}
      <section id="s17-who-it-is-for" className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-[65ch] px-4 sm:px-6">
          <h2 className="mb-6 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{c.whoSubhead}</h2>
          <p className="text-base leading-7 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-8">{c.whoText}</p>
          <p id="s05-method" className="mt-6 text-base font-semibold leading-7 text-gray-950 dark:text-white sm:text-lg sm:leading-8">
            {c.method}
          </p>
          {/* Two paragraphs (AT-D33 KN6), the id on their wrapper. */}
          <div id="s21-founder" className="mt-6 space-y-4 text-base leading-7 text-gray-700 dark:text-gray-300">
            {c.founder.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* S19: the close. No guarantee, no deadline, no capacity line, no reply promise. */}
      <section id="s19-close" className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-[65ch] px-4 text-center sm:px-6">
          <h2 className="mb-6 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{c.closeSubhead}</h2>
          <div className="space-y-4 text-base leading-7 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-8">
            {c.closeText.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton label={c.button} location="close" language={language}/>
          </div>
        </div>
      </section>

      {/* S18 block 2: the application form, the page's one destination. */}
      <section id={FORM_ID} className="scroll-mt-24 bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-[65ch] text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{c.formHeading}</h2>
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">{c.formIntro}</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <AtlasApplicationForm language={language}/>
          </div>
        </div>
      </section>

      <SheetToAppStickyCta
        label={c.button}
        heroId={HERO_ID}
        formId={FORM_ID}
        language={language}
        offerSlug={OFFER_SLUG}
      />
    </>
  );
}
