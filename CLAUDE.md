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

### The eight `/offers/*` pages: body links only, never a menu (rule rewritten 2026-09-01)

`/[locale]/offers/<slug>` — eight front-end offers, both locales, sixteen routes. They come from an
external swipe file Charis brought (`Copy of Software Development - Proven Offers.xlsx`, sheet
*Proven Offers*, columns F–M).

**What the rule was, until 2026-09-01.** Nothing linked to them, and that was deliberate: they were
Google Ads destinations, one campaign per page, each reached by a paid click. Being orphaned was
the only thing keeping eight more pages from becoming the 2015-vintage service list this site
deleted on 2026-08-15, and it cost nothing, because a paid click does not care about internal links.

**What changed, and it is not a mistake.** Google Ads was **dropped on 2026-09-01** and organic
search is now the entire strategy. The premise of the orphan rule went with it: an orphan is no
longer a page that arrives by ad, it is a page that cannot rank. `fijisolutions.net` ranked for
**zero** keywords in DataForSEO that day, and the two offers with real measured Greek demand behind
them are `website-seo` and `website-google-ads` — `κατασκευή ιστοσελίδων` **2,900/mo** and
`προώθηση ιστοσελίδων` (see the trap below), both LOW competition, plus
`κατασκευή ιστοσελίδων θεσσαλονίκη` **480**. Every automation and AI phrase the other six chase is
below Google's reporting floor in Greek. Sources: `offer-os/gtm/keyword-research-2026-09-01.md`
**with its corrections A/B/C**, and `offer-os/gtm/fiji-greek-content-plan-2026-09-02.md`.

⚠️ **Two figures on this line were wrong until 2026-09-02 and are corrected here.**
`προώθηση ιστοσελίδων` **is not 1,600/mo** — that average describes no month that happened. Its
twelve months read `210 390 260 320 210 210 170 260 390 1000 5400 9900`: flat at 170–390 for ten
months, then vertical in May–July 2026. **Quote the trajectory, never the average.** And the
Thessaloniki term is ~480 **plus one ~320 variant group**, not "+~640 in spelling variants" — the
two "variants" return identical twelve-month curves, so they are one normalised keyword reported
twice. Accented and unaccented spellings *are* separate keywords; identical curves are not.
Compare curves before summing.

⚠️ **And a measurement trap that invalidates any Greek "no demand" verdict taken before
2026-09-02:** DataForSEO returns **no data for any Greek keyword containing a word-final ς**
(U+03C2). Substitute **σ** (U+03C3). The control: `καιρός`, the most-searched word in Greek,
returns nothing; `καιροσ` returns **5,000,000**. Re-test with σ before concluding a Greek phrase
is dead.
**Charis approved these links. Do not revert them as a re-added service list — read this first.**

**The rule now.** An offer may be linked from the **body** of a page, in prose, and from other offer
pages — and from nowhere else. The whole graph is one file, `src/data/offerLinks.ts`:

| Source (body only) | Offers linked |
|---|---|
| `/services/custom-software-development-greece` | process-automation, ai-agent, software-prototype, app-prototype, ai-development-sprint |
| `/services/data-analysis-greece` | ai-prototype |
| `/services/snowflake-consulting-greece` | **none, on purpose** — no offer is an honest way to buy Snowflake work |
| `/business-process-audit`, in a block **after** the form | website-seo, website-google-ads |
| both homepages, `Local.tsx`, two prose links | website-seo, website-google-ads |
| each `/offers/*` page | its parent service page (if any) + its one sibling offer |

**Still forbidden, and this half of the rule did not change.** Not in the navbar
(`src/components/Navbar.tsx` is four links and stays four). Not in the footer. Not in `QuickLinks`.
Not on `/portfolio`, which renders the three-card `Services` grid and is this site's one hub. Eight
offers in a menu, a footer list or a hub grid **is** the service list, whatever the offers are
called. **Do not add one to a navigation menu.** The check, which must print nothing:

```
grep -rn "offers/\|OfferLinks\|offerLinks\|OFFERS_BY_SERVICE\|WEBSITE_OFFERS" \
  src/components/Navbar.tsx src/components/Footer.tsx src/components/QuickLinks.tsx \
  src/components/Services.tsx "src/app/(en)/en/portfolio/page.tsx" "src/app/(el)/el/portfolio/page.tsx"
```

Three further guards, all in `offerLinks.ts`: every offer has at most **one** parent, so the map is
a tree and not a mesh; the maps are keyed on literal unions, so a typo, a leading slash or a
forgotten offer is a compile error rather than a prerender crash; and anchor text is never typed by
hand — it is `offer.copy[lang].eyebrow`, the destination's own primary keyword.

**`website-seo` and `website-google-ads` have no parent service page, and that is an open question,
not an oversight.** The site sells three services and none of them is website work; the largest
Greek keyword either company can reach has no page of its own. A fourth `/services/` page would be
its home — and a fourth service means a fourth `Services` card and re-opening "the three things
actually sold". That is Charis's call. Until he makes it, those two are linked from the audit page,
the homepage's local section, and each other, and every comment that says so calls it an exception.

They are in `src/app/sitemap.ts` and indexable, because half-publishing a page is worse than either
publishing or not. The audit is still the offer the site leads with, every primary CTA still points
at `#consultation-form`, and the audit-page block renders **after** the form so it costs nothing.

Every rule below applies to them without exception. In particular: **no price** (rule 7), and the
**75% on six of the eight pages is a guarantee with a refund behind it**, settled against a
baseline measured with the client before work starts. It is not a claim about past results, and
rule 5 still forbids one.

## Where things live

| What | Where |
|---|---|
| Offer economics — durations, SLA, guarantee terms | `src/lib/offer.ts`. **Change the number here, not in copy.** The guarantee's four numbers (window, cure, claim window, answer deadline) live here. **No price constant lives here, or anywhere.** |
| All UI copy, both locales | `src/translations.ts` (132 keys each, kept at exact parity) |
| The offer page's own copy | `src/components/BusinessProcessAuditLanding.tsx`, a `Record<Language, LandingCopy>` inside the component |
| The audit form section, its CTA copy and the Calendly URL | `src/components/AuditFormSection.tsx`. Rendered by **both** the offer page and the homepage, so its strings live there rather than in `LandingCopy`. `AUDIT_CTA` feeds the offer page's five `CtaBlock`s, whose button is an in-page `#consultation-form` anchor. Give each new caller its own `presetQuestion`; it is the only lead-source marker there is. |
| The eight front-end offer pages | One layout, `src/components/OfferLanding.tsx`; one bilingual data file per offer in `src/data/offers/`; two thin routes each. Metadata and the Service + FAQPage JSON-LD are derived in `src/lib/offerSchema.ts` from the same object the page renders, so the marked-up FAQ cannot drift from the rendered one. **To add or change an offer, edit its data file.** Each carries its own `questionMarker`, which is the only thing telling its leads from the other seven in the shared inbox. |
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

- **The homepage H1 stands as written, and this is not a bug to re-open.**
- **prerender.io is dead as of 2026-09-01 and must not be re-added.** `www.fijisolutions.net` was
  registered in that account (since Aug 2025), but this project has **no environment variables at
  all** and never proxied through it: Googlebot and a browser receive byte-identical HTML on every
  page, which is the test that caught the problem on the Peak Code site. The account's plan is
  cancelled and its API token regenerated.
- **The blog is Greek-only on purpose, and `/en/blog` is noindex (added 2026-09-01).** Posts are
  typed blocks (`src/types/blog.ts`), rendered by `BlogPost.tsx`, with metadata, canonical,
  hreflang and JSON-LD derived in `src/lib/blogSchema.ts`. It targets «κατασκευή ιστοσελίδων»
  (2,900/mo) and «προώθηση ιστοσελίδων» (a rising trajectory, **not** 1,600 — see above); every
  Greek automation and AI phrase measured at or near zero.
  **Since 2026-09-02 it is fourteen articles, one file per article in `src/data/blog/`** — the same
  convention `src/data/offers/` uses; fourteen inline in `blogs.ts` was ~7,000 unreviewable lines.
  `src/data/blogs.ts` is now only the aggregator, and **the order of `blogData.el` in it IS the
  index order** — nothing else sorts `/el/blog`. Shared Google URLs live in
  `src/data/blog/sources.ts` so two articles cannot cite one document at two addresses.
  Roadmap and the angle per article: `offer-os/gtm/fiji-greek-content-plan-2026-09-02.md`.
  Three things not to "fix" back: `blogSchema` does NOT use
  `buildAlternates()` and must not (a post has no English twin, so declaring one points at a 404);
  `src/app/sitemap.ts` lists blog URLs outside the `ROUTES` loop for the same asymmetry; and the
  Greek index's hreflang omits `en` so it agrees with the sitemap. Undo all three together in the
  commit that fills `blogData.en` — and do not machine-translate the Greek posts to fill it.
  `/blog` is in QuickLinks (the footer), never in the navbar.
- **The blog batch broke the one-term-per-concept rule and it is swept (2026-09-02).** Sixteen
  places in six of the fourteen articles inflected a bare English noun as a Greek one — «το site
  σου», «σε άλλα sites», «στο theme σου», «Δικός σου server» — against a rule this repo had already
  written down: `src/data/offerLinks.ts:157` says **«ιστοσελίδα» never «site»**. What the sweep
  settled, so it does not have to be re-argued:
    - **«ιστοσελίδα» is the reader's own site** — 56 «ιστοσελίδα σου» in `src/` against one
      «ιστότοπό σου». **«ιστότοπος» is a third-party or generic site**, and the site-as-host that a
      crawler loads and can overload; that is why `google-search-console-ti-sou-leei` says «θα
      υπερφόρτωνε τον ιστότοπο» (and «την ιστοσελίδα» there would also have collided with «τη
      σελίδα» in the same sentence). Plural third-party sites are «άλλους ιστότοπους».
    - **«θέμα» is the WordPress/Shopify template**, articled — «Έτοιμο θέμα», «η άδεια του θέματος».
      The homonym («θέμα» = matter) is anarthrous and never collides in practice.
    - **«διακομιστής» is the server** and **«φιλοξενία» is the hosting**; both were already the
      house terms and one stray «server» was the only exception left.
    - **«checkout» STAYS, and that is a decision, not an oversight.** The only Greek candidate is
      «ταμείο», which this corpus uses three times and always for the till being open or shut, never
      for the checkout page — and `kataskevi-eshop-apofaseis` discusses Shopify's Liquid object
      literally named `checkout` one paragraph away. An indeclinable «το checkout» under a Greek
      article is not the defect class; a mangled declension is.
  ⚠️ **The 155 `site` tokens in `src/data/blog/` are NOT 155 defects — 144 of them must never be
  touched.** They sit inside « » verbatim quotations (emitted as schema.org `citation`), in English
  source titles and link labels, in URL constants, in the Google `site:` operator the reader types,
  and in one Webflow product name («Site plan»). **Never sweep this class with a regex.**
  `poso-kostizei-mia-istoselida.ts:191` is the proof: one line carries a real defect immediately
  followed by a colon (so an operator-protecting rule skips it) and a verbatim WooCommerce quotation
  four words later (so a line-wide rule falsifies a checked citation).
- **Greek copy uses one term per concept, and the English loanwords are gone (2026-09-01).** The
  kickoff meeting is «η εναρκτήρια συνάντηση» on all eight offer pages, a delivery cycle is «ο
  κύκλος (υλοποίησης)» and never «sprint», and a demo is «μια επίδειξη». The apostrophe in «γι’
  αυτό» is U+2019, never the koronis U+1FBD that six strings carried. The English copy keeps
  "workshop" and "sprint" — these are translations, not a shared vocabulary, and the route slug
  `/offers/ai-development-sprint` is a URL and stays as it is. It promises the first
  process automated within `FIRST_FIX_DAYS` days "or we pay your money back". No delivery
  guarantee exists: the only refund in `offer.ts` triggers on payback failure over six months
  from go-live, the amount is the build fee, and the Solutions card two screens down calls the
  same 30 days a "target". Both conflicts were put to Charis on 2026-08-30, with the options of
  narrowing the headline or adding a delivery clause to the contract, and he chose to leave it
  as written knowing that. He had already asked for this wording twice before that (see
  `7cf97a8`). It is a decision, not an oversight. Do not rewrite it and do not raise it again.

- **The Greek homepage title tag is the local one; the H1 is still the promise (2026-09-01).**
  `/el` now titles itself «Εταιρεία λογισμικού στη Θεσσαλονίκη | Fiji Solutions» and describes
  itself with the category, the city and «κατασκευή ιστοσελίδων». The **H1 did not move** — the
  bullet above stands. Retargeting the H1 at the website money term would make this site claim to
  be a web agency, which is a positioning decision only Charis can take, and it has not been put
  to him. The English homepage keeps its promise-led title on purpose: English in Greece is
  measured dead (`software company thessaloniki`, `software development greece` and
  `custom software development greece` all return no data).

- **The `geo` in `RootShell.tsx` was wrong by ~10 km and is corrected (2026-09-01).** It pointed at
  Πυλαία, postcode 570 01 — a different municipality from the address on the same schema node. It
  is now the Porto Center building on Νικηφόρου Ουρανού at 546 27, which the published address
  names. ✅ **Confirmed against the Google Business Profile pin on 2026-09-01** — 40.643639,
  22.912267 lands on Porto Center at Νικηφόρου Ουρανού and matches the profile address, so the
  `TODO(charis)` that used to sit here is closed. The node carries **no**
  `priceRange` (rule 7), **no** `aggregateRating`/`review` (zero Google reviews), **no**
  `openingHoursSpecification` (the only hours on record are the GBP default "Open 24 hours") and
  **no** `vatID` (the number on `/legal` is the partner's personal ΑΦΜ). `serviceType` stays at
  three, matching the rendered «Τρία πράγματα» — the two website offers are linked from page
  bodies, not declared as a fourth and fifth service.

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
npm run build   # must stay at 39 static routes (23 + the 16 /offers/* pages added 2026-08-31)
npm run lint
```

## ⛔ TWO WRITING RULES, HIS, GIVEN 2026-09-02, AND THEY ARE ABSOLUTE

> **"I dont like em dashes. Dont use them. Also dont use the 'It is not X, it is Y' type of writing"**

**1. No em dash (—) and no en dash (–) in any string that ships.** Copy, metadata, JSON-LD, alt
text, social posts, all of it. A hyphen inside a compound word (`Camunda-7-Migration`, `e-shop`,
`c/o`) is a different character doing a different job and is fine. A spaced hyphen used as a dash
(` - `) is the same move in disguise and is also out.

**2. No contrastive-definition writing**, in any of its shapes:
*"It is not a career history, it is the work behind the companies."* ·
*"This is the work, not a career history."* (the comma form) ·
*"your path is named, not a start date, a path"* (the pivot form) ·
*"X is not Y; it is Z."*
Say what the thing **is** and stop. Where the negative genuinely carries information the reader
needs, state it as a plain separate sentence with no rhetorical pivot.

**Check before every commit that touches copy:**
```bash
grep -n "—\|–" src/data/**/*.ts   # must return nothing inside quoted strings
```
The second rule is not greppable and has to be read for. It is easy to miss precisely because it
reads well, which is why it gets written.

⚠️ 82 em dashes were live in `charismoutafidis-com` when he said this, and every one had to be
rewritten by hand in its own language. A blind replace does not work: each dash wants a different
repair depending on what the clause is doing. In Greek the repair is genuinely risky, because
restructuring around «τίποτα» / «κανένας» / «ποτέ» can invert the sentence.

