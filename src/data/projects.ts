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
// `images` holds cleared screenshots only (BR-G26): a screen with mock data only (`mockData: true`), or a public
// page of the client's own site that shows no client data, no person and no price (`publicPage: true`, checked
// before commit and logged in offer-os). The first is the Seaflows home, captured 2026-10-26 with the owner's yes
// (BR-D34). ~~`quote` stays null until a real review or quote arrives with consent (BR-G29).~~ 2026-10-30 (offer-os
// gtm/seo-plan-2026-10 D13, D-129): the `quote` field left this file; a project's review is an entry in
// src/data/reviews.ts that names its slug in `project`, and its page shows it from there. The client logos live in
// src/data/clients.ts (BR-G25). Ο Τόπος Μου says "on staging" until its production site switches (read
// 2026-10-22: otoposmou.gr still runs the old Joomla site). Hapimag's page is written from his context of
// 2026-10-22 (BR-G28, offer-os BR-D34), never in his words, and never names the employer of that time.
//
// `lastmod` is the ship date; set it to the deploy date if BR-G08 lands on a later day (src/lib/routes.ts reads it).
//
// 2026-10-29 (offer-os gtm/seo-plan-2026-10 D2, audit CONT-2): every page was rewritten to 300 to 500 words from the
// dated "## D1 facts" section of its proof file in offer-os `companies/fiji-solutions/proof/`, with his rulings D-87
// (every job is a client job, Catalytics included), D-88 (New Era Learning in the United Arab Emirates), D-89 (his
// Hapimag areas and stack), D-90 ("official" Python SDK, the Jupiter DevRel Working Group) and D-91 (periods from
// the code history). The contract in 03-copy-home.md carries the same text.

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
  /** `locale` limits an image to one locale's page (a screenshot of the Greek site on the Greek page, IMG-7). */
  images: {src: string; alt: Record<Language, string>; mockData: boolean; publicPage?: boolean; locale?: Language}[];
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

// The ship date of the first pages was 2026-10-23. The D2 rewrite of every project page from the D1 facts (offer-os seo-plan D2, 2026-10-29).
const D2_SHIP = '2026-10-29';

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
    sector: {en: 'Hair loss and hair prosthetics', el: 'Τριχόπτωση και προσθετική μαλλιών'},
    factSource: 'offer-os companies/fiji-solutions/proof/2026-10-pap-center-crm.md, F-D20, D77; rewritten from the D1 facts in offer-os seo-plan D2 (D-87 to D-91)',
    facts: [
      {key: 'location', value: {en: 'Thessaloniki, Greece', el: 'Θεσσαλονίκη, Ελλάδα'}, source: 'client\'s own contact page, read 2026-10-29 (D1 facts)'},
      {key: 'period', value: {en: 'July 2026 to today', el: 'Ιούλιος 2026 έως σήμερα'}, source: 'offer-os proof record F-D20; git log 2026-W27 to 2026-W44 (D1 facts)'},
      {key: 'status', value: {en: 'Live since September 2026', el: 'Σε λειτουργία από τον Σεπτέμβριο του 2026'}, source: 'Charis, F-D20, 2026-10-07'},
      {key: 'platforms', value: {en: 'Web app, Greek interface', el: 'Web εφαρμογή, στα ελληνικά'}, source: 'D1 facts, What was built'},
      {key: 'stack', value: both('Next.js, Bun, PostgreSQL, AWS, Vercel'), source: 'D1 facts, Stack (our project README stack table; commit 2026-07-03)'},
    ],
    text: {
      en: {
        metaTitle: 'PAP Center: custom CRM for a hair-loss centre | Fiji Solutions',
        metaDescription: 'We built a custom CRM for PAP Center, a hair-loss and hair prosthetics centre in Thessaloniki: customers, stock, expenses, reports. Live since September 2026.',
        h1: 'PAP Center: a custom CRM for a hair-loss centre in Thessaloniki',
        cardLine: 'Custom CRM for a hair-loss centre in Thessaloniki. Live since September 2026, used daily by the staff.',
        situation: [
          'PAP Center is a hair-loss centre in Thessaloniki. By its own account it was founded in the early 1980s. It specialises in thickening thin hair for women and men with hair prosthetics, fits wigs, and sells hair and wig care products.',
          'The centre kept its customers, stock, expenses and reports in an old program built for Windows XP. That program no longer worked properly on current Windows, and the team was afraid it would stop working altogether.',
          'The people who would use its replacement are not technical users, so the new system had to be calm and easy to read.',
        ],
        built: [
          'We built PAP Center a custom web CRM with a Greek interface. It serves the shop and service side of the business: products, hairpieces, wigs and services. Its screens are Home, Customers, Inventory, Expenses, Reports and Settings.',
          'The customer list has category filters that are remembered between visits, accent-insensitive search, autocomplete for city and profession, a warning when a new customer may be a duplicate, and drafts that survive leaving the form.',
          'Each customer card reads like a bank statement. Every entry is one movement that carries both the charge and the amount paid, with a running balance in red or green. Everything saved in one go shows as one entry. A movement can be products, services, an advance payment, a payment on account or a no-stock entry, and each one records how it was paid.',
          'Inventory holds products and services, categories such as wigs, hairpieces and care products, purchase and sale prices, purchases from suppliers, product photos and stock per location. Barcodes can be scanned with a keyboard-wedge scanner. Expenses carry their uploaded receipts, and the reports show outstanding balances and income, expenses and net per month or year.',
          'An admin creates every account, and each user is a viewer, a writer or an admin. Both the screens and the backend enforce those roles.',
          'A front-end demo on mock data came first, in June 2026. Building the production app on a real backend began in July 2026, keeping the demo\'s look and feel. Data from the old program is entered by hand.',
          'The owner decides what changes, and each decision becomes a Jira ticket. AI agents implement and review the change, and each approved change deploys to staging first, then to production, with database migrations running before each rollout.',
          'The frontend is Next.js with TypeScript and Tailwind, hosted on Vercel, with sign-in through Amazon Cognito. The backend runs Bun, Elysia and Drizzle ORM on PostgreSQL. Backend and data run on AWS, with private S3 storage for product photos and receipts. GitHub Actions runs the pipeline.',
        ],
        result: [
          'The CRM replaced the old Windows program. It went live in September 2026, and the staff use it every day.',
          'We have shipped changes every week since July 2026, and the work continues.',
        ],
      },
      el: {
        metaTitle: 'PAP Center: CRM στα μέτρα κέντρου τριχόπτωσης | Fiji Solutions',
        metaDescription: 'CRM στα μέτρα του PAP Center, κέντρου τριχόπτωσης και προσθετικής μαλλιών στη Θεσσαλονίκη: πελάτες, αποθήκη, έξοδα. Λειτουργεί από τον Σεπτέμβριο του 2026.',
        h1: 'PAP Center: CRM στα μέτρα ενός κέντρου τριχόπτωσης στη Θεσσαλονίκη',
        cardLine: 'CRM στα μέτρα ενός κέντρου τριχόπτωσης στη Θεσσαλονίκη. Σε λειτουργία από τον Σεπτέμβριο του 2026. Το προσωπικό το χρησιμοποιεί κάθε μέρα.',
        situation: [
          'Το PAP Center είναι κέντρο τριχόπτωσης στη Θεσσαλονίκη. Σύμφωνα με τον ιστότοπό του, ιδρύθηκε στις αρχές της δεκαετίας του ’80. Ειδικεύεται στην πύκνωση μαλλιών για γυναίκες και άνδρες με προσθετική, εφαρμόζει περούκες και πουλά προϊόντα περιποίησης για μαλλιά και περούκες.',
          'Για πελάτες, αποθήκη, έξοδα και αναφορές, το κέντρο χρησιμοποιούσε ένα παλιό πρόγραμμα φτιαγμένο για Windows XP. Το πρόγραμμα δεν δούλευε πια σωστά στα σημερινά Windows και η ομάδα φοβόταν ότι θα σταματούσε εντελώς.',
          'Όσοι θα δούλευαν με το νέο σύστημα δεν είναι άνθρωποι της τεχνολογίας, οπότε αυτό έπρεπε να είναι λιτό και ευανάγνωστο.',
        ],
        built: [
          'Φτιάξαμε για το PAP Center ένα web CRM στα μέτρα του, με περιβάλλον στα ελληνικά. Καλύπτει ό,τι πουλά και προσφέρει το κέντρο: προϊόντα, πρόσθετα μαλλιών, περούκες και υπηρεσίες. Έχει οθόνες για αρχική, πελάτες, αποθήκη, έξοδα, αναφορές και ρυθμίσεις.',
          'Η λίστα πελατών έχει φίλτρα κατηγορίας που μένουν αποθηκευμένα, αναζήτηση που αγνοεί τους τόνους, αυτόματη συμπλήρωση για πόλη και επάγγελμα, προειδοποίηση για πιθανούς διπλούς πελάτες και πρόχειρα που δεν χάνονται αν φύγει κανείς από τη φόρμα.',
          'Η καρτέλα του πελάτη διαβάζεται σαν αντίγραφο κίνησης τραπεζικού λογαριασμού. Κάθε εγγραφή είναι μία κίνηση με τη χρέωση και την πληρωμή μαζί. Το τρέχον υπόλοιπο φαίνεται με κόκκινο ή πράσινο. Ό,τι καταχωρίζεται με μία αποθήκευση εμφανίζεται ως μία εγγραφή. Μια κίνηση μπορεί να είναι προϊόντα, υπηρεσίες, προκαταβολή, πληρωμή έναντι ή εγγραφή χωρίς απόθεμα και καθεμία καταγράφει τον τρόπο πληρωμής.',
          'Η αποθήκη έχει προϊόντα και υπηρεσίες, κατηγορίες όπως περούκες, πρόσθετα και προϊόντα περιποίησης, τιμές αγοράς και πώλησης, αγορές από προμηθευτές, φωτογραφίες προϊόντων και απόθεμα ανά σημείο. Τα barcode σαρώνονται με σαρωτή τύπου πληκτρολογίου. Στα έξοδα επισυνάπτονται οι αποδείξεις. Οι αναφορές δείχνουν ανεξόφλητα υπόλοιπα και έσοδα, έξοδα και καθαρό αποτέλεσμα ανά μήνα ή έτος.',
          'Λογαριασμούς ανοίγει μόνο διαχειριστής και κάθε χρήστης έχει ρόλο αναγνώστη, συντάκτη ή διαχειριστή. Οι ρόλοι ισχύουν τόσο στις οθόνες όσο και στο backend.',
          'Πρώτα, τον Ιούνιο του 2026, φτιάξαμε ένα demo του frontend με δοκιμαστικά δεδομένα. Τον Ιούλιο του 2026 ξεκίνησε η κατασκευή της εφαρμογής παραγωγής, σε πραγματικό backend και με την ίδια όψη. Τα παλιά δεδομένα περνιούνται με το χέρι.',
          'Ο ιδιοκτήτης αποφασίζει τι αλλάζει και κάθε απόφαση γίνεται ticket στο Jira. Την αλλαγή την υλοποιούν και την ελέγχουν AI agents. Κάθε εγκεκριμένη αλλαγή περνά πρώτα στο staging και μετά στην παραγωγή. Τα migrations της βάσης τρέχουν πριν από κάθε deploy.',
          'Το frontend είναι σε Next.js με TypeScript και Tailwind, φιλοξενείται στο Vercel και η σύνδεση γίνεται μέσω Amazon Cognito. Το backend, σε Bun, Elysia και Drizzle ORM με PostgreSQL, φιλοξενείται μαζί με τα δεδομένα στο AWS. Οι φωτογραφίες προϊόντων και οι αποδείξεις μένουν σε ιδιωτικό χώρο στο S3. Το pipeline τρέχει σε GitHub Actions.',
        ],
        result: [
          'Το CRM αντικατέστησε το παλιό πρόγραμμα των Windows. Μπήκε σε λειτουργία τον Σεπτέμβριο του 2026 και το προσωπικό το χρησιμοποιεί κάθε μέρα.',
          'Από τον Ιούλιο του 2026 παραδίδουμε αλλαγές κάθε εβδομάδα και η δουλειά συνεχίζεται.',
        ],
      },
    },
    lastmod: D2_SHIP,
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
    factSource: 'iTunes lookup id6754300115 and the Play listing pro.catalytics.mobile, read 2026-10-22; rewritten from the D1 facts in offer-os seo-plan D2 (D-87 to D-91)',
    facts: [
      {key: 'period', value: {en: 'October 2024 to today', el: 'Από τον Οκτώβριο του 2024 έως σήμερα'}, source: 'git history: first commits 2024-10-04 (web UI) and 2024-10-05 (API), proof/2026-10-catalytics.md Duration'},
      {key: 'status', value: {en: 'Live on the web, the App Store and Google Play', el: 'Διαθέσιμο στο web, στο App Store και στο Google Play'}, source: 'iTunes lookup id6754300115 (release 2025-10-31), Play listing pro.catalytics.mobile, catalytics.pro HTTP 200, all read 2026-10-29'},
      {key: 'platforms', value: both('iOS, Android, web'), source: 'store listings and catalytics.pro, read 2026-10-29'},
      {key: 'stack', value: both('Python, FastAPI, PostgreSQL, AWS Lambda, Angular, Expo'), source: 'proof/2026-10-catalytics.md Stack row (requirements.txt, package.json, webhook README)'},
    ],
    text: {
      en: {
        metaTitle: 'Catalytics: analytics platform and mobile apps | Fiji Solutions',
        metaDescription: 'With a partner, we built the software for Catalytics: data ingest, an API, an Angular web app and Expo mobile apps on the App Store and Google Play.',
        h1: 'Catalytics: analytics platform, API and mobile apps',
        cardLine: 'Data ingest, API, web app and mobile apps for an analytics platform, built with a partner.',
        situation: [
          'Catalytics is an analytics app and web platform. People enter a public account address and see a profile, ranks, charts and history for it.',
          'We did the software for Catalytics, together with a partner, from October 2024.',
          'The work covered every layer: taking in data as it arrives, storing it and building aggregates from it, serving it through an API, and showing it in the browser and on phones.',
        ],
        built: [
          'On the data side, an ingest function receives webhook notifications, decodes them and stores the data in PostgreSQL. It runs on AWS Lambda, with the infrastructure defined in Terraform and a Valkey cache. We started building it in March 2025.',
          'Background jobs build aggregates from the stored data.',
          'A REST and websocket API serves that data to the apps. It is written in Python 3.12 with FastAPI, SQLAlchemy 2.0, Alembic and APScheduler. Changes to the database schema go through a separate migration runner. Builds and deploys run on GitLab CI with Docker.',
          'The web app is built in Angular 18 with Angular Material and Chart.js, and it is hosted on Vercel. It has a profile view, history pages and analysis pages.',
          'The mobile app is one Expo and React Native codebase that wraps the web app. It shows the web app full screen inside a mobile shell, with a back button and an error message when the phone loses its connection. iPhone and Android users get the same product as in the browser. We built it in October and November 2025 and published it on the App Store and Google Play.',
          'The work was split by layer. Our partner built most of the web interface. We built the API, the data ingest, the background jobs and the mobile app.',
        ],
        result: [
          'Catalytics is live on three platforms: in the browser, on the App Store since 31 October 2025, and on Google Play.',
          'It is open to the public. On the website, anyone can look up data for an address without signing in or creating an account.',
        ],
      },
      el: {
        metaTitle: 'Catalytics: πλατφόρμα ανάλυσης και εφαρμογές | Fiji Solutions',
        metaDescription: 'Φτιάξαμε με έναν συνεργάτη το λογισμικό του Catalytics: λήψη δεδομένων, API, διαδικτυακή εφαρμογή και εφαρμογές για κινητά στο App Store και στο Google Play.',
        h1: 'Catalytics: πλατφόρμα ανάλυσης δεδομένων, API και εφαρμογές για κινητά',
        cardLine: 'Λήψη δεδομένων, API, διαδικτυακή εφαρμογή και εφαρμογές για κινητά σε μια πλατφόρμα ανάλυσης δεδομένων. Τα φτιάξαμε μαζί με έναν συνεργάτη.',
        situation: [
          'Το Catalytics είναι εφαρμογή και διαδικτυακή πλατφόρμα ανάλυσης δεδομένων. Πληκτρολογείς μια δημόσια διεύθυνση λογαριασμού και βλέπεις προφίλ, κατατάξεις, γραφήματα και ιστορικό για αυτήν.',
          'Φτιάξαμε το λογισμικό του Catalytics μαζί με έναν συνεργάτη, από τον Οκτώβριο του 2024.',
          'Η δουλειά κάλυψε όλα τα επίπεδα: την παραλαβή των δεδομένων τη στιγμή που φτάνουν, την αποθήκευσή τους και τον υπολογισμό συγκεντρωτικών στοιχείων, την παροχή τους μέσω ενός API και την προβολή τους στον browser και στο κινητό.',
        ],
        built: [
          'Στο κομμάτι των δεδομένων, μια συνάρτηση λήψης δεδομένων δέχεται ειδοποιήσεις μέσω webhook, τις αποκωδικοποιεί και αποθηκεύει τα δεδομένα σε PostgreSQL. Τρέχει σε AWS Lambda, η υποδομή της ορίζεται σε Terraform και έχει cache σε Valkey. Ξεκινήσαμε να τη φτιάχνουμε τον Μάρτιο του 2025.',
          'Οι εργασίες παρασκηνίου υπολογίζουν συγκεντρωτικά στοιχεία από τα αποθηκευμένα δεδομένα.',
          'Ένα API με REST και websockets παρέχει αυτά τα δεδομένα στις εφαρμογές. Είναι γραμμένο σε Python 3.12 με FastAPI, SQLAlchemy 2.0, Alembic και APScheduler. Οι αλλαγές στο σχήμα της βάσης περνούν από ξεχωριστό εργαλείο migrations. Τα builds και τα deploys τρέχουν σε GitLab CI με Docker.',
          'Η διαδικτυακή εφαρμογή είναι γραμμένη σε Angular 18 με Angular Material και Chart.js και φιλοξενείται στο Vercel. Έχει σελίδα προφίλ, σελίδες ιστορικού και σελίδες ανάλυσης.',
          'Η εφαρμογή για κινητά είναι μία ενιαία βάση κώδικα σε Expo και React Native, που φορτώνει μέσα της τη διαδικτυακή εφαρμογή. Τη δείχνει σε πλήρη οθόνη, με κουμπί επιστροφής και μήνυμα σφάλματος όταν χάνεται η σύνδεση. Στο iPhone και στο Android έχεις το ίδιο προϊόν που έχεις και στον browser. Τη φτιάξαμε τον Οκτώβριο και τον Νοέμβριο του 2025 και τη δημοσιεύσαμε στο App Store και στο Google Play.',
          'Τη δουλειά τη μοιράσαμε ανά επίπεδο. Ο συνεργάτης μας έφτιαξε το μεγαλύτερο μέρος της διεπαφής της διαδικτυακής εφαρμογής. Εμείς φτιάξαμε το API, τη λήψη των δεδομένων, τις εργασίες παρασκηνίου και την εφαρμογή για κινητά.',
        ],
        result: [
          'Το Catalytics λειτουργεί σήμερα σε τρεις πλατφόρμες: στον browser, στο App Store από τις 31 Οκτωβρίου 2025 και στο Google Play.',
          'Είναι ανοιχτό στο κοινό. Στον ιστότοπο ο καθένας μπορεί να δει δεδομένα για μια διεύθυνση χωρίς σύνδεση και χωρίς λογαριασμό.',
        ],
      },
    },
    lastmod: D2_SHIP,
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
    sector: {en: 'Online education company', el: 'Εταιρεία διαδικτυακής εκπαίδευσης'},
    factSource: 'offer-os companies/fiji-solutions/proof/2026-10-new-era-learning.md, F-D22, F-D30, F-D154; rewritten from the D1 facts in offer-os seo-plan D2 (D-87 to D-91)',
    facts: [
      {key: 'location', value: {en: 'United Arab Emirates', el: 'Ηνωμένα Αραβικά Εμιράτα'}, source: 'D-88 (seo-plan-2026-10, 2026-10-29); client\'s own site and Wikidata Q140078880, read 2026-10-29'},
      {key: 'status', value: {en: 'In use', el: 'Σε χρήση'}, source: 'proof file D1 facts, Result row (dashboards refresh on schedules, translation tool runs in production)'},
      {key: 'platforms', value: both('Web, Snowflake'), source: 'proof file D1 facts, What was built and Who uses it rows'},
      {key: 'stack', value: both('Snowflake, Streamlit, React, TypeScript, AWS'), source: 'proof file D1 facts, Stack row'},
    ],
    text: {
      en: {
        metaTitle: 'New Era Learning: Snowflake dashboards | Fiji Solutions',
        metaDescription: 'We helped New Era Learning build its platform. We also built Snowflake dashboards on customer and revenue data and a tool that translates video lessons.',
        h1: 'New Era Learning: Snowflake dashboards and a lesson translation tool',
        cardLine: 'Snowflake dashboards on customer and revenue data, and a tool that translates video lessons.',
        situation: [
          'New Era Learning is an online education company in the United Arab Emirates. It develops programs for the digital economy, taught through practitioner-led mentorship and learning applications, and runs its own learning platforms.',
          'We helped New Era Learning build its online learning platform. Around it we built a data setup in Snowflake and a tool that translates the platform\'s video lessons into other languages.',
        ],
        built: [
          'The first is the Snowflake data setup. Every night, scheduled jobs export data into Snowflake from the checkout database in PostgreSQL, product analytics in PostHog and message reaction events in ClickHouse. A monthly load runs as well, with recovery procedures.',
          'Inside Snowflake, the raw data becomes derived tables: monthly payment value, each account\'s status history, retention cohorts, and movement between programs.',
          'On those tables we built Streamlit dashboards that run inside Snowflake. They show monthly and daily performance, retention curves, how members move and overlap between programs, weekly student journeys, direct-message usage, and revenue: refunds, disputes, paid monthly recurring revenue, lifetime value, cancellations and acquisition. Each dashboard has an "About this app" panel and a glossary of its terms. A daily digest email is rendered from the same figures.',
          'The client\'s owner, staff and instructors open the dashboards in Snowflake\'s web interface, with view-only access limited to the dashboards.',
          'The second is the lesson translation tool. It fetches each lesson video from Cloudflare, stores a copy in Google Drive and tracks it in a database. A person submits each video to HeyGen\'s AI video translation by hand. The tool then pulls each translated version back and publishes it to Cloudflare. Its web front end, behind a login, shows the lessons and the translation status of each one.',
          'The front end is React with Material UI and a Clerk login. The backend is TypeScript on Bun, with Elysia, MongoDB, Redis and scheduled jobs. It runs in Docker on AWS EKS together with AWS Lambda, and GitHub Actions deploys it to staging and to production.',
        ],
        result: [
          'The platform\'s data now becomes customer and revenue insights that the client\'s team reads inside Snowflake. The dashboards refresh on schedules: overnight, weekly or monthly.',
          'The translation tool runs in production.',
        ],
      },
      el: {
        metaTitle: 'New Era Learning: dashboards στη Snowflake | Fiji Solutions',
        metaDescription: 'Βοηθήσαμε τη New Era Learning να στήσει την πλατφόρμα της. Φτιάξαμε dashboards στη Snowflake με δεδομένα πελατών και εσόδων και εργαλείο μετάφρασης μαθημάτων.',
        h1: 'New Era Learning: dashboards στη Snowflake και εργαλείο μετάφρασης μαθημάτων',
        cardLine: 'Dashboards στη Snowflake με δεδομένα πελατών και εσόδων, και ένα εργαλείο που μεταφράζει βιντεομαθήματα.',
        situation: [
          'Η New Era Learning είναι εταιρεία διαδικτυακής εκπαίδευσης στα Ηνωμένα Αραβικά Εμιράτα. Αναπτύσσει προγράμματα για την ψηφιακή οικονομία, που στηρίζονται σε καθοδήγηση από επαγγελματίες του χώρου και σε εφαρμογές μάθησης, και λειτουργεί τις δικές της εκπαιδευτικές πλατφόρμες.',
          'Βοηθήσαμε τη New Era Learning να στήσει την πλατφόρμα διαδικτυακής μάθησής της. Γύρω από αυτήν φτιάξαμε ένα σύστημα δεδομένων στη Snowflake και ένα εργαλείο που μεταφράζει τα βιντεομαθήματα της πλατφόρμας σε άλλες γλώσσες.',
        ],
        built: [
          'Το πρώτο είναι το σύστημα δεδομένων στη Snowflake. Κάθε βράδυ, προγραμματισμένες εργασίες μεταφέρουν στη Snowflake δεδομένα από τη βάση δεδομένων των πληρωμών σε PostgreSQL, τα analytics χρήσης από το PostHog και τις αντιδράσεις στα μηνύματα από το ClickHouse. Τρέχει επίσης μια μηνιαία φόρτωση, με διαδικασίες ανάκτησης.',
          'Μέσα στη Snowflake τα ακατέργαστα δεδομένα γίνονται παράγωγοι πίνακες: η μηνιαία αξία των πληρωμών, το ιστορικό κατάστασης κάθε λογαριασμού, τα cohorts διακράτησης και οι μετακινήσεις ανάμεσα στα προγράμματα.',
          'Πάνω σε αυτούς τους πίνακες φτιάξαμε dashboards σε Streamlit, που τρέχουν μέσα στη Snowflake. Δείχνουν την απόδοση ανά μήνα και ανά ημέρα, τις καμπύλες διακράτησης, πώς μετακινούνται τα μέλη ανάμεσα στα προγράμματα και πού επικαλύπτονται, την πορεία των μαθητών κάθε εβδομάδα, τη χρήση των προσωπικών μηνυμάτων και τα έσοδα: επιστροφές χρημάτων, αμφισβητήσεις πληρωμών, εισπραγμένα μηνιαία επαναλαμβανόμενα έσοδα (MRR), συνολική αξία πελάτη (LTV), ακυρώσεις και απόκτηση νέων πελατών. Κάθε dashboard έχει ένα πάνελ «About this app» και ένα γλωσσάρι με τους όρους του. Από τα ίδια στοιχεία βγαίνει και ένα ημερήσιο email σύνοψης.',
          'Ο ιδιοκτήτης της New Era Learning, το προσωπικό και οι εκπαιδευτές της ανοίγουν τα dashboards από το web περιβάλλον της Snowflake. Έχουν δικαίωμα μόνο προβολής, και μόνο στα dashboards.',
          'Το δεύτερο είναι το εργαλείο μετάφρασης μαθημάτων. Παίρνει κάθε βίντεο μαθήματος από το Cloudflare, κρατά αντίγραφο στο Google Drive και το καταγράφει σε βάση δεδομένων. Κάθε βίντεο το στέλνει χειροκίνητα ένας άνθρωπος στην υπηρεσία μετάφρασης βίντεο με AI του HeyGen. Μετά, το εργαλείο φέρνει πίσω κάθε μεταφρασμένη εκδοχή και τη δημοσιεύει στο Cloudflare. Ένα web περιβάλλον με σύνδεση χρήστη δείχνει τα μαθήματα και σε ποιο στάδιο βρίσκεται η μετάφραση του καθενός.',
          'Το front end είναι σε React με Material UI και σύνδεση μέσω Clerk. Το backend είναι σε TypeScript πάνω σε Bun, με Elysia, MongoDB, Redis και προγραμματισμένες εργασίες. Τρέχει σε Docker στο AWS EKS μαζί με AWS Lambda, και το GitHub Actions το ανεβάζει σε staging και σε production.',
        ],
        result: [
          'Τα δεδομένα της πλατφόρμας δίνουν πλέον εικόνα για τους πελάτες και τα έσοδα, και η ομάδα της New Era Learning τη βλέπει μέσα στη Snowflake. Τα dashboards ανανεώνονται σε τακτά διαστήματα: κάθε βράδυ, κάθε εβδομάδα ή κάθε μήνα.',
          'Το εργαλείο μετάφρασης λειτουργεί σε production.',
        ],
      },
    },
    lastmod: D2_SHIP,
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
    sector: {en: 'DeFi platform on Solana', el: 'Πλατφόρμα DeFi στο Solana'},
    factSource: 'WHO-WE-WORKED-WITH.md row 8 and his answers of 2026-10-21; PyPI read 2026-10-22; rewritten from the D1 facts in offer-os seo-plan D2 (D-87 to D-91)',
    facts: [
      {key: 'period', value: {en: 'February 2025 to November 2025', el: 'Από τον Φεβρουάριο ως τον Νοέμβριο του 2025'}, source: 'proof/2026-10-jupiter.md D1 facts, Duration (first commit 2025-02-10, last 2025-11-25)'},
      {key: 'status', value: {en: 'SDKs published on PyPI and crates.io', el: 'Τα SDK είναι δημοσιευμένα στο PyPI και στο crates.io'}, source: 'proof/2026-10-jupiter.md D1 facts, Result (PyPI 1.2.0 and crates.io 1.0.6, read 2026-10-29)'},
      {key: 'platforms', value: both('Solana, Jupiter APIs'), source: 'proof/2026-10-jupiter.md D1 facts, Stack (Platform line)'},
      {key: 'stack', value: both('Python, Rust, TypeScript, GitHub Actions'), source: 'proof/2026-10-jupiter.md D1 facts, Stack (TypeScript for the upstream quote API client changes)'},
    ],
    text: {
      en: {
        metaTitle: 'Jupiter: developer relations and Python SDK | Fiji Solutions',
        metaDescription: 'Developer relations for Jupiter on Solana: the official Python SDK, the Rust SDK release pipeline, code examples and support for community developers.',
        h1: 'Jupiter: developer relations, SDKs and code examples',
        cardLine: 'We were technical lead of Jupiter\'s DevRel Working Group. We wrote the official Python SDK, the Rust SDK release pipeline and code examples.',
        situation: [
          'Jupiter calls itself "the home of onchain finance". It is a DeFi platform on the Solana blockchain for swapping, lending, borrowing, perps, prediction markets and wallets. It also runs developer APIs that other builders call, among them Ultra, Swap, Trigger and Recurring.',
          'When we started in February 2025, Jupiter had no developer relations.',
          'On 24 March 2025, a proposal on the Jupiter Research forum asked for a three-member DevRel Working Group, with Fiji Solutions as its technical lead, to be "the first contact for technical community members and projects". The post credited us with over 1,000 messages in the developer support channel in the previous 30 days. Jupiter\'s DAO voted for the group, and on 4 April 2025 Jupiter Research reported that it had passed into a three-month trial period.',
        ],
        built: [
          'Inside the working group, we led the technical work of setting up Jupiter\'s developer relations. We supported community developers building on Jupiter\'s APIs.',
          'We wrote the official Python SDK for the Jupiter Ultra API. It covers the order, execute, order-and-execute, balances, holdings and shield endpoints, and it accepts a private key in base58 or as a uint8 array. It has typed request models, tests and its own examples. It is written in Python 3.9+ with Poetry, httpx, pydantic, solders and solana. CI runs pytest on every push, a local check script runs black, isort, flake8, mypy and pytest, and a version tag publishes the release to PyPI.',
          'For the Rust SDK, we built the CI and release pipeline in June 2025. It tests the crate, tags new versions automatically and publishes them to crates.io.',
          'We wrote a set of standalone Python examples for the Ultra, Swap, Trigger and Recurring APIs.',
          'We also had changes merged into Jupiter\'s own code. In its TypeScript client for the quote API, we added API key support in May 2025 and the payer field in the swap request in June 2025. In its documentation, we removed a field that the Ultra order response does not return.',
          'In July 2025, at a Superteam Germany meetup in Berlin, we gave a joint session introducing Jupiter, its DevRel work and its developer tools. We also appeared on podcasts.',
        ],
        result: [
          'The Python SDK is on PyPI. On 25 November 2025, versions 1.1.1 and 1.2.0 added a holdings endpoint and a signing fix, and 1.2.0 is the current version (PyPI, read October 2026). The Rust SDK is on crates.io at version 1.0.6 (crates.io, read October 2026).',
          'Developers who call Jupiter\'s APIs from Python install the SDK with pip, and Rust developers add the crate with cargo. In August 2025, Jupiter\'s developer documentation linked the DevRel examples on GitHub.',
        ],
      },
      el: {
        metaTitle: 'Jupiter: DevRel και το επίσημο Python SDK | Fiji Solutions',
        metaDescription: 'Το DevRel της Jupiter στο Solana: το επίσημο Python SDK, το release pipeline του Rust SDK, παραδείγματα κώδικα και υποστήριξη προγραμματιστών.',
        h1: 'Jupiter: DevRel, SDK και παραδείγματα κώδικα',
        cardLine: 'Είχαμε τον ρόλο του τεχνικού υπευθύνου στο DevRel Working Group της Jupiter. Γράψαμε το επίσημο Python SDK, το release pipeline του Rust SDK και παραδείγματα κώδικα.',
        situation: [
          'Η Jupiter περιγράφει τον εαυτό της ως «the home of onchain finance». Είναι πλατφόρμα αποκεντρωμένης χρηματοοικονομίας (DeFi) στο blockchain Solana, για swaps, δανειοδότηση και δανεισμό, perps, αγορές προβλέψεων και wallets. Διαθέτει επίσης APIs που καλούν άλλοι προγραμματιστές από τις δικές τους εφαρμογές, όπως τα Ultra, Swap, Trigger και Recurring.',
          'Η Jupiter δεν είχε developer relations (DevRel) πριν ξεκινήσουμε τη δουλειά τον Φεβρουάριο του 2025.',
          'Στις 24 Μαρτίου 2025, μια ανάρτηση στο φόρουμ της Jupiter Research πρότεινε ένα DevRel Working Group τριών μελών, με τη Fiji Solutions στον ρόλο του τεχνικού υπευθύνου (Technical Lead). Η ομάδα θα ήταν «the first contact for technical community members and projects». Η ανάρτηση ανέφερε ότι τις προηγούμενες 30 ημέρες είχαμε γράψει πάνω από 1.000 μηνύματα στο κανάλι υποστήριξης προγραμματιστών. Το DAO της Jupiter ψήφισε υπέρ της ομάδας και στις 4 Απριλίου 2025 η Jupiter Research ανακοίνωσε ότι η ομάδα πέρασε σε τρίμηνη δοκιμαστική περίοδο.',
        ],
        built: [
          'Μέσα στην ομάδα είχαμε την ευθύνη για το τεχνικό κομμάτι, καθώς στήναμε το DevRel της Jupiter. Υποστηρίζαμε τους προγραμματιστές της κοινότητας που έφτιαχναν εφαρμογές με τα APIs της Jupiter.',
          'Γράψαμε το επίσημο Python SDK για το Jupiter Ultra API. Καλύπτει τα endpoints order, execute, order-and-execute, balances, holdings και shield και δέχεται το ιδιωτικό κλειδί είτε σε base58 είτε ως πίνακα uint8. Έχει typed request models, tests και δικά του παραδείγματα. Είναι γραμμένο σε Python 3.9+ με Poetry, httpx, pydantic, solders και solana. Το CI τρέχει pytest σε κάθε push και ένα τοπικό script ελέγχου τρέχει black, isort, flake8, mypy και pytest. Κάθε version tag ανεβάζει τη νέα έκδοση στο PyPI.',
          'Τον Ιούνιο του 2025 στήσαμε για το Rust SDK το CI και το release pipeline, που τρέχει τα tests του crate, βάζει αυτόματα tag στις νέες εκδόσεις και τις δημοσιεύει στο crates.io.',
          'Γράψαμε αυτόνομα παραδείγματα σε Python για τα Ultra, Swap, Trigger και Recurring APIs.',
          'Η Jupiter δέχτηκε επίσης αλλαγές μας στον δικό της κώδικα. Στον TypeScript client του quote API προσθέσαμε υποστήριξη για API key τον Μάιο του 2025 και το πεδίο payer στο swap request τον Ιούνιο του 2025. Στην τεκμηρίωσή της αφαιρέσαμε ένα πεδίο που δεν υπάρχει στην απάντηση του Ultra order.',
          'Τον Ιούλιο του 2025, σε meetup της Superteam Germany στο Βερολίνο, κάναμε μια κοινή παρουσίαση με εισαγωγή στη Jupiter, στο DevRel της και στα εργαλεία της για προγραμματιστές. Συμμετείχαμε επίσης σε podcasts.',
        ],
        result: [
          'Το Python SDK βρίσκεται στο PyPI. Στις 25 Νοεμβρίου 2025 οι εκδόσεις 1.1.1 και 1.2.0 πρόσθεσαν το endpoint holdings και μια διόρθωση στο signing. Η 1.2.0 είναι η τρέχουσα έκδοση (PyPI, Οκτώβριος 2026). Το Rust SDK βρίσκεται στο crates.io, στην έκδοση 1.0.6 (crates.io, Οκτώβριος 2026).',
          'Όσοι καλούν τα APIs της Jupiter από Python εγκαθιστούν το SDK με pip και όσοι γράφουν Rust προσθέτουν το crate με cargo. Τον Αύγουστο του 2025 η τεκμηρίωση της Jupiter για προγραμματιστές παρέπεμπε στα παραδείγματα του DevRel στο GitHub.',
        ],
      },
    },
    lastmod: D2_SHIP,
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
    period: {start: '2025-09', end: '2025-12'},
    images: [],
    links: {},
    sector: {en: 'Aluminium systems manufacturing', el: 'Βιομηχανία συστημάτων αλουμινίου'},
    factSource: 'WHO-WE-WORKED-WITH.md row 4 and his "yes" of 2026-10-21; rewritten from the D1 facts in offer-os seo-plan D2 (D-87 to D-91)',
    facts: [
      {key: 'location', value: {en: 'Kilkis, Greece', el: 'Κιλκίς, Ελλάδα'}, source: 'proof/2026-10-alumil.md D1 facts, Location (alumil.com corporate profile, read 2026-10-29)'},
      {key: 'period', value: {en: 'September to December 2025', el: 'Σεπτέμβριος έως Δεκέμβριος 2025'}, source: 'D-91 (2026-10-29); proof/2026-10-alumil.md D2 additions'},
      {key: 'status', value: both('Proof of concept'), source: 'proof/2026-10-alumil.md D1 facts, Result; D-91'},
      {key: 'stack', value: {en: 'Snowflake, Snowpark, Python, XGBoost, Azure Blob Storage, React, Oracle (source)', el: 'Snowflake, Snowpark, Python, XGBoost, Azure Blob Storage, React, Oracle (σύστημα προέλευσης)'}, source: 'proof/2026-10-alumil.md D1 facts, Stack'},
    ],
    text: {
      en: {
        metaTitle: 'Alumil: Snowflake POC on production data | Fiji Solutions',
        metaDescription: 'A Snowflake proof of concept for Alumil, a Greek aluminium systems maker: extrusion and defect records loaded into Snowflake and a first model relating them.',
        h1: 'Alumil: a Snowflake proof of concept with production data',
        cardLine: 'A Snowflake proof of concept for Alumil: extrusion and defect records loaded into Snowflake and analysed together.',
        situation: [
          'Alumil is a Greek maker of aluminium systems for windows, doors and facades. It runs its own extrusion, powder-coating and anodizing plants. Its seat is in the Industrial Area of Stavrochori, Kilkis, and its headquarters and showroom are in Thessaloniki.',
          'On its own site, Alumil says it tests its products along the entire production process, in its own quality control laboratories.',
          'The proof of concept worked with two kinds of production records: extrusion runs and defect records. It looked at whether these records could be brought from the existing source system into Snowflake and analysed together, to see how extrusion data relates to defects.',
        ],
        built: [
          'We built the proof of concept on Snowflake in four parts, between September and December 2025.',
          'The first part is an extract-and-load pipeline in Python. Production records were exported from the source database, an Oracle system, to CSV files and staged in Azure Blob Storage. From there each file went to the Snowflake table stage that matched its content, extrusion runs or defect records, and was loaded with COPY INTO. Files already loaded were skipped, and the staging area was cleaned up afterwards. We also made a version that runs on dummy data with a local database in Docker, so the whole flow could be shown without any client data.',
          'The second part is the Snowflake workspace itself, set up as code: warehouses, the database and schema, file formats and table stages. Access ran through read-only, read-write and analyst roles, with grants that covered current and future tables.',
          'The third part is the analysis, written in Snowpark with Python, pandas and scikit-learn: an exploratory look at the data, a correlation study, and a multi-output XGBoost regression that relates extrusion features to the defect percentage for each defect code. The model was registered in Snowflake\'s model registry.',
          'The fourth part is a one-page results summary, built in React with TypeScript, Vite and Tailwind CSS. It sets out the findings, the limits of the data and the next steps.',
          'Separately, a small service ran on a small device on the factory floor. It read data blocks from the machines\' PLCs over the S7 protocol, on a heartbeat and on group triggers, and published them over MQTT and AWS IoT. It shipped as a Docker image, with a nightly job that kept it up to date.',
        ],
        result: [
          'The proof of concept ended with three deliverables: production records in Snowflake under role-based access, a first model relating extrusion data to defect percentages, and a one-page summary of findings, data limits and next steps.',
          'The work stayed at the proof of concept stage, and no production rollout or business outcome is on record.',
        ],
      },
      el: {
        metaTitle: 'Alumil: Snowflake POC με δεδομένα παραγωγής | Fiji Solutions',
        metaDescription: 'Proof of concept στη Snowflake για την Alumil: φόρτωση δεδομένων διέλασης και ελαττωμάτων, ένα πρώτο μοντέλο που τα συσχετίζει και σύνοψη μίας σελίδας.',
        h1: 'Alumil: proof of concept στη Snowflake με δεδομένα παραγωγής',
        cardLine: 'Proof of concept στη Snowflake για την Alumil: φορτώσαμε δεδομένα διέλασης και ελαττωμάτων και τα αναλύσαμε μαζί.',
        situation: [
          'Η Alumil είναι ελληνική βιομηχανία που παράγει συστήματα αλουμινίου για παράθυρα, πόρτες και προσόψεις. Έχει δικές της μονάδες διέλασης, ηλεκτροστατικής βαφής και ανοδίωσης. Η εταιρεία έχει έδρα στη Βιομηχανική Περιοχή Σταυροχωρίου Κιλκίς, ενώ τα κεντρικά γραφεία και ο εκθεσιακός της χώρος βρίσκονται στη Θεσσαλονίκη.',
          'Στον ιστότοπό της, η Alumil γράφει ότι δοκιμάζει τα προϊόντα της σε όλα τα στάδια της παραγωγής, στα δικά της εργαστήρια ποιοτικού ελέγχου.',
          'Το proof of concept αφορούσε δύο είδη δεδομένων παραγωγής: τις καταγραφές διέλασης και τις καταγραφές ελαττωμάτων. Εξέτασε αν τα δεδομένα αυτά μπορούσαν να περάσουν από το σύστημα προέλευσης στη Snowflake και να αναλυθούν μαζί, ώστε να φανεί πώς σχετίζεται η διέλαση με τα ελαττώματα.',
        ],
        built: [
          'Στήσαμε το proof of concept στη Snowflake σε τέσσερα μέρη, από τον Σεπτέμβριο ως τον Δεκέμβριο του 2025.',
          'Το πρώτο μέρος είναι ένα pipeline εξαγωγής και φόρτωσης σε Python. Τα δεδομένα παραγωγής εξάγονταν από τη βάση προέλευσης, ένα σύστημα Oracle, σε αρχεία CSV και αποθηκεύονταν προσωρινά στο Azure Blob Storage. Από εκεί κάθε αρχείο πήγαινε στο αντίστοιχο table stage της Snowflake, ανάλογα με το αν περιείχε καταγραφές διέλασης ή ελαττωμάτων, και φορτωνόταν με COPY INTO. Όσα αρχεία είχαν ήδη φορτωθεί παραλείπονταν, και στο τέλος ο χώρος προσωρινής αποθήκευσης καθαριζόταν. Φτιάξαμε και μια εκδοχή με δοκιμαστικά δεδομένα και τοπική βάση σε Docker, ώστε να μπορεί να παρουσιαστεί όλη η ροή χωρίς δεδομένα του πελάτη.',
          'Το δεύτερο μέρος είναι ο ίδιος ο χώρος εργασίας στη Snowflake, ορισμένος εξ ολοκλήρου σε κώδικα: warehouses, βάση και schema, file formats και table stages. Η πρόσβαση δινόταν μέσω ρόλων: ένας μόνο για ανάγνωση, ένας για ανάγνωση και εγγραφή και ένας για αναλυτές, με δικαιώματα που κάλυπταν τους υπάρχοντες και τους μελλοντικούς πίνακες.',
          'Το τρίτο μέρος είναι η ανάλυση, γραμμένη σε Snowpark με Python, pandas και scikit-learn: μια πρώτη διερεύνηση των δεδομένων, μελέτη συσχετίσεων και ένα μοντέλο παλινδρόμησης XGBoost με πολλές εξόδους, που συσχετίζει τα χαρακτηριστικά της διέλασης με το ποσοστό ελαττωμάτων για κάθε κωδικό ελαττώματος. Το μοντέλο καταχωρίστηκε στο model registry της Snowflake.',
          'Το τέταρτο μέρος είναι μια σύνοψη αποτελεσμάτων σε μία σελίδα, φτιαγμένη σε React με TypeScript, Vite και Tailwind CSS. Παρουσιάζει τα ευρήματα, τους περιορισμούς των δεδομένων και τα επόμενα βήματα.',
          'Παράλληλα, μια ξεχωριστή μικρή υπηρεσία έτρεχε σε μια μικρή συσκευή στον χώρο παραγωγής. Διάβαζε data blocks από τα PLC των μηχανημάτων μέσω του πρωτοκόλλου S7, σε heartbeat και σε group triggers, και τα δημοσίευε μέσω MQTT και AWS IoT. Παραδόθηκε ως Docker image και ενημερωνόταν αυτόματα κάθε βράδυ.',
        ],
        result: [
          'Το proof of concept έδωσε τρία παραδοτέα: τα δεδομένα παραγωγής στη Snowflake, με πρόσβαση ανά ρόλο, ένα πρώτο μοντέλο που συσχετίζει τα δεδομένα της διέλασης με τα ποσοστά ελαττωμάτων, και μια σύνοψη μίας σελίδας με τα ευρήματα, τους περιορισμούς των δεδομένων και τα επόμενα βήματα.',
          'Η δουλειά έμεινε στο στάδιο του proof of concept, και δεν έχει καταγραφεί ούτε παραγωγική λειτουργία ούτε επιχειρηματικό αποτέλεσμα.',
        ],
      },
    },
    lastmod: D2_SHIP,
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
    period: {start: '2026-07', end: '2026-08'},
    images: [],
    // The staging host is not linked until production switches. The rescued archive is public (D2, 2026-10-29).
    links: {
      live: 'https://otoposmou.fijisolutions.net/',
      liveLabel: {en: 'The rescued archive', el: 'Το αρχείο που ανακτήσαμε'},
    },
    sector: {en: 'Volunteer group, local community website', el: 'Εθελοντική ομάδα, τοπική ιστοσελίδα'},
    factSource: 'offer-os companies/fiji-solutions/proof/2026-10-o-topos-mou.md (D1 facts), his "yes" of 2026-10-21, D-91; rewritten in offer-os seo-plan D2',
    facts: [
      {key: 'location', value: {en: 'Katerini, Pieria, Greece', el: 'Κατερίνη, Πιερία, Ελλάδα'}, source: 'otoposmou.gr about page, read 2026-10-29 (proof/2026-10-o-topos-mou.md, D1 facts)'},
      {key: 'period', value: {en: 'July to August 2026, switch to the new site pending', el: 'Ιούλιος ως Αύγουστος 2026· η μετάβαση εκκρεμεί'}, source: 'D-91; code history July to August 2026'},
      {key: 'status', value: {en: 'On staging', el: 'Σε δοκιμαστικό περιβάλλον'}, source: 'otoposmou.gr still serves the old Joomla 3 site, read 2026-10-29'},
      {key: 'platforms', value: {en: 'Web', el: 'Διαδίκτυο'}, source: 'proof/2026-10-o-topos-mou.md, What was built'},
      {key: 'stack', value: both('Joomla 6, PostgreSQL, AWS, Next.js'), source: 'D-91; proof/2026-10-o-topos-mou.md, Stack'},
    ],
    text: {
      en: {
        metaTitle: 'Ο Τόπος Μου: archive rescue and Joomla 6 rebuild | Fiji Solutions',
        metaDescription: 'We rescued the article archive of Ο Τόπος Μου, a volunteer group in Pieria, as a public searchable site, and rebuilt its website on Joomla 6, now on staging.',
        h1: 'Ο Τόπος Μου: a rescued article archive and a new Joomla website',
        cardLine: 'We rescued the group\'s article archive as a public, searchable site and rebuilt its website on Joomla, now on staging.',
        situation: [
          'Ο Τόπος Μου is an open citizens\' volunteer group in Pieria, founded in September 2007. By its own description it has no board, no offices and no budget. Its actions, from forest fire-watch shifts to a summer cinema in Katerini, are all on one Greek-language website, otoposmou.gr.',
          'That website runs on Joomla 3, a version that no longer gets support. The group asked for a new site that would keep its old content.',
          'The oldest part of that content, articles from 2004 to 2020, survived only in an old database backup. The original image files were not in the backup and could not be recovered.',
        ],
        built: [
          'The work had two parts. The first was to rescue the archive. We wrote a Python script, using only the standard library, that reads the old database backup and turns it into JSON, Markdown and CSV files. Personal data from the backup is left out of the files and the site.',
          'From those files we built a public archive site in Greek with Next.js 16, React 19, Tailwind CSS and shadcn/ui, exported as static pages and hosted on Vercel. You can browse by section, category and year. Each article has its own page, with the old HTML cleaned up, YouTube videos embedded, and a placeholder where an image was lost. Greek full-text search runs on Pagefind. The old polls are back with their result bars, and a download centre offers the whole archive as JSON, Markdown and CSV, and each article on its own.',
          'The second part was the new website. The group asked to stay on Joomla, the system its volunteers already administer, so we rebuilt the site on Joomla 6 with PHP 8.3, nginx and PostgreSQL, in a container on AWS. Media files are stored on Amazon S3, so uploads survive a restart.',
          'The archive is imported with its categories and menus. Joomla\'s Smart Search covers it in Greek, the admin panel is in Greek, and articles whose photographs were lost show a placeholder that says so.',
          'We built the archive in July 2026 and the new site in August.',
        ],
        result: [
          'The old site\'s text archive is back and public at otoposmou.fijisolutions.net. Search engines can index it, and anyone can download it in full. On 29 October 2026 it held 1,824 published articles (1,873 including unpublished ones) and 16 polls.',
          'The new site runs on staging with the archive imported. The domain otoposmou.gr still serves the old site, and the switch to the new one is pending.',
        ],
      },
      el: {
        metaTitle: 'Ο Τόπος Μου: διάσωση αρχείου, νέο site Joomla | Fiji Solutions',
        metaDescription: 'Σώσαμε το αρχείο άρθρων του Τόπου Μου στην Πιερία και το ανεβάσαμε δημόσια, με αναζήτηση. Η νέα του ιστοσελίδα σε Joomla 6 είναι σε δοκιμαστικό περιβάλλον.',
        h1: 'Ο Τόπος Μου: διάσωση του αρχείου άρθρων και νέα ιστοσελίδα σε Joomla',
        cardLine: 'Σώσαμε το αρχείο άρθρων της παλιάς ιστοσελίδας και το ανεβάσαμε δημόσια, με αναζήτηση. Η νέα ιστοσελίδα σε Joomla είναι σε δοκιμαστικό περιβάλλον.',
        situation: [
          'Ο Τόπος Μου είναι μια ανοιχτή εθελοντική κίνηση πολιτών στην Πιερία, που ιδρύθηκε τον Σεπτέμβριο του 2007. Όπως γράφει η ίδια, δεν έχει διοικητικό συμβούλιο, γραφεία ή προϋπολογισμό. Όλες οι δράσεις της, από τις βάρδιες πυροφύλαξης στο δάσος ως το θερινό σινεμά στον Καπνικό Σταθμό της Κατερίνης, βρίσκονται σε μία ιστοσελίδα στα ελληνικά, το otoposmou.gr.',
          'Η ιστοσελίδα αυτή είναι φτιαγμένη σε Joomla 3, μια έκδοση που δεν υποστηρίζεται πια. Η ομάδα ζήτησε μια νέα ιστοσελίδα που να κρατά το παλιό της περιεχόμενο.',
          'Το παλαιότερο κομμάτι του, τα άρθρα από το 2004 ως το 2020, είχε σωθεί μόνο σε ένα παλιό αντίγραφο ασφαλείας της βάσης δεδομένων. Τα αρχεία των εικόνων δεν υπήρχαν στο αντίγραφο και δεν μπόρεσαν να ανακτηθούν.',
        ],
        built: [
          'Η δουλειά είχε δύο μέρη. Το πρώτο ήταν η διάσωση του αρχείου. Γράψαμε ένα script σε Python, μόνο με την τυπική βιβλιοθήκη της, που διαβάζει το παλιό αντίγραφο ασφαλείας και το μετατρέπει σε αρχεία JSON, Markdown και CSV. Τα προσωπικά δεδομένα που περιείχε το αντίγραφο δεν περνούν ούτε στα αρχεία ούτε στην ιστοσελίδα.',
          'Με αυτά τα αρχεία φτιάξαμε μια δημόσια ιστοσελίδα αρχείου στα ελληνικά, με Next.js 16, React 19, Tailwind CSS και shadcn/ui. Οι σελίδες της παράγονται στατικά και φιλοξενούνται στο Vercel. Βρίσκεις τα άρθρα ανά θεματική ενότητα, κατηγορία και χρονιά. Κάθε άρθρο έχει τη δική του σελίδα, με καθαρισμένο το παλιό HTML, ενσωματωμένα τα βίντεο από το YouTube και μια ένδειξη εκεί όπου χάθηκε μια εικόνα. Η αναζήτηση πλήρους κειμένου στα ελληνικά γίνεται με το Pagefind. Οι παλιές δημοσκοπήσεις ξαναμπήκαν στη θέση τους, με τα αποτελέσματα σε μπάρες, και από μια σελίδα λήψεων κατεβάζεις όλο το αρχείο σε JSON, Markdown ή CSV, καθώς και κάθε άρθρο χωριστά.',
          'Το δεύτερο μέρος ήταν η νέα ιστοσελίδα. Η ομάδα ζήτησε να μείνει στο Joomla, το σύστημα που ήδη διαχειρίζονται οι εθελοντές της, οπότε τη φτιάξαμε από την αρχή σε Joomla 6, με PHP 8.3, nginx και PostgreSQL, σε container στο AWS. Τα αρχεία πολυμέσων αποθηκεύονται στο Amazon S3, ώστε να μη χάνονται σε μια επανεκκίνηση.',
          'Το αρχείο μεταφέρθηκε με τις κατηγορίες και τα μενού του. Η αναζήτηση μέσα σε αυτό γίνεται στα ελληνικά με το Smart Search του Joomla, ο πίνακας διαχείρισης είναι κι αυτός ελληνικός, και όπου ένα άρθρο έχασε τις φωτογραφίες του, μια ένδειξη το λέει καθαρά.',
          'Το αρχείο το φτιάξαμε τον Ιούλιο του 2026 και τη νέα ιστοσελίδα τον Αύγουστο.',
        ],
        result: [
          'Το αρχείο κειμένων της παλιάς ιστοσελίδας είναι ξανά διαθέσιμο, δημόσια, στο otoposmou.fijisolutions.net. Οι μηχανές αναζήτησης μπορούν να το ευρετηριάσουν και ο καθένας μπορεί να το κατεβάσει ολόκληρο. Στις 29 Οκτωβρίου 2026 είχε 1.824 δημοσιευμένα άρθρα (1.873 μαζί με τα μη δημοσιευμένα) και 16 δημοσκοπήσεις.',
          'Η νέα ιστοσελίδα τρέχει σε δοκιμαστικό περιβάλλον, με το αρχείο ήδη περασμένο. Στο otoposmou.gr λειτουργεί ακόμη η παλιά ιστοσελίδα, και η μετάβαση στη νέα εκκρεμεί.',
        ],
      },
    },
    lastmod: D2_SHIP,
  }),
  project({
    slug: 'seaflows-direct-booking',
    status: 'live',
    order: 7,
    homeCard: false,
    attribution: 'company',
    client: {name: 'Seaflows'},
    permission: {kind: 'his-decision', date: '2026-10-22', source: 'His decision, the name (BR-D21); the owner\'s yes for logo and screenshot (BR-D34)', scope: ['name', 'logo', 'screenshot']},
    services: ['websites'],
    relatedOffer: 'offers/website-seo',
    period: {start: '2026-09'},
    images: [
      {
        src: '/screenshots/seaflows-direct-booking-en.webp',
        alt: {
          en: 'The Seaflows home page: three apartments fifty metres from the sea, with a form to check which are free',
          el: 'Η αρχική σελίδα της Seaflows: τρία διαμερίσματα πενήντα μέτρα από τη θάλασσα, με φόρμα για να δεις ποια είναι ελεύθερα',
        },
        mockData: false,
        publicPage: true,
        locale: 'en',
      },
      // The Greek home, the same frame as the English one, captured 2026-10-29 by headless Chrome at 1440 by 900
      // and read before commit: headings, menu, one button and an empty date form (IMG-7, offer-os seo-plan D2).
      {
        src: '/screenshots/seaflows-direct-booking-el.webp',
        alt: {
          en: 'The Greek Seaflows home page: three apartments fifty metres from the sea, with a form to check which are free',
          el: 'Η αρχική σελίδα της Seaflows: τρία διαμερίσματα πενήντα μέτρα από τη θάλασσα, με φόρμα για να δεις ποια είναι ελεύθερα',
        },
        mockData: false,
        publicPage: true,
        locale: 'el',
      },
    ],
    links: {live: 'https://seaflows.gr'},
    sector: {en: 'Holiday apartments', el: 'Ενοικιαζόμενα διαμερίσματα'},
    factSource: 'WHO-WE-WORKED-WITH.md and the Seaflows project brief; seaflows.gr returns 200, read 2026-10-22; rewritten from the D1 facts in offer-os seo-plan D2 (D-87 to D-91)',
    facts: [
      {key: 'location', value: {en: 'Paralia Katerinis, Greece', el: 'Παραλία Κατερίνης, Ελλάδα'}, source: 'seaflows.gr, read 2026-10-29'},
      {key: 'period', value: {en: 'September 2026 to today', el: 'Σεπτέμβριος 2026 ως σήμερα'}, source: 'proof record'},
      {key: 'status', value: {en: 'Live in Greek and English', el: 'Σε λειτουργία, στα ελληνικά και στα αγγλικά'}, source: 'seaflows.gr, read 2026-10-29'},
      {key: 'platforms', value: both('Web'), source: 'proof record'},
      {key: 'stack', value: both('Next.js, Bun, Elysia, Stripe, Kubernetes'), source: 'proof record'},
    ],
    text: {
      en: {
        metaTitle: 'Seaflows Apartments: a direct booking website | Fiji Solutions',
        metaDescription: 'We built a direct booking website in Greek and English for Seaflows Apartments, three holiday apartments in Paralia Katerinis. It is live at seaflows.gr.',
        h1: 'Seaflows: a direct booking website for holiday apartments',
        cardLine: 'A direct booking website in Greek and English for three holiday apartments in Paralia Katerinis.',
        situation: [
          'Seaflows Apartments are three holiday apartments in one building in Paralia Katerinis, in Pieria, fifty metres from the sea. The owner runs them herself, and the apartments are listed on Booking.com.',
          'The platforms take a commission. The owner wanted a website of her own where guests could book directly and pay less, running alongside the Booking.com listings.',
          'She asked for no admin panel and no logins.',
        ],
        built: [
          'We built a direct booking website in Greek, at seaflows.gr, and in English, at seaflows.gr/en.',
          'The home page opens with a search for dates and guests. From there a guest moves to the list of apartments and to a page for each one, with a photo gallery, the amenities and the check-in and check-out times. There is also a page about the area, a contact page with an enquiry form, the booking terms, and the privacy and cookie pages.',
          'There is an availability calendar and a quote panel that shows the price of a stay. The price is worked out on the server and never taken from the browser. The booking page hands the guest over to Stripe Checkout for full payment and back to a confirmation page.',
          'Confirmation emails for the guest and the owner, and a reader for the calendar that Booking.com exports, are built in and ready to switch on when the owner chooses.',
          'Guests are mostly Greek holidaymakers, with some from abroad, and they usually book a summer stay on a phone. The end-to-end tests run on a desktop, on a phone and with JavaScript switched off.',
          'For search engines, each page has one canonical address per language, hreflang links between the two versions, a sitemap and a robots.txt file. Each apartment page carries structured data for the property.',
          'The front end is Next.js 15 with React 19, Tailwind CSS and TypeScript, hosted on Vercel. A TypeScript API on Bun and Elysia runs on Kubernetes, with separate staging and production environments, and GitHub Actions deploys it. Payments go through Stripe Checkout and email through Resend. There is no database: the prices, texts and photos are edited in the code.',
          'We made a first demo in August 2026 and rebuilt it as the production site from 20 to 22 September 2026. It went live on 22 September, and we added the end-to-end tests on 23 October. We run the site.',
        ],
        result: ['The site is live at seaflows.gr, in Greek and English. Guests can search dates, look through the three apartments and read about the area and the booking terms.'],
      },
      el: {
        metaTitle: 'Seaflows: ιστοσελίδα απευθείας κρατήσεων | Fiji Solutions',
        metaDescription: 'Φτιάξαμε ιστοσελίδα απευθείας κρατήσεων στα ελληνικά και στα αγγλικά για τα Seaflows Apartments στην Παραλία Κατερίνης. Λειτουργεί στο seaflows.gr.',
        h1: 'Seaflows: ιστοσελίδα απευθείας κρατήσεων για ενοικιαζόμενα διαμερίσματα',
        cardLine: 'Ιστοσελίδα απευθείας κρατήσεων, στα ελληνικά και στα αγγλικά, για τρία ενοικιαζόμενα διαμερίσματα στην Παραλία Κατερίνης.',
        situation: [
          'Τα Seaflows Apartments είναι τρία ενοικιαζόμενα διαμερίσματα στο ίδιο κτίριο, στην Παραλία Κατερίνης Πιερίας, πενήντα μέτρα από τη θάλασσα. Τα διαχειρίζεται η ίδια η ιδιοκτήτρια, και είναι καταχωρισμένα στο Booking.com.',
          'Οι πλατφόρμες κρατούν προμήθεια. Η ιδιοκτήτρια ήθελε μια δική της ιστοσελίδα, όπου οι επισκέπτες θα έκλειναν απευθείας και θα πλήρωναν λιγότερα, ενώ οι καταχωρίσεις στο Booking.com θα έμεναν ως είχαν.',
          'Δεν ήθελε πίνακα διαχείρισης ούτε κωδικούς σύνδεσης.',
        ],
        built: [
          'Φτιάξαμε μια ιστοσελίδα απευθείας κρατήσεων στα ελληνικά, στο seaflows.gr, και στα αγγλικά, στο seaflows.gr/en.',
          'Η αρχική σελίδα ανοίγει με αναζήτηση ημερομηνιών και ατόμων. Από εκεί ο επισκέπτης περνά στη λίστα με τα διαμερίσματα και στη σελίδα του καθενός, με φωτογραφίες, παροχές και ώρες check-in και check-out. Η ιστοσελίδα έχει ακόμη σελίδα για την περιοχή, σελίδα επικοινωνίας με φόρμα για ερωτήσεις, τους όρους κράτησης, την πολιτική απορρήτου και την πολιτική cookies.',
          'Υπάρχει ημερολόγιο διαθεσιμότητας και πλαίσιο που δείχνει την τιμή της διαμονής. Η τιμή υπολογίζεται στον server και δεν λαμβάνεται ποτέ από τον browser. Η σελίδα κράτησης στέλνει τον επισκέπτη στο Stripe Checkout για πληρωμή ολόκληρου του ποσού και μετά τον επιστρέφει σε σελίδα επιβεβαίωσης.',
          'Τα email επιβεβαίωσης για τον επισκέπτη και για την ιδιοκτήτρια, καθώς και ένας μηχανισμός που διαβάζει το ημερολόγιο που εξάγει το Booking.com, είναι ήδη έτοιμα και ενεργοποιούνται όποτε το αποφασίσει η ιδιοκτήτρια.',
          'Οι επισκέπτες είναι κυρίως Έλληνες παραθεριστές, με κάποιους από το εξωτερικό, και συνήθως κλείνουν τις καλοκαιρινές τους διακοπές από το κινητό. Οι δοκιμές end-to-end τρέχουν σε υπολογιστή, σε κινητό και με τη JavaScript απενεργοποιημένη.',
          'Για τις μηχανές αναζήτησης, κάθε σελίδα έχει μία canonical διεύθυνση ανά γλώσσα, συνδέσμους hreflang ανάμεσα στις δύο γλωσσικές εκδόσεις, sitemap και αρχείο robots.txt. Κάθε σελίδα διαμερίσματος έχει δομημένα δεδομένα για το κατάλυμα.',
          'Το frontend είναι γραμμένο σε Next.js 15 με React 19, Tailwind CSS και TypeScript και φιλοξενείται στο Vercel. Ένα API σε TypeScript, με Bun και Elysia, τρέχει σε Kubernetes με χωριστά περιβάλλοντα staging και production, και το deploy του γίνεται με GitHub Actions. Οι πληρωμές περνούν από το Stripe Checkout και τα email από το Resend. Δεν υπάρχει βάση δεδομένων: οι τιμές, τα κείμενα και οι φωτογραφίες αλλάζουν απευθείας στον κώδικα.',
          'Φτιάξαμε ένα πρώτο demo τον Αύγουστο του 2026 και, από τις 20 έως τις 22 Σεπτεμβρίου του 2026, το ξαναφτιάξαμε ως την ιστοσελίδα που λειτουργεί σήμερα. Μπήκε σε λειτουργία στις 22 Σεπτεμβρίου, και στις 23 Οκτωβρίου προσθέσαμε τις δοκιμές end-to-end. Την ιστοσελίδα τη διαχειριζόμαστε εμείς.',
        ],
        result: ['Η ιστοσελίδα λειτουργεί στο seaflows.gr, στα ελληνικά και στα αγγλικά. Οι επισκέπτες μπορούν να ψάξουν ημερομηνίες, να δουν τα τρία διαμερίσματα και να διαβάσουν για την περιοχή και τους όρους κράτησης.'],
      },
    },
    lastmod: D2_SHIP,
  }),
  project({
    slug: 'hapimag-online-platform',
    status: 'live',
    order: 8,
    homeCard: false,
    attribution: 'company',
    client: {name: 'Hapimag'},
    permission: {kind: 'his-decision', date: '2026-10-22', source: 'His decision (BR-D26) and his context of 2026-10-22 (BR-D34), written in our words; the employer of that time is never named', scope: ['name', 'logo']},
    services: ['custom-software'],
    images: [],
    links: {live: 'https://www.hapimag.com'},
    sector: {en: 'Holiday apartment sharing', el: 'Κοινή χρήση διαμερισμάτων διακοπών'},
    factSource: 'His context of 2026-10-22 (offer-os BR-D34); hapimag.com, read 2026-10-26; rewritten from the D1 facts in offer-os seo-plan D2 (D-87 to D-91)',
    facts: [
      {key: 'location', value: {en: 'Steinhausen, Switzerland', el: 'Steinhausen, Ελβετία'}, source: 'Zefix, Hapimag AG, UID CHE-101.391.790, read 2026-10-29'},
      {key: 'status', value: {en: 'Live', el: 'Σε λειτουργία'}, source: 'hapimag.com, checked 2026-10-29'},
      {key: 'platforms', value: both('Web'), source: 'hapimag.com and its sitemap.xml, read 2026-10-29'},
      {key: 'stack', value: both('React, Python, PostgreSQL, MongoDB, Kubernetes'), source: 'His answer in D2, 2026-10-29 (seo-plan-2026-10 D-89)'},
    ],
    text: {
      en: {
        metaTitle: 'Hapimag: holiday booking platform with points | Fiji Solutions',
        metaDescription: 'We helped Hapimag, a Swiss holiday apartment sharing community, build its online platform: booking with points, the member area, resort pages and APIs.',
        h1: 'Hapimag: holiday booking platform with points and member area',
        cardLine: 'We helped build Hapimag\'s online platform, where members book holiday apartments with residence points.',
        situation: [
          'Hapimag is a Swiss company, founded in 1963, that runs a sharing community for holiday apartments. Its resorts are spread across Europe, and its registered seat is in Steinhausen, in the canton of Zug.',
          'The model runs on points, a system Hapimag says it invented. Members hold shares in Hapimag and receive a set number of residence points per share each year, so more shares mean more holidays. They spend those points to book holiday apartments in any of the resorts. At the resort they pay a fee for operating costs, services and the local VAT.',
          'People can also try the resorts without owning a share, as guests. Most of what Hapimag offers runs through its online platform at hapimag.com.',
        ],
        built: [
          'We helped Hapimag build that platform. Our part covered four areas: booking with points, the member area and shares, the backend services and APIs, and the public site with its resort pages.',
          'Booking with points is the core of the platform. Members spend their residence points to book holiday apartments in Hapimag\'s resorts. We worked on that booking flow and the services behind it.',
          'The member area is where Hapimag\'s members sign in. We worked on its screens, and on the parts of the platform that handle membership and shares.',
          'We also worked on the backend services and APIs that the platform runs on. The tools we used across this work were React, Python, PostgreSQL, MongoDB and Kubernetes.',
          'The public site is where people browse Hapimag\'s resorts across Europe before they book or try a stay. We worked on the public site and its resort pages. The site runs in English, German, French, Italian and Dutch, with separate German versions for Austria and Switzerland.',
          'The platform has three kinds of users: Hapimag\'s members booking with their points, guests trying Hapimag without a share, and anyone browsing the resorts.',
        ],
        result: ['The platform is live at hapimag.com, checked on 29 October 2026. Members book their holiday apartments through it, and the resort pages are open to everyone.'],
      },
      el: {
        metaTitle: 'Hapimag: πλατφόρμα κρατήσεων διακοπών με πόντους | Fiji Solutions',
        metaDescription: 'Βοηθήσαμε την ελβετική Hapimag να φτιάξει την πλατφόρμα της για κοινή χρήση διαμερισμάτων διακοπών: κρατήσεις με πόντους, περιοχή μελών, σελίδες θερέτρων, APIs.',
        h1: 'Hapimag: πλατφόρμα κρατήσεων διακοπών με πόντους και περιοχή μελών',
        cardLine: 'Βοηθήσαμε τη Hapimag να φτιάξει τη διαδικτυακή πλατφόρμα της, όπου τα μέλη κλείνουν διαμερίσματα διακοπών με πόντους διαμονής.',
        situation: [
          'Η Hapimag είναι ελβετική εταιρεία που ιδρύθηκε το 1963 και λειτουργεί μια κοινότητα κοινής χρήσης διαμερισμάτων διακοπών. Έχει θέρετρα σε πολλές χώρες της Ευρώπης και η καταστατική της έδρα είναι στο Steinhausen, στο καντόνι του Zug.',
          'Όλο το μοντέλο στηρίζεται σε πόντους, ένα σύστημα που η Hapimag λέει ότι επινόησε η ίδια. Τα μέλη κατέχουν μετοχές της Hapimag και κάθε χρόνο παίρνουν ορισμένους πόντους διαμονής για κάθε μετοχή, οπότε περισσότερες μετοχές σημαίνουν περισσότερες διακοπές. Με αυτούς τους πόντους κλείνουν διαμερίσματα σε οποιοδήποτε από τα θέρετρα. Στο θέρετρο πληρώνουν ένα τέλος για τα λειτουργικά έξοδα, τις υπηρεσίες και τον τοπικό ΦΠΑ.',
          'Μπορεί κανείς να δοκιμάσει τα θέρετρα και χωρίς να έχει μετοχή. Τα περισσότερα από όσα προσφέρει η Hapimag περνούν από τη διαδικτυακή της πλατφόρμα, το hapimag.com.',
        ],
        built: [
          'Βοηθήσαμε τη Hapimag να φτιάξει αυτή την πλατφόρμα. Η δουλειά μας κάλυψε τέσσερις τομείς: τις κρατήσεις με πόντους, την περιοχή μελών και τις μετοχές, τις υπηρεσίες backend και τα APIs, και τον δημόσιο ιστότοπο με τις σελίδες των θερέτρων.',
          'Η κράτηση με πόντους είναι η καρδιά της πλατφόρμας. Τα μέλη ξοδεύουν τους πόντους διαμονής τους για να κλείσουν διαμερίσματα στα θέρετρα της Hapimag. Δουλέψαμε στη ροή της κράτησης και στις υπηρεσίες που τη στηρίζουν.',
          'Στην περιοχή μελών συνδέονται τα μέλη της Hapimag. Δουλέψαμε στις οθόνες της και στα κομμάτια της πλατφόρμας που διαχειρίζονται τη συμμετοχή και τις μετοχές.',
          'Δουλέψαμε επίσης στις υπηρεσίες backend και στα APIs πάνω στα οποία λειτουργεί η πλατφόρμα. Σε όλη αυτή τη δουλειά χρησιμοποιήσαμε React, Python, PostgreSQL, MongoDB και Kubernetes.',
          'Στον δημόσιο ιστότοπο ο επισκέπτης περιηγείται στα θέρετρα της Hapimag στην Ευρώπη πριν κλείσει ή δοκιμάσει μια διαμονή. Δουλέψαμε στον δημόσιο ιστότοπο και στις σελίδες των θερέτρων. Οι σελίδες υπάρχουν στα αγγλικά, τα γερμανικά, τα γαλλικά, τα ιταλικά και τα ολλανδικά, με χωριστές γερμανικές εκδόσεις για την Αυστρία και την Ελβετία.',
          'Την πλατφόρμα τη χρησιμοποιούν τρεις ομάδες: τα μέλη της Hapimag, που κλείνουν διαμονές με τους πόντους τους, όσοι δοκιμάζουν τη Hapimag χωρίς μετοχή, και όποιος περιηγείται στα θέρετρά της.',
        ],
        result: ['Η πλατφόρμα λειτουργεί στο hapimag.com, όπως ελέγξαμε στις 29 Οκτωβρίου 2026. Μέσα από αυτήν τα μέλη κλείνουν διαμερίσματα για τις διακοπές τους, και οι σελίδες των θερέτρων είναι ανοιχτές σε όλους.'],
      },
    },
    lastmod: D2_SHIP,
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
