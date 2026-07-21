import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import {Language} from '@/types/language';

const CALENDLY_URL = 'https://calendly.com/charis-fijisolutions/30min';

type CtaCopy = {
  button: string;
  callout: string;
  microcopy: string;
};

type LeadItem = {
  lead: string;
  body: string;
};

type TrustCard = {
  title: string;
  body: string;
  links?: {label: string; href: string}[];
  badge?: boolean;
};

type OfferStep = {
  step: string;
  title: string;
  body: string;
};

type TimelineItem = {
  when: string;
  body: string;
};

type MapRow = {
  process: string;
  hours: string;
  cost: string;
};

type Faq = {
  q: string;
  a: string;
};

type LandingCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubhead: string;
  heroBullets: LeadItem[];
  cta: CtaCopy;
  storyTitle: string;
  storyParagraphs: string[];
  painTitle: string;
  painParagraphs: string[];
  leaksTitle: string;
  leaks: LeadItem[];
  leaksClosing: string;
  mathBox: string;
  cta2Lead: string;
  trustTitle: string;
  trustIntro: string;
  trustCards: TrustCard[];
  trustClosing: string;
  offerTitle: string;
  offerIntro: string;
  offerSteps: OfferStep[];
  offerPricing: string;
  offerEffort: string;
  dreamTitle: string;
  dreamBullets: {before: string; after: string; body: string}[];
  dreamGoal: string;
  timelineTitle: string;
  timeline: TimelineItem[];
  sampleMapLabel: string;
  sampleMapTitle: string;
  sampleMapHeaders: {process: string; hours: string; cost: string};
  sampleMapRows: MapRow[];
  sampleMapFootnote: string;
  timelineClosing: string;
  stackTitle: string;
  stackItems: LeadItem[];
  bonusTitle: string;
  bonusItems: LeadItem[];
  stackClosing: string;
  faqTitle: string;
  faqs: Faq[];
  bioTitle: string;
  bioIntro: string;
  bioBullets: string[];
  bioClosing: string[];
  guaranteeTitle: string;
  guaranteeIntro: string;
  guaranteePromise: string;
  guaranteePointsTitle: string;
  guaranteePoints: LeadItem[];
  guaranteeClosing: string;
  scarcityTitle: string;
  scarcityBody: string;
  psParagraphs: string[];
  signatureName: string;
  signatureRole: string;
  formTitle: string;
  formSubhead: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formMicrocopy: string;
  formCalendlyLead: string;
  formCalendlyLink: string;
  formSuccess: string;
};

const copy: Record<Language, LandingCopy> = {
  en: {
    heroEyebrow: 'Fiji Solutions · Thessaloniki · Snowflake AI Data Cloud Select Partner',
    heroTitle: 'Get your team’s hours back — every week, without hiring anyone.',
    heroSubhead: 'We find the manual processes quietly draining your business, then build the custom software and automation that make them disappear. It starts with a free Process Audit that shows you exactly where the money is leaking — and it ends with a written guarantee.',
    heroBullets: [
      {
        lead: 'The free Process Audit.',
        body: 'A 45–60 minute call, then a written map of your three biggest process money-leaks. Yours to keep either way.'
      },
      {
        lead: 'The fix, built for you.',
        body: 'Custom software and automation — including AI where it genuinely helps. Not licenses, not templates.'
      },
      {
        lead: 'The Pays-For-Itself Guarantee.',
        body: 'If the fix we build doesn’t pay for itself within 6 months of going live, we refund your build fee.'
      }
    ],
    cta: {
      button: 'Get my free Process Audit',
      callout: 'The audit is free, no obligation. Every fix we build is backed by the Pays-For-Itself Guarantee — if it doesn’t pay for itself within 6 months of going live, we refund your build fee.',
      microcopy: 'We reply within 1 business day.'
    },
    storyTitle: 'The most expensive employee in most Greek businesses is a spreadsheet',
    storyParagraphs: [
      'I’m Charalampos Moutafidis. I run Fiji Solutions, a software company in Thessaloniki.',
      'Everywhere I’ve built software, I’ve seen the same picture in smaller businesses: smart, capable teams spending hours every week retyping data between systems, chasing approvals over email, fixing the same errors, and apologising to clients for follow-ups that slipped.',
      'Not because anyone is lazy. Because nobody ever sat down, mapped the process end to end, and built the boring, reliable software that makes the problem disappear.',
      'That is the entire job of Fiji Solutions. We don’t sell licenses. We don’t resell someone else’s platform. We map how your business actually works, find where it bleeds time and money, and build the exact fix — then we maintain it so it keeps working.',
      'We call the whole engagement the Internal Operations Fix. It starts with a free Process Audit, and everything we build is covered by a money-back guarantee. Here’s what that looks like.'
    ],
    painTitle: 'Does this sound like your week?',
    painParagraphs: [
      'It’s 9pm on a Tuesday and you’re still at your desk, copying numbers from one system into another — because if you don’t do it, nobody will, and if it’s wrong, a client will find it before you do.',
      'Tomorrow there’s the order that got typed twice. The quote that went out four days late. The Excel file with three versions and nobody sure which one is real. The new hire you can’t properly train, because the process only exists in someone’s head.',
      'You didn’t start a business to be its most overqualified data-entry clerk. But every year the admin grows faster than the revenue — and the week you’d spend fixing it never comes, because you’re too busy surviving it.'
    ],
    leaksTitle: 'The five leaks we see in almost every small business',
    leaks: [
      {
        lead: 'Double entry.',
        body: 'The same data typed into two, three, sometimes four systems — and every retype is a chance for the error a client finds first.'
      },
      {
        lead: 'Late follow-ups.',
        body: 'Quotes, invoices, and reminders going out days late. Money you already earned, arriving slower than it should.'
      },
      {
        lead: 'Constant firefighting.',
        body: 'Problems that surface only after they’ve cost you something — so your best people spend the week reacting instead of improving anything.'
      },
      {
        lead: 'The 60% tool.',
        body: 'Off-the-shelf software you pay for every month that fits your business about 60%. The missing 40% is done by hand, forever.'
      },
      {
        lead: 'The key-person trap.',
        body: 'Processes that live in one person’s head, so a sick day or a resignation becomes an operational crisis.'
      }
    ],
    leaksClosing: 'None of these is a character flaw. All of them are software problems — and software problems can be fixed for good, and kept fixed.',
    mathBox: 'Do the math for your own team: 3 people spending 5 hours a week on manual work, at €25/hour, is over €19,000 a year — before you count the errors, the late invoices, and the clients who quietly left.',
    cta2Lead: 'Find out what your processes are actually costing you — free, and in writing within a week of your audit call.',
    trustTitle: 'No testimonial wall. Here’s what you can verify yourself.',
    trustIntro: 'We’re a small company and we won’t pretend otherwise — you won’t find a page of anonymous five-star reviews here. You’ll find things you can check:',
    trustCards: [
      {
        title: 'Snowflake AI Data Cloud Select Partner',
        body: 'A vetted partnership with one of the world’s leading data platforms.',
        badge: true
      },
      {
        title: 'Software you can click',
        body: 'Products we designed, built, and run ourselves. Try them.',
        links: [
          {label: 'Fiji Analytics Dashboard', href: 'https://finance.fijisolutions.net'},
          {label: 'Catalytics Pro', href: 'https://catalytics.pro'}
        ]
      },
      {
        title: 'A real company, a real office',
        body: 'Fiji Solutions IKE, registered in Greece (GEMI 185101306000), Porto Center, Thessaloniki. Not a PO box.'
      },
      {
        title: 'A guarantee with our own money behind it',
        body: 'Agreed in writing, per client, before we build. Details below.'
      }
    ],
    trustClosing: 'When we do publish client results, they’ll be real, measured, and named. Until then, we’d rather show you less and have all of it be true.',
    offerTitle: 'The Internal Operations Fix — how it works',
    offerIntro: 'Not a software license. Not a course. A done-for-you engagement in three steps — with the target agreed in writing before anything gets built.',
    offerSteps: [
      {
        step: 'Step 1',
        title: 'The free Process Audit',
        body: 'A 45–60 minute call where we walk through how work actually flows through your business: who types what, where, how often, and what breaks. You then receive your Process Money-Leak Map — a written one-page summary of your three most expensive bottlenecks, with an estimate of the hours and euros each one costs you per month. It’s yours to keep whether or not we ever speak again. It’s also the baseline our guarantee is measured against.'
      },
      {
        step: 'Step 2',
        title: 'The Discovery Sprint',
        body: 'If the map shows a fix worth building, we run a focused sprint with your team: we map the exact workflows step by step, rank every possible fix by return on investment, and agree the payback target — in writing. You approve the plan, the price, and the target before a single line of code is written.'
      },
      {
        step: 'Step 3',
        title: 'Build & Run',
        body: 'We build the highest-ROI fix first, so you see results before we touch anything else. Then the monthly care plan takes over: we maintain it, monitor it, and keep optimising it, so nothing ever lands back on your team’s plate.'
      }
    ],
    offerPricing: 'The engagement is a one-time build fee plus a small monthly care plan. The exact numbers depend on what the audit finds — which is exactly why the audit comes first, and why it’s free.',
    offerEffort: 'What we need from you: about one hour for the audit, and a few short sessions during the sprint. We do everything else.',
    dreamTitle: 'What Monday morning looks like after the fix',
    dreamBullets: [
      {
        before: 'Double entry',
        after: 'typed once, correct everywhere.',
        body: 'Data flows between your systems automatically.'
      },
      {
        before: 'Late follow-ups',
        after: 'they send themselves.',
        body: 'Quotes, invoices, and reminders go out on time, every time — without anyone remembering to do it.'
      },
      {
        before: 'Firefighting',
        after: 'you see problems before they cost you.',
        body: 'Dashboards and alerts surface what’s off while it’s still cheap to fix. Mondays without surprises.'
      },
      {
        before: 'The 60% tool',
        after: 'software shaped 100% to how you work.',
        body: 'Built around your process, not the other way round.'
      },
      {
        before: 'The key-person trap',
        after: 'the process lives in the software.',
        body: 'Documented, visible, and runnable by anyone from day one.'
      }
    ],
    dreamGoal: 'Our goal in every engagement is to give your team back 5–10 hours a week. In the free audit we calculate exactly how many hours your processes are costing you — and that number becomes the written target we’re accountable to.',
    timelineTitle: 'Your first 30 days — and what comes right after',
    timeline: [
      {
        when: 'Day 1',
        body: 'You send the form. We reply within 1 business day to schedule your audit call.'
      },
      {
        when: 'Week 1',
        body: 'The audit call. 45–60 minutes. You talk, we ask, we take notes. That’s your entire time investment.'
      },
      {
        when: 'Week 2',
        body: 'Your Process Money-Leak Map arrives. Three bottlenecks, their monthly cost, and an ROI estimate for each. Keep it — and act on it with anyone you like.'
      },
      {
        when: 'Weeks 2–3',
        body: 'If you want the fix: the Discovery Sprint. Workflows mapped, fixes ranked, target agreed in writing.'
      },
      {
        when: 'Around day 30',
        body: 'The build starts on your highest-ROI fix. Our target: first automation live within 30 days after that.'
      }
    ],
    sampleMapLabel: 'Example',
    sampleMapTitle: 'Process Money-Leak Map — what yours will look like',
    sampleMapHeaders: {process: 'Bottleneck', hours: 'Time lost', cost: 'Estimated cost'},
    sampleMapRows: [
      {process: 'Manual invoice entry and reconciliation', hours: '≈ 18 h / month', cost: '≈ €450 / month'},
      {process: 'Order data retyped between e-shop and ERP', hours: '≈ 12 h / month', cost: '≈ €300 / month'},
      {process: 'Quote follow-ups tracked by memory', hours: '≈ 9 h / month', cost: '≈ €225 / month'}
    ],
    sampleMapFootnote: 'An illustrative example — your map is built from your own numbers during the audit.',
    timelineClosing: 'Nothing on this timeline commits you to the next step — each one ends with a decision that is yours to make.',
    stackTitle: 'What you walk away with — even if you never hire us',
    stackItems: [
      {
        lead: 'The audit call.',
        body: '45–60 minutes with the person who would actually build your fix — not a salesperson working from a script.'
      },
      {
        lead: 'Your Process Money-Leak Map.',
        body: 'A written, prioritised list of your three costliest bottlenecks — the kind of document consultancies charge real money for. Yours to keep.'
      },
      {
        lead: 'An ROI estimate for each fix.',
        body: 'So you can act on it — with us, with someone else, or in-house. No strings attached to the numbers.'
      }
    ],
    bonusTitle: 'And if we end up working together',
    bonusItems: [
      {
        lead: 'You own what we build.',
        body: 'Source code and documentation are yours — if we ever part ways, everything keeps working and any developer can take over.'
      },
      {
        lead: '30-day post-launch tuning period.',
        body: 'After go-live we watch the numbers and tighten whatever the real world reveals — included.'
      },
      {
        lead: 'Priority support.',
        body: 'Care-plan clients jump the queue — when something needs attention, you’re first in line.'
      }
    ],
    stackClosing: 'The worst realistic outcome of the audit: you spend one hour and learn precisely what your processes cost — for free.',
    faqTitle: 'Fair questions, straight answers',
    faqs: [
      {
        q: 'What does the audit really cost?',
        a: 'Nothing. No fee, no obligation, no sales pitch. If we find nothing worth fixing, we’ll tell you that too — and you keep the map.'
      },
      {
        q: 'And the fix — what does that cost?',
        a: 'A one-time build fee plus a small monthly care plan. Exact numbers come after the audit, because they depend entirely on what we find. What’s fixed in advance is the guarantee: if it doesn’t pay for itself within 6 months of going live, we refund your build fee.'
      },
      {
        q: 'How is “pays for itself” actually measured?',
        a: 'During the audit we record your baseline — hours spent, error rates, delays. Before we build, we agree in writing what the fix must save. Then we measure against that baseline at agreed check-ins. No vague promises, no moving goalposts.'
      },
      {
        q: 'We already use accounting / ERP / e-shop software. Will you make us replace it?',
        a: 'Almost never. Most fixes connect the tools you already have so data stops being retyped between them. We replace something only when it’s genuinely the problem.'
      },
      {
        q: 'I don’t have time for an IT project.',
        a: 'That’s the point. The audit takes about one hour of your time; during the build, we do the work and your team keeps doing their jobs. This is done-for-you, not another project on your desk.'
      },
      {
        q: 'Who maintains it after launch?',
        a: 'We do — that’s the care plan. Monitoring, fixes, updates, and monthly optimisation.'
      },
      {
        q: 'Who owns the software?',
        a: 'You do. Source code and documentation are yours, everything is documented, and any developer could take over — you’re never dependent on us against your will.'
      },
      {
        q: 'Is this an “AI thing”?',
        a: 'Only where AI genuinely helps. Many of the highest-ROI fixes are plain integrations and automations. We don’t add AI for the buzzword — we add whatever makes the problem disappear.'
      },
      {
        q: 'Are we too small for this?',
        a: 'If two or more people spend hours every week on repetitive manual work, you’re big enough for the math to work. The audit will tell you either way — for free.'
      }
    ],
    bioTitle: 'Who you’ll be talking to',
    bioIntro: 'I’m Charalampos (Charis) Moutafidis, founder of Fiji Solutions.',
    bioBullets: [
      'Software engineer; founder and administrator of Fiji Solutions IKE, Thessaloniki.',
      'Snowflake AI Data Cloud Select Partner — one of the vetted partners of the Snowflake data platform.',
      'Builder of Fiji Analytics Dashboard and Catalytics Pro — live products you can open right now, not slideware.'
    ],
    bioClosing: [
      'When you book an audit, you talk to me — the same person who scopes the work, builds the software, and stands behind the guarantee. No account managers, no handoffs, no telephone game between sales and delivery.',
      'That’s the advantage of a small firm: the person who promised is the person who builds.'
    ],
    guaranteeTitle: 'The Pays-For-Itself Guarantee, in plain language',
    guaranteeIntro: 'Most agencies get paid whether their software works or not. We decided to make that impossible for ourselves.',
    guaranteePromise: 'If the fix we build doesn’t pay for itself within 6 months of going live, we refund your build fee.',
    guaranteePointsTitle: 'What makes it real',
    guaranteePoints: [
      {
        lead: 'The target is agreed before we build.',
        body: 'During the free audit we measure your baseline — hours spent, errors made, delays. The payback target comes from those numbers and goes into the contract, in writing.'
      },
      {
        lead: 'The math is honest.',
        body: '“Pays for itself” means measured time and cost savings worth more than the total fees you’ve paid us — build fee and care-plan months included.'
      },
      {
        lead: 'The clock starts at go-live.',
        body: 'Not at contract signing, not at the first meeting.'
      },
      {
        lead: 'What we ask of you.',
        body: 'Use the software, let your team be trained, give us the access we need to measure, and keep the care plan running through the guarantee window — it’s how we measure the savings. If something is off-target, we get 30 days to fix it before any refund — because fixing beats refunding, for both of us.'
      }
    ],
    guaranteeClosing: 'The full terms — including exactly how we measure — go into the contract before we build, so you can hold us to every word.',
    scarcityTitle: 'Why we only run two builds at a time',
    scarcityBody: 'Everything we ship is designed and built by us — not handed to subcontractors. That has one honest consequence: we run at most two builds at a time. When both slots are taken, the next audit goes on a dated waitlist and we tell you so — we’d rather you wait two weeks than get a rushed build.',
    psParagraphs: [
      'P.S. — If you’ve read this far, one number to leave with: the audit takes about an hour of your time and costs nothing. If we find nothing worth fixing, we’ll say so — that’s a short, friendly call. But if your business runs on retyped data, late follow-ups, and one person who knows how everything works, that hour is probably the highest-return meeting you’ll book this year.',
      'Every month you wait has a price. The audit will tell you exactly what it is — for free.'
    ],
    signatureName: '— Charalampos Moutafidis',
    signatureRole: 'Founder, Fiji Solutions · Thessaloniki',
    formTitle: 'Get your free Process Audit',
    formSubhead: 'Tell us where the week goes. We’ll reply within 1 business day to schedule your call — and within a week of the call you’ll know exactly what your processes are costing you.',
    formMessageLabel: 'What’s the most time-consuming process in your business right now? (optional)',
    formMessagePlaceholder: 'e.g. invoicing, order entry, client follow-ups…',
    formMicrocopy: 'Free, no obligation, no sales pitch. We reply within 1 business day.',
    formCalendlyLead: 'Prefer to skip the form? Book your audit call directly:',
    formCalendlyLink: 'Pick a time on Calendly',
    formSuccess: 'Thank you! We’ll reply within 1 business day to schedule your audit call.'
  },
  el: {
    heroEyebrow: 'Fiji Solutions · Θεσσαλονίκη · Snowflake AI Data Cloud Select Partner',
    heroTitle: 'Πάρε πίσω τις ώρες της ομάδας σου — κάθε εβδομάδα, χωρίς νέες προσλήψεις.',
    heroSubhead: 'Βρίσκουμε τις χειροκίνητες διαδικασίες που αθόρυβα στραγγίζουν την επιχείρησή σου και χτίζουμε το custom λογισμικό και τους αυτοματισμούς που τις εξαφανίζουν. Ξεκινά με ένα δωρεάν Process Audit που σου δείχνει ακριβώς πού διαρρέουν τα χρήματα — και κλείνει με γραπτή εγγύηση.',
    heroBullets: [
      {
        lead: 'Το δωρεάν Process Audit.',
        body: 'Μια κλήση 45–60 λεπτών και μετά ένας γραπτός χάρτης με τις τρεις μεγαλύτερες διαρροές χρήματος στις διαδικασίες σου. Δικός σου ό,τι κι αν αποφασίσεις.'
      },
      {
        lead: 'Η λύση, φτιαγμένη για εσένα.',
        body: 'Custom λογισμικό και αυτοματισμοί — με AI εκεί που πραγματικά βοηθά. Όχι licenses, όχι templates.'
      },
      {
        lead: 'Η Εγγύηση Απόσβεσης.',
        body: 'Αν η λύση που χτίζουμε δεν αποσβέσει το κόστος της μέσα σε 6 μήνες από το go-live, σου επιστρέφουμε την αμοιβή υλοποίησης.'
      }
    ],
    cta: {
      button: 'Κλείσε το δωρεάν Process Audit σου',
      callout: 'Το audit είναι δωρεάν, χωρίς καμία δέσμευση. Κάθε λύση που χτίζουμε καλύπτεται από την Εγγύηση Απόσβεσης — αν δεν αποσβέσει το κόστος της μέσα σε 6 μήνες από το go-live, σου επιστρέφουμε την αμοιβή υλοποίησης.',
      microcopy: 'Απαντάμε εντός 1 εργάσιμης ημέρας.'
    },
    storyTitle: 'Ο πιο ακριβός υπάλληλος στις περισσότερες ελληνικές επιχειρήσεις είναι ένα Excel',
    storyParagraphs: [
      'Είμαι ο Χαράλαμπος Μουταφίδης. Διευθύνω τη Fiji Solutions, μια εταιρεία λογισμικού στη Θεσσαλονίκη.',
      'Όπου κι αν έχτισα λογισμικό, έβλεπα την ίδια εικόνα στις μικρότερες επιχειρήσεις: έξυπνες, ικανές ομάδες να ξοδεύουν ώρες κάθε εβδομάδα ξαναπληκτρολογώντας δεδομένα από σύστημα σε σύστημα, να κυνηγούν εγκρίσεις σε email, να διορθώνουν τα ίδια λάθη και να ζητούν συγγνώμη από πελάτες για follow-ups που ξεχάστηκαν.',
      'Όχι επειδή κάποιος τεμπελιάζει. Επειδή κανείς δεν κάθισε ποτέ να αποτυπώσει τη διαδικασία από την αρχή ως το τέλος και να χτίσει το «βαρετό», αξιόπιστο λογισμικό που εξαφανίζει το πρόβλημα.',
      'Αυτή ακριβώς είναι η δουλειά της Fiji Solutions. Δεν πουλάμε licenses. Δεν μεταπωλούμε την πλατφόρμα κανενός. Αποτυπώνουμε πώς πραγματικά δουλεύει η επιχείρησή σου, βρίσκουμε πού χάνει χρόνο και χρήμα, και χτίζουμε τη λύση που ταιριάζει ακριβώς — και μετά τη συντηρούμε ώστε να συνεχίσει να δουλεύει.',
      'Ολόκληρη τη συνεργασία τη λέμε Internal Operations Fix. Ξεκινά με ένα δωρεάν Process Audit, και ό,τι χτίζουμε καλύπτεται από εγγύηση επιστροφής χρημάτων. Δες πώς λειτουργεί.'
    ],
    painTitle: 'Σου θυμίζει κάτι αυτή η εβδομάδα;',
    painParagraphs: [
      'Είναι 9 το βράδυ Τρίτης και είσαι ακόμα στο γραφείο, αντιγράφοντας νούμερα από το ένα σύστημα στο άλλο — γιατί αν δεν το κάνεις εσύ, δεν θα το κάνει κανείς, κι αν γίνει λάθος, θα το βρει πρώτος ένας πελάτης.',
      'Αύριο σε περιμένει η παραγγελία που καταχωρήθηκε δύο φορές. Η προσφορά που έφυγε με τέσσερις μέρες καθυστέρηση. Το Excel με τις τρεις εκδόσεις όπου κανείς δεν ξέρει ποια είναι η σωστή. Ο νέος συνεργάτης που δεν μπορείς να εκπαιδεύσεις σωστά, γιατί η διαδικασία υπάρχει μόνο στο μυαλό κάποιου.',
      'Δεν άνοιξες επιχείρηση για να είσαι ο πιο υπερειδικευμένος υπάλληλος καταχώρησης δεδομένων της. Όμως κάθε χρόνο η γραφειοκρατία μεγαλώνει πιο γρήγορα από τον τζίρο — και η εβδομάδα που θα αφιέρωνες για να το φτιάξεις δεν έρχεται ποτέ, γιατί είσαι πολύ απασχολημένος να τα βγάλεις πέρα μαζί της.'
    ],
    leaksTitle: 'Οι πέντε διαρροές που βλέπουμε σχεδόν σε κάθε μικρή επιχείρηση',
    leaks: [
      {
        lead: 'Διπλή καταχώρηση.',
        body: 'Τα ίδια δεδομένα πληκτρολογούνται σε δύο, τρία, καμιά φορά τέσσερα συστήματα — και κάθε επανάληψη είναι μια ευκαιρία για το λάθος που θα βρει πρώτος ένας πελάτης.'
      },
      {
        lead: 'Καθυστερημένα follow-ups.',
        body: 'Προσφορές, τιμολόγια και υπενθυμίσεις φεύγουν με μέρες καθυστέρηση. Χρήματα που έχεις ήδη κερδίσει φτάνουν πιο αργά απ’ όσο θα έπρεπε.'
      },
      {
        lead: 'Συνεχές σβήσιμο φωτιών.',
        body: 'Προβλήματα που εμφανίζονται μόνο αφού σου έχουν ήδη κοστίσει — κι έτσι οι καλύτεροί σου άνθρωποι περνούν την εβδομάδα αντιδρώντας αντί να βελτιώνουν οτιδήποτε.'
      },
      {
        lead: 'Το εργαλείο του 60%.',
        body: 'Έτοιμο λογισμικό που πληρώνεις κάθε μήνα και ταιριάζει στην επιχείρησή σου κατά 60%. Το υπόλοιπο 40% γίνεται στο χέρι, για πάντα.'
      },
      {
        lead: 'Η παγίδα του ενός ανθρώπου.',
        body: 'Διαδικασίες που ζουν στο μυαλό ενός ατόμου, οπότε μια άδεια ασθενείας ή μια παραίτηση γίνεται λειτουργική κρίση.'
      }
    ],
    leaksClosing: 'Τίποτα από αυτά δεν είναι ελάττωμα χαρακτήρα. Όλα είναι προβλήματα λογισμικού — και τα προβλήματα λογισμικού διορθώνονται οριστικά, και μένουν διορθωμένα.',
    mathBox: 'Κάνε τον λογαριασμό για τη δική σου ομάδα: 3 άτομα που ξοδεύουν 5 ώρες την εβδομάδα σε χειροκίνητη δουλειά, με 25€/ώρα, είναι πάνω από 19.000€ τον χρόνο — πριν μετρήσεις τα λάθη, τα καθυστερημένα τιμολόγια και τους πελάτες που έφυγαν αθόρυβα.',
    cta2Lead: 'Μάθε τι πραγματικά σου κοστίζουν οι διαδικασίες σου — δωρεάν, και γραπτά μέσα σε μία εβδομάδα από την κλήση του audit.',
    trustTitle: 'Όχι τοίχος από testimonials. Να τι μπορείς να ελέγξεις μόνος σου.',
    trustIntro: 'Είμαστε μικρή εταιρεία και δεν θα προσποιηθούμε το αντίθετο — εδώ δεν θα βρεις σελίδες με ανώνυμες πεντάστερες κριτικές. Θα βρεις πράγματα που επαληθεύονται:',
    trustCards: [
      {
        title: 'Snowflake AI Data Cloud Select Partner',
        body: 'Πιστοποιημένη συνεργασία με μία από τις κορυφαίες πλατφόρμες δεδομένων παγκοσμίως.',
        badge: true
      },
      {
        title: 'Λογισμικό που μπορείς να δοκιμάσεις',
        body: 'Προϊόντα που σχεδιάσαμε, χτίσαμε και λειτουργούμε οι ίδιοι. Δοκίμασέ τα.',
        links: [
          {label: 'Fiji Analytics Dashboard', href: 'https://finance.fijisolutions.net'},
          {label: 'Catalytics Pro', href: 'https://catalytics.pro'}
        ]
      },
      {
        title: 'Πραγματική εταιρεία, πραγματικό γραφείο',
        body: 'Fiji Solutions ΙΚΕ, καταχωρημένη στην Ελλάδα (ΓΕΜΗ 185101306000), Porto Center, Θεσσαλονίκη. Όχι μια ταχυδρομική θυρίδα.'
      },
      {
        title: 'Εγγύηση που στηρίζουμε με δικά μας χρήματα',
        body: 'Συμφωνείται γραπτά, ανά πελάτη, πριν χτίσουμε οτιδήποτε. Λεπτομέρειες παρακάτω.'
      }
    ],
    trustClosing: 'Όταν δημοσιεύσουμε αποτελέσματα πελατών, θα είναι αληθινά, μετρημένα και επώνυμα. Μέχρι τότε, προτιμάμε να δείχνουμε λιγότερα — και όλα να είναι αλήθεια.',
    offerTitle: 'Το Internal Operations Fix — πώς λειτουργεί',
    offerIntro: 'Όχι license. Όχι σεμινάριο. Μια done-for-you συνεργασία σε τρία βήματα — με τον στόχο συμφωνημένο γραπτά πριν χτιστεί οτιδήποτε.',
    offerSteps: [
      {
        step: 'Βήμα 1',
        title: 'Το δωρεάν Process Audit',
        body: 'Μια κλήση 45–60 λεπτών όπου βλέπουμε πώς πραγματικά ρέει η δουλειά μέσα στην επιχείρησή σου: ποιος καταχωρεί τι, πού, πόσο συχνά και τι χαλάει. Στη συνέχεια λαμβάνεις τον Χάρτη Διαρροών σου (Process Money-Leak Map) — μια γραπτή, μονοσέλιδη σύνοψη των τριών πιο ακριβών bottlenecks σου, με εκτίμηση για τις ώρες και τα ευρώ που σου κοστίζει το καθένα τον μήνα. Είναι δικός σου είτε ξαναμιλήσουμε είτε όχι. Είναι επίσης η βάση πάνω στην οποία μετριέται η εγγύησή μας.'
      },
      {
        step: 'Βήμα 2',
        title: 'Το Discovery Sprint',
        body: 'Αν ο χάρτης δείξει μια λύση που αξίζει να χτιστεί, τρέχουμε ένα εστιασμένο sprint με την ομάδα σου: αποτυπώνουμε τα workflows βήμα βήμα, κατατάσσουμε κάθε πιθανή λύση με βάση την απόδοση της επένδυσης και συμφωνούμε τον στόχο απόσβεσης — γραπτά. Εγκρίνεις το πλάνο, την τιμή και τον στόχο πριν γραφτεί έστω μία γραμμή κώδικα.'
      },
      {
        step: 'Βήμα 3',
        title: 'Υλοποίηση & Λειτουργία',
        body: 'Χτίζουμε πρώτα τη λύση με το μεγαλύτερο ROI, ώστε να δεις αποτελέσματα πριν αγγίξουμε οτιδήποτε άλλο. Μετά αναλαμβάνει το μηνιαίο πλάνο φροντίδας: συντηρούμε, παρακολουθούμε και συνεχίζουμε να βελτιστοποιούμε, ώστε τίποτα να μην ξαναπέσει στις πλάτες της ομάδας σου.'
      }
    ],
    offerPricing: 'Η συνεργασία έχει μια εφάπαξ αμοιβή υλοποίησης και ένα μικρό μηνιαίο πλάνο φροντίδας. Τα ακριβή νούμερα εξαρτώνται από το τι θα βρει το audit — γι’ αυτό ακριβώς το audit γίνεται πρώτο, και γι’ αυτό είναι δωρεάν.',
    offerEffort: 'Τι χρειαζόμαστε από εσένα: περίπου μία ώρα για το audit και λίγες σύντομες συναντήσεις στο sprint. Όλα τα υπόλοιπα τα κάνουμε εμείς.',
    dreamTitle: 'Πώς μοιάζει το πρωινό της Δευτέρας μετά τη λύση',
    dreamBullets: [
      {
        before: 'Διπλή καταχώρηση',
        after: 'καταχώρηση μία φορά, σωστή παντού.',
        body: 'Τα δεδομένα ρέουν αυτόματα ανάμεσα στα συστήματά σου.'
      },
      {
        before: 'Καθυστερημένα follow-ups',
        after: 'στέλνονται μόνα τους.',
        body: 'Προσφορές, τιμολόγια και υπενθυμίσεις φεύγουν στην ώρα τους, κάθε φορά — χωρίς να χρειάζεται να το θυμάται κανείς.'
      },
      {
        before: 'Σβήσιμο φωτιών',
        after: 'βλέπεις τα προβλήματα πριν σου κοστίσουν.',
        body: 'Dashboards και ειδοποιήσεις αναδεικνύουν ό,τι πάει στραβά όσο ακόμα διορθώνεται φθηνά. Δευτέρες χωρίς εκπλήξεις.'
      },
      {
        before: 'Το εργαλείο του 60%',
        after: 'λογισμικό φτιαγμένο 100% στα μέτρα σου.',
        body: 'Χτισμένο γύρω από τη δική σου διαδικασία, όχι το αντίστροφο.'
      },
      {
        before: 'Η παγίδα του ενός ανθρώπου',
        after: 'η διαδικασία ζει μέσα στο λογισμικό.',
        body: 'Τεκμηριωμένη, ορατή — και μπορεί να τη δουλέψει οποιοσδήποτε, από την πρώτη μέρα.'
      }
    ],
    dreamGoal: 'Στόχος μας σε κάθε συνεργασία είναι να δώσουμε πίσω στην ομάδα σου 5–10 ώρες την εβδομάδα. Στο δωρεάν audit υπολογίζουμε ακριβώς πόσες ώρες σου κοστίζουν οι διαδικασίες σου — και αυτό το νούμερο γίνεται ο γραπτός στόχος για τον οποίο λογοδοτούμε.',
    timelineTitle: 'Οι πρώτες 30 ημέρες — και τι έρχεται αμέσως μετά',
    timeline: [
      {
        when: 'Ημέρα 1',
        body: 'Στέλνεις τη φόρμα. Απαντάμε εντός 1 εργάσιμης ημέρας για να κανονίσουμε την κλήση του audit.'
      },
      {
        when: 'Εβδομάδα 1',
        body: 'Η κλήση του audit. 45–60 λεπτά. Εσύ μιλάς, εμείς ρωτάμε και κρατάμε σημειώσεις. Αυτή είναι όλη σου η επένδυση χρόνου.'
      },
      {
        when: 'Εβδομάδα 2',
        body: 'Φτάνει ο Χάρτης Διαρροών σου. Τρία bottlenecks, το μηνιαίο κόστος τους και μια εκτίμηση ROI για το καθένα. Κράτησέ τον, αξιοποίησέ τον με όποιον θες.'
      },
      {
        when: 'Εβδομάδες 2–3',
        body: 'Αν θέλεις τη λύση: το Discovery Sprint. Workflows αποτυπωμένα, λύσεις καταταγμένες, στόχος συμφωνημένος γραπτά.'
      },
      {
        when: 'Γύρω στην ημέρα 30',
        body: 'Ξεκινά η υλοποίηση της λύσης με το μεγαλύτερο ROI. Στόχος μας: ο πρώτος αυτοματισμός ζωντανός μέσα σε 30 ημέρες από την έναρξη.'
      }
    ],
    sampleMapLabel: 'Παράδειγμα',
    sampleMapTitle: 'Χάρτης Διαρροών — πώς θα μοιάζει ο δικός σου',
    sampleMapHeaders: {process: 'Bottleneck', hours: 'Χαμένος χρόνος', cost: 'Εκτιμώμενο κόστος'},
    sampleMapRows: [
      {process: 'Χειροκίνητη καταχώρηση και συμφωνία τιμολογίων', hours: '≈ 18 ώρες / μήνα', cost: '≈ 450€ / μήνα'},
      {process: 'Δεδομένα παραγγελιών ξαναπληκτρολογούνται από e-shop σε ERP', hours: '≈ 12 ώρες / μήνα', cost: '≈ 300€ / μήνα'},
      {process: 'Follow-ups προσφορών που γίνονται από μνήμης', hours: '≈ 9 ώρες / μήνα', cost: '≈ 225€ / μήνα'}
    ],
    sampleMapFootnote: 'Ενδεικτικό παράδειγμα — ο δικός σου χάρτης φτιάχνεται με τα δικά σου νούμερα κατά το audit.',
    timelineClosing: 'Τίποτα σε αυτό το χρονοδιάγραμμα δεν σε δεσμεύει για το επόμενο βήμα — κάθε βήμα τελειώνει με μια απόφαση που είναι δική σου.',
    stackTitle: 'Τι κερδίζεις — ακόμη κι αν δεν συνεργαστούμε ποτέ',
    stackItems: [
      {
        lead: 'Την κλήση του audit.',
        body: '45–60 λεπτά με τον άνθρωπο που θα έχτιζε πραγματικά τη λύση σου — όχι με έναν πωλητή που διαβάζει σενάριο.'
      },
      {
        lead: 'Τον Χάρτη Διαρροών σου.',
        body: 'Μια γραπτή, ιεραρχημένη λίστα με τα τρία πιο ακριβά bottlenecks σου — το είδος του εγγράφου για το οποίο οι σύμβουλοι χρεώνουν κανονικά χρήματα. Δικός σου.'
      },
      {
        lead: 'Μια εκτίμηση ROI για κάθε λύση.',
        body: 'Για να την αξιοποιήσεις — με εμάς, με κάποιον άλλο ή εσωτερικά. Χωρίς δεσμεύσεις πάνω στα νούμερα.'
      }
    ],
    bonusTitle: 'Κι αν τελικά συνεργαστούμε',
    bonusItems: [
      {
        lead: 'Ό,τι χτίζουμε σού ανήκει.',
        body: 'Ο πηγαίος κώδικας και η τεκμηρίωση είναι δικά σου — αν ποτέ χωρίσουν οι δρόμοι μας, όλα συνεχίζουν να δουλεύουν και οποιοσδήποτε developer μπορεί να τα αναλάβει.'
      },
      {
        lead: 'Περίοδος βελτιστοποίησης 30 ημερών μετά το go-live.',
        body: 'Μετά το go-live παρακολουθούμε τα νούμερα και ρυθμίζουμε ό,τι αναδείξει η πραγματική χρήση — χωρίς επιπλέον κόστος.'
      },
      {
        lead: 'Προτεραιότητα στην υποστήριξη.',
        body: 'Οι πελάτες του πλάνου φροντίδας περνούν μπροστά στη σειρά — όταν κάτι χρειάζεται προσοχή, είσαι πρώτος.'
      }
    ],
    stackClosing: 'Το χειρότερο ρεαλιστικό σενάριο του audit: ξοδεύεις μία ώρα και μαθαίνεις με ακρίβεια τι σου κοστίζουν οι διαδικασίες σου — δωρεάν.',
    faqTitle: 'Εύλογες ερωτήσεις, ευθείες απαντήσεις',
    faqs: [
      {
        q: 'Τι κοστίζει πραγματικά το audit;',
        a: 'Τίποτα. Χωρίς κόστος, χωρίς δεσμεύσεις, χωρίς sales pitch. Αν δεν βρούμε τίποτα που να αξίζει να φτιαχτεί, θα σου το πούμε κι αυτό — και ο χάρτης μένει δικός σου.'
      },
      {
        q: 'Και η λύση — τι κοστίζει;',
        a: 'Μια εφάπαξ αμοιβή υλοποίησης και ένα μικρό μηνιαίο πλάνο φροντίδας. Τα ακριβή νούμερα έρχονται μετά το audit, γιατί εξαρτώνται αποκλειστικά από το τι θα βρούμε. Αυτό που είναι δεσμευτικό από πριν είναι η εγγύηση: αν η λύση δεν αποσβέσει το κόστος της μέσα σε 6 μήνες από το go-live, σου επιστρέφουμε την αμοιβή υλοποίησης.'
      },
      {
        q: 'Πώς μετριέται στην πράξη η «απόσβεση»;',
        a: 'Κατά το audit καταγράφουμε τη βάση αναφοράς σου — ώρες που ξοδεύονται, ποσοστά λαθών, καθυστερήσεις. Πριν χτίσουμε, συμφωνούμε γραπτά τι πρέπει να εξοικονομεί η λύση. Μετά συγκρίνουμε με αυτή τη βάση σε συμφωνημένα check-ins. Χωρίς αόριστες υποσχέσεις, χωρίς στόχους που μετακινούνται στην πορεία.'
      },
      {
        q: 'Χρησιμοποιούμε ήδη λογιστικό / ERP / e-shop λογισμικό. Θα μας βάλετε να το αντικαταστήσουμε;',
        a: 'Σχεδόν ποτέ. Οι περισσότερες λύσεις συνδέουν τα εργαλεία που ήδη έχεις, ώστε τα δεδομένα να σταματήσουν να ξαναπληκτρολογούνται μεταξύ τους. Αντικαθιστούμε κάτι μόνο όταν αυτό είναι πραγματικά το πρόβλημα.'
      },
      {
        q: 'Δεν έχω χρόνο για ένα IT project.',
        a: 'Αυτό ακριβώς είναι το νόημα. Το audit θέλει περίπου μία ώρα από τον χρόνο σου· κατά την υλοποίηση, τη δουλειά την κάνουμε εμείς και η ομάδα σου συνεχίζει κανονικά. Αυτό είναι done-for-you, όχι άλλο ένα project στο γραφείο σου.'
      },
      {
        q: 'Ποιος το συντηρεί μετά το launch;',
        a: 'Εμείς — αυτό είναι το πλάνο φροντίδας. Παρακολούθηση, διορθώσεις, ενημερώσεις και μηνιαία βελτιστοποίηση.'
      },
      {
        q: 'Σε ποιον ανήκει το λογισμικό;',
        a: 'Σε εσένα. Ο πηγαίος κώδικας και η τεκμηρίωση είναι δικά σου, όλα είναι τεκμηριωμένα και οποιοσδήποτε developer θα μπορούσε να τα αναλάβει — δεν εξαρτάσαι ποτέ από εμάς παρά τη θέλησή σου.'
      },
      {
        q: 'Είναι κι αυτό «κάτι με AI»;',
        a: 'Μόνο εκεί που το AI βοηθά πραγματικά. Πολλές από τις λύσεις με το μεγαλύτερο ROI είναι απλές διασυνδέσεις και αυτοματισμοί. Δεν προσθέτουμε AI για το buzzword — προσθέτουμε ό,τι εξαφανίζει το πρόβλημα.'
      },
      {
        q: 'Μήπως είμαστε πολύ μικροί για κάτι τέτοιο;',
        a: 'Αν δύο ή περισσότεροι άνθρωποι ξοδεύουν ώρες κάθε εβδομάδα σε επαναλαμβανόμενη χειροκίνητη δουλειά, είστε αρκετά μεγάλοι για να βγαίνουν τα νούμερα. Το audit θα σου το δείξει έτσι κι αλλιώς — δωρεάν.'
      }
    ],
    bioTitle: 'Με ποιον θα μιλήσεις',
    bioIntro: 'Είμαι ο Χαράλαμπος (Χάρης) Μουταφίδης, ιδρυτής της Fiji Solutions.',
    bioBullets: [
      'Μηχανικός λογισμικού· ιδρυτής και διαχειριστής της Fiji Solutions ΙΚΕ, Θεσσαλονίκη.',
      'Snowflake AI Data Cloud Select Partner — από τους πιστοποιημένους συνεργάτες της πλατφόρμας δεδομένων Snowflake.',
      'Δημιουργός του Fiji Analytics Dashboard και του Catalytics Pro — ζωντανά προϊόντα που μπορείς να ανοίξεις τώρα, όχι slides.'
    ],
    bioClosing: [
      'Όταν κλείνεις ένα audit, μιλάς με εμένα — τον ίδιο άνθρωπο που σχεδιάζει τη δουλειά, χτίζει το λογισμικό και στέκεται πίσω από την εγγύηση. Χωρίς account managers, χωρίς ενδιάμεσους, χωρίς «χαλασμένο τηλέφωνο» ανάμεσα σε πωλήσεις και υλοποίηση.',
      'Αυτό είναι το πλεονέκτημα μιας μικρής εταιρείας: αυτός που υποσχέθηκε είναι αυτός που χτίζει.'
    ],
    guaranteeTitle: 'Η Εγγύηση Απόσβεσης, σε απλά ελληνικά',
    guaranteeIntro: 'Τα περισσότερα agencies πληρώνονται είτε δουλέψει το λογισμικό τους είτε όχι. Εμείς αποφασίσαμε να μην αφήσουμε αυτό το περιθώριο στον εαυτό μας.',
    guaranteePromise: 'Αν η λύση που χτίζουμε δεν αποσβέσει το κόστος της μέσα σε 6 μήνες από το go-live, σου επιστρέφουμε την αμοιβή υλοποίησης.',
    guaranteePointsTitle: 'Τι την κάνει αληθινή',
    guaranteePoints: [
      {
        lead: 'Ο στόχος συμφωνείται πριν χτίσουμε.',
        body: 'Κατά το δωρεάν audit μετράμε τη βάση αναφοράς σου — ώρες που ξοδεύονται, λάθη, καθυστερήσεις. Ο στόχος απόσβεσης βγαίνει από αυτά τα νούμερα και μπαίνει στο συμβόλαιο, γραπτά.'
      },
      {
        lead: 'Τα μαθηματικά είναι τίμια.',
        body: '«Απόσβεση» σημαίνει μετρημένη εξοικονόμηση χρόνου και κόστους που αξίζει περισσότερο από το σύνολο των αμοιβών που μας έχεις πληρώσει — αμοιβή υλοποίησης και μήνες πλάνου φροντίδας μαζί.'
      },
      {
        lead: 'Το ρολόι ξεκινά στο go-live.',
        body: 'Όχι στην υπογραφή του συμβολαίου, όχι στην πρώτη συνάντηση.'
      },
      {
        lead: 'Τι ζητάμε από εσένα.',
        body: 'Να χρησιμοποιείς το λογισμικό, να αφήσεις την ομάδα σου να εκπαιδευτεί, να μας δώσεις την πρόσβαση που χρειαζόμαστε για να μετράμε, και να κρατήσεις το πλάνο φροντίδας ενεργό στη διάρκεια της εγγύησης — έτσι μετριέται η εξοικονόμηση. Κι αν κάτι είναι εκτός στόχου, έχουμε 30 ημέρες να το διορθώσουμε πριν από οποιαδήποτε επιστροφή — γιατί η διόρθωση είναι καλύτερη από την επιστροφή, και για τους δυο μας.'
      }
    ],
    guaranteeClosing: 'Οι πλήρεις όροι — μαζί με το πώς ακριβώς μετράμε — μπαίνουν στο συμβόλαιο πριν χτίσουμε, ώστε να μπορείς να μας ζητήσεις τον λόγο για κάθε λέξη.',
    scarcityTitle: 'Γιατί τρέχουμε μόνο δύο υλοποιήσεις κάθε φορά',
    scarcityBody: 'Ό,τι παραδίδουμε σχεδιάζεται και χτίζεται από εμάς — δεν ανατίθεται σε υπεργολάβους. Αυτό έχει μία τίμια συνέπεια: τρέχουμε το πολύ δύο υλοποιήσεις ταυτόχρονα. Όταν και οι δύο θέσεις είναι πιασμένες, το επόμενο audit μπαίνει σε λίστα αναμονής με ημερομηνία και σου το λέμε — προτιμάμε να περιμένεις δύο εβδομάδες παρά να πάρεις μια βιαστική υλοποίηση.',
    psParagraphs: [
      'Υ.Γ. — Αν έφτασες ως εδώ, κράτα ένα νούμερο: το audit θέλει περίπου μία ώρα από τον χρόνο σου και δεν κοστίζει τίποτα. Αν δεν βρούμε τίποτα που να αξίζει να φτιαχτεί, θα το πούμε — αυτή θα είναι μια σύντομη, φιλική κλήση. Αν όμως η επιχείρησή σου λειτουργεί με ξαναπληκτρολογημένα δεδομένα, καθυστερημένα follow-ups και έναν άνθρωπο που ξέρει πώς δουλεύουν όλα, αυτή η ώρα είναι μάλλον η συνάντηση με τη μεγαλύτερη απόδοση που θα κλείσεις φέτος.',
      'Κάθε μήνας που περιμένεις έχει ένα κόστος. Το audit θα σου πει ακριβώς ποιο είναι — δωρεάν.'
    ],
    signatureName: '— Χαράλαμπος Μουταφίδης',
    signatureRole: 'Ιδρυτής, Fiji Solutions · Θεσσαλονίκη',
    formTitle: 'Κλείσε το δωρεάν Process Audit σου',
    formSubhead: 'Πες μας πού πάει η εβδομάδα. Θα απαντήσουμε εντός 1 εργάσιμης ημέρας για να κανονίσουμε την κλήση σου — και μέσα σε μία εβδομάδα από την κλήση θα ξέρεις ακριβώς τι σου κοστίζουν οι διαδικασίες σου.',
    formMessageLabel: 'Ποια είναι η πιο χρονοβόρα διαδικασία στην επιχείρησή σου αυτή τη στιγμή; (προαιρετικό)',
    formMessagePlaceholder: 'π.χ. τιμολόγηση, καταχώρηση παραγγελιών, follow-ups πελατών…',
    formMicrocopy: 'Δωρεάν, χωρίς δεσμεύσεις, χωρίς sales pitch. Απαντάμε εντός 1 εργάσιμης ημέρας.',
    formCalendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση του audit απευθείας:',
    formCalendlyLink: 'Διάλεξε ώρα στο Calendly',
    formSuccess: 'Ευχαριστούμε! Θα απαντήσουμε εντός 1 εργάσιμης ημέρας για να κανονίσουμε την κλήση του audit σου.'
  }
};

function CtaBlock({cta, showMicrocopy = false}: {cta: CtaCopy; showMicrocopy?: boolean}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <a
        href="#consultation-form"
        className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-primary-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        {cta.button}
      </a>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400">
        {cta.callout}
      </p>
      {showMicrocopy && (
        <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {cta.microcopy}
        </p>
      )}
    </div>
  );
}

function SectionTitle({children}: {children: React.ReactNode}) {
  return (
    <h2 className="mb-8 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">
      {children}
    </h2>
  );
}

interface BusinessProcessAuditLandingProps {
  language: Language;
}

export default function BusinessProcessAuditLanding({language}: BusinessProcessAuditLandingProps) {
  const pageCopy = copy[language];

  return (
    <>
      {/* 1. Hero — dream outcome + two-layer offer + CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-200/60 blur-3xl dark:bg-primary-900/30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-200/60 blur-3xl dark:bg-secondary-900/30" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
              {pageCopy.heroEyebrow}
            </p>
            <h1 className="mb-8 text-4xl font-bold leading-tight text-gray-950 dark:text-white md:text-5xl lg:text-6xl">
              {pageCopy.heroTitle}
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300 md:text-xl">
              {pageCopy.heroSubhead}
            </p>
            <ul className="mx-auto mb-10 max-w-2xl space-y-4 text-left">
              {pageCopy.heroBullets.map((bullet) => (
                <li key={bullet.lead} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg">
                    <strong className="font-semibold text-gray-950 dark:text-white">{bullet.lead}</strong>{' '}
                    {bullet.body}
                  </p>
                </li>
              ))}
            </ul>
            <CtaBlock cta={pageCopy.cta} showMicrocopy />
          </div>
        </div>
      </section>

      {/* 2. Story lead — founder narrative */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.storyTitle}</SectionTitle>
          <div className="space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problem agitation — second-person narrative */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.painTitle}</SectionTitle>
          <div className="space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.painParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bullet problem stack + honest math box */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.leaksTitle}</SectionTitle>
          <ul className="space-y-5">
            {pageCopy.leaks.map((leak) => (
              <li key={leak.lead} className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                <strong className="font-semibold text-gray-950 dark:text-white">{leak.lead}</strong>{' '}
                {leak.body}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.leaksClosing}
          </p>
          <p className="mt-8 rounded-2xl border border-primary-200 bg-primary-50 p-6 text-xl font-semibold leading-8 text-gray-950 dark:border-primary-900/60 dark:bg-primary-900/20 dark:text-white">
            {pageCopy.mathBox}
          </p>
        </div>
      </section>

      {/* 5. CTA #2 — after the pain */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-xl font-semibold text-gray-950 dark:text-white">
            {pageCopy.cta2Lead}
          </p>
          <CtaBlock cta={pageCopy.cta} />
        </div>
      </section>

      {/* 6. Verifiable trust strip */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.trustTitle}</SectionTitle>
          <p className="mb-10 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.trustIntro}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {pageCopy.trustCards.map((card) => (
              <div key={card.title} className="rounded-xl bg-gray-50 p-6 shadow-md dark:bg-gray-800">
                {card.badge && (
                  <Image
                    src="/Services_Partner_Badge_Select.svg"
                    alt="Snowflake AI Data Cloud Select Partner badge"
                    width={96}
                    height={96}
                    unoptimized
                    className="mb-4 h-16 w-auto"
                  />
                )}
                <h3 className="mb-2 text-lg font-semibold text-gray-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="leading-7 text-gray-700 dark:text-gray-300">{card.body}</p>
                {card.links && (
                  <p className="mt-3 flex flex-wrap gap-4">
                    {card.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        {link.label}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg font-medium leading-8 text-gray-950 dark:text-white">
            {pageCopy.trustClosing}
          </p>
        </div>
      </section>

      {/* 7. Offer reveal — The Internal Operations Fix */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.offerTitle}</SectionTitle>
          <p className="mb-10 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.offerIntro}
          </p>
          <div className="space-y-6">
            {pageCopy.offerSteps.map((step) => (
              <div key={step.step} className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800 md:p-8">
                <span className="mb-3 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                  {step.step}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-gray-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="leading-8 text-gray-700 dark:text-gray-300">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.offerPricing}
          </p>
          <p className="mt-5 text-lg font-medium leading-8 text-gray-950 dark:text-white">
            {pageCopy.offerEffort}
          </p>
        </div>
      </section>

      {/* 8. Dream outcome + CTA #3 */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.dreamTitle}</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {pageCopy.dreamBullets.map((bullet) => (
              <div key={bullet.before} className="rounded-xl bg-gray-50 p-6 shadow-md dark:bg-gray-800">
                <p className="mb-2 text-lg leading-7">
                  <span className="text-gray-500 line-through dark:text-gray-400">{bullet.before}</span>{' '}
                  <span className="font-semibold text-gray-950 dark:text-white">→ {bullet.after}</span>
                </p>
                <p className="leading-7 text-gray-700 dark:text-gray-300">{bullet.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 rounded-2xl border border-primary-200 bg-primary-50 p-6 text-xl font-semibold leading-8 text-gray-950 dark:border-primary-900/60 dark:bg-primary-900/20 dark:text-white">
            {pageCopy.dreamGoal}
          </p>
          <div className="mt-12">
            <CtaBlock cta={pageCopy.cta} />
          </div>
        </div>
      </section>

      {/* 9. First 30 days + sample map */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.timelineTitle}</SectionTitle>
          <ol className="space-y-6">
            {pageCopy.timeline.map((item) => (
              <li key={item.when} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <span className="inline-flex h-fit w-fit flex-shrink-0 rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 sm:w-36 sm:justify-center">
                  {item.when}
                </span>
                <p className="leading-8 text-gray-700 dark:text-gray-300">{item.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 px-6 py-4 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                {pageCopy.sampleMapTitle}
              </h3>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                {pageCopy.sampleMapLabel}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    <th scope="col" className="px-6 py-3 font-medium">{pageCopy.sampleMapHeaders.process}</th>
                    <th scope="col" className="px-6 py-3 font-medium">{pageCopy.sampleMapHeaders.hours}</th>
                    <th scope="col" className="px-6 py-3 font-medium">{pageCopy.sampleMapHeaders.cost}</th>
                  </tr>
                </thead>
                <tbody>
                  {pageCopy.sampleMapRows.map((row) => (
                    <tr key={row.process} className="border-b border-gray-100 last:border-0 dark:border-gray-700/50">
                      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{row.process}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-gray-700 dark:text-gray-300">{row.hours}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-gray-700 dark:text-gray-300">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-gray-200 px-6 py-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
              {pageCopy.sampleMapFootnote}
            </p>
          </div>

          <p className="mt-10 text-lg font-medium leading-8 text-gray-950 dark:text-white">
            {pageCopy.timelineClosing}
          </p>
        </div>
      </section>

      {/* 10. Value stack + real bonuses */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.stackTitle}</SectionTitle>
          <ul className="space-y-5">
            {pageCopy.stackItems.map((item) => (
              <li key={item.lead} className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                <strong className="font-semibold text-gray-950 dark:text-white">{item.lead}</strong>{' '}
                {item.body}
              </li>
            ))}
          </ul>
          <h3 className="mb-5 mt-10 text-xl font-semibold text-gray-950 dark:text-white">
            {pageCopy.bonusTitle}
          </h3>
          <ul className="space-y-5">
            {pageCopy.bonusItems.map((item) => (
              <li key={item.lead} className="rounded-xl border border-primary-200 bg-primary-50/50 p-5 text-lg leading-8 text-gray-700 dark:border-primary-900/60 dark:bg-primary-900/10 dark:text-gray-300">
                <strong className="font-semibold text-gray-950 dark:text-white">{item.lead}</strong>{' '}
                {item.body}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg font-medium leading-8 text-gray-950 dark:text-white">
            {pageCopy.stackClosing}
          </p>
        </div>
      </section>

      {/* 11. FAQ + CTA #4 */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.faqTitle}</SectionTitle>
          <div className="space-y-4">
            {pageCopy.faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-gray-950 marker:content-none dark:text-white [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg className="h-5 w-5 flex-shrink-0 text-primary-600 transition-transform group-open:rotate-180 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </summary>
                <p className="mt-3 leading-8 text-gray-700 dark:text-gray-300">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12">
            <CtaBlock cta={pageCopy.cta} />
          </div>
        </div>
      </section>

      {/* 12. Authority bio + CTA #5 */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.bioTitle}</SectionTitle>
          <p className="mb-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.bioIntro}
          </p>
          <ul className="space-y-4">
            {pageCopy.bioBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-lg leading-8 text-gray-700 dark:text-gray-300">
                <svg className="mt-1.5 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.bioClosing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12">
            <CtaBlock cta={pageCopy.cta} />
          </div>
        </div>
      </section>

      {/* 13. Guarantee deep-dive */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.guaranteeTitle}</SectionTitle>
          <p className="mb-8 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.guaranteeIntro}
          </p>
          <p className="rounded-2xl border border-primary-200 bg-primary-50 p-6 text-xl font-semibold leading-8 text-gray-950 dark:border-primary-900/60 dark:bg-primary-900/20 dark:text-white">
            {pageCopy.guaranteePromise}
          </p>
          <h3 className="mb-5 mt-10 text-xl font-semibold text-gray-950 dark:text-white">
            {pageCopy.guaranteePointsTitle}
          </h3>
          <ul className="space-y-5">
            {pageCopy.guaranteePoints.map((point) => (
              <li key={point.lead} className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                <strong className="font-semibold text-gray-950 dark:text-white">{point.lead}</strong>{' '}
                {point.body}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg font-medium leading-8 text-gray-950 dark:text-white">
            {pageCopy.guaranteeClosing}
          </p>
        </div>
      </section>

      {/* 14. Scarcity + PS-style close */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{pageCopy.scarcityTitle}</SectionTitle>
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.scarcityBody}
          </p>
          <div className="mt-10 space-y-5 border-l-4 border-primary-200 pl-6 text-lg italic leading-8 text-gray-700 dark:border-primary-900/60 dark:text-gray-300">
            {pageCopy.psParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 text-lg font-semibold text-gray-950 dark:text-white">
            {pageCopy.signatureName}
          </p>
          <p className="text-gray-600 dark:text-gray-400">{pageCopy.signatureRole}</p>
        </div>
      </section>

      {/* 15. Final CTA + form */}
      <section id="consultation-form" className="scroll-mt-24 bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">
              {pageCopy.formTitle}
            </h2>
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
              {pageCopy.formSubhead}
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <ContactForm
              languageOverride={language}
              hideTitle
              presetQuestion="business-process-audit"
              messageOptional
              messageLabelOverride={pageCopy.formMessageLabel}
              messagePlaceholderOverride={pageCopy.formMessagePlaceholder}
              submitLabelOverride={pageCopy.cta.button}
              successMessageOverride={pageCopy.formSuccess}
            />
            <p className="mt-6 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
              {pageCopy.formMicrocopy}
            </p>
            <p className="mt-2 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
              {pageCopy.formCalendlyLead}{' '}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {pageCopy.formCalendlyLink}
              </a>
            </p>
            <p className="mt-6 text-center text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
              {pageCopy.cta.callout}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
