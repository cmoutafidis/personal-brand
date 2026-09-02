import type {BlogPost} from '@/types/blog';

// Άρθρο 11. Η γωνία: όχι «ποιο είναι καλύτερο» αλλά «τι παίρνεις μαζί σου».
// Κάθε πρόταση για το πώς δουλεύει μια τρίτη πλατφόρμα είναι κατά λέξη παράθεση από την
// επίσημη τεκμηρίωσή της, ανακτημένη 2026-09-02. Καμία τιμή, καμία συνδρομή σε νούμερα,
// κανένα δικό μας χρονοδιάγραμμα, καμία αναφορά σε πελάτη ή αποτέλεσμα.

const WP_EXPORT = 'https://wordpress.org/documentation/article/tools-export-screen/';
const WPCOM_EXPORT = 'https://wordpress.com/support/export/';
const WP_IMPORT = 'https://developer.wordpress.org/advanced-administration/wordpress/import/';
const WP_LICENSE = 'https://wordpress.org/about/license/';
const WP_PLUGINS = 'https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/';
const WP_MIGRATE = 'https://developer.wordpress.org/advanced-administration/upgrade/migrating/';
const WP_HARDEN = 'https://developer.wordpress.org/advanced-administration/security/hardening/';
const WP_UPGRADE = 'https://developer.wordpress.org/advanced-administration/upgrade/upgrading/';
const WPCOM_SFTP = 'https://wordpress.com/support/sftp/';
const WOO_CSV = 'https://woocommerce.com/document/product-csv-importer-exporter/';

const SH_PRODUCTS = 'https://help.shopify.com/en/manual/products/import-export/export-products';
const SH_ORDERS = 'https://help.shopify.com/en/manual/fulfillment/managing-orders/exporting-orders';
const SH_DUPLICATE = 'https://help.shopify.com/en/manual/shopify-admin/duplicate-store';
const SH_PAUSE = 'https://help.shopify.com/en/manual/your-account/manage-orgs-and-stores/manage-pricing-plan/pause-store';
const SH_DEACTIVATE = 'https://help.shopify.com/en/manual/your-account/pause-deactivate-store';
const SH_DOMAINS = 'https://help.shopify.com/en/manual/domains/managing-domain-ownership/transferring-shopify-domains';
const SH_THEMES = 'https://help.shopify.com/en/manual/online-store/themes/managing-themes/unlicensed-themes';
const SH_TERMS = 'https://www.shopify.com/legal/terms';
const SH_LIQUID = 'https://github.com/Shopify/liquid';

const WIX_EXPORT = 'https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere';
const WIX_CANCEL = 'https://support.wix.com/en/article/canceling-a-wix-premium-plan';
const WIX_CMS = 'https://support.wix.com/en/article/cms-formerly-content-manager-exporting-content-from-your-collection';

const SQ_EXPORT = 'https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site';
const SQ_CANCEL = 'https://support.squarespace.com/hc/en-us/articles/205810508-Cancel-your-website-subscription';

const WF_EXPORT = 'https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code';

const post: BlogPost = {
  id: 'wordpress-shopify-i-diko-sou',
  slug: 'wordpress-shopify-i-diko-sou',
  title: 'WordPress, Shopify ή κάτι δικό σου: τι σε κλειδώνει και τι σε ελευθερώνει',
  metaTitle: 'WordPress, Shopify ή κάτι δικό σου: τι σε κλειδώνει',
  excerpt: 'Όχι ποιο είναι καλύτερο, αλλά τι παίρνεις μαζί σου: τι εξάγεται πραγματικά, τι σταματά όταν σταματήσεις να πληρώνεις, ποιος ευθύνεται.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 29,
  tags: ['Ιστοσελίδες', 'E-shop', 'Ανάθεση έργου'],
  body: [
    { type: 'paragraph', text: [
      'Η ερώτηση που ακούγεται παντού είναι «WordPress ή Shopify;». Δεν είναι λάθος ερώτηση επειδή δεν έχει απάντηση, αλλά επειδή δεν κρίνεται την πρώτη μέρα, που όλα δουλεύουν και όλα σου αρέσουν. Κρίνεται την ημέρα που θα θελήσεις να αλλάξεις. Και τότε μετράει ένα πράγμα: ',
      {text: 'τι μπορείς να πάρεις μαζί σου', strong: true},
      '.',
    ]},
    { type: 'paragraph', text: [
      'Όλες οι πλατφόρμες έχουν κουμπί «εξαγωγή». Το κουμπί όμως δεν σημαίνει το ίδιο πουθενά. Κάπου παίρνεις τα κείμενα αλλά όχι τον σχεδιασμό. Κάπου παίρνεις τα προϊόντα αλλά όχι τις φωτογραφίες τους. Και κάπου η ίδια η εταιρεία γράφει, με τα δικά της λόγια, ότι η ιστοσελίδα σου δεν μπορεί να τρέξει αλλού.',
    ]},
    { type: 'paragraph', text: [
      'Παρακάτω περνάμε τις συνηθισμένες επιλογές με τέσσερις ερωτήσεις: τι εξάγεται πραγματικά, τι σταματά όταν σταματήσεις να πληρώνεις, ποιος φιλοξενεί, ποιος ευθύνεται για τις ενημερώσεις ασφαλείας. Η οπτική δεν είναι εκείνου που στήνει καινούργιες ιστοσελίδες, αλλά της δουλειάς που κάνουμε όταν κάποιος θέλει να βγάλει περιεχόμενο, προϊόντα και παραγγελίες ',
      {text: 'έξω', strong: true},
      ' από ένα τέτοιο σύστημα.',
    ]},

    { type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε πρόταση που παρατίθεται εδώ διαβάστηκε εκείνη τη μέρα στην επίσημη τεκμηρίωση της πλατφόρμας που αφορά. Το άρθρο δεν αναφέρει τιμές ή συνδρομές σε νούμερα — μιλάει μόνο για μοντέλα: συνδρομή, άδεια, αυτοφιλοξενία.',
    ]},

    { type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Τελικά, WordPress ή Shopify;', a: 'Λάθος ερώτηση για αρχή. Και τα δύο δουλεύουν. Η διαφορά φαίνεται στο τι κρατάς αν φύγεις: στο ένα κατεβάζεις λογισμικό που σου ανήκει με άδεια και το τρέχεις όπου θέλεις, στο άλλο νοικιάζεις υπηρεσία και κατεβάζεις αντίγραφα δεδομένων.'},
      {q: 'Αν φύγω από το Shopify, χάνω τις παραγγελίες μου;', a: 'Όχι, αλλά τις παίρνεις σε αρχεία CSV που τα βγάζεις εσύ. Δύο λεπτομέρειες μετράνε, και τις γράφει η ίδια η τεκμηρίωση: οι φωτογραφίες των προϊόντων δεν είναι μέσα στο αρχείο, και το ιστορικό συναλλαγών περιέχει μόνο τις ολοκληρωμένες χρεώσεις.'},
      {q: 'Μπορώ να πάρω την ιστοσελίδα μου από το Wix και να τη βάλω αλλού;', a: 'Όχι με την έννοια που το εννοείς. Το Wix γράφει το ίδιο ότι, ως λύση SaaS, η ιστοσελίδα σου πρέπει να τρέχει στους δικούς του διακομιστές και ότι η αρχιτεκτονική του δεν υποστηρίζει εξωτερική φιλοξενία. Περιεχόμενο εξάγεις. Την ιστοσελίδα, όχι.'},
      {q: 'Το «ανοιχτού κώδικα» σημαίνει δωρεάν;', a: 'Σημαίνει ελευθερία, όχι απουσία κόστους. Η άδεια σου δίνει το δικαίωμα να έχεις τον κώδικα, να τον αλλάξεις και να τον μεταφέρεις. Η φιλοξενία και οι ενημερώσεις παραμένουν δική σου ευθύνη — απλώς διαλέγεις εσύ ποιος και πότε.'},
      {q: 'Τι να προσέξω πριν κλείσω το παλιό μου κατάστημα;', a: 'Μην το κλείσεις πρώτο. Η τεκμηρίωση της Shopify λέει να αφήσεις το αρχικό κατάστημα και τα προϊόντα του άθικτα μέχρι να τελειώσει η εισαγωγή στο νέο, επειδή οι εικόνες δημιουργούνται ξανά μόνο όσο παραμένουν δημόσια προσβάσιμες. Η αντίστροφη σειρά είναι ο πιο ακριβός τρόπος να χάσεις φωτογραφίες.'},
      {q: 'Χρειάζομαι οπωσδήποτε «κάτι δικό μου»;', a: 'Όχι. Αν αυτό που πουλάς χωράει σε έτοιμη πλατφόρμα και δεν έχεις κανέναν να συντηρεί υποδομή, η συνδρομή είναι λογική απόφαση. Το δικό σου έχει νόημα όταν η πλατφόρμα σε εμποδίζει στην ουσία της δουλειάς σου ή όταν η εξάρτηση είναι πραγματικός κίνδυνος.'},
    ]},

    { type: 'heading', text: 'Οι τέσσερις ερωτήσεις που αντικαθιστούν τη σύγκριση' },
    { type: 'paragraph', text: [
      'Οι συγκρίσεις πλατφορμών μετράνε πράγματα που αλλάζουν: πόσα πρότυπα έχει η καθεμιά, πόσο εύκολος είναι ο επεξεργαστής. Όλα αληθινά, όλα παλιώνουν. Οι τέσσερις παρακάτω δεν παλιώνουν, γιατί δεν είναι χαρακτηριστικά — είναι όροι.',
    ]},
    { type: 'list', items: [
      [{text: 'Τι εξάγεται, στ’ αλήθεια.', strong: true}, ' Όχι «έχει εξαγωγή», αλλά τι ακριβώς είναι μέσα: κείμενα, φωτογραφίες, σχεδιασμός, παραγγελίες, πελάτες. Η απάντηση είναι σχεδόν πάντα «μερικά από αυτά», και η διαφορά είναι όλη η δουλειά της μετακόμισης.'],
      [{text: 'Τι σταματά όταν σταματήσεις να πληρώνεις.', strong: true}, ' Σβήνει η ιστοσελίδα; Μένει ορατή χωρίς ταμείο; Γυρίζει σε άλλη διεύθυνση; Βγαίνει από την αναζήτηση; Οι απαντήσεις διαφέρουν πολύ περισσότερο απ’ όσο φαντάζεσαι.'],
      [{text: 'Ποιος φιλοξενεί.', strong: true}, ' Αν η φιλοξενία είναι μέρος της υπηρεσίας, τα δύο δεν ξεχωρίζουν: φεύγεις από το ένα, φεύγεις και από το άλλο.'],
      [{text: 'Ποιος βάζει τις ενημερώσεις ασφαλείας.', strong: true}, ' Η ερώτηση που κανείς δεν κάνει στην αρχή και όλοι κάνουν μετά. Σε ένα μοντέλο τη δουλειά την κάνει ο πάροχος χωρίς να σε ρωτήσει· στο άλλο, εσύ ή κάποιος για λογαριασμό σου.'],
    ]},

    { type: 'heading', text: 'Τρία μοντέλα, όχι δέκα πλατφόρμες' },
    { type: 'paragraph', text: [
      'Πριν τα ονόματα, τα μοντέλα. Ό,τι δεις παρακάτω είναι παραλλαγή τριών πραγμάτων, και το ποιο διάλεξες καθορίζει τις απαντήσεις πριν καν ανοίξεις λογαριασμό: συνδρομή για υπηρεσία που τρέχει αλλού, λογισμικό με άδεια που το τρέχεις όπου θέλεις, ή κάτι δικό σου σε δικό σου περιβάλλον. Το τρίτο δεν είναι ανώτερο· είναι διαφορετική ανταλλαγή.',
    ]},
    { type: 'table', caption: 'Τα τρία μοντέλα, με τους όρους τους και όχι με τα χαρακτηριστικά τους.', head: ['Μοντέλο', 'Ποιος φιλοξενεί', 'Τι κρατάς αν φύγεις', 'Ποιος ενημερώνει'], rows: [
      [['Συνδρομή (SaaS)'], ['Ο πάροχος, πάντα'], ['Αντίγραφα δεδομένων σε αρχεία — όχι το ίδιο το σύστημα'], ['Ο πάροχος, χωρίς να σε ρωτήσει']],
      [['Άδεια ανοιχτού κώδικα'], ['Όποιος θέλεις· αλλάζει χωρίς να αλλάξει η ιστοσελίδα'], ['Τον κώδικα, τα αρχεία και τη βάση δεδομένων'], ['Εσύ ή όποιος αναλάβει· υπάρχουν αυτόματοι μηχανισμοί']],
      [['Αυτοφιλοξενία / δικό σου'], ['Εσύ, σε περιβάλλον που ελέγχεις'], ['Τα πάντα, μαζί με την ευθύνη τους'], ['Εσύ ή όποιος αναλάβει, χωρίς δίχτυ']],
    ]},
    { type: 'paragraph', text: [
      'Η διαφορά ανάμεσα στο πρώτο και στα άλλα δύο δεν είναι ποιοτική, είναι νομική. Το WordPress γράφει: «The license under which the WordPress software is released is the GPLv2 (or later) from the Free Software Foundation.» (',
      {text: 'WordPress.org, License', href: WP_LICENSE},
      '). Ο ίδιος κανόνας απλώνεται στο οικοσύστημα: για ό,τι φιλοξενείται στο επίσημο ευρετήριο προσθέτων, «All code, data, and images — anything stored in the plugin directory hosted on WordPress.org — must comply with the GPL or a GPL-Compatible license.» (',
      {text: 'Detailed Plugin Guidelines', href: WP_PLUGINS},
      '). Πρακτικά: το λογισμικό δεν σου νοικιάζεται. Αν δεν σου αρέσει κανείς από όσους το υποστηρίζουν, το παίρνεις και φεύγεις.',
    ]},

    { type: 'heading', text: 'WordPress: δύο πολύ διαφορετικά πράγματα με το ίδιο όνομα' },
    { type: 'paragraph', text: [
      'Η πιο συχνή παρεξήγηση δεν είναι ανάμεσα στο WordPress και σε κάτι άλλο. Είναι ανάμεσα στο WordPress που κατεβάζεις και τρέχεις μόνος σου και στο WordPress.com, που είναι συνδρομητική υπηρεσία με το ίδιο λογισμικό από κάτω. Ίδιο όνομα, εντελώς άλλοι όροι εξόδου.',
    ]},

    { type: 'subheading', text: 'Τι περιέχει πραγματικά το αρχείο εξαγωγής' },
    { type: 'paragraph', text: [
      'Το WordPress βγάζει ένα αρχείο XML που λέγεται WXR: «This format, which is called and WordPress eXtended RSS or WXR file, will contain your posts, pages, custom post types, comments, custom fields, categories, tags, custom taxonomies, and users.» (',
      {text: 'Tools Export screen', href: WP_EXPORT},
      '). Δηλαδή όλο το κείμενο και όλη η δομή του.',
    ]},
    { type: 'paragraph', text: [
      'Τι δεν είναι μέσα, το γράφει το WordPress.com χωρίς περιστροφές: «Your export file will include your posts, pages, and comments but will not include your theme design, customizations, or plugins.» (',
      {text: 'WordPress.com, Export', href: WPCOM_EXPORT},
      '). Ο σχεδιασμός δεν είναι δεδομένο· είναι λογισμικό και ρυθμίσεις, και δεν ταξιδεύει με το κείμενο.',
    ]},
    { type: 'paragraph', text: [
      'Το δεύτερο που λείπει εκπλήσσει σχεδόν όλους — οι φωτογραφίες: «Your export file doesn\'t actually contain your media library (like photos, videos, audio, etc.). Instead, it contains instructions that tell your new site where to find and copy these files from your original site.» (',
      {text: 'WordPress.com, Export', href: WPCOM_EXPORT},
      '). Το αρχείο κρατάει ',
      {text: 'διευθύνσεις', strong: true},
      ', όχι εικόνες. Αν η παλιά ιστοσελίδα έχει ήδη κατέβει, οι διευθύνσεις δείχνουν στο πουθενά.',
    ]},
    { type: 'paragraph', text: [
      'Ο μηχανισμός που το λύνει είναι ένα κουτάκι που πρέπει να θυμηθείς να τσεκάρεις: «In addition, you can import attachments by checking the ',
      "'Download and import file attachments' option.",
      '» (',
      {text: 'WordPress Developer, Importing Content', href: WP_IMPORT},
      '). Δουλεύει όσο τα αρχεία είναι ακόμα εκεί που τα ζητάει — και αυτή η μία πρόταση καθορίζει τη σειρά όλης της μετακόμισης.',
    ]},

    { type: 'subheading', text: 'Το WordPress.com δεν είναι το WordPress.org' },
    { type: 'paragraph', text: [
      'Όσο μένεις μέσα, η διαφορά είναι μικρή. Την ημέρα που θες τα αρχεία σου, γίνεται μεγάλη. Η πρόσβαση SFTP — να κατεβάσεις ό,τι υπάρχει στον διακομιστή, όχι μόνο ό,τι σου δίνει ένα κουμπί — δεν υπάρχει παντού: «This feature is available on sites with the WordPress.com Business and Commerce plans.» (',
      {text: 'WordPress.com, SFTP', href: WPCOM_SFTP},
      '). Σε μια συνδρομητική υπηρεσία η πρόσβαση στα αρχεία είναι χαρακτηριστικό του πλάνου, όχι δικαίωμα. Ρώτα λοιπόν πριν, όχι μετά, σε ποιο πλάνο είσαι και τι πρόσβαση δίνει σε αρχεία και βάση.',
    ]},

    { type: 'subheading', text: 'Μετακόμιση σημαίνει αρχεία και βάση δεδομένων' },
    { type: 'paragraph', text: [
      'Όταν το WordPress τρέχει σε δικό σου περιβάλλον, η μετακίνηση δεν είναι εξαγωγή· είναι μεταφορά: «If you are moving WordPress from one server to another, begin by backing up your WordPress directory, images, plugins, and other files on your site as well as the database.» (',
      {text: 'WordPress Developer, Migrating', href: WP_MIGRATE},
      '). Δύο πράγματα, όχι ένα. Ακούγεται πιο βαρύ και είναι πιο ελεύθερο: επειδή και τα δύο είναι στα χέρια σου, ο πάροχος γίνεται προμηθευτής που αλλάζεις, όχι ιδιοκτήτης που εγκαταλείπεις.',
    ]},
    { type: 'paragraph', text: [
      'Για e-shop πάνω σε WordPress, το WooCommerce δίνει τον αντίστοιχο δρόμο για τον κατάλογο: «WooCommerce includes a built-in CSV tool for importing, exporting, and bulk-updating products.» (',
      {text: 'WooCommerce, Product CSV Importer and Exporter', href: WOO_CSV},
      '). Ο κατάλογος μπαινοβγαίνει, όπως και στις συνδρομητικές πλατφόρμες. Η διαφορά είναι ότι εδώ φεύγει μαζί σου και το λογισμικό.',
    ]},

    { type: 'heading', text: 'Shopify: τα δεδομένα φεύγουν, το κατάστημα μένει' },
    { type: 'paragraph', text: [
      'Το Shopify είναι από τα πιο ειλικρινή παραδείγματα του συνδρομητικού μοντέλου: σου δίνει καθαρούς δρόμους να βγάλεις τα δεδομένα σου και λέει ρητά ότι το αντίγραφο είναι δική σου δουλειά. «You can export CSV files from your Shopify admin to back up your store information.» (',
      {text: 'Shopify, Backups and duplication', href: SH_DUPLICATE},
      '). Δεν υπάρχει κουμπί «κατέβασε το κατάστημα». Υπάρχουν αρχεία.',
    ]},

    { type: 'subheading', text: 'Ο κατάλογος φεύγει, οι φωτογραφίες όχι — και η σειρά μετράει' },
    { type: 'paragraph', text: [
      'Πρώτο: «When you export your products, the images associated with each product aren\'t included in the CSV file.» Το αρχείο περιέχει διευθύνσεις εικόνων, όχι εικόνες, ακριβώς όπως το WXR. Δεύτερο, και εδώ γίνεται επικίνδυνο: «If you import the products to a new store, then the product images are generated only if they remain viewable on a publicly accessible website.» Οι εικόνες δηλαδή ξαναδημιουργούνται ',
      {text: 'μόνο όσο το παλιό κατάστημα είναι ζωντανό και δημόσιο', strong: true},
      ' (',
      {text: 'Shopify, Exporting products', href: SH_PRODUCTS},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Τρίτο, η οδηγία που προκύπτει, από την ίδια τη Shopify: «To ensure that your product images remain accessible to you, leave your original store and its products intact until you finish the import process.» (',
      {text: 'Shopify, Exporting products', href: SH_PRODUCTS},
      '). Η φυσική παρόρμηση είναι «εξάγω, κλείνω, ανεβάζω». Είναι η ανάποδη σειρά και κοστίζει όλες τις φωτογραφίες.',
    ]},

    { type: 'subheading', text: 'Παραγγελίες: τι κατεβαίνει και τι λείπει από μέσα' },
    { type: 'paragraph', text: [
      'Οι παραγγελίες βγαίνουν κι αυτές σε CSV: μικρές εξαγωγές κατεβαίνουν κατευθείαν, μεγάλες έρχονται με email — «If you select to export more than 51 orders or to export orders by date, then the CSV file is emailed to you and the store owner.» Πιο σημαντικό είναι τι λείπει από το περιεχόμενο: «The transaction history that\'s included in your CSV file contains only captured payments data. Authorization data isn\'t included in your exported transaction history.» (',
      {text: 'Shopify, Exporting orders', href: SH_ORDERS},
      '). Αν τα κρατάς ως λογιστικό αντίγραφο, δεν είναι πλήρης εικόνα των συναλλαγών· είναι εικόνα των ολοκληρωμένων χρεώσεων.',
    ]},

    { type: 'subheading', text: 'Τι γίνεται όταν σταματήσεις να πληρώνεις' },
    { type: 'paragraph', text: [
      'Υπάρχουν δύο καταστάσεις και αξίζει να μην τις μπερδεύεις. Στο πλάνο παύσης το κατάστημα μένει ορατό αλλά χωρίς ταμείο: «This means that customers can view your products, but they can\'t make purchases through any sales channels.» (',
      {text: 'Shopify, Pausing your store', href: SH_PAUSE},
      '). Είναι βιτρίνα με κλειστή πόρτα.',
    ]},
    { type: 'paragraph', text: [
      'Στην απενεργοποίηση χάνεις και τον πίνακα διαχείρισης: «After deactivation, your Shopify subscription is terminated at the end of your current billing cycle, resulting in the loss of access to your Shopify admin.» Υπάρχει περιθώριο επιστροφής, δηλωμένο από την ίδια την εταιρεία: «You can reactivate your store up to 2 years after deactivating it. After your store data is deleted, your store can\'t be reactivated.» (',
      {text: 'Shopify, Deactivating your store', href: SH_DEACTIVATE},
      '). Είναι πολιτική της Shopify, όχι δικό μας χρονοδιάγραμμα — και το δεύτερο μισό της πρότασης είναι αυτό που μετράει. Το παράθυρο για να βγάλεις τα αρχεία σου κλείνει με τον κύκλο χρέωσης.',
    ]},

    { type: 'subheading', text: 'Το θέμα, το υλικό, το domain' },
    { type: 'paragraph', text: [
      'Τρία πράγματα που υποθέτεις ότι είναι δικά σου. Το θέμα: «When you purchase a theme from the Shopify Theme Store, that theme is licensed exclusively to the store where the purchase was made.» (',
      {text: 'Shopify, Licensing and transferring themes', href: SH_THEMES},
      '). Το αγόρασες, αλλά η άδεια είναι δεμένη με το κατάστημα· όχι με εσένα.',
    ]},
    { type: 'paragraph', text: [
      'Το υλικό που ανέβασες: «If you owned the Materials before providing them to Shopify then, despite uploading them to your Shopify Store they remain yours, subject to any rights or licenses granted in the Terms of Service or elsewhere.» (',
      {text: 'Shopify, Terms of Service', href: SH_TERMS},
      '). Η πρόταση είναι καθησυχαστική μέχρι το κόμμα: παραμένει δικό σου ',
      {text: 'υπό τις άδειες που παραχωρείς με τους ίδιους τους όρους', strong: true},
      '. Και δεν αφορά «τα δεδομένα σου» γενικά — αφορά το υλικό που ανέβασες.',
    ]},
    { type: 'paragraph', text: [
      'Το domain είναι το πιο συγκεκριμένο. Αν το πήρες μέσα από τη Shopify, φεύγει με κωδικό: «Give the domain authorization code to your new domain provider to verify the transfer.» Και δεν φεύγει όποτε θέλεις: «For your domain to be eligible for transfer, you need to wait 60 days after performing the following tasks: purchasing the domain, transferring the domain to Shopify, [or] changing your contact information.» (',
      {text: 'Shopify, Transferring Shopify-managed domains', href: SH_DOMAINS},
      '). Πιάνει ακόμα και την αλλαγή στοιχείων επικοινωνίας. Σχέδιο μετακόμισης που δεν την ξέρει, κολλάει στο τελευταίο βήμα.',
    ]},
    { type: 'paragraph', text: [
      'Και μια δίκαιη σημείωση από την άλλη πλευρά: η Liquid, η γλώσσα με την οποία γράφονται τα πρότυπα των θεμάτων, είναι δημόσιο αποθετήριο ανοιχτού κώδικα με άδεια MIT, που περιγράφεται ως «Liquid markup language. Safe, customer facing template language for flexible web apps.» (',
      {text: 'GitHub, Shopify/liquid', href: SH_LIQUID},
      '). Η πλατφόρμα είναι κλειστή· η γνώση που έχτισες πάνω της δεν είναι.',
    ]},

    { type: 'heading', text: 'Wix, Squarespace, Webflow: τρεις πολύ διαφορετικές απαντήσεις' },
    { type: 'paragraph', text: [
      'Μπαίνουν συνήθως στο ίδιο κουτί, «έτοιμες πλατφόρμες με συνδρομή». Στο ερώτημα της εξόδου δίνουν τρεις εντελώς διαφορετικές απαντήσεις, και την καθεμιά τη γράφει η ίδια η πλατφόρμα.',
    ]},

    { type: 'subheading', text: 'Wix: το λέει ευθέως' },
    { type: 'paragraph', text: [
      'Δεν χρειάζεται να το συμπεράνεις, είναι γραμμένο: «Since Wix is a SaaS solution, your site must run on Wix\'s servers.» Και ο λόγος, στην ίδια σελίδα: «The reason you can\'t use another host for your Wix site is that the SaaS architecture does not support external hosting since it uses Wix\'s proprietary technology and relies on Wix\'s services to operate.» (',
      {text: 'Wix, Exporting or embedding your site elsewhere', href: WIX_EXPORT},
      '). Είναι η πληρέστερη απάντηση στο «τι με κλειδώνει» που θα βρεις σε τεκμηρίωση: η ιστοσελίδα δεν είναι αντικείμενο, είναι υπηρεσία που τρέχει.',
    ]},
    { type: 'paragraph', text: [
      'Τι σταματά αν σταματήσεις να πληρώνεις: «After canceling, your site address reverts to the free Wix URL (siteprefix.wixsite.com/siteaddress) and Wix ads appear on your site.» (',
      {text: 'Wix, Canceling a Premium plan', href: WIX_CANCEL},
      '). Δεν σβήνει· αλλάζει διεύθυνση και αποκτά διαφημίσεις που δεν είναι δικές σου. Το μισό που δουλεύει: το περιεχόμενο σε συλλογή CMS βγαίνει ολόκληρο, «The entire collection: Export all items and fields, including hidden and system fields.» (',
      {text: 'Wix, Exporting content from your collection', href: WIX_CMS},
      '). Τα δεδομένα τα παίρνεις. Την ιστοσελίδα, όχι.',
    ]},

    { type: 'subheading', text: 'Squarespace: εξάγει «ορισμένο» περιεχόμενο' },
    { type: 'paragraph', text: [
      'Η λέξη-κλειδί είναι στην πρώτη κιόλας πρόταση: «You can export certain content from your Squarespace site into an .xml file.» Το «certain» δεν είναι διπλωματία, είναι περιγραφή. Η λίστα εξαιρέσεων αυτής της εξαγωγής περιλαμβάνει, κατά λέξη, «Other page types (including album pages, cover pages, index pages, info pages, calendar pages, portfolio pages, and store pages)» και, χωριστά, τα «Style settings» (',
      {text: 'Squarespace, Exporting your site', href: SQ_EXPORT},
      '). Δηλαδή ο σχεδιασμός δεν φεύγει μαζί σου, ούτε αρκετοί τύποι σελίδων που πιθανότατα χρησιμοποιείς.',
    ]},
    { type: 'paragraph', text: [
      'Και όταν λήξει η συνδρομή: «After your subscription ends, your site becomes private and search engines stop indexing your content.» (',
      {text: 'Squarespace, Cancel your website subscription', href: SQ_CANCEL},
      '). Δεν είναι απλώς «κατεβαίνει η ιστοσελίδα». Χάνεις και τη θέση που έχτισες στην αναζήτηση.',
    ]},

    { type: 'cta', heading: 'Πριν διαλέξεις πλατφόρμα, δες τι πρέπει να φύγει μαζί σου', text: 'Κοιτάμε τι κρατάει σήμερα το σύστημά σου, τι βγαίνει πραγματικά από αυτό, τι δεν βγαίνει και με ποια σειρά γίνεται η μετακίνηση χωρίς να χαθεί τίποτα. Γραπτά, πριν πειραχτεί οτιδήποτε.', label: 'Δες τι περιλαμβάνει', href: '/el/business-process-audit' },

    { type: 'subheading', text: 'Webflow: η μόνη με πραγματική εξαγωγή κώδικα — με αστερίσκους' },
    { type: 'paragraph', text: [
      'Το Webflow είναι η εξαίρεση που κάνει τη σύγκριση ενδιαφέρουσα, γιατί σου δίνει τον κώδικα. Πρώτα το πού: «Code export is only available on Workspace plans — that is, Site plans do not include the ability to export your site’s code.» Η αντίθεση δεν είναι «φθηνό πλάνο εναντίον ακριβού»· είναι Workspace plan εναντίον Site plan, δύο διαφορετικά είδη συνδρομής (',
      {text: 'Webflow, Export site code', href: WF_EXPORT},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Μετά, τι δεν είναι μέσα: «CMS, User Accounts , Ecommerce content (databases), code components and functionality, and localized pages, elements, and content aren’t included in exported code.» Και η συνέπεια: «On exported sites, Collection lists will show the empty state, and Collection pages won’t show any content that’s bound to Collection fields.» Παίρνεις δηλαδή το κέλυφος· ο κατάλογος, το ηλεκτρονικό εμπόριο και οι λογαριασμοί χρηστών εξάγονται χωριστά (',
      {text: 'Webflow, Export site code', href: WF_EXPORT},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Υπάρχουν και πράγματα που δεν λείπουν απλώς, αλλά παύουν να λειτουργούν: «Any password protected pages on your site will no longer be protected after code export. Additionally, site search and forms (including file upload and reCAPTCHA) will not work on exported sites in order to comply with GDPR.» Μια σελίδα που θεωρούσες κλειδωμένη δεν είναι πια — δεν είναι λεπτομέρεια μετακόμισης, είναι θέμα ασφάλειας. Και το καλό νέο, από την ίδια σελίδα: «After exporting, you don’t need to provide attribution to Webflow or maintain a Webflow plan for your exported site to work on your own server.» (',
      {text: 'Webflow, How do I export my Webflow site code?', href: WF_EXPORT},
      '). Είναι, ουσιαστικά, ο ορισμός του «δεν σε κλειδώνει».',
    ]},

    { type: 'table', caption: 'Τι φεύγει μαζί σου, τι μένει πίσω, τι σταματά — με βάση τις προτάσεις που παρατίθενται πιο πάνω.', head: ['Πλατφόρμα', 'Τι εξάγεται', 'Τι δεν εξάγεται', 'Αν σταματήσεις να πληρώνεις'], rows: [
      [['WordPress σε δικό σου περιβάλλον'], ['Αρχεία και βάση δεδομένων, μαζί το λογισμικό με άδεια GPLv2 ή νεότερη'], ['Τίποτα ουσιώδες, αρκεί να πάρεις και τα δύο μέρη'], ['Σταματάς φιλοξενία, όχι λογισμικό· αλλάζεις πάροχο']],
      [['WordPress.com'], ['Αρχείο WXR: άρθρα, σελίδες, σχόλια, χρήστες, ταξινομήσεις'], ['Θέμα, προσαρμογές, πρόσθετα· τα πολυμέσα μόνο ως οδηγίες προς τα αρχικά αρχεία'], ['Το τι κατεβάζεις εξαρτάται από το πλάνο: η πρόσβαση SFTP υπάρχει σε Business και Commerce']],
      [['Shopify'], ['Προϊόντα, παραγγελίες και πληροφορίες καταστήματος σε CSV'], ['Οι εικόνες προϊόντων, τα δεδομένα εξουσιοδότησης πληρωμών, η άδεια του θέματος'], ['Στην παύση κλείνει το ταμείο· στην απενεργοποίηση χάνεις τον πίνακα διαχείρισης με το τέλος του κύκλου χρέωσης']],
      [['Wix'], ['Συλλογές CMS σε CSV, με όλα τα πεδία'], ['Η ίδια η ιστοσελίδα — δηλωμένα, γιατί πρέπει να τρέχει στους διακομιστές του Wix'], ['Η διεύθυνση γυρίζει στο δωρεάν Wix URL, με διαφημίσεις Wix']],
      [['Squarespace'], ['«Ορισμένο» περιεχόμενο σε αρχείο .xml'], ['Ρυθμίσεις στυλ και αρκετοί τύποι σελίδων, μεταξύ τους οι σελίδες καταστήματος'], ['Η ιστοσελίδα γίνεται ιδιωτική και οι μηχανές αναζήτησης σταματούν να την ευρετηριάζουν']],
      [['Webflow'], ['Ο κώδικας της ιστοσελίδας σε πλάνα Workspace· CMS, ηλεκτρονικό εμπόριο και χρήστες χωριστά σε CSV'], ['Το περιεχόμενο μέσα στον κώδικα: οι λίστες συλλογών βγαίνουν άδειες· προστασία με κωδικό, αναζήτηση και φόρμες παύουν να λειτουργούν'], ['Ό,τι έχεις εξάγει τρέχει στον δικό σου διακομιστή χωρίς ενεργό πλάνο']],
    ]},

    { type: 'heading', text: 'Ποιος ευθύνεται όταν βγει η επόμενη ευπάθεια' },
    { type: 'paragraph', text: [
      'Είναι η ερώτηση που αποφασίζει αν το «δικό σου» είναι ελευθερία ή βάρος. Σε συνδρομητική υπηρεσία ο πάροχος ενημερώνει επειδή το σύστημα είναι δικό του. Σε αυτοφιλοξενία το όριο ευθύνης είναι γραμμένο, και πιο στενό απ’ όσο νομίζει ο κόσμος: «Web hosts are often responsible for the infrastructure on which your website sits, they are not responsible for the application you choose to install.» Και η ίδια σελίδα λέει τι σημαίνει να την αφήσεις: «Older versions of WordPress are not maintained with security updates.» (',
      {text: 'WordPress Developer, Hardening WordPress', href: WP_HARDEN},
      ').',
    ]},
    { type: 'paragraph', text: [
      'Δεν είναι όμως χειροκίνητη δουλειά από το μηδέν. Υπάρχει μηχανισμός, εξ ορισμού ενεργός στις καινούργιες εγκαταστάσεις: «Starting with WordPress 5.6, new installations have automatic updates enabled for both minor and major core releases by default.» (',
      {text: 'WordPress Developer, Updating WordPress', href: WP_UPGRADE},
      '). Άρα η σωστή ερώτηση δεν είναι «θα το ενημερώνεις;» αλλά «τι γίνεται μόνο του, τι μένει σε άνθρωπο, και ποιος είναι αυτός ο άνθρωπος όταν εσύ λείπεις;».',
    ]},

    { type: 'heading', text: '«Κάτι δικό σου»: πότε αξίζει και πότε είναι απλώς πιο ακριβή δουλειά' },
    { type: 'paragraph', text: [
      'Επειδή γράφουμε λογισμικό, θα ήταν βολικό να καταλήγει το κείμενο στο «φτιάξε κάτι δικό σου». Δεν καταλήγει, γιατί το δικό σου δεν λύνει τα προβλήματα της λίστας — τα μετακινεί σε εσένα. Δικός σου διακομιστής σημαίνει δικές σου ενημερώσεις, δικά σου αντίγραφα, δική σου παρακολούθηση.',
    ]},
    { type: 'list', items: [
      [{text: 'Έχει νόημα όταν η πλατφόρμα σε εμποδίζει στην ουσία της δουλειάς σου.', strong: true}, ' Όχι όταν σε ενοχλεί ένα μενού· όταν αυτό που πουλάς ή ο τρόπος που το πουλάς δεν χωράει στο μοντέλο της.'],
      [{text: 'Έχει νόημα όταν η ιστοσελίδα μιλάει με τα υπόλοιπα συστήματά σου.', strong: true}, ' Αποθήκη, τιμολόγηση, πελατολόγιο. Όταν το κρίσιμο κομμάτι είναι η σύνδεση και όχι οι σελίδες, η έτοιμη πλατφόρμα γίνεται εμπόδιο.'],
      [{text: 'Δεν έχει νόημα επειδή «θέλω κάτι δικό μου».', strong: true}, ' Αυτό δεν είναι απαίτηση, είναι αίσθημα. Οι απαιτήσεις γράφονται και ελέγχονται.'],
      [{text: 'Δεν έχει νόημα αν δεν υπάρχει κανείς να το συντηρεί.', strong: true}, ' Κώδικας χωρίς άνθρωπο είναι χρέος. Η έτοιμη πλατφόρμα, με όλα τα κλειδώματά της, τουλάχιστον ενημερώνεται μόνη της.'],
    ]},

    { type: 'heading', text: 'Πώς φεύγεις σωστά, με τη σωστή σειρά' },
    { type: 'paragraph', text: [
      'Αν έχεις ήδη αποφασίσει να μετακινηθείς, η σειρά μετράει πιο πολύ από την ταχύτητα. Οι απώλειες σε τέτοιες μετακινήσεις σπάνια είναι τεχνικές· είναι αποτέλεσμα του να κλείσει κάτι πριν ανοίξει το επόμενο.',
    ]},
    { type: 'list', ordered: true, items: [
      ['Γράψε τι θεωρείς «την ιστοσελίδα σου»: κείμενα, φωτογραφίες, προϊόντα, παραγγελίες, πελάτες, σχεδιασμό, φόρμες, ανακατευθύνσεις, domain. Ό,τι δεν γράφτηκε, δεν μεταφέρεται.'],
      ['Βρες για κάθε γραμμή την πρόταση της τεκμηρίωσης που λέει αν εξάγεται. Όχι τη γνώμη ενός φόρουμ· τη σελίδα του κατασκευαστή.'],
      ['Κάνε τις εξαγωγές όσο όλα είναι ζωντανά και πληρωμένα, και άνοιξέ τες για να δεις τι έχουν μέσα. Ένα CSV με διευθύνσεις εικόνων μοιάζει πλήρες μέχρι να το κοιτάξεις.'],
      ['Στήσε το καινούργιο και κάνε την εισαγωγή με το παλιό ακόμα δημόσιο — είναι η οδηγία της Shopify για τις εικόνες και η λογική πίσω από το κουτάκι λήψης συνημμένων του WordPress.'],
      ['Έλεγξε όσα δεν φαίνονται: προστασία σελίδων, φόρμες, ανακατευθύνσεις. Η εξαγωγή κώδικα του Webflow απενεργοποιεί ρητά την προστασία με κωδικό και τις φόρμες.'],
      ['Μετάφερε το domain και μόνο μετά κατέβασε το παλιό. Αν είναι σε πλατφόρμα, δες πρώτα τι απαιτεί η διαδικασία της, γιατί μπορεί να υπάρχει αναμονή που δεν την ελέγχεις.'],
      ['Κράτα το παλιό αντίγραφο και μετά την επιτυχή μετακίνηση.'],
    ]},
    { type: 'paragraph', text: [
      'Δύο πράγματα δεν τα ξαναεξηγώ εδώ επειδή τα καλύπτει άλλο κείμενο. Οι υπόλοιπες αποφάσεις που παίρνεις πριν στηθεί ένα κατάστημα — πληρωμές, μεταφορικά, παραλλαγές, τιμολόγηση — είναι το θέμα στο ',
      {text: 'κατασκευή e-shop: οι αποφάσεις πριν γραφτεί μία γραμμή κώδικα', href: '/el/blog/kataskevi-eshop-apofaseis'},
      '. Και το πώς το μοντέλο που διάλεξες μεταφράζεται σε ό,τι πληρώνεις κάθε χρόνο, το εξηγεί το ',
      {text: 'τι καθορίζει το κόστος μιας ιστοσελίδας', href: '/el/blog/poso-kostizei-mia-istoselida'},
      '.',
    ]},

    { type: 'heading', text: 'Τι θα ρωτούσα πριν πω ναι σε οποιαδήποτε πλατφόρμα' },
    { type: 'paragraph', text: [
      'Πέντε ερωτήσεις σε όποιον σου προτείνει τη λύση. Καμία δεν είναι τεχνική και όλες απαντιούνται με έναν σύνδεσμο προς τεκμηρίωση. Αν δεν απαντιούνται, αυτό είναι κι αυτό απάντηση.',
    ]},
    { type: 'list', items: [
      ['Δείξε μου τη σελίδα της τεκμηρίωσης που λέει τι περιέχει το αρχείο εξαγωγής.'],
      ['Οι φωτογραφίες είναι μέσα στο αρχείο ή απλώς διευθύνσεις προς αυτές;'],
      ['Τι ακριβώς συμβαίνει στην ιστοσελίδα την ημέρα που θα σταματήσω τη συνδρομή;'],
      ['Ποιος βάζει τις ενημερώσεις ασφαλείας, αυτόματα ή με άνθρωπο, και ποιον ειδοποιεί όταν κάτι αποτύχει;'],
      ['Το domain σε ποιον λογαριασμό είναι, και τι απαιτείται για να μεταφερθεί;'],
    ]},
    { type: 'paragraph', text: [
      'Καμία πλατφόρμα δεν είναι παγίδα επειδή έχει όρους. Παγίδα είναι να τους μάθεις την ημέρα που θέλεις να φύγεις — ενώ είναι δημόσια γραμμένοι από την πρώτη.',
    ]},

    { type: 'sources', heading: 'Πηγές', items: [
      {label: 'WordPress.org, Tools Export screen (τι περιέχει το αρχείο WXR) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WP_EXPORT},
      {label: 'WordPress.com Support, Export your content — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WPCOM_EXPORT},
      {label: 'WordPress Developer, Importing Content (εισαγωγή συνημμένων) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WP_IMPORT},
      {label: 'WordPress.org, License (GPLv2 ή νεότερη) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WP_LICENSE},
      {label: 'WordPress Developer, Detailed Plugin Guidelines (συμβατότητα με GPL) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WP_PLUGINS},
      {label: 'WordPress Developer, Migrating WordPress (αρχεία και βάση δεδομένων) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WP_MIGRATE},
      {label: 'WordPress Developer, Hardening WordPress (όρια ευθύνης παρόχου φιλοξενίας) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WP_HARDEN},
      {label: 'WordPress Developer, Updating WordPress (αυτόματες ενημερώσεις) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WP_UPGRADE},
      {label: 'WordPress.com Support, SFTP (σε ποια πλάνα υπάρχει) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WPCOM_SFTP},
      {label: 'WooCommerce, Product CSV Importer and Exporter — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WOO_CSV},
      {label: 'Shopify Help Center, Exporting products (εικόνες εκτός CSV) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SH_PRODUCTS},
      {label: 'Shopify Help Center, Exporting orders — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SH_ORDERS},
      {label: 'Shopify Help Center, Backups and duplication — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SH_DUPLICATE},
      {label: 'Shopify Help Center, Pausing your store — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SH_PAUSE},
      {label: 'Shopify Help Center, Deactivating and reactivating your store — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SH_DEACTIVATE},
      {label: 'Shopify Help Center, Transferring Shopify-managed domains — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SH_DOMAINS},
      {label: 'Shopify Help Center, Licensing and transferring themes — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SH_THEMES},
      {label: 'Shopify, Terms of Service (ιδιοκτησία του υλικού που ανεβάζεις) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SH_TERMS},
      {label: 'GitHub, Shopify/liquid (αποθετήριο ανοιχτού κώδικα, άδεια MIT) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SH_LIQUID},
      {label: 'Wix Help Center, Exporting or embedding your Wix site elsewhere — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WIX_EXPORT},
      {label: 'Wix Help Center, Canceling a Wix Premium or Studio plan — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WIX_CANCEL},
      {label: 'Wix Help Center, CMS: Exporting content from your collection — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WIX_CMS},
      {label: 'Squarespace Help Center, Exporting your site — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SQ_EXPORT},
      {label: 'Squarespace Help Center, Cancel your website subscription — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: SQ_CANCEL},
      {label: 'Webflow Help Center, How do I export my Webflow site code? — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: WF_EXPORT},
    ]},
  ],
};

export default post;
