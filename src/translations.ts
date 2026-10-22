import {Language} from '@/types/language';
import {REPLY_SLA} from '@/lib/offer';

// Copy rules for this file, set 2026-08-15 after the site audit:
//
//  1. Say what the reader gets, not what we are. The six-service grid, the 32-technology stack and
//     the six-industry list were deleted, not rewritten — a service list is the thing to remove.
//     2026-10-22 (offer-os gtm/broad-home-2026-10 BR-D3, BR-G07): six kinds of work are back as cards on
//     the homepages and /portfolio, read from src/data/services.ts, each a line of what we build; the
//     technology and industry lists stay gone. The three old portfolio card keys are deleted.
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
//     ~~2026-09-30 (G20, offer-os gtm/sheet-to-app-rollout/PLAN.md D5, D68): one dated exception.
//     The homepage `hero.*`, `challenges.*` and `solutions.*` strings are the sheet-to-app hook
//     and are copied word for word from offer-os `offers/fiji-solutions--sheet-to-app/
//     03-copy-homepage.md`. Their numbers (7 days, 30 minutes, 48 hours, 3 to 5 lines, 5 screens,
//     2 roles, 30 days) and the five dollar figures in `solutions.cta.description` are typed
//     there, as the landing page's data file types them, so no price constant enters
//     `@/lib/offer`. To change one, change it in 03-copy-homepage.md first. Every other string in
//     this file keeps this rule.~~
//     (Struck 2026-10-22, broad home BR-G07: every key it named is deleted, see BR-G05 below, and
//     03-copy-homepage.md is retired.)
//     ~~2026-10-08 (F16, offer-os gtm/followups-and-search/PLAN.md F-D132, F-D135): `nav.offer` and
//     `contact.title`, `contact.subtitle1` and `contact.subtitle3` join that exception. They type
//     "7 days" and "30 minutes" as offer-os `offers/fiji-solutions--sheet-to-app/derived/site/
//     F16-COPY.md` gives them; change them there first.~~
//     (Struck 2026-10-22, broad home BR-G07: `nav.offer` is deleted, and the contact.* strings are broad,
//     copied from offer-os `companies/fiji-solutions/site/03-copy-home.md`, "Contact", with no "7 days";
//     change them there first. Their "30" stays an exception, recorded in the BR-G07 entry below.)
//     2026-10-18 (offer-os gtm/atlas/DECISIONS.md AT-D8, AT-D25): `nav.atlas` joins both locales,
//     "Atlas" in Latin script in Greek too, from offer-os `offers/fiji-solutions--atlas/03-copy.md`.
//     2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G04): `nav.offer` is deleted, since the navbar
//     no longer links the 7-day prototype (BR-D5). `nav.projects`, `nav.cta` and `banner.*` join,
//     and `footer.description` carries the broad sentence, all from offer-os
//     `companies/fiji-solutions/site/03-copy-home.md`. "30" in `banner.text` is typed there and here,
//     as the contract gives it.
//     2026-10-22 (BR-G05): `hero.title`, `hero.cta`, `hero.description1`, `hero.description2`, every
//     `challenges.*` and every `solutions.*` key are deleted, the priced box with them, so the exception
//     for those strings above is spent. The broad home's copy is src/data/home.ts. `local.website.description`
//     is broad in both locales, from the same contract.
//     2026-10-22 (BR-G07): `contact.title`, `contact.subtitle1`, `contact.subtitle3` and
//     `contact.form.message.placeholder` are broad, and `services.title` and `services.subtitle` name the six
//     kinds of work, all from offer-os `companies/fiji-solutions/site/03-copy-home.md`, "Contact" and
//     "Portfolio". "30" in `contact.title` and `contact.subtitle3` is typed as that contract gives it. No key
//     here carries a price. The exceptions to this rule left in this file are the typed "30" (minutes) in
//     `banner.text` (BR-G04), `contact.title` and `contact.subtitle3` (this entry), each as that contract
//     gives it; no other number is typed here.

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.audit': 'Process audit',
    'nav.about': 'About',
    'nav.portfolio': 'Services',
    'nav.projects': 'Projects',
    'nav.atlas': 'Atlas',
    'nav.snowflake': 'Snowflake',
    'nav.blog': 'Blog',
    'nav.spreadsheetCheck': 'Spreadsheet check',
    'nav.contact': 'Contact',
    'nav.legal': 'Legal',
    'nav.privacy': 'Privacy',
    'nav.cta': 'Book a free call',

    // Top banner (2026-10-22, broad home BR-G04)
    'banner.text': 'Free 30-minute call with the engineer who builds your software.',
    'banner.link': 'Book a time',
    'banner.close': 'Close',

    // Hero voice button. 2026-10-22 (offer-os broad home BR-G05): the rest of the hero copy, and the
    // `challenges.*` and `solutions.*` keys of the sheet-to-app hook (the homepage's one priced slot), left
    // with the old homepage; the broad hero reads src/data/home.ts. This key stays for the voice button,
    // hidden until BR-G10 (HOMEPAGE_VOICE_ON).
    'hero.talk': "Let's talk now",

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
    'local.website.description': 'We build websites made to be found in search, and Google Ads campaigns that bring people to them. Each has its own page.',
    'local.website.seo': 'Website build and SEO',
    'local.website.ads': 'Website promotion with Google Ads',
    'local.map': 'See us on the map',

    // Contact
    'contact.title': 'Book a free 30-minute call',
    'contact.subtitle1': 'Tell us what you want to build: custom software, an app, an automation, an AI agent or a website. You talk directly to the engineer who builds it.',
    'contact.subtitle2': `Fill in the form and we reply within ${REPLY_SLA.en}.`,
    'contact.subtitle3': 'The call is free and takes 30 minutes.',
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
    'contact.form.message.placeholder': 'What do you want to build?',
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

    // Services: the /portfolio heading and line. 2026-10-22 (broad home BR-G07): six kinds of work, from
    // src/data/services.ts; the three old card keys are deleted.
    'services.title': 'What Fiji Solutions builds',
    'services.subtitle': 'Six kinds of work, for businesses in Greece and abroad.',

    // Footer
    'footer.description': 'Fiji Solutions is a software company in Thessaloniki, Greece. We build custom software, apps, automation, AI agents and websites for businesses in Greece and abroad.',
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
    'nav.about': 'Ποιοι είμαστε',
    'nav.portfolio': 'Υπηρεσίες',
    'nav.projects': 'Έργα',
    'nav.atlas': 'Atlas',
    'nav.snowflake': 'Snowflake',
    'nav.blog': 'Blog',
    'nav.spreadsheetCheck': 'Τεστ για το κοινό Excel',
    'nav.contact': 'Επικοινωνία',
    'nav.legal': 'Νομικά',
    'nav.privacy': 'Απόρρητο',
    'nav.cta': 'Κλείσε δωρεάν κλήση',

    // Top banner (2026-10-22, broad home BR-G04)
    'banner.text': 'Δωρεάν κλήση 30 λεπτών με τον μηχανικό που φτιάχνει το λογισμικό σου.',
    'banner.link': 'Κλείσε ώρα',
    'banner.close': 'Κλείσιμο',

    // Hero voice button. 2026-10-22 (offer-os broad home BR-G05): the rest of the hero copy, and the
    // `challenges.*` and `solutions.*` keys of the sheet-to-app hook (the homepage's one priced slot), left
    // with the old homepage; the broad hero reads src/data/home.ts. This key stays for the voice button,
    // hidden until BR-G10 (HOMEPAGE_VOICE_ON).
    'hero.talk': 'Ας μιλήσουμε τώρα',

    // Local — βλ. το σχόλιο στο en. Οι δύο σύνδεσμοι είναι οι δύο λέξεις-κλειδιά με μετρημένη ζήτηση,
    // μία η καθεμία: «κατασκευή ιστοσελίδων» (2.900/μήνα) και «προώθηση ιστοσελίδων».
    // ⚠️ ΔΙΟΡΘΩΘΗΚΕ 2026-09-06: εδώ έγραφε 1.600/μήνα για την «προώθηση ιστοσελίδων». Ο αριθμός
    // έχει αποσυρθεί από τις 2026-09-02 (blogs.ts). Είναι μέσος όρος δώδεκα μηνών και ο μέσος όρος
    // κρύβει την πορεία: 210 390 260 320 210 210 170 260 390 1000 5400 9900.
    'local.title': 'Εταιρεία λογισμικού στη Θεσσαλονίκη',
    'local.subtitle': 'Η έδρα μας είναι στη Θεσσαλονίκη και δουλεύουμε με επιχειρήσεις σε όλη την Ελλάδα.',
    'local.website.title': 'Αν αυτό που χρειάζεσαι είναι η ιστοσελίδα',
    'local.website.description': 'Φτιάχνουμε ιστοσελίδες που βρίσκονται στην αναζήτηση, και καμπάνιες στο Google Ads που φέρνουν κόσμο σε αυτές. Η καθεμία έχει τη δική της σελίδα.',
    'local.website.seo': 'Κατασκευή ιστοσελίδων και SEO',
    'local.website.ads': 'Προώθηση ιστοσελίδων με Google Ads',
    'local.map': 'Δες μας στον χάρτη',

    // Contact
    'contact.title': 'Κλείσε δωρεάν κλήση 30 λεπτών',
    'contact.subtitle1': 'Πες μας τι θέλεις να φτιάξεις: λογισμικό κατά παραγγελία, μια εφαρμογή, έναν αυτοματισμό, έναν AI agent ή μια ιστοσελίδα. Μιλάς απευθείας με τον μηχανικό που το φτιάχνει.',
    'contact.subtitle2': `Συμπλήρωσε τη φόρμα και θα σου απαντήσουμε μέσα σε ${REPLY_SLA.el}.`,
    'contact.subtitle3': 'Η κλήση είναι δωρεάν και κρατάει 30 λεπτά.',
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
    'contact.form.message.placeholder': 'Τι θέλεις να φτιάξεις;',
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

    // Services
    'services.title': 'Τι φτιάχνει η Fiji Solutions',
    'services.subtitle': 'Έξι είδη δουλειάς, για επιχειρήσεις στην Ελλάδα και στο εξωτερικό.',

    // Footer
    'footer.description': 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη. Φτιάχνουμε λογισμικό, εφαρμογές, αυτοματισμούς, AI agents και ιστοσελίδες για επιχειρήσεις στην Ελλάδα και στο εξωτερικό.',
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
