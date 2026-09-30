import {Language} from '@/types/language';
import {REPLY_SLA} from '@/lib/offer';

// Copy rules for this file, set 2026-08-15 after the site audit:
//
//  1. Say what the reader gets, not what we are. The six-service grid, the 32-technology stack and
//     the six-industry list were deleted, not rewritten — a service list is the thing to remove.
//  2. No quality adjectives. "expert", "exceptional", "εξειδικευμένη", "reliable" as a selling
//     point are all gone. Quality is a must-have, not a differentiator; replace it with a
//     countable fact or delete the sentence.
//  3. No claim we cannot show the arithmetic for. There is no published percentage anywhere,
//     because there is no measurement behind one yet.
//  4. Greek is written in Greek. No "reporting", "bottlenecks", "integrations", "dashboards",
//     "spreadsheets", "workflow" left inside Greek sentences.
//  5. Greek address form is informal singular (εσύ), everywhere, including metadata.
//  6. One name per thing. The audit is "process audit" / «έλεγχος διαδικασιών» in every locale,
//     every button, every page title. It had five different Greek names.
//  7. Every commercial number comes from `@/lib/offer` — the durations, the SLA and the
//     guarantee window. None of them is typed into a string here. There is no price constant,
//     because no price is published in either locale. Do not add one.
//     2026-09-30 (G20, offer-os gtm/sheet-to-app-rollout/PLAN.md D5, D68): one dated exception.
//     The homepage `hero.*`, `challenges.*` and `solutions.*` strings are the sheet-to-app hook
//     and are copied word for word from offer-os `offers/fiji-solutions--sheet-to-app/
//     03-copy-homepage.md`. Their numbers (7 days, 30 minutes, 48 hours, 3 to 5 lines, 5 screens,
//     2 roles, 30 days) and the five dollar figures in `solutions.cta.description` are typed
//     there, as the landing page's data file types them, so no price constant enters
//     `@/lib/offer`. To change one, change it in 03-copy-homepage.md first. Every other string in
//     this file keeps this rule.

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.audit': 'Process audit',
    'nav.portfolio': 'Services',
    'nav.snowflake': 'Snowflake',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.legal': 'Legal',
    'nav.privacy': 'Privacy',

    // Hero Section
    // 2026-09-30 (G20, D5, D66): the homepage is the hook for the 7-Day Sheet-to-App Prototype.
    // The H1 opens on the prototype, anchors the 7 days to the audit call and states the one
    // guarantee, "Pay only if you like it". The earlier H1 lock is struck in CLAUDE.md with this
    // date. `hero.description1` names the mechanism, once on the page, and holds its one "free".
    'hero.title': 'Prototype 7 days after the audit call. Pay only if you like it.',
    'hero.cta': 'Book my 30-minute call',
    'hero.talk': "Let's talk now",
    'hero.description1': 'The Column-First Build starts from the column headers of the spreadsheet your team runs on. Book a free 30-minute audit call and send us those headers. On the call we talk through what you need. We write down together what the prototype must do, and we agree what the finished app must do.',
    'hero.description2': 'On day 7 you click through the prototype yourself: a screen for each role, with sample rows made from your column headers. If you like it, you pay for it, and if not, you pay nothing and we stop there. If you go on, the finished app follows about three weeks later, and at delivery you pay for it if you like it.',

    // Challenges. 2026-09-30 (G20): the three card titles are the buyer's own lines, so they keep
    // their quotation marks. Key names are leftovers from the audit homepage and stay for parity.
    'challenges.title': 'What you hear every week',
    'challenges.subtitle': 'And the line you say yourself: "I can\'t see where everything stands without asking around."',
    'challenges.old_tech.title': '"Where\'s that order at?"',
    'challenges.old_tech.description': 'Everyone edits the same spreadsheet, and people chase each other about where an order or a job stands. The foremen call the office to ask where they go tomorrow.',
    'challenges.slow.title': '"We type the same thing in twice."',
    'challenges.slow.description': 'What goes into the spreadsheet gets typed again somewhere else: into accounting, into an email. Each retype is one more chance for a mistake. A change order gets approved on site and never makes it into the log.',
    'challenges.money.title': '"Who changed this?"',
    'challenges.money.description': 'Everyone can open and edit the whole spreadsheet: "Everyone sees everything." Someone sorts one column and breaks the spreadsheet for everyone, and someone else has to find out who changed it.',

    // Solutions. 2026-09-30 (G20, D5, D68): steps 2 to 4 of the sheet-to-app offer, then the box
    // that is the homepage's one priced slot (the dated exception to CLAUDE.md rule 7). Solutions.tsx
    // splits `solutions.cta.description` on each blank line into its own paragraph.
    'solutions.title': 'From the audit call to day 7',
    'solutions.subtitle': 'Every screen is built around the columns your team already uses.',
    'solutions.experts.title': 'The audit call',
    'solutions.experts.description': 'In 30 minutes we see how your spreadsheet runs today and talk through what you need from it. Together we write 3 to 5 lines on what the prototype must do: each is a screen, a role and an action, up to 5 screens and 2 roles. We also agree what the finished app must do. The 7 days start once that list is agreed and your column headers have arrived.',
    'solutions.industry.title': 'Days 1 to 6: progress links',
    'solutions.industry.description': 'We build each role\'s screen from your column headers. A private progress link comes within 48 hours of the audit call, and one more with every change. You watch the prototype take shape and comment when it suits you.',
    'solutions.payment.title': 'Day 7: Pay only if you like it',
    'solutions.payment.description': 'In a 30-minute walkthrough you click through the prototype yourself and say whether you like it. A no needs no reason and costs nothing: we stop there, and we delete your data on request. If you like it, we invoice the prototype. If you go on, the finished app follows about three weeks later, built as we agreed on the audit call, for one flat price. At delivery you decide the same way: if you like it, we invoice the rest of its price; if you do not, you pay nothing more, and the code stays with us.',
    'solutions.cta.title': 'What you pay, and when',
    'solutions.cta.description': 'Pay only if you like it, at both steps.\n\nThe prototype is $2,000. We invoice it when you say yes at the day-7 walkthrough.\n\nThe finished app is $7,000 in total. If we start it within 30 days of the walkthrough, the prototype\'s $2,000 counts toward it, so you pay $5,000 more, invoiced when you say yes at delivery.\n\nWhen you accept the finished app, you choose one of our two care plans, billed monthly from delivery, or you take the code and host it yourself.\n\nCare, $400 a month: hosting on our AWS platform with backups, bug fixes, up to 2 hours of changes and one 1-hour call a month.\n\nCare Plus, $990 a month: everything in Care, up to 10 hours of changes a month, a weekly call and a direct phone line to your engineer.\n\nWhat each plan covers, line by line, is on the prototype\'s page, linked below.',
    'solutions.cta.button': 'Book my 30-minute call',

    // Local — added 2026-09-01. The section exists because the demand data says the site's own
    // vocabulary has no searchers and the local category does (offer-os/gtm/keyword-research-2026-09-01.md).
    // The NAP labels are NOT duplicated here: Local.tsx reuses 'contact.location',
    // 'contact.address.street', 'contact.address.city' and 'contact.phone' so the homepage and the
    // contact page cannot state a different address. Nothing here promises on-site visits, because
    // nothing on the site does. 2026-09-30 (G20, D76): the English subtitle names no market, since
    // US owners read the English homepage; the Greek one keeps «σε όλη την Ελλάδα» (D48).
    'local.title': 'Software company in Thessaloniki',
    'local.subtitle': 'Our office is in Thessaloniki.',
    'local.website.title': 'If a website is what you need',
    'local.website.description': 'Not every business starts with its processes. If what is missing is a website that brings you customers from search, that is separate work, with its own timeline. It has its own page too.',
    'local.website.seo': 'Website build and SEO',
    'local.website.ads': 'Website promotion with Google Ads',
    'local.map': 'See us on the map',

    // Contact
    'contact.title': 'Get the free process audit',
    'contact.subtitle1': 'Tell us which process is costing you the most.',
    'contact.subtitle2': `Fill in the form and we will reply within ${REPLY_SLA.en} with a practical first step.`,
    'contact.subtitle3': 'No cost, no obligation.',
    'contact.info.title': 'Contact Information',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Your Name',
    'contact.form.name.placeholder': 'John Doe',
    'contact.form.email': 'Email Address',
    'contact.form.email.placeholder': 'john.doe@example.com',
    'contact.form.company': 'Company',
    'contact.form.company.placeholder': 'Your Company Name',
    'contact.form.question': 'Question',
    'contact.form.question.placeholder': 'What is your most important question?',
    'contact.form.message': 'Your Message',
    'contact.form.message.placeholder': 'Which process costs you the most?',
    // Required attribution question. It gets its own error string rather than reusing the
    // "<label> is required" pattern, because that pattern would read "How did you hear about
    // us? is required".
    'contact.form.heardAbout': 'How did you hear about us?',
    'contact.form.heardAbout.placeholder': 'LinkedIn, a search, a colleague, a conference...',
    'contact.form.heardAbout.error': 'Please tell us how you heard about us',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': `Thank you. Your message is with us and we will reply within ${REPLY_SLA.en}.`,
    'contact.form.error.failed': 'Failed to send message. Please try again or contact us directly.',
    'contact.form.error.required': 'is required',
    'contact.form.error.email': 'Please enter a valid email address',
    'contact.form.consent': 'We use what you send to answer you. Nothing else.',
    'contact.form.consent.link': 'How we handle it',
    'contact.phone': 'Phone',

    // Contact Location
    'contact.location': 'Location',
    'contact.address.street': 'Nikiforou Ouranou & Minotavrou 15, Building G1, Porto Center, 3rd Floor',
    'contact.address.city': 'Thessaloniki 54627, Greece',

    // Portfolio/Projects
    'projects.title': 'Software we built and run ourselves',
    'projects.subtitle': 'Not case studies. Products you can open and click.',
    'projects.fiji.title': 'Fiji Analytics Dashboard',
    'projects.fiji.description': 'A financial data platform built on Snowflake AI Data Cloud. We designed it, built it, and run it.',
    'projects.catalytics.title': 'Catalytics Pro',
    'projects.catalytics.description': 'Reporting and analytics over live data, built on the same stack we would build yours on.',
    'projects.checkitout': 'Check it out',
    'projects.code': 'Source Code',

    // Services — three, not six. Each one names the manual step it removes.
    'services.title': 'What we build once the map is done',
    'services.subtitle': 'Three things. Each one removes work somebody is doing by hand today.',
    'services.software.title': 'Process automation and internal tools',
    'services.software.description': 'The software that removes the retyping: internal tools, connections between systems that do not talk to each other, and automation for the steps someone repeats every week.',
    'services.software.feature1': 'Systems that pass data to each other',
    'services.software.feature2': 'Internal tools built around your process',
    'services.software.feature3': 'Approvals that leave the inbox',
    'services.software.feature4': 'Scheduled work that runs itself',
    'services.data.title': 'Reporting and data analysis',
    'services.data.description': 'The report that takes two days to assemble, rebuilt so that it assembles itself and disagrees with nobody.',
    'services.data.feature1': 'Reports that build themselves',
    'services.data.feature2': 'One number, one source',
    'services.data.feature3': 'Alerts before it costs you',
    'services.data.feature4': 'History you can query',
    'services.snowflake.title': 'Snowflake data platform',
    'services.snowflake.description': 'When the data outgrows spreadsheets: we implement, optimise or migrate to Snowflake AI Data Cloud. We are a Snowflake AI Data Cloud Select Partner.',
    'services.snowflake.feature1': 'Data warehouse build',
    'services.snowflake.feature2': 'ETL/ELT pipelines',
    'services.snowflake.feature3': 'Migration onto Snowflake',
    'services.snowflake.feature4': 'Cost and performance tuning',

    // Footer
    'footer.description': 'We build software around the way your business already works, from a prototype you review to the finished app, and a monthly care plan keeps it running. Thessaloniki, Greece.',
    'footer.partnership': 'Verify our partnership',
    'footer.links': 'Quick Links',
    'footer.projects': 'Projects',
    'footer.rights': 'All rights reserved.',


    // Vapi
    'vapi.connecting': 'Connecting...',
    'vapi.end_call': 'End Call',
    'vapi.chat1': 'Let\'s chat',
    'vapi.chat2': 'Hey, what brings you here today?',

    // Legal Page
    'legal.title': 'Legal Information',
    'legal.subtitle': 'Company registration and legal details',
    'legal.website_publicity': 'WEBSITE PUBLICITY INFORMATION',
    'legal.company_name': 'Company Name',
    'legal.address': 'Address',
    'legal.gemi_number': 'GEMI Number',
    'legal.corporate_capital': 'Corporate Capital',
    'legal.corporate_shares': 'Corporate Shares',
    'legal.corporate_shares_description': '2.000 capital corporate shares with a nominal value of 1.00 euro each',
    'legal.partner': 'Partner',
    'legal.administrator': 'Administrator',
    'legal.name': 'Name',
    'legal.fathers_name': "Father's Name",
    'legal.tax_id': 'Tax Identification Number',
    'legal.identity_card': 'Identity Card Number',

    // Legal Data Values
    'legal.data.company_full_name': 'Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE)',
    'legal.data.company_address': 'NIKIFOROU OURANOU & MINOTAVROU 15, BUILDING G1, PORTO CENTER, 3RD FLOOR, THESSALONIKI 54627',
    'legal.data.gemi_number': '185101306000',
    'legal.data.corporate_capital': '2.000 euro',
    'legal.data.partner_name': 'CHARALAMPOS MOUTAFIDIS',
    'legal.data.partner_father': 'CHRISTOS',
    'legal.data.partner_tax_id': 'EL167515853',
    'legal.data.partner_address': 'ELLIS 5, 56625, SIKIES',
    'legal.data.admin_name': 'CHARALAMPOS MOUTAFIDIS',
    'legal.data.admin_identity': 'ΑΟ1277016',
    'legal.data.admin_tax_id': 'EL167515853',
  },
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.audit': 'Έλεγχος διαδικασιών',
    'nav.portfolio': 'Υπηρεσίες',
    'nav.snowflake': 'Snowflake',
    'nav.blog': 'Blog',
    'nav.contact': 'Επικοινωνία',
    'nav.legal': 'Νομικά',
    'nav.privacy': 'Απόρρητο',

    // Hero Section
    // Twin of the English above (2026-09-30, G20, D5, D66).
    'hero.title': 'Πρωτότυπο εφαρμογής 7 μέρες μετά την πρώτη κλήση. Πληρώνεις μόνο αν σου αρέσει.',
    'hero.cta': 'Κλείνω ώρα για την πρώτη κλήση των 30 λεπτών',
    'hero.talk': 'Ας μιλήσουμε τώρα',
    'hero.description1': 'Η μέθοδος «Πρώτα οι στήλες» ξεκινά από τα ονόματα των στηλών στο Excel όπου γράφει όλη η ομάδα σου. Κλείσε ώρα για την πρώτη κλήση, 30 λεπτά και δωρεάν, και στείλε μας αυτά τα ονόματα. Στην κλήση συζητάμε τι χρειάζεσαι, γράφουμε μαζί τι πρέπει να κάνει το πρωτότυπο και συμφωνούμε τι θα κάνει η τελική εφαρμογή.',
    'hero.description2': 'Την 7η μέρα εξετάζεις εσύ το πρωτότυπο: μια οθόνη για κάθε ρόλο, με ενδεικτικές γραμμές φτιαγμένες από τα ονόματα των στηλών σου. Αν σου αρέσει, το πληρώνεις, κι αν όχι, δεν πληρώνεις τίποτα και σταματάμε εκεί. Αν συνεχίσεις, η τελική εφαρμογή έρχεται περίπου τρεις βδομάδες μετά, και στην παράδοση την πληρώνεις αν σου αρέσει.',

    // Challenges
    'challenges.title': 'Αυτά ακούς κάθε βδομάδα',
    'challenges.subtitle': 'Και αυτό που λες εσύ: «Για να δω πού βρίσκονται όλα, πρέπει να ρωτήσω τον έναν και τον άλλον».',
    'challenges.old_tech.title': '«Τι έγινε με την παραγγελία;»',
    'challenges.old_tech.description': 'Όλοι γράφουν στο ίδιο Excel, και ο ένας κυνηγάει τον άλλον για να μάθει πού βρίσκεται μια παραγγελία ή ένα έργο. Οι εργοδηγοί παίρνουν τηλέφωνο στο γραφείο και ρωτάνε πού πάνε αύριο.',
    'challenges.slow.title': '«Τα ίδια τα γράφουμε δύο φορές»',
    'challenges.slow.description': 'Ό,τι μπαίνει στο Excel σου ξαναγράφεται αλλού, στο λογιστικό ή σε ένα email. Κάθε ξαναγράψιμο είναι μια ακόμα ευκαιρία για λάθος. Μια αλλαγή που συμφωνήθηκε στο εργοτάξιο δεν περνάει ποτέ στο Excel.',
    'challenges.money.title': '«Ποιος το άλλαξε αυτό;»',
    'challenges.money.description': 'Όλοι ανοίγουν και αλλάζουν ολόκληρο το Excel σου: «Όλοι βλέπουν τα πάντα». Κάποιος ταξινομεί μια στήλη και χαλάει το Excel για όλους, και κάποιος άλλος πρέπει να ψάξει ποιος το άλλαξε.',

    // Solutions
    'solutions.title': 'Από την πρώτη κλήση ως την 7η μέρα',
    'solutions.subtitle': 'Κάθε οθόνη φτιάχνεται γύρω από τις στήλες που ήδη χρησιμοποιεί η ομάδα σου.',
    'solutions.experts.title': 'Η πρώτη κλήση',
    'solutions.experts.description': 'Σε 30 λεπτά βλέπουμε πώς δουλεύει σήμερα το Excel σου και συζητάμε τι χρειάζεσαι από αυτό. Γράφουμε μαζί 3 έως 5 σημεία για το τι πρέπει να κάνει το πρωτότυπο: το καθένα είναι μια οθόνη, ένας ρόλος και μια ενέργεια, με όριο τις 5 οθόνες και τους 2 ρόλους. Συμφωνούμε και τι θα κάνει η τελική εφαρμογή. Οι 7 μέρες ξεκινούν όταν συμφωνήσουμε τη λίστα και έχουν φτάσει τα ονόματα των στηλών σου.',
    'solutions.industry.title': 'Μέρες 1 έως 6: σύνδεσμοι προόδου',
    'solutions.industry.description': 'Φτιάχνουμε την οθόνη κάθε ρόλου από τα ονόματα των στηλών σου. Μέσα σε 48 ώρες από την πρώτη κλήση σού στέλνουμε ιδιωτικό σύνδεσμο προόδου, και έναν ακόμα με κάθε αλλαγή, για να βλέπεις το πρωτότυπο να παίρνει μορφή και να σχολιάζεις όποτε σε βολεύει.',
    'solutions.payment.title': '7η μέρα: Πληρώνεις μόνο αν σου αρέσει',
    'solutions.payment.description': 'Στη συνάντηση της 7ης μέρας, που κρατάει 30 λεπτά, εξετάζεις εσύ το πρωτότυπο και λες αν σου αρέσει. Το «όχι» δεν θέλει αιτιολογία και δεν κοστίζει τίποτα: σταματάμε εκεί και σβήνουμε τα στοιχεία σου αν μας το ζητήσεις. Αν σου αρέσει, σου στέλνουμε τιμολόγιο για το πρωτότυπο. Αν συνεχίσεις, η τελική εφαρμογή έρχεται περίπου τρεις βδομάδες μετά, φτιαγμένη όπως τη συμφωνήσαμε στην πρώτη κλήση, σε σταθερή τιμή. Στην παράδοση αποφασίζεις με τον ίδιο τρόπο: αν σου αρέσει, σου στέλνουμε τιμολόγιο για το υπόλοιπο ποσό, κι αν όχι, δεν πληρώνεις τίποτα παραπάνω και ο κώδικας μένει σε εμάς.',
    'solutions.cta.title': 'Τι πληρώνεις και πότε',
    'solutions.cta.description': 'Πληρώνεις μόνο αν σου αρέσει, και στα δύο βήματα.\n\nΤο πρωτότυπο κοστίζει 2.000\u00A0$. Σου στέλνουμε τιμολόγιο όταν πεις «ναι» στη συνάντηση της 7ης μέρας.\n\nΗ τελική εφαρμογή κοστίζει 7.000\u00A0$ συνολικά. Αν την ξεκινήσουμε μέσα σε 30 μέρες από τη συνάντηση, τα 2.000\u00A0$ του πρωτοτύπου συμψηφίζονται, οπότε πληρώνεις ακόμα 5.000\u00A0$, και σου στέλνουμε τιμολόγιο όταν πεις «ναι» στην παράδοση.\n\nΌταν παραλάβεις την τελική εφαρμογή, διαλέγεις ένα από τα δύο πλάνα φροντίδας μας, με μηνιαία χρέωση από την παράδοση, ή παίρνεις τον κώδικα και τη φιλοξενείς εσύ.\n\nΤο Care, 400\u00A0$ τον μήνα: φιλοξενία στην πλατφόρμα μας στο AWS με αντίγραφα ασφαλείας, διόρθωση σφαλμάτων, έως 2 ώρες αλλαγών και μία κλήση μίας ώρας τον μήνα.\n\nΤο Care Plus, 990\u00A0$ τον μήνα: ό,τι έχει το Care, έως 10 ώρες αλλαγών τον μήνα, μία κλήση κάθε βδομάδα και απευθείας τηλέφωνο με τον μηχανικό σου.\n\nΤι καλύπτει το κάθε πλάνο, σημείο προς σημείο, το βρίσκεις στη σελίδα του πρωτοτύπου, στον σύνδεσμο παρακάτω.',
    'solutions.cta.button': 'Κλείνω ώρα για την πρώτη κλήση των 30 λεπτών',

    // Local — βλ. το σχόλιο στο en. Οι δύο σύνδεσμοι είναι οι δύο λέξεις-κλειδιά με μετρημένη ζήτηση,
    // μία η καθεμία: «κατασκευή ιστοσελίδων» (2.900/μήνα) και «προώθηση ιστοσελίδων».
    // ⚠️ ΔΙΟΡΘΩΘΗΚΕ 2026-09-06: εδώ έγραφε 1.600/μήνα για την «προώθηση ιστοσελίδων». Ο αριθμός
    // έχει αποσυρθεί από τις 2026-09-02 (blogs.ts). Είναι μέσος όρος δώδεκα μηνών και ο μέσος όρος
    // κρύβει την πορεία: 210 390 260 320 210 210 170 260 390 1000 5400 9900.
    'local.title': 'Εταιρεία λογισμικού στη Θεσσαλονίκη',
    'local.subtitle': 'Η έδρα μας είναι στη Θεσσαλονίκη και δουλεύουμε με επιχειρήσεις σε όλη την Ελλάδα.',
    'local.website.title': 'Αν αυτό που χρειάζεσαι είναι η ιστοσελίδα',
    'local.website.description': 'Δεν ξεκινάει κάθε επιχείρηση από τις διαδικασίες. Αν αυτό που σου λείπει είναι μια ιστοσελίδα που φέρνει πελάτες από την αναζήτηση, αυτή είναι ξεχωριστή δουλειά, με δικό της χρονοδιάγραμμα. Έχει και τη δική της σελίδα.',
    'local.website.seo': 'Κατασκευή ιστοσελίδων και SEO',
    'local.website.ads': 'Προώθηση ιστοσελίδων με Google Ads',
    'local.map': 'Δες μας στον χάρτη',

    // Contact
    'contact.title': 'Κλείσε δωρεάν έλεγχο διαδικασιών',
    'contact.subtitle1': 'Πες μας ποια διαδικασία σου κοστίζει περισσότερο.',
    'contact.subtitle2': `Συμπλήρωσε τη φόρμα και θα σου απαντήσουμε μέσα σε ${REPLY_SLA.el} με ένα πρακτικό πρώτο βήμα.`,
    'contact.subtitle3': 'Χωρίς κόστος, χωρίς δέσμευση.',
    'contact.info.title': 'Πώς να μας βρεις',
    'contact.form.title': 'Στείλε μας μήνυμα',
    'contact.form.name': 'Το όνομά σου',
    'contact.form.name.placeholder': 'Γιάννης Παπαδόπουλος',
    'contact.form.email': 'Το Email σου',
    'contact.form.email.placeholder': 'giannis.papadopoulos@example.com',
    'contact.form.company': 'Η Εταιρεία σου',
    'contact.form.company.placeholder': 'Το όνομα της εταιρείας σου',
    'contact.form.question': 'Ερώτηση',
    'contact.form.question.placeholder': 'Ποια είναι η μεγαλύτερη απορία σου;',
    'contact.form.message': 'Το μήνυμά σου',
    'contact.form.message.placeholder': 'Ποια διαδικασία σου κοστίζει περισσότερο;',
    'contact.form.heardAbout': 'Πώς έμαθες για εμάς;',
    'contact.form.heardAbout.placeholder': 'LinkedIn, Google, σύσταση, συνέδριο...',
    'contact.form.heardAbout.error': 'Πες μας πώς έμαθες για εμάς',
    'contact.form.send': 'Στείλε το μήνυμα',
    'contact.form.sending': 'Στέλνουμε...',
    'contact.form.success': `Ευχαριστούμε. Το μήνυμά σου έφτασε και θα σου απαντήσουμε μέσα σε ${REPLY_SLA.el}.`,
    'contact.form.error.failed': 'Κάτι πήγε στραβά. Δοκίμασε ξανά ή επικοινώνησε μαζί μας κατευθείαν.',
    'contact.form.error.required': 'είναι υποχρεωτικό',
    'contact.form.error.email': 'Βάλε ένα κανονικό email',
    'contact.form.consent': 'Ό,τι στέλνεις το χρησιμοποιούμε για να σου απαντήσουμε. Τίποτα άλλο.',
    'contact.form.consent.link': 'Πώς τα διαχειριζόμαστε',
    'contact.phone': 'Τηλέφωνο',

    // Contact Location
    'contact.location': 'Πού είμαστε',
    'contact.address.street': 'Νικηφόρου Ουρανού 15 και Μινώταυρου, Κτίριο Γ1, Porto Center, 3ος όροφος',
    'contact.address.city': 'Θεσσαλονίκη 54627, Ελλάδα',

    // Portfolio/Projects
    'projects.title': 'Λογισμικό που φτιάξαμε και τρέχουμε μόνοι μας',
    'projects.subtitle': 'Προϊόντα που μπορείς να ανοίξεις και να πατήσεις.',
    'projects.fiji.title': 'Fiji Analytics Dashboard',
    'projects.fiji.description': 'Πλατφόρμα οικονομικών δεδομένων πάνω στο Snowflake AI Data Cloud. Τη σχεδιάσαμε, τη φτιάξαμε και τη λειτουργούμε εμείς.',
    'projects.catalytics.title': 'Catalytics Pro',
    'projects.catalytics.description': 'Αναφορές και αναλύσεις πάνω σε ζωντανά δεδομένα, στην ίδια βάση που θα φτιάχναμε και τη δική σου.',
    'projects.checkitout': 'Δες το',
    'projects.code': 'Ανοιχτός κώδικας',

    // Services
    'services.title': 'Τι φτιάχνουμε μόλις ετοιμαστεί το πλάνο',
    'services.subtitle': 'Τρία πράγματα. Το καθένα αφαιρεί δουλειά που κάνει κάποιος στο χέρι σήμερα.',
    'services.software.title': 'Αυτοματοποίηση διαδικασιών και εσωτερικά εργαλεία',
    'services.software.description': 'Το λογισμικό που κόβει το ξαναγράψιμο: εσωτερικά εργαλεία, συνδέσεις ανάμεσα σε συστήματα που δεν μιλάνε μεταξύ τους, και αυτοματισμοί για τα βήματα που επαναλαμβάνει κάποιος κάθε βδομάδα.',
    'services.software.feature1': 'Συστήματα που περνάνε στοιχεία το ένα στο άλλο',
    'services.software.feature2': 'Εργαλεία φτιαγμένα γύρω από τη δική σου διαδικασία',
    'services.software.feature3': 'Εγκρίσεις που φεύγουν από τα email',
    'services.software.feature4': 'Εργασίες που τρέχουν μόνες τους',
    'services.data.title': 'Αναφορές και ανάλυση δεδομένων',
    'services.data.description': 'Η αναφορά που θέλει δύο μέρες για να ετοιμαστεί, ξαναφτιαγμένη ώστε να ετοιμάζεται μόνη της και να μη διαφωνεί με καμία άλλη.',
    'services.data.feature1': 'Αναφορές που φτιάχνονται μόνες τους',
    'services.data.feature2': 'Ένας αριθμός, μία πηγή',
    'services.data.feature3': 'Ειδοποιήσεις πριν σου κοστίσει',
    'services.data.feature4': 'Ιστορικό που μπορείς να ρωτήσεις',
    'services.snowflake.title': 'Πλατφόρμα δεδομένων Snowflake',
    'services.snowflake.description': 'Όταν τα δεδομένα ξεπερνούν τα υπολογιστικά φύλλα: υλοποιούμε το Snowflake AI Data Cloud, το βελτιστοποιούμε ή μεταφέρουμε πάνω του τα δεδομένα σου. Είμαστε Snowflake AI Data Cloud Select Partner.',
    'services.snowflake.feature1': 'Κατασκευή αποθήκης δεδομένων',
    'services.snowflake.feature2': 'Διοχετεύσεις ETL/ELT',
    'services.snowflake.feature3': 'Μετάβαση στο Snowflake',
    'services.snowflake.feature4': 'Ρύθμιση κόστους και απόδοσης',

    // Footer
    'footer.description': 'Φτιάχνουμε λογισμικό γύρω από τον τρόπο που ήδη δουλεύει η επιχείρησή σου, από το πρωτότυπο ως την τελική εφαρμογή, και το μηνιαίο πλάνο φροντίδας το κρατάει σε λειτουργία. Θεσσαλονίκη.',
    'footer.partnership': 'Επιβεβαίωσε τη συνεργασία μας',
    'footer.links': 'Γρήγοροι σύνδεσμοι',
    'footer.projects': 'Έργα',
    'footer.rights': 'Όλα τα δικαιώματα δικά μας.',


    // Vapi
    'vapi.connecting': 'Συνδέεται...',
    'vapi.end_call': 'Τέλος κλήσης',
    'vapi.chat1': 'Ας κουβεντιάσουμε',
    'vapi.chat2': 'Γεια σου, τι σε φέρνει εδώ σήμερα;',

    // Legal Page
    'legal.title': 'Νομικές Πληροφορίες',
    'legal.subtitle': 'Στοιχεία εγγραφής και νομικές λεπτομέρειες εταιρείας',
    'legal.website_publicity': 'ΣΤΟΙΧΕΙΑ ΔΗΜΟΣΙΟΤΗΤΑΣ ΙΣΤΟΣΕΛΙΔΑΣ',
    'legal.company_name': 'Επωνυμία',
    'legal.address': 'Διεύθυνση',
    'legal.gemi_number': 'Αριθμός ΓΕΜΗ',
    'legal.corporate_capital': 'Εταιρικό Κεφάλαιο',
    'legal.corporate_shares': 'Εταιρικά Μερίδια',
    'legal.corporate_shares_description': '2.000 κεφαλαιακά εταιρικά μερίδια ονομαστικής αξίας 1,00 ευρώ έκαστο',
    'legal.partner': 'Εταίρος',
    'legal.administrator': 'Διαχειριστής',
    'legal.name': 'Όνομα',
    'legal.fathers_name': 'Πατρώνυμο',
    'legal.tax_id': 'Αριθμός Φορολογικού Μητρώου',
    'legal.identity_card': 'Αριθμός Ταυτότητας',

    // Legal Data Values
    'legal.data.company_full_name': 'Fiji Solutions ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ',
    'legal.data.company_address': 'ΝΙΚΗΦΟΡΟΥ ΟΥΡΑΝΟΥ 15 ΚΑΙ ΜΙΝΩΤΑΥΡΟΥ, ΚΤΙΡΙΟ Γ1, PORTO CENTER, 3ος ΟΡΟΦΟΣ, ΘΕΣΣΑΛΟΝΙΚΗ 54627',
    'legal.data.gemi_number': '185101306000',
    'legal.data.corporate_capital': '2.000 ευρώ',
    'legal.data.partner_name': 'ΧΑΡΑΛΑΜΠΟΣ ΜΟΥΤΑΦΙΔΗΣ',
    'legal.data.partner_father': 'ΧΡΉΣΤΟΣ',
    'legal.data.partner_tax_id': '167515853',
    'legal.data.partner_address': 'ΕΛΛΗΣ 5, 56625, ΣΥΚΙΕΣ',
    'legal.data.admin_name': 'ΧΑΡΑΛΑΜΠΟΣ ΜΟΥΤΑΦΙΔΗΣ',
    'legal.data.admin_identity': 'ΑΟ1277016',
    'legal.data.admin_tax_id': '167515853',
  }
};

export function createTranslationFunction(language: Language) {
  return (key: string): string => {
    return translations[language][key] || key;
  };
}
