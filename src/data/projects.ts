import type {Language} from '@/types/language';

// The projects of Fiji Solutions. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05) as the card level
// data the homepage grid reads: slug, order, client and card line, word for word from offer-os
// `companies/fiji-solutions/site/03-copy-home.md`, "Projects". Ο Τόπος Μου says "on staging" until its
// production site switches (BR-G06 checks).
//
// BR-G06 widens this to the full Project shape of offer-os PLAN.md §9 (permission records, facts, the
// three sections, links) and adds the /[locale]/projects routes the cards link to.

export type ProjectCard = {
  slug: string;
  order: number;
  homeCard: boolean;
  client: {name: string};
  cardLine: Record<Language, string>;
};

export const PROJECTS: readonly ProjectCard[] = [
  {
    slug: 'pap-center-crm',
    order: 1,
    homeCard: true,
    client: {name: 'PAP Center'},
    cardLine: {
      en: 'Custom CRM for a hair clinic in Thessaloniki. Live since September 2026, used daily by the staff.',
      el: 'CRM στα μέτρα μιας κλινικής μαλλιών στη Θεσσαλονίκη. Σε λειτουργία από τον Σεπτέμβριο του 2026, και το προσωπικό το χρησιμοποιεί κάθε μέρα.',
    },
  },
  {
    slug: 'catalytics-apps',
    order: 2,
    homeCard: true,
    client: {name: 'Catalytics'},
    cardLine: {
      en: 'iOS, Android and web apps, published on the App Store and Google Play.',
      el: 'Εφαρμογές για iOS και Android και διαδικτυακή εφαρμογή, με τις εφαρμογές για κινητά στο App Store και στο Google Play.',
    },
  },
  {
    slug: 'new-era-learning-platform',
    order: 3,
    homeCard: true,
    client: {name: 'New Era Learning'},
    cardLine: {
      en: 'Platform work and a Snowflake setup that turns platform data into customer and revenue insights.',
      el: 'Δουλειά στην πλατφόρμα και ένα σύστημα στη Snowflake που μετατρέπει τα δεδομένα της πλατφόρμας σε καθαρή εικόνα για τους πελάτες και τα έσοδα.',
    },
  },
  {
    slug: 'jupiter-developer-relations',
    order: 4,
    homeCard: true,
    client: {name: 'Jupiter'},
    cardLine: {
      en: "With a partner, we set up Jupiter's developer relations: the official Python SDK, the Rust SDK release pipeline, code examples and a talk.",
      el: 'Με έναν συνεργάτη στήσαμε τη σχέση της Jupiter με την κοινότητα των προγραμματιστών: το επίσημο Python SDK, τη διαδικασία κυκλοφορίας του Rust SDK, παραδείγματα κώδικα και μια ομιλία.',
    },
  },
  {
    slug: 'alumil-snowflake-poc',
    order: 5,
    homeCard: true,
    client: {name: 'Alumil'},
    cardLine: {
      en: 'A Snowflake proof of concept for Alumil with data captured on the factory floor.',
      el: 'Πιλοτικό έργο στη Snowflake για την Alumil, με δεδομένα από τη γραμμή παραγωγής.',
    },
  },
  {
    slug: 'o-topos-mou-archive-rebuild',
    order: 6,
    homeCard: true,
    client: {name: 'Ο Τόπος Μου'},
    cardLine: {
      en: '1,873 articles and 16 polls recovered from an old Joomla site, and a new WordPress site on staging.',
      el: '1.873 άρθρα και 16 δημοσκοπήσεις ανακτήθηκαν από μια παλιά ιστοσελίδα Joomla, και μια νέα ιστοσελίδα WordPress είναι σε δοκιμαστική λειτουργία.',
    },
  },
  {
    slug: 'seaflows-direct-booking',
    order: 7,
    homeCard: false,
    client: {name: 'Seaflows'},
    cardLine: {
      en: 'A direct booking website.',
      el: 'Ιστοσελίδα για απευθείας κρατήσεις.',
    },
  },
];

/** The cards the homepage shows: the first six by `order`. */
export const HOME_PROJECTS: readonly ProjectCard[] = [...PROJECTS]
  .filter((p) => p.homeCard)
  .sort((a, b) => a.order - b.order)
  .slice(0, 6);
