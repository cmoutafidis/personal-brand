import type {BlogPost} from '@/types/blog';

// ⚠️ THE H1 AND metaTitle DELIBERATELY DO NOT SAY «κατασκευή ιστοσελίδων Θεσσαλονίκη».
// That exact phrase is already the title tag AND the H1 of /el/offers/website-seo — the money
// page this article links down into. They were competing for one query and Google would have
// had to drop one of them. The offer page keeps the commercial phrase; this article takes the
// informational one. The slug keeps the words, which is fine — a slug is not a title tag.
// Do not "restore" the old title.

// Άρθρο 04. Θέμα: Η ΙΣΤΟΣΕΛΙΔΑ σε τοπικό πλαίσιο. Το Επιχειρηματικό προφίλ (επαλήθευση,
// κατηγορίες, φωτογραφίες, κριτικές, ωράρια) είναι ξεχωριστό κείμενο και δεν επαναλαμβάνεται εδώ.
// Κανόνες που ζουν μέσα στο κείμενο: καμία τιμή, καμία υπόσχεση διάρκειας, κανένα αποτέλεσμα
// πελάτη, καμία υπόσχεση κατάταξης. Κάθε ισχυρισμός για το πώς δουλεύει η Google είναι
// παράθεμα από την τεκμηρίωσή της, με URL που φορτώθηκε στις 2 Σεπτεμβρίου 2026.

const G_LOCAL = 'https://support.google.com/business/answer/7091?hl=en';
const G_LOCAL_EL = 'https://support.google.com/business/answer/7091?hl=el';
const G_GUIDE = 'https://support.google.com/business/answer/3038177?hl=en';
const G_GUIDE_EL = 'https://support.google.com/business/answer/3038177?hl=el';
const G_PROFILE_SOURCES = 'https://support.google.com/business/answer/2721884?hl=en';
const G_AREA = 'https://support.google.com/business/answer/9157481?hl=en';
const G_UPDATES = 'https://support.google.com/business/answer/3480441?hl=en';
const G_PROFILE_SITE = 'https://support.google.com/business/answer/3039617?hl=en';
const G_LOCATION = 'https://support.google.com/websearch/answer/179386?hl=en';
const G_GSC = 'https://support.google.com/webmasters/answer/7576553?hl=en';
const G_MAPS_EDIT = 'https://support.google.com/maps/answer/7084895?hl=en';
const G_SD_LOCAL = 'https://developers.google.com/search/docs/appearance/structured-data/local-business';
const G_SD_ORG = 'https://developers.google.com/search/docs/appearance/structured-data/organization';
const G_SD_POLICIES = 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies';
const G_SPAM = 'https://developers.google.com/search/docs/essentials/spam-policies';
const G_SEO_NEED = 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo';
const G_HELPFUL = 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content';
const G_MULTIREGION = 'https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites';
const G_LOCALIZED = 'https://developers.google.com/search/docs/specialty/international/localized-versions';
const G_PAGE_EXP = 'https://developers.google.com/search/docs/appearance/page-experience';
const G_SITE_NAMES = 'https://developers.google.com/search/docs/appearance/site-names';
const G_MOBILE = 'https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing';
const W_VITALS = 'https://web.dev/articles/vitals';
const G_RANKING = 'https://www.google.com/search/howsearchworks/how-search-works/ranking-results/';

const post: BlogPost = {
  id: 'kataskevi-istoselidon-thessaloniki',
  slug: 'kataskevi-istoselidon-thessaloniki',
  title: 'Τοπικά αποτελέσματα στη Θεσσαλονίκη: τι αλλάζει όταν οι πελάτες σου είναι τοπικοί',
  metaTitle: 'Τοπικά αποτελέσματα Θεσσαλονίκη: τι αλλάζει',
  excerpt: 'Τα τοπικά αποτελέσματα κρίνονται με άλλα κριτήρια και τρέφονται από άλλη πηγή. Τι σημαίνει αυτό πρακτικά για την ιστοσελίδα μιας τοπικής επιχείρησης.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 29,
  tags: ['Ιστοσελίδες', 'Αναζήτηση', 'Θεσσαλονίκη'],
  body: [
    { type: 'paragraph', text: [
      'Όταν οι πελάτες σου είναι άνθρωποι που μπορούν να έρθουν στο κατάστημα ή να σε φωνάξουν σπίτι τους, αλλάζει κάτι πιο βαθύ από το κείμενο της αρχικής σελίδας. Ένα μεγάλο κομμάτι της αναζήτησης παύει να κρίνεται με τα κριτήρια που ξέρεις. Τα ',
      {text: 'τοπικά αποτελέσματα', strong: true},
      ' κρίνονται με ',
      {text: 'άλλα κριτήρια', strong: true},
      ' και τρέφονται από ',
      {text: 'άλλη πηγή δεδομένων', strong: true},
      '. Και σε αυτό το κομμάτι, αυτό που εμφανίζεται στην οθόνη του πελάτη δεν είναι η ιστοσελίδα σου.',
    ]},
    { type: 'paragraph', text: [
      'Η Google το γράφει σε μία πρόταση: «Local results are mainly based on relevance, distance, and popularity. Together, these factors help Google find the best match for customers’ searches.» (',
      {text: 'Tips to improve your local ranking', href: G_LOCAL},
      '). Καμία από τις τρεις λέξεις δεν είναι «τίτλος σελίδας», «ταχύτητα» ή «σχεδιασμός». Και για το τι δείχνει η Google εκεί, η ίδια πάλι: «Google uses business information to help surface relevant local search results across Google, such as in Google Maps and Search.» (',
      {text: 'How Google sources & uses info in Business Profiles', href: G_PROFILE_SOURCES},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Αυτό δεν σημαίνει ότι η ιστοσελίδα δεν μετράει. Σημαίνει ότι ',
      {text: 'αλλάζει η δουλειά της', strong: true},
      ': από «το μέρος όπου σε βρίσκουν» γίνεται «το μέρος που επιβεβαιώνει ποιος είσαι, πού είσαι και τι κάνεις». Παρακάτω είναι τι αλλάζει τεχνικά, με παραπομπή σε κάθε σημείο. Γράφεται από τη Θεσσαλονίκη, που τυχαίνει να είναι και η έδρα μας.',
    ]},
    { type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε πρόταση της Google που παρατίθεται εδώ διαβάστηκε εκείνη τη μέρα στη σελίδα που τη συνοδεύει. Το κείμενο δεν αναφέρει τιμές, χρόνους παράδοσης ή αποτελέσματα πελατών.',
    ]},
    { type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Σε τι διαφέρουν τα τοπικά αποτελέσματα από τα υπόλοιπα;', a: 'Σε δύο πράγματα. Στα κριτήρια: η Google γράφει ότι βασίζονται κυρίως στη συνάφεια, την απόσταση και τη δημοτικότητα. Και στην πηγή: τα παράγει από πληροφορία Επιχειρηματικού προφίλ. Η ιστοσελίδα τρέφει αυτή την πληροφορία αντί να την αντικαθιστά.'},
      {q: 'Αν βάλω «Θεσσαλονίκη» παντού στο κείμενο, θα ανέβω;', a: 'Οι πολιτικές ανεπιθύμητου περιεχομένου της Google ονομάζουν ρητά συσσώρευση λέξεων-κλειδιών τα μπλοκ κειμένου που απαριθμούν πόλεις και περιοχές για τις οποίες προσπαθεί να καταταγεί μια σελίδα. Μία αναφορά μέσα σε πρόταση με νόημα είναι άλλο πράγμα από μια λίστα συνοικιών στο υποσέλιδο.'},
      {q: 'Χρειάζομαι ελληνική φιλοξενία για να με βρίσκουν εδώ;', a: 'Η Google αναφέρει την τοποθεσία του διακομιστή ως σήμα, αλλά στην ίδια παράγραφο προσθέτει ότι δεν είναι οριστικό σήμα, επειδή πολλοί ιστότοποι χρησιμοποιούν δίκτυα διανομής περιεχομένου.'},
      {q: 'Μπορώ να πληρώσω για καλύτερη τοπική θέση;', a: 'Η Google γράφει ότι δεν υπάρχει τρόπος να ζητήσεις ή να πληρώσεις για καλύτερη τοπική κατάταξη, και ότι κρατά εμπιστευτικές τις λεπτομέρειες του αλγορίθμου. Γράφει επίσης ότι η διαφήμιση δεν επηρεάζει την παρουσία ενός ιστότοπου στα οργανικά αποτελέσματα.'},
      {q: 'Μπορώ να δηλώσω περιοχή εξυπηρέτησης «ακτίνα Χ χιλιομέτρων»;', a: 'Όχι. Η τεκμηρίωση λέει ότι δεν μπορείς να ορίσεις την περιοχή εξυπηρέτησης ως ακτίνα γύρω από την επιχείρηση· την ορίζεις με πόλεις, ταχυδρομικούς κώδικες ή άλλον τύπο περιοχής, με ανώτατο όριο είκοσι περιοχών.'},
      {q: 'Πώς ελέγχω σε ποια θέση είμαι;', a: 'Πάντως όχι ψάχνοντας ο ίδιος. Η Google γράφει ότι τα αποτελέσματα είναι συγκεκριμένα για τον χρόνο, τον τόπο, τη συσκευή και το πρόσφατο ιστορικό αυτού που ψάχνει. Στο Search Console η μικρότερη γεωγραφική διάσταση των αναφορών είναι η χώρα.'},
    ]},

    { type: 'heading', text: 'Τα τρία κριτήρια, και πού ακουμπάει η ιστοσελίδα σε καθένα' },
    { type: 'paragraph', text: [
      'Η ελληνική έκδοση της ίδιας σελίδας λέει ακριβώς το ίδιο: «Τα τοπικά αποτελέσματα βασίζονται κυρίως στη συνάφεια, την απόσταση και τη δημοτικότητα. Συνολικά, αυτοί οι παράγοντες βοηθούν την Google να βρίσκει την καλύτερη αντιστοίχιση για τις αναζητήσεις των πελατών.» (',
      {text: 'Συμβουλές για τη βελτίωση της τοπικής κατάταξης', href: G_LOCAL_EL},
      '). Κρατάμε αυτούς τους τρεις όρους σε όλο το κείμενο.',
    ]},
    { type: 'paragraph', text: [
      'Από τα τρία, το ένα δεν το ελέγχεις καθόλου, το δεύτερο το ελέγχεις μόνο έμμεσα, και το τρίτο είναι το μοναδικό σημείο όπου η ιστοσελίδα σου παίζει ρόλο που περιγράφεται ρητά στην τεκμηρίωση. Για τη δημοτικότητα η Google γράφει: «Prominence means how well-known a business is. Prominent places are more likely to show up in search results. This factor’s also based on info like how many websites link to your business and how many reviews you have.» (',
      {text: 'Tips to improve your local ranking', href: G_LOCAL},
      ').',
    ]},
    { type: 'table', caption: 'Τα τρία κριτήρια των τοπικών αποτελεσμάτων και τι μπορεί να κάνει η ιστοσελίδα για καθένα.', head: ['Κριτήριο', 'Τι λέει η τεκμηρίωση', 'Τι ακουμπάει η ιστοσελίδα'], rows: [
      [
        [{text: 'Συνάφεια', strong: true}],
        ['Πόσο ταιριάζει η επιχείρηση με αυτό που ψάχνει ο χρήστης'],
        ['Έμμεσα: το σαρωμένο περιεχόμενό σου είναι μία από τις πηγές από τις οποίες συντίθεται το προφίλ'],
      ],
      [
        [{text: 'Απόσταση', strong: true}],
        ['Πόσο μακριά είναι η επιχείρηση από τον πελάτη που ψάχνει'],
        ['Καθόλου. Η διεύθυνση είναι γεγονός, όχι επιλογή κειμένου'],
      ],
      [
        [{text: 'Δημοτικότητα', strong: true}],
        ['Πόσο γνωστή είναι η επιχείρηση· μετρά και πόσοι ιστότοποι συνδέονται με αυτήν'],
        ['Άμεσα: η ιστοσελίδα είναι το πράγμα με το οποίο συνδέονται οι άλλοι ιστότοποι'],
      ],
    ]},
    { type: 'paragraph', text: [
      'Το πρακτικό συμπέρασμα είναι αντίθετο από αυτό που ζητάει ο περισσότερος κόσμος. Δεν χρειάζεσαι περισσότερες λέξεις «Θεσσαλονίκη» μέσα στη σελίδα. Χρειάζεσαι μια ιστοσελίδα που να αξίζει να τη συνδέσει κάποιος: ο σύλλογος, ο προμηθευτής, ο τοπικός ιστότοπος που γράφει για τον κλάδο σου.',
    ]},

    { type: 'heading', text: 'Η απόσταση μετριέται από τον πελάτη, όχι από το κέντρο της πόλης' },
    { type: 'paragraph', text: [
      'Είναι το σημείο που παρεξηγείται περισσότερο από κάθε άλλο. Η Google γράφει: «Distance refers to how far each business is from the customer who’s searching. If a customer doesn’t share where they are, Google uses what it knows about their location.» (',
      {text: 'Tips to improve your local ranking', href: G_LOCAL},
      '). Δηλαδή δεν υπάρχει ένα σημείο αναφοράς για όλη τη Θεσσαλονίκη. Υπάρχει ένα σημείο αναφοράς ανά αναζήτηση, και είναι ο άνθρωπος.',
    ]},
    { type: 'paragraph', text: [
      'Πόσο ακριβές είναι αυτό το σημείο; Λιγότερο απ’ ό,τι νομίζεις. Η Google περιγράφει τη «γενική περιοχή» που χρησιμοποιεί ως εξής: «A general area is larger than 3 sq km, and has at least 1000 users so that the general area of your search does not identify you, helping to protect your privacy.» (',
      {text: 'Understand & manage your location when you search', href: G_LOCATION},
      '). Και ακόμα κι αν ο χρήστης δεν έχει δώσει τοποθεσία: «IP addresses are roughly based on geography. This means that any website you use, including google.com, may get some information about your general area.»',
    ]},
    { type: 'paragraph', text: [
      'Δύο συνέπειες. Πρώτη: δύο άνθρωποι στην ίδια γειτονιά μπορεί κάλλιστα να δουν διαφορετική σειρά αποτελεσμάτων, και κανείς από τους δύο δεν βλέπει «την πραγματική κατάταξη», γιατί δεν υπάρχει τέτοιο πράγμα. Δεύτερη: ο πελάτης δεν χρειάζεται καν να γράψει την πόλη. Η Google το λέει καθαρά: «Our systems can also recognize many queries have a local intent. So when you search for “pizza,” you get results about nearby businesses that deliver.» (',
      {text: 'How Search Works: Ranking results', href: G_RANKING},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Πρακτικά αυτό αλλάζει τι λέξεις κυνηγάς. Το «υδραυλικός Θεσσαλονίκη» δεν είναι απαραίτητα η βασική αναζήτηση του πελάτη σου· το «υδραυλικός» από ένα κινητό στην Καλαμαριά είναι η ίδια αναζήτηση, με την πόλη υπονοούμενη.',
    ]},

    { type: 'heading', text: 'Γιατί η αυτο-αναζήτηση δεν είναι μέτρηση' },
    { type: 'paragraph', text: [
      'Αν από τα παραπάνω βγαίνει ένα πράγμα, είναι ότι το «το έψαξα και δεν βγαίνω» δεν είναι δεδομένο. Η Google το γράφει και σε επίπεδο εργαλείου: «Even if a query appears in your list, you might not see your site in results if you run the same query in Google Search. This is because Search results are specific to the time, place, device, and recent history of the person searching.» (',
      {text: 'Search Console, Performance report', href: G_GSC},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Στο ίδιο εργαλείο υπάρχει και το δεύτερο μισό: η μικρότερη γεωγραφική διάσταση των αναφορών είναι η ',
      {text: 'χώρα', strong: true},
      '. Δεν υπάρχει διάσταση πόλης, άρα δεν υπάρχει επίσημη αναφορά «πώς πάω στη Θεσσαλονίκη». Όποιος σου δίνει τέτοιο νούμερο, το παράγει από εργαλείο τρίτου, όχι από την Google.',
    ]},
    { type: 'paragraph', text: [
      'Οι μετρήσεις που μένουν όρθιες είναι πιο βαρετές και πιο χρήσιμες: πόσα τηλέφωνα χτύπησαν, πόσες φόρμες συμπληρώθηκαν, πόσοι είπαν «σας βρήκα στους χάρτες».',
    ]},

    { type: 'heading', text: 'Τι δουλειά κάνει η ιστοσελίδα όταν αυτό που εμφανίζεται είναι το προφίλ' },
    { type: 'paragraph', text: [
      'Εδώ είναι η σύνδεση που λείπει από τις περισσότερες συζητήσεις. Το προφίλ δεν το γράφεις μόνο εσύ σε μια φόρμα. Η Google γράφει ότι οι πληροφορίες στα προφίλ συντίθενται από πλήθος πηγών, («Information in profiles is compiled from a variety of sources»), και ανάμεσα σε αυτές είναι δημόσια διαθέσιμο περιεχόμενο που έχει σαρωθεί, όπως ο επίσημος ιστότοπος της επιχείρησης (',
      {text: 'How Google sources & uses info in Business Profiles', href: G_PROFILE_SOURCES},
      '). Δηλαδή η ιστοσελίδα σου δεν ανταγωνίζεται το προφίλ, το ',
      {text: 'ταΐζει', strong: true},
      '. Και κάθε ασυμφωνία είναι θόρυβος που τον παράγεις μόνος σου.',
    ]},
    { type: 'paragraph', text: [
      'Το δεύτερο σημείο επαφής είναι το πεδίο του ιστότοπου μέσα στο προφίλ, όπου η ιστοσελίδα μπαίνει ως πλήρες URL (',
      {text: 'Edit your Business Profile', href: G_PROFILE_SITE},
      '). Ο κανόνας για το ποιο URL μπαίνει είναι ρητός: «Provide a phone number that connects to your individual business location, or provide a website that represents your individual business location.» (',
      {text: 'Guidelines for representing your business on Google', href: G_GUIDE},
      '). Στα ελληνικά: «Καταχωρίστε έναν αριθμό τηλεφώνου που συνδέεται με την τοποθεσία της επιχείρησής σας ή καταχωρίστε έναν ιστότοπο που εκπροσωπεί τη συγκεκριμένη τοποθεσία.» (',
      {text: 'Οδηγίες παρουσίασης της επιχείρησής σας', href: G_GUIDE_EL},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Αυτό αποκλείει τρία πράγματα που τα βλέπουμε συχνά: το προφίλ που δείχνει σε σελίδα κοινωνικού δικτύου αντί για ιστοσελίδα, το προφίλ κάθε υποκαταστήματος που δείχνει στην ίδια γενική αρχική, και τη διεύθυνση που δείχνει σε σελίδα προορισμού καμπάνιας η οποία μια μέρα θα κατέβει. Τα υπόλοιπα του προφίλ (επαλήθευση, κατηγορίες, φωτογραφίες, ωράρια, κριτικές) είναι άλλη δουλειά και έχουν ',
      {text: 'δικό τους κείμενο', href: '/el/blog/profil-epicheirisis-google'},
      '.',
    ]},

    { type: 'heading', text: 'Τα ίδια στοιχεία, με τα ίδια ακριβώς λόγια, παντού' },
    { type: 'paragraph', text: [
      'Η απαίτηση συνέπειας ονόματος, διεύθυνσης και τηλεφώνου δεν είναι δεισιδαιμονία του κλάδου. Γεννιέται σε μία πρόταση των οδηγιών: «Your name should reflect your business’s real-world name, as used consistently on your storefront, website, stationery, and as known to customers.» (',
      {text: 'Guidelines for representing your business on Google', href: G_GUIDE},
      '). Η ιστοσελίδα αναφέρεται ονομαστικά, δίπλα στην ταμπέλα και στα επιστολόχαρτα.',
    ]},
    { type: 'paragraph', text: [
      'Γιατί να σε νοιάζει τόσο; Γιατί το προφίλ δεν είναι εντελώς δικό σου. Η Google γράφει ότι αν κάποιες πηγές αναφέρουν πως τα στοιχεία σου είναι λανθασμένα ή παλιά, μπορεί να ενημερώσει το προφίλ, και ότι μπορείς να δεις και να διαχειριστείς αυτές τις ενημερώσεις (',
      {text: 'Understand Google updates on your Business Profile', href: G_UPDATES},
      '). Και στους χάρτες, οποιοσδήποτε χρήστης μπορεί να στείλει σχόλιο για τα στοιχεία ενός σημείου: «You can provide feedback that helps Google Maps decide whether to change a place\'s information.» (',
      {text: 'Edit place information in Google Maps', href: G_MAPS_EDIT},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Το συμπέρασμα για την ιστοσελίδα είναι απλό: όσο πιο καθαρά και πιο συνεπώς λέει η ίδια η σελίδα σου το όνομα, τη διεύθυνση και το τηλέφωνο, τόσο λιγότερες αφορμές υπάρχουν να «διορθωθεί» κάτι που ήταν ήδη σωστό.',
    ]},
    { type: 'table', caption: 'Πού πρέπει να συμφωνούν τα στοιχεία σου, και τι τα χαλάει συνήθως.', head: ['Στοιχείο', 'Πρέπει να είναι ίδιο σε', 'Τι το χαλάει στην πράξη'], rows: [
      [
        [{text: 'Επωνυμία', strong: true}],
        ['Ταμπέλα, ιστοσελίδα, τιμολόγια, προφίλ'],
        ['Η επωνυμία με προσάρτημα υπηρεσίας ή πόλης μόνο στο διαδίκτυο']],
      [
        [{text: 'Διεύθυνση', strong: true}],
        ['Υποσέλιδο, σελίδα επικοινωνίας, δομημένα δεδομένα, προφίλ'],
        ['Παλιά διεύθυνση ξεχασμένη σε μία σελίδα μετά τη μετακόμιση']],
      [
        [{text: 'Τηλέφωνο', strong: true}],
        ['Κάθε σελίδα όπου εμφανίζεται, προφίλ, δομημένα δεδομένα'],
        ['Διαφορετικός αριθμός για την καμπάνια, που κανείς δεν θυμάται μετά']],
      [
        [{text: 'Ιστότοπος', strong: true}],
        ['Το πεδίο του προφίλ και η σελίδα που όντως εκπροσωπεί το σημείο'],
        ['Σύνδεσμος σε κοινωνικό δίκτυο ή σε προσωρινή σελίδα προορισμού']],
    ]},

    { type: 'heading', text: 'Η διεύθυνση πρέπει να είναι πραγματική, και αυτό έχει συνέπειες στη σελίδα επικοινωνίας' },
    { type: 'paragraph', text: [
      'Η ελληνική τεκμηρίωση το θέτει σε μία γραμμή: «Δημιουργήστε το Επιχειρηματικό προφίλ για την υπάρχουσα, πραγματική σας τοποθεσία.» (',
      {text: 'Οδηγίες παρουσίασης της επιχείρησής σας', href: G_GUIDE_EL},
      '). Η αγγλική έκδοση εξηγεί τι σημαίνει «πραγματική»: «If your business rents a physical mailing address but doesn\'t operate out of that location, also known as a virtual office, that location isn\'t eligible for a Business Profile.»',
    ]},
    { type: 'paragraph', text: [
      'Ο χώρος συνεργασίας δεν αποκλείεται, αλλά έχει όρους: «Businesses can\'t list an office at a co-working space unless that office maintains clear signage, receives customers at the location during business hours, and is staffed during business hours by your business staff.» Και γενικά: «Businesses showing their address on Google should maintain permanent fixed signage of their business name at the address.» (',
      {text: 'Guidelines for representing your business on Google', href: G_GUIDE},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Υπάρχει και ο κανόνας που ακυρώνει το πιο συνηθισμένο κόλπο: «Do not include information in address lines that doesn\'t pertain to your business’s physical location, like URLs or keywords.» Δηλαδή το «Κατασκευή Ιστοσελίδων Θεσσαλονίκη» δεν χωράει στα πεδία της διεύθυνσης, όσο κι αν βολεύει.',
    ]},
    { type: 'paragraph', text: [
      'Αν δουλεύεις πηγαίνοντας στον πελάτη, η περιοχή εξυπηρέτησης έχει τους δικούς της περιορισμούς, και ο πρώτος εκπλήσσει: «You can\'t set your service area as a radius distance around your business. If you previously set up your service area this way, you can\'t edit it. Instead you must specify your service-area by city, postal code, or another type of area.», με ανώτατο όριο τις είκοσι περιοχές (',
      {text: 'Manage your service areas', href: G_AREA},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Το όριο των είκοσι περιοχών κάνει και μια δουλειά που δεν θα έκανες μόνος σου: σε αναγκάζει να διαλέξεις. Περιοχές που όντως εξυπηρετείς περιγράφονται πολύ πιο εύκολα σε ένα ειλικρινές κείμενο απ’ ό,τι «όλη η Βόρεια Ελλάδα».',
    ]},

    { type: 'heading', text: 'Πώς γράφεται μια ιστοσελίδα για τοπικό κοινό, και πού αρχίζει το spam' },
    { type: 'paragraph', text: [
      'Η Google απαριθμεί ρητά τι κοιτάει για να καταλάβει σε ποιο κοινό απευθύνεται ένας ιστότοπος: «Other signals to identify the intended audience of your site can include local addresses and phone numbers on the pages, the use of local language and currency, links from other local sites, or signals from your Business Profile (where available).» (',
      {text: 'Managing multi-regional and multilingual sites', href: G_MULTIREGION},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Διάβασέ το ξανά και πρόσεξε τι ',
      {text: 'δεν', strong: true},
      ' λέει. Δεν λέει «η πόλη στον τίτλο κάθε σελίδας». Λέει αληθινές διευθύνσεις και τηλέφωνα μέσα στις σελίδες, τοπική γλώσσα, συνδέσμους από άλλους τοπικούς ιστότοπους, και σήματα από το προφίλ. Τρία από τα τέσσερα είναι πράγματα που ούτως ή άλλως θα έβαζες αν έγραφες για ανθρώπους.',
    ]},
    { type: 'paragraph', text: [
      'Η άλλη πλευρά είναι γραμμένη με την ίδια σαφήνεια, στις πολιτικές ανεπιθύμητου περιεχομένου. Ως παράδειγμα παραγεμίσματος λέξεων-κλειδιών αναφέρονται τα «Blocks of text that list cities and regions that a web page is trying to rank for», και ως παράδειγμα κατάχρησης σελίδων-πυλών τα «Having multiple domain names or pages targeted at specific regions or cities that funnel users to one page» (',
      {text: 'Spam policies for Google web search', href: G_SPAM},
      ').',
    ]},
    { type: 'table', caption: 'Δύο τρόποι να πεις ότι εξυπηρετείς μια περιοχή.', head: ['Η συνηθισμένη λύση', 'Τι λέει η τεκμηρίωση γι’ αυτήν', 'Τι κάνει την ίδια δουλειά'], rows: [
      [
        ['Υποσέλιδο με είκοσι ονόματα συνοικιών'],
        ['Παράδειγμα παραγεμίσματος: μπλοκ κειμένου που απαριθμούν πόλεις και περιοχές'],
        ['Μία πρόταση με νόημα: πού πας και πού δεν πας']],
      [
        ['Μία σελίδα ανά συνοικία, όλες ίδιες, όλες με φόρμα προς την ίδια σελίδα'],
        ['Παράδειγμα κατάχρησης σελίδων-πυλών: πολλές σελίδες ανά περιοχή που οδηγούν σε μία'],
        ['Μία σελίδα ανά πραγματικό σημείο ή ανά πραγματικά διαφορετική υπηρεσία']],
      [
        ['Όνομα ιστότοπου τύπου «οι καλύτεροι Χ στη Θεσσαλονίκη»'],
        ['Η Google λέει ότι ένα γενικό όνομα δύσκολα επιλέγεται ως όνομα ιστότοπου'],
        ['Η επωνυμία σου, η ίδια που γράφει η ταμπέλα']],
    ]},
    { type: 'paragraph', text: [
      'Το τρίτο το λέει η σελίδα για τα ονόματα ιστότοπων αυτολεξεί: «Avoid using a generic name . A generic name like "Best Dentists In Iowa" is unlikely to be selected by our system as a site name, unless that\'s an extremely well-recognized brand name.» (',
      {text: 'Provide a site name to Google Search', href: G_SITE_NAMES},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Ένα κριτήριο αρκεί για να κρίνεις ένα κείμενο πριν το ανεβάσεις, και το δίνει η Google: «Is the content primarily made to attract visits from search engines?» (',
      {text: 'Creating helpful, reliable, people-first content', href: G_HELPFUL},
      '). Αν η ειλικρινής απάντηση είναι ναι, το κείμενο δεν έχει πρόβλημα διατύπωσης· έχει πρόβλημα λόγου ύπαρξης.',
    ]},

    { type: 'cta', heading: 'Αν θέλεις να δεις πού στέκεται η δική σου ιστοσελίδα σε αυτά', text: 'Κοιτάμε τι λέει η ιστοσελίδα σου για το πού είσαι, αν συμφωνεί με τα υπόλοιπα, και τι από τα παραπάνω λείπει. Γραπτά, με παραπομπές.', label: 'Δες τι περιλαμβάνει', href: '/el/offers/website-seo' },

    { type: 'heading', text: 'Το δομημένα δεδομένα: τι κάνει και τι σίγουρα δεν κάνει' },
    { type: 'paragraph', text: [
      'Το LocalBusiness είναι ο κώδικας που περιγράφει την επιχείρησή σου σε μορφή που διαβάζεται από μηχανή. Δύο πράγματα είναι υποχρεωτικά (το όνομα και η διεύθυνση) και για τη διεύθυνση η οδηγία είναι σαφής: «The physical location of the business. Include as many properties as possible. The more properties you provide, the higher quality the result is to users.» (',
      {text: 'Local business structured data', href: G_SD_LOCAL},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Δύο λεπτομέρειες που τις χαλάνε τα περισσότερα έτοιμα πρόσθετα. Πρώτη, οι συντεταγμένες: «The latitude of the business location. The precision must be at least 5 decimal places.» Δεύτερη, το τηλέφωνο, όπου η ίδια σελίδα λέει «Be sure to include the country code and area code». Δηλαδή ένα ελληνικό σταθερό γραμμένο χωρίς τον κωδικό χώρας είναι λάθος κατά την τεκμηρίωση.',
    ]},
    { type: 'list', items: [
      [{text: 'Όνομα.', strong: true}, ' Η επωνυμία, ίδια με την ταμπέλα και με το προφίλ. Χωρίς λέξεις-κλειδιά κολλημένες.'],
      [{text: 'Διεύθυνση.', strong: true}, ' Οδός, αριθμός, πόλη, ταχυδρομικός κώδικας, χώρα. Όσο πιο πλήρης γίνεται.'],
      [{text: 'Συντεταγμένες.', strong: true}, ' Με τουλάχιστον πέντε δεκαδικά ψηφία. Πολλά πρόσθετα γράφουν δύο ή τρία.'],
      [{text: 'Τηλέφωνο και διεύθυνση ιστότοπου.', strong: true}, ' Με κωδικό χώρας το πρώτο, και σύνδεσμο που δουλεύει το δεύτερο.'],
    ]},
    { type: 'paragraph', text: [
      'Στο συγγενικό σήμα Organization υπάρχει ένα πεδίο που έχει ιδιαίτερο νόημα για ελληνική επιχείρηση: ο ΑΦΜ. Η Google το περιγράφει ως «The VAT (Value Added Tax) code associated with your Organization, if applicable to your country and business. This is an important trust signal for users (for example, users can look up your business in public VAT registries).» Και συστήνει να μη σκορπιστεί: «We recommend placing this information on your home page, or a single page that describes your organization, for example the about us page. You don\'t need to include it on every page of your site.» (',
      {text: 'Organization structured data', href: G_SD_ORG},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Τώρα το μέρος που παραλείπεται από κάθε προσφορά «θα σου βάλουμε schema και θα ανέβεις τοπικά». Πουθενά στην τεκμηρίωση τα δομημένα δεδομένα δεν συνδέονται με τα τρία κριτήρια των τοπικών αποτελεσμάτων. Αυτό που λέει η Google είναι: «Google does not guarantee that features that consume structured data will show up in search results.» (',
      {text: 'Local business structured data', href: G_SD_LOCAL},
      ') και, πιο αναλυτικά, «Using structured data enables a feature to be present, it does not guarantee that it will be present. The Google algorithm tailors search results to create what it thinks is the best search experience for a user, depending on many variables, including search history, location, and device type.» (',
      {text: 'General structured data guidelines', href: G_SD_POLICIES},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Άρα το βάζεις γιατί κάνει τα στοιχεία σου μηχανικά αναγνώσιμα και σε κάνει ',
      {text: 'επιλέξιμο', strong: true},
      ' για κάποιες εμφανίσεις. Η τεκμηρίωση δεν το συνδέει με την κατάταξη. Σωστή δουλειά με λάθος διαφημιστικό.',
    ]},

    { type: 'heading', text: 'Το κινητό δεν είναι «και για κινητά». Είναι η έκδοση που κρίνεται' },
    { type: 'paragraph', text: [
      'Για τοπική επιχείρηση αυτό δεν είναι λεπτομέρεια, γιατί ο άνθρωπος που ψάχνει υδραυλικό ή φούρνο κρατάει τηλέφωνο. Η Google το δηλώνει χωρίς περιθώριο: «Google uses the mobile version of a site\'s content, crawled with the smartphone agent, for indexing and ranking. This is called mobile-first indexing.» (',
      {text: 'Mobile-first indexing best practices', href: G_MOBILE},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Και η οδηγία που παραβιάζεται από κάθε θέμα που «κρύβει» κείμενο στη μικρή οθόνη: «Make sure that your mobile site contains the same content as your desktop site.» Αν στο κινητό λείπει η μισή σελίδα, έχεις μία ιστοσελίδα που η Google τη βλέπει μισή.',
    ]},
    { type: 'paragraph', text: [
      'Για την ταχύτητα, δύο πράγματα μαζί, γιατί χωριστά παραπλανούν. Η Google γράφει για την εμπειρία σελίδας: «There is no single signal.» (',
      {text: 'Understanding page experience in Google Search results', href: G_PAGE_EXP},
      '). Ταυτόχρονα υπάρχει τεκμηριωμένο κατώφλι για τον χρόνο εμφάνισης του κύριου περιεχομένου: το web.dev γράφει «Largest Contentful Paint (LCP) : measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.» (',
      {text: 'Web Vitals', href: W_VITALS},
      '). Το κατώφλι είναι δικό τους. Δεν είναι κάτι που υποσχόμαστε εμείς για τη δική σου σελίδα.',
    ]},

    { type: 'heading', text: 'Δύο πράγματα που πουλιούνται τοπικά και δεν στέκουν' },
    { type: 'paragraph', text: [
      {text: 'Η ελληνική φιλοξενία ως παράγοντας κατάταξης.', strong: true},
      ' Η πηγή που αναφέρει την τοποθεσία του διακομιστή λέει και τη συνέχεια, στην ίδια ανάσα: «Server location (through the IP address of the server). The server location is often physically near your users and can be a signal about your site\'s intended audience. Some websites use distributed content delivery networks (CDNs) or are hosted in a country with better webserver infrastructure, so it is not a definitive signal.» (',
      {text: 'Managing multi-regional and multilingual sites', href: G_MULTIREGION},
      '). Ένας πάροχος κοντά σου μπορεί να έχει άλλα πλεονεκτήματα. Απλώς δεν είναι απόφαση κατάταξης.',
    ]},
    { type: 'paragraph', text: [
      {text: 'Το hreflang ως δήλωση γλώσσας.', strong: true},
      ' Είναι το πιο συχνό λάθος σε άρθρα τοπικού SEO, και η Google το αρνείται ρητά: «Google doesn\'t use hreflang or the HTML lang attribute to detect the language of a page; instead, we use algorithms to determine the language.» (',
      {text: 'Tell Google about localized versions of your page', href: G_LOCALIZED},
      '). Το hreflang συνδέει παραλλαγές μεταξύ τους. Δεν δηλώνει ότι μια σελίδα είναι ελληνική, και δεν θα σώσει μια αγγλική σελίδα με ελληνικό hreflang.',
    ]},

    { type: 'heading', text: 'Τι δεν αγοράζεται, με τα λόγια της Google' },
    { type: 'paragraph', text: [
      'Επειδή στην τοπική αγορά κυκλοφορεί πολύ η υπόσχεση «σε βάζουμε πρώτο στους χάρτες», αξίζει η πρόταση αυτούσια: «There\'s no way to request or pay for a better local ranking on Google. We do our best to keep the search algorithm details confidential to make the ranking system as fair as possible for everyone.» (',
      {text: 'Tips to improve your local ranking', href: G_LOCAL},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Και για τη σχέση διαφήμισης και οργανικών αποτελεσμάτων, η ίδια η τεκμηρίωση: «Advertising with Google won\'t have any effect on your site\'s presence in our search results.» (',
      {text: 'Do you need an SEO?', href: G_SEO_NEED},
      '). Η διαφήμιση είναι χρήσιμο εργαλείο, αλλά όχι διάδρομος προς την οργανική θέση.',
    ]},
    { type: 'paragraph', text: [
      'Οπότε, όταν εμφανιστεί κάποιος που «εγγυάται» τοπική θέση, εγγυάται κάτι που κατά την ίδια την πηγή ούτε ζητιέται ούτε αγοράζεται.',
    ]},

    { type: 'heading', text: 'Με τι σειρά να τα κάνεις' },
    { type: 'paragraph', text: [
      'Η σειρά έχει σημασία, γιατί τα πρώτα δεν χρειάζονται κανέναν εξωτερικό συνεργάτη και τα τελευταία δεν έχουν νόημα αν λείπουν τα πρώτα.',
    ]},
    { type: 'list', ordered: true, items: [
      ['Γράψε σε ένα χαρτί το όνομα, τη διεύθυνση και το τηλέφωνο με τον τρόπο που θέλεις να γράφονται. Έναν τρόπο, όχι τρεις.'],
      ['Πέρασέ τα αυτούσια στο υποσέλιδο και στη σελίδα επικοινωνίας, και βεβαιώσου ότι καμία παλιά σελίδα δεν λέει κάτι άλλο.'],
      ['Έλεγξε ότι το πεδίο ιστότοπου στο προφίλ δείχνει στη σελίδα που όντως εκπροσωπεί το σημείο.'],
      ['Άνοιξε την ιστοσελίδα σου στο κινητό και σύγκρινέ την με τον υπολογιστή. Ό,τι λείπει από τη μικρή οθόνη, λείπει.'],
      ['Διόρθωσε τα δομημένα δεδομένα: πλήρης διεύθυνση, συντεταγμένες με πέντε δεκαδικά, τηλέφωνο με κωδικό χώρας.'],
      ['Γράψε μία αληθινή σελίδα ανά πραγματικό σημείο ή διαφορετική υπηρεσία. Και σβήσε το υποσέλιδο με τις συνοικίες.'],
    ]},
    { type: 'paragraph', text: [
      'Αν τα κάνεις όλα και δεν σε βρίσκει ακόμα κανείς, το πρόβλημα μπορεί να είναι πιο νωρίς στην αλυσίδα από όσο νομίζεις, δηλαδή η Google να μην έχει καν τις σελίδες σου. Αυτό το ελέγχεις μόνος σου σε δέκα δευτερόλεπτα, και το εξηγούμε βήμα βήμα στο ',
      {text: 'γιατί δεν εμφανίζεται η ιστοσελίδα σου στην Google', href: '/el/blog/giati-den-emfanizetai-i-istoselida-sto-google'},
      '.',
    ]},

    { type: 'sources', heading: 'Πηγές', items: [
      {label: 'Google Business Profile Help: Tips to improve your local ranking on Google (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_LOCAL},
      {label: 'Βοήθεια Επιχειρηματικού προφίλ Google: Συμβουλές για τη βελτίωση της τοπικής κατάταξης (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_LOCAL_EL},
      {label: 'Google Business Profile Help: Guidelines for representing your business on Google (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_GUIDE},
      {label: 'Βοήθεια Επιχειρηματικού προφίλ Google: Οδηγίες παρουσίασης της επιχείρησής σας στην Google (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_GUIDE_EL},
      {label: 'Google Business Profile Help: Understand how Google sources & uses info in Business Profiles & local search results (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_PROFILE_SOURCES},
      {label: 'Google Business Profile Help: Manage your service areas for service-area & hybrid businesses (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_AREA},
      {label: 'Google Business Profile Help: Understand Google updates on your Business Profile (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_UPDATES},
      {label: 'Google Business Profile Help: Edit your Business Profile (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_PROFILE_SITE},
      {label: 'Google Search Help: Understand & manage your location when you search on Google (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_LOCATION},
      {label: 'Google Search Console Help: Performance report (Search results) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_GSC},
      {label: 'Google Maps Help: Edit place information in Google Maps (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_MAPS_EDIT},
      {label: 'Google Search Central: Local business (LocalBusiness) structured data (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_SD_LOCAL},
      {label: 'Google Search Central: Organization structured data (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_SD_ORG},
      {label: 'Google Search Central: General structured data guidelines (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_SD_POLICIES},
      {label: 'Google Search Central: Spam policies for Google web search (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_SPAM},
      {label: 'Google Search Central: Do you need an SEO? (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_SEO_NEED},
      {label: 'Google Search Central: Creating helpful, reliable, people-first content (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_HELPFUL},
      {label: 'Google Search Central: Managing multi-regional and multilingual sites (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_MULTIREGION},
      {label: 'Google Search Central: Tell Google about localized versions of your page (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_LOCALIZED},
      {label: 'Google Search Central: Understanding page experience in Google Search results (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_PAGE_EXP},
      {label: 'Google Search Central: Provide a site name to Google Search (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_SITE_NAMES},
      {label: 'Google Search Central: Mobile site and mobile-first indexing best practices (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_MOBILE},
      {label: 'web.dev: Web Vitals (LCP και τα κατώφλια του) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: W_VITALS},
      {label: 'Google, How Search Works: Ranking results (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_RANKING},
    ]},
  ],
};

export default post;
