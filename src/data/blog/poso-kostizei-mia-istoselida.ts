import type {BlogPost} from '@/types/blog';

// Άρθρο 3. Το άρθρο του αγοραστή. ΔΕΝ αναφέρει καμία τιμή — ούτε δική μας, ούτε της αγοράς,
// ούτε ανταγωνιστή. Απαντά «γιατί δύο προσφορές διαφέρουν» με δομικούς λόγους: τι μετριέται,
// τι είναι εφάπαξ και τι επαναλαμβανόμενο, και τι σημαίνει «περιλαμβάνεται SEO».
// Δεν ξαναγράφει τις επτά γραπτές απαιτήσεις ούτε την εγγυημένη θέση — αυτά ανήκουν στο
// άρθρο «Κατασκευή ιστοσελίδων: τι να ζητάς γραπτά», και γίνονται σύνδεσμος, όχι κεφάλαιο.

const GR_FAQ = 'https://grweb.ics.forth.gr/public/faqs';
const GR_REG = 'https://grweb.ics.forth.gr/public/domains/registration';
const WP_COMORG = 'https://wordpress.com/support/com-vs-org/';
const WP_REQ = 'https://wordpress.org/about/requirements/';
const WP_SEC = 'https://wordpress.org/about/security/';
const WP_UPD = 'https://wordpress.org/documentation/article/updating-wordpress/';
const WP_THEMES = 'https://make.wordpress.org/themes/handbook/review/required/';
const WC_PAY = 'https://woocommerce.com/document/premium-payment-gateway-extensions/';
const WC_SERVER = 'https://woocommerce.com/document/server-requirements/';
const WC_SUBS = 'https://woocommerce.com/document/managing-woocommerce-com-subscriptions/';
const SH_FEES = 'https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees';
const SH_APPS = 'https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/app-charges';
const SH_COUNTRIES = 'https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries';
const LE_FAQ = 'https://letsencrypt.org/docs/faq/';
const TF_TERMS = 'https://themeforest.net/licenses/terms/regular';
const TF_STD = 'https://themeforest.net/licenses/standard';
const G_HIRING = 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo';
const G_STARTER = 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide';
const G_HELPFUL = 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content';
const G_SC = 'https://support.google.com/webmasters/answer/9128668?hl=en';
const G_AUCTION = 'https://support.google.com/google-ads/answer/6366577?hl=en';
const G_ADRANK = 'https://support.google.com/google-ads/answer/1722122?hl=en';
const G_BUDGET = 'https://support.google.com/google-ads/answer/1704424?hl=en';
const EU_EAA = 'https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-products-and-services.html';

const A_WRITTEN = '/el/blog/kataskevi-istoselidon-ti-na-zitas';

const post: BlogPost = {
  id: 'poso-kostizei-mia-istoselida',
  slug: 'poso-kostizei-mia-istoselida',
  title: 'Πόσο κοστίζει μια ιστοσελίδα: τι καθορίζει το κόστος και πώς συγκρίνεις δύο προσφορές',
  metaTitle: 'Πόσο κοστίζει μια ιστοσελίδα: πώς συγκρίνεις προσφορές',
  excerpt: 'Δύο προσφορές για «το ίδιο» διαφέρουν επειδή δεν μετράνε το ίδιο. Τι απαριθμείται, τι είναι εφάπαξ, τι επαναλαμβάνεται κάθε χρόνο.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 29,
  tags: ['Ιστοσελίδες', 'Ανάθεση έργου', 'E-shop'],
  body: [
    {type: 'paragraph', text: [
      'Ζήτησες προσφορά από τρεις και ήρθαν τρία εντελώς διαφορετικά ποσά. Το πρώτο συμπέρασμα είναι συνήθως ότι κάποιος είναι ακριβός. Σχεδόν πάντα ισχύει κάτι άλλο: ',
      {text: 'οι τρεις προσφορές δεν περιγράφουν το ίδιο πράγμα', strong: true},
      '. Άλλος αριθμός σελίδων, άλλος γράφει τα κείμενα, έτοιμο θέμα στη μία και σχεδιασμός από το μηδέν στην άλλη, μεταφορά του παλιού περιεχομένου εδώ και όχι εκεί.',
    ]},
    {type: 'paragraph', text: [
      'Και ένα δεύτερο σκέλος, που φαίνεται ακόμα πιο σπάνια: ποια κόστη σταματούν την ημέρα που η ιστοσελίδα βγαίνει στον αέρα και ποια συνεχίζουν. Το όνομα χώρου (domain), η φιλοξενία, οι άδειες θεμάτων και προσθέτων, χρεώσεις ανά συναλλαγή, συνδρομές πλατφόρμας. Καμία τους δεν είναι εφάπαξ, και οι περισσότερες δεν πληρώνονται καν σε αυτόν που σου κάνει την προσφορά.',
    ]},
    {type: 'paragraph', text: [
      'Παρακάτω δεν θα βρεις τιμές. Θα βρεις τι πρέπει να απαριθμεί μια προσφορά για να τη βάλεις δίπλα σε μια άλλη και να συγκρίνεις όμοια με όμοια. Κάθε πρόταση για το πώς χρεώνει ένα τρίτο σύστημα παρατίθεται αυτούσια από τη δική του τεκμηρίωση.',
    ]},

    {type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε πρόταση που παρατίθεται εδώ ελέγχθηκε εκείνη τη μέρα στη σελίδα που τη συνοδεύει. Το κείμενο δεν αναφέρει κανένα ποσό: δεν υπάρχει τιμή που να ισχύει για δύο διαφορετικά έργα, και μια τιμή χωρίς τη λίστα από κάτω της δεν λέει τίποτα.',
    ]},

    {type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Γιατί διαφέρουν τόσο δύο προσφορές για την ίδια ιστοσελίδα;', a: 'Επειδή σχεδόν ποτέ δεν είναι για την ίδια ιστοσελίδα. Έξι πράγματα μετριούνται και σπάνια συμπίπτουν: πόσες σελίδες, ποιος γράφει τα κείμενα, έτοιμο θέμα ή σχεδιασμός από το μηδέν, αν μεταφέρεται το υπάρχον περιεχόμενο, πόσες ενσωματώσεις, και ποιος συντηρεί μετά.'},
      {q: 'Τι είναι εφάπαξ και τι επαναλαμβανόμενο;', a: 'Εφάπαξ είναι ο σχεδιασμός, η κατασκευή και τα κείμενα. Επαναλαμβανόμενα είναι το όνομα χώρου (domain), η φιλοξενία, οι άδειες και οι συνδρομές προσθέτων, οι χρεώσεις ανά συναλλαγή και η συντήρηση. Μια προσφορά που δεν χωρίζει τις δύο στήλες σου κρύβει τη δεύτερη.'},
      {q: 'Το domain το πληρώνω μία φορά;', a: 'Όχι. Το Μητρώο γράφει ότι η εκχώρηση ενός ονόματος με κατάληξη .gr ή .ελ διαρκεί δύο έτη και ότι η ανανέωση αποτελεί χρεώσιμη πράξη. Άρα η γραμμή «περιλαμβάνεται domain» οφείλει να λέει για πόσο διάστημα και σε ποιο όνομα.'},
      {q: 'Είναι το WordPress δωρεάν;', a: 'Το λογισμικό κατεβαίνει δωρεάν, αλλά η τεκμηρίωσή του λέει ρητά ότι η φιλοξενία δεν περιλαμβάνεται και πληρώνεται χωριστά σε τρίτο πάροχο. Η μόνη ουσιαστική διαφορά WordPress.com και WordPress.org είναι η φιλοξενία. Άρα η λέξη «WordPress» μόνη της δεν λέει τίποτα.'},
      {q: 'Τι σημαίνει «περιλαμβάνεται SEO»;', a: 'Πρέπει να σημαίνει συγκεκριμένες εργασίες. Η Google γράφει ότι δεν δέχεται χρήματα για να συμπεριλάβει ή να κατατάξει ιστότοπους και ότι δεν κοστίζει τίποτα να εμφανιστείς στα οργανικά αποτελέσματα. Δεν πληρώνεις θέση, πληρώνεις δουλειά. Και η δουλειά απαριθμείται.'},
      {q: 'Πώς συγκρίνω δίκαια δύο προσφορές;', a: 'Ζήτα και από τους δύο τα ίδια έξι στοιχεία, χώρισε κάθε γραμμή σε εφάπαξ και επαναλαμβανόμενη, και σημείωσε ποια κόστη πηγαίνουν σε τρίτους. Ό,τι μένει ασύγκριτο μετά από αυτό είναι το πραγματικό ερώτημα.'},
    ]},

    {type: 'heading', text: 'Γιατί οι δύο προσφορές δεν περιγράφουν το ίδιο πράγμα'},
    {type: 'paragraph', text: [
      'Η λέξη «ιστοσελίδα» δεν είναι μονάδα μέτρησης. Μονάδες μέτρησης είναι έξι συγκεκριμένα πράγματα, και αν δύο προσφορές δεν συμφωνούν σε αυτά, δεν συγκρίνονται. Το ζητούμενο δεν είναι να βρεις ποια είναι φθηνή· είναι να τις φέρεις στην ίδια βάση.',
    ]},
    {type: 'table', caption: 'Οι έξι γραμμές που κάνουν δύο προσφορές μη συγκρίσιμες.', head: ['Τι μετριέται', 'Τι πρέπει να γράφει η προσφορά', 'Τι σου στοιχίζει αν δεν το γράφει'], rows: [
      [[{text: 'Αριθμός σελίδων', strong: true}], ['Ονομαστικός κατάλογος σελίδων, όχι «έως πέντε»'], ['Κάθε σελίδα που θυμάσαι αργότερα γίνεται νέα προσφορά']],
      [[{text: 'Ποιος γράφει τα κείμενα', strong: true}], ['Ποιος γράφει, ποιος εγκρίνει, πόσοι γύροι'], ['Η ιστοσελίδα μένει έτοιμη και άδεια']],
      [[{text: 'Το σχέδιο', strong: true}], ['Έτοιμο θέμα με όνομα και άδεια, ή σχεδιασμός από το μηδέν'], ['Συγκρίνεις μια αγορά με έναν σχεδιασμό']],
      [[{text: 'Μεταφορά περιεχομένου', strong: true}], ['Πόσα άρθρα ή προϊόντα, με τι τρόπο, ποιος ελέγχει'], ['Το παλιό περιεχόμενο «θα μεταφερθεί» και μένει πίσω']],
      [[{text: 'Ενσωματώσεις', strong: true}], ['Ονομαστικά: πληρωμές, μεταφορικές, newsletter, κρατήσεις'], ['Κάθε σύνδεση εμφανίζεται μετά ως έκτακτο']],
      [[{text: 'Τι γίνεται μετά την παράδοση', strong: true}], ['Ποιος ενημερώνει, ποιος κρατά αντίγραφα, ποιος πληρώνει τι'], ['Ανακαλύπτεις τις επαναλαμβανόμενες γραμμές από τα τιμολόγια']],
    ]},

    {type: 'heading', text: 'Τι μετριέται πραγματικά'},

    {type: 'subheading', text: 'Πόσες σελίδες, και τι μετράει ως σελίδα'},
    {type: 'paragraph', text: [
      'Το «έως πέντε σελίδες» είναι οροφή, όχι αντικείμενο. Μια σελίδα επικοινωνίας με φόρμα και χάρτη, μια σελίδα υπηρεσίας και ένας κατάλογος με σαράντα προϊόντα μετριούνται όλα ως «μία σελίδα». Ζήτα ονομαστικό κατάλογο: ποιες σελίδες, τι έχει πάνω της η καθεμία, τι δεν περιλαμβάνεται.',
    ]},

    {type: 'subheading', text: 'Ποιος γράφει τα κείμενα'},
    {type: 'paragraph', text: [
      '«Τα κείμενα τα δίνει ο πελάτης» και «τα κείμενα τα γράφουμε εμείς» είναι δύο διαφορετικά έργα με το ίδιο όνομα. Δεν είναι θέμα γούστου: στον οδηγό της για το χρήσιμο περιεχόμενο η Google βάζει ως ερώτημα αυτοαξιολόγησης το «Does the content provide original information, reporting, research, or analysis?» και, λίγο πιο κάτω, το «Is the content produced well, or does it appear sloppy or hastily produced?» (',
      {text: 'Creating helpful, reliable, people-first content', href: G_HELPFUL},
      '). Πρωτότυπη πληροφορία και προσεγμένη γραφή δεν βγαίνουν από πρότυπο.',
    ]},

    {type: 'subheading', text: 'Έτοιμο θέμα ή σχεδιασμός από το μηδέν'},
    {type: 'paragraph', text: [
      'Δεν είναι δύο ποιότητες του ίδιου πράγματος· το ένα από τα δύο έχει άδεια χρήσης με όρους που σε αφορούν. Η τυπική άδεια στη μεγαλύτερη αγορά έτοιμων θεμάτων το λέει ρητά: «2. You are licensed to use the Item to create one single End Product for yourself or for one client (a “single application”), and the End Product can be distributed for Free.» (',
      {text: 'ThemeForest Regular License', href: TF_TERMS},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Και η σελίδα επισκόπησης των αδειών απευθύνεται στους ίδιους τους κατασκευαστές: «You may charge your client for your services to create an end product, even under the Regular License. But you can’t use one of our Standard Licenses on multiple clients or jobs.» (',
      {text: 'ThemeForest Standard Licenses', href: TF_STD},
      '). Η άδεια δηλαδή είναι ανά τελικό προϊόν και ανά πελάτη. Αν μια προσφορά περιλαμβάνει έτοιμο θέμα, δικαιούσαι να ξέρεις ποιο, με ποια άδεια και σε ποιο όνομα.',
    ]},
    {type: 'paragraph', text: [
      'Στο άλλο άκρο, ο κανονισμός ελέγχου του επίσημου ευρετηρίου ορίζει ότι «Themes must be compatible with the GNU General Public License» (',
      {text: 'Make WordPress Themes, Required', href: WP_THEMES},
      '). Είναι διαφορετικό καθεστώς και διαφορετική γραμμή στην προσφορά, και δεν συγκρίνεται σε καμία περίπτωση με σχεδιασμό που γίνεται για εσένα.',
    ]},

    {type: 'subheading', text: 'Μεταφορά υπάρχοντος περιεχομένου'},
    {type: 'paragraph', text: [
      'Αν έχεις ήδη άρθρα ή προϊόντα, η μεταφορά τους είναι δική της γραμμή. Στις χρεώσεις εφαρμογών του Shopify αναφέρεται ως εφάπαξ αγορά που τιμολογείται χωριστά: «These are payments for specific services or features provided by an app, such as transferring data from one platform to another, and are billed separately from your regular Shopify subscription.» (',
      {text: 'Shopify Help Center, App charges', href: SH_APPS},
      '). Αν το ίδιο το σύστημα τη θεωρεί ξεχωριστή αγορά, μια προσφορά που τη χωράει σε μια παύλα δεν την έχει υπολογίσει. Ζήτα αριθμούς αντικειμένων, όχι ρήματα.',
    ]},

    {type: 'subheading', text: 'Πόσες ενσωματώσεις'},
    {type: 'paragraph', text: [
      'Κάθε εξωτερικό σύστημα που πρέπει να μιλήσει με την ιστοσελίδα σου είναι δική του εργασία. Στις πληρωμές δεν υπάρχει καν επιλογή να τις παραλείψεις: «You need at least one payment method to collect payment on your site even if this is a manual payment gateway such as on of the WooCommerce defaults, like Direct Bank Transfer.» (',
      {text: 'WooCommerce, Which payment option is right for me?', href: WC_PAY},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Πρόσεξε όμως τι μπορεί να σημαίνει «περιλαμβάνονται πληρωμές». Για τις ενσωματωμένες μεθόδους (αντικαταβολή και τραπεζική κατάθεση) η ίδια σελίδα σημειώνει ότι «The gateways themselves have no associated activation or usage costs.» Μια προσφορά μπορεί να το γράφει ειλικρινά και να εννοεί ότι ο πελάτης σου θα κάνει έμβασμα.',
    ]},

    {type: 'heading', text: 'Τι σταματά όταν βγει στον αέρα και τι όχι'},
    {type: 'paragraph', text: [
      'Αυτή η στήλη λείπει σχεδόν πάντα, και είναι η μισή απάντηση στο «πόσο κοστίζει». Το ποσό της προσφοράς είναι η είσοδος· από κει και πέρα υπάρχει ένα μικρότερο αλλά μόνιμο κόστος, που συχνά δεν πηγαίνει καν σε αυτόν που έφτιαξε την ιστοσελίδα.',
    ]},
    {type: 'table', caption: 'Ποιες γραμμές σταματούν στην παράδοση και ποιες όχι.', head: ['Γραμμή', 'Εφάπαξ ή επαναλαμβανόμενη', 'Τι να ζητήσεις γραπτά'], rows: [
      [['Όνομα χώρου (.gr ή .ελ)'], ['Επαναλαμβανόμενη (η εκχώρηση είναι διετής)'], ['Σε ποιο όνομα, και ποιος ανανεώνει']],
      [['Φιλοξενία'], ['Επαναλαμβανόμενη'], ['Ποιος πάροχος, με ποια προδιαγραφή']],
      [['Πιστοποιητικό SSL'], ['Επαναλαμβανόμενη ανανέωση, όχι πάντα χρέωση'], ['Ποιος το ανανεώνει']],
      [['Άδεια έτοιμου θέματος'], ['Ανά τελικό προϊόν και ανά πελάτη'], ['Ποιο θέμα, ποια άδεια, σε ποιο όνομα']],
      [['Συνδρομές προσθέτων και εφαρμογών'], ['Επαναλαμβανόμενη'], ['Ονομαστικά ποιες, και ποιος τις πληρώνει']],
      [['Πύλη πληρωμών'], ['Συνδρομή και χρέωση ανά συναλλαγή'], ['Ποιος επεξεργαστής, με ποιες χρεώσεις']],
      [['Σχεδιασμός και κατασκευή'], ['Εφάπαξ'], ['Ονομαστικός κατάλογος σελίδων']],
      [['Κείμενα και φωτογραφίες'], ['Εφάπαξ ανά κείμενο'], ['Ποιος γράφει, πόσοι γύροι, ποιος εγκρίνει']],
      [['Ενημερώσεις και αντίγραφα ασφαλείας'], ['Επαναλαμβανόμενη'], ['Ποιος τις κάνει, πού τα αντίγραφα']],
      [['Διαφημιστικός προϋπολογισμός'], ['Επαναλαμβανόμενη, και δική σου'], ['Σε δικό σου λογαριασμό']],
    ]},

    {type: 'subheading', text: 'Το όνομα χώρου δεν είναι ποτέ εφάπαξ'},
    {type: 'paragraph', text: [
      'Το Μητρώο το γράφει καθαρά: «Η διάρκεια εκχώρησης κάθε ονόματος χώρου με κατάληξη .gr ή .ελ είναι δύο (2) έτη και ξεκινάει από την ημερομηνία κατάθεσης της δήλωσης καταχώρησης στο Μητρώο.» και, στην ίδια σελίδα, «Η ανανέωση ονόματος χώρου αποτελεί χρεώσιμη πράξη.» (',
      {text: 'Μητρώο .gr και .ελ, Συχνές Ερωτήσεις', href: GR_FAQ},
      '). Άρα το «περιλαμβάνεται domain» οφείλει να λέει και για πόσο διάστημα, γιατί μετά κάποιος πληρώνει ξανά.',
    ]},
    {type: 'paragraph', text: [
      'Γιατί δύο προσφορές έχουν διαφορετική γραμμή για το ίδιο όνομα; Επειδή το τέλος δεν το ορίζει το Μητρώο: «Μαζί με τη δήλωση καταχώρησης ο χρήστης υποχρεούται στην κατάθεση του σχετικού τέλους εκχώρησης, το οποίο έχει οριστεί από τον καταχωρητή.» (',
      {text: 'Μητρώο .gr και .ελ, Διαδικασία καταχώρησης', href: GR_REG},
      '), και οι Συχνές Ερωτήσεις το επιβεβαιώνουν: «Το κόστος για την εκχώρηση ενός ονόματος χώρου διαφέρει από καταχωρητή σε καταχωρητή.» Το ίδιο κείμενο προσθέτει ότι «Ο καταχωρητής δύναται να απαιτεί την πληρωμή τελών από τους καταχωρούμενους και σε περίπτωση που δεν απαιτείται καταβολή τελών στην ΕΕΤΤ.»',
    ]},
    {type: 'paragraph', text: [
      'Και γιατί το «σε ποιο όνομα» είναι γραμμή προσφοράς: αν χαθεί μια ανανέωση, «Με την παρέλευση της περιόδου των δεκαπέντε (15) ημερών από τη λήξη του ονόματος, το όνομα διατίθεται προς εκχώρηση σε οποιοδήποτε ενδιαφερόμενο πρόσωπο.» Δεκαπέντε ημέρες, και μετά η διεύθυνσή σου είναι διαθέσιμη σε οποιονδήποτε. Ο ισχύων κανονισμός, που συχνά αναφέρεται λάθος, είναι πρόσφατος: «Σύμφωνα με την απόφαση 1110/6/29-04-2024 της ΕΕΤΤ, ο χρήστης που επιθυμεί την καταχώρηση ενός ονόματος πρέπει να καταθέσει μια δήλωση σε έναν από τους καταχωρητές ονομάτων χώρου με κατάληξη .gr ή .ελ.»',
    ]},

    {type: 'subheading', text: 'Η φιλοξενία: μια λέξη που δεν συγκρίνεται'},
    {type: 'paragraph', text: [
      'Δύο προσφορές γράφουν «φιλοξενία» και εννοούν δύο άλλα πράγματα: «Each third-party hosting service will vary in their services and fees.» (',
      {text: 'WordPress.com Support, WordPress.com vs. WordPress.org', href: WP_COMORG},
      '). Στην ίδια σελίδα λύνεται και η πιο συχνή παρεξήγηση: «WordPress.com and WordPress.org both run on the same WordPress software—the main difference is hosting.» Και για την περίπτωση που κατεβάζεις μόνος σου το λογισμικό, η ίδια σελίδα γράφει: «As this option doesn’t include hosting, you’ll need to find and pay for separate hosting and be more involved on the technical side to build and maintain your website effectively.»',
    ]},
    {type: 'paragraph', text: [
      'Και ο ορισμός του εφάπαξ και του επαναλαμβανόμενου, σε μία πρόταση: «Download the WordPress software for free, but pay annual fees to a third-party hosting provider for your web hosting and domain.»',
    ]},
    {type: 'paragraph', text: [
      'Η καλή είδηση είναι ότι η φιλοξενία έχει προδιαγραφή που ζητιέται γραπτά αντί για μια λέξη: «To run WordPress, we recommend your host supports the following — a safe, modern baseline for performance and security.» (',
      {text: 'WordPress.org, Requirements', href: WP_REQ},
      '). Έκδοση PHP, βάση δεδομένων, HTTPS. Για e-shop η απαίτηση γίνεται αυστηρότερη: «If your server does not meet these specifications, your site may experience security vulnerabilities and poor performance.» (',
      {text: 'WooCommerce, Server Recommendations', href: WC_SERVER},
      '). Γι’ αυτό η φθηνότερη φιλοξενία συχνά δεν είναι το ίδιο προϊόν φθηνότερα· είναι άλλο προϊόν.',
    ]},

    {type: 'subheading', text: 'Το SSL: υποχρεωτικό, συχνά δωρεάν, ποτέ ανεπιτήρητο'},
    {type: 'paragraph', text: [
      'Η μεγαλύτερη αρχή πιστοποιητικών γράφει «We do not charge a fee for our certificates.» (',
      {text: 'Let’s Encrypt, FAQ', href: LE_FAQ},
      '), οπότε μια γραμμή «SSL» δεν σημαίνει αυτόματα ότι κάποιος αγόρασε κάτι. Πιο σημαντικό είναι το επόμενο: «Our default certificates are valid for 90 days.» Κάποιος πρέπει να τα ανανεώνει, αλλιώς η ιστοσελίδα σου κάποια στιγμή δείχνει προειδοποίηση. Συντήρηση, όχι εγκατάσταση. Η ίδια σελίδα αναγνωρίζει ότι «In some cases, integrators (e.g. hosting providers) will charge a nominal fee that reflects the administrative and management costs they incur to provide Let’s Encrypt certificates.» Η χρέωση αυτή αφορά τη διαχείριση από τον πάροχο. Για το ίδιο το πιστοποιητικό η Let’s Encrypt δεν χρεώνει.',
    ]},
    {type: 'paragraph', text: [
      'Για e-shop δεν είναι καν προαιρετικό. Όταν ο πελάτης πληρώνει πάνω στη δική σου ιστοσελίδα: «Direct: Customer purchases and pays directly on your site, requiring an SSL certificate as part of PCI Compliance.» (',
      {text: 'WooCommerce, Which payment option is right for me?', href: WC_PAY},
      ').',
    ]},

    {type: 'subheading', text: 'Οι πληρωμές: δύο λογαριασμοί, όχι ένας'},
    {type: 'paragraph', text: [
      'Το πιο συχνό λάθος στη σύγκριση δύο προσφορών για e-shop: η πλατφόρμα δεν είναι το κόστος. Η τεκμηρίωση του WooCommerce λέει για τον εαυτό της «This documentation is about the free, core WooCommerce plugin, for which support is provided in our community forums on WordPress.org.» (',
      {text: 'WooCommerce, Server Recommendations', href: WC_SERVER},
      '). Το κόστος είναι αλλού, και είναι διαρκές.',
    ]},
    {type: 'paragraph', text: [
      'Η πύλη πληρωμών είναι πρόσθετο που σε συνδέει με έναν επεξεργαστή, και ο επεξεργαστής έχει δικούς του όρους: «Each payment processor has terms and fees (separate to the cost of the plugin itself).» (',
      {text: 'WooCommerce, Which payment option is right for me?', href: WC_PAY},
      '). Τα είδη χρέωσης απαριθμούνται με τη φράση «Startup and ongoing costs are different for each payment processor and can consist of:» και είναι τέσσερα: κόστος πρόσθετου, τέλος εγγραφής, συνδρομή, χρέωση ανά συναλλαγή.',
    ]},
    {type: 'paragraph', text: [
      'Το τρίτο αναφέρεται ρητά ως «Monthly or yearly subscription fees.» Είναι έξοδο που δεν σταματά. Και για τις premium πύλες: «These require an annual subscription to WooCommerce.com for support and updates, along with the processor’s standard transaction fees.» Δύο επαναλαμβανόμενες γραμμές, όχι μία.',
    ]},
    {type: 'paragraph', text: [
      'Το ίδιο μοτίβο υπάρχει και στις πλατφόρμες με συνδρομή: «Third-party transaction fees cover the cost for Shopify to provide a secure checkout platform and integrate with external payment providers.» και «The rate for third-party transaction charges varies depending on your pricing plan.» (',
      {text: 'Shopify Help Center, Third-party transaction fees', href: SH_FEES},
      '). Η ίδια πώληση δηλαδή μπορεί να χρεώνεται διαφορετικά σε δύο καταστήματα της ίδιας πλατφόρμας.',
    ]},
    {type: 'paragraph', text: [
      'Πρόσεξε μια συχνή παρανόηση: η χρέωση αυτή αφορά τη χρήση τρίτου παρόχου. Η Ελλάδα περιλαμβάνεται στις υποστηριζόμενες χώρες του Shopify Payments, και η σελίδα ορίζει πότε προκύπτει ανάγκη τρίτου: «If your country isn\'t listed, or if Shopify Payments doesn\'t support your business category, then you need to use a third-party payment provider.» (',
      {text: 'Shopify Help Center, Supported countries', href: SH_COUNTRIES},
      '). Η σωστή ερώτηση λοιπόν δεν είναι «θα πληρώνω προμήθεια;» αλλά «με ποιον πάροχο πληρωμών στήνεται το κατάστημα».',
    ]},

    {type: 'subheading', text: 'Οι συνδρομές πίσω από τη λέξη «περιλαμβάνεται»'},
    {type: 'paragraph', text: [
      'Τα πρόσθετα και οι εφαρμογές εκπλήσσουν τους περισσότερους τον δεύτερο χρόνο: «When you purchase an extension or theme from the WooCommerce.com Marketplace, you receive a subscription that gives you access to product updates and support for the duration covered by your subscription.» (',
      {text: 'WooCommerce, Managing WooCommerce.com Subscriptions', href: WC_SUBS},
      '). Ενημερώσεις και υποστήριξη όσο διαρκεί η συνδρομή· όχι για πάντα.',
    ]},
    {type: 'paragraph', text: [
      'Στο Shopify χάνεται ακόμα πιο εύκολα, γιατί δεν έρχεται καν μαζί με τη συνδρομή της πλατφόρμας: «Apps with subscription charges are billed on an independent, 30-day billing cycle.» (',
      {text: 'Shopify Help Center, App charges', href: SH_APPS},
      '). Το πρακτικό συμπέρασμα είναι μονολεκτικό: ',
      {text: 'ονομαστικά', strong: true},
      '. Μια προσφορά που λέει «περιλαμβάνονται τα απαραίτητα πρόσθετα» δεν σου έχει πει τίποτα· μια που τα ονομάζει σου λέει και τι θα πληρώνεις μετά, χωρίς να γράφει ποσά.',
    ]},

    {type: 'subheading', text: 'Η συντήρηση δεν είναι προαιρετικό extra'},
    {type: 'paragraph', text: [
      'Η ομάδα ασφαλείας του WordPress γράφει: «While only the latest version of WordPress is officially supported, the Security Team also backports fixes to older versions as a courtesy, to ensure older sites receive critical security fixes via auto-updates.» (',
      {text: 'WordPress.org, Security', href: WP_SEC},
      '). Επίσημα υποστηρίζεται μόνο η τελευταία έκδοση. Άρα το «ποιος κάνει τις ενημερώσεις» δεν είναι ερώτηση εξυπηρέτησης. Και η τεκμηρίωση των ενημερώσεων ξεκινά με τη σύσταση «Before you get started, it’s a good idea to back up your website.» (',
      {text: 'WordPress.org, Updating WordPress', href: WP_UPD},
      '). Τα αντίγραφα ασφαλείας είναι μέρος της διαδικασίας, όχι χωριστό προϊόν.',
    ]},

    {type: 'heading', text: 'Τι σημαίνει «περιλαμβάνεται SEO» σε μια προσφορά'},
    {type: 'paragraph', text: [
      'Πρώτα το γεγονός που αλλάζει τη συζήτηση: «Google never accepts money to include or rank sites in our search results, and it costs nothing to appear in our organic search results.» (',
      {text: 'Google Search Central, Do you need an SEO?', href: G_HIRING},
      '). Πρόσεξε τι λέει και τι δεν λέει: ότι η Google δεν χρεώνει για να σε συμπεριλάβει. Δεν λέει ότι η δουλειά του SEO είναι δωρεάν. Αντίθετα, ακριβώς επειδή η θέση δεν αγοράζεται, το μόνο που πληρώνεις είναι εργασία, και η εργασία απαριθμείται.',
    ]},
    {type: 'paragraph', text: [
      'Η ίδια σελίδα ορίζει τι οφείλει να παραδίδει ένας έλεγχος: «An SEO audit should be about giving you realistic estimates of improvement, and an estimate of the work involved.» Αν η γραμμή «SEO» δεν απαριθμεί εργασίες, δεν είναι γραμμή· είναι λέξη. Από την ίδια σελίδα βγαίνει και μια καλή ερώτηση: «Will you share with me all the changes you make to my site, and provide detailed information about your recommendations and the reasoning behind them?», και η συμβουλή να δίνεις «only grant read access to Search Console (at this stage, don’t grant them write access)» όσο ακόμα αποφασίζεις.',
    ]},
    {type: 'paragraph', text: [
      'Το εργαλείο δεν είναι το προϊόν: «Google Search Console is a free service offered by Google that helps you monitor, maintain, and troubleshoot your site\'s presence in Google Search results.» (',
      {text: 'Search Console Help, About Search Console', href: G_SC},
      '). Αν μια προσφορά χρεώνει «πρόσβαση σε εργαλεία», αυτό που αγοράζεις είναι η δουλειά πάνω τους.',
    ]},
    {type: 'paragraph', text: [
      'Δύο ακόμα πράγματα πριν συγκρίνεις SEO με διαφήμιση. Δεν αντικαθιστά η μία την άλλη: «Advertising with Google won’t have any effect on your site’s presence in our search results.» Και δεν τιμολογείται σαν παράδοση αντικειμένου, γιατί το αποτέλεσμα δεν εμφανίζεται σε προβλέψιμο χρόνο: «Some changes might take effect in a few hours, others could take several months.» (',
      {text: 'Google Search Central, SEO Starter Guide', href: G_STARTER},
      '). Και για την εγγυημένη πρώτη θέση δεν χρειάζεται να ξαναγράψουμε τίποτα: την απαντά με τα λόγια της Google το κείμενο για ',
      {text: 'το τι να ζητάς γραπτά πριν αναθέσεις', href: A_WRITTEN},
      '.',
    ]},

    {type: 'heading', text: 'Και τι σημαίνει «περιλαμβάνονται διαφημίσεις»'},
    {type: 'paragraph', text: [
      'Είναι η μόνη γραμμή που δεν μπορεί να έχει σταθερό ποσό: «Google Ads determines which ads should show with a lightning-fast ad auction, that takes place every time someone searches on Google or visits a site that shows ads.» (',
      {text: 'Google Ads Help, How the Google Ads auction works', href: G_AUCTION},
      '). Δημοπρασία σε κάθε αναζήτηση σημαίνει ότι δεν υπάρχει τιμή κλικ που να μπει σε χαρτί. Ούτε η θέση αγοράζεται εκ των προτέρων: «Ad Rank is calculated every time a user does a search and is recalculated for different positions on the search results page.» (',
      {text: 'Google Ads Help, About Ad Rank', href: G_ADRANK},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Υπάρχει και το αντίστροφο του «όποιος δίνει περισσότερα κερδίζει»: «So even if your competition has higher bids, you can still win a higher position at a lower price by using highly relevant keywords, ads, and assets.» Και η προσφορά σου δεν είναι η τιμή που πληρώνεις, είναι οροφή: «Your bid: When you set your bid, you\'re telling Google Ads the maximum amount you\'re willing to pay for a click on your ad. How much you actually end up paying is often less, and you can change your bid at any time.»',
    ]},
    {type: 'paragraph', text: [
      'Ο προϋπολογισμός, τέλος, δεν είναι δέσμευση προς κανέναν: «The amount of your budget is entirely up to you and you can edit this amount whenever you like.» (',
      {text: 'Google Ads Help, Manage your costs and budget', href: G_BUDGET},
      '). Πρακτικά: ο διαφημιστικός προϋπολογισμός είναι δική σου γραμμή, σε δικό σου λογαριασμό, και η αμοιβή διαχείρισης είναι ξεχωριστή. Αν μια προσφορά τα έχει ενωμένα σε ένα ποσό, δεν συγκρίνεται με καμία άλλη.',
    ]},

    {type: 'heading', text: 'Η προσβασιμότητα είναι ερώτημα εύρους, όχι extra'},
    {type: 'paragraph', text: [
      'Μια γραμμή που άρχισε να εμφανίζεται χωρίς να εξηγείται. Η επίσημη σύνοψη της ευρωπαϊκής νομοθεσίας για την προσβασιμότητα προϊόντων και υπηρεσιών αναφέρει ότι «The legislation will apply from 28 June 2025 to the following.» και στη λίστα που ακολουθεί περιλαμβάνεται ρητά το ηλεκτρονικό εμπόριο (',
      {text: 'EUR-Lex, Accessibility of products and services', href: EU_EAA},
      '). Η ίδια σύνοψη προβλέπει εξαιρέσεις, ανάμεσά τους «microenterprises providing services.», και ορίζει ότι «Specific accessibility requirements apply to all products and services covered by the legislation, provided these do not alter their basic nature or impose a disproportionate burden on operators.»',
    ]},
    {type: 'paragraph', text: [
      'Δεν είναι δουλειά μιας προσφοράς (ούτε δική μας) να σου πει αν εμπίπτεις ή εξαιρείσαι· είναι ερώτημα για τον νομικό σου σύμβουλο, και η εξαίρεση αφορά υπηρεσίες, όχι κάθε μικρή επιχείρηση αδιακρίτως. Δουλειά της προσφοράς είναι να λέει τι περιλαμβάνει εδώ, ώστε να ξέρεις αν οι δύο μετράνε το ίδιο εύρος.',
    ]},

    {type: 'cta', heading: 'Αν θέλεις μια προσφορά που απαριθμεί αντί να στρογγυλοποιεί', text: 'Ονομαστικός κατάλογος σελίδων, ποιος γράφει τα κείμενα, ποιες ενσωματώσεις, και χωριστή στήλη για ό,τι επαναλαμβάνεται. Γραπτά, πριν ξεκινήσει η δουλειά.', label: 'Δες τι περιλαμβάνει', href: '/el/offers/website-seo'},

    {type: 'heading', text: 'Πώς να βάλεις δύο προσφορές δίπλα δίπλα'},
    {type: 'paragraph', text: [
      'Το μόνο που μπορεί να προσφέρει ένας τρίτος εδώ δεν είναι νούμερο· είναι μέθοδος ανάγνωσης. Μηχανική, και χωρίς καμία τεχνική γνώση.',
    ]},
    {type: 'list', ordered: true, items: [
      [{text: 'Κάνε τις δύο προσφορές να μιλάνε για το ίδιο αντικείμενο.', strong: true}, ' Στείλε και στους δύο τον ίδιο ονομαστικό κατάλογο σελίδων και τις ίδιες ενσωματώσεις.'],
      [{text: 'Χώρισε κάθε γραμμή σε δύο στήλες: μία φορά ή κάθε χρόνο.', strong: true}, ' Δεν χρειάζεσαι ποσά. Ρώτα για κάθε γραμμή «αυτό ξαναπληρώνεται;» και γράψε ναι ή όχι.'],
      [{text: 'Σημείωσε ποιες γραμμές δεν πηγαίνουν στον κατασκευαστή.', strong: true}, ' Όνομα χώρου, φιλοξενία, άδειες, συνδρομές, χρεώσεις ανά συναλλαγή: θα υπάρχουν όποιον κι αν διαλέξεις.'],
      [{text: 'Ρώτα σε ποιο όνομα ανοίγει ο κάθε λογαριασμός.', strong: true}, ' Καταχωρητής, φιλοξενία, πύλη πληρωμών, διαφημιστικός λογαριασμός, εργαλεία μέτρησης.'],
      [{text: 'Για κάθε λέξη-ομπρέλα, ζήτα τη λίστα από κάτω.', strong: true}, ' «SEO», «φιλοξενία», «πρόσθετα», «πληρωμές», «συντήρηση».'],
      [{text: 'Δες τι μένει ασύγκριτο στο τέλος.', strong: true}, ' Αν μετά τα πέντε παραπάνω οι προσφορές διαφέρουν, η διαφορά είναι πραγματική, και το μόνο που αξίζει συζήτηση.'],
    ]},
    {type: 'paragraph', text: [
      'Θα παρατηρήσεις κάτι όσο το κάνεις: οι περισσότερες προσφορές δεν κρύβουν κάτι επίτηδες. Γράφτηκαν με τη λογική «να μη φαίνεται πολύπλοκο», και έτσι δεν φαίνεται τίποτα. Ένας κατασκευαστής που απαριθμεί ευχαρίστως είναι ήδη πληροφορία.',
    ]},

    {type: 'heading', text: 'Οι έξι ερωτήσεις που κάνουν κάθε προσφορά συγκρίσιμη'},
    {type: 'list', items: [
      [{text: 'Ποιες σελίδες ακριβώς, ονομαστικά;', strong: true}, ' Και τι δεν περιλαμβάνεται.'],
      [{text: 'Ποιος γράφει τα κείμενα και πόσους γύρους διορθώσεων καλύπτει η προσφορά;', strong: true}, ' Και τι γίνεται αν αργήσουν από τη δική σου πλευρά.'],
      [{text: 'Το σχέδιο είναι έτοιμο θέμα ή γίνεται από την αρχή;', strong: true}, ' Αν είναι θέμα: ποιο, με ποια άδεια, σε ποιο όνομα.'],
      [{text: 'Ποιες γραμμές θα ξαναπληρωθούν σε έναν χρόνο και ποιες σε δύο;', strong: true}, ' Ζήτα το χωρισμένο, όχι σε ένα σύνολο.'],
      [{text: 'Σε ποιο όνομα ανοίγουν ο καταχωρητής, οι πληρωμές και τα εργαλεία;', strong: true}, ' Η απάντηση πρέπει να είναι το δικό σου. Η φιλοξενία είναι η μία γραμμή που μπορεί εύλογα να τρέχει στον λογαριασμό του κατασκευαστή, αρκεί να είναι γραπτό τι παραδίδεται όταν φύγεις.'],
      [{text: 'Τι ακριβώς περιλαμβάνει κάθε λέξη που εμφανίζεται χωρίς ανάλυση;', strong: true}, ' Όποια κι αν είναι αυτή στη δική σου προσφορά.'],
    ]},
    {type: 'paragraph', text: [
      'Καμία από τις έξι δεν σου δίνει τιμή. Και οι έξι μαζί σου δίνουν κάτι πιο χρήσιμο: δύο προσφορές που επιτέλους μιλάνε για το ίδιο πράγμα, οπότε η διαφορά τους σημαίνει κάτι.',
    ]},

    {type: 'sources', heading: 'Πηγές', items: [
      {label: 'Μητρώο Ονομάτων Internet .gr και .ελ, Συχνές Ερωτήσεις (διάρκεια, ανανέωση, χρεώσεις) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GR_FAQ},
      {label: 'Μητρώο Ονομάτων Internet .gr και .ελ, Διαδικασία Καταχώρησης Ονόματος Χώρου (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: GR_REG},
      {label: 'WordPress.com Support, WordPress.com vs. WordPress.org (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: WP_COMORG},
      {label: 'WordPress.org, Requirements (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: WP_REQ},
      {label: 'WordPress.org, Security (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: WP_SEC},
      {label: 'WordPress.org Documentation, Updating WordPress (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: WP_UPD},
      {label: 'Make WordPress Themes, Theme Review: Required (άδειες) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: WP_THEMES},
      {label: 'WooCommerce Documentation, Which payment option is right for me? (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: WC_PAY},
      {label: 'WooCommerce Documentation, Server Recommendations (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: WC_SERVER},
      {label: 'WooCommerce Documentation, Managing WooCommerce.com Subscriptions (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: WC_SUBS},
      {label: 'Shopify Help Center, Third-party transaction fees on your Shopify bills (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: SH_FEES},
      {label: 'Shopify Help Center, App charges (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: SH_APPS},
      {label: 'Shopify Help Center, Shopify Payments supported countries and regions (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: SH_COUNTRIES},
      {label: 'Let’s Encrypt, FAQ (κόστος και διάρκεια πιστοποιητικών) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: LE_FAQ},
      {label: 'ThemeForest, Regular License (πλήρεις όροι) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: TF_TERMS},
      {label: 'ThemeForest, Standard Licenses (επισκόπηση) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: TF_STD},
      {label: 'Google Search Central, Do you need an SEO? (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_HIRING},
      {label: 'Google Search Central, SEO Starter Guide (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_STARTER},
      {label: 'Google Search Central, Creating helpful, reliable, people-first content (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_HELPFUL},
      {label: 'Search Console Help, About Search Console (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_SC},
      {label: 'Google Ads Help, How the Google Ads auction works (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_AUCTION},
      {label: 'Google Ads Help, About Ad Rank (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_ADRANK},
      {label: 'Google Ads Help, Manage your costs and budget (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_BUDGET},
      {label: 'EUR-Lex, Accessibility of products and services (European accessibility act, επίσημη σύνοψη) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: EU_EAA},
    ]},
  ],
};

export default post;
