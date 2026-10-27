import type {Language} from '@/types/language';
import type {HomeStartSlug} from '@/data/offerLinks';
import {REPLY_SLA} from '@/lib/offer';

// The copy of both homepages, in ONE typed file. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05,
// PLAN.md §4.1 and §9), copied word for word from offer-os `companies/fiji-solutions/site/03-copy-home.md`,
// "Home". Change a string there first.
//
// `Record<Language, HomeCopy>` is the parity check: a locale that misses a slot does not compile. The FAQ
// ids must also match across the two locales and in the same order; the type cannot see that, so it is
// read, and both arrays below carry the four ids of BR-D6 in the order of PLAN.md §4.1.
//
// The reply promise reads REPLY_SLA (src/lib/offer.ts) in the closing heading. The stats tile types it as a
// figure ("1 business day"), as the contract gives it; change both together.
//
// No price anywhere in this file (BR-D24). The "What we build" cards read src/data/services.ts; the
// "Ways to start" link text is each offer's own eyebrow (offerLinks.ts), so neither is typed here.

export type HomeFaq = {id: string; q: string; a: string};

export type HomeCopy = {
  meta: {title: string; description: string; keywords: string; ogLocale: string; ogImageAlt: string};
  // `h1Accent` is the end of `h1`, word for word, drawn in the accent colour (BR-D45); the h1 itself is unchanged.
  hero: {eyebrow: string; h1: string; h1Accent: string; sub: string; primary: string; secondary: string};
  // The small label above each section heading (BR-D45, 2026-10-26).
  labels: {build: string; start: string; projects: string; how: string; faq: string; posts: string; closing: string};
  stats: {figure: string; line: string}[];
  clients: {heading: string; badgeAlt: string};
  build: {heading: string; line: string};
  start: {heading: string; line: string; cards: Record<HomeStartSlug, {heading: string; line: string}>};
  projects: {heading: string; line: string; all: string};
  how: {heading: string; steps: {title: string; line: string}[]};
  faq: {heading: string; items: HomeFaq[]};
  posts: {heading: string; line: string; all: string; guidesHeading?: string; guidesLine?: string};
  closing: {heading: string; button: string; formLine: string};
};

export const HOME: Record<Language, HomeCopy> = {
  en: {
    meta: {
      title: 'Custom software company in Thessaloniki | Fiji Solutions',
      description: 'Software company in Thessaloniki. We build custom software, web and mobile apps, process automation, AI agents, websites and Snowflake data platforms.',
      keywords: 'custom software company Thessaloniki, software company Greece, web and mobile apps, process automation, AI agents, Snowflake consulting',
      ogLocale: 'en_US',
      ogImageAlt: 'Fiji Solutions, Thessaloniki',
    },
    hero: {
      eyebrow: 'Software company in Thessaloniki, Greece',
      h1: 'Custom software, apps and AI for your business, built in Thessaloniki',
      h1Accent: 'built in Thessaloniki',
      sub: 'Fiji Solutions builds custom software, web and mobile apps, process automation, AI agents, websites and Snowflake data platforms for businesses in Greece and abroad. You talk directly to the engineer who builds it.',
      primary: 'Book a free 30-minute call',
      secondary: 'See our projects',
    },
    stats: [
      {figure: '10+ years', line: "our founder's software experience"},
      {figure: 'Snowflake Select Partner', line: "in Snowflake's own partner directory"},
      {figure: 'App Store and Google Play', line: 'apps we built are live on both'},
      {figure: '1 business day', line: 'until our reply'},
    ],
    labels: {build: 'Services', start: 'Offers', projects: 'Our work', how: 'Process', faq: 'FAQ', posts: 'Blog', closing: 'Contact'},
    clients: {heading: 'Who we have built software for', badgeAlt: 'Snowflake Select Services Partner'},
    build: {heading: 'What we build', line: 'Six kinds of work, for businesses in Greece and abroad.'},
    start: {
      heading: 'Ways to start',
      line: 'Each one has its own page, with what it includes and how it runs.',
      cards: {
        'offers/sheet-to-app': {
          heading: '7-day sheet-to-app prototype',
          line: 'A prototype of your app, made from the spreadsheet your team runs on, 7 days after the call.',
        },
        'offers/software-prototype': {
          heading: 'Custom software prototype',
          line: 'A working prototype of your software, two weeks from the kickoff workshop.',
        },
        'offers/ai-prototype': {
          heading: 'AI prototype',
          line: 'An AI proof of concept on one use case, working two weeks from the kickoff workshop.',
        },
        'offers/ai-development-sprint': {
          heading: 'AI development sprint',
          line: 'Your next release, working 15 days after the kickoff workshop.',
        },
        'offers/website-google-ads': {
          heading: 'Website and Google Ads',
          line: 'Your website and your Google Ads campaign, live together, three weeks from the kickoff workshop.',
        },
      },
    },
    projects: {heading: 'Projects', line: 'Software we built for businesses in Greece and abroad.', all: 'All projects'},
    how: {
      heading: 'How we work',
      steps: [
        {title: 'Free 30-minute call', line: 'You tell us what you want to build, and you talk directly to the engineer who builds it.'},
        {title: 'Scope and price in writing', line: 'We agree in writing what we build and what it costs, before the work starts.'},
        {title: 'Build', line: 'We build what we agreed, and you see it take shape as we go.'},
        {title: 'Launch, then care', line: 'Once it is live, we keep it running for you, or you take it over on the terms we agreed in writing.'},
      ],
    },
    faq: {
      heading: 'Questions people ask before the first call',
      items: [
        {
          id: 'ti-kanei-etaireia-logismikou',
          q: 'What exactly does a software company do?',
          a: 'It writes software made for one business and its own way of working: internal tools and CRM style systems, web and mobile apps, connections between systems that will not exchange data on their own, automation for steps somebody does by hand, AI agents, and reports that assemble themselves. The starting point is your own process.',
        },
        {
          id: 'antikatastasi-programmaton',
          q: 'Do I have to replace the software I already use?',
          a: 'Usually not. We propose replacement when the existing system allows no connection at all, and we write the reason into the scope we agree with you. More often the gap is a connection between two systems that each work well on their own, or a small tool between them.',
        },
        {
          id: 'poios-kanei-ti-douleia',
          q: 'Who actually does the work?',
          a: 'Our founder, Charis Moutafidis. He has worked as a software engineer for more than ten years. Those years cover five sectors: banking, travel, telecommunications, health and online education. Those sectors describe his own working history.',
        },
        {
          id: 'poios-echei-ton-kodika',
          q: 'Who owns the code, the data and the accounts at the end?',
          a: 'We put it in writing with you before the build starts: who owns the code, the data and the accounts. Some offers set their terms on their own page; the 7-day sheet-to-app prototype, for one, hands over the source code once the finished app is paid.',
        },
      ],
    },
    posts: {
      heading: 'Latest from the blog',
      line: 'Plain answers on custom software, apps, automation and AI for your business.',
      all: 'All posts',
    },
    closing: {
      heading: `Tell us what you want to build. We reply within ${REPLY_SLA.en}.`,
      button: 'Book a free 30-minute call',
      formLine: 'Or send us a message.',
    },
  },
  el: {
    meta: {
      title: 'Εταιρεία λογισμικού στη Θεσσαλονίκη | Fiji Solutions',
      description: 'Εταιρεία λογισμικού στη Θεσσαλονίκη. Φτιάχνουμε λογισμικό κατά παραγγελία, εφαρμογές, αυτοματισμούς, AI agents, ιστοσελίδες και πλατφόρμες δεδομένων Snowflake για επιχειρήσεις.',
      keywords: 'εταιρεία λογισμικού Θεσσαλονίκη, λογισμικό κατά παραγγελία, κατασκευή λογισμικού, εφαρμογές για κινητά, αυτοματοποίηση διαδικασιών, AI agents, Snowflake',
      ogLocale: 'el_GR',
      ogImageAlt: 'Fiji Solutions, εταιρεία λογισμικού στη Θεσσαλονίκη',
    },
    hero: {
      eyebrow: 'Εταιρεία λογισμικού στη Θεσσαλονίκη',
      h1: 'Λογισμικό κατά παραγγελία, εφαρμογές και AI για την επιχείρησή σου, από τη Θεσσαλονίκη',
      h1Accent: 'από τη Θεσσαλονίκη',
      sub: 'Η Fiji Solutions φτιάχνει λογισμικό κατά παραγγελία, διαδικτυακές εφαρμογές και εφαρμογές για κινητά, αυτοματισμούς, AI agents, ιστοσελίδες και πλατφόρμες δεδομένων Snowflake, για επιχειρήσεις στην Ελλάδα και στο εξωτερικό. Μιλάς απευθείας με τον μηχανικό που φτιάχνει το λογισμικό σου.',
      primary: 'Κλείσε δωρεάν κλήση 30 λεπτών',
      secondary: 'Δες τα έργα μας',
    },
    stats: [
      {figure: '10+ χρόνια', line: 'εμπειρία του ιδρυτή μας στο λογισμικό'},
      {figure: 'Snowflake Select Partner', line: 'στον κατάλογο συνεργατών της Snowflake'},
      {figure: 'App Store και Google Play', line: 'εφαρμογές που φτιάξαμε κυκλοφορούν και στα δύο'},
      {figure: '1 εργάσιμη ημέρα', line: 'ως την απάντησή μας'},
    ],
    labels: {build: 'Υπηρεσίες', start: 'Προσφορές', projects: 'Η δουλειά μας', how: 'Διαδικασία', faq: 'Ερωτήσεις', posts: 'Blog', closing: 'Επικοινωνία'},
    clients: {heading: 'Για ποιους έχουμε φτιάξει λογισμικό', badgeAlt: 'Snowflake Select Services Partner'},
    build: {heading: 'Τι φτιάχνουμε', line: 'Έξι είδη δουλειάς, για επιχειρήσεις στην Ελλάδα και στο εξωτερικό.'},
    start: {
      heading: 'Τρόποι να ξεκινήσεις',
      line: 'Ο καθένας έχει τη δική του σελίδα, με όσα περιλαμβάνει και πώς προχωράει.',
      cards: {
        'offers/sheet-to-app': {
          heading: 'Πρωτότυπο εφαρμογής από Excel σε 7 μέρες',
          line: 'Ένα πρωτότυπο της εφαρμογής σου, φτιαγμένο από το Excel με το οποίο δουλεύει η ομάδα σου, 7 μέρες μετά την κλήση.',
        },
        'offers/software-prototype': {
          heading: 'Πρωτότυπο λογισμικού',
          line: 'Ένα λειτουργικό πρωτότυπο του λογισμικού σου, δύο εβδομάδες μετά την εναρκτήρια συνάντηση.',
        },
        'offers/ai-prototype': {
          heading: 'Πρωτότυπο AI',
          line: 'Ένα πρωτότυπο AI για μία περίπτωση χρήσης, σε λειτουργία δύο εβδομάδες μετά την εναρκτήρια συνάντηση.',
        },
        'offers/ai-development-sprint': {
          heading: 'Κύκλος ανάπτυξης λογισμικού με AI',
          line: 'Η επόμενη έκδοση του λογισμικού σου, έτοιμη 15 ημέρες μετά την εναρκτήρια συνάντηση.',
        },
        'offers/website-google-ads': {
          heading: 'Ιστοσελίδα και Google Ads',
          line: 'Η ιστοσελίδα σου και η καμπάνια σου στο Google Ads, στον αέρα μαζί, τρεις εβδομάδες μετά την εναρκτήρια συνάντηση.',
        },
      },
    },
    projects: {heading: 'Έργα', line: 'Λογισμικό που φτιάξαμε για επιχειρήσεις στην Ελλάδα και στο εξωτερικό.', all: 'Όλα τα έργα'},
    how: {
      heading: 'Πώς δουλεύουμε',
      steps: [
        {title: 'Δωρεάν κλήση 30 λεπτών', line: 'Μας λες τι θέλεις να φτιάξεις, και μιλάς απευθείας με τον μηχανικό που το φτιάχνει.'},
        {title: 'Αντικείμενο και τιμή γραπτά', line: 'Συμφωνούμε γραπτά τι φτιάχνουμε και πόσο κοστίζει, πριν ξεκινήσει η δουλειά.'},
        {title: 'Υλοποίηση', line: 'Φτιάχνουμε ό,τι συμφωνήσαμε, και το βλέπεις να παίρνει μορφή στην πορεία.'},
        {title: 'Παράδοση, και μετά φροντίδα', line: 'Μόλις μπει σε λειτουργία, το φροντίζουμε εμείς ή το αναλαμβάνεις εσύ, με τους όρους που συμφωνήσαμε γραπτά.'},
      ],
    },
    faq: {
      heading: 'Συχνές ερωτήσεις πριν από την πρώτη κλήση',
      items: [
        {
          id: 'ti-kanei-etaireia-logismikou',
          q: 'Τι κάνει ακριβώς μια εταιρεία λογισμικού;',
          a: 'Γράφει λογισμικό φτιαγμένο για μία επιχείρηση και τον δικό της τρόπο δουλειάς: εσωτερικά εργαλεία και συστήματα τύπου CRM, διαδικτυακές εφαρμογές και εφαρμογές για κινητά, συνδέσεις ανάμεσα σε συστήματα που δεν ανταλλάσσουν στοιχεία μόνα τους, αυτοματισμούς για βήματα που κάνει σήμερα κάποιος στο χέρι, AI agents και αναφορές που ετοιμάζονται αυτόματα. Αφετηρία είναι η δική σου διαδικασία.',
        },
        {
          id: 'antikatastasi-programmaton',
          q: 'Χρειάζεται να αντικαταστήσω τα προγράμματα που ήδη χρησιμοποιώ;',
          a: 'Συνήθως όχι. Αντικατάσταση προτείνουμε όταν το υπάρχον σύστημα δεν επιτρέπει καμία σύνδεση, και τότε γράφουμε τον λόγο στη γραπτή συμφωνία για το έργο. Πιο συχνά λείπει η σύνδεση ανάμεσα σε δύο προγράμματα που το καθένα δουλεύει μια χαρά, ή ένα μικρό εργαλείο ανάμεσά τους.',
        },
        {
          id: 'poios-kanei-ti-douleia',
          q: 'Ποιος θα κάνει τελικά τη δουλειά;',
          a: 'Ο ιδρυτής μας, ο Χάρης Μουταφίδης. Δουλεύει πάνω από δέκα χρόνια ως μηχανικός λογισμικού. Μέσα σε αυτά τα χρόνια έχει δουλέψει σε πέντε κλάδους: τράπεζες, τουρισμό, τηλεπικοινωνίες, υγεία και διαδικτυακή εκπαίδευση. Οι κλάδοι αυτοί περιγράφουν τη διαδρομή του Χάρη.',
        },
        {
          id: 'poios-echei-ton-kodika',
          q: 'Ποιος έχει στο τέλος τον κώδικα, τα δεδομένα και τους λογαριασμούς;',
          a: 'Το γράφουμε μαζί σου πριν ξεκινήσει η υλοποίηση: σε ποιον ανήκουν ο κώδικας, τα δεδομένα και οι λογαριασμοί. Μερικοί τρόποι συνεργασίας έχουν τους όρους τους στη δική τους σελίδα· στο πρωτότυπο εφαρμογής από Excel σε 7 μέρες, για παράδειγμα, παίρνεις τον πηγαίο κώδικα μόλις πληρωθεί η τελική εφαρμογή.',
        },
      ],
    },
    posts: {
      heading: 'Τελευταία άρθρα',
      line: 'Απλές απαντήσεις για λογισμικό, εφαρμογές, αυτοματισμούς και AI στην επιχείρησή σου.',
      all: 'Όλα τα άρθρα',
      guidesHeading: 'Οδηγοί',
      guidesLine: 'Οι οδηγοί μας στα ελληνικά, για επιχειρήσεις στην Ελλάδα.',
    },
    closing: {
      heading: `Πες μας τι θέλεις να φτιάξεις. Απαντάμε μέσα σε ${REPLY_SLA.el}.`,
      button: 'Κλείσε δωρεάν κλήση 30 λεπτών',
      formLine: 'Ή στείλε μας μήνυμα.',
    },
  },
};
