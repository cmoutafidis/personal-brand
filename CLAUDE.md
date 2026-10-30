# CLAUDE.md — Fiji Solutions website

Next.js 15 App Router, Tailwind v3, TypeScript. Two locales, `en` and `el`, both fully
prerendered. Deployed on Vercel.

## What this site sells (2026-10-21)

Added 2026-10-22 by offer-os `gtm/broad-home-2026-10` BR-G04 (decisions BR-D3, BR-D4, BR-D22 to BR-D28 and
BR-D35 in that folder's `PLAN.md` §2). Charis, 2026-10-21: Fiji builds custom software, apps, CRM style systems,
automation and AI, and sheet-to-app is one offer he sells through outreach. He then said *"build a whole plan for
the thing and no need to wait to go live"*. Where a rule further down in this file contradicts this block, this
block wins. BR-G07 (2026-10-22) struck or noted the rest with dated notes; a line further down that still reads
as the hook is history, kept for the record.

- **Fiji Solutions is a broad custom software company.** The sentence every company surface carries: *"Fiji
  Solutions is a software company in Thessaloniki, Greece. We build custom software, web and mobile apps, business
  process automation, AI agents, websites and Snowflake data platforms for businesses in Greece and abroad."* Fiji
  is never described as the spreadsheet company on a broad surface (home, titles, meta, JSON-LD, About, Contact,
  off-site profiles).
- **Each offer is one way to start, and keeps its own page.** The 7-day sheet-to-app prototype, the software
  prototype, the AI prototype, the AI development sprint, process automation, the AI agent, the two website offers
  and Atlas. The homepages show a six card "What we build" grid (BR-D3) and a "Ways to start" row of five offers.
- **No price on a broad surface (BR-D24).** His words: *"these prices are for the specific offer"*. The prices
  stay on `/offers/sheet-to-app` (S12 and the S19 close) and on Atlas. Never on either homepage, About, Contact,
  `/portfolio`, the projects pages, the top banner, the RootShell strings or any JSON-LD.
- **Clients may be named** in the client strip and on project pages, as BR-D26 and BR-D35 allow: PAP Center, New
  Era Learning, Hapimag, Jupiter, Catalytics, Seaflows, Alumil, Aargauische Kantonalbank (its approved sentences
  only, text only, no logo) and Ο Τόπος Μου. Never PRODYNA, Smiling Machines, Deloitte, Apifon, Printty, "The Real
  World" or TRW; `scripts/no-barred-names.py` enforces that list. Blog posts never name a client (SL-D4).
- **This site never names or links Peak Code Consulting** (offer-os `gtm/seo-plan-2026-10` D-11, 2026-10-26;
  carried out 2026-10-27 in B1). Fiji Solutions and Peak Code Consulting never name or link each other on their
  sites; they may still show the same clients and case studies, and only charismoutafidis.com names both. The
  founder sentence that said his work went through Fiji Solutions, Peak Code Consulting and earlier jobs was
  deleted on 2026-10-27 from the home FAQ, the business-process-audit founder text and the Atlas founder line,
  in both locales, at his word ("remove all those sentences, I dont like them"). Do not write it back in any
  form. `scripts/no-barred-names.py` bars "Peak Code" and `peakcode` in code; the "everything else cross is
  fine" half of BR-D35 no longer holds between the two company sites.
- **The booking link is one constant**, `BOOKING_URL` in `src/lib/booking.ts`, imported by every Calendly link.
- **The site wide shell** (2026-10-22, BR-G04): a top banner (`src/components/TopBanner.tsx`, hidden on
  `LANDING_PATHS` and both `business-process-audit` pages, closed for the tab in `sessionStorage`, not sticky), a
  navbar of Services, Projects, Atlas, About, Contact and a "Book a free call" button (BR-D5), `serviceType` read
  from `src/data/services.ts` (BR-D4), and ~~`HOMEPAGE_VOICE_ON = false` until the Vapi script is made broad
  (BR-G10)~~ `HOMEPAGE_VOICE_ON = true` again since 2026-10-25 (BR-G10): the Vapi assistant runs the broad script
  of offer-os `companies/fiji-solutions/site/vapi-assistant-script.md` (version v7).
- **About, Contact and `/portfolio` are broad** (2026-10-22, BR-G07). About carries the broad intro and links
  `/projects` and the home's ways to start, and keeps its one sheet-to-app link (F-D130); both H1s are unchanged
  byte for byte. Contact titles lead with the action ("Book a free 30-minute call"), and its form sends no
  `offer_slug`. `/portfolio` renders the six categories of `services.ts` with service page links only, then the
  one `PortfolioOfferLink` and the `/projects` link. The Greek titles of `/el/about` and `/el/portfolio` are his
  picks of BR-D7.
- The copy contract for all of it is offer-os `companies/fiji-solutions/site/03-copy-home.md`. Change a string
  there first.
- **The home look (2026-10-26, offer-os broad home BR-D45), after ignitech.ch.** His words: *"my websites to look
  and feel more like https://ignitech.ch"*. Every home section opens with `SectionHeading.tsx` (a small label from
  `HOME[lang].labels`, a heavy left aligned h2, an optional link at its right); sections alternate white and
  `#f7faff`; cards are large with a lift on hover; `Reveal.tsx` fades blocks in as they scroll in (hidden only once
  it has run, so crawlers and no-JS readers see everything). The client strip scrolls without end (`.marquee` in
  `globals.css`, two copies of the list, the second `aria-hidden`). The hero is one centred column (his answer, the same
  day) and the stats follow it as a bar, where IgniTech has its stats bar. His answers: no photos, keep Plus Jakarta Sans and Inter set heavier.

## ~~The one thing this site sells~~ (struck 2026-10-22, BR-G04: replaced by the block above)

~~A **free process audit** → **Build & Run** with a money-back guarantee.
`/[locale]/business-process-audit` is the page that sells; every primary CTA points at it. The
homepage's job is to hand the reader there, not to close them itself.~~
**Struck 2026-09-30 (G20, offer-os `gtm/sheet-to-app-rollout/PLAN.md` D5).** Charis, in his words:
*"leave that as it is, change only fiji solutions home page"*. Both homepages are now the hook for the **7-Day Sheet-to-App
Prototype**: their titles and H1 open with the 7-day prototype and "Pay only if you like it" (D66),
both homepage buttons scroll to the homepage's own form (`#sheet-to-app-form`,
`src/components/SheetToAppFormSection.tsx`, `presetQuestion` `homepage-sheet-to-app`), and the body
links `/offers/sheet-to-app` once. `/[locale]/business-process-audit` still sells the free process
audit, with its own guarantee, and every CTA on that page still points at its own form.

~~**No price appears anywhere on this site.** Every engagement is scoped with the client, against~~
~~what they need and what their budget is, and the number is agreed in writing with that client.~~
~~There is no list price, no rate card, no entry-offer price.~~ See rule 7.
**2026-09-30: one dated exception.** `/en/offers/sheet-to-app` and `/el/offers/sheet-to-app` publish
their price ladder in the page body, ~~and both homepages publish the same figures in one box under
the how-it-works cards (G20)~~ (struck 2026-10-22, broad home BR-G05 and BR-G07: the box left with the old
homepage, BR-D24); rule 7 records it and its source.
Superseded 2026-10-26 (offer-os seo-plan-2026-10 D-08): every offer with a set price shows it on its own page,
in the visitor's currency (euros on Greek pages); today that is sheet-to-app and Atlas. Offers without a set
price, the broad surfaces (BR-D24) and the cost posts stay without figures.

Until 2026-08-15 that page had **zero internal links** and the site sold six service categories,
six industries and thirty-two technologies. ~~Do not re-add a service list.~~ **Struck 2026-10-22 (offer-os
`gtm/broad-home-2026-10` BR-G04, decision BR-D3):** both homepages carry a six card "What we build" grid, read
from `src/data/services.ts`, and `/portfolio` renders the same six categories. The industry and technology lists
stay gone, and the eight offers still stay out of every menu, the footer and `/portfolio` (the rule below).

### The eight `/offers/*` pages: body links only, never a menu (rule rewritten 2026-09-01)

`/[locale]/offers/<slug>` — eight front-end offers, both locales, sixteen routes. They come from an
external swipe file Charis brought (`Copy of Software Development - Proven Offers.xlsx`, sheet
*Proven Offers*, columns F–M).
**2026-09-30 (G19):** offer F, `app-prototype`, is retired (offer-os `gtm/sheet-to-app-rollout/PLAN.md`
D51). Its three URLs 308 to `/offers/sheet-to-app`, the 7-Day Sheet-to-App Prototype, which is not
from the workbook, takes its place in the graph, and renders through its own layout,
`src/components/SheetToAppLanding.tsx`. The count stays eight offers and sixteen routes.

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
below Google's reporting floor in Greek. (That floor is Google's alone. A Google rank or volume does not decide
AI citation, so check such a phrase with a replay before ruling it out: "AI citation (arXiv 2610.15033)"
below, 2026-10-20.) Sources: `offer-os/gtm/keyword-research-2026-09-01.md`
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
| `/services/custom-software-development-greece` | process-automation, ai-agent, software-prototype, sheet-to-app, ai-development-sprint |
| `/services/data-analysis-greece` | ai-prototype |
| `/services/snowflake-consulting-greece` | **none, on purpose** — no offer is an honest way to buy Snowflake work |
| `/business-process-audit`, in a block **after** the form | website-seo, website-google-ads |
| `/business-process-audit`, in its own block **after** the form (2026-09-30) | sheet-to-app |
| both homepages, `Local.tsx`, two prose links | website-seo, website-google-ads |
| ~~both homepages, `Solutions.tsx`, one prose link under the price box (2026-09-30, G20)~~ removed 2026-10-22 with `Solutions.tsx` (broad home BR-G05) | ~~sheet-to-app~~ |
| both homepages, `WhatWeBuild.tsx`, the six "What we build" cards (2026-10-22, broad home BR-G05, BR-D3; links in `src/data/services.ts`) | process-automation, ai-agent, website-seo |
| both homepages, `WaysToStart.tsx`, the "Ways to start" row (2026-10-22, broad home BR-G05; `HOME_START` in `offerLinks.ts`) | sheet-to-app, software-prototype, ai-prototype, ai-development-sprint, website-google-ads |
| `/portfolio`, `PortfolioOfferLink.tsx`, one prose link under the Services cards (2026-10-08, F16, F-D133; six cards since 2026-10-22, BR-G07) | sheet-to-app |
| `/about`, `AboutPage.tsx`, one prose link in "Where to start" (2026-10-08, F16, F-D130) | sheet-to-app |
| `/tools/spreadsheet-check`, `SpreadsheetCheck.tsx`, one body link after the result (2026-10-21, offer-os `gtm/seo-loop-2026-10` S14, SL-D65) | sheet-to-app |
| ~~the navbar, its second of four links (2026-10-08, F16, F-D132)~~ removed 2026-10-22 on the `broad-home` branch (offer-os BR-D5, BR-G04) | ~~sheet-to-app, and only it~~ |
| the navbar, after "Services", and `QuickLinks`, after "Services" (2026-10-18, offer-os `gtm/atlas/DECISIONS.md` AT-D8) | atlas, and only it |
| both homepages, `AtlasHomeSection.tsx`, its own band (2026-10-18, AT-D22; after "Ways to start" since 2026-10-22, broad home BR-G05) | atlas |
| the success state of every form, `ContactForm.tsx`, "You need Atlas." (2026-10-18, AT-D9) | atlas |
| each `/offers/*` page | its parent service page (if any) + its one sibling offer |

**Still forbidden, and this half of the rule did not change.** Not in the footer. Not in `QuickLinks`.
Not in the `Services` grid on `/portfolio`, this site's one hub (six cards since 2026-10-22, BR-G07, each
linking its service pages only, through `servicePageLinks()` in `src/data/services.ts`). Eight offers in a menu, a
footer list or a hub grid **is** the service list, whatever the offers are called.
**2026-10-08, two dated exceptions, both Charis's picks in F16 of offer-os `gtm/followups-and-search`
(PLAN.md F-D132, F-D133).** The navbar's second link is the 7-Day Sheet-to-App Prototype, the offer both
homepages sell ("Swap 'Process audit' for the offer"); the navbar stays four links, "Process audit" moved
to `QuickLinks`, and **no other offer joins a menu**. `/portfolio` carries one prose link to the same
offer under the three cards (`src/components/PortfolioOfferLink.tsx`, "Yes, one prose link"); the cards
stay three. **2026-10-22 (broad home BR-G04, BR-D5, and BR-G07): the navbar link to the prototype is gone**;
the navbar is Services, Projects, Atlas, About, Contact and the "Book a free call" button, and Atlas is the
one offer in it. The `/portfolio` cards are six, with service page links only, and the prose link stays.
**2026-10-18, a third dated exception: Atlas (offer-os `gtm/atlas/DECISIONS.md` AT-D8, Charis: *"Don't put
this offer into a different offer landing page offer, but it should be somewhere."* and *"everything looks
good, yes"*).** `/offers/atlas` has a navbar link directly after "Services", outside the services list
(the navbar is five links, the five of the top block since 2026-10-22), and a `QuickLinks` entry after "Services". It is **not** in `offerLinks.ts`,
and no offer page body links it; its other inbound links are the homepage band and the thank-you line
every form shows (AT-D9). No other offer joins a menu. The check, which must print nothing:

```
grep -rn "offers/\|OfferLinks\|offerLinks\|OFFERS_BY_SERVICE\|WEBSITE_OFFERS" \
  src/components/Footer.tsx src/components/QuickLinks.tsx src/components/Services.tsx \
  "src/app/(en)/en/portfolio/page.tsx" "src/app/(el)/el/portfolio/page.tsx" | grep -v "offers/atlas"
grep -n "offers/" src/components/Navbar.tsx | grep -v "offers/atlas\|/offers/\* link"
```
(The second grep no longer skips `offers/sheet-to-app`: the navbar dropped that link on 2026-10-22, BR-D5, so
a line naming it would print now. Rewritten 2026-10-22, broad home BR-G07.)

Three further guards, all in `offerLinks.ts`: every offer has at most **one** parent, so the map is
a tree and not a mesh; the maps are keyed on literal unions, so a typo, a leading slash or a
forgotten offer is a compile error rather than a prerender crash; and anchor text is never typed by
hand — it is `offer.copy[lang].eyebrow`, the destination's own primary keyword.

**2026-10-22 (broad home BR-D3, BR-G07): the paragraph below predates the six categories.** Websites is now
one of the six cards on both homepages and on `/portfolio`. On the homepages the card links `website-seo`; on
`/portfolio` it carries no link, since offers stay off that page. There is still no
`/services/` page for website work, so the two offers keep no parent service page in `OFFERS_BY_SERVICE`.

**`website-seo` and `website-google-ads` have no parent service page, and that is an open question,
not an oversight.** The site sells three services and none of them is website work; the largest
Greek keyword either company can reach has no page of its own. A fourth `/services/` page would be
its home — and a fourth service means a fourth `Services` card and re-opening "the three things
actually sold". That is Charis's call. Until he makes it, those two are linked from the audit page,
the homepage's local section, and each other, and every comment that says so calls it an exception.

They are in `src/app/sitemap.ts` and indexable, because half-publishing a page is worse than either
publishing or not. ~~The audit is still the offer the site leads with,~~ (struck 2026-09-30, G20, D5:
the homepage leads with the sheet-to-app offer) every primary CTA on the audit page still points
at `#consultation-form`, and the audit-page block renders **after** the form so it costs nothing.

Every rule below applies to them without exception. In particular: ~~**no price** (rule 7)~~ (superseded
2026-10-26, offer-os seo-plan-2026-10 D-08: an offer with a set price shows it on its page, in the visitor's
currency; an offer without one shows no figure, rule 7), and the
**75% on five of the eight pages is a guarantee with a refund behind it**, settled against a
baseline measured with the client before work starts. It is not a claim about past results, and
rule 5 still forbids one. (Six until 2026-09-30: app-prototype carried the 75% limb and retired
that day. Sheet-to-app's guarantee is "Pay only if you like it" and carries no percentage.)

## Where things live

| What | Where |
|---|---|
| Offer economics — durations, SLA, guarantee terms | `src/lib/offer.ts`. **Change the number here, not in copy.** The guarantee's four numbers (window, cure, claim window, answer deadline) live here. **No price constant lives here~~, or anywhere~~.** Superseded 2026-10-26 (offer-os seo-plan-2026-10 D-08): an offer with a set price shows it on its own page, so its figure lives in that offer's own data file (for example `src/data/offers/atlas.ts`), never in `offer.ts`; an offer without a set price carries no figure. |
| All UI copy, both locales | `src/translations.ts` (92 keys each, kept at exact parity by `scripts/translation-parity.py`; 110 until 2026-10-22, when broad home BR-G07 deleted the 18 `services.software.*`, `services.data.*` and `services.snowflake.*` keys with the three old `/portfolio` cards, since the six categories are `src/data/services.ts`; 118 until 2026-10-22, when broad home BR-G06 deleted the eight `projects.*` keys with `Projects.tsx`, since the project copy is `src/data/projects.ts`; 141 until 2026-10-22, when broad home BR-G05 deleted the 23 `hero.*`, `challenges.*` and `solutions.*` keys of the old homepage, `hero.talk` kept; the homepage copy is `src/data/home.ts`; 137 until 2026-10-22, when broad home BR-G04 deleted `nav.offer` and added `nav.projects`, `nav.cta`, `banner.text`, `banner.link` and `banner.close`; 133 until 2026-10-08, when F16 added `nav.offer` and `nav.about`; 135 until 2026-10-18, when Atlas added `nav.atlas`; 136 until 2026-10-21, when the spreadsheet check added `nav.spreadsheetCheck`) |
| The offer page's own copy | `src/components/BusinessProcessAuditLanding.tsx`, a `Record<Language, LandingCopy>` inside the component |
| The audit form section, its CTA copy and the Calendly URL | `src/components/AuditFormSection.tsx`. Rendered by the offer page, and by the homepage until 2026-09-30 (G20, D5), so its strings live in that file. `AUDIT_CTA` feeds the offer page's five `CtaBlock`s, whose button is an in-page `#consultation-form` anchor. Give each new caller its own `presetQuestion`; it is the only lead-source marker there is. |
| The sheet-to-app offer page (2026-09-30) | Its own layout, `src/components/SheetToAppLanding.tsx` (nineteen sections from its offer-os contract, sticky mobile bar in `SheetToAppStickyCta.tsx`), copy in `src/data/offers/sheet-to-app.ts`, verbatim from offer-os `offers/fiji-solutions--sheet-to-app/03-copy.md`. Metadata and JSON-LD come from the same `src/lib/offerSchema.ts`. Its booking link is `SHEET_TO_APP_BOOKING_URL` in that data file, the existing 30-minute Calendly event (offer-os D120, 2026-09-30), the same URL as `CALENDLY_URL`. `src/lib/landing.ts` lists the routes whose Navbar is logo-only and which load no Vapi bubble. Since 2026-10-08 (F22 of offer-os `gtm/followups-and-search`, F-D161 to F-D164) S09 carries one `caseStudy` line under each story, ~~linking the shared Gamma case studies of PAP Center and New Era Learning in a new tab (`CASE_STUDY_*_URL` in the data file, each click a `cta_click`); the Greek lines say «(στα αγγλικά)».~~ 2026-10-29 (offer-os seo-plan-2026-10 D4, audit CONT-3, C-64): linking the on-site project pages `/<locale>/projects/pap-center-crm` and `/<locale>/projects/new-era-learning-platform` in a new tab (`CASE_STUDY_*_PATH` in the data file, each click still a `cta_click`); the Greek lines no longer say «(στα αγγλικά)». No page links the Gamma docs; they stay shared for outreach emails. This page has no "Work we have done" block. ~~No proof block either.~~ 2026-10-30 (offer-os seo-plan-2026-10 D13, D-129, CONT-6): between the form and the foot nav it renders `ReviewSlot` (`page="offers/sheet-to-app"`), which shows the reviews whose `project` is one the S09 case study lines link; below the form, not after S09, because a Google review's card links off site. It renders nothing until such a review exists. The AKB case study is never linked from a Fiji page. 2026-10-22 (offer-os BR-D35): the bank may now be named on Fiji in its approved sentences, as text; the case study stays unlinked. |
| ~~The homepage hook (2026-09-30, G20)~~ The broad home (2026-10-22) | **2026-10-22 (offer-os broad home BR-G05): the hook below is retired on the `broad-home` branch.** Both homepages are the broad home of offer-os `gtm/broad-home-2026-10` PLAN.md §4.1: copy in `src/data/home.ts` (typed `Record<Language, HomeCopy>`), sections `Hero`, `StatsStrip`, `ClientStrip` (`src/data/clients.ts`), `WhatWeBuild` (`src/data/services.ts`), `WaysToStart` (`HOME_START` in `offerLinks.ts`, `id="ways-to-start"`), `AtlasHomeSection`, `ProjectsGrid` (`src/data/projects.ts`), `ReviewSlot` (`src/data/reviews.ts`; ~~renders nothing since 2026-10-26, BR-D41~~ 2026-10-30, seo-plan-2026-10 D13: the card is built and shows every review in the list, still nothing while the list is empty, as it is; see rule 5), `HowWeWork`, `HomeFaq` (four ids, FAQPage from the same array), `LatestPostsSection` (both locales, the «Οδηγοί» list on `/el`), `ClosingCta` (`presetQuestion` `homepage-general`, no `offer_slug`) and `Local`. `Challenges.tsx`, `Solutions.tsx`, `SheetToAppFormSection.tsx`, `HomeLongForm.tsx`, `ContactButton.tsx`, `ContactButton2.tsx`, `src/data/homeLongForm/` and their keys are deleted; no price is left on either homepage. The homepage lead marker is `homepage-general` (`HOME_FORM_MARKER` in `ClosingCta.tsx`); `homepage-sheet-to-app` is retired with the old form, so an inbox filter on it matches nothing new (rewritten 2026-10-22, BR-G07). What follows is the record of the hook: ~~Both homepages sell the sheet-to-app offer.~~ `hero.*`, `challenges.*` and `solutions.*` in `src/translations.ts`, the body link and limit line in `src/components/Solutions.tsx`, the form in `src/components/SheetToAppFormSection.tsx` (`presetQuestion` `homepage-sheet-to-app`, `offer_slug` `sheet-to-app`, `cta_location` `home-hero`, `home-solutions-box` and `home-form-calendly`), and the long-form ids in `src/data/homeLongForm/`, all verbatim from offer-os `offers/fiji-solutions--sheet-to-app/03-copy-homepage.md`, the Greek `ti-kanoume` p2 included («Το ένα είναι ...» and «Το άλλο είναι ...», recorded in the contract's Findings item 5 on 2026-09-30, so «πρώτ-» stays within the ration of D67). ~~The Vapi voice button in the hero and the Vapi chat bubble are hidden on `/en` and `/el` (2026-09-30, G20): the assistant behind both still pitches the process audit and its guarantee, and the homepage names one guarantee (D53).~~ ~~`HOMEPAGE_VOICE_ON` in `src/lib/landing.ts` brings both back once G23's new assistant script is live in the Vapi dashboard.~~ 2026-10-04: the new script is live in the Vapi dashboard (version v5, Greek and English by voice), and `HOMEPAGE_VOICE_ON` is `true`, so both are back on `/en` and `/el`. 2026-10-22 (offer-os broad home BR-G04): ~~`false` again until BR-G10 makes the Vapi script broad.~~ 2026-10-25 (BR-G10): the broad script is live (version v7) and `HOMEPAGE_VOICE_ON` is `true`. |
| The seven workbook offer pages | One layout, `src/components/OfferLanding.tsx` (the eighth offer, sheet-to-app, has its own layout, in the row above); one bilingual data file per offer in `src/data/offers/`; two thin routes each. Since 2026-10-29 (offer-os seo-plan-2026-10 D4, CONT-3) each of the seven renders `src/components/WorkDone.tsx` after the form, just before the offer's foot nav ("Where this offer sits"), so every body link stays below the form: "Work we have done" / «Έργα που έχουμε κάνει» and the page's project links from `src/data/workDone.ts`, as do `/business-process-audit` (after the form) and the three service pages (after the outcomes); Atlas has none (AT-D19, D-92). Since 2026-10-30 (offer-os seo-plan-2026-10 D13, D-129, CONT-6) `ReviewSlot` follows `WorkDone` on each of those pages, so it is below the form too, and shows the reviews in `src/data/reviews.ts` whose `project` is one of that page's `WORK_DONE` slugs; nothing renders until one exists. Its copy is offer-os `companies/fiji-solutions/site/03-copy-home.md`, "Work we have done"; change it there first. Metadata and the Service + FAQPage JSON-LD are derived in `src/lib/offerSchema.ts` from the same object the page renders, so the marked-up FAQ cannot drift from the rendered one. **To add or change an offer, edit its data file.** Each carries its own `questionMarker`, which is the only thing telling its leads from the other seven in the shared inbox. |
| The about page (2026-10-08, F16) | `src/components/AboutPage.tsx`: copy, metadata and the AboutPage JSON-LD in one file; the photo is `public/charis-moutafidis.jpg`, his own, cropped at his word (F-D131). The JSON-LD hangs `image` on the canonical Person reference. **Since 2026-10-22 (broad home BR-G07) the copy is offer-os `companies/fiji-solutions/site/03-copy-home.md`, "About"** (until then `offers/fiji-solutions--sheet-to-app/derived/site/F16-COPY.md`): the broad intro, a link to `/projects`, the booking link, a link to the home's `#ways-to-start`, and the one sheet-to-app link (F-D130); both H1s unchanged byte for byte. The Contact page (`src/app/(en|el)/*/contact/page.tsx`, `contact.title`, `contact.subtitle*`, `contact.form.message.placeholder`) is broad from the same contract, "Contact". ~~It leads with the 7-day prototype (F-D135) and its form sends `offer_slug` `sheet-to-app`.~~ (Struck 2026-10-22, BR-G07.) Its form sends no `offer_slug` and keeps `form_location` `contact`. |
| The booking link (2026-10-22, broad home BR-G04) | `src/lib/booking.ts`, `BOOKING_URL`: the one Calendly URL. `CALENDLY_URL` (AuditFormSection) and `SHEET_TO_APP_BOOKING_URL` are aliases of it. It imports nothing, so data files can import it. |
| The six kinds of work (2026-10-22, broad home BR-G04, BR-D3, BR-D4) | `src/data/services.ts`, `SERVICES`: titles and lines per locale, the links of each card, and `schemaName`. Four surfaces read it: `serviceType` in `RootShell.tsx`, the homepages' `WhatWeBuild.tsx`, `/portfolio`'s `Services.tsx` (service page links only, through `servicePageLinks()`), and the "See also" links of each project page (`relatedOf()` in `ProjectPages.tsx`, by `ServiceKey`), so a change to a card's links moves those too. |
| The top banner (2026-10-22, broad home BR-G04) | `src/components/TopBanner.tsx`, a client component: one line and a "Book a time" link to `BOOKING_URL` (`booking_click`, `cta_location` `top-banner`), closed for the tab in `sessionStorage` inside try/catch, not sticky, hidden on `LANDING_PATHS` and both `business-process-audit` pages (BR-D9), where the navbar's call button hides too. Its copy is `banner.*` in `src/translations.ts`. |
| Atlas (2026-10-18) | The apply-only top tier, offer-os `offers/fiji-solutions--atlas`, decisions `gtm/atlas/DECISIONS.md` AT-D1 to AT-D32. Layout `src/components/AtlasLanding.tsx`, the two-step form `src/components/AtlasApplicationForm.tsx`, copy in `src/data/offers/atlas.ts`, verbatim from its `03-copy.md`. Both form steps POST through `src/lib/formDelivery.ts`, the endpoint every form uses (AT-D12): step 1 as its own email marked incomplete (`atlas-step1`), step 2 as the complete application (`atlas`, `atlas-not-yet` or `atlas-no`, AT-D23). No reply promise on any Atlas surface (AT-D21), so its form drops the site consent sentence and carries AT-D27's own privacy line above the submit button on both steps ("We use your details to review your application. Privacy policy"). The "You need Atlas." line lives in `ContactForm.tsx` and stays on screen after the success message hides (AT-D9); it shows after the Sheet-to-App forms are sent too (AT-D29), never in a page body. Its two routes render `src/components/AtlasFooter.tsx` (privacy, legal and the copyright line only, 44px tap targets) in place of the shared `Footer`. ~~Its form fires no Google Ads conversion (QA round 1, 2026-10-18).~~ Changed 2026-10-18: the complete send calls `reportConversion()` beside `contact_form_submit`, as `ContactForm` does on every other form, so all forms match; drop it from both in one change. |
| The projects pages (2026-10-22, broad home BR-G06) | `/[locale]/projects` and `/[locale]/projects/<slug>`, the same slug in both locales, `generateStaticParams` with `dynamicParams = false`. Data in `src/data/projects.ts` (the Project shape of offer-os `gtm/broad-home-2026-10` PLAN.md §9: a `permission` record per project, facts, the three sections, links, `quote: null`, no images until cleared), copied word for word from offer-os `companies/fiji-solutions/site/03-copy-home.md`, "Projects". Layout and metadata in `src/components/ProjectPages.tsx`; ~~no page level JSON-LD~~ (2026-10-26, offer-os seo-plan-2026-10 D-13: this describes the pages as built; D-13 narrows the GEO freeze, so Google-used types such as BreadcrumbList may now be added here, while FAQ markup and anything AI-only stay out; ~~goals C5, C10 and C14 decide~~; done 2026-10-28, offer-os seo-plan-2026-10 C5: the project pages carry a BreadcrumbList). The homepage grid (`HOME_PROJECTS`), the client strip, the "Web and mobile apps" card (`projectSlug` in `services.ts`) and `/portfolio` (`PortfolioProjectsLink.tsx`, in place of the old `Projects.tsx` cards) link them; since 2026-10-29 (offer-os seo-plan-2026-10 D4) so do the offer, audit and service pages (`WorkDone.tsx`) and the sheet-to-app S09 lines. `src/lib/routes.ts` lists one sitemap route per project from the same data, and `next.config.ts` redirects `/projects` and `/projects/:slug` to `/en`. Ο Τόπος Μου says "on staging" until otoposmou.gr switches. |
| Form delivery | `src/lib/formDelivery.ts`: the endpoint URL and `sendForm()`. `ContactForm` and the Atlas form both call it. |
| Canonical + hreflang | `src/lib/alternates.ts` — `buildAlternates(path, lang)` |
| Web fonts (2026-10-28, offer-os seo-plan-2026-10 C2) | Declared in each root layout, `src/app/(en)/layout.tsx` and `src/app/(el)/layout.tsx`, and passed to `RootShell` as `fonts`; only the Greek tree preloads Inter's Greek file (`subsets` sets the preloads only; every subset's @font-face stays in both trees' CSS and loads on demand), and there Plus Jakarta Sans has no Arial fallback, so Greek headings fall through to Inter (`fontFamily.display` in `tailwind.config.ts`); a Greek word inside an English-tree heading still takes Arial, on purpose, since the fallback holds English heading CLS at 0. Keep Next at 15.5 or later: 15.4.11 put Vercel's `?dpl=` id on the font preload links but not on the CSS `url()`, so every font downloaded twice (audit PERF-4). |
| Consent gate | `src/lib/useConsent.ts` + `src/components/Analytics.tsx` |
| GA4 event names, `trackEvent()` | `src/utils/gtag.ts`. Server components send clicks through `src/components/TrackedLink.tsx`. |
| Sitemap | `src/app/sitemap.ts`, generated from the route list in `src/lib/routes.ts` (moved there 2026-10-08, F17). `routeLastmod()` gives a page its own lastmod: the sheet-to-app pages print it as "Updated <date>" at the page end and emit it as `dateModified`, so bump the lastmod and the page date moves with it. |
| Site-wide JSON-LD (2026-10-08, F17) | `src/app/RootShell.tsx` emits the ProfessionalService node (`areaServed` Greece, Thessaloniki, United States) and a WebSite node (`#website`, `alternateName` fijisolutions.net). `src/lib/offerSchema.ts` gives every offer page a WebPage node (`isPartOf` the WebSite) with a two-item BreadcrumbList, and `inLanguage` on its FAQPage. The sheet-to-app pages have their own preview images, `public/og/sheet-to-app-en.png` and `-el.png`, whose words are the offer name and the H1, with no price (rule 7). |

### Diagrams in posts (2026-10-30, offer-os `gtm/seo-plan-2026-10` D10, AI-4, IMG-6, D-115 to D-118)

A post shows diagrams by id: its main one as `hero: '<id>'` (rendered under the title; its 1200x630 card
`public/blog/figures/<id>.og.jpg` is the post's og:image and first Article image, D-116) and others as
`{type: 'figure', figure: '<id>'}` blocks. Language, size, alt text, caption and a `use` line for the SEO loop live once
in `src/data/blog-figures.json`; the SVG source is `design/blog-figures/<id>.svg`, rendered to `public/blog/figures/`
by offer-os `gtm/seo-plan-2026-10/plan/bin/d10-render.py` (`--og` for a hero's card). Rules for a new one:
`plan/data/evidence/D10/STYLE.md` there. Every post has a hero except the two English trade posts
(`crew-schedule-change-order-job-tracker-app`, `job-shop-scheduling-work-order-quote-app`), left to the Sheet-to-App
rework's G5 (D-117). The loop may place a listed diagram but never sets `hero`; `scripts/seo-content-check.py` refuses
an id not in the JSON.

## The spreadsheet check under `/tools/*` (added 2026-10-21)

The spreadsheet check, `/en/tools/spreadsheet-check` and `/el/tools/spreadsheet-check` (offer-os
`gtm/seo-loop-2026-10` S14, SL-D61 to SL-D68), built after the Peak Code migration check of S13. One client
component, `src/components/SpreadsheetCheck.tsx`, renders both locales from `src/data/tools/spreadsheetCheck.ts`:
edit the data file, never a twin. Eleven questions about how a team uses its shared Excel or Google Sheets file; the
result lists each answer's findings in two lanes, "In the sheet you have" (what Microsoft and Google write on their own
help pages) and "In an app built around your sheet" (our facts, each with its F-fiji id), with no score, no verdict and
no threshold, since no page we read names one. Answers stay in the browser: no form, no endpoint, no email. The page
never says "free" or «δωρεάν» (SL-D64). Its one offer link goes to `/offers/sheet-to-app` with the offer's eyebrow
as anchor text and fires the existing `cta_click` with `cta_location: 'spreadsheet_check'` and `offer_slug:
'sheet-to-app'`. JSON-LD is one `BreadcrumbList` (`src/lib/spreadsheetCheckPage.ts`), under the GEO rule below. Every
vendor statement cites a key of `SOURCES` and was checked on 2026-10-21, each locale against the help page in its own
language where one exists; change one only after its page is read again, and move the "checked on" sentence in
`SpreadsheetCheck.tsx` with it. Inbound links: `QuickLinks` (`nav.spreadsheetCheck`) and a `cta` block in
`crew-schedule-change-order-job-tracker-app` and `job-shop-scheduling-work-order-quote-app`. The homepages and the
sheet-to-app page stay as they are (offer-os `gtm/geo-retrieval-2026-10` GR-D1). 2026-10-22: GR-D1 is lifted for
the homepages by the broad home plan (offer-os `gtm/broad-home-2026-10` BR-D23); it still binds SEO work on the
sheet-to-app offer pages.

## AI citation (arXiv 2610.15033)

Added 2026-10-20 by offer-os `gtm/geo-retrieval-2026-10` G07 (its `PLAN.md` §1 and `RESEARCH.md`). The study,
Chen and Koudas, 10 October 2026, read 158,099 answers of ChatGPT, Gemini and Perplexity to commercial questions
and replayed the questions through the engines' APIs. Four rules follow from it for every chat in this repo:

1. **Titles and paragraphs use the buyer's question words.** Within one site, matching in meaning the questions
   people ask is the one content property that goes with more citations.
2. **One page per distinct question.** The engines rewrite every question into new sub-queries on every answer
   and rank pages by match in meaning, so each page that answers its own question is one more chance to be
   retrieved. The study did not test near-identical pages, so every page answers a question of its own.
3. ~~**Per page markup is frozen as a GEO lever.** No new FAQ markup, schema, summary boxes, speed passes or~~
   ~~llms.txt to lift one page over its siblings.~~ (Narrowed 2026-10-26, D-13, see the note at the end of this item.) In the study the first four line up with differences between
   websites only, and it does not study llms.txt. What exists stays: the site-level ProfessionalService and WebSite nodes in `RootShell.tsx` (the Person is a reference to the canonical node on charismoutafidis.com), the per offer FAQPage from `src/lib/offerSchema.ts`, and `src/lib/blogSchema.ts`.
   2026-10-22 (offer-os broad home BR-D6, BR-G05): the homepages' FAQPage stays, built from the rendered
   `HomeFaq` array, which keeps four of its existing ids, reworded broad. Three questions left and none was
   added, ~~so the freeze holds~~.
   Superseded 2026-10-26 (offer-os seo-plan-2026-10 D-13): the freeze is narrowed. Fix broken markup, add
   schema types Google itself uses (BreadcrumbList, Article images, SoftwareApplication and similar) and fix slow
   pages; nothing is added only for AI tools (no llms.txt and similar), and no FAQ markup or summary boxes are
   added as a GEO lever. ~~Goals C5, C10 and C14 of that plan carry it out.~~ Done for this site 2026-10-28
   (seo-plan-2026-10 C5, D-70): BreadcrumbList on project pages, url, @id and BreadcrumbList on Service nodes,
   an image on Article nodes, WebApplication on the spreadsheet check. ~~Goals C10 and C14 are still open.~~ C10 done
   2026-10-28: new FAQPage nodes are blocked in code, the blog and offer helpers emit one only for the pages listed in
   `src/lib/faqFreeze.ts` (the pages that had one that day; never add an entry). C14 is the personal site's goal.
4. **Retrieval is observed.** The plan's question set and runs (`offer-os/gtm/geo-retrieval-2026-10/questions/`
   and `runs/`) record which sub-queries the engines issue and which of our pages come back.

**Google rank does not decide AI citation.** Retrieval by ChatGPT's own search explains 32% of the variation
between pages of one website, page properties 2.8%, and the engines' searches rarely return what Google or Bing
return.
A page is therefore not ruled out because it cannot reach Google's first page. Low or zero Google volume is also
no proof that the engines skip that sub-query: check such a phrase with a replay before investing in it or
dropping it.

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
   `useConsent()` returns `granted`. There is no second path that loads Google Ads, Google
   Analytics or Leadsy.
   The Vapi chat/voice widget is *not* behind the gate — it is a visible feature, and the privacy
   policy says so explicitly. Keep those two statements in sync.
   **2026-09-30: GA4 now exists behind the same gate** (Charis's decision that day, O17: a proper
   Google Analytics setup before the cold emails). One gtag.js load configures Google Ads and,
   when `NEXT_PUBLIC_GA_MEASUREMENT_ID` was set at build time, GA4. The ID lives in Vercel only
   and is never committed; locally it is unset, so GA4 does nothing under `npm run dev`.
   `trackEvent()` in `src/utils/gtag.ts` checks consent again before every hit and sends to GA4
   alone (`send_to`); `reportConversion()` checks consent too. When consent leaves 'granted'
   after gtag.js has loaded (in this tab, or in another tab through the 'storage' event),
   Analytics.tsx switches both Google tags off, sets consent mode to denied and reloads the page,
   as "Clear my choice" on the privacy page does, so gtag.js and Leadsy are gone and the banner
   returns. Events:
   `contact_form_submit` (ContactForm success, every form; params `locale`, `form_location` = the
   question marker, `offer_slug` when given; the heard-about answer goes to the inbox only), `cta_click` (in-page CTAs, and since 2026-10-08 the two S09 case study links on the sheet-to-app pages;
   `cta_location`, `locale`, `offer_slug`) and `booking_click` (the Calendly link; same params).
   The names match Peak Code's and GA4 pins them from the first hit, so do not rename one. The
   privacy policy names Google Analytics in both locales; keep it in sync with what loads.

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

5. **No claim without arithmetic behind it.** `proof/` in the offer-os knowledge base ~~is empty:~~
   there are ~~no case studies,~~ no testimonials, no measured client results, no certifications.
   Superseded 2026-10-26 (offer-os seo-plan-2026-10 D-09): `proof/` now holds the PAP Center and New Era
   Learning case studies (neither records a measured number) and the client logo record; every client shown on the sites approved being named,
   and case studies and proof blocks may name them. The rest of this rule stands: no figure, outcome or
   capacity number the repo cannot back.
   Do not publish a percentage, an outcome figure, a client name or a capacity number that the
   repo cannot back. A capacity claim and a "dated waitlist" were deleted on 2026-08-15 for
   exactly this reason.
   2026-09-30 (G20): the homepage's limit line, "We take on 3 prototypes a month", is his own
   (offer-os `gtm/sheet-to-app-rollout/PLAN.md` D75), which is what backs it. It left the homepage with
   `Solutions.tsx` on 2026-10-22 (broad home BR-G05).
   **2026-10-22 (offer-os `gtm/broad-home-2026-10` BR-D26, BR-D27, BR-D34, BR-D35): named clients and the
   review placeholder.** Clients may be named in the client strip, on the projects pages and on About, each
   with a permission record (`permission` in `src/data/projects.ts`, `src/data/clients.ts`) that names its
   date and source; his yes for every client of BR-D26 is on file (BR-D34). The proof records behind PAP
   Center and New Era Learning are in offer-os `companies/fiji-solutions/proof/`. Every project fact on a page
   is one the contract carries, with no number the record lacks. ~~The homepages' review slot is a placeholder
   card (`src/data/reviews.ts`, `kind: 'placeholder'`): no stars, no quote, no avatar, no count or average,
   and no Review or AggregateRating markup in any state, until a real review with its date and source link
   replaces it (BR-G29).~~ **2026-10-26 (offer-os broad home BR-G25, BR-D41): the placeholder card left both
   homepages** at his word ("Remove this section from the website where you prompt people to give us a google
   review, makes no sense"). `src/data/reviews.ts` is empty and `ReviewSlot.tsx` renders nothing until a real
   review arrives with its date and source link (BR-G29); no stars, no count or average, and no Review or
   AggregateRating markup in any state. **2026-10-30 (offer-os gtm/seo-plan-2026-10 D13, D-129, CONT-6): the card
   is built, so the first real review is one entry in `src/data/reviews.ts`** (word for word, with its date and
   source, BR-D27; asking for it stays his). Both homes show every review; with a `project` slug it also shows on
   that project's page and on every offer, audit and service page that links that project (`WORK_DONE`, or the
   sheet-to-app S09 lines), 12 routes per locale; Atlas never (AT-D19, D-92). The visible words are
   `REVIEWS_COPY` in the same file ("What clients say" / «Τι λένε οι πελάτες»), with no offer-os copy row yet.
   The list is still empty, so nothing renders today. The `quote` field of `src/data/projects.ts` left the same
   day; reviews.ts is the one record. Since the same day the client strip shows the cleared logos
   (`public/clients/`, proof record in offer-os `companies/fiji-solutions/proof/2026-10-client-logos.md`), and a
   project page may show a cleared screenshot (`public/screenshots/`, `mockData` or `publicPage` in
   `src/data/projects.ts`; a path under `/projects/` would hit the redirect in `next.config.ts`).

6. **Speed claims carry their anchor.** The build delivers the first automation within
   `FIRST_FIX_DAYS` days **of the build starting** — not of the reader's first contact, which is
   at least an audit plus a scoping round earlier. Every headline that states the number must
   state the anchor with it.
   2026-09-30 (G19, G20, D66): the sheet-to-app pages and ~~both homepages~~ state "7 days", anchored
   to the audit call ("after the audit call", «μετά την πρώτη κλήση») in the H1 and in each
   description. (Struck 2026-10-22, broad home BR-G05 and BR-G07: the homepages, About and Contact are broad
   and state no "7 days" in an H1, title or description; About's one sheet-to-app line names "the 7-day
   prototype" as the offer's name.)
   2026-10-20 (offer-os `gtm/geo-retrieval-2026-10` G06, his pick "Buyer phrase, no number"): the
   seven workbook offer titles name the service in the buyer's words and carry no number, so no
   title says kickoff. The number and its kickoff anchor stay together in each H1, description and
   ogAlt. A title that brings a number back brings the anchor with it.

7. ~~**Never publish a price.** Not a figure, not a range, not a "from", not a rate card, not a~~
   ~~deal-size band, in either locale. Pricing is scoped per client against their needs and their~~
   ~~budget, and agreed in writing with that client. The page may say *that* the price is agreed in~~
   ~~writing before anything is built; it may never say what it is.~~ If a number is needed for a
   constant, that is a sign the copy is wrong, not that `offer.ts` needs a new export.
   **Superseded 2026-10-26 (offer-os seo-plan-2026-10 D-08): an offer with a set price keeps showing it,
   in the visitor's currency (euros on Greek pages).** The struck words still hold for every offer without
   a set price, for the broad surfaces (BR-D24: homepages, About, Contact, `/portfolio`, the projects
   pages, the top banner) and for the cost posts, which link the priced offer instead. The sub-rules
   below (on the sheet-to-app pages never in the hero or an FAQ answer; on every page never in metadata or JSON-LD; no price constant in `offer.ts`) are not
   touched by D-08 and stay. ~~Goal C5 of that plan (Fiji ONP-5) moves the `/el` figures to euros; until~~
   ~~then the Greek pages show the dollar figures as they are.~~ Done 2026-10-28 (seo-plan-2026-10 C5, D-68,
   D-71): the Greek pages show the same numbers in euros.
   **Dated exception, 2026-09-30, ~~for two pages only~~: `/en/offers/sheet-to-app` and
   `/el/offers/sheet-to-app`.** Charis, 2026-09-27, in his words: *"If you want to make the prices
   public and the whole plan public on the website, you can do that if you want."* Asked whether the
   prices go on the Fiji pages, he picked "The whole ladder". The figures are his, ~~in dollars~~
   (superseded 2026-10-26, D-08: in dollars on `/en`, in euros on `/el`, goal C5; done 2026-10-28, D-68)
   (PLAN.md D69). Source:
   offer-os `gtm/sheet-to-app-rollout/PLAN.md` D68 and D69. D68 names a "What it costs" section
   (S12) and no figure in the hero. The close (S19) also carries figures, because that offer's
   approved `03-copy.md` places them in S12 and in the S19 close; D68 keeps figures out of the hero,
   the FAQ and every email, so S19 stands as approved. D68 also sets that the figures are re-confirmed with
   Charis after the dry runs, before the deploy (a row of the ship-day table). On those two pages the
   prices appear in the body only, exactly as their `03-copy.md` gives them: never in the hero, in an FAQ answer, in metadata or in any JSON-LD (`offerSchema.ts` still
   emits no `offers` node and no price). ~~Every other page on the site keeps this rule unchanged,~~
   (superseded 2026-10-26, D-08: every other page without a set price keeps it) and
   still no price constant lives in `offer.ts`.
   **Dated exception, 2026-10-18, for Atlas only (offer-os `gtm/atlas/DECISIONS.md` AT-D2).** Charis:
   *"We can charge 100,000 in Greece, so 100,000 in Fiji Solutions"*, *"100k on whatever currency we
   have"*, and to "From or flat?": *"from"*. `/en/offers/atlas` and `/el/offers/atlas` publish "From USD
   100,000" / «Από 100.000 $» (2026-10-26, offer-os seo-plan-2026-10 D-08: the Greek page is to show the figure in euros;
   ~~goal C5 carries it out, until then the dollar figure stays as it is~~; done 2026-10-28, seo-plan-2026-10 C5,
   D-71: the Greek page shows «Από 100.000 €») in the hero, the stack total line, the close and the form's budget
   question, and its stack shows each part's stated value (AT-D18, AT-D20). ~~The homepage Atlas band
   (`AtlasHomeSection.tsx`) carries the same from-figure once.~~ Corrected 2026-10-22 (broad home BR-G07):
   the homepage Atlas band names no price, since AT-D34 of 2026-10-18 moved the figure to after the value
   stack on the Atlas page, and no surface outside it shows the price. Never in metadata or JSON-LD
   (`offerSchema.ts` emits no `offers` node for it either). No guarantee and no payment terms appear
   on any Atlas surface (AT-D4). ~~Every other page keeps this rule unchanged.~~ Superseded 2026-10-26
   (offer-os seo-plan-2026-10 D-08): every other page without a set price keeps this rule; a priced offer
   shows its price.
   ~~**Extended 2026-09-30 (G20) to both homepages, one slot only.**~~ **Struck 2026-10-22 (offer-os
   `gtm/broad-home-2026-10` BR-D24, BR-G05 and BR-G07): both homepages carry no price.** His words: *"these
   prices are for the specific offer"*. The two exceptions above, sheet-to-app and Atlas, stay; ~~every other~~
   ~~page keeps this rule~~ (superseded 2026-10-26, D-08: every page without a set price keeps this rule), About, Contact, `/portfolio`, the projects pages and the top banner included. What
   the extension said, for the record: the box under the three
   how-it-works cards (`solutions.cta.description` in `src/translations.ts`), as offer-os
   `offers/fiji-solutions--sheet-to-app/03-copy-homepage.md` places the figures (D68: the homepage
   carries the figures in one slot). Never in the homepage hero, metadata, FAQ answers (they feed
   the FAQPage JSON-LD), the footer or the RootShell strings. The Greek figures carry a no-break
   space before «$». The homepage's other numbers are typed as that file gives them, a dated
   exception recorded in the `translations.ts` header.

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
  and the homepage card, and the ladder went from three steps to two. Do not re-add the step or its price.
  ~~Do not re-add a "priced middle rung" to bridge the gap between the free audit and the build.
  The gap is bridged by scoping the build with the client, which is what step 2 now says.~~
  **The two sentences above, on the priced middle rung and on scoping, were struck 2026-09-30 (G20, offer-os `gtm/sheet-to-app-rollout/PLAN.md` D5).**
  Charis, in his words: *"leave that as it is, change only fiji solutions home page"*. The homepage now sells a priced prototype,
  the 7-Day Sheet-to-App Prototype, with its figures in one box (rule 7). The record above, that
  the Discovery Sprint and its price were invented and falsely attributed to him, stays as written.

- ~~**The homepage H1 stands as written, and this is not a bug to re-open.**~~ **Struck
  2026-09-30 (G20, offer-os `gtm/sheet-to-app-rollout/PLAN.md` D5 and D66).** Charis, in his words:
  *"leave that as it is, change only fiji solutions home page"*, and for the headline: *"literally the first word that someone
  should read is "prototype within 7 days. You pay only if you like it.""* Both H1s now open on
  the prototype, 7 days after the audit call, and "Pay only if you like it". This bullet's body sits
  at the end of the Greek copy bullet below and is struck there with the same date.
- **prerender.io is dead as of 2026-09-01 and must not be re-added.** `www.fijisolutions.net` was
  registered in that account (since Aug 2025), but this project never proxied through it (and
  until 2026-09-30 had no environment variables at all; it now has exactly one,
  `NEXT_PUBLIC_GA_MEASUREMENT_ID`, set in Vercel and deliberately absent from the repo): Googlebot and a browser receive byte-identical HTML on every
  page, which is the test that caught the problem on the Peak Code site. The account's plan is
  cancelled and its API token regenerated.
- **The blog (added 2026-09-01; Greek only, with `/en/blog` noindex, until 2026-10-12, when F20 below filled
  `blogData.en` and made `/en/blog` indexable; this line was corrected 2026-10-20, offer-os
  `gtm/geo-retrieval-2026-10` G07).** Posts are
  typed blocks (`src/types/blog.ts`), rendered by `BlogPost.tsx`, with metadata, canonical,
  hreflang and JSON-LD derived in `src/lib/blogSchema.ts`. It targets «κατασκευή ιστοσελίδων»
  (2,900/mo) and «προώθηση ιστοσελίδων» (a rising trajectory, **not** 1,600 — see above); every
  Greek automation and AI phrase measured at or near zero on Google (no proof the AI engines skip them:
  see "AI citation (arXiv 2610.15033)" above).
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
  **2026-10-12 (F20 of offer-os `gtm/followups-and-search`, F-D173, F-D176): `blogData.en` is filled.**
  Two original English answer articles (`how-much-does-it-cost-to-turn-a-spreadsheet-into-an-app`,
  `appsheet-glide-or-a-developer`) are in `src/data/blog/` and in `blogData.en`, so `/en/blog` is now
  indexable. The three were undone together in this commit: both index pages use
  `buildAlternates('/blog', ...)`; `src/app/sitemap.ts` lists the English posts and gives both `/blog`
  index entries `hreflangMap('/blog')`; the Greek index names `en`. The POSTS still carry no `twinSlug`
  and stay self-referential (no post has a cross-locale twin), which is why `blogSchema` still does not
  call `buildAlternates()`. The Greek posts were not translated. No price in the posts (rule 7): the cost
  article links `/en/offers/sheet-to-app#s12-what-it-costs` for the figures.
  **2026-10-12 (F21 of the same plan, F-D177 to F-D179): two more English posts join `blogData.en`**,
  `crew-schedule-change-order-job-tracker-app` and `job-shop-scheduling-work-order-quote-app`: niche pages in
  the job words construction subs and machine shops type, each "when the spreadsheet stops working, here is
  what the app does", linking the offer page. Same conventions as the F20 pair (self-referential, no price,
  no client named, link `#s12-what-it-costs`). They are prerendered paths under the existing `/en/blog/[slug]`
  route, so the route count stays 42.
  **2026-10-19 (offer-os `gtm/seo-loop-2026-10` S01, O2): `/en` links the newest English posts.**
  `src/components/LatestPostsSection.tsx` renders three `BlogCard`s (titles as `h3`, through BlogCard's
  `headingLevel` prop) and one link to `/en/blog`, after `HomeLongForm` on the English homepage only. The
  posts are picked by `publishedAt`, newest first, so a new English post shows up there with no edit. The
  Greek homepage keeps its prose links in `HomeLongForm`. **2026-10-22 (broad home BR-G05, BR-D8):
  `HomeLongForm` is gone; `LatestPostsSection` renders on both homepages (prop `'en' | 'el'`), and `/el` adds a
  short «Οδηγοί» list of Greek posts under it.**
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
  `/offers/ai-development-sprint` is a URL and stays as it is. ~~It promises the first
  process automated within `FIRST_FIX_DAYS` days "or we pay your money back". No delivery
  guarantee exists: the only refund in `offer.ts` triggers on payback failure over six months
  from go-live, the amount is the build fee, and the Solutions card two screens down calls the
  same 30 days a "target". Both conflicts were put to Charis on 2026-08-30, with the options of
  narrowing the headline or adding a delivery clause to the contract, and he chose to leave it
  as written knowing that. He had already asked for this wording twice before that (see
  `7cf97a8`). It is a decision, not an oversight. Do not rewrite it and do not raise it again.~~
  **Struck 2026-09-30 (G20, D5, D66):** these sentences are the body of the homepage H1 bullet
  above, moved here by an earlier edit, and are struck with it.

- ~~**The Greek homepage title tag is the local one; the H1 is still the promise (2026-09-01).**
  `/el` now titles itself «Εταιρεία λογισμικού στη Θεσσαλονίκη | Fiji Solutions» and describes
  itself with the category, the city and «κατασκευή ιστοσελίδων». The **H1 did not move** — the
  bullet above stands. Retargeting the H1 at the website money term would make this site claim to
  be a web agency, which is a positioning decision only Charis can take, and it has not been put
  to him. The English homepage keeps its promise-led title on purpose: English in Greece is
  measured dead (`software company thessaloniki`, `software development greece` and
  `custom software development greece` all return no data).~~
  **Struck 2026-09-30 (G20, offer-os `gtm/sheet-to-app-rollout/PLAN.md` D66).** Charis, in his
  words: *"literally the first word that someone should read is "prototype within 7 days. You pay
  only if you like it.""* Every title and both H1s now open with the 7-day prototype and "Pay only
  if you like it". The Greek title is «Το πρωτότυπό σου σε 7 μέρες. Πληρώνεις μόνο αν σου αρέσει»,
  and Thessaloniki stays in the Greek description and in the Local section.
  **2026-10-22 (offer-os broad home BR-D7, BR-D28, BR-G04 and BR-G05):** the titles and H1s are broad again.
  `/el` is titled «Εταιρεία λογισμικού στη Θεσσαλονίκη | Fiji Solutions» (his pick) and `/en` "Custom software
  company in Thessaloniki | Fiji Solutions"; the H1s are the approved headlines of BR-D28. `/el/about` and
  `/el/portfolio` carry their own titles (BR-D7), so the three pages do not compete for one phrase.

- **The `geo` in `RootShell.tsx` was wrong by ~10 km and is corrected (2026-09-01).** It pointed at
  Πυλαία, postcode 570 01 — a different municipality from the address on the same schema node. It
  is now the Porto Center building on Νικηφόρου Ουρανού at 546 27, which the published address
  names. ✅ **Confirmed against the Google Business Profile pin on 2026-09-01** — 40.643639,
  22.912267 lands on Porto Center at Νικηφόρου Ουρανού and matches the profile address, so the
  `TODO(charis)` that used to sit here is closed. The node carries **no**
  `priceRange` (rule 7), **no** `aggregateRating`/`review` (zero Google reviews), ~~**no**
  `openingHoursSpecification` (the only hours on record are the GBP default "Open 24 hours")~~
  (closed 2026-10-27, offer-os `gtm/seo-plan-2026-10` D-35 and B9: he is available 24/7, so the node now
  carries `openingHoursSpecification` for all seven days 00:00 to 23:59, mirroring the profile's "Open 24
  hours", and its `sameAs` holds the Business Profile's cid URL) and
  **no** `vatID` (the number on `/legal` is the partner's personal ΑΦΜ). ~~`serviceType` stays at
  three, matching the rendered «Τρία πράγματα» — the two website offers are linked from page
  bodies, not declared as a fourth and fifth service.~~ **Struck 2026-10-22 (offer-os
  `gtm/broad-home-2026-10` BR-G04, decision BR-D4):** `serviceType` lists the six `schemaName` values of
  `src/data/services.ts`, the same six categories the homepages' "What we build" grid renders, so the
  machine readable list and the visible one still match.

- **Do not write an attribution you cannot source.** No "ratified by", "confirmed by" or
  "approved by Charis" goes into this repo unless he said it in his own words. The €2,400 survived
  four sessions because each one read the previous one's confirmation and believed it. Use
  `TODO(charis)` instead. This is the mistake that cost the most here.

## Open, and only Charis can close them

- ~~No proof asset exists.~~ 2026-10-22: named clients and project pages exist (rule 5); no review and no
  measured result exist yet. 2026-10-30 (seo-plan-2026-10 D13): the code for a review is ready (rule 5), so the
  gap is only the review itself, which is his to ask for (D-129). One client willing to publish one measured before/after with a date is
  the highest-value thing missing from every page.
- The ICP is **half named**. The buyer who signs is the owner/founder, and the site now says so
  by symptom: the owner whose business runs on retyped data, late follow-ups, and one person who
  knows how everything works. Company size, sector and trigger event are still unstated. Do not
  invent them, and do not write a who-this-is-not-for section until they exist — an exclusion
  list without a sector and a size is invented positioning.

## Commands

```
npm run dev     # turbopack
npm run build   # must stay at 50 routes (the 4 /projects routes added 2026-10-22, broad home BR-G06, over the 46 of: 23 + the 16 /offers/* pages added 2026-08-31 + the 2 /about pages added 2026-10-08 + the /en/blog/[slug] route, which appears once blogData.en has posts, added 2026-10-12, F20 + the 2 /offers/atlas pages added 2026-10-18 + the 2 /tools/spreadsheet-check pages added 2026-10-21)
npm run lint

npm run build && python3 scripts/hreflang-parity.py   # AFTER a build, always
python3 scripts/hreflang-parity.py --selftest
python3 scripts/no-shipped-dashes.py
```

**The SEO loop's gate (2026-10-19, offer-os `gtm/seo-loop-2026-10` S03).** `.github/workflows/seo-gates.yml`
runs on every push to `seo/**`, one job named `seo-gates`. A loop branch may change only the paths in
`scripts/seo-allowlist.txt` as `main` holds it, never `.github/` or `scripts/`, and may add no price:
`scripts/pricecheck.py --diff origin/main` reads only the lines the branch adds, because `main` carries
prices on purpose. Then the checkers above run, taken from `main`, and the build. `pricecheck.py` is
byte-identical in both company website repos.

```
python3 scripts/pricecheck.py --selftest          # fixtures, a diff run in a temp repo, five sabotages
python3 scripts/pricecheck.py --diff origin/main  # the lines this branch adds
```

**The SEO loop's merge (2026-10-19, offer-os `gtm/seo-loop-2026-10` S04).** A ruleset on `main` requires a
pull request and a passing `seo-gates` check from GitHub Actions; force pushes and deletion are blocked. The
repository admin role bypasses it, so his direct pushes and the other plans' pushes work as before. The loop
pushes as the GitHub App `fiji-seo-loop`, which has no workflow permission and no bypass.
`.github/workflows/seo-merge.yml` runs from `main` after `seo-gates` passes, checks the branch again (pushed by
the App, tip unchanged, holds all of `main`, `.github/` and `scripts/` equal to `main`, paths on the allowlist)
and squash merges it; the merge deploys. A pull request from any other branch waits on `seo-gates` for ever:
merge it with the admin bypass, or push to `main` directly.

**The SEO loop's post checks (2026-10-19, offer-os `gtm/seo-loop-2026-10` S08).** A post is data and nothing
else. `scripts/seo-content-check.py --diff origin/main` admits a loop branch only when its changed post is one
literal of the `BlogPost` shape (no identifier, call, template or spread), every `href` and source `url` is a site
path or `https://` on a host in `scripts/seo-hosts.txt`, no string holds `<` or `>`, and nothing beside the post
changed. Every `application/ld+json` script renders through `jsonLd()` in `src/lib/jsonLd.ts`, which writes `<`,
`>`, `&`, U+2028 and U+2029 as JSON escapes, so a title holding `</script>` stays inside its tag;
`scripts/jsonld-escape-check.py` holds every page to it in the source and in the built pages, in `gates.yml` and
in `seo-gates.yml`. Use `jsonLd(...)` for any new JSON-LD script, never `JSON.stringify`. `vercel.json` turns off
Vercel previews for `seo/**` branches; `main` deploys as before. Both checkers are byte-identical in the two
company website repos.

```
python3 scripts/seo-content-check.py --selftest
python3 scripts/jsonld-escape-check.py --selftest
python3 scripts/jsonld-escape-check.py                          # the source
npm run build && python3 scripts/jsonld-escape-check.py --built .next/server/app
```

`scripts/hreflang-parity.py` asserts the built pages and the built sitemap declare the SAME
hreflang set for the same URL. It exists because until 2026-09-03 they did not: `sitemap.ts` built
its own copy of the map with `{en, el}` and stopped, so every page published three values and the
sitemap published two, on all 34 route entries, with x-default the one missing.

⚠️ **That defect was known, written down, and could not go red here.** The note lived in
`charismoutafidis-com/src/app/sitemap.ts`, which says of this site: *"its sitemap omits x-default
while its pages emit one."* Separate repo, separate remote, so nothing in this one could see it.
Both files now call one exported `hreflangMap()`, and the script checks the result from outside.

It reads the BUILT artifact, and it lowercases both sides before comparing, because Next emits the
React prop name `hrefLang` in page HTML while the sitemap uses the lowercase attribute. A
case-sensitive grep over the pages returns zero and reports a correct site as having no hreflang at
all, which is a trap this estate has already fallen into once.

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
python3 scripts/no-shipped-dashes.py            # must print 0 defects
python3 scripts/no-shipped-dashes.py --list     # every dash, with why it is or is not allowed
python3 scripts/no-shipped-dashes.py --selftest # fixtures plus four sabotages, must all say ok
```
⚠️ **This replaced a `grep -n "—\|–" src/data/**/*.ts` on 2026-09-03, and that grep was reading
almost nothing.** Bash leaves globstar off, so `src/data/**/*.ts` collapses to `src/data/*/*.ts`
and matches only files one directory deep. Measured across the three repos it reached 8 of 14
files here, 26 of 28 on fiji and 3 of 6 on charismoutafidis, and it never opened `blogs.ts`, which
is where the articles live. It also never looked outside `src/data` at all.

The script reads every `.ts` and `.tsx` under `src/`, strips comments, and then tells a quotation
from a defect. Dashes inside `„ … “` or `« … »` are quotations and pass. Quotations that carry no
marks in the source pass only if their SHA-1 is in `scripts/dash-allowlist.txt`, and editing one
revokes its entry. That distinction is the reason the check is usable at all: 21 dashes in the
estate are somebody else’s writing, he decided on 2026-09-03 that they stay, and a check that
reported all 21 on every run would be turned off within the week.
The second rule is not greppable and has to be read for. It is easy to miss precisely because it
reads well, which is why it gets written.

⚠️ 82 em dashes were live in `charismoutafidis-com` when he said this, and every one had to be
rewritten by hand in its own language. A blind replace does not work: each dash wants a different
repair depending on what the clause is doing. In Greek the repair is genuinely risky, because
restructuring around «τίποτα» / «κανένας» / «ποτέ» can invert the sentence.

