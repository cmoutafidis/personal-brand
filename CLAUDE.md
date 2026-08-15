# CLAUDE.md — Fiji Solutions website

Next.js 15 App Router, Tailwind v3, TypeScript. Two locales, `en` and `el`, both fully
prerendered. Deployed on Vercel.

## The one thing this site sells

A **free process audit** → a **priced Discovery Sprint** → **Build & Run** with a money-back
guarantee. `/[locale]/business-process-audit` is the page that sells; every primary CTA points at
it. The homepage's job is to hand the reader there, not to close them itself.

Until 2026-08-15 that page had **zero internal links** and the site sold six service categories,
six industries and thirty-two technologies. Do not re-add a service list.

## Where things live

| What | Where |
|---|---|
| Offer economics — price, durations, SLA | `src/lib/offer.ts`. **Change the number here, not in copy.** |
| All UI copy, both locales | `src/translations.ts` (138 keys each, kept at exact parity) |
| The offer page's own copy | `src/components/BusinessProcessAuditLanding.tsx`, a `Record<Language, LandingCopy>` inside the component |
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
   Blog posts use `buildBlogAlternates()` because the two locales do not share a slug.

3. **Nothing that tracks loads before consent.** `Analytics.tsx` renders `null` until
   `useConsent()` returns `granted`. There is no second path that loads Google Ads or Leadsy.
   The Vapi chat/voice widget is *not* behind the gate — it is a visible feature, and the privacy
   policy says so explicitly. Keep those two statements in sync.

4. **Greek is written in Greek**, informal singular (εσύ), everywhere including metadata.
   Technology proper nouns (Snowflake, ETL/ELT, BI, AI) and schema.org values stay English.
   One name per thing: the audit is «έλεγχος διαδικασιών», the recurring service is
   «πλάνο φροντίδας». Both had multiple names before.

5. **No claim without arithmetic behind it.** `proof/` in the offer-os knowledge base is empty:
   there are no case studies, no testimonials, no measured client results, no certifications.
   Do not publish a percentage, an outcome figure, a client name or a capacity number that the
   repo cannot back. A capacity claim and a "dated waitlist" were deleted on 2026-08-15 for
   exactly this reason.

6. **Speed claims carry their anchor.** The build delivers the first automation within
   `FIRST_FIX_DAYS` days **of the build starting** — not of the reader's first contact, which is
   at least an audit plus a five-day sprint earlier. Every headline that states the number must
   state the anchor with it.

## Open, and only Charis can close them

- **The Discovery Sprint price and the guarantee's claim terms were chosen on his behalf** on
  2026-08-15 and are flagged in `src/lib/offer.ts`. They are placeholders with a rationale, not
  decisions he made.
- No proof asset exists. One client willing to publish one measured before/after with a date is
  the highest-value thing missing from every page.
- The ICP is unnamed — the site is written for "businesses in Greece", which is nobody in
  particular.

## Commands

```
npm run dev     # turbopack
npm run build   # must stay at 29 static routes
npm run lint
```
