import type {BlogPost} from '@/types/blog';

const G_SEO_NEED = 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo';
const G_SPAM = 'https://developers.google.com/search/docs/essentials/spam-policies';
const G_SOCIAL = 'https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content';
const SC_OWNERS = 'https://support.google.com/webmasters/answer/7687615';
const SC_VERIFY = 'https://support.google.com/webmasters/answer/9008080';
const SC_ADD = 'https://support.google.com/webmasters/answer/34592';
const SC_PLATFORM = 'https://support.google.com/webmasters/answer/17148418';
const SC_ABOUT = 'https://support.google.com/webmasters/answer/9128668';
const SC_PERF = 'https://support.google.com/webmasters/answer/7576553';
const ADS_ACCESS = 'https://support.google.com/google-ads/answer/9978556';
const ADS_OWNER = 'https://support.google.com/google-ads/answer/7456532';
const ADS_REACTIVATE = 'https://support.google.com/google-ads/answer/2375392';
const GA_ROLES = 'https://support.google.com/analytics/answer/9305587';
const GA_HIERARCHY = 'https://support.google.com/analytics/answer/9303323';
const GA_RETENTION = 'https://support.google.com/analytics/answer/7667196';
const GA_CHANNELS = 'https://support.google.com/analytics/answer/9756891';
const GA_SC_LINK = 'https://support.google.com/analytics/answer/10737381';
const GBP_OWNERS = 'https://support.google.com/business/answer/3403100';
const GBP_TRANSFER = 'https://support.google.com/business/answer/3415281';
const GTM_PERMS = 'https://support.google.com/tagmanager/answer/6107011';
const ICANN_TRANSFER = 'https://www.icann.org/en/contracted-parties/accredited-registrars/resources/domain-name-transfers/policy';
const GR_REGISTRY = 'https://grweb.ics.forth.gr/public/faqs';
const WP_ROLES = 'https://wordpress.org/documentation/article/roles-and-capabilities/';

const post: BlogPost = {
  id: 'proothisi-istoselidon-ti-agorazeis',
  slug: 'proothisi-istoselidon-ti-agorazeis',
  title: 'Προώθηση ιστοσελίδων: τι ακριβώς αγοράζεις όταν το αγοράζεις',
  metaTitle: 'Προώθηση ιστοσελίδων: τι ακριβώς αγοράζεις',
  excerpt: 'Τέσσερις διαφορετικές δουλειές με το ίδιο όνομα. Τι μένει δικό σου όταν σταματήσεις να πληρώνεις, και σε ποιανού όνομα πρέπει να είναι οι λογαριασμοί.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 31,
  tags: ['Ιστοσελίδες', 'Αναζήτηση', 'Ανάθεση έργου'],
  body: [
    { type: 'paragraph', text: [
      'Η «προώθηση ιστοσελίδων» δεν είναι μία υπηρεσία. Είναι ',
      {text: 'τουλάχιστον τέσσερις διαφορετικές δουλειές', strong: true},
      ' που πωλούνται με το ίδιο όνομα, και η κάθε μία σού αφήνει κάτι εντελώς διαφορετικό στα χέρια όταν τελειώσει η συνεργασία. Ένα μέρος σταματά την ίδια μέρα που σταματάς να πληρώνεις. Το άλλο μένει — αν είναι γραμμένο στο σωστό όνομα.',
    ]},
    { type: 'paragraph', text: [
      'Δεν χρειάζεται να το πιστέψεις από εμάς. Η ίδια η Google χωρίζει την επισκεψιμότητα σε κανάλια που δεν τα ρυθμίζει ούτε εσύ ούτε ο πάροχός σου: «Default channel groups can\'t be edited in Google Analytics.» (',
      {text: 'Default channel group', href: GA_CHANNELS},
      '). Τέσσερα από αυτά είναι ακριβώς αυτά που σου πουλάνε με μία λέξη.',
    ]},
    { type: 'paragraph', text: [
      'Εδώ δεν συγκρίνουμε ποιο κανάλι αποδίδει καλύτερα. Απαντάμε σε δύο ερωτήσεις που σχεδόν κανείς δεν γράφει: ',
      {text: 'τι μένει δικό σου όταν σταματήσεις να πληρώνεις', strong: true},
      ', και σε ποιανού όνομα πρέπει να είναι ο κάθε λογαριασμός για να ισχύει αυτό. Είναι θέμα σύμβασης, όχι τεχνικής.',
    ]},
    { type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε πρόταση που παρατίθεται αυτούσια ελέγχθηκε εκείνη τη μέρα στη σελίδα τεκμηρίωσης που τη συνοδεύει. Το κείμενο δεν αναφέρει τιμές και δεν υπόσχεται θέση σε κανένα αποτέλεσμα αναζήτησης.',
    ]},

    { type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Τι ακριβώς αγοράζω όταν αγοράζω «προώθηση»;', a: 'Ζήτα να στο πουν με το όνομα του καναλιού: οργανική αναζήτηση, πληρωμένη αναζήτηση, κοινωνικά δίκτυα ή καταχωρήσεις σε άλλα sites. Η Google τα μετράει ως ξεχωριστά κανάλια και δεν αγοράζουν το ίδιο πράγμα.'},
      {q: 'Αν σταματήσω να πληρώνω, τι μένει;', a: 'Ό,τι κάθεται στο δικό σου domain και στους δικούς σου λογαριασμούς. Οι πληρωμένες επισκέψεις σταματούν μαζί με τη δαπάνη. Οι σελίδες, τα κείμενα και το ιστορικό των μετρήσεων μένουν — αλλά μόνο αν οι λογαριασμοί είναι στο δικό σου όνομα.'},
      {q: 'Η διαφήμιση βοηθάει την οργανική μου θέση;', a: 'Όχι. Η Google το γράφει η ίδια: η διαφήμιση στη Google δεν έχει καμία επίδραση στην παρουσία του site στα αποτελέσματα αναζήτησης. Δύο διαφορετικά πράγματα με το ίδιο εμπορικό όνομα.'},
      {q: 'Ποιοι λογαριασμοί πρέπει να είναι δικοί μου;', a: 'Το domain, το Google Ads, το Analytics, το Search Console, το Tag Manager, το Επιχειρηματικό προφίλ και ο διαχειριστής της ίδιας της ιστοσελίδας. Ο πάροχος μπαίνει σε αυτά ως χρήστης, όχι ως ιδιοκτήτης.'},
      {q: 'Αρκεί να διαγράψω τον πάροχο όταν φύγει;', a: 'Στο Search Console όχι. Η Google γράφει ότι όταν αφαιρείς έναν ιδιοκτήτη το token επαλήθευσής του δεν ακυρώνεται, οπότε μπορεί να ξανα-επαληθευτεί μόνος του. Πρέπει να φύγει και το token από το site — προσεκτικά, γιατί μπορεί να το χρησιμοποιούν και άλλες υπηρεσίες.'},
      {q: 'Τι πρέπει να λέει μια μηνιαία αναφορά;', a: 'Κλικ, εμφανίσεις, CTR και μέση θέση από το Search Console, και τη λίστα των αλλαγών με την αιτιολόγησή τους. Ένα «score» από εργαλείο τρίτου δεν είναι αποτέλεσμα: η Google δεν αξιολογεί τέτοια εργαλεία και αυτά δεν βλέπουν τα δεδομένα κατάταξής της.'},
    ]},

    { type: 'heading', text: 'Τέσσερα πράγματα, ένα όνομα' },
    { type: 'paragraph', text: [
      'Άνοιξε το Analytics οποιασδήποτε ιστοσελίδας και θα δεις την επισκεψιμότητα χωρισμένη σε κανάλια. Τα ονόματα και οι ορισμοί είναι της Google, όχι του παρόχου σου.',
    ]},
    { type: 'list', items: [
      [{text: 'Organic Search', href: GA_CHANNELS}, ' — η οργανική βελτιστοποίηση. «Organic Search is the channel by which users arrive at your site/app via non-ad links in organic-search results, including Google’s AI Overviews and AI Mode.»'],
      [{text: 'Paid Search', href: GA_CHANNELS}, ' — οι διαφημίσεις στην αναζήτηση. «Paid Search is the channel by which users arrive at your site/app via ads on search-engine sites like Bing, Baidu, or Google.»'],
      [{text: 'Organic Social', href: GA_CHANNELS}, ' — δημοσιεύσεις στα κοινωνικά χωρίς πληρωμή. «Organic Social is the channel by which users arrive at your site/app via non-ad links on social sites like Facebook or Twitter.»'],
      [{text: 'Paid Social', href: GA_CHANNELS}, ' — διαφημίσεις μέσα στα κοινωνικά. «Paid Social is the channel by which users arrive at your site/app via ads on social sites like Facebook and Twitter.»'],
      [{text: 'Referral', href: GA_CHANNELS}, ' — καταχωρήσεις σε καταλόγους και συνδέσμοι από άλλα sites, ένα τέταρτο και ξεχωριστό κανάλι.'],
    ]},
    { type: 'paragraph', text: [
      'Η πρώτη ερώτηση σε όποιον σου μιλάει για προώθηση είναι η πιο ανιαρή που υπάρχει: ',
      {text: 'σε ποιο από αυτά τα κανάλια θα δουλέψεις;', strong: true},
      ' Αν η απάντηση είναι «σε όλα», ζήτα να δεις πόση δουλειά πάει στο καθένα. Είναι όλη η διαφορά ανάμεσα σε κάτι που το νοικιάζεις και σε κάτι που το αποκτάς.',
    ]},

    { type: 'heading', text: 'Τι μένει δικό σου όταν σταματήσεις να πληρώνεις' },
    { type: 'paragraph', text: [
      'Η Google το λέει με μία πρόταση, στην ίδια σελίδα όπου εξηγεί πώς διαλέγεις πάροχο: «Advertising with Google won\'t have any effect on your site\'s presence in our search results.» (',
      {text: 'Do you need an SEO?', href: G_SEO_NEED},
      '). Τα δύο πράγματα που σου πουλάνε με το ίδιο όνομα δεν αγοράζουν το ίδιο πράγμα, και το ένα δεν χτίζει το άλλο.',
    ]},
    { type: 'paragraph', text: [
      'Και η άλλη μισή απάντηση, από την ίδια σελίδα: «Google never accepts money to include or rank sites in our search results, and it costs nothing to appear in our organic search results.» Η θέση στα οργανικά δεν πωλείται. Αυτό που πληρώνεις είναι η δουλειά — σελίδες, κείμενα, δομή — και αυτή κάθεται πάνω στο δικό σου domain.',
    ]},
    { type: 'paragraph', text: [
      'Οι διαφημίσεις είναι το ακριβώς αντίθετο, και δεν το λέμε αρνητικά: αγοράζεις ροή επισκεπτών, την έχεις όσο πληρώνεις, σταματάει όταν σταματήσεις. Είναι θεμιτό να το θέλεις. Δεν είναι θεμιτό να στο πουλήσουν ως «θα ανέβεις στην Google».',
    ]},
    { type: 'table', caption: 'Τα τέσσερα πράγματα που λέγονται «προώθηση» και τι απομένει από το καθένα.', head: ['Τι σου πουλάνε', 'Πώς το ονομάζει η Google', 'Τι γίνεται όταν σταματήσεις να πληρώνεις'], rows: [
      [['Οργανική βελτιστοποίηση'], ['Organic Search'], ['Σελίδες και κείμενα μένουν στο δικό σου domain. Η θέση τους δεν είναι εγγυημένη ούτε πριν ούτε μετά.']],
      [['Διαφημίσεις στην αναζήτηση'], ['Paid Search'], ['Οι επισκέψεις σταματούν με τη δαπάνη. Μένει ο λογαριασμός και το ιστορικό του, αν είναι δικός σου.']],
      [['Δημοσιεύσεις σε κοινωνικά'], ['Organic Social'], ['Το περιεχόμενο μένει, αλλά ζει σε πλατφόρμα τρίτου, όχι στο domain σου.']],
      [['Διαφημίσεις σε κοινωνικά'], ['Paid Social'], ['Ό,τι και στο Paid Search: η ροή είναι νοικιασμένη.']],
      [['Καταχωρήσεις σε καταλόγους'], ['Referral'], ['Εξαρτάται από τον κατάλογο. Κάποιοι φέρνουν κόσμο· άλλοι είναι ρίσκο, και το λέει η Google ονομαστικά.']],
    ]},

    { type: 'heading', text: 'Τα κοινωνικά δίκτυα δεν είναι ένα πράγμα, και δεν είναι δικά σου' },
    { type: 'paragraph', text: [
      'Πρόσεξε ότι τα κοινωνικά εμφανίζονται στη λίστα ',
      {text: 'δύο φορές', strong: true},
      '. Όταν κάποιος λέει «θα κάνουμε και social», έχεις δικαίωμα να ρωτήσεις ποιο από τα δύο: το ένα είναι δουλειά περιεχομένου, το άλλο δαπάνη.',
    ]},
    { type: 'paragraph', text: [
      'Η δεύτερη διαφορά είναι πιο σοβαρή για το ερώτημα «τι μένει δικό μου». Το περιεχόμενο ζει στην πλατφόρμα, όχι σε εσένα. Η Google γράφει ότι το κοινό σου μπορεί να το βρίσκει και μέσα από την Αναζήτηση: «When you create content on platforms like TikTok, Instagram, X, and YouTube, your audience can also find your content when they search with Google.» (',
      {text: 'Analyze social and video platform content', href: G_SOCIAL},
      '). Χρήσιμο — αλλά ο λογαριασμός παραμένει λογαριασμός σε ξένο σπίτι.',
    ]},
    { type: 'paragraph', text: [
      'Το Search Console έχει πλέον «platform properties» για τέτοιους λογαριασμούς, με δύο λεπτομέρειες που μπερδεύονται. Πρώτη: κάθε λογαριασμός προστίθεται και επαληθεύεται χωριστά. Δεύτερη, και η πιο παρεξηγημένη: δείχνουν μόνο πώς αποδίδει το περιεχόμενό σου ',
      {text: 'στην Google Αναζήτηση', strong: true},
      ', όχι πόσοι το είδαν μέσα στο TikTok ή στο Instagram. Και κυκλοφορούν σταδιακά, οπότε μπορεί να μην το βλέπεις ακόμα (',
      {text: 'About platform properties', href: SC_PLATFORM},
      ').',
    ]},

    { type: 'heading', text: 'Το «στο όνομά μου» έχει τρία διαφορετικά επίπεδα' },
    { type: 'paragraph', text: [
      'Εδώ γίνεται το πιο ακριβό λάθος της συζήτησης, και γίνεται καλόπιστα. Ρωτάς «είναι στο όνομά μου;», ακούς «ναι, έχεις πρόσβαση», και εννοείτε άλλο πράγμα ο καθένας. Τα επίπεδα είναι τρία και μπορείς άνετα να έχεις το τρίτο χωρίς τίποτα από τα δύο πρώτα.',
    ]},
    { type: 'table', caption: 'Τρία πράγματα που ακούγονται ίδια και δεν είναι.', head: ['Επίπεδο', 'Τι ακριβώς είναι', 'Πού το συναντάς'], rows: [
      [[{text: 'Ιδιοκτησία καταχώρησης', strong: true}], ['Το όνομα στο οποίο έχει εκχωρηθεί το domain, μαζί με το κλειδί που επιτρέπει τη μεταφορά του'], ['Ο καταχωρητής: δικαιούχος και κωδικός εξουσιοδότησης']],
      [[{text: 'Ιδιοκτησία λογαριασμού', strong: true}], ['Ποιος κατέχει τον λογαριασμό μέσα στον οποίο ζει το εργαλείο'], ['Google Ads, λογαριασμός Analytics, primary owner στο Επιχειρηματικό προφίλ, administrator στο WordPress']],
      [[{text: 'Πρόσβαση χρήστη', strong: true}], ['Δικαίωμα που σου έδωσε κάποιος άλλος και μπορεί να σου το πάρει'], ['Full user στο Search Console, δικαιώματα container στο Tag Manager, manager στο Επιχειρηματικό προφίλ']],
    ]},
    { type: 'paragraph', text: [
      'Το τεστ είναι απλό: για κάθε εργαλείο, μπορείς ',
      {text: 'εσύ', strong: true},
      ' να προσθέσεις και να αφαιρέσεις άλλους χρήστες; Αν όχι, έχεις πρόσβαση, όχι ιδιοκτησία. Παρακάτω το κάθε εργαλείο χωριστά, γιατί οι κανόνες διαφέρουν — και σε δύο περιπτώσεις είναι δυσάρεστοι.',
    ]},

    { type: 'heading', text: 'Το domain: το μόνο που δεν το επιστρέφει κανένα email' },
    { type: 'paragraph', text: [
      'Το domain δεν είναι λογαριασμός, είναι καταχώρηση, και η καταχώρηση έχει έναν δικαιούχο. Το ελληνικό Μητρώο το ορίζει έτσι: «Φορέας ονόματος χώρου (registrant) είναι το φυσικό ή νομικό πρόσωπο στο οποίο έχει εκχωρηθεί ένα όνομα χώρου .gr ή .ελ. Εναλλακτικά, μπορεί να συναντήσετε τους όρους δικαιούχος ή χρήστης.» (',
      {text: 'Μητρώο .gr και .ελ', href: GR_REGISTRY},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Το πρακτικό κλειδί όμως δεν είναι το όνομα, είναι ο κωδικός: «Κωδικός εξουσιοδότησης (authorization code) ονόματος χώρου .gr ή .ελ είναι ένας συνδυασμός χαρακτήρων που εξασφαλίζει την ταυτοποίηση του δικαιούχου του ονόματος και του επιτρέπει τη διαχείρισή του.» Με αυτόν αλλάζεις καταχωρητή, και η αλλαγή δεν επηρεάζει τη διάρκεια εκχώρησης.',
    ]},
    { type: 'paragraph', text: [
      'Αν δεν τον έχεις, δεν είσαι κλειδωμένος έξω για πάντα — αλλά εξαρτάσαι από κάποιον. Η επαναφορά του κωδικού είναι αρμοδιότητα του καταχωρητή που διαχειρίζεται το όνομα, και το ίδιο ισχύει αν το domain γράφτηκε εξαρχής στο όνομα του παρόχου: η μεταβίβαση χρήσης επιτρέπεται, γίνεται μέσω εκείνου, και είναι χρεώσιμη πράξη (',
      {text: 'Μητρώο .gr και .ελ', href: GR_REGISTRY},
      '). Αρμόδια αρχή για τα .gr και .ελ είναι η ΕΕΤΤ, όχι η ICANN — καλό να το ξέρεις πριν σου πουν ότι «έτσι είναι διεθνώς».',
    ]},
    { type: 'subheading', text: 'Αν το domain σου είναι .com ή .net' },
    { type: 'paragraph', text: [
      'Εκεί ισχύει η πολιτική μεταφορών της ICANN, και λέει κάτι που σε συμφέρει: «The Registered Name Holder is the only party that has the authority to approve or deny a transfer request to the Gaining Registrar.» (',
      {text: 'ICANN Transfer Policy', href: ICANN_TRANSFER},
      '). Ο δικαιούχος αποφασίζει, όχι ο πάροχος, και η ίδια πολιτική ορίζει ότι οι δικαιούχοι πρέπει να μπορούν να μεταφέρουν τα ονόματά τους ανάμεσα σε καταχωρητές.',
    ]},
    { type: 'paragraph', text: [
      'Υπάρχει όμως μια παγίδα σειράς: «The Registrar must impose a 60-day inter-registrar transfer lock following a Change of Registrant, provided, however, that the Registrar may allow the Registered Name Holder to opt out of the 60-day inter-registrar transfer lock prior to any Change of Registrant request.» Γι’ αυτό η ίδια πολιτική υποχρεώνει τον καταχωρητή να σε ενημερώσει ότι, αν τελικός σκοπός είναι να πας σε άλλον καταχωρητή, ζητάς ',
      {text: 'πρώτα τη μεταφορά και μετά την αλλαγή δικαιούχου', strong: true},
      ' (',
      {text: 'ICANN Transfer Policy', href: ICANN_TRANSFER},
      ').',
    ]},

    { type: 'heading', text: 'Search Console: ο χρήστης φεύγει, το token μένει' },
    { type: 'paragraph', text: [
      'Από εδώ βγαίνει κάθε σοβαρή μηνιαία αναφορά για την οργανική αναζήτηση, και η Google το περιγράφει ως δωρεάν υπηρεσία (',
      {text: 'About Search Console', href: SC_ABOUT},
      '). Αυτό που πληρώνεις σε έναν πάροχο είναι η δουλειά πάνω στα δεδομένα, όχι το εργαλείο.',
    ]},
    { type: 'paragraph', text: [
      'Για να μπει μια ιστοσελίδα εκεί, κάποιος πρέπει πρώτα να αποδείξει ότι του ανήκει· αν δεν μπορείς να το αποδείξεις εσύ, η Google σου λέει καθαρά τι σου μένει: να ζητήσεις από άλλον ιδιοκτήτη να σου δώσει πρόσβαση (',
      {text: 'Add a website or platform property', href: SC_ADD},
      '). Δηλαδή εξαρτάσαι από κάποιον για να δεις τα δικά σου δεδομένα.',
    ]},
    { type: 'paragraph', text: [
      'Η επαλήθευση δεν είναι διαδικαστική λεπτομέρεια, είναι το ίδιο το δικαίωμα: ο επαληθευμένος ιδιοκτήτης έχει τον υψηλότερο βαθμό δικαιωμάτων, και η επαλήθευση κρατάει όσο η Google μπορεί να επιβεβαιώνει ότι το token υπάρχει και ισχύει (',
      {text: 'Verify your site ownership', href: SC_VERIFY},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Ρόλοι υπάρχουν δύο, και μόνο ο ένας μοιράζει πρόσβαση: δικαιώματα σε άλλους δίνει μόνο ο ιδιοκτήτης, όχι ο «full user». Άρα το «δώσε στον πάροχο full user και μένεις εσύ το αφεντικό» ισχύει ',
      {text: 'μόνο αν είσαι εσύ επαληθευμένος ιδιοκτήτης', strong: true},
      '. Και κάποιος πρέπει να είναι: «A property must have at least one verified owner, or no users will have access to the property.» (',
      {text: 'Managing owners, users, and permissions', href: SC_OWNERS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Αν αφαιρεθούν όλοι οι επαληθευμένοι ιδιοκτήτες, χάνουν την πρόσβαση και οι υπόλοιποι μετά από περίοδο χάριτος, ενώ τα δεδομένα συνεχίζουν να συλλέγονται χωρίς να τα βλέπει κανείς. Το χειρότερο σενάριο εδώ δεν είναι μήνυμα λάθους· είναι σιωπή.',
    ]},
    { type: 'subheading', text: 'Το σημείο που το χάνουν όλοι στην παράδοση' },
    { type: 'paragraph', text: [
      'Όταν τελειώνει μια συνεργασία, το προφανές είναι να διαγράψεις τον πάροχο. Δεν αρκεί: «When you remove an owner from a Search Console property, that owner cannot access the property any more, but their verification tokens are not deleted or revoked. As long as a user\'s verification token remains for a property, a deleted owner can re-verify ownership of the property.» (',
      {text: 'Managing owners, users, and permissions', href: SC_OWNERS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Η σωστή σειρά είναι γραμμένη: πρώτα επαληθεύεσαι εσύ, και μετά αφαιρείς το token του προηγούμενου — για παράδειγμα, βγάζοντας από το site την ετικέτα HTML με την οποία είχε επαληθευτεί. Και μια προειδοποίηση πριν αρχίσεις να σβήνεις ετικέτες: «The same verification token can be reused across various services to verify ownership (like Search Console, Merchant Center, Google Workspace, etc.), and removing those tokens could negatively impact other services relying on them.» (',
      {text: 'Managing owners, users, and permissions', href: SC_OWNERS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Μικρό και χρήσιμο: η ιδιότητα τύπου Domain επαληθεύεται με έναν μόνο τρόπο, «DNS record verification only» (',
      {text: 'Add a website or platform property', href: SC_ADD},
      '). Όποιος ελέγχει το DNS σου ελέγχει και το ποιος βλέπει τα δεδομένα αναζήτησης.',
    ]},
    { type: 'paragraph', text: [
      'Και επειδή θα σου ζητηθεί πρόσβαση από την πρώτη μέρα: «If your SEO offers to do an SEO audit for you, be sure to carefully consider what\'s involved and only grant read access to Search Console (at this stage, don\'t grant them write access).» (',
      {text: 'Do you need an SEO?', href: G_SEO_NEED},
      '). Πρόσεξε το «at this stage» — αφορά τη φάση του ελέγχου, όχι όλη τη συνεργασία.',
    ]},

    { type: 'heading', text: 'Google Ads: η ερώτηση είναι ποιος δημιούργησε τον λογαριασμό' },
    { type: 'paragraph', text: [
      'Τα επίπεδα πρόσβασης είναι πέντε και μόνο ένα μοιράζει τα υπόλοιπα: ο Admin είναι ο μόνος που δίνει πρόσβαση, αλλάζει επίπεδα και ακυρώνει προσκλήσεις. Η ίδια σελίδα προειδοποιεί ότι ένας μοναδικός διαχειριστής είναι ρίσκο — αν πάψει να είναι διαθέσιμος, μπορεί να χάσεις την πρόσβαση στα tags σου (',
      {text: 'About access levels', href: ADS_ACCESS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Το κρίσιμο σημείο όμως είναι πιο πίσω, στη στιγμή που φτιάχτηκε ο λογαριασμός: «A client account can only have one owner. If a manager creates a new account, the manager will automatically become the owner of that account. However, if a manager links an existing account, it won’t have ownership of that newly linked client account by default.» (',
      {text: 'About ownership of client accounts', href: ADS_OWNER},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Δεν σημαίνει ότι «σου πήρε τον λογαριασμό», και αξίζει να το πούμε καθαρά γιατί κυκλοφορεί λάθος: η Google γράφει ότι ο λογαριασμός του πελάτη εξακολουθεί να κατέχει τα δεδομένα του και μπορεί πάντα να αφαιρέσει την ιδιοκτησία αποσυνδέοντας τον manager.',
    ]},
    { type: 'paragraph', text: [
      'Η πραγματική ασυμμετρία είναι δύο συγκεκριμένα πράγματα. Το πρώτο το είδες: ποιος δημιούργησε τον λογαριασμό. Το δεύτερο: «Users of the client account do not have permission to transfer ownership but can always unlink a manager with ownership.» Και δεν σταματάει σε έναν — «Ownership is transitive, which means that if your manager account owns a client account, then all the managers above your manager account will also have ownership.» (',
      {text: 'About ownership of client accounts', href: ADS_OWNER},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Η ίδια η Google συνιστά να γίνεται ιδιοκτήτης ένας manager μόνο αν όντως χρειάζεται αυτά τα δικαιώματα. Άρα, αν σου ζητηθεί ιδιοκτησία, μια χαρά ερώτηση είναι «τι ακριβώς χρειάζεται αυτό που δεν το κάνει η απλή σύνδεση;» — γιατί οι admin ενός manager account με ιδιοκτησία αλλάζουν και τις προσβάσεις μέσα στον δικό σου λογαριασμό (',
      {text: 'About access levels', href: ADS_ACCESS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Τελευταίο, για όποιον σταματάει τις διαφημίσεις και αφήνει τον λογαριασμό στο ράφι: «Google Ads accounts that have been inactive for more than 15 months (meaning an account hasn’t spent in more than 15 months) get canceled automatically.» (',
      {text: 'Reactivate a canceled Google Ads account', href: ADS_REACTIVATE},
      '). Η επανενεργοποίηση θέλει χρήστη με πρόσβαση Admin — άλλος ένας λόγος να μην είναι ο μοναδικός Admin κάποιος με τον οποίο δεν μιλάς πια.',
    ]},

    { type: 'heading', text: 'Analytics: σε ποιανού λογαριασμό κάθεται η ιδιότητά σου' },
    { type: 'paragraph', text: [
      'Το Analytics έχει δύο επίπεδα και ο κόσμος βλέπει μόνο το ένα. Πάνω από την ιδιότητα υπάρχει ο λογαριασμός: «The account is the gateway to Analytics, and provides the container for your Analytics properties.» (',
      {text: 'Google Analytics hierarchy', href: GA_HIERARCHY},
      '). Αν η ιδιότητά σου δημιουργήθηκε μέσα στον λογαριασμό του παρόχου, τα δεδομένα σου κάθονται στο σπίτι του.',
    ]},
    { type: 'paragraph', text: [
      'Γιατί έχει σημασία: ρόλους αναθέτει μόνο ο Administrator σε επίπεδο λογαριασμού. Και ο ρόλος που ακούγεται δυνατός δεν είναι — ο Editor έχει πλήρη έλεγχο των ρυθμίσεων της ιδιότητας αλλά δεν διαχειρίζεται χρήστες (',
      {text: 'Access and data-restriction management', href: GA_ROLES},
      '). Δηλαδή αλλάζεις τα πάντα και δεν μπορείς να βγάλεις κανέναν έξω.',
    ]},
    { type: 'paragraph', text: [
      'Το ιστορικό επίσης δεν είναι άπειρο, και αυτό αλλάζει το τι έχει νόημα να ζητάς σε μια παράδοση. Η διατήρηση δεδομένων σε επίπεδο χρήστη ρυθμίζεται σε 2 ή 14 μήνες και ό,τι περνάει το όριο διαγράφεται αυτόματα σε μηνιαία βάση, ενώ τα δεδομένα Google signals κρατούν το πολύ 26 μήνες ανεξάρτητα από τη ρύθμιση (',
      {text: 'Data retention', href: GA_RETENTION},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Στην πλευρά της αναζήτησης το όριο είναι ακόμη πιο συγκεκριμένο: «Search Console keeps data for the last 16 months. As a result, reports in Analytics also include a maximum of 16 months of data.» (',
      {text: 'Connect Search Console to Google Analytics', href: GA_SC_LINK},
      '). Αυτό είναι το πραγματικό «ιστορικό» που μπορεί να σου παραδώσει οποιοσδήποτε — άρα η καθυστέρηση στην παράδοση δεν είναι ενόχληση, είναι απώλεια. Και για να συνδεθούν τα δύο εργαλεία χρειάζεται ρόλος Editor στο Analytics ',
      {text: 'και', strong: true},
      ' ιδιότητα επαληθευμένου ιδιοκτήτη στο Search Console.',
    ]},

    { type: 'heading', text: 'Tag Manager: η μία πόρτα που δεν την ανοίγει ούτε η υποστήριξη' },
    { type: 'paragraph', text: [
      'Το Tag Manager είναι το κουτί μέσα από το οποίο μπαίνουν στην ιστοσελίδα σου οι μετρήσεις, τα pixel και οι μετατροπές. Τα δικαιώματα είναι σε δύο επίπεδα, λογαριασμού και container, και μόνο ο Administrator λογαριασμού τα αλλάζει (',
      {text: 'Managing users and permissions', href: GTM_PERMS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Και τώρα η πρόταση για την οποία υπάρχει ολόκληρη ενότητα εδώ, γιατί είναι η μόνη πηγή σε αυτό το κείμενο που λέει ρητά ότι δεν υπάρχει διάσωση: «Google Tag Manager enforces a strict policy against circumventing the in-product permissions. You could end up in a scenario where nobody in your organization has access to Tag Manager because you can not send a request to our support team to add users.» (',
      {text: 'Managing users and permissions', href: GTM_PERMS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Διάβασέ το άλλη μια φορά. Σε κάθε άλλο εργαλείο εδώ υπάρχει δρόμος επιστροφής: επαληθεύεσαι ξανά με το DNS, αποσυνδέεις έναν manager, ζητάς μεταβίβαση. Εδώ, αν ο μοναδικός Administrator είναι κάποιος που δεν σου απαντάει, ο κώδικας μέτρησης της ιστοσελίδας σου τρέχει και δεν τον ελέγχει κανείς δικός σου. Η συνέπεια είναι μία και είναι ',
      {text: 'πριν', strong: true},
      ' αρχίσει η δουλειά: δικός σου λογαριασμός με δικαιώματα Administrator, από την πρώτη μέρα.',
    ]},

    { type: 'heading', text: 'Το Επιχειρηματικό προφίλ και το ίδιο το WordPress' },
    { type: 'paragraph', text: [
      'Στο Επιχειρηματικό προφίλ η καλή είδηση είναι ότι ο συνηθισμένος τρόπος συνεργασίας δεν σε εκθέτει: «Managers, formerly known as “site managers,” have mostly the same access to the profile as owners. The only exception is they can’t add or remove users or remove the profile.» (',
      {text: 'Manage your Business Profile owners & managers', href: GBP_OWNERS},
      '). Ο πάροχος μπαίνει ως manager, εσύ μένεις primary owner, και δεν μπορεί να σε κλειδώσει έξω.',
    ]},
    { type: 'paragraph', text: [
      'Ο κίνδυνος υπάρχει μόνο στην αντίστροφη περίπτωση, γιατί «Only the primary owner can transfer primary ownership.» (',
      {text: 'Transfer primary ownership of a Business Profile', href: GBP_TRANSFER},
      '). Αν το προφίλ φτιάχτηκε από τον πάροχο και είναι εκείνος primary owner, η μεταβίβαση εξαρτάται από εκείνον. Υπάρχει και μια αναμονή που ξαφνιάζει: «When you become a profile owner or manager, you have to wait 7 days before you can manage some profile features.» (',
      {text: 'Manage your Business Profile owners & managers', href: GBP_OWNERS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Το πιο συχνό κενό όμως δεν είναι σε κανένα εργαλείο της Google, είναι στην ίδια την ιστοσελίδα: «Upon installing WordPress, an Administrator account is automatically created.» Φτιάχνεται τη μέρα της εγκατάστασης, με το email αυτού που την έκανε, και έχει πρόσβαση σε όλες τις λειτουργίες διαχείρισης. Αν θέλει κάποιος απλώς να ανεβάζει άρθρα, ο ρόλος Editor δημοσιεύει και διαχειρίζεται κείμενα χωρίς να αγγίζει ρυθμίσεις, πρόσθετα ή χρήστες (',
      {text: 'WordPress, Roles and Capabilities', href: WP_ROLES},
      ').',
    ]},

    { type: 'cta', heading: 'Αν θέλεις να δεις σε ποιανού όνομα είναι σήμερα τα δικά σου', text: 'Κοιτάμε ποιος κατέχει τι στο domain, στο Search Console, στο Analytics και στο Tag Manager, και σου λέμε γραπτά τι πρέπει να αλλάξει και με ποια σειρά.', label: 'Δες τι περιλαμβάνει', href: '/el/offers/website-seo' },

    { type: 'heading', text: 'Οι καταχωρήσεις σε καταλόγους: το τέταρτο πράγμα' },
    { type: 'paragraph', text: [
      'Το τέταρτο πράγμα που πωλείται ως προώθηση είναι οι καταχωρήσεις — «θα σε βάλουμε σε πεντακόσιους καταλόγους». Εδώ δεν χρειάζεται γνώμη: η Google απαριθμεί ονομαστικά τι θεωρεί ανεπιθύμητη πρακτική συνδέσμων, και μέσα στη λίστα υπάρχει η φράση «Low-quality directory or bookmark site links» (',
      {text: 'Spam policies for Google web search', href: G_SPAM},
      '). Δηλαδή η μαζική καταχώρηση σε καταλόγους χαμηλής ποιότητας δεν είναι υπηρεσία που αγοράζεις· είναι κατονομασμένη παραβίαση.',
    ]},
    { type: 'paragraph', text: [
      'Η συνέπεια διατυπώνεται ως κίνδυνος, όχι ως βεβαιότητα, και αξίζει να κρατήσεις το ίδιο ρήμα: «Sites that violate our policies may rank lower in results or not appear in results at all.» (',
      {text: 'Spam policies for Google web search', href: G_SPAM},
      '). Για τους αγορασμένους συνδέσμους γενικότερα, τα έχει ήδη το κείμενο για το ',
      {text: 'γιατί δεν εμφανίζεται η ιστοσελίδα σου στην Google', href: '/el/blog/giati-den-emfanizetai-i-istoselida-sto-google'},
      '.',
    ]},
    { type: 'paragraph', text: [
      'Τρεις προτάσεις της Google αξίζουν να μπουν αυτούσιες στη συζήτηση με έναν υποψήφιο πάροχο. Ένα όριο: «You should never have to link to an SEO.» Ένα φίλτρο: «Be careful if a company is secretive or won\'t clearly explain what they intend to do.» Και το ποιος πληρώνει τον λογαριασμό: «Ultimately, you are responsible for the actions of any companies you hire, so it\'s best to be sure you know exactly how they intend to "help" you.» (',
      {text: 'Do you need an SEO?', href: G_SEO_NEED},
      '). Αν το περιεχόμενο που γράφεται για λογαριασμό σου είναι παραπλανητικό, το site μπορεί να αφαιρεθεί εντελώς από το ευρετήριο.',
    ]},

    { type: 'heading', text: 'Τι να ζητάς σε μηνιαία αναφορά' },
    { type: 'paragraph', text: [
      'Μια αναφορά που δεν μπορείς να την ελέγξεις δεν είναι αναφορά, είναι διαβεβαίωση. Τα μεγέθη ορίζονται από την ίδια τη Google: «Clicks: The number of times a user clicked your site from Google Search results.», «Impressions: How many times your site appeared in Search results.» και «Average position: The average position of the topmost result from your site.» (',
      {text: 'Performance report', href: SC_PERF},
      '), μαζί με το CTR που τα συνδέει.',
    ]},
    { type: 'paragraph', text: [
      'Πρόσεξε τι ',
      {text: 'δεν', strong: true},
      ' είναι η μέση θέση: δεν είναι «η θέση σου στην Google» και δεν είναι υπόσχεση. Είναι ο μέσος όρος της θέσης του κορυφαίου δικού σου αποτελέσματος, σε ερωτήματα και συσκευές που αλλάζουν κάθε μέρα. Γιατί δεν δέχεσαι εγγύηση θέσης το έχει ήδη το κείμενο για το ',
      {text: 'τι να ζητάς γραπτά πριν αναθέσεις μια ιστοσελίδα', href: '/el/blog/kataskevi-istoselidon-ti-na-zitas'},
      '.',
    ]},
    { type: 'table', caption: 'Τι μπαίνει σε μια μηνιαία αναφορά και τι δεν αποδεικνύει.', head: ['Τι ζητάς', 'Τι σου λέει', 'Τι δεν αποδεικνύει'], rows: [
      [['Κλικ'], ['Πόσες φορές πάτησε κάποιος το αποτέλεσμά σου'], ['Τι έγινε μετά το κλικ']],
      [['Εμφανίσεις'], ['Πόσες φορές εμφανίστηκες στα αποτελέσματα'], ['Ότι σε είδαν, και δεν είναι επισκέπτες']],
      [['CTR'], ['Πόσο συχνά η εμφάνιση γίνεται κλικ'], ['Πωλήσεις ή αιτήματα']],
      [['Μέση θέση'], ['Τη μέση θέση του κορυφαίου δικού σου αποτελέσματος'], ['Ότι «είσαι πρώτος» — ούτε είναι υπόσχεση']],
      [['Οι αλλαγές, με την αιτιολόγησή τους'], ['Τι ακριβώς πληρώθηκε αυτόν τον μήνα'], ['Ότι απέδωσαν· γι’ αυτό υπάρχουν τα νούμερα δίπλα']],
      [['Score εργαλείου'], ['Τη γνώμη ενός εργαλείου'], ['Τίποτα για την κατάταξη']],
    ]},
    { type: 'paragraph', text: [
      'Η τελευταία γραμμή δεν είναι δική μας άποψη: «If your SEO uses a third-party tool, keep in mind that Google doesn\'t evaluate or endorse third-party SEO tools, and these tools don\'t have access to Google\'s internal ranking data.» (',
      {text: 'Do you need an SEO?', href: G_SEO_NEED},
      '). Ένα score μπορεί να είναι χρήσιμο εργαλείο δουλειάς. Δεν είναι μέτρηση αποτελέσματος.',
    ]},
    { type: 'paragraph', text: [
      'Το ότι πρέπει να βλέπεις τις αλλαγές και τον λόγο τους δεν είναι απαίτηση δύσπιστου πελάτη — η Google το γράφει ως ερώτηση που οφείλεις να κάνεις πριν αναθέσεις. Δύο ακόμη από την ίδια σελίδα κλείνουν τη συζήτηση για το τι υπόσχεται κανείς: «What kind of results do you expect to see, and in what timeframe? How do you measure your success?» Και για τον έλεγχο που προηγείται μιας πρότασης: «An SEO audit should be about giving you realistic estimates of improvement, and an estimate of the work involved.» (',
      {text: 'Do you need an SEO?', href: G_SEO_NEED},
      ').',
    ]},

    { type: 'heading', text: 'Ο κατάλογος πριν υπογράψεις' },
    { type: 'paragraph', text: [
      'Οκτώ σημεία. Κανένα δεν κοστίζει τίποτα να απαντηθεί πριν ξεκινήσει η δουλειά. Στείλ’ τα σε ένα email και ζήτα ναι ή όχι στο καθένα.',
    ]},
    { type: 'list', ordered: true, items: [
      ['Το domain είναι καταχωρημένο με δικαιούχο εσένα, και ο κωδικός εξουσιοδότησης είναι στα χέρια σου.'],
      ['Είσαι επαληθευμένος ιδιοκτήτης στο Search Console — όχι απλός χρήστης — και ξέρεις με ποια μέθοδο έγινε η επαλήθευση.'],
      ['Ο λογαριασμός Google Ads δημιουργήθηκε από εσένα· αν όχι, ξέρεις ποιο manager account τον κατέχει.'],
      ['Έχεις Admin πρόσβαση στο Google Ads και δεν είσαι ο μοναδικός που την έχει.'],
      ['Η ιδιότητα Analytics κάθεται σε λογαριασμό όπου εσύ είσαι Administrator, όχι Editor.'],
      ['Στο Tag Manager υπάρχει δικός σου λογαριασμός με δικαιώματα Administrator.'],
      ['Στο Επιχειρηματικό προφίλ είσαι εσύ ο primary owner και ο πάροχος είναι manager.'],
      ['Στην ιστοσελίδα υπάρχει λογαριασμός administrator στο δικό σου email, και οι συνεργάτες περιεχομένου είναι editors.'],
    ]},
    { type: 'paragraph', text: [
      'Και ένα ένατο που δεν είναι λογαριασμός αλλά διαδικασία: γράψε από την αρχή ',
      {text: 'με ποια σειρά αφαιρείται η πρόσβαση', strong: true},
      ' όταν τελειώσει η συνεργασία. Πρώτα επαληθεύεσαι εσύ, μετά φεύγει το token του άλλου· πρώτα η μεταφορά του domain, μετά η αλλαγή δικαιούχου. Η σειρά είναι όλη η διαφορά ανάμεσα σε μια ήρεμη παράδοση και σε μια αναμονή για κάτι που ήταν ήδη δικό σου.',
    ]},

    { type: 'sources', heading: 'Πηγές', items: [
      {label: 'Google Search Central, Do you need an SEO? — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SEO_NEED},
      {label: 'Google Search Central, Spam policies for Google web search — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SPAM},
      {label: 'Google Search Central, Analyze social and video platform content — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SOCIAL},
      {label: 'Google Analytics Help, Default channel group — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GA_CHANNELS},
      {label: 'Google Analytics Help, Access and data-restriction management — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GA_ROLES},
      {label: 'Google Analytics Help, Google Analytics hierarchy — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GA_HIERARCHY},
      {label: 'Google Analytics Help, Data retention — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GA_RETENTION},
      {label: 'Google Analytics Help, Connect Search Console to Google Analytics — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GA_SC_LINK},
      {label: 'Search Console Help, About Search Console — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_ABOUT},
      {label: 'Search Console Help, Add a website or platform property — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_ADD},
      {label: 'Search Console Help, Verify your site ownership — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_VERIFY},
      {label: 'Search Console Help, Managing owners, users, and permissions — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_OWNERS},
      {label: 'Search Console Help, About platform properties — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_PLATFORM},
      {label: 'Search Console Help, Performance report (Search results) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_PERF},
      {label: 'Google Ads Help, About access levels in your Google Ads account — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: ADS_ACCESS},
      {label: 'Google Ads Help, About ownership of client accounts — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: ADS_OWNER},
      {label: 'Google Ads Help, Reactivate a canceled Google Ads account — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: ADS_REACTIVATE},
      {label: 'Google Business Profile Help, Manage your Business Profile owners & managers — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GBP_OWNERS},
      {label: 'Google Business Profile Help, Transfer primary ownership of a Business Profile — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GBP_TRANSFER},
      {label: 'Google Tag Manager Help, Managing users and permissions — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GTM_PERMS},
      {label: 'ICANN, Transfer Policy — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: ICANN_TRANSFER},
      {label: 'Μητρώο Ονομάτων Internet .gr και .ελ (ΙΤΕ), Συχνές ερωτήσεις — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GR_REGISTRY},
      {label: 'WordPress Documentation, Roles and Capabilities — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WP_ROLES},
    ]},
  ],
};

export default post;
