import type {Offer} from '@/components/OfferLanding';
import type {Language} from '@/types/language';

import sheetToApp from '@/data/offers/sheet-to-app';
import softwarePrototype from '@/data/offers/software-prototype';
import aiPrototype from '@/data/offers/ai-prototype';
import processAutomation from '@/data/offers/process-automation';
import aiAgent from '@/data/offers/ai-agent';
import aiDevelopmentSprint from '@/data/offers/ai-development-sprint';
import websiteSeo from '@/data/offers/website-seo';
import websiteGoogleAds from '@/data/offers/website-google-ads';

// The internal link graph for the eight /offers/* pages, in ONE file, because the rule it
// implements is a rule about the whole graph, and a rule about the whole graph cannot be checked
// if it is scattered across nine components.
//
// WHY THESE LINKS EXIST NOW AND DID NOT ON 2026-08-31. The offer pages were built as Google Ads
// destinations, one campaign per page. Orphaning them was deliberate and it was right at the time:
// nothing linking to them was what kept eight more pages from becoming the service list this site
// deleted on 2026-08-15, and it cost nothing, because a paid click does not care about internal
// links. Google Ads was DROPPED on 2026-09-01 and organic search is now the entire strategy. The
// premise died with it: an orphan is no longer a page that arrives by ad, it is a page that cannot
// rank. fijisolutions.net ranked for zero keywords that day. Charis approved the change. See
// CLAUDE.md.
//
// ⛔ THE RULE THAT REPLACED IT. An offer may be linked from the BODY of a page, in prose, and from
// other offer pages — and from NOWHERE ELSE. Never the navbar, never the footer, never QuickLinks,
// never /portfolio (which renders the three-card Services grid and is this site's one hub). Eight
// offers in a menu, a footer list or a hub grid IS the service list, whatever the offers are called.
//
// ⛔ ONE PARENT PER OFFER. OFFERS_BY_SERVICE is a TREE, not a mesh: every offer appears in at most
// one array. snowflake-consulting-greece carries ZERO offers on purpose — no offer is an honest
// fixed-scope way to buy Snowflake work, and an invented link is a service list starting.
//
// ⛔ ANCHOR TEXT IS NEVER WRITTEN IN THIS FILE. It is `offer.copy[lang].eyebrow` — the destination
// page's own exact primary keyword (OfferLanding.tsx, the LOAD-BEARING comment above the eyebrow).
// A link and its destination therefore cannot drift, and no link on this site says "learn more".
//
// KEYS ARE LITERAL UNIONS, NOT string. tsconfig does not set noUncheckedIndexedAccess, so a
// `Record<string, X>` lookup types as X even when the key is missing — and OfferLanding is
// prerendered for all sixteen routes, so a missing key is a build-time crash, not a runtime
// nicety. With the unions below, a typo, a leading slash or a forgotten offer is a compile error.

/**
 * What the graph needs from an offer: its route and its anchor text. The seven workbook offers are
 * `Offer`s rendered by OfferLanding; /offers/sheet-to-app (added 2026-09-30, G19) has its own
 * layout, SheetToAppLanding, and carries the same two fields, so both fit here.
 */
export type LinkedOffer = {slug: string; copy: Record<Language, {eyebrow: string}>};

export type ServiceSlug =
  | 'services/custom-software-development-greece'
  | 'services/data-analysis-greece'
  | 'services/snowflake-consulting-greece';

export type OfferSlug =
  | 'offers/sheet-to-app'
  | 'offers/software-prototype'
  | 'offers/ai-prototype'
  | 'offers/process-automation'
  | 'offers/ai-agent'
  | 'offers/ai-development-sprint'
  | 'offers/website-seo'
  | 'offers/website-google-ads';

/** Anchor text for a link TO a service page: that page's own target phrase, per locale. */
export const SERVICE_LABEL: Record<ServiceSlug, Record<Language, string>> = {
  'services/custom-software-development-greece': {
    en: 'Custom software development in Greece',
    el: 'Εξατομικευμένο λογισμικό στην Ελλάδα'
  },
  'services/data-analysis-greece': {
    en: 'Data analysis in Greece',
    el: 'Ανάλυση δεδομένων στην Ελλάδα'
  },
  'services/snowflake-consulting-greece': {
    en: 'Snowflake consulting in Greece',
    el: 'Snowflake στην Ελλάδα'
  }
};

/**
 * Which offers are fixed-scope ways to buy which service. Each pairing is justified by a line
 * already on the service page, not by a category name:
 *
 *  custom-software-development-greece — H1 "The work your team repeats every week, done by
 *  software" is process-automation's headline; outcome card "Approvals that leave the inbox" is
 *  ai-agent's problem section; "Internal tools built around your process" is what
 *  software-prototype and sheet-to-app let you see before commissioning it (sheet-to-app also
 *  answers the card "Your shop, your accounting system and your spreadsheet stop being three
 *  places the same order gets typed"); and ai-development-sprint is one fixed release of exactly
 *  that kind of build.
 *  2026-09-30 (G19; offer-os gtm/sheet-to-app-rollout/PLAN.md D51): sheet-to-app took the slot of
 *  the retired app-prototype, whose routes now redirect to it (next.config.ts).
 *
 *  data-analysis-greece — ai-prototype is the only offer whose subhead says "on your data" and
 *  measures itself against what that work costs today, which is this page's whole argument.
 *
 *  snowflake-consulting-greece — nothing. An earlier draft put ai-development-sprint here and the
 *  review refuted it: a software-release sprint is not a way to buy Snowflake implementation,
 *  migration or cost tuning. The tree tolerates an empty branch; a padded one is the catalogue.
 */
export const OFFERS_BY_SERVICE: Record<ServiceSlug, LinkedOffer[]> = {
  'services/custom-software-development-greece': [
    processAutomation,
    aiAgent,
    softwarePrototype,
    sheetToApp,
    aiDevelopmentSprint
  ],
  'services/data-analysis-greece': [aiPrototype],
  'services/snowflake-consulting-greece': []
};

/**
 * The reverse edge, offer → its one parent service page. `Partial` on purpose: website-seo and
 * website-google-ads have NO parent — this site has no website service page, and adding one is a
 * decision about what Fiji sells, not a linking decision. TypeScript therefore types every lookup
 * as `ServiceSlug | undefined`, which forces the `{parent && …}` guard in OfferLanding.
 */
export const PARENT_SERVICE: Partial<Record<OfferSlug, ServiceSlug>> = {
  'offers/process-automation': 'services/custom-software-development-greece',
  'offers/ai-agent': 'services/custom-software-development-greece',
  'offers/software-prototype': 'services/custom-software-development-greece',
  'offers/sheet-to-app': 'services/custom-software-development-greece',
  'offers/ai-development-sprint': 'services/custom-software-development-greece',
  'offers/ai-prototype': 'services/data-analysis-greece'
};

/**
 * One sibling per offer, and every pairing is reciprocal, so each pair is a real pair and not a
 * chain that dead-ends. website-seo and website-google-ads were already declared siblings in prose
 * at the top of website-seo.ts; this makes that navigable.
 * 2026-09-30 (G19): sheet-to-app took the retired app-prototype's place in the software-prototype
 * pair, so the pairing stays reciprocal with eight offers.
 */
export const SIBLING_OFFER: Record<OfferSlug, LinkedOffer> = {
  'offers/process-automation': aiAgent,
  'offers/ai-agent': processAutomation,
  'offers/software-prototype': sheetToApp,
  'offers/sheet-to-app': softwarePrototype,
  'offers/ai-prototype': aiDevelopmentSprint,
  'offers/ai-development-sprint': aiPrototype,
  'offers/website-seo': websiteGoogleAds,
  'offers/website-google-ads': websiteSeo
};

/**
 * The two offers with no parent service page, and, measured 2026-09-01, the only two with real
 * Greek search demand behind them: κατασκευή ιστοσελίδων 2,900/mo and προώθηση ιστοσελίδων, both
 * LOW competition, plus κατασκευή ιστοσελίδων θεσσαλονίκη ~480 with one ~320 variant group.
 * ⚠️ CORRECTED 2026-09-06: this used to read "480 (+~640 in variants)". Correction C in
 * keyword-research-2026-09-01.md withdrew the sum, because the two spellings return identical
 * twelve month curves and were one keyword counted twice. This repo's own CLAUDE.md already says
 * so, in those words, and the source files never inherited it.
 * ⚠️ CORRECTED 2026-09-06. This used to quote προώθηση ιστοσελίδων at 1,600/mo. THAT NUMBER IS
 * WITHDRAWN and `blogs.ts` has said so since 2026-09-02. 1,600 is a twelve month average and the
 * average is the artifact: the months read 210 390 260 320 210 210 170 260 390 1000 5400 9900, flat
 * for ten months and then vertical in May to July 2026. Quote the trajectory, never the average.
 * The term is stronger than this file claimed, so the exception below is better justified than it
 * looked. Corrections A/B/C in offer-os/gtm/keyword-research-2026-09-01.md.
 * Every automation and AI phrase the other six chase is below Google's reporting floor in Greek.
 * Source: offer-os/gtm/keyword-research-2026-09-01.md.
 *
 * THIS IS AN EXCEPTION AND IT IS RECORDED AS ONE. They are linked from the body of
 * /business-process-audit (after the form) and from the homepage's Local section — neither page
 * is "the service they are a way to buy", because no such page exists. The honest fix is a
 * website service page; that is Charis's decision about what Fiji sells, and until he makes it
 * these two in-edges are what keeps the two highest-demand pages on the site from being orphans.
 */
export const WEBSITE_OFFERS: Offer[] = [websiteSeo, websiteGoogleAds];

/**
 * The offer the audit page links for a reader whose work runs through one shared spreadsheet.
 * Added 2026-09-30 in G19: offer.yaml `seo.internal_links_from` of sheet-to-app names
 * /business-process-audit in both locales, body links only. Like the website block, it renders
 * AFTER the audit form, so the audit stays the page's one conversion. Its parent is still
 * custom-software-development-greece; this is an in-edge from a page body and adds no parent.
 */
export const SPREADSHEET_OFFERS: LinkedOffer[] = [sheetToApp];

/**
 * One line per offer: what you get, and when. The "when" is always anchored to the kickoff
 * meeting, never to first contact — the rule the offer pages themselves keep (CLAUDE.md rule 6).
 * No price, no percentage, no results claim: the guarantee is stated on the offer page with its
 * remedy attached, and a fragment of it here would be a claim with the remedy stripped off.
 *
 * Greek: «εναρκτήρια συνάντηση» for the kickoff (the natural Greek, already used by
 * process-automation.ts), «ιστοσελίδα» never «site», U+2019 for every apostrophe.
 *
 * 2026-09-30 (G19): sheet-to-app has no kickoff workshop. Its 7 days are anchored to the audit
 * call («την πρώτη κλήση»), so its line says that instead. Both of its lines are copied verbatim
 * from its 03-copy.md (en: CTA block 2; el: CTA block 1), so the blurb and the page say the same.
 */
export const OFFER_BLURB: Record<OfferSlug, Record<Language, string>> = {
  'offers/process-automation': {
    en: 'One process you name, mapped, automated and handed over working, two weeks from the kickoff workshop.',
    el: 'Μία διαδικασία που τη διαλέγεις εσύ: χαρτογραφημένη, αυτοματοποιημένη και παραδομένη να δουλεύει, δύο εβδομάδες από την εναρκτήρια συνάντηση.'
  },
  'offers/ai-agent': {
    en: 'The same thing in a week, when the process lives in an inbox and an agent can run it.',
    el: 'Το ίδιο σε μία εβδομάδα, όταν η διαδικασία ζει μέσα σε ένα inbox και μπορεί να την τρέχει ένας AI agent.'
  },
  'offers/software-prototype': {
    en: 'The tool running instead of specified, two weeks from the kickoff workshop, with the source code and the documentation.',
    el: 'Το εργαλείο να τρέχει αντί να περιγράφεται, δύο εβδομάδες από την εναρκτήρια συνάντηση, με τον πηγαίο κώδικα και την τεκμηρίωση.'
  },
  'offers/sheet-to-app': {
    en: 'Your column headers become a prototype of your app 7 days after the audit call.',
    el: 'Στην πρώτη κλήση συζητάμε τι χρειάζεσαι από το Excel σου, και 7 μέρες μετά εξετάζεις το πρωτότυπο της εφαρμογής σου.'
  },
  'offers/ai-prototype': {
    en: 'One use case built on your own data and measured against what that work costs you today, two weeks from the kickoff workshop.',
    el: 'Μία περίπτωση χρήσης χτισμένη πάνω στα δικά σου δεδομένα και μετρημένη απέναντι σε αυτό που σου κοστίζει σήμερα η ίδια δουλειά, δύο εβδομάδες από την εναρκτήρια συνάντηση.'
  },
  'offers/ai-development-sprint': {
    en: 'One release, written down with you and built in ten working days, back and running fifteen days from the kickoff workshop.',
    el: 'Μία έκδοση, γραμμένη μαζί σου και χτισμένη σε δέκα εργάσιμες, πίσω σε λειτουργία δεκαπέντε ημέρες από την εναρκτήρια συνάντηση.'
  },
  'offers/website-seo': {
    en: 'The site rebuilt or optimised, the SEO done and the Google Business Profile sorted, three weeks from the kickoff workshop.',
    el: 'Η ιστοσελίδα ξαναχτισμένη ή βελτιστοποιημένη, η προώθησή της στην αναζήτηση και το Google Business Profile τακτοποιημένο, τρεις εβδομάδες από την εναρκτήρια συνάντηση.'
  },
  'offers/website-google-ads': {
    en: 'The same site with a Google Ads campaign live beside it, inside your own ads account, three weeks from the kickoff workshop.',
    el: 'Η ίδια ιστοσελίδα με καμπάνια Google Ads στον αέρα δίπλα της, μέσα στον δικό σου λογαριασμό, τρεις εβδομάδες από την εναρκτήρια συνάντηση.'
  }
};

/** Heading and intro for the two block variants. Shared component, so the locales cannot drift. */
export type OfferLinksVariant = 'service' | 'website' | 'spreadsheet';

export const OFFER_LINKS_COPY: Record<OfferLinksVariant, Record<Language, {heading: string; intro: string}>> = {
  service: {
    en: {
      heading: 'Already know what you want built?',
      intro: 'The audit is the way in when you are not sure where to start. If you already are, each of these is a fixed scope with a date on it, agreed in writing before anything is built.'
    },
    el: {
      heading: 'Ξέρεις ήδη τι θέλεις να φτιαχτεί;',
      intro: 'Ο έλεγχος διαδικασιών είναι ο δρόμος όταν δεν ξέρεις από πού να ξεκινήσεις. Αν ξέρεις ήδη, καθένα από τα παρακάτω είναι σταθερό αντικείμενο εργασίας με ημερομηνία, συμφωνημένο γραπτά πριν χτιστεί οτιδήποτε.'
    }
  },
  website: {
    en: {
      heading: 'If what you need is customers, not fewer keystrokes',
      intro: 'The audit maps how the work inside your business runs. If the thing costing you money is that nobody finds you in the first place, that is a different job, and it is scoped the same way:'
    },
    el: {
      heading: 'Αν αυτό που χρειάζεσαι είναι πελάτες, όχι λιγότερη γραφειοκρατία',
      intro: 'Ο έλεγχος χαρτογραφεί πώς τρέχει η δουλειά μέσα στην επιχείρησή σου. Αν αυτό που σου κοστίζει είναι ότι δεν σε βρίσκει κανείς εξαρχής, αυτή είναι άλλη δουλειά, και ορίζεται με τον ίδιο τρόπο:'
    }
  },
  // 2026-09-30 (G19). The English heading follows the sheet-to-app page's English S03 heading. The
  // Greek heading and both intros were written in G19, appear in no 03-copy file, and ~~await
  // Charis's approval~~ were approved by him with the local build on 2026-09-30 (offer-os
  // gtm/sheet-to-app-rollout/PLAN.md D117); live since the G19 push of 2026-10-04.
  spreadsheet: {
    en: {
      heading: 'If your whole week runs through one shared spreadsheet',
      intro: 'We turn that sheet into an app, starting from its column headers:'
    },
    el: {
      heading: 'Αν όλη σου η βδομάδα περνάει από ένα κοινό Excel',
      intro: 'Φτιάχνουμε από αυτό το Excel μια εφαρμογή, ξεκινώντας από τα ονόματα των στηλών του:'
    }
  }
};

/** Copy for the reverse-link nav at the foot of every offer page. */
export const OFFER_NEXT_COPY: Record<Language, {heading: string; parentLead: string; siblingLead: string}> = {
  en: {
    heading: 'Where this sits',
    parentLead: 'The service this belongs to:',
    siblingLead: 'The closest alternative:'
  },
  el: {
    heading: 'Πού ανήκει αυτό',
    parentLead: 'Η υπηρεσία στην οποία ανήκει:',
    siblingLead: 'Η πιο κοντινή εναλλακτική:'
  }
};
