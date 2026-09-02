import type {BlogPost} from '@/types/blog';

// TERM: the third local-ranking factor is «δημοτικότητα», never «προβολή». «προβολή» is
// already this site's word for the SERVING stage of Search (ανίχνευση / ευρετηρίαση /
// προβολή, live article 1), and Google's own Greek page uses «δημοτικότητα» here.

// Article 5 of the Greek batch. The angle is the ownership boundary: which fields on a Business
// Profile are the owner's own claim, which are edited by strangers, and which Google writes by
// itself. Every factual sentence about how the profile behaves is a verbatim quote from Google's
// own Help documentation, re-read on 2026-09-02, with the URL on the sentence that carries it.
//
// Three things this file deliberately does NOT say:
//   - It does not say that "open 24 hours" is a system default. No Google page says that; the one
//     page that describes the setting describes it as an action the profile manager takes, day by
//     day. The documented ways hours change without you are three, and they are named instead.
//   - It does not describe "soft" vs "hard" suspensions. That distinction exists only in community
//     forum threads, which are not Google documentation.
//   - It does not say anyone may answer a question about your business. The community Q&A help
//     page could not be read today; the page that replaced it in search results is about a
//     different feature entirely.

const GBP_GUIDELINES = 'https://support.google.com/business/answer/3038177?hl=en';
const GBP_GUIDELINES_EL = 'https://support.google.com/business/answer/3038177?hl=el';
const GBP_SOURCES = 'https://support.google.com/business/answer/2721884?hl=en';
const GBP_UPDATES = 'https://support.google.com/business/answer/3480441?hl=en';
const GBP_EDITS = 'https://support.google.com/business/answer/3038311?hl=en';
const MAPS_EDIT = 'https://support.google.com/maps/answer/7084895?hl=en&co=GENIE.Platform%3DAndroid';
const GBP_ATTRIBUTES = 'https://support.google.com/business/answer/9049526?hl=en';
const GBP_LINKS = 'https://support.google.com/business/answer/6218037?hl=en';
const GBP_HOURS = 'https://support.google.com/business/answer/10417060?hl=en&co=GENIE.Platform%3DDesktop';
const GBP_SPECIAL_HOURS = 'https://support.google.com/business/answer/6303076?hl=en';
const GBP_HOLIDAYS = 'https://support.google.com/business/answer/6333474?hl=en';
const MAPS_REVIEWS = 'https://support.google.com/maps/answer/6230175?hl=en&co=GENIE.Platform%3DDesktop';
const GBP_MANAGE_REVIEWS = 'https://support.google.com/business/answer/3474050?hl=en&co=GENIE.Platform%3DDesktop';
const GBP_REPORT_REVIEWS = 'https://support.google.com/business/answer/4596773?hl=en';
const GBP_MORE_REVIEWS = 'https://support.google.com/business/answer/3474122?hl=en';
const UGC_PROHIBITED = 'https://support.google.com/contributionpolicy/answer/7400114?hl=en';
const GBP_RESTRICTIONS = 'https://support.google.com/business/answer/14114287?hl=en';
const GBP_PHOTOS = 'https://support.google.com/business/answer/6130451?hl=en';
const GBP_SUSPENDED = 'https://support.google.com/business/answer/4569145?hl=en';
const GBP_ELIGIBILITY = 'https://support.google.com/business/answer/13763036?hl=en';
const GBP_VERIFY = 'https://support.google.com/business/answer/7107242?hl=en';
const GBP_OWNERSHIP = 'https://support.google.com/business/answer/4566671?hl=en';
const GBP_THIRD_PARTY_TIPS = 'https://support.google.com/business/answer/7163406?hl=en';
const GBP_THIRD_PARTY_POLICY = 'https://support.google.com/business/answer/7353941?hl=en';
const GBP_LOCAL_RANKING = 'https://support.google.com/business/answer/7091?hl=en';

const post: BlogPost = {
  id: 'profil-epicheirisis-google',
  slug: 'profil-epicheirisis-google',
  title: 'Το προφίλ της επιχείρησής σου στην Google: τι ελέγχεις εσύ και τι όχι',
  metaTitle: 'Google Business Profile (Google My Business): τι ελέγχεις',
  excerpt: 'Ποια στοιχεία του προφίλ σου είναι δική σου δήλωση, ποια τα γράφουν οι πελάτες και ποια τα αλλάζει η Google μόνη της. Με τα λόγια της ίδιας.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 29,
  tags: ['Αναζήτηση', 'Ιστοσελίδες', 'Ανάθεση έργου'],
  body: [
    { type: 'paragraph', text: [
      'Το προφίλ της επιχείρησής σου στην Google δεν είναι φόρμα που συμπληρώνεις. Είναι ',
      {text: 'σύνθεση', strong: true},
      ': ένα κομμάτι το γράφεις εσύ, ένα κομμάτι οι πελάτες σου, ένα κομμάτι το συμπληρώνει η Google από αλλού, και ένα κομμάτι μπορεί να το προτείνει οποιοσδήποτε περνάει από τον χάρτη. Η ίδια το λέει καθαρά: «Information in profiles is compiled from a variety of sources». Και από κάτω τις απαριθμεί (',
      {text: 'πηγές πληροφοριών προφίλ', href: GBP_SOURCES},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Αυτή η διάκριση είναι όλο το άρθρο. Όταν ξέρεις ποιο πεδίο είναι δική σου δήλωση, ποιο το άλλαξε ένας άγνωστος και ποιο η ίδια η Google, ξέρεις τι έχει νόημα να διορθώσεις, τι να αναφέρεις, και τι δεν πρόκειται να αλλάξει επειδή απλώς το ζήτησες.',
    ]},

    { type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε πρόταση της Google που παρατίθεται ελέγχθηκε εκείνη τη μέρα στη σελίδα που τη συνοδεύει. Οι χρόνοι που θα διαβάσεις είναι δικοί της, όπως τους δημοσιεύει η ίδια. Δεν είναι δικές μας υποσχέσεις.',
    ]},

    { type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Ποιος μπορεί να αλλάξει τα στοιχεία της επιχείρησής μου;', a: 'Τρεις. Εσύ, οι χρήστες του Google Maps με πρόταση αλλαγής, και η ίδια η Google. Η Google γράφει ότι αν κάποιες πηγές αναφέρουν πως τα στοιχεία σου είναι λάθος ή παλιά, μπορεί να ενημερώσει το προφίλ μόνη της. Γράφει επίσης ότι δεν μπορείς να διαχειριστείς όλες τις δικές της ενημερώσεις μέσα από το προφίλ.'},
      {q: 'Μπορώ να διαγράψω μια κακή κριτική;', a: 'Όχι. Δεν διαγράφεις κριτική άλλου και δεν επικοινωνείς με όποιον την έγραψε. Μπορείς να την αναφέρεις, αλλά επιλέξιμες για αφαίρεση είναι μόνο όσες παραβιάζουν τις πολιτικές της Google. Και η ίδια λέει ρητά να μην αναφέρεις μια κριτική επειδή διαφωνείς μαζί της.'},
      {q: 'Γιατί το προφίλ μου λέει ότι είμαι ανοιχτά όλο το εικοσιτετράωρο;', a: 'Το πιθανότερο είναι ότι το δήλωσε κάποιος με πρόσβαση: η οδηγία της Google περιγράφει το εικοσιτετράωρο ως επιλογή που κάνει ο διαχειριστής, ημέρα προς ημέρα. Το ωράριο όμως μπορεί να αλλάξει και χωρίς εσένα, με πρόταση χρήστη ή με αυτόματη ενημέρωση της Google.'},
      {q: 'Πόσο κάνει να φανεί μια αλλαγή που έκανα;', a: 'Η Google γράφει ότι ο έλεγχος παίρνει συνήθως έως δέκα λεπτά, αλλά μπορεί να φτάσει και τις τριάντα ημέρες. Και μπορεί να μην εγκριθεί καθόλου, αν η Google δεν μπορεί να επιβεβαιώσει την ακρίβειά της.'},
      {q: 'Μπορεί να μου κλείσει η Google το προφίλ;', a: 'Ναι. Επιφυλάσσεται ρητά του δικαιώματος να αναστείλει την πρόσβαση σε προφίλ που παραβιάζουν τις οδηγίες της. Οι συνηθισμένες αφορμές δεν είναι εξωτικές: λέξεις-κλειδιά μέσα στο όνομα, δεύτερο προφίλ για την ίδια επιχείρηση, ή διεύθυνση που δεν δέχεται πελάτες.'},
      {q: 'Το προφίλ το έφτιαξε ο διαφημιστής μου. Ποιος το έχει;', a: 'Ο έλεγχος της πρόσβασης ανήκει στους ιδιοκτήτες του προφίλ, και η πολιτική της Google για τρίτους απαιτεί ρητή συγκατάθεση του ιδιοκτήτη για να το διαχειριστεί κάποιος άλλος. Αν το κατέχει σήμερα άλλος λογαριασμός, μπορείς να ζητήσεις την ιδιοκτησία μέσα από την Google.'},
    ]},

    { type: 'heading', text: 'Από πού έρχονται τα στοιχεία που βλέπει ο πελάτης σου' },
    { type: 'paragraph', text: [
      'Μια διευκρίνιση ονόματος πρώτα, γιατί μπερδεύει: αυτό που πολλοί ξέρουν ακόμη ως Google My Business ονομάζεται σήμερα, σε όλη την τεκμηρίωση, ',
      {text: 'Επιχειρηματικό προφίλ', strong: true},
      ' (Google Business Profile). Ίδιο πράγμα, καινούργιο όνομα.',
    ]},
    { type: 'paragraph', text: [
      'Η σελίδα που εξηγεί από πού μαζεύονται τα στοιχεία είναι μικρή και ασυνήθιστα ειλικρινής. Μία πηγή είναι δημόσιο περιεχόμενο που έχει ήδη σαρώσει η Google: «Publicly-available information, such as crawled web content (e.g., information from a business’ official website)». Άλλη πηγή είναι οι ίδιοι οι χρήστες: «Users who contribute factual information (such as addresses and phone numbers), and content (such as photos and reviews)» (',
      {text: 'πηγές πληροφοριών προφίλ', href: GBP_SOURCES},
      '). Πρόσεξε τη δεύτερη: όχι μόνο περιεχόμενο, αλλά ',
      {text: 'πραγματολογικά στοιχεία', strong: true},
      ', δηλαδή διευθύνσεις και τηλέφωνα.',
    ]},
    { type: 'paragraph', text: [
      'Η συνέπεια είναι γραμμένη, με παράδειγμα εστιατορίου: «They also might get information you haven’t added, such as a link to your menu or photos customers have uploaded» (',
      {text: 'πληροφορίες στο προφίλ σου', href: GBP_SOURCES},
      '). Ο πελάτης σου βλέπει μείγμα από αυτά που δήλωσες και αυτά που δεν δήλωσες, χωρίς καμία ένδειξη ποιο είναι ποιο.',
    ]},

    { type: 'table', caption: 'Ποιος ορίζει τι στο Επιχειρηματικό προφίλ σου.', head: ['Στοιχείο', 'Ποιος το ορίζει', 'Τι μπορείς να κάνεις εσύ'], rows: [
      [['Όνομα, κατηγορία, διεύθυνση, τηλέφωνο'], ['Εσύ, εφόσον έχεις επαληθεύσει την επιχείρηση'], ['Τα επεξεργάζεσαι, αλλά κάθε αλλαγή περνά από έλεγχο πριν βγει']],
      [['Ωράριο λειτουργίας'], ['Εσύ· και χρήστες με πρόταση αλλαγής· και η Google με αυτόματη ενημέρωση'], ['Το δηλώνεις, και το ξαναδηλώνεις αν αλλάξει χωρίς εσένα']],
      [['Φωτογραφίες που ανέβασαν πελάτες'], ['Οι πελάτες'], ['Ζητάς αφαίρεση αν παραβιάζουν πολιτική. Δεν τις διαγράφεις εσύ']],
      [['Κριτικές και βαθμολογία'], ['Οι πελάτες'], ['Απαντάς δημόσια. Αναφέρεις μόνο ό,τι παραβιάζει πολιτική']],
      [['Χαρακτηριστικά (attributes)'], ['Άλλα εσύ, άλλα οι πελάτες που σε επισκέπτονται'], ['Επεξεργάζεσαι μόνο όσα επιτρέπει η χώρα και η κατηγορία σου']],
      [['Σύνδεσμοι υπηρεσιών, π.χ. κράτησης'], ['Τρίτοι συνεργάτες ή αυτοματοποιημένα δεδομένα της Google'], ['Συχνά τίποτα· εμφανίζονται μόνοι τους']],
      [['Προειδοποίηση σε αργία ότι το ωράριο ίσως διαφέρει'], ['Η Google'], ['Δηλώνεις ειδικές ώρες, ώστε το μήνυμα να μη χρειάζεται']],
    ]},

    { type: 'heading', text: 'Οι δικές σου αλλαγές δεν βγαίνουν κατευθείαν στον αέρα' },
    { type: 'paragraph', text: [
      'Όποιος μπαίνει για να διορθώσει ένα τηλέφωνο εκπλήσσεται που το τηλέφωνο δεν αλλάζει αμέσως. Η Google ελέγχει τις αλλαγές σου πριν τις εφαρμόσει, και δημοσιεύει τους χρόνους: «Edits usually take up to 10 minutes to review, but sometimes it can take up to 30 days.» (',
      {text: 'τι γίνεται με τις αλλαγές σου', href: GBP_EDITS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Υπάρχει και τρίτη έκβαση, πέρα από «πέρασε» και «περιμένει»: «Not approved: Google might not approve changes if it can’t confirm its accuracy.» (',
      {text: 'μη εγκεκριμένες αλλαγές', href: GBP_EDITS},
      '). Μια σωστή αλλαγή, δηλαδή, μπορεί να μην περάσει επειδή η Google δεν βρήκε πώς να την επιβεβαιώσει. Αν αλλάζεις διεύθυνση ή όνομα, βοηθάει να έχει αλλάξει ήδη στην ιστοσελίδα σου, στο τιμολόγιο και στην πρόσοψη. Εκεί κοιτάει.',
    ]},
    { type: 'paragraph', text: [
      'Τίποτα από αυτά δεν σου είναι διαθέσιμο χωρίς επαλήθευση: «To edit your business info on Google, such as business name or business hours, and interact with customers, you need to verify your business.» (',
      {text: 'επαλήθευση επιχείρησης', href: GBP_VERIFY},
      '). Η επαλήθευση είναι η γραμμή ανάμεσα στο «υπάρχει ένα προφίλ για σένα» και στο «το προφίλ είναι δικό σου».',
    ]},

    { type: 'heading', text: 'Ο οποιοσδήποτε μπορεί να προτείνει αλλαγή, και το ωράριο είναι μέσα' },
    { type: 'paragraph', text: [
      'Δεν χρειάζεται να έχεις καμία σχέση με μια επιχείρηση για να προτείνεις αλλαγή στα στοιχεία της: «You can add missing information, edit attributes, or report incorrect attributes for places in Google Maps» (',
      {text: 'επεξεργασία στοιχείων στο Maps', href: MAPS_EDIT},
      '). Και δεν είναι μόνο μικρολεπτομέρειες: στην ίδια σελίδα, ανάμεσα σε όσα μπορεί να αλλάξει ένας τρίτος, είναι και το ωράριο, «You can add, edit, or report when the place is open each day of the week», ενώ στις ίδιες επιλογές υπάρχει και το «Place closed or not here» (',
      {text: 'τι μπορεί να αλλάξει ένας χρήστης', href: MAPS_EDIT},
      '). Ημέρα προς ημέρα, από κάποιον που πέρασε έξω και σε βρήκε κλειστό.',
    ]},
    { type: 'paragraph', text: [
      'Η δικλείδα είναι ο έλεγχος, και δείχνει τι φοβάται η Google: «Edits that try to significantly change a business may be rejected. These edits may be fraudulent or indicate that the business should be removed.» (',
      {text: 'προτάσεις που απορρίπτονται', href: MAPS_EDIT},
      '). Πρόσεξε ότι αυτοί είναι ',
      {text: 'δύο διαφορετικοί μηχανισμοί', strong: true},
      ', σε δύο διαφορετικές σελίδες, και μπερδεύονται συνέχεια: η απόρριψη «γιατί δεν επιβεβαιώνεται η ακρίβεια» αφορά τις δικές σου αλλαγές· η απόρριψη «γιατί αλλάζει ουσιωδώς την επιχείρηση» αφορά τις προτάσεις τρίτων.',
    ]},
    { type: 'paragraph', text: [
      'Πάνω από όλα αυτά υπάρχει και η Google ως συντάκτης: «If sources report that your profile info is incorrect or outdated, Google may update your profile.» Και η πρόταση που κλείνει τη συζήτηση για το ποιος αποφασίζει είναι «You can’t manage all Google updates through your Business Profile» (',
      {text: 'ενημερώσεις από τη Google', href: GBP_UPDATES},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Υπάρχει τουλάχιστον ένας τρόπος να δεις τι πείραξε. Στον επεξεργαστή, το χρώμα του κειμένου το λέει: «Blue: Shows info changed by Google.» (',
      {text: 'χρώματα στον επεξεργαστή', href: GBP_UPDATES},
      '). Μαύρο ή λευκό σημαίνει ότι εκείνο το πεδίο δεν το άγγιξε. Είναι ο μοναδικός δείκτης «ποιος το έγραψε αυτό» που σου δίνεται, και αξίζει να τον κοιτάς κάθε φορά που μπαίνεις.',
    ]},

    { type: 'heading', text: 'Το ωράριο: τι είναι δική σου δήλωση και τι όχι' },
    { type: 'paragraph', text: [
      'Θα ακούσεις ότι το «ανοιχτά όλο το εικοσιτετράωρο» το βάζει μόνο του το σύστημα. Δεν βρήκαμε καμία σελίδα της Google που να το λέει, και η σελίδα που περιγράφει τη ρύθμιση λέει το αντίθετο, ότι είναι ενέργεια του διαχειριστή, ημέρα προς ημέρα: «Each day of the week that your business is open, click Opens at and then 24 hours and then Save.» (',
      {text: 'ρύθμιση ωραρίου', href: GBP_HOURS},
      '). Αν λοιπόν το προφίλ σου λέει ότι δεν κλείνεις ποτέ, η πρώτη υπόθεση δεν είναι «φταίει η Google»· είναι «ποιος έχει πρόσβαση εδώ μέσα».',
    ]},
    { type: 'paragraph', text: [
      'Αυτό δεν σημαίνει ότι το ωράριο είναι αποκλειστικά δικό σου. Σημαίνει ότι οι τεκμηριωμένοι τρόποι να αλλάξει χωρίς εσένα είναι τρεις: η πρόταση ενός χρήστη μέσα από τον χάρτη, η αυτόματη ενημέρωση της Google επειδή κάποια πηγή ανέφερε ότι το ωράριο είναι παλιό, και η προειδοποίηση που εμφανίζει η ίδια σε ορισμένες αργίες, λέγοντας στους χρήστες ότι το ωράριό σου ίσως διαφέρει εκείνη τη μέρα (',
      {text: 'αργίες στην Google', href: GBP_HOLIDAYS},
      '). Η λίστα των αργιών περιλαμβάνει και ελληνικές, δηλαδή αυτό θα το δεις.',
    ]},
    { type: 'paragraph', text: [
      'Για τις προσωρινές αλλαγές υπάρχει ξεχωριστό εργαλείο, ακριβώς για να μην πειράζεις το κανονικό σου ωράριο: «When your hours of operation change for a brief period of time, like for a special event, you can set special hours so that your regular hours don’t change.» (',
      {text: 'ειδικές ώρες', href: GBP_SPECIAL_HOURS},
      '). Είναι η σωστή απάντηση στο Πάσχα, στον Δεκαπενταύγουστο και στη μέρα που κάνεις απογραφή.',
    ]},
    { type: 'paragraph', text: [
      'Έχουν όμως όριο, γραμμένο: «If your business is closed for 7 or more days in a row, or will be closed for an unknown period of time, you should mark your business as Temporarily closed.» (',
      {text: 'όριο ειδικών ωρών', href: GBP_SPECIAL_HOURS},
      '). Για μια εβδομάδα διακοπών και πάνω δεν βάζεις ειδικές ώρες. Σημαίνεις την επιχείρηση προσωρινά κλειστή.',
    ]},

    { type: 'heading', text: 'Τα χαρακτηριστικά που δεν τα γράφεις εσύ' },
    { type: 'paragraph', text: [
      'Κάτω από τα βασικά στοιχεία, το προφίλ έχει δεκάδες μικρά χαρακτηριστικά: πρόσβαση για αμαξίδιο, παράδοση, τρόποι πληρωμής. Μοιάζουν με πεδία φόρμας· δεν είναι όλα. «You can directly edit some attributes about your business, but there are attributes that may be populated based on inputs from customers who visit your business.» (',
      {text: 'χαρακτηριστικά επιχείρησης', href: GBP_ATTRIBUTES},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Υπάρχει και δεύτερος περιορισμός, που εξηγεί γιατί κάποιος σε άλλη χώρα βλέπει ρυθμίσεις που εσύ δεν βλέπεις: «Some attributes can only be changed in certain locations, countries, or business categories.» (',
      {text: 'περιορισμοί ανά χώρα και κατηγορία', href: GBP_ATTRIBUTES},
      '). Η κατηγορία σου, δηλαδή, δεν καθορίζει μόνο πώς σε καταλαβαίνει η Google· καθορίζει και ποια κουμπιά θα υπάρχουν καν στη διάθεσή σου.',
    ]},
    { type: 'paragraph', text: [
      'Το πιο ακραίο «δεν το έβαλα εγώ» είναι οι σύνδεσμοι υπηρεσιών, που εμφανίζονται αυτόματα: «These links are provided and updated by third-party partners or through automated data from Google.» (',
      {text: 'σύνδεσμοι τοπικής επιχείρησης', href: GBP_LINKS},
      '). Αν πελάτης σου παραπονεθεί ότι έκανε κράτηση από κουμπί που δεν αναγνωρίζεις, αυτή είναι η εξήγηση. Είναι και ο λόγος να κοιτάς το προφίλ με τα μάτια του πελάτη.',
    ]},

    { type: 'heading', text: 'Μια κακή κριτική: τι δουλεύει και τι όχι' },
    { type: 'paragraph', text: [
      'Ξεκινάμε από αυτό που δεν γίνεται, γιατί γλιτώνει τον περισσότερο χαμένο χρόνο: «You can’t contact someone who left an inappropriate review or directly delete someone else’s review.» (',
      {text: 'κριτικές στο Google Maps', href: MAPS_REVIEWS},
      '). Δεν υπάρχει κουμπί διαγραφής, και δεν υπάρχει τρόπος να μιλήσεις στον συντάκτη μέσα από την πλατφόρμα.',
    ]},
    { type: 'paragraph', text: [
      'Αναφορά μπορείς να κάνεις, με σαφές κριτήριο: «You can report any review, but only those that violate Google policies are eligible for removal.» Υπάρχει και μια οδηγία που κάνει τη διαφορά ανάμεσα σε αναφορά που εξετάζεται σοβαρά και σε αναφορά που θορυβεί: «Do not report a review just because you disagree with it or dislike it.» (',
      {text: 'αναφορά ακατάλληλων κριτικών', href: GBP_REPORT_REVIEWS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Αν περιμένεις ότι η Google θα κρίνει ποιος έχει δίκιο, μην περιμένεις: «Google doesn’t get involved in conflict between businesses and customers.» Και αν η κριτική δεν αφαιρεθεί έχεις ',
      {text: 'μία', strong: true},
      ' ευκαιρία ακόμη: «If a flagged review doesn’t qualify for removal, submit a one-time appeal.» (',
      {text: 'ένσταση', href: GBP_REPORT_REVIEWS},
      '). Μία, όχι όσες αντέχεις. Η αξιολόγηση παίρνει συνήθως αρκετές ημέρες.',
    ]},
    { type: 'paragraph', text: [
      'Το εργαλείο που πραγματικά έχεις είναι η δημόσια απάντηση, και θέλει επαληθευμένη επιχείρηση: «Before you can reply to reviews, you must verify your business.» Για όσους διστάζουν νομίζοντας ότι εκτίθενται προσωπικά, ισχύει και το «It will appear like your business replied, and your personal name won’t be shown.» (',
      {text: 'διαχείριση κριτικών', href: GBP_MANAGE_REVIEWS},
      '). Απαντάει η επιχείρηση, όχι εσύ ονομαστικά.',
    ]},
    { type: 'paragraph', text: [
      'Και ο λόγος που η καλή απάντηση αξίζει τον κόπο: ο ίδιος ο συντάκτης μπορεί να επεξεργαστεί ή να διαγράψει τη δική του κριτική οποιαδήποτε στιγμή. Η σελίδα του Maps του δίνει «Edit review» και «Delete review» (',
      {text: 'επεξεργασία της δικής σου κριτικής', href: MAPS_REVIEWS},
      '). Δεν το ελέγχεις εσύ, αλλά είναι ο μόνος δρόμος από τον οποίο φεύγει μια άδικη κριτική χωρίς παρέμβαση της Google.',
    ]},
    { type: 'paragraph', text: [
      'Για τις φωτογραφίες ισχύει η ίδια λογική: «If you notice that a photo or video uploaded by a customer violates our policies, you can request its removal.» Και η έκβαση δεν είναι δεδομένη, «The photo or video is then reviewed and may possibly be removed from your Business Profile.» (',
      {text: 'αναφορά φωτογραφιών', href: GBP_PHOTOS},
      '). Ζητάς αφαίρεση· δεν αφαιρείς.',
    ]},

    { type: 'table', caption: 'Οι έξι κινήσεις μετά από μια κακή κριτική, και τι λέει η τεκμηρίωση για την καθεμία.', head: ['Η κίνηση', 'Δουλεύει;', 'Τι λέει η τεκμηρίωση της Google'], rows: [
      [['Να τη διαγράψεις'], ['Όχι'], ['Δεν διαγράφεις κριτική άλλου ούτε επικοινωνείς με όποιον την έγραψε']],
      [['Να την αναφέρεις επειδή διαφωνείς'], ['Όχι'], ['Λέει ρητά να μην αναφέρεις κριτική επειδή διαφωνείς ή δεν σου αρέσει']],
      [['Να την αναφέρεις για παραβίαση πολιτικής'], ['Ίσως'], ['Επιλέξιμες για αφαίρεση είναι μόνο όσες παραβιάζουν πολιτική, με μία ένσταση αν δεν αφαιρεθεί']],
      [['Να απαντήσεις δημόσια'], ['Ναι'], ['Θέλει επαληθευμένη επιχείρηση· απαντά η επιχείρηση, χωρίς το προσωπικό σου όνομα']],
      [['Να δώσεις κίνητρο σε πελάτη για θετική κριτική'], ['Όχι, και είναι επικίνδυνο'], ['Θεωρείται ψευδές και παραπλανητικό περιεχόμενο και απαγορεύεται αυστηρά']],
      [['Να ζητήσεις από τον συντάκτη να την ξανακοιτάξει'], ['Ο μόνος δρόμος που ελέγχει άνθρωπος'], ['Ο συντάκτης μπορεί να επεξεργαστεί ή να διαγράψει τη δική του κριτική']],
    ]},

    { type: 'heading', text: 'Η γραμμή που δεν αξίζει να περάσεις' },
    { type: 'paragraph', text: [
      'Κάθε ιδιοκτήτης σκέφτεται κάποια στιγμή τη συντόμευση: μια μικρή έκπτωση σε όποιον αφήσει πέντε αστέρια. Η Google το έχει προβλέψει ονομαστικά: «Offering incentives, like free or discounted goods or services, in exchange for customers to post reviews, change reviews, or remove negative reviews is considered fake & misleading content and is strictly prohibited.» (',
      {text: 'κριτικές και κίνητρα', href: GBP_MORE_REVIEWS},
      '). Μέσα στην ίδια πρόταση χωράει και το «να αφαιρέσει αρνητική κριτική», δηλαδή και η φιλική διευθέτηση με αντάλλαγμα.',
    ]},
    { type: 'paragraph', text: [
      'Ο κανόνας από πίσω αφορά όλο το Maps: «Contributions to Google Maps should reflect a genuine experience at a place or business.» (',
      {text: 'απαγορευμένο περιεχόμενο', href: UGC_PROHIBITED},
      '). Δεν είναι κανόνας ποιότητας· είναι κανόνας γνησιότητας. Θετική κριτική από πραγματικό πελάτη είναι εντάξει· θετική κριτική από τον ξάδερφό σου δεν είναι, όσο καλογραμμένη κι αν είναι.',
    ]},
    { type: 'paragraph', text: [
      'Οι συνέπειες είναι δημοσιευμένες. Το προφίλ μπορεί να πάψει να δέχεται νέες κριτικές: «Business Profile will not be able to receive new reviews or ratings for set period of time». Μπορεί επίσης να αποκτήσει δημόσιο σήμα ντροπής: «Business Profile will display a warning to let consumers know that fake reviews were removed» (',
      {text: 'περιορισμοί προφίλ', href: GBP_RESTRICTIONS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Μια διευκρίνιση που χάνεται εύκολα: οι περιορισμοί αφορούν την επιχείρηση που ',
      {text: 'παραβίασε', strong: true},
      ' την πολιτική, αυτήν που ζήτησε ή αγόρασε κριτικές. Δεν είναι τιμωρία για επιχείρηση που ',
      {text: 'δέχτηκε', strong: true},
      ' πλαστές κριτικές από τρίτον. Αν σου το παρουσιάσουν ανάποδα για να σου πουλήσουν «προστασία», σου λένε ψέματα. Υπάρχει, τέλος, και προειδοποίηση πριν από το χτύπημα: «We will notify business owners via email if we plan to apply a restriction to their profile.» (',
      {text: 'ειδοποίηση πριν τον περιορισμό', href: GBP_RESTRICTIONS},
      '). Σημαίνει ότι το email του λογαριασμού πρέπει να το διαβάζει κάποιος δικός σου.',
    ]},

    { type: 'cta', heading: 'Αν θέλεις να δεις τι δείχνει σήμερα το δικό σου προφίλ', text: 'Το κοιτάμε μαζί με την ιστοσελίδα σου και σου λέμε γραπτά τι είναι δική σου δήλωση, τι το έχει γράψει κάποιος άλλος και τι λείπει.', label: 'Δες τι περιλαμβάνει', href: '/el/offers/website-seo' },

    { type: 'heading', text: 'Τι συνιστά αναστολή προφίλ' },
    { type: 'paragraph', text: [
      'Η βάση είναι μία πρόταση: «Google reserves the right to suspend access to Business Profiles on Google or other Google Services to individuals or businesses that violate these guidelines.» (',
      {text: 'οδηγίες παρουσίασης', href: GBP_GUIDELINES},
      '). Οι οδηγίες δεν είναι αφηρημένες, και οι τρεις που παραβιάζονται συνήθως είναι πάντα οι ίδιες.',
    ]},
    { type: 'paragraph', text: [
      {text: 'Πρώτος: το όνομα.', strong: true},
      ' «Your name should reflect your business’s real-world name, as used consistently on your storefront, website, stationery, and as known to customers.» Και η συνέπεια, ρητά: «Including unnecessary information in your business name isn’t permitted, and could result in the suspension of your Business Profile.» (',
      {text: 'κανόνας ονόματος', href: GBP_GUIDELINES},
      '). Δηλαδή το να προσθέσεις στην επωνυμία σου «Κατασκευή Ιστοσελίδων Θεσσαλονίκη» δεν είναι έξυπνη κίνηση· είναι εκτεθειμένη κίνηση.',
    ]},
    { type: 'paragraph', text: [
      {text: 'Δεύτερος: ένα προφίλ.', strong: true},
      ' «There should only be one profile per business, as this can cause problems with how your information displays on Google Maps and Search.» (',
      {text: 'ένα προφίλ ανά επιχείρηση', href: GBP_GUIDELINES},
      '). Η ελληνική έκδοση της σελίδας το λέει με τα ίδια λόγια: «Θα πρέπει να υπάρχει μόνο ένα προφίλ ανά επιχείρηση.» (',
      {text: 'ελληνική έκδοση των οδηγιών', href: GBP_GUIDELINES_EL},
      '). Τα διπλά σπάνια φτιάχνονται με κακή πρόθεση. Φτιάχνονται επειδή κάποιος δεν βρήκε τον παλιό λογαριασμό.',
    ]},
    { type: 'paragraph', text: [
      {text: 'Τρίτος: η επιλεξιμότητα.', strong: true},
      ' Το προφίλ δεν είναι για κάθε δραστηριότητα: «To qualify for a Business Profile, a business must make in-person contact with customers during its stated hours.» (',
      {text: 'προϋποθέσεις επιλεξιμότητας', href: GBP_ELIGIBILITY},
      '). Αν δουλεύεις χωρίς χώρο που δέχεται πελάτες, αυτή είναι η πρόταση που θα σου εξηγήσει γιατί κάτι δεν περνάει.',
    ]},
    { type: 'paragraph', text: [
      'Αν το χειρότερο συμβεί, όταν ένα προφίλ αφαιρεθεί ισχύει το «The public can’t go to the profile.» (',
      {text: 'προφίλ σε αναστολή', href: GBP_SUSPENDED},
      '). Δεν μπορούν να ενεργήσουν πάνω του ούτε ο ιδιοκτήτης ούτε οι διαχειριστές. Δύο πράγματα αξίζει να τα ξέρεις ',
      {text: 'πριν', strong: true},
      ' τα χρειαστείς: «Do not create a new Business Profile for the same business while your appeal is under review.» και, καθαρά πρακτικό, «Once you open the evidence form, you must submit it within 60 minutes or it won’t be attached.» (',
      {text: 'ένσταση και αποδεικτικά', href: GBP_SUSPENDED},
      '). Μάζεψε τα αποδεικτικά πριν ανοίξεις τη φόρμα, όχι μετά.',
    ]},

    { type: 'heading', text: 'Αν το προφίλ το διαχειρίζεται κάποιος άλλος' },
    { type: 'paragraph', text: [
      'Πολλά ελληνικά προφίλ τα άνοιξε ένας διαφημιστής, ένας ανιψιός ή μια εταιρεία κατασκευής ιστοσελίδων, με τον δικό της λογαριασμό. Η Google έχει γραμμένη πολιτική γι’ αυτό, και είναι υπέρ σου: «Only profile owners can control who has access and can update permissions at any time.» (',
      {text: 'συνεργασία με τρίτους', href: GBP_THIRD_PARTY_TIPS},
      '). Και για τη διαχείριση από τρίτον: «You can claim and manage a Business Profile only if you obtained the business owner’s express consent as required by the applicable law.» (',
      {text: 'πολιτική για τρίτους', href: GBP_THIRD_PARTY_POLICY},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Στην ίδια πολιτική είναι και η πρόταση που αξίζει να έχεις πρόχειρη σε μια δύσκολη συζήτηση: «Changes or disablement of profile features without the business owner’s consent is prohibited.» Εκεί είναι και εκείνη που ξεκαθαρίζει τι δεν επιτρέπεται να σου υποσχεθεί κανείς: «Guarantees top placement on Google.» (',
      {text: 'απαγορευμένοι ισχυρισμοί τρίτων', href: GBP_THIRD_PARTY_POLICY},
      '). Κατά τη Google, αυτό είναι παράδειγμα παραβίασης, όχι πωλησιακό επιχείρημα.',
    ]},
    { type: 'paragraph', text: [
      'Αν το προφίλ σου το κατέχει σήμερα άλλος λογαριασμός, υπάρχει διαδικασία διεκδίκησης, με προθεσμία που τρέχει για τον απέναντι: «The current profile owner is then notified by email and has 3 days to respond.» Και αν απορριφθεί, δεν τελείωσε: «You’ll get a rejection email but you can still suggest an edit to the profile. You can also try to appeal the decision.» (',
      {text: 'αίτημα ιδιοκτησίας', href: GBP_OWNERSHIP},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Και αν χρειαστεί να περάσεις από επαλήθευση, ο έλεγχος έχει δικό της χρόνο: «To help maintain the integrity of your Business Profile, verification review can take up to 5 business days.» (',
      {text: 'χρόνος επαλήθευσης', href: GBP_VERIFY},
      ').',
    ]},

    { type: 'heading', text: 'Και η κατάταξη; Τι μπορεί και τι δεν μπορεί να σου υποσχεθεί κανείς' },
    { type: 'paragraph', text: [
      'Επειδή αργά ή γρήγορα κάποιος θα σου πουλήσει «πρώτη θέση στον χάρτη», η πιο χρήσιμη πρόταση όλου του άρθρου είναι αυτή: «There’s no way to request or pay for a better local ranking on Google.» (',
      {text: 'τοπική κατάταξη', href: GBP_LOCAL_RANKING},
      '). Δεν είναι δεοντολογία· είναι περιγραφή του συστήματος από αυτόν που το φτιάχνει.',
    ]},
    { type: 'paragraph', text: [
      'Η ίδια σελίδα ονοματίζει τους παράγοντες (συνάφεια, απόσταση και δημοτικότητα), και ο τρίτος είναι ο πιο παρεξηγημένος: «Prominence means how well-known a business is.» (',
      {text: 'δημοτικότητα', href: GBP_LOCAL_RANKING},
      '). Είναι το πόσο γνωστός είσαι, κάτι που δεν ρυθμίζεται σε ένα πεδίο. Το μόνο που λέει η Google ότι εξαρτάται από σένα είναι το προφανές: «Businesses with complete and accurate info are more likely to show up in local search results.» (',
      {text: 'παράγοντες τοπικής κατάταξης', href: GBP_LOCAL_RANKING},
      '). Πλήρες και σωστό προφίλ, όχι κόλπο.',
    ]},
    { type: 'paragraph', text: [
      'Και για κάθε συνεργάτη που υπόσχεται θέσεις, το γράφει η ίδια: «Third parties can’t promise nor directly influence your business’s ranking on Google Search or Maps.» (',
      {text: 'τι δεν μπορεί να υποσχεθεί ένας τρίτος', href: GBP_THIRD_PARTY_TIPS},
      '). Ισχύει και για εμάς, και το γράφουμε επίτηδες σε δικό μας κείμενο.',
    ]},
    { type: 'paragraph', text: [
      'Δύο πράγματα δεν χωρούσαν εδώ. Αν οι πελάτες σου είναι τοπικοί, τι αλλάζει στην ίδια την ιστοσελίδα το πιάνει το κείμενο για την ',
      {text: 'κατασκευή ιστοσελίδων στη Θεσσαλονίκη', href: '/el/blog/kataskevi-istoselidon-thessaloniki'},
      '. Και για το τι μετράει πραγματικά η επισκεψιμότητά σου από την αναζήτηση, υπάρχει το κείμενο για το ',
      {text: 'τι σου λέει και τι δεν σου λέει το Google Search Console', href: '/el/blog/google-search-console-ti-sou-leei'},
      '.',
    ]},

    { type: 'heading', text: 'Τι να κάνεις, με σειρά' },
    { type: 'list', ordered: true, items: [
      [{text: 'Δες ποιος έχει πρόσβαση.', strong: true}, ' Πριν από οτιδήποτε άλλο. Αν ο λογαριασμός που κατέχει το προφίλ δεν είναι δικός σου, τα υπόλοιπα βήματα τα κάνει άλλος άνθρωπος.'],
      [{text: 'Άνοιξε τον επεξεργαστή και ψάξε μπλε κείμενο.', strong: true}, ' Είναι ο μόνος δείκτης για το τι άλλαξε η Google μόνη της.'],
      [{text: 'Έλεγξε το ωράριο σαν πελάτης.', strong: true}, ' Από έναν χάρτη σε κινητό που δεν είναι συνδεδεμένο στον λογαριασμό σου. Όχι από τον επεξεργαστή.'],
      [{text: 'Βάλε ειδικές ώρες για την επόμενη αργία.', strong: true}, ' Και για διακοπές μιας εβδομάδας και πάνω, σήμανε προσωρινό κλείσιμο.'],
      [{text: 'Καθάρισε το όνομα και ψάξε για δεύτερο προφίλ.', strong: true}, ' Αν το όνομα έχει μέσα πόλη ή υπηρεσία που δεν υπάρχει στην πινακίδα σου, αφαίρεσέ τα. Τα διπλά προφίλ είναι πιο συχνά από όσο νομίζεις.'],
      [{text: 'Απάντησε στις τελευταίες κριτικές, και στις καλές.', strong: true}, ' Η Google γράφει ότι ένα μείγμα θετικών και αρνητικών σχολίων φαίνεται συχνά πιο αξιόπιστο, και συνιστά να απαντάς.'],
    ]},
    { type: 'paragraph', text: [
      'Το συμπέρασμα δεν είναι ότι δεν ελέγχεις τίποτα. Είναι ότι ελέγχεις ',
      {text: 'λιγότερα απ’ όσα νομίζεις και περισσότερα απ’ όσα κάνεις', strong: true},
      '. Η δήλωσή σου είναι το μισό. Το άλλο μισό το γράφουν άλλοι, και το μόνο που μπορείς να κάνεις είναι να το κοιτάς αρκετά συχνά ώστε να το προλαβαίνεις.',
    ]},

    { type: 'sources', heading: 'Πηγές', items: [
      {label: 'Google Business Profile Help, Guidelines for representing your business on Google (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_GUIDELINES},
      {label: 'Βοήθεια Επιχειρηματικού προφίλ Google, Οδηγίες για την παρουσίαση της επιχείρησής σας στην Google (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_GUIDELINES_EL},
      {label: 'Google Business Profile Help, Understand how Google sources & uses info in Business Profiles & local search results (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_SOURCES},
      {label: 'Google Business Profile Help, Understand Google updates on your Business Profile (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_UPDATES},
      {label: 'Google Business Profile Help, Understand what happens to your Business Profile edits (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_EDITS},
      {label: 'Google Maps Help, Edit business information in Google Maps (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: MAPS_EDIT},
      {label: 'Google Business Profile Help, Manage your business attributes (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_ATTRIBUTES},
      {label: 'Google Business Profile Help, Manage your local business links (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_LINKS},
      {label: 'Google Business Profile Help, How to set business hours or mark a closure (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_HOURS},
      {label: 'Google Business Profile Help, How to set Special hours (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_SPECIAL_HOURS},
      {label: 'Google Business Profile Help, About holidays on Google (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_HOLIDAYS},
      {label: 'Google Maps Help, Add, edit, or delete Google Maps reviews & ratings (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: MAPS_REVIEWS},
      {label: 'Google Business Profile Help, Manage customer reviews (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_MANAGE_REVIEWS},
      {label: 'Google Business Profile Help, Report inappropriate reviews on your Business Profile (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_REPORT_REVIEWS},
      {label: 'Google Business Profile Help, Tips to get more reviews (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_MORE_REVIEWS},
      {label: 'Maps User Generated Content Policy Help, Prohibited & restricted content (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: UGC_PROHIBITED},
      {label: 'Google Business Profile Help, Business Profile restrictions for policy violations (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_RESTRICTIONS},
      {label: 'Google Business Profile Help, Report inappropriate photos or videos on your Business Profile (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_PHOTOS},
      {label: 'Google Business Profile Help, Fix suspended or disabled profiles (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_SUSPENDED},
      {label: 'Google Business Profile Help, Business eligibility and ownership guidelines (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_ELIGIBILITY},
      {label: 'Google Business Profile Help, Verify your business on Google (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_VERIFY},
      {label: 'Google Business Profile Help, Request ownership of a Business Profile (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_OWNERSHIP},
      {label: 'Google Business Profile Help, Tips for working with third parties to manage your Business Profile (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_THIRD_PARTY_TIPS},
      {label: 'Google Business Profile Help, Business Profile third-party policies (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_THIRD_PARTY_POLICY},
      {label: 'Google Business Profile Help, Improve your local ranking on Google (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GBP_LOCAL_RANKING},
    ]},
  ],
};

export default post;
