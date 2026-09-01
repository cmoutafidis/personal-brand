import {Language} from '@/types/language';
import {
  FIRST_FIX_DAYS,
  AUDIT_CALL_MINUTES,
  REPLY_SLA,
  GUARANTEE_WINDOW_WORD
} from '@/lib/offer';

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
    'hero.title': `Your first process automated within ${FIRST_FIX_DAYS} days, or we pay your money back`,
    'hero.cta': 'Get the free process audit',
    'hero.talk': "Let's talk now",
    'hero.description1': 'If someone in your business retypes the same data into two systems every week, chases approvals by email, or rebuilds the same report by hand, that is the process we start with.',
    'hero.description2': `It starts with a free process audit: a written map of the three bottlenecks costing you the most, in hours and euros. Yours to keep whether or not we work together. The ${FIRST_FIX_DAYS} days start when the build does.`,

    // Challenges — written as the reader would say them, not as we would categorise them.
    'challenges.title': 'Where the money leaks',
    'challenges.subtitle': 'These three cost you every week, and none of them shows up as a line in your accounts.',
    'challenges.old_tech.title': 'The same thing, typed twice',
    'challenges.old_tech.description': 'The order goes into the shop, then into the accounting system, then into a spreadsheet. Every retype is a chance for the error a customer finds before you do.',
    // Key name is a leftover. This card was 'Nothing talks to anything', which restated card one
    // from the system's point of view. It now carries the key-person trap, which the offer page
    // ranks among its five leaks and the homepage had nowhere, and which the openGraph audience
    // line already describes the buyer by.
    'challenges.slow.title': 'It only works because one person knows how',
    'challenges.slow.description': 'The process lives in one person\u2019s head. A sick day, a holiday or a resignation turns an ordinary week into a crisis.',
    'challenges.money.title': 'The numbers arrive too late',
    'challenges.money.description': 'When a report takes days to assemble, a small problem has already become an expensive one by the time anyone sees it.',

    // Solutions — the two rungs. No price is published anywhere on this site.
    'solutions.title': 'How it works',
    'solutions.subtitle': 'Two steps, and a guarantee. You approve the price and the target in writing before anything gets built.',
    'solutions.experts.title': 'The free process audit',
    'solutions.experts.description': `A ${AUDIT_CALL_MINUTES}-minute call about how work actually moves through your business, then a written one-page map of your three most expensive bottlenecks, with the hours and euros each one costs per month. You have it within a week of the call.`,
    'solutions.industry.title': 'Scope, Build & Run',
    'solutions.industry.description': `We map the exact workflow, rank every possible fix by what it returns, and agree the payback target and the price with you in writing. Then we build the highest-return fix first, and our target is live within ${FIRST_FIX_DAYS} days of the build starting. The source code and the documentation are yours. A monthly care plan keeps it running, monitored and updated.`,
    'solutions.payment.title': 'The guarantee',
    'solutions.payment.description': `If what we build has not paid for itself within ${GUARANTEE_WINDOW_WORD.en} months of going live, measured against the baseline in your audit, we refund the build fee. The full terms are on the audit page.`,
    'solutions.cta.title': 'Show us the process that wastes the most time',
    'solutions.cta.description': 'Tell us which task, spreadsheet or report costs you the most, and we will put a number on it in writing. Automating it gives your team back the hours it takes, without hiring anyone.',
    'solutions.cta.button': 'Get the free process audit',

    // Local — added 2026-09-01. The section exists because the demand data says the site's own
    // vocabulary has no searchers and the local category does (offer-os/gtm/keyword-research-2026-09-01.md).
    // The NAP labels are NOT duplicated here: Local.tsx reuses 'contact.location',
    // 'contact.address.street', 'contact.address.city' and 'contact.phone' so the homepage and the
    // contact page cannot state a different address. "across Greece" matches the published
    // areaServed; nothing here promises on-site visits, because nothing on the site does.
    'local.title': 'Software company in Thessaloniki',
    'local.subtitle': `Our office is in Thessaloniki and we work with businesses across Greece. We reply within ${REPLY_SLA.en}.`,
    'local.website.title': 'If the website is what you need first',
    'local.website.description': 'Not every business starts with its processes. If the first thing missing is a website that brings you customers from search, that is separate work, with its own timeline and its own guarantee. It has its own page too.',
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
    'footer.description': `We map how your business runs, put a euro figure on the three bottlenecks costing you most, and automate the first one within ${FIRST_FIX_DAYS} days of the build starting. A monthly care plan keeps it running. Thessaloniki, Greece.`,
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
    'hero.title': `Η πρώτη σου διαδικασία αυτοματοποιημένη μέσα σε ${FIRST_FIX_DAYS} μέρες, αλλιώς σου επιστρέφουμε τα χρήματά σου`,
    'hero.cta': 'Κλείσε δωρεάν έλεγχο διαδικασιών',
    'hero.talk': 'Ας μιλήσουμε τώρα',
    'hero.description1': 'Αν κάποιος στην επιχείρησή σου ξαναγράφει τα ίδια στοιχεία σε δύο συστήματα κάθε βδομάδα, κυνηγά εγκρίσεις με email ή ξαναφτιάχνει την ίδια αναφορά στο χέρι, από εκεί ξεκινάμε.',
    'hero.description2': `Ξεκινάει με δωρεάν έλεγχο διαδικασιών: ένα γραπτό πλάνο με τα τρία σημεία που σου κοστίζουν περισσότερο, σε ώρες και σε ευρώ. Το κρατάς είτε συνεργαστούμε είτε όχι. Οι ${FIRST_FIX_DAYS} μέρες μετράνε από τη στιγμή που ξεκινάει η υλοποίηση.`,

    // Challenges
    'challenges.title': 'Από πού φεύγουν τα χρήματα',
    'challenges.subtitle': 'Αυτά τα τρία σου κοστίζουν κάθε βδομάδα, και κανένα δεν φαίνεται ως γραμμή στα βιβλία σου.',
    'challenges.old_tech.title': 'Το ίδιο πράγμα, γραμμένο δύο φορές',
    'challenges.old_tech.description': 'Η παραγγελία μπαίνει στο ηλεκτρονικό κατάστημα, μετά στο λογιστικό, μετά σε ένα υπολογιστικό φύλλο. Κάθε ξαναγράψιμο είναι μια ευκαιρία για το λάθος που θα το βρει ο πελάτης πριν από σένα.',
    'challenges.slow.title': 'Δουλεύει μόνο επειδή το ξέρει ένας άνθρωπος',
    'challenges.slow.description': 'Η διαδικασία υπάρχει στο μυαλό ενός ανθρώπου. Μια άδεια, μια αρρώστια ή μια παραίτηση μετατρέπει μια κανονική βδομάδα σε κρίση.',
    'challenges.money.title': 'Οι αριθμοί έρχονται αργά',
    'challenges.money.description': 'Όταν μια αναφορά θέλει μέρες για να ετοιμαστεί, το μικρό πρόβλημα έχει ήδη γίνει ακριβό μέχρι να το δει κάποιος.',

    // Solutions
    'solutions.title': 'Πώς δουλεύει',
    'solutions.subtitle': 'Δύο βήματα και μια εγγύηση. Εγκρίνεις γραπτώς την τιμή και τον στόχο πριν φτιαχτεί οτιδήποτε.',
    'solutions.experts.title': 'Ο δωρεάν έλεγχος διαδικασιών',
    'solutions.experts.description': `Μια κλήση ${AUDIT_CALL_MINUTES} λεπτών για το πώς κινείται πραγματικά η δουλειά στην επιχείρησή σου, και μετά ένα γραπτό πλάνο μιας σελίδας με τα τρία ακριβότερα σημεία, με τις ώρες και τα ευρώ που κοστίζει το καθένα τον μήνα. Το έχεις μέσα σε μία εβδομάδα από την κλήση.`,
    'solutions.industry.title': 'Σχεδιασμός, υλοποίηση και λειτουργία',
    'solutions.industry.description': `Χαρτογραφούμε τη ροή, ιεραρχούμε κάθε πιθανή λύση με βάση το τι αποδίδει και συμφωνούμε γραπτώς μαζί σου τον στόχο απόσβεσης και την τιμή. Μετά φτιάχνουμε πρώτα τη λύση με τη μεγαλύτερη απόδοση, με στόχο να είναι σε λειτουργία μέσα σε ${FIRST_FIX_DAYS} μέρες από την έναρξη της υλοποίησης. Ο πηγαίος κώδικας και η τεκμηρίωση είναι δικά σου. Το μηνιαίο πλάνο φροντίδας τη συντηρεί, την παρακολουθεί και την ενημερώνει.`,
    'solutions.payment.title': 'Η εγγύηση',
    'solutions.payment.description': `Αν αυτό που φτιάξαμε δεν έχει αποσβεστεί μέσα σε ${GUARANTEE_WINDOW_WORD.el} μήνες από τη θέση του σε λειτουργία, μετρημένο πάνω στη βάση του ελέγχου σου, επιστρέφουμε το κόστος κατασκευής. Οι πλήρεις όροι είναι στη σελίδα του ελέγχου.`,
    'solutions.cta.title': 'Δείξε μας τη διαδικασία που τρώει τον περισσότερο χρόνο',
    'solutions.cta.description': 'Πες μας ποια εργασία, ποιο υπολογιστικό φύλλο ή ποια αναφορά σου κοστίζει περισσότερο, και θα βάλουμε νούμερο πάνω της γραπτώς. Όταν την αυτοματοποιήσουμε, η ομάδα σου παίρνει πίσω τις ώρες που της τρώει, χωρίς νέες προσλήψεις.',
    'solutions.cta.button': 'Κλείσε δωρεάν έλεγχο διαδικασιών',

    // Local — βλ. το σχόλιο στο en. Οι δύο σύνδεσμοι είναι οι δύο λέξεις-κλειδιά με μετρημένη ζήτηση,
    // μία η καθεμία: «κατασκευή ιστοσελίδων» (2.900/μήνα) και «προώθηση ιστοσελίδων» (1.600/μήνα).
    'local.title': 'Εταιρεία λογισμικού στη Θεσσαλονίκη',
    'local.subtitle': `Η έδρα μας είναι στη Θεσσαλονίκη και δουλεύουμε με επιχειρήσεις σε όλη την Ελλάδα. Απαντάμε μέσα σε ${REPLY_SLA.el}.`,
    'local.website.title': 'Αν αυτό που χρειάζεσαι πρώτα είναι η ιστοσελίδα',
    'local.website.description': 'Δεν ξεκινάει κάθε επιχείρηση από τις διαδικασίες. Αν το πρώτο που σου λείπει είναι μια ιστοσελίδα που φέρνει πελάτες από την αναζήτηση, αυτή είναι ξεχωριστή δουλειά, με δικό της χρονοδιάγραμμα και δική της εγγύηση. Έχει και τη δική της σελίδα.',
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
    'footer.description': `Χαρτογραφούμε πώς δουλεύει η επιχείρησή σου, βάζουμε νούμερο σε ευρώ στα τρία σημεία που σου κοστίζουν περισσότερο και αυτοματοποιούμε το πρώτο μέσα σε ${FIRST_FIX_DAYS} μέρες από την έναρξη της υλοποίησης. Το μηνιαίο πλάνο φροντίδας το κρατάει σε λειτουργία. Θεσσαλονίκη.`,
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
