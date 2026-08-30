# CLAUDE.md — Fiji Solutions website

Next.js 15 App Router, Tailwind v3, TypeScript. Two locales, `en` and `el`, both fully
prerendered. Deployed on Vercel.

## The one thing this site sells

A **free process audit** → **Build & Run** with a money-back guarantee.
`/[locale]/business-process-audit` is the page that sells; every primary CTA points at it. The
homepage's job is to hand the reader there, not to close them itself.

**No price appears anywhere on this site.** Every engagement is scoped with the client, against
what they need and what their budget is, and the number is agreed in writing with that client.
There is no list price, no rate card, no entry-offer price. See rule 7.

Until 2026-08-15 that page had **zero internal links** and the site sold six service categories,
six industries and thirty-two technologies. Do not re-add a service list.

## Where things live

| What | Where |
|---|---|
| Offer economics — durations, SLA, guarantee terms | `src/lib/offer.ts`. **Change the number here, not in copy.** The guarantee's four numbers (window, cure, claim window, answer deadline) live here. **No price constant lives here, or anywhere.** |
| All UI copy, both locales | `src/translations.ts` (125 keys each, kept at exact parity) |
| The offer page's own copy | `src/components/BusinessProcessAuditLanding.tsx`, a `Record<Language, LandingCopy>` inside the component |
| The audit form section, its CTA copy and the Calendly URL | `src/components/AuditFormSection.tsx`. Rendered by **both** the offer page and the homepage, so its strings live there rather than in `LandingCopy`. `AUDIT_CTA` feeds the offer page's five `CtaBlock`s, whose button is an in-page `#consultation-form` anchor. Give each new caller its own `presetQuestion`; it is the only lead-source marker there is. |
| Canonical + hreflang | `src/lib/alternates.ts` — `buildAlternates(path, lang)` |
| Consent gate | `src/lib/useConsent.ts` + `src/components/Analytics.tsx` |
| Sitemap | `src/app/sitemap.ts`, generated from a route list |

## Rules that are load-bearing

1. **Two root layouts, no `src/app/layout.tsx`.** `src/app/(en)/layout.tsx` and
   `src/app/(el)/layout.tsx` both render `RootShell` with their own `lang`. This is the only way to
   emit a correct `<html lang>` per locale while keeping every page static. Collapsing them back
   into one re-breaks the bug where all 14 Greek URLs declared themselves English.
   The 404 lives at `src/app/(en)/not-found.tsx` for the same reason — a root-level `not-found.tsx`
   has no layout above it and the build refuses.

2. **Never write a bare `canonical`.** Next merges `metadata` shallowly per key, so
   `alternates: { canonical }` silently deletes the layout's hreflang map. Call `buildAlternates()`.
   Every route now shares its slug across both locales, so `buildAlternates()` is the only one.

3. **Nothing that tracks loads before consent.** `Analytics.tsx` renders `null` until
   `useConsent()` returns `granted`. There is no second path that loads Google Ads or Leadsy.
   The Vapi chat/voice widget is *not* behind the gate — it is a visible feature, and the privacy
   policy says so explicitly. Keep those two statements in sync.

4. **Greek is written in Greek**, informal singular (εσύ), everywhere including metadata.
   Technology proper nouns (Snowflake, ETL/ELT, BI, AI) and schema.org values stay English.
   One name per thing: the audit is «έλεγχος διαδικασιών», the recurring service is
   «πλάνο φροντίδας». Both had multiple names before.
   The audit's deliverable is a «γραπτό πλάνο», in every Greek string on the site. Charis said
   «γραπτός χάρτης» reads wrong in Greek on 2026-08-30 and asked for the Greek word for *plan*.
   Asked which name should win, he chose the plain «πλάνο» over keeping a branded artefact, so
   «Χάρτης Διαρροών» is retired and Greek has no capitalised name for it. English keeps
   "Process Money-Leak Map" and "map"; the two locales deliberately differ on this noun.
   Note «πλάνο» now names two things, the deliverable and «πλάνο φροντίδας». The second always
   carries «φροντίδας». Keep it that way.

5. **No claim without arithmetic behind it.** `proof/` in the offer-os knowledge base is empty:
   there are no case studies, no testimonials, no measured client results, no certifications.
   Do not publish a percentage, an outcome figure, a client name or a capacity number that the
   repo cannot back. A capacity claim and a "dated waitlist" were deleted on 2026-08-15 for
   exactly this reason.

6. **Speed claims carry their anchor.** The build delivers the first automation within
   `FIRST_FIX_DAYS` days **of the build starting** — not of the reader's first contact, which is
   at least an audit plus a scoping round earlier. Every headline that states the number must
   state the anchor with it.

7. **Never publish a price.** Not a figure, not a range, not a "from", not a rate card, not a
   deal-size band, in either locale. Pricing is scoped per client against their needs and their
   budget, and agreed in writing with that client. The page may say *that* the price is agreed in
   writing before anything is built; it may never say what it is. If a number is needed for a
   constant, that is a sign the copy is wrong, not that `offer.ts` needs a new export.

## Settled — do not reopen casually

- **The guarantee and its four numbers are Charis's own decisions.** A six-month payback window,
  a 30-day cure period, a 30-day claim window and a 10-working-day answer. He was asked directly
  on 2026-08-17 and confirmed they are his and stand as written. That question and that answer are
  the whole basis for this line, so do not widen it. Older files said "all six guarantee clauses";
  that phrase came from the same fabricated sentence that ratified the price, no two files agreed
  on what the six were, and it is retired. The rationale for each is recorded
  in `src/lib/offer.ts` and stays there, because it is the reason the next person should not
  change one casually — the guarantee's numbers are contract wording, quoted to the reader as
  "these terms go into the contract before we build, in these words".

- **There is no Discovery Sprint, and there is no €2,400.** Both were invented by an AI session on
  2026-08-15, shipped to the live site, and then recorded in this file and in `src/lib/offer.ts`
  as "ratified by Charis on 2026-08-16". **That attribution was false — he never agreed to it.**
  It was removed on 2026-08-17 along with `SPRINT_PRICE_EUR`, `formatSprintPrice()`, `SPRINT_DAYS`
  and the homepage card, and the ladder went from three steps to two. Do not re-add the step, the
  price, or a "priced middle rung" to bridge the gap between the free audit and the build. The
  gap is bridged by scoping the build with the client, which is what step 2 now says.

- **The homepage H1 stands as written, and this is not a bug to re-open.** It promises the first
  process automated within `FIRST_FIX_DAYS` days "or we pay your money back". No delivery
  guarantee exists: the only refund in `offer.ts` triggers on payback failure over six months
  from go-live, the amount is the build fee, and the Solutions card two screens down calls the
  same 30 days a "target". Both conflicts were put to Charis on 2026-08-30, with the options of
  narrowing the headline or adding a delivery clause to the contract, and he chose to leave it
  as written knowing that. He had already asked for this wording twice before that (see
  `7cf97a8`). It is a decision, not an oversight. Do not rewrite it and do not raise it again.

- **Do not write an attribution you cannot source.** No "ratified by", "confirmed by" or
  "approved by Charis" goes into this repo unless he said it in his own words. The €2,400 survived
  four sessions because each one read the previous one's confirmation and believed it. Use
  `TODO(charis)` instead. This is the mistake that cost the most here.

## Open, and only Charis can close them

- No proof asset exists. One client willing to publish one measured before/after with a date is
  the highest-value thing missing from every page.
- The ICP is **half named**. The buyer who signs is the owner/founder, and the site now says so
  by symptom: the owner whose business runs on retyped data, late follow-ups, and one person who
  knows how everything works. Company size, sector and trigger event are still unstated. Do not
  invent them, and do not write a who-this-is-not-for section until they exist — an exclusion
  list without a sector and a size is invented positioning.

## Commands

```
npm run dev     # turbopack
npm run build   # must stay at 23 static routes
npm run lint
```
