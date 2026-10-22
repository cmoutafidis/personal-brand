import type {Language} from '@/types/language';
import {SERVICE_LABEL, type OfferSlug, type ServiceSlug} from '@/data/offerLinks';

// The six kinds of work Fiji sells, in ONE file. Added 2026-10-22 (offer-os gtm/broad-home-2026-10
// BR-G04, decisions BR-D3 and BR-D4), copied word for word from offer-os
// `companies/fiji-solutions/site/03-copy-home.md`, "What we build". Change a string there first.
//
// Three surfaces read it, so they cannot drift apart:
//   - the JSON-LD `serviceType` in src/app/RootShell.tsx, from `schemaName` (BR-D4);
//   - the homepages' "What we build" grid (BR-G05);
//   - the six categories on /portfolio (BR-G07), service page links only (servicePageLinks below).
// A fourth reads it since BR-G06: the "See also" links of each project page (relatedOf() in
// src/components/ProjectPages.tsx), by ServiceKey.
//
// The order is the contract's order, and RootShell emits `serviceType` in this order. `schemaName`
// is a schema.org value, so it stays English in both locales (CLAUDE.md rule 4).
//
// No price here or anywhere it renders (BR-D24). The links follow PLAN.md §4.3: a service page
// where one exists, else the offer page. Offer links take the destination's eyebrow as anchor text
// (offerLinks.ts), so no anchor text is typed in this file.

export type ServiceKey = 'custom-software' | 'apps' | 'automation' | 'ai-agents' | 'websites' | 'data';

export type Service = {
  key: ServiceKey;
  /** The service page this card links, per locale. */
  serviceHref?: Record<Language, string>;
  /** A second service page, for the one card that has two (Data and Snowflake). */
  secondServiceHref?: Record<Language, string>;
  /** The offer this card links, when it has no service page of its own. */
  offerHref?: OfferSlug;
  /** A project page this card links as well, by its slug in src/data/projects.ts (the apps card, PLAN.md §4.3). */
  projectSlug?: string;
  schemaName: string;
  copy: Record<Language, {title: string; line: string}>;
};

const servicePage = (slug: string): Record<Language, string> => ({
  en: `/en/services/${slug}`,
  el: `/el/services/${slug}`,
});

export const SERVICES: readonly Service[] = [
  {
    key: 'custom-software',
    serviceHref: servicePage('custom-software-development-greece'),
    schemaName: 'Custom Software Development',
    copy: {
      en: {
        title: 'Custom software',
        line: 'Internal tools, CRM style systems and the connections between the programs you already use.',
      },
      el: {
        title: 'Λογισμικό κατά παραγγελία',
        line: 'Εσωτερικά εργαλεία, συστήματα τύπου CRM και συνδέσεις ανάμεσα στα προγράμματα που ήδη χρησιμοποιείς.',
      },
    },
  },
  {
    key: 'apps',
    // The Catalytics project page is this card's second link (BR-G06, PLAN.md §4.3).
    serviceHref: servicePage('custom-software-development-greece'),
    projectSlug: 'catalytics-apps',
    schemaName: 'Web and Mobile App Development',
    copy: {
      en: {
        title: 'Web and mobile apps',
        line: 'Apps your team and your customers open in the browser, and mobile apps published on the App Store and Google Play.',
      },
      el: {
        title: 'Διαδικτυακές εφαρμογές και εφαρμογές για κινητά',
        line: 'Εφαρμογές που ανοίγουν η ομάδα και οι πελάτες σου από τον υπολογιστή, και εφαρμογές για κινητά που δημοσιεύουμε στο App Store και στο Google Play.',
      },
    },
  },
  {
    key: 'automation',
    offerHref: 'offers/process-automation',
    schemaName: 'Business Process Automation',
    copy: {
      en: {
        title: 'Process automation',
        line: 'The steps someone repeats by hand every week, done by software.',
      },
      el: {
        title: 'Αυτοματοποίηση διαδικασιών',
        line: 'Τα βήματα που κάποιος επαναλαμβάνει στο χέρι κάθε βδομάδα, τα κάνει πια το λογισμικό.',
      },
    },
  },
  {
    key: 'ai-agents',
    offerHref: 'offers/ai-agent',
    schemaName: 'AI Agent Development',
    copy: {
      en: {
        title: 'AI agents',
        line: 'An AI agent built for one process of yours, working inside the tools you already use.',
      },
      el: {
        title: 'AI agents',
        line: 'Ένας AI agent φτιαγμένος για μία δική σου διαδικασία, που δουλεύει μέσα στα εργαλεία που ήδη χρησιμοποιείς.',
      },
    },
  },
  {
    key: 'websites',
    offerHref: 'offers/website-seo',
    schemaName: 'Website Development',
    copy: {
      en: {
        title: 'Websites',
        line: 'Websites built to be found in search, and Google Ads campaigns that send people to them.',
      },
      el: {
        title: 'Ιστοσελίδες',
        line: 'Ιστοσελίδες φτιαγμένες για να βρίσκονται στην αναζήτηση, και καμπάνιες στο Google Ads που στέλνουν κόσμο σε αυτές.',
      },
    },
  },
  {
    key: 'data',
    serviceHref: servicePage('data-analysis-greece'),
    secondServiceHref: servicePage('snowflake-consulting-greece'),
    schemaName: 'Snowflake Consulting',
    copy: {
      en: {
        title: 'Data and Snowflake',
        line: 'Reports that update on their own from your data, and Snowflake data platforms we set up as a Snowflake Select Partner.',
      },
      el: {
        title: 'Δεδομένα και Snowflake',
        line: 'Αναφορές που ενημερώνονται μόνες τους από τα δεδομένα σου, και πλατφόρμες δεδομένων Snowflake που στήνουμε ως Snowflake Select Partner.',
      },
    },
  },
];

/** The JSON-LD `serviceType` list, in the order above. */
export const SERVICE_TYPES: string[] = SERVICES.map((s) => s.schemaName);

/** The service page links of one card, with each page's own phrase as anchor text (SERVICE_LABEL).
 *  /portfolio renders these and nothing else: offers stay off that page (CLAUDE.md, the eight offers
 *  rule), so the offer and project links of the homepage cards are left out. Added 2026-10-22 (BR-G07). */
export function servicePageLinks(s: Service, lang: Language): {href: string; label: string}[] {
  return [s.serviceHref, s.secondServiceHref]
    .filter((h): h is Record<Language, string> => h !== undefined)
    .map((h) => ({href: h[lang], label: SERVICE_LABEL[h[lang].replace(/^\/(en|el)\//, '') as ServiceSlug][lang]}));
}
