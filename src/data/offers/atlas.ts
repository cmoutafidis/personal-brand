import type {Language} from '@/types/language';

// Atlas, the apply-only top tier: the complete digitalization and automation of a whole company.
// Built 2026-10-18 from the offer-os record `offers/fiji-solutions--atlas`, under the binding
// decisions `gtm/atlas/DECISIONS.md` AT-D1 to AT-D38 (Charis, 2026-10-18). Every page string below
// is copied verbatim from 03-copy.md (approved, AT-D26, as amended by AT-D27 to AT-D31, AT-D33,
// AT-D34, AT-D36 and AT-D38), per locale,
// and the metadata from offer.yaml `seo`. To change a line, change it in 03-copy.md first and copy it here; this file is
// never the place a sentence is written.
//
// PRICE. This offer publishes "Atlas starts from USD 100,000" / «Το Atlas ξεκινά από 100.000 $» in
// the page body only. That is AT-D2, a dated exception to CLAUDE.md rule 7 for this offer only
// (recorded there on 2026-10-18). AT-D34 (2026-10-18) places it after the value of the parts, and
// AT-D36 orders the stack: core rows, `coreTotalLine`, then `priceReveal` on its own line under it
// (the first price on the page), then the bonuses and `totalLine`. The price appears again in the
// S19 subhead and the form's budget question. The hero carries no price, and no surface outside the Atlas page
// shows it: the homepage band, the metadata and the JSON-LD are all price-free.
// Superseded in part 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-08): a priced offer showing its
// price is no longer an exception for this offer only, every offer with a set price keeps showing it.
// The Greek page must show the price in euros, not «100.000 $». Goal C5 (Fiji ONP-5) carries out the
// euro change in 03-copy.md first; until then the dollar strings below stay as the approved copy.
// The hero, homepage band, metadata and JSON-LD rules above are not addressed by D-08 and still hold.
// The stack values (AT-D18, AT-D20) are the approved "Page (rounded down)" figures of offer-os
// `gtm/atlas/VALUE-STACK-2026-10-18.md`; their dated value bases live in offer.yaml, not here.
//
// NOT ON ANY SURFACE, BY DECISION: a guarantee or payment terms (AT-D4); a capacity, scarcity or
// deadline line (AT-D17 keeps the one-project-at-a-time rule internal); a reply promise or a
// response time, in any locale or success state (AT-D21); a client name (AT-D19).
// 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-09): every client shown on the sites approved being
// named, and case studies and proof blocks may name them; goal D4 decides what this offer shows.
// The AT-D19 lock above holds on this page until then.
//
// NAMES. The stack item names are the English canonical names on both locales (AT-D24), and the
// Greek page writes the brand as Latin "Atlas", neuter, «το Atlas» (AT-D25).
//
// GRAPH. Atlas is NOT in src/data/offerLinks.ts and links to no other offer page: AT-D8 places it in
// the navbar, the footer QuickLinks, one homepage band and every form's thank-you line, and never
// inside another offer's page. Its only other destination is the Sheet-to-App call in the form's
// "Not yet" / "No" success state (offer.yaml page.attention_ratio_notes).

/** The route below the locale, shared by both locales. */
export const ATLAS_PATH = 'offers/atlas';

/**
 * The thank-you line on every other form's success surface (AT-D9), staff threshold only (AT-D10).
 * `link` is the linked half. Rendered by ContactForm, so it covers every form on the site, the
 * Sheet-to-App forms included (AT-D29: it opens with the qualifier, and it shows in the success state
 * only, never in a page body, so AT-D8 holds).
 */
export const ATLAS_THANK_YOU: Record<Language, {before: string; link: string}> = {
  en: {before: 'Does your company have 20 or more staff?', link: 'You need Atlas.'},
  el: {before: 'Η επιχείρησή σου απασχολεί 20 άτομα ή περισσότερα;', link: 'Χρειάζεσαι το Atlas.'}
};

/** The homepage band, its own section after the Sheet-to-App section (AT-D8, AT-D22). No price (AT-D34). */
export const ATLAS_HOME: Record<Language, {eyebrow: string; heading: string; line: string; link: string}> = {
  en: {
    eyebrow: 'Atlas',
    heading: 'Your whole company on one system.',
    line: 'Atlas covers CRM, ERP, invoicing, accounting, bookings, automation and a knowledge base for every department. Atlas is by application.',
    link: 'See what Atlas includes'
  },
  el: {
    eyebrow: 'Atlas',
    heading: 'Όλη η επιχείρησή σου σε ένα σύστημα.',
    line: 'Το Atlas καλύπτει CRM, ERP, τιμολόγηση, λογιστική, κρατήσεις, αυτοματισμούς και βάση γνώσης για όλα τα τμήματα. Γίνεται με αίτηση.',
    link: 'Δες τι περιλαμβάνει το Atlas'
  }
};

/** One row of the stack tables: name, value, benefit line. */
export type StackRow = [name: string, value: string, benefit: string];

/** The step-2 budget question's answers, in order: Yes, Not yet, No. Index 0 is the only "ready" answer. */
export const BUDGET_MARKERS = ['atlas', 'atlas-not-yet', 'atlas-no'] as const;

/**
 * One form question. `label` and `options` per locale, index aligned, so the email can carry the
 * English label and the English option on both locales (02-architecture.md, Form delivery: "English
 * labels on both locales, like the existing heard-about line").
 */
export type AtlasQuestion = {
  id: string;
  type: 'select' | 'text' | 'email' | 'number' | 'textarea' | 'checkboxes' | 'radio';
  required: boolean;
  label: Record<Language, string>;
  options?: Record<Language, string[]>;
  /** checkboxes only: the option, by index, that opens a text field to name the items. */
  otherTextOption?: number;
};

export type AtlasCopy = {
  metaTitle: string;
  metaDescription: string;
  ogAlt: string;
  eyebrow: string;
  title: string;
  subhead: string;
  button: string;
  /** The hero diagram's generic labels (03-copy.md S01 visual brief): departments around one system. */
  diagramCenter: string;
  diagramBoxes: string[];
  /** The pre-stack story (AT-D41): problem, failed fixes, why now, the dream. */
  story: {heading: string; paragraphs: string[]}[];
  /** The lead-in line directly above the stack heading (AT-D41). */
  stackIntro: string;
  stackSubhead: string;
  stackHead: [string, string, string];
  stackRows: StackRow[];
  /** AT-D36: the core total, its own line directly under the core table (no longer a table row). */
  coreTotalLine: string;
  bonusSubhead: string;
  bonusHead: [string, string, string];
  bonusRows: StackRow[];
  bonusTotal: [string, string];
  totalLine: string;
  /** AT-D34, AT-D36: the first price on the page, its own line directly under the core total line. */
  priceReveal: string;
  basisLine: string;
  cta1Line: string;
  whoSubhead: string;
  whoText: string;
  method: string;
  /** AT-D33 KN6: two paragraphs. */
  founder: string[];
  closeSubhead: string;
  /** AT-D33 KN6: two paragraphs. */
  closeText: string[];
  formHeading: string;
  formIntro: string;
  step1Label: string;
  step2Label: string;
  requiredMarker: string;
  step1Button: string;
  step2Button: string;
  backLink: string;
  /** AT-D27: the one privacy line above the submit button, both steps. `privacyLink` is the linked half. */
  privacyLine: string;
  privacyLink: string;
  successReady: string;
  successNotReady: string;
  successNotReadyLink: string;
};

/** Step 1: five fields, all required (AT-D7; offer.yaml page.form_fields). */
export const ATLAS_STEP1: AtlasQuestion[] = [
  {
    id: 'staff',
    type: 'select',
    required: true,
    label: {en: 'How many staff does your company have?', el: 'Πόσα άτομα απασχολεί η επιχείρησή σου;'},
    options: {
      en: ['1 to 9', '10 to 19', '20 to 49', '50 to 99', '100 to 199', '200 or more'],
      el: ['1 έως 9', '10 έως 19', '20 έως 49', '50 έως 99', '100 έως 199', '200 ή περισσότερα']
    }
  },
  {
    id: 'role',
    type: 'select',
    required: true,
    label: {en: 'Your role', el: 'Ο ρόλος σου'},
    options: {
      en: ['Owner or founder', 'Managing director', 'Other manager', 'Other'],
      el: ['Ιδιοκτήτης ή ιδρυτής', 'Γενικός διευθυντής', 'Άλλο διευθυντικό στέλεχος', 'Άλλο']
    }
  },
  {id: 'company', type: 'text', required: true, label: {en: 'Company name', el: 'Όνομα επιχείρησης'}},
  {id: 'name', type: 'text', required: true, label: {en: 'Your name', el: 'Το όνομά σου'}},
  {id: 'email', type: 'email', required: true, label: {en: 'Email', el: 'Email'}}
];

/** Step 2: 21 questions, the budget question first (03-copy.md, form note). */
export const ATLAS_STEP2: AtlasQuestion[] = [
  {
    id: 'budget',
    type: 'radio',
    required: true,
    label: {
      en: 'Atlas starts from USD 100,000. Is a project of that size within your budget?',
      el: 'Το Atlas ξεκινά από 100.000 $. Ένα έργο αυτού του μεγέθους χωράει στον προϋπολογισμό σου;'
    },
    options: {en: ['Yes', 'Not yet', 'No'], el: ['Ναι', 'Όχι ακόμα', 'Όχι']}
  },
  {
    id: 'founded',
    type: 'number',
    required: true,
    label: {en: 'What year was the company founded?', el: 'Ποια χρονιά ιδρύθηκε η επιχείρηση;'}
  },
  {
    // Asked here only and never shown on the page (AT-D10).
    // 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-08): Greek pages show amounts in euros, so the
    // Greek budget question above and the «εκατ. $» revenue bands below change to euros in goal
    // C5 (Fiji ONP-5), in 03-copy.md first. Until then the dollar strings stay as approved copy.
    id: 'revenue',
    type: 'select',
    required: true,
    label: {en: 'Annual revenue', el: 'Ετήσιος τζίρος'},
    options: {
      en: ['Under USD 1M', 'USD 1M to under 3M', 'USD 3M to under 5M', 'USD 5M to under 10M', 'USD 10M or more'],
      el: [
        'Κάτω από 1 εκατ. $',
        '1 έως κάτω από 3 εκατ. $',
        '3 έως κάτω από 5 εκατ. $',
        '5 έως κάτω από 10 εκατ. $',
        '10 εκατ. $ και πάνω'
      ]
    }
  },
  {
    id: 'country',
    type: 'select',
    required: true,
    label: {en: 'Where does the company operate?', el: 'Σε ποια χώρα δραστηριοποιείται η επιχείρηση;'},
    options: {en: ['Greece', 'United States', 'Other'], el: ['Ελλάδα', 'Ηνωμένες Πολιτείες', 'Άλλη χώρα']}
  },
  {
    id: 'business',
    type: 'text',
    required: false,
    label: {en: 'What does the company do?', el: 'Με τι ασχολείται η επιχείρηση;'}
  },
  {
    id: 'departments',
    type: 'checkboxes',
    required: true,
    label: {en: 'Which departments should Atlas cover?', el: 'Ποια τμήματα θέλεις να καλύψει το Atlas;'},
    options: {
      en: ['Sales', 'Operations', 'Finance and accounting', 'Customer service', 'Warehouse and logistics', 'HR', 'Other'],
      el: [
        'Πωλήσεις',
        'Λειτουργία και παραγωγή',
        'Οικονομικά και λογιστήριο',
        'Εξυπηρέτηση πελατών',
        'Αποθήκη και διανομή',
        'Προσωπικό',
        'Άλλο'
      ]
    }
  },
  {
    id: 'software',
    type: 'checkboxes',
    required: true,
    label: {en: 'Which software do you use today?', el: 'Ποια προγράμματα χρησιμοποιείς σήμερα;'},
    options: {
      en: ['ERP', 'CRM', 'Accounting', 'Booking', 'Online shop', 'Spreadsheets', 'Other (name them)'],
      el: [
        'ERP',
        'CRM',
        'Λογιστικό πρόγραμμα',
        'Σύστημα κρατήσεων',
        'Ηλεκτρονικό κατάστημα',
        'Excel',
        'Άλλο (γράψε ποια)'
      ]
    },
    otherTextOption: 6
  },
  {
    id: 'spreadsheets',
    type: 'select',
    required: true,
    label: {en: 'How many spreadsheets does the company run on?', el: 'Σε πόσα Excel στηρίζεται η επιχείρηση;'},
    options: {
      en: ['Under 5', '5 to 20', '21 to 50', 'Over 50', 'We do not know'],
      el: ['Λιγότερα από 5', '5 έως 20', '21 έως 50', 'Πάνω από 50', 'Δεν ξέρουμε']
    }
  },
  {
    id: 'duplicateEntry',
    type: 'textarea',
    required: false,
    label: {
      en: 'Where is the same data typed in more than once?',
      el: 'Σε ποια σημεία περνάει η ομάδα σου τα ίδια στοιχεία πάνω από μία φορά;'
    }
  },
  {
    id: 'manualWork',
    type: 'textarea',
    required: false,
    label: {
      en: 'Which work is done by hand that you want to run by itself?',
      el: 'Ποια δουλειά γίνεται με το χέρι και θέλεις να γίνεται μόνη της;'
    }
  },
  {
    // Feeds H in offer.yaml cost_of_inaction for the call: the applicant's own figure.
    id: 'hours',
    type: 'number',
    required: false,
    label: {
      en: 'Roughly how many hours a week does your team spend on manual or duplicate entry?',
      el: 'Πόσες ώρες την εβδομάδα, περίπου, χάνει η ομάδα σου σε πληκτρολόγηση με το χέρι ή σε διπλές καταχωρίσεις;'
    }
  },
  {
    id: 'connections',
    type: 'checkboxes',
    required: false,
    label: {en: 'Which outside systems must connect?', el: 'Ποια εξωτερικά συστήματα πρέπει να συνδεθούν;'},
    options: {
      en: ['Bank', 'myDATA e-invoicing', 'Online shop', 'Payment provider', 'Suppliers', 'Payroll', 'Other'],
      el: ['Τράπεζα', 'myDATA', 'Ηλεκτρονικό κατάστημα', 'Πάροχος πληρωμών', 'Προμηθευτές', 'Μισθοδοσία', 'Άλλο']
    }
  },
  {
    id: 'dailyUsers',
    type: 'number',
    required: false,
    label: {
      en: 'How many people would use the system every day?',
      el: 'Πόσοι άνθρωποι θα δουλεύουν στο σύστημα κάθε μέρα;'
    }
  },
  {
    id: 'pastProject',
    type: 'textarea',
    required: false,
    label: {
      en: 'Have you tried a digitalization project before? What happened?',
      el: 'Έχεις κάνει ποτέ έργο ψηφιοποίησης; Τι έγινε;'
    }
  },
  {
    id: 'signer',
    type: 'select',
    required: true,
    label: {en: 'Who signs the decision?', el: 'Ποιος παίρνει την τελική απόφαση;'},
    options: {
      en: ['I do', 'I do, with a partner or board', 'Someone else'],
      el: ['Εγώ', 'Εγώ, μαζί με συνέταιρο ή ΔΣ', 'Κάποιος άλλος']
    }
  },
  {
    id: 'consult',
    type: 'checkboxes',
    required: false,
    label: {en: 'Who else will you consult?', el: 'Με ποιον άλλον θα το συζητήσεις;'},
    options: {
      en: ['Accountant', 'Advisor', 'Board or partners', 'Nobody'],
      el: ['Με τον λογιστή', 'Με σύμβουλο', 'Με το ΔΣ ή τους συνεταίρους', 'Με κανέναν']
    }
  },
  {
    id: 'owner',
    type: 'text',
    required: false,
    label: {
      en: 'Who would own the project on your side?',
      el: 'Ποιος θα έχει την ευθύνη του έργου από τη δική σου πλευρά;'
    }
  },
  {
    id: 'start',
    type: 'select',
    required: true,
    label: {en: 'When do you want to start?', el: 'Πότε θέλεις να ξεκινήσεις;'},
    options: {
      en: ['Within 3 months', 'In 3 to 6 months', 'In 6 to 12 months', 'Later'],
      el: ['Μέσα σε 3 μήνες', 'Σε 3 έως 6 μήνες', 'Σε 6 έως 12 μήνες', 'Αργότερα']
    }
  },
  {id: 'whyNow', type: 'textarea', required: true, label: {en: 'Why now?', el: 'Γιατί τώρα;'}},
  {id: 'heardAbout', type: 'text', required: false, label: {en: 'How did you hear about us?', el: 'Πώς μας βρήκες;'}},
  {
    id: 'anythingElse',
    type: 'textarea',
    required: false,
    label: {en: 'Anything else we should know?', el: 'Θέλεις να μας πεις κάτι άλλο;'}
  }
];

export type AtlasOffer = {
  slug: typeof ATLAS_PATH;
  /** schema.org serviceType, English in both locales. */
  serviceType: string;
  /** schema.org areaServed per locale (src/lib/offerSchema.ts). */
  areaServed: Record<Language, string[]>;
  copy: Record<Language, AtlasCopy & {faqs: []}>;
};

const atlas: AtlasOffer = {
  slug: ATLAS_PATH,
  serviceType: 'Business Process Automation',
  // The two countries the form's "Where does the company operate?" question names, on both locales,
  // so the Service node and the form agree (QA round 1, 2026-10-18). Without this, offerSchema.ts
  // fell back to Greece alone. The site-wide ProfessionalService node names both too (RootShell.tsx).
  areaServed: {en: ['United States', 'Greece'], el: ['Greece', 'United States']},
  copy: {
    en: {
      // offer.yaml seo.title.en and seo.description.en, verbatim. No price (02-architecture.md, Gaps).
      metaTitle: 'Atlas: your whole company on one system | Fiji Solutions',
      metaDescription:
        'Atlas puts your whole company on one system: CRM, ERP, invoicing, booking, automation and a knowledge base, built around how you already work.',
      ogAlt: 'Fiji Solutions: Atlas puts your whole company on one system',
      faqs: [],
      eyebrow: 'Atlas · by application',
      title: 'Atlas puts your whole company on one system.',
      subhead:
        'CRM, ERP, invoicing, accounting, bookings, automation and a knowledge base. Every department works from the same customers, orders and accounts.',
      button: 'Apply for Atlas',
      diagramCenter: 'Atlas',
      diagramBoxes: ['Sales', 'Finance', 'Warehouse', 'Customer service'],
      // The pre-stack story (AT-D41, Charis 2026-10-18): problem, failed fixes, why now, the dream, then the lead-in.
      story: [
        {
          heading: 'Your company runs on a few people and a pile of spreadsheets.',
          paragraphs: [
            'An order comes in by email. Someone types it into a spreadsheet. Someone types it again into the invoicing tool, and again into accounting.',
            'To answer one question, like how much you sold last month, a person chases numbers across five files.',
            'It works until a key person goes on holiday or leaves. Then nobody knows how things run. And you end up as the person everyone has to ask.',
          ],
        },
        {
          heading: 'You have probably tried to fix this before.',
          paragraphs: [
            'Perhaps you bought a large ERP package. It asked your team to change how they work, and many of them went back to their spreadsheets.',
            'Perhaps you bought one tool for each problem. Now you have more systems, and they still do not talk to each other.',
            'Perhaps a vendor sold you a package and left. You still pay the licence.',
          ],
        },
        {
          heading: 'Why this matters now.',
          paragraphs: [
            'Hiring is hard, so the same people have to do more each year. AI tools are everywhere, and it is easy to feel behind. And under myDATA, every invoice has to reach AADE correctly.',
          ],
        },
        {
          heading: 'Now picture one system that runs your whole company.',
          paragraphs: [
            'Every customer, order, booking and invoice sits in one place. Data typed once goes everywhere it needs to go. Routine work runs on its own, and your people handle the exceptions. When you want a number, you open one screen.',
            'When a key person is away, the company keeps running, because the answers live in the system.',
            'That system is Atlas.',
          ],
        },
      ],
      stackIntro: 'Here is everything that goes into Atlas. Next to each part is what it would cost if you bought it on its own.',
      stackSubhead: '8 core parts, USD 452,000 in value.',
      stackHead: ['Part', 'Value', 'What it does for you'],
      stackRows: [
        ['The Atlas Audit', 'USD 54,000', 'Before anything is built, we learn how every department works.'],
        ['The 12-Month Atlas Plan', 'USD 16,000', 'What changes, in what order, by when and at what cost.'],
        [
          'The Atlas Core (CRM, ERP, invoicing, accounting, booking)',
          'USD 110,000',
          'Customers, sales, stock, orders, invoices, accounts and bookings, shared by every department.'
        ],
        [
          'The Atlas Connections',
          'USD 95,000',
          'Your bank, myDATA e-invoicing in Greece and your online shop exchange data with your system on their own, so nobody copies those figures by hand.'
        ],
        [
          'The Atlas Automation Engine',
          'USD 35,000',
          'The work your team repeats by hand every day across several systems runs by itself.'
        ],
        ['The Atlas Internal Apps', 'USD 55,000', 'Each role works in an app made for how your company runs.'],
        [
          'The Atlas Knowledge Base',
          'USD 60,000',
          'Any department asks in plain words and gets an answer from your own documents.'
        ],
        [
          'The Atlas Data Move',
          'USD 27,000',
          'Years of spreadsheets and old records arrive cleaned, deduplicated and checked.'
        ]
      ],
      coreTotalLine: 'Core value: USD 452,000.',
      bonusSubhead: 'Every Atlas project gets four bonuses on top.',
      bonusHead: ['Bonus', 'Value', 'What it does for you'],
      bonusRows: [
        [
          'The Atlas Care Year',
          'USD 27,000',
          'For a year after launch, we keep every system and automation running and watched.'
        ],
        ['The Atlas Academy', 'USD 7,000', 'We train your team to use the new system.'],
        [
          'The Atlas AI Assistant',
          'USD 13,000',
          'One AI agent takes on your busiest repetitive task, such as answering routine customer questions.'
        ],
        ['The Atlas Handover Pack', 'USD 5,000', 'You own it: full documentation and the source code we write.']
      ],
      bonusTotal: ['Bonus value', 'USD 52,000'],
      totalLine: 'Total value: USD 504,000.',
      priceReveal: 'Atlas starts from USD 100,000.',
      // TODO(charis) 17 (03-copy.md): approve this basis wording, or remove the line.
      basisLine: 'Each value is worked out from published prices and costs. We researched them in October 2026.',
      cta1Line: 'Applying takes two steps on one form.',
      whoSubhead: 'Atlas is for companies with 20 or more staff.',
      whoText: 'It is a big project at a big price. Atlas is by application only, and we may decline.',
      method: 'Built around how your company already works, one department at a time.',
      // TODO(charis) 19 (03-copy.md): does this line read as you want under F-D22/F-D30?
      founder: [
        'Our founder has been a software engineer for more than ten years. That work went through Fiji Solutions, Peak Code Consulting and earlier jobs.',
        'He has worked in five sectors: banking, travel, telecommunications, health and online education.'
      ],
      closeSubhead: 'Everything in one system, from USD 100,000.',
      closeText: [
        'Atlas includes the audit, the 12-month plan, the core system and the connections.',
        'It also includes automation, internal apps, the knowledge base, the data move and four bonuses. To apply, fill in the two steps of the form below.'
      ],
      formHeading: 'Apply for Atlas',
      formIntro:
        'Step one takes five short answers. Step two has 21 questions about your company, your systems and your plans.',
      step1Label: 'Step 1 of 2',
      step2Label: 'Step 2 of 2',
      requiredMarker: 'Required',
      step1Button: 'Continue',
      step2Button: 'Send application',
      backLink: 'Back to step 1',
      privacyLine: 'We use your details to review your application.',
      privacyLink: 'Privacy policy',
      // AT-D31: the duplicate sentence "Atlas is by application only." is dropped; S17 says it once.
      successReady: 'Thank you, we have received your application.',
      successNotReady:
        'Thank you, we have received your application. If Atlas is a step too far today, start with one spreadsheet:',
      successNotReadyLink: 'Book a free 30-minute Sheet-to-App call'
    },
    el: {
      // offer.yaml seo.title.el and seo.description.el, verbatim. The brand is Latin "Atlas" (AT-D25,
      // AT-D31): «Άτλας:» became "Atlas:" and «Ο Άτλας βάζει» became «Το Atlas βάζει», the page H1's
      // own wording (59 and 154 characters). offer.yaml carries the same strings since 2026-10-18.
      metaTitle: 'Atlas: όλη η επιχείρησή σου σε ένα σύστημα | Fiji Solutions',
      metaDescription:
        'Το Atlas βάζει όλη την επιχείρησή σου σε ένα σύστημα: CRM, ERP, τιμολόγηση, κρατήσεις, αυτοματισμοί και βάση γνώσης, γύρω από τον τρόπο που ήδη δουλεύεις.',
      ogAlt: 'Fiji Solutions: Το Atlas βάζει όλη την επιχείρησή σου σε ένα σύστημα',
      faqs: [],
      eyebrow: 'Atlas · με αίτηση',
      title: 'Το Atlas βάζει όλη την επιχείρησή σου σε ένα σύστημα.',
      subhead:
        'CRM, ERP, τιμολόγηση, λογιστική, κρατήσεις, αυτοματισμοί και βάση γνώσης. Όλα τα τμήματα έχουν τα ίδια στοιχεία πελατών, παραγγελιών και λογιστηρίου.',
      // The Greek amounts keep the plain space before «$» that 03-copy.md writes, so every string
      // here stays byte-identical to the approved copy (AT-D26). The layout keeps the value cells
      // from wrapping instead (whitespace-nowrap in AtlasLanding.tsx). No hero price (AT-D34).
      // Superseded in part 2026-10-26 (offer-os gtm/seo-plan-2026-10 D-08): Greek pages show prices
      // in euros, so the «$» amounts change in goal C5 (Fiji ONP-5), in 03-copy.md first.
      button: 'Κάνε αίτηση για το Atlas',
      diagramCenter: 'Atlas',
      diagramBoxes: ['Πωλήσεις', 'Λογιστήριο', 'Αποθήκη', 'Εξυπηρέτηση'],
      // The pre-stack story (AT-D41, Charis 2026-10-18): problem, failed fixes, why now, the dream, then the lead-in.
      story: [
        {
          heading: 'Η επιχείρησή σου στηρίζεται σε λίγους ανθρώπους και σε πολλά Excel.',
          paragraphs: [
            'Μια παραγγελία έρχεται με email. Κάποιος την περνάει σε ένα Excel. Κάποιος την περνάει ξανά στο πρόγραμμα τιμολόγησης, και ξανά στο λογιστήριο.',
            'Για να απαντήσεις σε μία ερώτηση, όπως πόσα πούλησες τον προηγούμενο μήνα, κάποιος ψάχνει νούμερα σε πέντε αρχεία.',
            'Δουλεύει, μέχρι να πάει διακοπές ή να φύγει ένας βασικός άνθρωπος. Τότε κανείς δεν ξέρει πώς τρέχουν τα πράγματα. Και στο τέλος όλοι ρωτάνε εσένα.',
          ],
        },
        {
          heading: 'Μάλλον έχεις ήδη προσπαθήσει να το λύσεις.',
          paragraphs: [
            'Ίσως αγόρασες ένα μεγάλο πακέτο ERP. Ζήτησε από την ομάδα σου να αλλάξει τον τρόπο που δουλεύει, και πολλοί γύρισαν στα Excel τους.',
            'Ίσως αγόρασες ένα εργαλείο για κάθε πρόβλημα. Τώρα έχεις περισσότερα συστήματα, και ακόμα δεν μιλάνε μεταξύ τους.',
            'Ίσως κάποιος προμηθευτής σού πούλησε ένα πακέτο και εξαφανίστηκε. Την άδεια την πληρώνεις ακόμα.',
          ],
        },
        {
          heading: 'Γιατί έχει σημασία τώρα.',
          paragraphs: [
            'Οι καλοί υπάλληλοι βρίσκονται δύσκολα, οπότε οι ίδιοι άνθρωποι πρέπει να κάνουν περισσότερα κάθε χρόνο. Τα εργαλεία AI είναι παντού, και εύκολα νιώθεις ότι μένεις πίσω. Και με το myDATA, κάθε τιμολόγιο πρέπει να φτάνει σωστά στην ΑΑΔΕ.',
          ],
        },
        {
          heading: 'Τώρα φαντάσου ένα σύστημα που τρέχει όλη την επιχείρησή σου.',
          paragraphs: [
            'Κάθε πελάτης, παραγγελία, κράτηση και τιμολόγιο βρίσκεται σε ένα μέρος. Ό,τι περαστεί μία φορά πηγαίνει παντού όπου χρειάζεται. Η ρουτίνα τρέχει μόνη της, και οι άνθρωποί σου χειρίζονται τις εξαιρέσεις. Όταν θέλεις ένα νούμερο, ανοίγεις μία οθόνη.',
            'Όταν λείπει ένας βασικός άνθρωπος, η επιχείρηση συνεχίζει, γιατί οι απαντήσεις βρίσκονται μέσα στο σύστημα.',
            'Αυτό το σύστημα είναι το Atlas.',
          ],
        },
      ],
      stackIntro: 'Αυτά είναι όλα όσα περιλαμβάνει το Atlas. Δίπλα σε κάθε μέρος γράφει πόσο θα κόστιζε αν το αγόραζες χωριστά.',
      stackSubhead: '8 βασικά μέρη, αξίας 452.000 $.',
      stackHead: ['Μέρος', 'Αξία', 'Τι κάνει για σένα'],
      stackRows: [
        ['The Atlas Audit', '54.000 $', 'Πριν χτιστεί οτιδήποτε, μαθαίνουμε πώς δουλεύει κάθε τμήμα σου.'],
        ['The 12-Month Atlas Plan', '16.000 $', 'Τι αλλάζει, με ποια σειρά, πότε και με τι κόστος.'],
        [
          'The Atlas Core (CRM, ERP, invoicing, accounting, booking)',
          '110.000 $',
          'Πελάτες, πωλήσεις, απόθεμα, παραγγελίες, τιμολόγια, λογιστική και κρατήσεις, κοινά για όλα τα τμήματα.'
        ],
        [
          'The Atlas Connections',
          '95.000 $',
          'Η τράπεζα, το myDATA και το ηλεκτρονικό σου κατάστημα συνδέονται με το σύστημα. Κανείς δεν ξαναπερνά αυτά τα νούμερα με το χέρι.'
        ],
        [
          'The Atlas Automation Engine',
          '35.000 $',
          'Η καθημερινή χειροκίνητη δουλειά της ομάδας σου σε πολλά συστήματα γίνεται μόνη της.'
        ],
        [
          'The Atlas Internal Apps',
          '55.000 $',
          'Κάθε ρόλος δουλεύει σε εφαρμογή φτιαγμένη για τον τρόπο που τρέχει η επιχείρησή σου.'
        ],
        ['The Atlas Knowledge Base', '60.000 $', 'Κάθε τμήμα ρωτά με απλά λόγια και απαντούν τα δικά σου έγγραφα.'],
        [
          'The Atlas Data Move',
          '27.000 $',
          'Τα Excel και τα παλιά αρχεία πολλών χρόνων περνούν καθαρά, ελεγμένα και χωρίς διπλές εγγραφές.'
        ]
      ],
      coreTotalLine: 'Αξία βασικών μερών: 452.000 $.',
      bonusSubhead: 'Επιπλέον, κάθε έργο Atlas έχει τέσσερα μπόνους.',
      bonusHead: ['Μπόνους', 'Αξία', 'Τι κάνει για σένα'],
      bonusRows: [
        [
          'The Atlas Care Year',
          '27.000 $',
          'Για έναν χρόνο μετά την παράδοση, κρατάμε κάθε σύστημα και αυτοματισμό σε λειτουργία, υπό παρακολούθηση.'
        ],
        ['The Atlas Academy', '7.000 $', 'Εκπαιδεύουμε την ομάδα σου να δουλεύει στο νέο σύστημα.'],
        [
          'The Atlas AI Assistant',
          '13.000 $',
          'Ένας AI agent αναλαμβάνει την πιο φορτωμένη επαναλαμβανόμενη δουλειά σου, όπως τις συνηθισμένες ερωτήσεις πελατών.'
        ],
        ['The Atlas Handover Pack', '5.000 $', 'Είναι δικά σου: πλήρης τεκμηρίωση και ο πηγαίος κώδικας που γράφουμε.']
      ],
      bonusTotal: ['Αξία μπόνους', '52.000 $'],
      totalLine: 'Συνολική αξία: 504.000 $.',
      priceReveal: 'Το Atlas ξεκινά από 100.000 $.',
      // TODO(charis) 17 (03-copy.md): approve this basis wording, or remove the line.
      basisLine: 'Κάθε αξία βγαίνει από δημοσιευμένες τιμές και κόστη της αγοράς. Η έρευνα έγινε τον Οκτώβριο του 2026.',
      cta1Line: 'Η αίτηση έχει δύο βήματα, σε μία φόρμα.',
      whoSubhead: 'Το Atlas είναι για επιχειρήσεις με 20 άτομα ή περισσότερα.',
      whoText: 'Είναι μεγάλο έργο και κοστίζει ανάλογα. Γίνεται μόνο με αίτηση και μπορεί να πούμε όχι.',
      method: 'Χτίζεται γύρω από τον τρόπο που ήδη δουλεύει η επιχείρησή σου, ένα τμήμα τη φορά.',
      // TODO(charis) 19 (03-copy.md), as en.
      founder: [
        'Ο ιδρυτής μας είναι μηχανικός λογισμικού εδώ και πάνω από δέκα χρόνια. Η δουλειά του έγινε μέσω της Fiji Solutions, της Peak Code Consulting και παλιότερων θέσεων.',
        'Έχει δουλέψει σε πέντε κλάδους: τράπεζες, τουρισμό, τηλεπικοινωνίες, υγεία και διαδικτυακή εκπαίδευση.'
      ],
      closeSubhead: 'Όλα σε ένα σύστημα, από 100.000 $.',
      closeText: [
        'Το Atlas περιλαμβάνει τη χαρτογράφηση, το πλάνο, το κεντρικό σύστημα, τις συνδέσεις και τους αυτοματισμούς.',
        'Έχει επίσης τις εφαρμογές, τη βάση γνώσης, τη μεταφορά δεδομένων και τέσσερα μπόνους. Συμπλήρωσε τη φόρμα παρακάτω.'
      ],
      formHeading: 'Κάνε αίτηση για το Atlas',
      formIntro:
        'Το πρώτο βήμα έχει πέντε σύντομες ερωτήσεις, το δεύτερο 21, για την επιχείρηση, τα συστήματα και τα σχέδιά σου.',
      step1Label: 'Βήμα 1 από 2',
      step2Label: 'Βήμα 2 από 2',
      requiredMarker: 'Υποχρεωτικό',
      step1Button: 'Συνέχεια',
      step2Button: 'Στείλε την αίτηση',
      backLink: 'Πίσω στο βήμα 1',
      privacyLine: 'Με τα στοιχεία σου εξετάζουμε την αίτησή σου.',
      privacyLink: 'Πολιτική απορρήτου',
      // AT-D31, as en: «Το Atlas γίνεται μόνο με αίτηση.» is dropped.
      successReady: 'Ευχαριστούμε, λάβαμε την αίτησή σου.',
      successNotReady:
        'Ευχαριστούμε, λάβαμε την αίτησή σου. Αν το Atlas είναι μεγάλο βήμα για τώρα, ξεκίνα από ένα Excel:',
      successNotReadyLink: 'Κλείσε την πρώτη κλήση των 30 λεπτών για το Sheet-to-App, δωρεάν'
    }
  }
};

export default atlas;
