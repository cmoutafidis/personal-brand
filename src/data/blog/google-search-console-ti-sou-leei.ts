import type {BlogPost} from '@/types/blog';

// Article 14 of the Greek batch. The angle is THE TOOL: what the four reports actually measure,
// and — the half that is barely written in Greek — what they deliberately do not show. Every
// factual sentence about the tool's behaviour is a verbatim quote from Google's own
// documentation, re-read on 2026-09-02, with the URL on the sentence that carries it.
//
// Deliberate omissions, so that a later editor does not "fix" them back in:
//   - Ownership, verification tokens and user permissions are NOT here. That is the property of
//     the article about what you actually buy when you buy προώθηση. Only the data-scope half of
//     the property types (Domain vs URL-prefix) is used, because it decides what you see.
//   - robots.txt, noindex and the three stages belong to the live article 1. The page-indexing
//     statuses are named and linked, never re-explained.
//   - Nothing about guaranteed positions beyond a link: article 2 owns that.
//   - AI traffic: BOTH halves, together. It is inside the overall totals AND, since 31 August
//     2026, broken out in the generative AI performance report, which draws from the same Web
//     search type — so it is an analysis of those totals, never an addition to them. The
//     documentation says the opposite — it is folded into the overall search traffic.
//   - No search volumes, no positions, no client results, no durations except documented Google
//     statements attributed to Google.

const SC_ABOUT = 'https://support.google.com/webmasters/answer/9128668?hl=en';
const SC_POSITION = 'https://support.google.com/webmasters/answer/7042828?hl=en';
const SC_PERF_SETUP = 'https://support.google.com/webmasters/answer/7576553?hl=en';
const SC_PERF_DIM = 'https://support.google.com/webmasters/answer/17011259?hl=en';
const SC_PERF_DISCREP = 'https://support.google.com/webmasters/answer/17010575?hl=en';
const SC_PERF_DATA = 'https://support.google.com/webmasters/answer/17011364?hl=en';
const SC_PERF_FILTER = 'https://support.google.com/webmasters/answer/17011165?hl=en';
const SC_PAGEINDEX = 'https://support.google.com/webmasters/answer/7440203?hl=en';
const SC_INSPECT = 'https://support.google.com/webmasters/answer/9012289?hl=en';
const SC_SITEMAPS = 'https://support.google.com/webmasters/answer/7451001?hl=en';
const SC_VERIFY = 'https://support.google.com/webmasters/answer/9008080?hl=en';
const SC_ADDPROP = 'https://support.google.com/webmasters/answer/34592?hl=en';
const SC_LINKS = 'https://support.google.com/webmasters/answer/9049606?hl=en';
const SC_REMOVALS = 'https://support.google.com/webmasters/answer/9689846?hl=en';
const SC_CWV = 'https://support.google.com/webmasters/answer/9205520?hl=en';
const SC_MANUAL = 'https://support.google.com/webmasters/answer/9044175?hl=en';
const SC_ANOMALIES = 'https://support.google.com/webmasters/answer/6211453?hl=en';
const SC_INSIGHTS = 'https://support.google.com/webmasters/answer/16308503?hl=en';
const SC_GENAI = 'https://support.google.com/webmasters/answer/16984139?hl=en';
const G_BLOG_GENAI = 'https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports';
const GA_RETENTION = 'https://support.google.com/analytics/answer/10737381?hl=en';
const G_GA_VS_SC = 'https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console';
const G_SITEMAPS = 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview';
const G_AI = 'https://developers.google.com/search/docs/appearance/ai-features';

const ART_INDEXING = '/el/blog/giati-den-emfanizetai-i-istoselida-sto-google';
const ART_PROFILE = '/el/blog/profil-epicheirisis-google';

const post: BlogPost = {
  id: 'google-search-console-ti-sou-leei',
  slug: 'google-search-console-ti-sou-leei',
  title: 'Google Search Console: τι σου λέει πραγματικά, και τι δεν σου λέει',
  metaTitle: 'Google Search Console: τι σου λέει και τι δεν σου λέει',
  excerpt: 'Οι τέσσερις αναφορές που έχουν σημασία, τι μετράει ακριβώς η καθεμία, και τα όρια που δεν γράφει κανείς: μέση θέση, δείγμα, ζώνη ώρας.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 35,
  tags: ['Αναζήτηση', 'Ιστοσελίδες', 'Ανάθεση έργου'],
  body: [
    {type: 'paragraph', text: [
      'Σχεδόν κάθε ερώτηση για την παρουσία σου στην Google απαντιέται με γνώμη: «θέλει δουλειά το SEO», «είναι ο ανταγωνισμός», «δεν σε αγαπάει ο αλγόριθμος». Υπάρχει όμως ένα εργαλείο που απαντά με δεδομένα, δεν κοστίζει τίποτα, και το δικαιούσαι επειδή απλώς η ιστοσελίδα είναι δική σου: ',
      {text: '«Google Search Console is a free service offered by Google that helps you monitor, maintain, and troubleshoot your site\'s presence in Google Search results.»', href: SC_ABOUT},
      ' Είναι το μοναδικό σημείο όπου βλέπεις τα δικά σου νούμερα από την πλευρά της αναζήτησης, και όχι την εκτίμηση κάποιου τρίτου εργαλείου.',
    ]},
    {type: 'paragraph', text: [
      'Δεν είναι προϋπόθεση για να υπάρχεις. Η ίδια η Google το γράφει καθαρά: ',
      {text: '«You don\'t have to sign up for Search Console to be included in Google Search results, but Search Console helps you understand and improve how Google sees your site.»', href: SC_ABOUT},
      ' Δηλαδή δεν αγοράζει παρουσία και δεν χαρίζει θέσεις. Δίνει όραση.',
    ]},
    {type: 'paragraph', text: [
      'Το πιο χρήσιμο μισό αυτού του κειμένου δεν είναι τι δείχνει. Είναι ',
      {text: 'τι δεν δείχνει', strong: true},
      ', γιατί εκεί γίνονται τα λάθη που κοστίζουν αποφάσεις: η «μέση θέση» δεν είναι η θέση σου, τα ερωτήματα στον πίνακα δεν είναι όλα τα ερωτήματά σου, η «χθεσινή» μέρα δεν είναι η δική σου χθεσινή μέρα, και το «Ανακαλύφθηκε — δεν έχει ευρετηριαστεί» δεν είναι σφάλμα. Παρακάτω περνάμε τις τέσσερις αναφορές που έχουν σημασία, μία μία, με τα λόγια της τεκμηρίωσης δίπλα σε κάθε ισχυρισμό.',
    ]},

    {type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε πρόταση της Google που παρατίθεται εδώ διαβάστηκε εκείνη τη μέρα στη σελίδα βοήθειας που τη συνοδεύει. Οι σελίδες της αναφοράς Απόδοσης χωρίστηκαν πρόσφατα σε περισσότερες από μία, οπότε παλιοί σύνδεσμοι που θυμάσαι μπορεί να μη δείχνουν πια εκεί που νόμιζες.',
    ]},

    {type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Χρειάζομαι λογαριασμό Search Console για να με βρίσκει η Google;', a: 'Όχι. Η Google γράφει ότι δεν χρειάζεται να εγγραφείς για να συμπεριληφθείς στα αποτελέσματα αναζήτησης, αλλά ότι το εργαλείο σε βοηθά να καταλάβεις και να βελτιώσεις το πώς βλέπει η Google την ιστοσελίδα σου. Είναι όργανο μέτρησης, όχι εισιτήριο εισόδου.'},
      {q: 'Η «μέση θέση» είναι η θέση στην οποία με βλέπει ο κόσμος;', a: 'Όχι. Είναι μέσος όρος πάνω σε όλα τα ερωτήματα στα οποία εμφανίστηκες, και η ίδια η Google σημειώνει ότι στη δική σου αναζήτηση η θέση μπορεί να είναι διαφορετική εξαιτίας του ιστορικού σου, της τοποθεσίας και άλλων παραγόντων. Ένα στιγμιότυπο οθόνης από τον υπολογιστή σου δεν αποδεικνύει τίποτα.'},
      {q: 'Γιατί οι αριθμοί δεν συμφωνούν με το Google Analytics;', a: 'Επειδή δεν μετρούν το ίδιο πράγμα. Η Google γράφει ότι τα κλικ και οι συνεδρίες υπολογίζονται διαφορετικά, ότι το Search Console αναφέρει μόνο το κανονικό URL ενώ το Analytics κάθε URL με τον κώδικα παρακολούθησης, και ότι η ζώνη ώρας δεν είναι ίδια. Η διαφορά είναι το κανονικό, όχι το ύποπτο.'},
      {q: 'Το «Ανακαλύφθηκε — δεν έχει ευρετηριαστεί» είναι σφάλμα;', a: 'Όχι απαραίτητα. Η Google γράφει ότι οι σελίδες που δεν ευρετηριάστηκαν δεν είναι απαραίτητα σφάλμα και ότι πρέπει να διαβάσεις τη συγκεκριμένη περιγραφή. Για τη συγκεκριμένη κατάσταση λέει ότι βρήκε τη σελίδα, ήθελε να να την ανιχνεύσει, υπολόγισε ότι θα υπερφόρτωνε τον ιστότοπο και ανέβαλε τη ανίχνευση.'},
      {q: 'Γιατί λείπουν ερωτήματα από τον πίνακα;', a: 'Για δύο ξεχωριστούς λόγους. Ο ένας είναι η ιδιωτικότητα: κάποια ερωτήματα ανωνυμοποιούνται και δεν εμφανίζονται ως γραμμές. Ο άλλος είναι τεχνικός: η Google γράφει ότι αποθηκεύει και δείχνει μόνο τις πιο σημαντικές γραμμές, και ότι ο πίνακας δείχνει το πολύ χίλιες.'},
      {q: 'Πόσο πίσω πάνε τα δεδομένα και πόσο φρέσκα είναι;', a: 'Η βοήθεια του Google Analytics γράφει ότι το Search Console κρατά δεδομένα των τελευταίων δεκαέξι μηνών. Για τη φρεσκάδα, η ίδια η Google γράφει ότι υπάρχει καθυστέρηση ανάμεσα στον υπολογισμό και την εμφάνιση, και ότι τα πιο πρόσφατα νούμερα είναι μερικές φορές προκαταρκτικά.'},
    ]},

    {type: 'heading', text: 'Τι είναι, με μια πρόταση — και τι δεν είναι'},
    {type: 'paragraph', text: [
      'Το Search Console κοιτάζει μία και μόνο στιγμή: αυτήν πριν από το κλικ. Πόσες φορές εμφανίστηκες, σε ποια ερωτήματα, πόσοι πάτησαν. Η τεκμηρίωση το λέει με μία φράση: ',
      {text: '«It focuses on activity that happened before a person arrived at your website from Google Search.»', href: G_GA_VS_SC},
      ' Ό,τι συμβαίνει μετά είναι δουλειά άλλου εργαλείου: ',
      {text: '«Google Analytics: Provides data about visitors\' interactions with your website, such as which pages they visit, how long they stay, and what actions they take.»', href: G_GA_VS_SC},
    ]},
    {type: 'paragraph', text: [
      'Η διάκριση δεν είναι σχολαστικισμός, είναι το πιο συχνό μπέρδεμα σε κάθε συζήτηση για «αναφορές». Αν η ερώτησή σου είναι ',
      {text: 'γιατί δεν έρχεται κόσμος', strong: true},
      ', απαντά το Search Console. Αν η ερώτησή σου είναι ',
      {text: 'γιατί έρχεται κόσμος και δεν αγοράζει', strong: true},
      ', απαντά το Analytics. Τα δύο μαζί δίνουν μια διαδρομή· το ένα χωρίς το άλλο δίνει τη μισή.',
    ]},
    {type: 'paragraph', text: [
      'Και μια αρνητική διευκρίνιση που γλιτώνει χρόνο: το Search Console δεν είναι εργαλείο κατάταξης και δεν κάνει τίποτα από μόνο του. Δεν ανεβάζει, δεν κατεβάζει, δεν «στέλνει» τη σελίδα σου κάπου. Είναι ο πίνακας οργάνων. Το αυτοκίνητο το οδηγείς εσύ.',
    ]},

    {type: 'heading', text: 'Ποια δεδομένα βλέπεις: το ορίζει η ιδιοκτησία'},
    {type: 'paragraph', text: [
      'Πριν διαβάσεις οποιονδήποτε αριθμό, πρέπει να ξέρεις τι ακριβώς μετράει. Αυτό το ορίζει ο τύπος της ιδιοκτησίας (property) που έχεις προσθέσει. Η ιδιοκτησία τύπου Domain είναι η ευρεία: ',
      {text: '«A Domain property aggregates data for all subdomains, protocols, and subpaths of the property.»', href: SC_ADDPROP},
      ' Η ιδιοκτησία τύπου URL-prefix είναι στενή, και εκεί κρύβεται μια παγίδα που έχει κοστίσει πολλές λάθος εντυπώσεις: ',
      {text: '«If your site supports multiple protocols (http and https), you must add a separate property for each protocol.»', href: SC_ADDPROP},
    ]},
    {type: 'paragraph', text: [
      'Πρακτικά: αν κάποτε πρόσθεσες τη διεύθυνση με http και η ιστοσελίδα σήμερα τρέχει σε https, βλέπεις ένα γράφημα που πέφτει στο μηδέν και βγάζεις το συμπέρασμα ότι εξαφανίστηκες από την Google. Δεν εξαφανίστηκες· κοιτάς άλλη ιδιοκτησία. Το ίδιο ισχύει και για το www: με URL-prefix, το www και το χωρίς www είναι δύο διαφορετικά πράγματα.',
    ]},
    {type: 'paragraph', text: [
      'Δεύτερο πράγμα που πρέπει να ξέρεις πριν κοιτάξεις ιστορικό: δεν υπάρχει αναδρομή. Η Google γράφει ότι ',
      {text: '«Data is collected for a property as soon as anyone adds it in Search Console, even before verification occurs. However, it takes a few days for data to start to accrue for the property.»', href: SC_VERIFY},
      ' Η μέρα που άνοιξες τον λογαριασμό είναι η μέρα μηδέν. Ό,τι έγινε πριν, δεν το βλέπεις ποτέ. Γι’ αυτό το να προστεθεί η ιδιοκτησία είναι η πρώτη κίνηση σε κάθε καινούργια ιστοσελίδα, ακόμα κι αν δεν σκοπεύεις να την κοιτάξεις για μήνες.',
    ]},

    {type: 'heading', text: 'Αναφορά 1: Απόδοση — τέσσερις αριθμοί, τρεις παρανοήσεις'},
    {type: 'paragraph', text: [
      'Είναι η αναφορά που κοιτάνε όλοι και η μόνη που φτάνει στις μηνιαίες παρουσιάσεις. Ανοίγει σε μια προεπιλεγμένη περίοδο: ',
      {text: '«The default view of the report shows click and impression data for your site in Google Search results for the past three months.»', href: SC_PERF_SETUP},
      ' Δίνει τέσσερα μεγέθη — κλικ, εμφανίσεις, ποσοστό κλικ (CTR) και μέση θέση — και τα τρία από τα τέσσερα διαβάζονται συστηματικά λάθος.',
    ]},

    {type: 'subheading', text: 'Η «εμφάνιση» δεν σημαίνει ότι σε είδαν'},
    {type: 'paragraph', text: [
      'Ο ορισμός έχει μια παρένθεση που αλλάζει τα πάντα: ',
      {text: '«An impression means that a user has seen (or potentially seen) a link to your site in Search, Discover, or News.»', href: SC_POSITION},
      ' Το «ενδεχομένως είδε» δεν είναι ευγένεια. Είναι κυριολεξία, και η επόμενη πρόταση εξηγεί γιατί: ',
      {text: '«In general, an impression is counted whenever an item appears in the current page of results, whether or not the item is scrolled into view, as long as the user need not click to see more results (such as being required to click "see more" to see the link).»', href: SC_POSITION},
    ]},
    {type: 'paragraph', text: [
      'Δηλαδή αν ο σύνδεσμός σου βρισκόταν στη σελίδα αποτελεσμάτων αλλά ο χρήστης δεν κατέβηκε ποτέ ως εκεί, μέτρησε ως εμφάνιση. Δέκα χιλιάδες εμφανίσεις δεν σημαίνουν δέκα χιλιάδες ανθρώπους που σε είδαν. Σημαίνουν δέκα χιλιάδες φορές που ήσουν στη σελίδα. Είναι μέτρο παρουσίας, όχι προσοχής — και γι’ αυτό ένα χαμηλό CTR δεν είναι πάντα κακός τίτλος· μερικές φορές είναι θέση που κανείς δεν φτάνει.',
    ]},
    {type: 'paragraph', text: [
      'Υπάρχει και μια κατηγορία συνδέσμων που δεν μετριέται καθόλου: ',
      {text: '«If a link is a query refinement link, clicks and impressions are not counted for that link.»', href: SC_POSITION},
      ' Οι σύνδεσμοι που η ίδια η Google βάζει για να στενέψει την αναζήτηση δεν περνάνε στα δικά σου νούμερα.',
    ]},

    {type: 'subheading', text: 'Η μέση θέση δεν είναι η θέση σου'},
    {type: 'paragraph', text: [
      'Είναι η στήλη που γεννάει τις περισσότερες λάθος αποφάσεις, και η τεκμηρίωση την αποδομεί μόνη της: ',
      {text: '«Position value is the average position for all searches. For your specific search your position might be different than the average because of many variables, such as your search history, location, and so on.»', href: SC_POSITION},
      ' Ένας αριθμός που είναι μέσος όρος πάνω σε όλα τα ερωτήματα, όλες τις μέρες και όλους τους ανθρώπους δεν περιγράφει καμία συγκεκριμένη αναζήτηση — ούτε τη δική σου.',
    ]},
    {type: 'paragraph', text: [
      'Το ίδιο ισχύει και αντίστροφα, όταν ψάχνεις μόνος σου για να «επαληθεύσεις»: ',
      {text: '«Even if a query appears in your list, you might not see your site in results if you run the same query in Google Search.»', href: SC_PERF_SETUP},
      ' Το ερώτημα υπάρχει στα δεδομένα σου και ταυτόχρονα δεν το βλέπεις στην οθόνη σου. Και τα δύο είναι σωστά.',
    ]},
    {type: 'paragraph', text: [
      'Υπάρχει και μια δεύτερη λεπτομέρεια, πιο τεχνική και πιο χρήσιμη: η μέση θέση στο ',
      {text: 'γράφημα', strong: true},
      ' δεν σημαίνει το ίδιο με τη μέση θέση σε μια ',
      {text: 'γραμμή του πίνακα', strong: true},
      '. Στο γράφημα η Google ορίζει ',
      {text: '«Average position: The average position of the topmost result from your site.»', href: SC_PERF_SETUP},
      ' — δηλαδή του κορυφαίου αποτελέσματος ολόκληρης της ιστοσελίδας. Στον πίνακα, ο αριθμός αφορά τη συγκεκριμένη γραμμή, τη συγκεκριμένη σελίδα ή το συγκεκριμένο ερώτημα.',
    ]},
    {type: 'paragraph', text: [
      'Η αιτία είναι ο τρόπος συγκέντρωσης. Όταν τα δεδομένα συγκεντρώνονται ανά ιδιοκτησία, ',
      {text: '«All results for the same query that point to the same Search Console property are counted once in total.»', href: SC_PERF_DATA},
      ' Και η συνέπεια δηλώνεται ρητά: ',
      {text: '«Because of these different counting methods, the click-through rate (CTR) and average position are generally higher when aggregating by property, if multiple pages from the same site appear in the Search results.»', href: SC_PERF_DATA},
      ' Άρα το να συγκρίνεις τον αριθμό του γραφήματος με τον αριθμό μιας γραμμής είναι σαν να συγκρίνεις δύο διαφορετικά μεγέθη με το ίδιο όνομα.',
    ]},
    {type: 'paragraph', text: [
      'Τελευταίο, και εξηγεί την παύλα που βλέπεις σε κάποιες γραμμές: ',
      {text: '«A link must get an impression for its position to be recorded.»', href: SC_POSITION},
      ' Χωρίς εμφάνιση δεν υπάρχει θέση — όχι θέση μηδέν, όχι κακή θέση, καμία θέση.',
    ]},

    {type: 'subheading', text: 'Τα ερωτήματα που λείπουν, και οι δύο διαφορετικοί λόγοι'},
    {type: 'paragraph', text: [
      'Ο πίνακας των ερωτημάτων δεν είναι η λίστα των ερωτημάτων σου. Ο πρώτος λόγος είναι η ιδιωτικότητα των χρηστών: ',
      {text: '«Privacy: To protect user privacy, the Performance report does not show all data. For example, it omits some queries that are searched a very small number of times.»', href: SC_PERF_DISCREP},
      ' Αυτά λέγονται ανωνυμοποιημένα ερωτήματα, και η συμπεριφορά τους είναι πιο λεπτή απ’ όσο νομίζει ο περισσότερος κόσμος.',
    ]},
    {type: 'paragraph', text: [
      'Δεν χάνονται από τα σύνολα. Χάνονται από τον πίνακα: ',
      {text: '«They’re included in chart totals, unless a query filter is applied (for example, "queries containing" or "queries not containing" a given string).»', href: SC_PERF_DIM},
      ' Γι’ αυτό το άθροισμα των γραμμών δεν βγάζει ποτέ το νούμερο του γραφήματος. Και γι’ αυτό, τη στιγμή που βάζεις φίλτρο ερωτήματος, αλλάζει και το ίδιο το σύνολο: ',
      {text: '«Filtering your data by query or URL can affect the report totals due to data truncation and the omission of anonymized queries.»', href: SC_PERF_FILTER},
    ]},
    {type: 'paragraph', text: [
      'Ο δεύτερος λόγος είναι εντελώς ξεχωριστός και τον προσπερνούν σχεδόν όλοι: ',
      {text: '«Data truncation: Due to internal limitations, Search Console stores and shows only the most important data rows. Not all queries beyond anonymized queries are shown in the table.»', href: SC_PERF_DIM},
      ' Πάνω από αυτό μπαίνει και ένα σκέτο όριο μεγέθους: ',
      {text: '«The table can display a maximum of 1,000 rows, so some rare or long-tail rows might be omitted from the table, but included in the chart total.»', href: SC_PERF_DISCREP},
    ]},
    {type: 'paragraph', text: [
      'Το πρακτικό συμπέρασμα είναι ένα και σου γλιτώνει ώρες: ο πίνακας ερωτημάτων είναι ',
      {text: 'δείγμα', strong: true},
      '. Χρησιμοποίησέ τον για να καταλάβεις μοτίβα — τι γλώσσα χρησιμοποιεί ο κόσμος, ποια ερωτήματα δεν περίμενες — όχι για να βγάλεις αθροίσματα. Το άθροισμα είναι στο γράφημα.',
    ]},

    {type: 'table', caption: 'Οι τέσσερις στήλες της αναφοράς Απόδοσης, και τι σημαίνει πραγματικά η καθεμία.', head: ['Στήλη', 'Τι νομίζουν οι περισσότεροι', 'Τι μετράει στην πραγματικότητα'], rows: [
      [[{text: 'Εμφανίσεις', strong: true}], ['Πόσοι άνθρωποι με είδαν'], ['Πόσες φορές ο σύνδεσμός σου υπήρχε στη σελίδα αποτελεσμάτων — ακόμα κι αν ο χρήστης δεν κατέβηκε ως εκεί']],
      [[{text: 'Κλικ', strong: true}], ['Επισκέπτες'], ['Κλικ από την αναζήτηση της Google. Οι συνεδρίες στο Analytics υπολογίζονται με άλλον τρόπο, οπότε δεν συμπίπτουν']],
      [[{text: 'CTR', strong: true}], ['Πόσο καλός είναι ο τίτλος μου'], ['Κλικ προς εμφανίσεις. Επηρεάζεται εξίσου από τη θέση, και αλλάζει ανάλογα με το αν η συγκέντρωση γίνεται ανά ιδιοκτησία ή ανά σελίδα']],
      [[{text: 'Μέση θέση', strong: true}], ['Η θέση στην οποία με βλέπει ο κόσμος'], ['Μέσος όρος για όλες τις αναζητήσεις. Στη δική σου αναζήτηση η θέση μπορεί να είναι διαφορετική, λέει η Google']],
      [[{text: 'Ο πίνακας', strong: true}], ['Όλα μου τα ερωτήματα'], ['Δείγμα: χωρίς τα ανωνυμοποιημένα ερωτήματα, με περικοπή γραμμών και όριο χιλίων γραμμών']],
    ]},

    {type: 'heading', text: 'Πότε μετρήθηκαν αυτά; Ώρα, καθυστέρηση και ιστορικό'},
    {type: 'paragraph', text: [
      'Η αναφορά δεν μετράει στη δική σου ώρα, και δεν αλλάζει: ',
      {text: '«Time zones: In all views (except the 24-hour view), the Performance report tracks and labels daily data in Pacific Time (PT).»', href: SC_PERF_DISCREP},
      ' Στη σύγκριση με το Analytics η ίδια πληροφορία λέγεται ακόμα πιο ξεκάθαρα: ',
      {text: '«You can choose your timezone in Google Analytics, but you can\'t customize that in Search Console, where the default time zone is Pacific Time (PT).»', href: G_GA_VS_SC},
    ]},
    {type: 'paragraph', text: [
      'Για κάποιον που κάθεται στην Ελλάδα, αυτό σημαίνει ότι η «χθεσινή μέρα» της αναφοράς δεν είναι η χθεσινή σου μέρα. Αν ανέβασες κάτι χθες το βράδυ και ψάχνεις να δεις την επίδρασή του, κοιτάς μια μέρα που στο Search Console δεν έχει καν τελειώσει.',
    ]},
    {type: 'paragraph', text: [
      'Μετά υπάρχει η καθυστέρηση, και η Google τη δηλώνει: ',
      {text: '«Time lag: There can be a lag between when the numbers are calculated and when they are visible. Collected data is usually available in 2–3 days.»', href: SC_PERF_DISCREP},
      ' Όταν τα δεδομένα περνούν και στο Analytics, η βοήθεια εκεί δίνει τη δική της διατύπωση: ',
      {text: '«Search Console data is available in Search Console and in Analytics 48 hours after it is collected by Search Console.»', href: GA_RETENTION},
      ' Και το πιο πρόσφατο κομμάτι είναι ρευστό: ',
      {text: '«The newest data in the Performance report is sometimes preliminary, meaning it’s still being collected and may change in the next few hours.»', href: SC_PERF_DATA},
    ]},
    {type: 'paragraph', text: [
      'Το βάθος του ιστορικού είναι επίσης πεπερασμένο. Η βοήθεια του Google Analytics το γράφει με νούμερο: ',
      {text: '«Search Console keeps data for the last 16 months.»', href: GA_RETENTION},
      ' Δεν έχεις σύγκριση πενταετίας, ούτε θα αποκτήσεις. Αν κάποιος σου υπόσχεται ανάλυση «από την αρχή της ιστοσελίδας», ρώτησέ τον από πού την παίρνει.',
    ]},

    {type: 'heading', text: 'Αναφορά 2: Ευρετηρίαση σελίδων — το «δεν ευρετηριάστηκε» δεν είναι σφάλμα'},
    {type: 'paragraph', text: [
      'Είναι η αναφορά που τρομάζει τους περισσότερους, επειδή δείχνει έναν μεγάλο αριθμό σελίδων σε μια στήλη που λέγεται «Δεν έχουν ευρετηριαστεί». Η ίδια η τεκμηρίωση απαντά στον πανικό: ',
      {text: '«These pages have not been indexed, but not necessarily because of an error. Read the specific description to see if this is an error that you should address.»', href: SC_PAGEINDEX},
      ' Και το επαναλαμβάνει, με έμφαση: ',
      {text: '«Remember that Not indexed is not necessarily bad. Examine the reason given for not indexing a given URL.»', href: SC_PAGEINDEX},
    ]},
    {type: 'paragraph', text: [
      'Η δουλειά σου εδώ δεν είναι να μηδενίσεις τον αριθμό. Είναι να διαβάσεις την ετικέτα δίπλα σε κάθε ομάδα. Τρεις ετικέτες παρεξηγούνται συστηματικά.',
    ]},
    {type: 'paragraph', text: [
      {text: '«Ανακαλύφθηκε — δεν έχει ευρετηριαστεί».', strong: true},
      ' Θα διαβάσεις σε πολλά άρθρα ότι σημαίνει «φτωχό περιεχόμενο». Η τεκμηρίωση λέει κάτι εντελώς διαφορετικό και πολύ πιο συγκεκριμένο: ',
      {text: '«The page was found by Google, but not crawled yet. Typically, Google wanted to crawl the URL but this was expected to overload the site; therefore Google rescheduled the crawl.»', href: SC_PAGEINDEX},
      ' Δηλαδή είναι θέμα ρυθμού και αντοχής του διακομιστή σου, όχι κρίση για το κείμενό σου.',
    ]},
    {type: 'paragraph', text: [
      {text: '«Σαρώθηκε — δεν έχει ευρετηριαστεί».', strong: true},
      ' Εδώ η Google δίνει και οδηγία, και είναι το αντίθετο απ’ αυτό που κάνουν οι περισσότεροι: ',
      {text: '«The page was crawled by Google but not indexed. It may or may not be indexed in the future; no need to resubmit this URL for crawling.»', href: SC_PAGEINDEX},
      ' Το να πατάς ξανά και ξανά «Αίτημα ευρετηρίασης» για την ίδια σελίδα αντιφάσκει με τη ρητή οδηγία της πηγής.',
    ]},
    {type: 'paragraph', text: [
      {text: '«Διπλότυπο χωρίς κανονικό URL επιλεγμένο από τον χρήστη».', strong: true},
      ' Ακούγεται σαν σφάλμα, δεν είναι: ',
      {text: '«This is not an error, but is working as intended, because Google does not serve duplicate pages.»', href: SC_PAGEINDEX},
    ]},
    {type: 'paragraph', text: [
      'Δύο ετικέτες που θα δεις εδώ — αυτές που λένε ότι το ίδιο το αρχείο robots.txt ή μια ετικέτα noindex κρατούν τη σελίδα έξω — έχουν μηχανισμό που εξηγείται αλλού, στο ',
      {text: 'γιατί δεν εμφανίζεται η ιστοσελίδα σου στην Google', href: ART_INDEXING},
      '. Εδώ αρκεί να ξέρεις ότι η αναφορά σου λέει ποια από τις δύο περιπτώσεις είναι, με το όνομά της.',
    ]},
    {type: 'paragraph', text: [
      'Τρία όρια της ίδιας της αναφοράς, για να μην τη διαβάζεις σαν κατάλογο. Πρώτο, η λίστα παραδειγμάτων δεν είναι πλήρης: ',
      {text: '«Note that the list of example URLs in the report is limited to 1,000 items, and isn\'t guaranteed to show all URLs in a given status, even when less than 1,000 items.»', href: SC_PAGEINDEX},
      ' Δεύτερο, τα σφάλματα 404 κόβονται χρονικά: ',
      {text: '«To avoid showing you an eternally growing list of 404 errors, the Page indexing report shows only URLs that have shown 404 errors in the past month.»', href: SC_PAGEINDEX},
      ' Τρίτο, και το πιο σημαντικό για τις προσδοκίες: ',
      {text: '«Just because a page is indexed doesn\'t guarantee that it will show up in your search results.»', href: SC_PAGEINDEX},
    ]},

    {type: 'table', caption: 'Τι σημαίνουν οι καταστάσεις που παρεξηγούνται πιο συχνά.', head: ['Κατάσταση', 'Τι λέει η τεκμηρίωση', 'Τι κάνεις'], rows: [
      [['Ανακαλύφθηκε — δεν έχει ευρετηριαστεί'], ['Βρέθηκε, δεν ανιχνεύθηκε ακόμα· η ανίχνευση αναβλήθηκε γιατί υπολογίστηκε ότι θα υπερφόρτωνε τον ιστότοπο'], ['Κοιτάς τον διακομιστή και τον χρόνο απόκρισης, όχι το κείμενο']],
      [['Σαρώθηκε — δεν έχει ευρετηριαστεί'], ['Σαρώθηκε αλλά δεν ευρετηριάστηκε· μπορεί να ευρετηριαστεί στο μέλλον, μπορεί και όχι'], ['Δεν ξαναϋποβάλλεις. Η Google γράφει ρητά ότι δεν χρειάζεται']],
      [['Διπλότυπο χωρίς κανονικό URL από τον χρήστη'], ['Δεν είναι σφάλμα· λειτουργεί όπως πρέπει, γιατί η Google δεν προβάλλει διπλότυπες σελίδες'], ['Διαλέγεις εσύ ποιο URL θέλεις ως κανονικό και το δηλώνεις']],
      [['Σελίδα με ανακατεύθυνση'], ['Κατάσταση, όχι πρόβλημα'], ['Την αγνοείς, εκτός αν η ανακατεύθυνση είναι λάθος']],
      [['Δεν βρέθηκε (404)'], ['Η αναφορά δείχνει μόνο όσα εμφάνισαν 404 τον τελευταίο μήνα'], ['Ελέγχεις αν κάποια από αυτές ήταν σελίδα που πουλούσε κάτι']],
    ]},

    {type: 'heading', text: 'Αναφορά 3: Έλεγχος URL — σου δείχνει το παρελθόν, όχι το παρόν'},
    {type: 'paragraph', text: [
      'Αυτό είναι το πιο συχνό λάθος ανάγνωσης σε ολόκληρο το εργαλείο, και είναι ύπουλο επειδή η οθόνη δείχνει κάτι που μοιάζει ζωντανό. Δεν είναι: ',
      {text: '«This is not a live test. The results shown are from most recently indexed version of a page, not the live version on the web.»', href: SC_INSPECT},
      ' Και για να μην υπάρχει αμφιβολία: ',
      {text: '«All information shown in this tool is derived from this last crawled version.»', href: SC_INSPECT},
    ]},
    {type: 'paragraph', text: [
      'Το σενάριο γράφεται μόνο του. Διορθώνεις κάτι το πρωί, ξαναελέγχεις το URL το μεσημέρι, βλέπεις το ίδιο πρόβλημα και συμπεραίνεις ότι η διόρθωση δεν έπιασε. Βλέπεις όμως την παλιά έκδοση, γιατί δεν πάτησες «Έλεγχος ζωντανού URL». Είναι διαφορετικό κουμπί και δίνει διαφορετική απάντηση.',
    ]},
    {type: 'paragraph', text: [
      'Ο ζωντανός έλεγχος όμως έχει τα δικά του τυφλά σημεία, και είναι καλό να τα ξέρεις πριν τον εμπιστευτείς: ',
      {text: '«The live test does not check for the presence of the URL in any sitemaps or any referring pages.»', href: SC_INSPECT},
      ' και ',
      {text: '«The live test does not test for all possible indexing issues, including whether this is a duplicate or alternate page.»', href: SC_INSPECT},
      ' Δηλαδή μπορεί να σου πει «η σελίδα είναι διαθέσιμη» και η σελίδα να μη μπει ποτέ στο ευρετήριο επειδή θεωρείται διπλότυπη.',
    ]},
    {type: 'paragraph', text: [
      'Και για να κλείσει η συζήτηση με όποιον υπόσχεται ευρετηρίαση κατά παραγγελία, δύο προτάσεις της ίδιας σελίδας: ',
      {text: '«There is no definitive test that can guarantee whether your page will be included in the Google index.»', href: SC_INSPECT},
      ' και ',
      {text: '«There is a daily limit to how many index requests you can submit. If you want many pages indexed, try submitting a sitemap to Google.»', href: SC_INSPECT},
      ' Το ίδιο ισχύει και για την προτίμησή σου σε κανονικό URL: ',
      {text: '«There is no guarantee that Google will choose your preferred canonical, but we will take this into consideration.»', href: SC_INSPECT},
      ' Δηλώνεις, δεν αποφασίζεις.',
    ]},

    {type: 'heading', text: 'Αναφορά 4: Sitemaps — ο άδειος πίνακας δεν αποδεικνύει τίποτα'},
    {type: 'paragraph', text: [
      'Η αναφορά των χαρτών ιστότοπου (sitemaps) διαβάζεται λάθος με τον αντίστροφο τρόπο από τις προηγούμενες: εδώ βγάζουν συμπέρασμα από αυτό που ',
      {text: 'δεν', strong: true},
      ' βλέπουν. Ο πίνακας έχει στενό πεδίο: ',
      {text: '«This report shows only sitemaps that were submitted using this report or the API. It does not show any sitemaps discovered through a robots.txt reference or other discovery methods.»', href: SC_SITEMAPS},
      ' Άδειος πίνακας δεν σημαίνει ότι η ιστοσελίδα σου δεν έχει χάρτη· σημαίνει ότι δεν υποβλήθηκε από εδώ.',
    ]},
    {type: 'paragraph', text: [
      'Το δεύτερο λάθος είναι να θεωρήσεις ότι η υποβολή είναι εντολή. Δεν είναι: ',
      {text: '«The sitemap should be fetched immediately. However, it can take some time to crawl the URLs listed in a sitemap, and it is possible that not all URLs in a sitemap will be crawled, depending on the site size, activity, traffic, and so on.»', href: SC_SITEMAPS},
      ' Και σε επίπεδο αρχής: ',
      {text: '«A sitemap helps search engines discover URLs on your site, but it doesn\'t guarantee that all the items in your sitemap will be crawled and indexed.»', href: G_SITEMAPS},
    ]},
    {type: 'paragraph', text: [
      'Αξίζει επίσης να ξέρεις πότε δεν χρειάζεσαι καν χάρτη. Η Google δίνει μέτρο για το τι θεωρεί μικρή ιστοσελίδα: ',
      {text: '«Your site is "small". By small, we mean about 500 pages or fewer on your site.»', href: G_SITEMAPS},
      ' Οι περισσότερες ιστοσελίδες επιχειρήσεων στην Ελλάδα είναι πολύ κάτω από αυτό το όριο. Ένας χάρτης δεν βλάπτει, αλλά δεν είναι εκεί το πρόβλημά τους.',
    ]},

    {type: 'cta', heading: 'Αν θέλεις κάποιον να διαβάσει μαζί σου τα δικά σου δεδομένα', text: 'Ανοίγουμε το Search Console της ιστοσελίδας σου, σου λέμε τι δείχνει, τι δεν δείχνει και τι από αυτά αφορά πραγματικά τη δουλειά σου. Γραπτά, με τη σειρά που έχει νόημα.', label: 'Δες τι περιλαμβάνει', href: '/el/offers/website-seo'},

    {type: 'heading', text: 'Search Console ή Analytics; Δύο εργαλεία, δύο ερωτήσεις'},
    {type: 'paragraph', text: [
      'Η πιο άχρηστη ώρα που μπορείς να περάσεις με αναφορές είναι αυτή που πας να κάνεις τους δύο αριθμούς να συμφωνήσουν. Δεν πρόκειται, και η Google το λέει πριν καν το ρωτήσεις: ',
      {text: '«Clicks and sessions are calculated differently, which means that when you compare the data, you\'ll likely see different numbers.»', href: G_GA_VS_SC},
    ]},
    {type: 'paragraph', text: [
      'Υπάρχουν τρεις συγκεκριμένοι λόγοι, και όλοι είναι δομικοί. Ο πρώτος αφορά ποιες διευθύνσεις μετράει το καθένα: ',
      {text: '«Search Console reports only on the Google Search canonical URL, whereas Google Analytics reports on any URL that includes the tracking code.»', href: G_GA_VS_SC},
      ' Ο δεύτερος είναι η ζώνη ώρας, που την είδαμε παραπάνω. Ο τρίτος είναι ο ίδιος ο τρόπος μέτρησης: ',
      {text: '«JavaScript: Some tools, such as Google Analytics, track traffic only from users who have enabled JavaScript in their browser.»', href: SC_PERF_DISCREP},
    ]},

    {type: 'table', caption: 'Ποια ερώτηση πάει σε ποιο εργαλείο.', head: ['Η ερώτησή σου', 'Πού απαντιέται', 'Γιατί'], rows: [
      [['Σε ποια ερωτήματα εμφανίζομαι;'], ['Search Console'], ['Αφορά ό,τι έγινε πριν φτάσει ο επισκέπτης σε εσένα']],
      [['Πόσοι πάτησαν από την αναζήτηση;'], ['Search Console'], ['Μετράει κλικ από τα αποτελέσματα της Google']],
      [['Ποιες σελίδες βλέπουν και πόσο μένουν;'], ['Google Analytics'], ['Μετράει τη συμπεριφορά μέσα στην ιστοσελίδα']],
      [['Γιατί δεν ταιριάζουν οι δύο αριθμοί;'], ['Και στα δύο, ως αναμενόμενο'], ['Κλικ και συνεδρίες υπολογίζονται διαφορετικά· διαφέρουν και τα URL και η ζώνη ώρας']],
      [['Είναι μέσα στο ευρετήριο η σελίδα;'], ['Search Console'], ['Το Analytics δεν ξέρει τίποτα για το ευρετήριο']],
    ]},

    {type: 'heading', text: 'Οι υπόλοιπες αναφορές, με μία πρόταση η καθεμία'},
    {type: 'paragraph', text: [
      'Οι τέσσερις παραπάνω καλύπτουν σχεδόν όλες τις πραγματικές ερωτήσεις. Οι υπόλοιπες αξίζουν να τις ξέρεις κυρίως για να μην τις παρερμηνεύσεις.',
    ]},
    {type: 'list', items: [
      [{text: 'Σύνδεσμοι.', strong: true}, ' Δεν είναι κατάλογος: ', {text: '«This report isn\'t a comprehensive list of every link on your site. It shows a sample of internal and external links to help you understand your site’s overall link profile.»', href: SC_LINKS}, ' Μην παρουσιάσεις ποτέ αυτόν τον αριθμό ως τον συνολικό αριθμό συνδέσμων προς εσένα.'],
      [{text: 'Βασικά στοιχεία ιστού (Core Web Vitals).', strong: true}, ' Βασίζεται σε πραγματικούς χρήστες: ', {text: '«The Core Web Vitals report shows how your pages perform, based on real world usage data (sometimes called field data).»', href: SC_CWV}, ' Γι’ αυτό μια μικρή ιστοσελίδα βλέπει συχνά «δεν υπάρχουν δεδομένα»: ', {text: '«In order to respect user privacy, a URL group must have a minimum amount of data to be shown in the report.»', href: SC_CWV}],
      [{text: 'Χειροκίνητες ενέργειες.', strong: true}, ' Η μόνη αναφορά με άνθρωπο από πίσω: ', {text: '«Google issues a manual action against a site when a human reviewer at Google has determined that pages on the site are not compliant with Google\'s spam policies.»', href: SC_MANUAL}, ' Άδεια αναφορά είναι καλά νέα και η φυσιολογική κατάσταση.'],
      [{text: 'Καταργήσεις.', strong: true}, ' Το πιο παρεξηγημένο εργαλείο: ', {text: '«This tool removes content only from Google Search.»', href: SC_REMOVALS}, ' Δεν σβήνει τίποτα από το διαδίκτυο, δεν αφορά άλλες μηχανές, και είναι προσωρινό: ', {text: '«A successful request lasts only about six months.»', href: SC_REMOVALS}],
      [{text: 'Insights.', strong: true}, ' Αν δεν τη βλέπεις, δεν φταις: ', {text: '«The Insights report is being gradually introduced and may not be available to everyone.»', href: SC_INSIGHTS}],
      [{text: 'Φίλτρο επώνυμων ερωτημάτων.', strong: true}, ' Χωρίζει τις αναζητήσεις που περιέχουν το όνομά σου από τις υπόλοιπες, και έχει δικό του βάθος ιστορικού: ', {text: '«Data history: The filter provides a 16-month history of data, starting from when it was first introduced in March 2025.»', href: SC_PERF_DIM}, ' Είναι πληροφορία, όχι κρίση: ', {text: '«These classifications are for information only and don\'t affect your site\'s ranking in Search.»', href: SC_PERF_DIM}],
    ]},

    {type: 'heading', text: 'AI Overviews: πού ακριβώς φαίνονται'},
    {type: 'paragraph', text: [
      'Είναι η ερώτηση του 2026, και έχει δύο μισές απαντήσεις που πρέπει να τις κρατήσεις μαζί. Η πρώτη: αυτά τα κλικ δεν λείπουν από τα νούμερά σου, είναι ήδη μέσα τους. ',
      {text: '«Just like the rest of the search results page, sites appearing in AI features (such as AI Overviews and AI Mode) are included in the overall search traffic in Search Console.»', href: G_AI},
    ]},
    {type: 'paragraph', text: [
      'Η δεύτερη είναι καινούργια, και γι\' αυτό θα ακούσεις ακόμα κόσμο να λέει το αντίθετο. Υπάρχει πλέον και ξεχωριστή αναφορά ',
      {text: 'generative AI performance', href: SC_GENAI},
      ', και η ίδια η ανακοίνωσή της σημειώνει: ',
      {text: "«Note: As of August 31, 2026, we've rolled out these insights to all websites worldwide.»", href: G_BLOG_GENAI},
      ' Δηλαδή δύο μέρες πριν γραφτεί αυτό το κείμενο. Το κρίσιμο για το πώς τη διαβάζεις: ',
      {text: '«The generative AI performance report includes data from the Web search type in the Performance report (Search results)»', href: SC_GENAI},
      ' — αντλεί από τα ίδια δεδομένα, άρα είναι ανάλυση των νούμερων που ήδη κοιτάς, όχι δεύτερη μέτρηση που προστίθεται σε αυτά.',
    ]},
    {type: 'paragraph', text: [
      'Δύο λεπτομέρειες για το πώς μετριούνται. Το κλικ μετράει κανονικά: ',
      {text: '«Click: Clicking a link to an external page in AI Mode counts as a click.»', href: SC_POSITION},
      ' Η θέση όμως συμπιέζεται: ',
      {text: '«Position: An AI Overview occupies a single position in search results, and all links in the AI Overview are assigned that same position.»', href: SC_POSITION},
      ' Και υπάρχει και ένα κομμάτι της αναζήτησης που δεν μπαίνει καθόλου στα δεδομένα σου: ',
      {text: '«Search Console doesn\'t include data from experiments in Search Labs, as these experiments are still in active development.»', href: SC_POSITION},
    ]},

    {type: 'heading', text: 'Όταν τα ίδια τα δεδομένα ήταν λάθος'},
    {type: 'paragraph', text: [
      'Υπάρχει μια σελίδα που σχεδόν κανείς δεν ανοίγει και θα έπρεπε να είναι η πρώτη στάση κάθε φορά που βλέπεις ανεξήγητο σκαλοπάτι στο γράφημα. Η Google κρατά δημόσιο κατάλογο των δικών της ανωμαλιών: ',
      {text: '«This page records known issues in the last 3-16 months that might affect your data.»', href: SC_ANOMALIES},
    ]},
    {type: 'paragraph', text: [
      'Δύο καταχωρήσεις εκεί αλλάζουν τον τρόπο που διαβάζεις οποιαδήποτε σύγκριση με πέρσι. Η πρώτη: ',
      {text: '«A logging error prevented Search Console from accurately reporting impressions from May 13, 2025 until April 27, 2026.»', href: SC_ANOMALIES},
      ' Δηλαδή για ένα διάστημα σχεδόν ενός χρόνου, οι καταγεγραμμένες εμφανίσεις δεν ήταν σωστές. Όποιος συγκρίνει εμφανίσεις μέσα σε αυτό το παράθυρο, συγκρίνει με χαλασμένη μέτρηση.',
    ]},
    {type: 'paragraph', text: [
      'Η δεύτερη είναι πιο πρόσφατη: ',
      {text: '«As of May 7, 2026, FAQ rich results are no longer appearing in Google Search. As a result, you will see a drop in the number of reported impressions for FAQ in the performance report.»', href: SC_ANOMALIES},
      ' Αν είχες σελίδες με σήμανση συχνών ερωτήσεων και είδες πτώση εκείνο το διάστημα, δεν έφταιξε ούτε η ιστοσελίδα σου ούτε ο πάροχός σου. Άλλαξε αυτό που δείχνει η Google.',
    ]},
    {type: 'paragraph', text: [
      'Το μάθημα είναι γενικό και το χρειάζεσαι κάθε φορά που κάποιος σου παρουσιάζει γράφημα: πριν αποδώσεις μια αλλαγή σε δουλειά που έγινε — ή που δεν έγινε — έλεγξε αν άλλαξε ο τρόπος μέτρησης.',
    ]},

    {type: 'heading', text: 'Πώς το διαβάζεις σε δέκα λεπτά, με τη σωστή σειρά'},
    {type: 'paragraph', text: [
      'Δεν χρειάζεσαι μεθοδολογία. Χρειάζεσαι σειρά, γιατί οι πρώτες δύο κινήσεις ακυρώνουν τις υπόλοιπες αν βγουν άσχημα.',
    ]},
    {type: 'list', ordered: true, items: [
      ['Έλεγξε ποια ιδιοκτησία κοιτάς. Domain ή URL-prefix, με www ή χωρίς, http ή https. Τα μισά «κατέρρευσε η κίνηση» τελειώνουν εδώ.'],
      ['Άνοιξε την Ευρετηρίαση σελίδων και διάβασε τις ετικέτες, όχι το σύνολο. Ψάχνεις σελίδες που πουλάνε κάτι και δεν είναι μέσα, όχι έναν αριθμό να μηδενίσεις.'],
      ['Πήγαινε στην Απόδοση με περίοδο τουλάχιστον τριών μηνών. Μικρότερο διάστημα δείχνει κυρίως θόρυβο, και τα τελευταία εικοσιτετράωρα είναι ούτως ή άλλως προκαταρκτικά.'],
      ['Κοίτα τα ερωτήματα σαν λεξιλόγιο, όχι σαν λίστα. Ψάχνεις με τι λόγια σε ψάχνουν, και ποια από αυτά δεν υπάρχουν πουθενά στο κείμενό σου.'],
      ['Διάλεξε τις σελίδες με πολλές εμφανίσεις και λίγα κλικ. Εκεί υπάρχει ήδη ζήτηση και το πρόβλημα είναι στο τι δείχνεις στη σελίδα αποτελεσμάτων.'],
      ['Αν κάτι δεν βγάζει νόημα, έλεγξε πρώτα τη σελίδα των ανωμαλιών και μετά ψάξε αιτία στη δική σου δουλειά.'],
      ['Μην ψάχνεις μόνος σου στην Google για επιβεβαίωση. Η ίδια η τεκμηρίωση λέει ότι μπορεί να μη δεις την ιστοσελίδα σου ακόμα κι όταν το ερώτημα υπάρχει στα δεδομένα σου.'],
    ]},
    {type: 'paragraph', text: [
      'Ένα τελευταίο, για τις επιχειρήσεις με διεύθυνση: το Search Console δεν βλέπει τίποτα από όσα συμβαίνουν στο προφίλ σου στους χάρτες. Είναι άλλο εργαλείο, με άλλα δεδομένα και άλλους κανόνες — τα λέει το κείμενο για το ',
      {text: 'προφίλ της επιχείρησής σου στην Google', href: ART_PROFILE},
      '. Αν το μισό σου κοινό σε βρίσκει από τον χάρτη, το μισό σου κοινό δεν φαίνεται σε αυτές τις αναφορές.',
    ]},

    {type: 'sources', heading: 'Πηγές', items: [
      {label: 'Search Console Help, About Search Console — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_ABOUT},
      {label: 'Search Console Help, What are impressions, position, and clicks? — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_POSITION},
      {label: 'Search Console Help, Performance report: overview and setup — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_PERF_SETUP},
      {label: 'Search Console Help, Performance report: dimensions and data groupings — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_PERF_DIM},
      {label: 'Search Console Help, Performance report: data discrepancies — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_PERF_DISCREP},
      {label: 'Search Console Help, Performance report: about the data — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_PERF_DATA},
      {label: 'Search Console Help, Performance report: advanced filtering and comparison — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_PERF_FILTER},
      {label: 'Search Console Help, Page indexing report — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_PAGEINDEX},
      {label: 'Search Console Help, URL Inspection tool — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_INSPECT},
      {label: 'Search Console Help, Sitemaps report — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_SITEMAPS},
      {label: 'Search Console Help, Verify your site ownership — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_VERIFY},
      {label: 'Search Console Help, Add a website property (Domain και URL-prefix) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_ADDPROP},
      {label: 'Search Console Help, Links report — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_LINKS},
      {label: 'Search Console Help, Removals tool — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_REMOVALS},
      {label: 'Search Console Help, Core Web Vitals report — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_CWV},
      {label: 'Search Console Help, Manual actions report — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_MANUAL},
      {label: 'Search Console Help, Data anomalies in Search Console — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_ANOMALIES},
      {label: 'Search Console Help, Insights report — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_INSIGHTS},
      {label: 'Google Analytics Help, Connect Search Console to Google Analytics — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: GA_RETENTION},
      {label: 'Google Search Central, Using Search Console and Google Analytics data for SEO — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_GA_VS_SC},
      {label: 'Google Search Central, Sitemaps overview — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SITEMAPS},
      {label: 'Google Search Central, AI features and your website — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_AI},
      {label: 'Google Search Central Blog, Introducing Search Generative AI performance reports in Search Console (3 Ιουνίου 2026) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_BLOG_GENAI},
      {label: 'Search Console Help, Generative AI performance report — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SC_GENAI},
    ]},
  ],
};

export default post;
