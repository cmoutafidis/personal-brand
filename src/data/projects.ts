import type {Language} from '@/types/language';
import type {OfferSlug, ServiceSlug} from '@/data/offerLinks';
import type {ServiceKey} from '@/data/services';

// The projects of Fiji Solutions: the homepage grid, /[locale]/projects and /[locale]/projects/<slug> all read
// this one file. Added 2026-10-22 as card level data (offer-os gtm/broad-home-2026-10 BR-G05), widened the same
// day to the Project shape of offer-os PLAN.md §9 with the routes (BR-G06). Every string is copied word for word
// from offer-os `companies/fiji-solutions/site/03-copy-home.md`, "Projects"; change it there first.
//
// Who may be named is decided in offer-os PLAN.md BR-D26 and BR-D35, and every project carries the record of
// that decision in `permission`: no record, no compile. scripts/no-barred-names.py keeps the names that may
// never appear out of this file. Facts only: each line traces to the source the contract names under it, and no
// line carries a price (BR-D24), a count of clients or a rating.
//
// `images` stays empty until a screenshot with mock data only is cleared (BR-G26), `quote` stays null until a
// real review or quote arrives with consent (BR-G29), and no logo is set until BR-G25. Ο Τόπος Μου says "on
// staging" until its production site switches (read 2026-10-22: otoposmou.gr still runs the old Joomla site).
// Hapimag has no page until he gives the project wording (BR-G28).
//
// `lastmod` is the ship date; set it to the deploy date if BR-G08 lands on a later day (src/lib/routes.ts reads it).

type Fact = {label: string; value: string; source: string};

export type Project = {
  slug: string;
  status: 'live' | 'draft';
  order: number;
  homeCard: boolean;
  attribution: 'company' | 'founder';
  client: {name: string; logo?: {src: string; width: number; height: number; darkSrc?: string; clearedOn: string}};
  permission: {
    kind: 'written' | 'verbal' | 'his-decision';
    date: string;
    source: string;
    scope: ('name' | 'logo' | 'screenshot' | 'quote')[];
  };
  services: ServiceKey[];
  relatedService?: ServiceSlug;
  relatedOffer?: OfferSlug;
  /** ISO months, only dates on file. `end` for work that has finished. */
  period?: {start: string; live?: string; end?: string};
  images: {src: string; alt: Record<Language, string>; mockData: boolean}[];
  /** Public places to see the work. `liveLabel` replaces the host name as the live link's text; `more` holds any
   *  further link with its own label (Jupiter's Rust SDK). */
  links: {
    live?: string;
    liveLabel?: Record<Language, string>;
    appStore?: string;
    googlePlay?: string;
    more?: {href: string; label: Record<Language, string>}[];
  };
  copy: Record<Language, {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    sector?: string;
    cardLine: string;
    situation: string[];
    built: string[];
    result: string[];
    facts: Fact[];
  }>;
  quote: null | {text: string; author: string; role: string; date: string; source: 'google' | 'written' | 'video'; url?: string};
  lastmod: string;
};

/** The labels of the index and detail pages (contract, "Index" and "Detail page labels"), and the /portfolio line. */
export const PROJECTS_COPY: Record<Language, {
  indexTitle: string;
  indexDescription: string;
  indexH1: string;
  indexIntro: string;
  facts: Record<FactKey, string>;
  situation: string;
  built: string;
  result: string;
  links: string;
  related: string;
  ctaHeading: string;
  ctaButton: string;
  updated: string;
  all: string;
  portfolioLine: string;
}> = {
  en: {
    indexTitle: 'Projects: software we built for our clients | Fiji Solutions',
    indexDescription: 'Custom software, apps, data platforms and websites that Fiji Solutions built for clients in Greece and abroad, with where each one stands today.',
    indexH1: 'Software we built for our clients',
    indexIntro: 'Each project names the client, what we built and where it stands today.',
    facts: {client: 'Client', sector: 'Sector', location: 'Location', period: 'Period', status: 'Status', platforms: 'Platforms', stack: 'Stack'},
    situation: 'The situation',
    built: 'What we built',
    result: 'The result',
    links: 'Where to see it',
    related: 'See also',
    ctaHeading: 'Want something like this built for your business?',
    ctaButton: 'Book a free 30-minute call',
    updated: 'Last updated',
    all: 'All projects',
    portfolioLine: 'See what we built for our clients:',
  },
  el: {
    indexTitle: 'Έργα: λογισμικό που φτιάξαμε για πελάτες | Fiji Solutions',
    indexDescription: 'Λογισμικό, εφαρμογές, πλατφόρμες δεδομένων και ιστοσελίδες που έφτιαξε η Fiji Solutions για πελάτες στην Ελλάδα και στο εξωτερικό, και πού βρίσκεται το καθένα σήμερα.',
    indexH1: 'Λογισμικό που φτιάξαμε για τους πελάτες μας',
    indexIntro: 'Σε κάθε έργο θα βρεις τον πελάτη, τι φτιάξαμε και πού βρίσκεται σήμερα.',
    facts: {client: 'Πελάτης', sector: 'Κλάδος', location: 'Τοποθεσία', period: 'Περίοδος', status: 'Κατάσταση', platforms: 'Πλατφόρμες', stack: 'Τεχνολογίες'},
    situation: 'Η αφετηρία',
    built: 'Τι φτιάξαμε',
    result: 'Το αποτέλεσμα',
    links: 'Πού θα το δεις',
    related: 'Δες επίσης',
    ctaHeading: 'Θέλεις κάτι παρόμοιο για την επιχείρησή σου;',
    ctaButton: 'Κλείσε δωρεάν κλήση 30 λεπτών',
    updated: 'Τελευταία ενημέρωση',
    all: 'Όλα τα έργα',
    portfolioLine: 'Δες τι φτιάξαμε για τους πελάτες μας:',
  },
};

// The facts strip, in the contract's label order: Client, Sector, Location, Period, Status, Platforms, Stack. A
// project lists only the facts on file; the client and sector rows come from `client.name` and `copy.sector`.
type FactKey = 'client' | 'sector' | 'location' | 'period' | 'status' | 'platforms' | 'stack';
type FactInput = {key: Exclude<FactKey, 'client' | 'sector'>; value: Record<Language, string>; source: string};
const FACT_ORDER: FactKey[] = ['client', 'sector', 'location', 'period', 'status', 'platforms', 'stack'];

function factsOf(lang: Language, client: string, sector: Record<Language, string> | undefined, rest: FactInput[], source: string): Fact[] {
  const labels = PROJECTS_COPY[lang].facts;
  const rows: {key: FactKey; value: string; source: string}[] = [{key: 'client', value: client, source}];
  if (sector) rows.push({key: 'sector', value: sector[lang], source});
  for (const f of rest) rows.push({key: f.key, value: f.value[lang], source: f.source});
  rows.sort((a, b) => FACT_ORDER.indexOf(a.key) - FACT_ORDER.indexOf(b.key));
  return rows.map((r) => ({label: labels[r.key], value: r.value, source: r.source}));
}

/** The same string in both locales: a stack or a product name. */
const both = (s: string): Record<Language, string> => ({en: s, el: s});

const SHIP = '2026-10-22';

// Each project's sentences, per locale, before the facts strip is assembled.
type ProjectText = Omit<Project['copy'][Language], 'facts' | 'sector'>;
type ProjectInput = Omit<Project, 'copy'> & {
  sector?: Record<Language, string>;
  facts: FactInput[];
  factSource: string;
  text: Record<Language, ProjectText>;
};

function project(p: ProjectInput): Project {
  const {sector, facts, factSource, text, ...rest} = p;
  const copyOf = (lang: Language) => ({
    ...text[lang],
    ...(sector ? {sector: sector[lang]} : {}),
    facts: factsOf(lang, p.client.name, sector, facts, factSource),
  });
  return {...rest, copy: {en: copyOf('en'), el: copyOf('el')}};
}

export const PROJECTS: readonly Project[] = [
  project({
    slug: 'pap-center-crm',
    status: 'live',
    order: 1,
    homeCard: true,
    attribution: 'company',
    client: {name: 'PAP Center'},
    permission: {kind: 'written', date: '2026-10', source: "The owner's written yes, kept by Charis (offer-os F-D20)", scope: ['name']},
    services: ['custom-software'],
    relatedOffer: 'offers/sheet-to-app',
    period: {start: '2026-07', live: '2026-09'},
    images: [],
    links: {},
    sector: {en: 'Health, hair clinic', el: 'Υγεία, κλινική μαλλιών'},
    factSource: 'offer-os companies/fiji-solutions/proof/2026-10-pap-center-crm.md, F-D20, D77',
    facts: [
      {key: 'period', value: {en: 'July 2026 to today', el: 'Ιούλιος 2026 ως σήμερα'}, source: 'proof record'},
      {key: 'status', value: {en: 'Live since September 2026', el: 'Σε λειτουργία από τον Σεπτέμβριο του 2026'}, source: 'proof record'},
      {key: 'stack', value: both('AWS'), source: 'proof record'},
    ],
    text: {
      en: {
        metaTitle: 'PAP Center: a custom CRM for a hair clinic | Fiji Solutions',
        metaDescription: 'We built PAP Center, a hair clinic in Thessaloniki, a custom CRM. Live since September 2026, used every day by the staff.',
        h1: 'PAP Center: a custom CRM for a hair clinic in Thessaloniki',
        cardLine: 'Custom CRM for a hair clinic in Thessaloniki. Live since September 2026, used daily by the staff.',
        situation: ['PAP Center, a hair clinic in Thessaloniki, ran on software built in 2000 and feared it would stop working.'],
        built: ['We built the clinic a custom CRM, running on AWS. We started in July 2026 and have shipped changes every week since.'],
        result: ['It went live in September 2026, and the staff use it every day.'],
      },
      el: {
        metaTitle: 'PAP Center: CRM στα μέτρα μιας κλινικής μαλλιών | Fiji Solutions',
        metaDescription: 'Φτιάξαμε για το PAP Center, μια κλινική μαλλιών στη Θεσσαλονίκη, ένα CRM στα μέτρα του. Σε λειτουργία από τον Σεπτέμβριο του 2026, και το προσωπικό το χρησιμοποιεί κάθε μέρα.',
        h1: 'PAP Center: CRM στα μέτρα μιας κλινικής μαλλιών στη Θεσσαλονίκη',
        cardLine: 'CRM στα μέτρα μιας κλινικής μαλλιών στη Θεσσαλονίκη. Σε λειτουργία από τον Σεπτέμβριο του 2026, και το προσωπικό το χρησιμοποιεί κάθε μέρα.',
        situation: ['Το PAP Center, μια κλινική μαλλιών στη Θεσσαλονίκη, δούλευε με λογισμικό φτιαγμένο το 2000 και φοβόταν μήπως σταματήσει να λειτουργεί.'],
        built: ['Φτιάξαμε για την κλινική ένα CRM στα μέτρα της, που τρέχει στο AWS. Ξεκινήσαμε τον Ιούλιο του 2026 και από τότε παραδίδουμε αλλαγές κάθε βδομάδα.'],
        result: ['Μπήκε σε λειτουργία τον Σεπτέμβριο του 2026, και το προσωπικό το χρησιμοποιεί κάθε μέρα.'],
      },
    },
    quote: null,
    lastmod: SHIP,
  }),
  project({
    slug: 'catalytics-apps',
    status: 'live',
    order: 2,
    homeCard: true,
    attribution: 'company',
    client: {name: 'Catalytics'},
    permission: {kind: 'his-decision', date: '2026-10-21', source: 'His answer: "we did the software for them" (offer-os broad home WHO-WE-WORKED-WITH.md, BR-D26)', scope: ['name']},
    services: ['apps'],
    period: {start: '2024-10'},
    images: [],
    // catalytics.pro moved here from the footer's Projects column, which BR-G04 removed.
    links: {
      live: 'https://catalytics.pro/',
      appStore: 'https://apps.apple.com/app/id6754300115',
      googlePlay: 'https://play.google.com/store/apps/details?id=pro.catalytics.mobile',
    },
    sector: {en: 'Analytics software', el: 'Λογισμικό ανάλυσης δεδομένων'},
    factSource: 'iTunes lookup id6754300115 and the Play listing pro.catalytics.mobile, read 2026-10-22',
    facts: [
      {key: 'period', value: {en: 'October 2024 to today', el: 'Οκτώβριος 2024 ως σήμερα'}, source: 'WHO-WE-WORKED-WITH.md, final inventory'},
      {key: 'status', value: {en: 'Live on the App Store and Google Play', el: 'Διαθέσιμες στο App Store και στο Google Play'}, source: 'store listings, read 2026-10-22'},
      {key: 'platforms', value: {en: 'iOS, Android, web', el: 'iOS, Android, διαδίκτυο'}, source: 'store listings, read 2026-10-22'},
    ],
    text: {
      en: {
        metaTitle: 'Catalytics: iOS, Android and web apps | Fiji Solutions',
        metaDescription: 'We built the Catalytics apps for iOS, Android and the web. The iOS app has been on the App Store since October 2025, and the Android app is on Google Play.',
        h1: 'Catalytics: iOS, Android and web apps',
        cardLine: 'iOS, Android and web apps, published on the App Store and Google Play.',
        situation: ['Catalytics is an analytics product, and it needed apps for iPhone, for Android and for the web.'],
        built: ['We did the software for Catalytics: an iOS app, an Android app and a web app, and we published the mobile apps on the App Store and Google Play.'],
        result: ['The iOS app has been on the App Store since 31 October 2025, and the Android app is on Google Play.'],
      },
      el: {
        metaTitle: 'Catalytics: εφαρμογές για iOS, Android και το διαδίκτυο | Fiji Solutions',
        metaDescription: 'Φτιάξαμε τις εφαρμογές του Catalytics για iOS, Android και το διαδίκτυο. Η εφαρμογή iOS είναι στο App Store από τον Οκτώβριο του 2025, και η Android στο Google Play.',
        h1: 'Catalytics: εφαρμογές για iOS, Android και το διαδίκτυο',
        cardLine: 'Εφαρμογές για iOS και Android και διαδικτυακή εφαρμογή, με τις εφαρμογές για κινητά στο App Store και στο Google Play.',
        situation: ['Το Catalytics είναι προϊόν ανάλυσης δεδομένων, και χρειαζόταν εφαρμογές για iPhone, για Android και για το διαδίκτυο.'],
        built: ['Φτιάξαμε το λογισμικό του Catalytics: μια εφαρμογή iOS, μια εφαρμογή Android και μια διαδικτυακή εφαρμογή, και δημοσιεύσαμε τις εφαρμογές για κινητά στο App Store και στο Google Play.'],
        result: ['Η εφαρμογή iOS είναι στο App Store από τις 31 Οκτωβρίου 2025, και η εφαρμογή Android στο Google Play.'],
      },
    },
    quote: null,
    lastmod: SHIP,
  }),
  project({
    slug: 'new-era-learning-platform',
    status: 'live',
    order: 3,
    homeCard: true,
    attribution: 'company',
    client: {name: 'New Era Learning'},
    permission: {kind: 'verbal', date: '2026-10-07', source: 'The client agreed to be named, per Charis (offer-os F-D22)', scope: ['name']},
    services: ['custom-software', 'data'],
    relatedService: 'services/snowflake-consulting-greece',
    images: [],
    links: {},
    sector: {en: 'Online education', el: 'Διαδικτυακή εκπαίδευση'},
    factSource: 'offer-os companies/fiji-solutions/proof/2026-10-new-era-learning.md, F-D22, F-D30, F-D154',
    facts: [
      {key: 'location', value: {en: 'Dubai', el: 'Ντουμπάι'}, source: 'proof record'},
      {key: 'stack', value: both('Snowflake'), source: 'proof record'},
    ],
    text: {
      en: {
        metaTitle: 'New Era Learning: platform work and Snowflake | Fiji Solutions',
        metaDescription: 'We helped New Era Learning, an online learning platform, build its platform, and built a Snowflake setup that turns its data into customer and revenue insights.',
        h1: 'New Era Learning: platform work and a Snowflake data setup',
        cardLine: 'Platform work and a Snowflake setup that turns platform data into customer and revenue insights.',
        situation: ['New Era Learning is an online learning platform, based in Dubai.'],
        built: ["We helped build the platform, and we built a Snowflake data setup that extracts the platform's data."],
        result: ["The platform's data now becomes customer and revenue insights."],
      },
      el: {
        metaTitle: 'New Era Learning: πλατφόρμα και Snowflake | Fiji Solutions',
        metaDescription: 'Βοηθήσαμε το New Era Learning, μια πλατφόρμα διαδικτυακής εκπαίδευσης, να χτίσει την πλατφόρμα του, και στήσαμε στη Snowflake ένα σύστημα που μετατρέπει τα δεδομένα του σε καθαρή εικόνα για τους πελάτες και τα έσοδα.',
        h1: 'New Era Learning: δουλειά στην πλατφόρμα και ένα σύστημα δεδομένων στη Snowflake',
        cardLine: 'Δουλειά στην πλατφόρμα και ένα σύστημα στη Snowflake που μετατρέπει τα δεδομένα της πλατφόρμας σε καθαρή εικόνα για τους πελάτες και τα έσοδα.',
        situation: ['Το New Era Learning είναι πλατφόρμα διαδικτυακής εκπαίδευσης, με έδρα στο Ντουμπάι.'],
        built: ['Βοηθήσαμε να χτιστεί η πλατφόρμα, και στήσαμε στη Snowflake ένα σύστημα που εξάγει τα δεδομένα της.'],
        result: ['Από τα δεδομένα της πλατφόρμας βγαίνει πια καθαρή εικόνα για τους πελάτες και τα έσοδά της.'],
      },
    },
    quote: null,
    lastmod: SHIP,
  }),
  project({
    slug: 'jupiter-developer-relations',
    status: 'live',
    order: 4,
    homeCard: true,
    attribution: 'company',
    client: {name: 'Jupiter'},
    permission: {kind: 'his-decision', date: '2026-10-21', source: "His answer: he and a partner created Jupiter's developer relations, and Jupiter counts as a client (BR-D26)", scope: ['name']},
    services: ['custom-software'],
    period: {start: '2025-02', end: '2025-11'},
    images: [],
    links: {
      live: 'https://pypi.org/project/jup-python-sdk/',
      liveLabel: {en: 'Python SDK on PyPI', el: 'Το Python SDK στο PyPI'},
      more: [{href: 'https://crates.io/crates/jup-ag-sdk', label: {en: 'Rust SDK on crates.io', el: 'Το Rust SDK στο crates.io'}}],
    },
    factSource: 'WHO-WE-WORKED-WITH.md row 8 and his answers of 2026-10-21; PyPI read 2026-10-22',
    facts: [
      {key: 'period', value: {en: 'February 2025 to November 2025', el: 'Φεβρουάριος 2025 ως Νοέμβριος 2025'}, source: 'WHO-WE-WORKED-WITH.md row 8'},
      {key: 'stack', value: both('Python, Rust'), source: 'WHO-WE-WORKED-WITH.md row 8'},
    ],
    text: {
      en: {
        metaTitle: 'Jupiter: developer relations and the official Python SDK | Fiji Solutions',
        metaDescription: "With a partner, we set up Jupiter's developer relations: the official Python SDK, the Rust SDK release pipeline, code examples and a talk.",
        h1: 'Jupiter: developer relations, SDKs and code examples',
        cardLine: "With a partner, we set up Jupiter's developer relations: the official Python SDK, the Rust SDK release pipeline, code examples and a talk.",
        situation: ['Jupiter had no developer relations before we started.'],
        built: ["With a partner, we set up Jupiter's developer relations. We wrote the official Python SDK, built the release pipeline of the Rust SDK, wrote the Python code examples, had changes merged into Jupiter's own code and documentation, and gave a talk at a Superteam Germany event in July 2025."],
        result: ['Developers install the Python SDK from PyPI and the Rust SDK from crates.io.'],
      },
      el: {
        metaTitle: 'Jupiter: κοινότητα προγραμματιστών και το επίσημο Python SDK | Fiji Solutions',
        metaDescription: 'Με έναν συνεργάτη στήσαμε τη σχέση της Jupiter με την κοινότητα των προγραμματιστών: το επίσημο Python SDK, τη διαδικασία κυκλοφορίας του Rust SDK, παραδείγματα κώδικα και μια ομιλία.',
        h1: 'Jupiter: κοινότητα προγραμματιστών, SDK και παραδείγματα κώδικα',
        cardLine: 'Με έναν συνεργάτη στήσαμε τη σχέση της Jupiter με την κοινότητα των προγραμματιστών: το επίσημο Python SDK, τη διαδικασία κυκλοφορίας του Rust SDK, παραδείγματα κώδικα και μια ομιλία.',
        situation: ['Πριν ξεκινήσουμε, η Jupiter δεν είχε οργανωμένη σχέση με την κοινότητα των προγραμματιστών.'],
        built: ['Με έναν συνεργάτη στήσαμε τη σχέση της Jupiter με την κοινότητα των προγραμματιστών. Γράψαμε το επίσημο Python SDK, στήσαμε τη διαδικασία κυκλοφορίας του Rust SDK, γράψαμε τα παραδείγματα κώδικα σε Python, περάσαμε αλλαγές στον κώδικα και στην τεκμηρίωση της ίδιας της Jupiter, και μιλήσαμε σε εκδήλωση της Superteam Germany τον Ιούλιο του 2025.'],
        result: ['Οι προγραμματιστές εγκαθιστούν το Python SDK από το PyPI και το Rust SDK από το crates.io.'],
      },
    },
    quote: null,
    lastmod: SHIP,
  }),
  project({
    slug: 'alumil-snowflake-poc',
    status: 'live',
    order: 5,
    homeCard: true,
    attribution: 'company',
    client: {name: 'Alumil'},
    permission: {kind: 'his-decision', date: '2026-10-21', source: 'His answer: "yes"; the repositories stay private, no numbers (BR-D26)', scope: ['name']},
    services: ['data'],
    relatedService: 'services/snowflake-consulting-greece',
    period: {start: '2025-09', end: '2025-11'},
    images: [],
    links: {},
    sector: {en: 'Manufacturing', el: 'Βιομηχανία'},
    factSource: 'WHO-WE-WORKED-WITH.md row 4 and his "yes" of 2026-10-21',
    facts: [
      {key: 'period', value: {en: 'September 2025 to November 2025', el: 'Σεπτέμβριος 2025 ως Νοέμβριος 2025'}, source: 'WHO-WE-WORKED-WITH.md row 4'},
      {key: 'status', value: {en: 'Proof of concept', el: 'Πιλοτικό έργο'}, source: 'WHO-WE-WORKED-WITH.md row 4'},
      {key: 'stack', value: both('Snowflake'), source: 'WHO-WE-WORKED-WITH.md row 4'},
    ],
    text: {
      en: {
        metaTitle: 'Alumil: a Snowflake proof of concept | Fiji Solutions',
        metaDescription: 'We built a Snowflake proof of concept for Alumil, with data captured from the machines on the factory floor.',
        h1: 'Alumil: a Snowflake proof of concept with factory floor data',
        cardLine: 'A Snowflake proof of concept for Alumil with data captured on the factory floor.',
        situation: ['Alumil asked for a proof of concept on Snowflake.'],
        built: ['We built a proof of concept: data captured from machines on the factory floor, brought into Snowflake.'],
        result: ['The proof of concept ran from September to November 2025.'],
      },
      el: {
        metaTitle: 'Alumil: πιλοτικό έργο στη Snowflake | Fiji Solutions',
        metaDescription: 'Φτιάξαμε για την Alumil ένα πιλοτικό έργο στη Snowflake, με δεδομένα από τα μηχανήματα της γραμμής παραγωγής.',
        h1: 'Alumil: πιλοτικό έργο στη Snowflake με δεδομένα από τη γραμμή παραγωγής',
        cardLine: 'Πιλοτικό έργο στη Snowflake για την Alumil, με δεδομένα από τη γραμμή παραγωγής.',
        situation: ['Η Alumil ζήτησε ένα πιλοτικό έργο στη Snowflake.'],
        built: ['Φτιάξαμε ένα πιλοτικό έργο: δεδομένα από μηχανήματα της γραμμής παραγωγής, που καταλήγουν στη Snowflake.'],
        result: ['Το πιλοτικό έργο κράτησε από τον Σεπτέμβριο ως τον Νοέμβριο του 2025.'],
      },
    },
    quote: null,
    lastmod: SHIP,
  }),
  project({
    slug: 'o-topos-mou-archive-rebuild',
    status: 'live',
    order: 6,
    homeCard: true,
    attribution: 'company',
    client: {name: 'Ο Τόπος Μου'},
    permission: {kind: 'his-decision', date: '2026-10-21', source: 'His answer: "yes" (BR-D26); never on Peak Code (BR-D35)', scope: ['name']},
    services: ['websites'],
    relatedOffer: 'offers/website-seo',
    period: {start: '2026-07'},
    images: [],
    // No link until production switches: the staging host is not linked.
    links: {},
    sector: {en: 'Volunteer group, local community site', el: 'Εθελοντική ομάδα, τοπική ιστοσελίδα'},
    factSource: 'the tsolas and otoposmou-wordpress READMEs, WHO-WE-WORKED-WITH.md row 6, his "yes" of 2026-10-21',
    facts: [
      {key: 'period', value: {en: 'July 2026 to today', el: 'Ιούλιος 2026 ως σήμερα'}, source: 'otoposmou-wordpress README'},
      {key: 'status', value: {en: 'On staging', el: 'Σε δοκιμαστική λειτουργία'}, source: 'otoposmou.gr still on the old Joomla site, read 2026-10-22'},
      {key: 'stack', value: both('WordPress, AWS'), source: 'otoposmou-wordpress README'},
    ],
    text: {
      en: {
        metaTitle: 'Ο Τόπος Μου: an archive recovered and a new WordPress site | Fiji Solutions',
        metaDescription: 'We recovered 1,873 articles and 16 polls from the old Joomla site of Ο Τόπος Μου, a volunteer group in Pieria, and built its new site on WordPress, now on staging.',
        h1: 'Ο Τόπος Μου: an old archive recovered, and a new site on WordPress',
        cardLine: '1,873 articles and 16 polls recovered from an old Joomla site, and a new WordPress site on staging.',
        situation: ['Ο Τόπος Μου is a volunteer group in Pieria. Its community site for Katerini and Pieria holds articles from 2004 to 2020 and runs on Joomla, which has reached its end of life.'],
        built: ['From a database backup of the old site, we recovered 1,873 articles and 16 polls with their results. We built the new site on WordPress, running on AWS.'],
        result: ['The new site runs on staging until the switch to production.'],
      },
      el: {
        metaTitle: 'Ο Τόπος Μου: ανάκτηση αρχείου και νέα ιστοσελίδα WordPress | Fiji Solutions',
        metaDescription: 'Ανακτήσαμε 1.873 άρθρα και 16 δημοσκοπήσεις από την παλιά ιστοσελίδα Joomla της εθελοντικής ομάδας «Ο Τόπος Μου» στην Πιερία, και φτιάξαμε τη νέα της ιστοσελίδα σε WordPress, που είναι σε δοκιμαστική λειτουργία.',
        h1: 'Ο Τόπος Μου: ανάκτηση ενός παλιού αρχείου και νέα ιστοσελίδα σε WordPress',
        cardLine: '1.873 άρθρα και 16 δημοσκοπήσεις ανακτήθηκαν από μια παλιά ιστοσελίδα Joomla, και μια νέα ιστοσελίδα WordPress είναι σε δοκιμαστική λειτουργία.',
        situation: ['Ο Τόπος Μου είναι εθελοντική ομάδα στην Πιερία. Η ιστοσελίδα της για την Κατερίνη και την Πιερία έχει άρθρα από το 2004 ως το 2020 και τρέχει σε Joomla, που δεν υποστηρίζεται πια.'],
        built: ['Από ένα αντίγραφο της βάσης δεδομένων της παλιάς ιστοσελίδας, ανακτήσαμε 1.873 άρθρα και 16 δημοσκοπήσεις με τα αποτελέσματά τους. Φτιάξαμε τη νέα ιστοσελίδα σε WordPress, που τρέχει στο AWS.'],
        result: ['Η νέα ιστοσελίδα τρέχει σε δοκιμαστική λειτουργία ως τη μετάβαση στην παραγωγή.'],
      },
    },
    quote: null,
    lastmod: SHIP,
  }),
  project({
    slug: 'seaflows-direct-booking',
    status: 'live',
    order: 7,
    homeCard: false,
    attribution: 'company',
    client: {name: 'Seaflows'},
    permission: {kind: 'his-decision', date: '2026-10-21', source: 'His decision, the name now; logo and screenshot after the owner\'s yes (BR-D21, BR-D34)', scope: ['name']},
    services: ['websites'],
    relatedOffer: 'offers/website-seo',
    period: {start: '2026-09'},
    images: [],
    links: {live: 'https://seaflows.gr'},
    sector: {en: 'Holiday rentals', el: 'Τουριστικά καταλύματα'},
    factSource: 'WHO-WE-WORKED-WITH.md and the Seaflows project brief; seaflows.gr returns 200, read 2026-10-22',
    facts: [
      {key: 'period', value: {en: 'September 2026 to today', el: 'Σεπτέμβριος 2026 ως σήμερα'}, source: 'WHO-WE-WORKED-WITH.md'},
      {key: 'status', value: {en: 'Live', el: 'Σε λειτουργία'}, source: 'seaflows.gr, read 2026-10-22'},
    ],
    text: {
      en: {
        metaTitle: 'Seaflows: a direct booking website | Fiji Solutions',
        metaDescription: 'We built Seaflows a direct booking website, so its guests can book on seaflows.gr.',
        h1: 'Seaflows: a direct booking website',
        cardLine: 'A direct booking website.',
        situation: ['Seaflows wanted its guests to be able to book directly on its own website.'],
        built: ['We built Seaflows a direct booking website.'],
        result: ['The site is live at seaflows.gr.'],
      },
      el: {
        metaTitle: 'Seaflows: ιστοσελίδα για απευθείας κρατήσεις | Fiji Solutions',
        metaDescription: 'Φτιάξαμε για τη Seaflows ιστοσελίδα για απευθείας κρατήσεις, ώστε οι φιλοξενούμενοί της να κάνουν κράτηση απευθείας στο seaflows.gr.',
        h1: 'Seaflows: ιστοσελίδα για απευθείας κρατήσεις',
        cardLine: 'Ιστοσελίδα για απευθείας κρατήσεις.',
        situation: ['Η Seaflows ήθελε οι φιλοξενούμενοί της να κάνουν κράτηση απευθείας από τη δική της ιστοσελίδα.'],
        built: ['Φτιάξαμε για τη Seaflows μια ιστοσελίδα για απευθείας κρατήσεις.'],
        result: ['Η ιστοσελίδα λειτουργεί στο seaflows.gr.'],
      },
    },
    quote: null,
    lastmod: SHIP,
  }),
];

/** Every published project, by `order`: the index page and the routes. */
export const LIVE_PROJECTS: readonly Project[] = [...PROJECTS]
  .filter((p) => p.status === 'live')
  .sort((a, b) => a.order - b.order);

/** The cards the homepage shows: the first six by `order`. */
export const HOME_PROJECTS: readonly Project[] = LIVE_PROJECTS.filter((p) => p.homeCard).slice(0, 6);

export function projectBySlug(slug: string): Project | undefined {
  return LIVE_PROJECTS.find((p) => p.slug === slug);
}
