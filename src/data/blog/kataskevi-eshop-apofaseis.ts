import type {BlogPost} from '@/types/blog';

const post: BlogPost = {
  id: 'kataskevi-eshop-apofaseis',
  slug: 'kataskevi-eshop-apofaseis',
  title: 'Κατασκευή eshop: οι αποφάσεις που παίρνεις πριν γραφτεί μία γραμμή κώδικα',
  metaTitle: 'Κατασκευή eshop: οι αποφάσεις πριν τον κώδικα',
  excerpt: 'Πέντε αποφάσεις κρίνουν αν θα μπορείς ποτέ να φύγεις: πλατφόρμα, πληρωμές, μεταφορικά και επιστροφές, δεδομένα πελατών, έξοδος.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 25,
  tags: ['E-shop', 'Ιστοσελίδες', 'Ανάθεση έργου'],
  body: [
    { type: 'paragraph', text: [
      'Οι συζητήσεις για ένα καινούργιο e-shop ξεκινούν σχεδόν πάντα από την εμφάνιση. Οι αποφάσεις όμως που θα σε δεσμεύσουν για χρόνια δεν βρίσκονται εκεί. Είναι ',
      {text: 'πέντε', strong: true},
      ', παίρνονται πριν γραφτεί μία γραμμή κώδικα, και καμία τους δεν αφορά το πώς φαίνεται το κατάστημα.',
    ]},
    { type: 'paragraph', text: [
      'Ποια πλατφόρμα θα το τρέχει και, πιο σημαντικό, τι ακριβώς βγαίνει από μέσα της. Ποιος πάροχος θα δέχεται τις πληρωμές. Πώς δουλεύουν τα μεταφορικά και οι επιστροφές, που δεν είναι δική σου πολιτική αλλά κανόνας γραμμένος αλλού. Ποιος κρατά τα δεδομένα των πελατών σου. Και τι γίνεται την ημέρα που θα θελήσεις να φύγεις.',
    ]},
    { type: 'paragraph', text: [
      'Το κείμενο είναι γραμμένο από εταιρεία λογισμικού που κάνει ενσωματώσεις, οπότε κοιτάζει το e-shop από την πλευρά των δεδομένων: τι μπορείς να βγάλεις, σε ποια μορφή, και τι μένει πίσω. Κάθε πρόταση για το πώς δουλεύει ένα ξένο σύστημα είναι παρμένη από την τεκμηρίωση του ίδιου του συστήματος, με τον σύνδεσμο δίπλα της.',
    ]},

    { type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε παράθεμα ελέγχθηκε εκείνη τη μέρα στη σελίδα που το συνοδεύει. Οι ευρωπαϊκές οδηγίες εδώ δεν εφαρμόζονται από μόνες τους· στην Ελλάδα ισχύουν μέσω της εθνικής νομοθεσίας. Το κείμενο περιγράφει τι λέει ο ευρωπαϊκός κανόνας και δεν είναι νομική συμβουλή.',
    ]},

    { type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Ποια είναι η πρώτη απόφαση που πρέπει να πάρω;', a: 'Τι βγαίνει από το σύστημα. Πριν συζητήσεις εμφάνιση, ζήτησε ένα πραγματικό αρχείο εξαγωγής και άνοιξέ το. Ό,τι δεν είναι μέσα σε αυτό δεν είναι πρακτικά δικό σου, όσο κι αν σου ανήκει.'},
      {q: 'Αν αλλάξω πλατφόρμα, παίρνω μαζί μου όλα τα δεδομένα;', a: 'Όχι όλα, και το γράφουν οι ίδιες οι πλατφόρμες. Το Shopify αναφέρει ότι οι εικόνες των προϊόντων δεν μπαίνουν στο CSV, ότι τα πεδία SEO βγαίνουν κενά αν δεν τα επεξεργάστηκες χειροκίνητα, ότι οι κωδικοί πελατών δεν μεταφέρονται με CSV και ότι οι αξιολογήσεις δεν μεταφέρονται από το WooCommerce.'},
      {q: 'Ποιος είναι υπεύθυνος για τα δεδομένα των πελατών, εγώ ή η πλατφόρμα;', a: 'Εσύ. Ο GDPR ονομάζει υπεύθυνο επεξεργασίας όποιον καθορίζει τους σκοπούς και τον τρόπο της επεξεργασίας, δηλαδή το κατάστημα. Η πλατφόρμα που το τρέχει για λογαριασμό σου είναι εκτελών. Η διάκριση αλλάζει ποιος απαντά όταν κάτι πάει στραβά.'},
      {q: 'Τι πρέπει να λέει η σύμβαση με την πλατφόρμα;', a: 'Ο GDPR σου δίνει ήδη ρήτρα εξόδου: με το τέλος της υπηρεσίας ο εκτελών διαγράφει ή επιστρέφει όλα τα προσωπικά δεδομένα, κατ’ επιλογή δική σου. Δεν ορίζει όμως τη μορφή, και αυτή είναι η ερώτηση που κάνεις πριν υπογράψεις.'},
      {q: 'Πόσο χρόνο έχει ο πελάτης για να επιστρέψει ένα προϊόν;', a: 'Ο ευρωπαϊκός κανόνας για τις εξ αποστάσεως συμβάσεις δίνει προθεσμία 14 ημερών για υπαναχώρηση χωρίς αιτιολογία. Αν δεν έχεις ενημερώσει τον πελάτη για αυτό το δικαίωμα, η προθεσμία δεν κλείνει εκεί: λήγει 12 μήνες μετά το τέλος της αρχικής.'},
      {q: 'Αν χρησιμοποιώ έτοιμο πάροχο πληρωμών, τελείωσα με την ασφάλεια;', a: 'Όχι. Η τεκμηρίωση του WooCommerce γράφει ότι η συμμόρφωση με το PCI DSS είναι τελικά ευθύνη του ιδιοκτήτη του καταστήματος, και ότι ισχύει ακόμη κι όταν η πληρωμή ολοκληρώνεται αλλού, επειδή τη σελίδα της παραγγελίας την εμφανίζει η δική σου ιστοσελίδα. Μικραίνει το εύρος, όχι η ευθύνη.'},
    ]},

    { type: 'heading', text: 'Απόφαση 1: τι βγαίνει από το σύστημα, όχι τι μπαίνει' },
    { type: 'paragraph', text: [
      'Κάθε πλατφόρμα δείχνει στην επίδειξη τι μπορείς να βάλεις μέσα, καμία δεν ξεκινά από το τι βγάζει. Κι όμως η δεύτερη ερώτηση είναι η μόνη που θα σε ενδιαφέρει σε τρία χρόνια, και δεν χρειάζεται να την εμπιστευτείς σε κανέναν: ζητάς ένα ',
      {text: 'πραγματικό αρχείο εξαγωγής', strong: true},
      ', το ανοίγεις σε ένα λογιστικό φύλλο και ψάχνεις τι λείπει. Οι απαντήσεις είναι ήδη γραμμένες στην τεκμηρίωση.',
    ]},

    { type: 'subheading', text: 'Τι λέει το Shopify για το ίδιο του το αρχείο' },
    { type: 'paragraph', text: [
      'Πρώτα η μορφή: το Shopify γράφει ότι ',
      {text: 'το CSV με κωδικοποίηση UTF-8 είναι η μόνη μορφή', href: 'https://help.shopify.com/en/manual/customers/import-export-customers'},
      ': «A CSV file with UTF-8 encoding is the only file format that can be used to import to or export from Shopify.» Στην ίδια σελίδα, κάτι που δεν μεταφέρεται με τίποτα: «You can\'t migrate customer passwords from another online store using a CSV». Σε κάθε μετακόμιση οι πελάτες σου θα κληθούν να φτιάξουν νέο κωδικό, και ένα μέρος τους δεν θα το κάνει.',
    ]},
    { type: 'paragraph', text: [
      'Μετά το περιεχόμενο. Για τα προϊόντα, το Shopify λέει ότι ',
      {text: 'οι εικόνες δεν μπαίνουν μέσα', href: 'https://help.shopify.com/en/manual/products/import-export/export-products'},
      ": «When you export your products, the images associated with each product aren't included in the CSV file.» Και για τα πεδία SEO, στην ίδια σελίδα: «The SEO Title and SEO Description fields in exported CSV files are only populated when you've manually customized them in your products.» Αν τα άφησες στις προεπιλογές, στην εξαγωγή βγαίνουν κενά.",
    ]},
    { type: 'paragraph', text: [
      'Στις παραγγελίες: ',
      {text: 'το ιστορικό συναλλαγών περιέχει μόνο εισπραγμένες πληρωμές', href: 'https://help.shopify.com/en/manual/fulfillment/managing-orders/exporting-orders'},
      ". «The transaction history that's included in your CSV file contains only captured payments data. Authorization data isn't included in your exported transaction history.» Και στον οδηγό μετάβασης από το WooCommerce το ίδιο το Shopify γράφει: «You can't export or migrate reviews from WooCommerce to Shopify.» Δηλαδή ",
      {text: 'οι αξιολογήσεις μένουν πίσω', href: 'https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce'},
      '. Αν έχεις χτίσει χρόνια κριτικών, αυτό είναι το ακριβότερο πράγμα στη λίστα και δεν φαίνεται πουθενά στην προσφορά.',
    ]},

    { type: 'subheading', text: 'Τι λέει το WooCommerce και τι το WordPress από κάτω του' },
    { type: 'paragraph', text: [
      'Το WooCommerce έχει εργαλείο εξαγωγής μέσα στον πυρήνα και το περιγράφει ρητά ως εργαλείο μετακόμισης: ',
      {text: '«WooCommerce includes a built-in CSV tool for importing, exporting, and bulk-updating products.»', href: 'https://woocommerce.com/document/product-csv-importer-exporter/'},
      ' Στην ίδια σελίδα: «Use it to add many products at once, move product data between stores, or update existing product details.» Χάνεται όμως τι δεν καλύπτει ο πυρήνας: για ',
      {text: 'πελάτες, παραγγελίες ή κουπόνια σε CSV ή XML', href: 'https://woocommerce.com/document/ordercustomer-csv-export/'},
      ', η τεκμηρίωση σε στέλνει σε ξεχωριστή, εμπορική επέκταση. Τον κατάλογο τον παίρνεις· την πελατεία και το ιστορικό τα παίρνεις με κάτι που αποκτάς χωριστά.',
    ]},
    { type: 'paragraph', text: [
      'Κάτω από το WooCommerce κάθεται το WordPress, που έχει δικό του εργαλείο για τα προσωπικά δεδομένα, με μια προειδοποίηση που αξίζει να διαβαστεί δύο φορές: ',
      {text: '«Note: As this tool ONLY gathers data from WordPress and participating plugins, you may need to go beyond to comply with export requests.»', href: 'https://wordpress.org/documentation/article/tools-export-personal-data-screen/'},
      ' Με απλά λόγια, το εργαλείο ξέρει μόνο όσα πρόσθετα συνεργάζονται μαζί του. Κάθε πρόσθετο που δεν συνεργάζεται είναι ένα κομμάτι της βάσης σου που κανείς δεν σου υπόσχεται ότι θα βγει.',
    ]},

    { type: 'subheading', text: 'Οι υπόλοιπες τρεις, στα ίδια τους τα λόγια' },
    { type: 'paragraph', text: [
      'Στο PrestaShop, το επίσημο module GDPR ',
      {text: 'δίνει στον πελάτη αντίγραφο των δικών του δεδομένων σε PDF ή CSV', href: 'https://docs.prestashop-project.org/v.8-documentation/user-guide/gdpr'},
      ', ενώ η λίστα πελατών ',
      {text: 'εξάγεται με ένα κουμπί Export', href: 'https://docs.prestashop-project.org/v.8-documentation/user-guide/selling/managing-customers/your-customers'},
      '. Το πρώτο απαντά σε αίτημα ενός ανθρώπου, το δεύτερο είναι η μετακόμισή σου· μην τα μετράς για ένα. Στο Adobe Commerce, η τεκμηρίωση ',
      {text: 'στηρίζει όλη τη μεταφορά δεδομένων στο CSV', href: 'https://experienceleague.adobe.com/en/docs/commerce-admin/systems/data-transfer/data-csv'},
      ' και σημειώνει ότι κάθε επικεφαλίδα στήλης αντιστοιχεί στον κωδικό χαρακτηριστικού του πεδίου. Το αρχείο δεν στέκει μόνο του χωρίς τον κατάλογο χαρακτηριστικών.',
    ]},
    { type: 'paragraph', text: [
      'Στο OpenCart, το μόνο τεκμηριωμένο εργαλείο δεδομένων είναι το Backup & Restore: αντίγραφα της βάσης σε αρχεία .sql. Δεν λέμε ότι δεν υπάρχει άλλος τρόπος· λέμε τι δηλώνει το ίδιο. Και δηλώνει επίσης: ',
      {text: '«Restoring a backup will completely overwrite your current database.»', href: 'https://docs.opencart.com/admin-interface/system/maintenance'},
      ' Ένα αντίγραφο βάσης είναι άριστο για επαναφορά και άβολο για μετακόμιση: το διαβάζει το ίδιο σύστημα, όχι το επόμενο.',
    ]},

    { type: 'table', caption: 'Τι δηλώνει η τεκμηρίωση κάθε πλατφόρμας ότι βγαίνει, και τι όχι. Έλεγχος: 2 Σεπτεμβρίου 2026.', head: ['Πλατφόρμα', 'Τι δηλώνει ότι βγαίνει', 'Τι δεν βγαίνει, ή θέλει κάτι παραπάνω'], rows: [
      [['Shopify'], ['Προϊόντα, παραγγελίες, πελάτες σε CSV· UTF-8 ως μόνη αποδεκτή μορφή'], ['Εικόνες· πεδία SEO που δεν επεξεργάστηκες· κωδικοί πελατών· αξιολογήσεις από WooCommerce· δεδομένα έγκρισης συναλλαγών']],
      [['WooCommerce'], ['Προϊόντα, με εργαλείο CSV φτιαγμένο και για μεταφορά μεταξύ καταστημάτων'], ['Πελάτες, παραγγελίες και κουπόνια μέσω εμπορικής επέκτασης, όχι από τον πυρήνα']],
      [['WordPress (από κάτω)'], ['Εργαλείο εξαγωγής προσωπικών δεδομένων μέσα στο σύστημα'], ['Μαζεύει μόνο από το WordPress και τα πρόσθετα που συμμετέχουν']],
      [['PrestaShop'], ['Λίστα πελατών με κουμπί Export· αντίγραφο προς τον πελάτη σε PDF ή CSV'], ['Τα δύο είναι διαφορετικά: αίτημα πελάτη έναντι δικής σου εξαγωγής']],
      [['Adobe Commerce'], ['CSV ως βάση όλων των λειτουργιών μεταφοράς δεδομένων'], ['Κάθε στήλη είναι κωδικός χαρακτηριστικού· χωρίς τον κατάλογο δεν στέκει']],
      [['OpenCart'], ['Backup & Restore: αντίγραφα βάσης σε αρχεία .sql'], ['Αντίγραφο βάσης, όχι φορητό CSV· η επαναφορά επικαλύπτει την τρέχουσα βάση']],
    ]},

    { type: 'heading', text: 'Απόφαση 2: ο πάροχος πληρωμών, και τι κρατάει εκείνος' },
    { type: 'paragraph', text: [
      'Ξεκίνα από το πού ολοκληρώνεται η αγορά. Το Shopify χωρίζει τους τρίτους παρόχους στα δύο: ',
      {text: "«If you're using an external provider, then your customers must complete their purchases on a checkout page that's hosted outside of your online store.»", href: 'https://help.shopify.com/en/manual/payments/third-party-providers'},
      ' Με άμεσο πάροχο ο πελάτης μένει μέσα στο κατάστημα· με εξωτερικό, φεύγει αλλού και ξαναγυρίζει. Μία πρόταση που αλλάζει το πώς μοιάζει η αγορά, τι μετράς και τι παραμετροποιείς.',
    ]},
    { type: 'paragraph', text: [
      'Μετά, το πού βρίσκεσαι. Το Shopify Payments δεν είναι το ίδιο προϊόν σε κάθε χώρα· για την Ελλάδα η τεκμηρίωση λέει: ',
      {text: "«Shopify Payments is only available for online selling in Greece. You can't use Shopify Payments for in-person (POS) payment processing.»", href: 'https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/greece/accepting-payments'},
      ' Αν ο σχεδιασμός σου ήταν «ένα σύστημα για το ηλεκτρονικό και για το φυσικό κατάστημα», αυτή η γραμμή τον ακυρώνει. Η σελίδα απαιτήσεων για την Ελλάδα ',
      {text: 'ζητά επίσης αριθμό Γ.Ε.ΜΗ. και ΑΦΜ για τις εταιρείες', href: 'https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/greece/requirements'},
      '. Χρειάζονται για να ανοίξει ο λογαριασμός στον πάροχο. Δεν πρόκειται για φορολογικό θέμα.',
    ]},
    { type: 'paragraph', text: [
      'Το τρίτο κομμάτι δεν το ελέγχει ούτε η πλατφόρμα ούτε εσύ. Ο κατ’ εξουσιοδότηση κανονισμός για την ισχυρή ταυτοποίηση πελάτη ',
      {text: 'ζητά δύο ή περισσότερα στοιχεία', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32018R0389'},
      ' από τις κατηγορίες γνώση, κατοχή και εγγενές χαρακτηριστικό: «the authentication shall be based on two or more elements which are categorised as knowledge, possession and inherence and shall result in the generation of an authentication code.» Γι’ αυτό υπάρχει το επιπλέον βήμα με το κινητό στο τέλος της αγοράς: δεν είναι επιλογή σχεδιασμού και δεν απλοποιείται.',
    ]},
    { type: 'paragraph', text: [
      'Η πιο συχνή παρανόηση είναι ότι, με μεγάλο πάροχο, τελείωσες με την ασφάλεια. Η τεκμηρίωση του WooCommerce το λέει ωμά: ',
      {text: '«PCI DSS compliance is ultimately the responsibility of the store owner.»', href: 'https://woocommerce.com/document/pci-dss-compliance-and-woocommerce/'},
      ' Και προσθέτει ότι ακόμη κι όταν η πληρωμή γίνεται εκτός της ιστοσελίδας σου, το PCI DSS εξακολουθεί να ισχύει επειδή τη σελίδα ολοκλήρωσης της παραγγελίας την εμφανίζει η δική σου ιστοσελίδα. Απλώς μικραίνει το εύρος. Το ίδιο ισχύει για όλο το σύστημα γύρω από την πληρωμή: ',
      {text: '«Because WooCommerce is built on WordPress, a given WooCommerce site is overall exactly as secure as the WordPress installation itself.»', href: 'https://woocommerce.com/document/woocommerce-security-faq/'},
      ' Και στην ίδια σελίδα: «Any security matter that pertains to WordPress, including choosing a secure website host and hosting package, will also pertain to WooCommerce.» Η επιλογή φιλοξενίας δεν είναι απόφαση κόστους ή ταχύτητας· είναι απόφαση ασφάλειας, και παίρνεται πριν την κατασκευή.',
    ]},

    { type: 'subheading', text: 'Τι σου δίνει πίσω ο πάροχος αν φύγεις' },
    { type: 'paragraph', text: [
      'Είναι σπάνιο να το γράφει κανείς, οπότε αξίζει να το διαβάσεις. Το Stripe δηλώνει: ',
      {text: '«We believe our customers own the sensitive data they entrust to Stripe. We make sure that you have access to this data—even if you’re moving elsewhere.»', href: 'https://docs.stripe.com/get-started/data-migrations/pan-export?locale=en-US'},
      ' Και υπόσχεται να συνεργαστεί με την ομάδα του νέου σου παρόχου για ασφαλή μεταφορά των δεδομένων καρτών. Καθαρή δέσμευση, με έναν όρο από κάτω: «To meet PCI compliance obligations, we can only transfer your card data to another PCI DSS Level 1-compliant payment processor.» Η έξοδός σου εξαρτάται από το ποιος σε περιμένει απέναντι.',
    ]},
    { type: 'paragraph', text: [
      'Και ένα δεύτερο όριο: «Stripe doesn’t export your account’s payment history, subscriptions, or other objects. Instead, use the API or Dashboard to retrieve this information.» Τα δεδομένα καρτών μεταφέρονται· το ιστορικό και οι συνδρομές τα βγάζεις μόνος σου. Στην ίδια σελίδα σημειώνεται επίσης ότι τα διαπιστευτήρια που αποθηκεύτηκαν μέσω Link εξαιρούνται από τις εξαγωγές. Καθένα από αυτά είναι δουλειά, και είναι καλύτερα να ξέρεις ποιος τη χρωστά πριν την ανάγκη.',
    ]},

    { type: 'heading', text: 'Απόφαση 3: μεταφορικά και επιστροφές, κανόνες που δεν τους γράφεις εσύ' },
    { type: 'paragraph', text: [
      'Οι περισσότεροι σχεδιάζουν την πολιτική επιστροφών σαν εμπορική απόφαση. Μεγάλο μέρος της δεν είναι: είναι κανόνας που ισχύει ούτως ή άλλως και το λογισμικό πρέπει να τον υποστηρίζει. Αν το ανακαλύψεις μετά, το κόστος είναι η αλλαγή στο σύστημα.',
    ]},
    { type: 'paragraph', text: [
      'Ο ευρωπαϊκός κανόνας για τις εξ αποστάσεως συμβάσεις δίνει στον καταναλωτή ',
      {text: 'προθεσμία 14 ημερών για να υπαναχωρήσει', href: 'https://eur-lex.europa.eu/legal-content/EL/TXT/HTML/?uri=CELEX:32011L0083'},
      ': «ο καταναλωτής διαθέτει προθεσμία 14 ημερών για να υπαναχωρήσει από την εξ αποστάσεως σύμβαση ή τη σύμβαση εκτός εμπορικού καταστήματος χωρίς να αναφέρει τους λόγους». Και το κομμάτι που ξεχνιέται: «Εάν ο έμπορος δεν έχει παράσχει στον καταναλωτή τις πληροφορίες σχετικά με το δικαίωμα υπαναχώρησης όπως απαιτείται από το άρθρο 6 παράγραφος 1 στοιχείο η), η προθεσμία υπαναχώρησης λήγει 12 μήνες μετά το τέλος της αρχικής προθεσμίας υπαναχώρησης». Η ενημέρωση δεν είναι διακοσμητική· είναι αυτή που κλείνει το παράθυρο.',
    ]},
    { type: 'paragraph', text: [
      'Το ίδιο κείμενο ζητά να δίνεις «τις προϋποθέσεις, την προθεσμία και τις διαδικασίες άσκησης του δικαιώματος σύμφωνα με το άρθρο 11 παράγραφος 1, καθώς και το υπόδειγμα του εντύπου υπαναχώρησης που παρατίθεται στο παράρτημα I τμήμα Β». Δεν αρκεί μια σελίδα «Επιστροφές». Στα χρήματα οι προθεσμίες είναι συμμετρικές: ο έμπορος «επιστρέφει κάθε πληρωμή που έλαβε από τον καταναλωτή, συμπεριλαμβανομένων, κατά περίπτωση, των δαπανών παράδοσης, χωρίς αδικαιολόγητη καθυστέρηση και οπωσδήποτε εντός 14 ημερών», και ο καταναλωτής επιστρέφει τα αγαθά επίσης εντός 14 ημερών. Ένα σύστημα που ξέρει μόνο ολικές ακυρώσεις θα σε δυσκολέψει.',
    ]},
    { type: 'paragraph', text: [
      'Ποιος πληρώνει την επιστροφή εξαρτάται από κάτι που κάνεις πριν την πώληση: οφείλεις να πεις «κατά περίπτωση, ότι ο καταναλωτής θα επιβαρυνθεί με τη δαπάνη επιστροφής των αγαθών σε περίπτωση υπαναχώρησης». Αν δεν το έχεις πει, δεν το επιβάλλεις μετά. Και αν δεν συμφωνήθηκε αλλιώς, παραδίδεις «χωρίς αδικαιολόγητη καθυστέρηση, αλλά οπωσδήποτε εντός 30 ημερών από τη σύναψη της σύμβασης». Άρα το σύστημα πρέπει να ξέρει πότε συνήφθη η κάθε σύμβαση.',
    ]},
    { type: 'paragraph', text: [
      'Χωριστά τρέχει η νόμιμη εγγύηση, που δεν είναι εμπορική παροχή. Ο ευρωπαϊκός κανόνας για τις συμβάσεις πώλησης αγαθών ορίζει, στο αγγλικό του κείμενο, ότι ',
      {text: '«The seller shall be liable to the consumer for any lack of conformity which exists at the time when the goods were delivered and which becomes apparent within two years of that time.»', href: 'https://eur-lex.europa.eu/eli/dir/2019/771/oj/eng'},
      ' Και μετακινεί το βάρος απόδειξης προς εσένα: έλλειψη που εμφανίζεται μέσα σε έναν χρόνο από την παράδοση τεκμαίρεται ότι υπήρχε ήδη τότε, εκτός αν αποδειχθεί το αντίθετο. Πρακτική συνέπεια: το ιστορικό της παραγγελίας πρέπει να ζει περισσότερο από τη συνδρομή σου σε οποιοδήποτε εργαλείο.',
    ]},
    { type: 'paragraph', text: [
      'Ακόμη και το κουμπί έχει κανόνα: ο διακόπτης πρέπει «να φέρουν ευανάγνωστη σήμανση που να αναγράφει τις λέξεις «παραγγελία με υποχρέωση πληρωμής»» ή ανάλογη διατύπωση. Αν δεν μπορείς να αλλάξεις το κείμενο του κουμπιού στο checkout, δεν έχεις θέμα γούστου· έχεις θέμα δυνατότητας. Και κάτι που έχει ήδη αλλάξει: η Ευρωπαϊκή Επιτροπή γράφει ότι ',
      {text: '«The European Online Dispute Resolution (ODR) Platform is discontinued as of 20 July 2025»', href: 'https://consumer-redress.ec.europa.eu/site-relocation_el'},
      '. Αν το πρότυπο που σου δίνουν βάζει ακόμα τον παλιό σύνδεσμο ΗΕΔ στο υποσέλιδο, δεν οδηγεί πουθενά. Είναι φθηνό τεστ για το πόσο πρόσφατα ενημερώθηκε ό,τι σου πουλάνε.',
    ]},
    { type: 'paragraph', text: [
      'Τα μεταφορικά, τέλος, μοιάζουν με τιμοκατάλογο και είναι λογική. Το WooCommerce το λέει σε τέσσερις λέξεις: ',
      {text: '«Each customer matches only one shipping zone»', href: 'https://woocommerce.com/document/setting-up-shipping-zones/'},
      '. Και μάλιστα η ζώνη είναι η πρώτη που ταιριάζει. Η συνέπεια, στην ίδια σελίδα: «If a customer enters a shipping address that is in a zone without shipping methods, they will be informed that no shipping is available.» Μια ζώνη χωρίς μέθοδο δεν βγάζει σφάλμα σε εσένα· βγάζει «δεν υπάρχει διαθέσιμη αποστολή» στον πελάτη, και η παραγγελία χάνεται σιωπηλά. Νησιά, δυσπρόσιτες περιοχές, αντικαταβολή που ισχύει σε κάποιες μεθόδους: γράψε τα πριν την κατασκευή και ζήτησε να σου δείξουν πώς μπαίνουν.',
    ]},

    { type: 'heading', text: 'Απόφαση 4: ποιος κρατά τα δεδομένα των πελατών σου' },
    { type: 'paragraph', text: [
      'Αυτή είναι η απόφαση που σχεδόν ποτέ δεν συζητιέται πριν την κατασκευή, και η μόνη με νομικό όνομα. Ο GDPR ορίζει τον ',
      {text: 'υπεύθυνο επεξεργασίας', href: 'https://gdpr-info.eu/art-4-gdpr/'},
      " ως εκείνον που καθορίζει τους σκοπούς και τον τρόπο: «'controller' means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data». Ο εκτελών επεξεργάζεται για λογαριασμό του. Μεταφρασμένο: υπεύθυνος είσαι εσύ· η πλατφόρμα, η φιλοξενία, το εργαλείο newsletter, η εταιρεία μεταφορών και κάθε πρόσθετο είναι εκτελούντες.",
    ]},
    { type: 'paragraph', text: [
      'Γι’ αυτό ο κανονισμός κάνει την επιλογή προμηθευτή νομική απόφαση: το ',
      {text: 'άρθρο 28', href: 'https://gdpr-info.eu/art-28-gdpr/'},
      ' ορίζει ότι επιλέγεις μόνο εκτελούντες που παρέχουν επαρκείς διαβεβαιώσεις για κατάλληλα τεχνικά και οργανωτικά μέτρα. Δηλαδή «το διάλεξα γιατί ήταν το πιο βολικό» δεν είναι πλήρης απάντηση, και η ώρα να το σκεφτείς είναι πριν.',
    ]},
    { type: 'paragraph', text: [
      'Το ίδιο άρθρο σου δίνει και μια ρήτρα εξόδου που την έχεις ήδη από τον νόμο: ο εκτελών, «at the choice of the controller, deletes or returns all the personal data to the controller after the end of the provision of services relating to processing, and deletes existing copies unless Union or Member State law requires storage of the personal data». Διάβασέ την προσεκτικά: λέει ',
      {text: 'αν', strong: true},
      ' θα σου τα επιστρέψει, όχι σε ποια μορφή ούτε πόσο εύκολα τα διαβάζει το επόμενο σύστημα. Εκεί κρύβεται η διαφορά ανάμεσα σε μια εξαγωγή που σε βγάζει ασπροπρόσωπο και σε ένα αρχείο που δεν κάνει τίποτα.',
    ]},
    { type: 'paragraph', text: [
      'Ο πελάτης σου έχει επίσης δικαίωμα φορητότητας: το άρθρο 20 λέει ότι δικαιούται τα δεδομένα του ',
      {text: '«in a structured, commonly used and machine-readable format»', href: 'https://gdpr-info.eu/art-20-gdpr/'},
      '. Έχει όμως και μια φράση που αξίζει να θυμάσαι κάθε φορά που κάποιος υπόσχεται εύκολη μετακόμιση: η απευθείας διαβίβαση από τον έναν πάροχο στον άλλον προβλέπεται «where technically feasible». Η φορητότητα είναι δικαίωμα, όχι εγγύηση ότι η μετακίνηση γίνεται με ένα κουμπί.',
    ]},
    { type: 'paragraph', text: [
      'Δύο ακόμη άρθρα μεταφράζονται κατευθείαν σε απαιτήσεις λογισμικού. Το άρθρο 32 ζητά ρητά ',
      {text: '«the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident»', href: 'https://gdpr-info.eu/art-32-gdpr/'},
      '. Το «ποιος κρατά αντίγραφο και ποιος το έχει δοκιμάσει» δεν είναι καλή πρακτική, είναι απαίτηση. Και το άρθρο 33 ζητά, σε παραβίαση, ενημέρωση της αρχής ',
      {text: '«without undue delay and, where feasible, not later than 72 hours after having become aware of it»', href: 'https://gdpr-info.eu/art-33-gdpr/'},
      '. Για να το προλάβεις, πρέπει να ξέρεις ποιος σε ειδοποιεί και πόσο γρήγορα.',
    ]},
    { type: 'paragraph', text: [
      'Μια ερώτηση που σχεδόν κανείς δεν κάνει: πού βρίσκονται φυσικά τα δεδομένα. Ο GDPR ορίζει ότι κάθε διαβίβαση σε τρίτη χώρα γίνεται μόνο υπό τους όρους του σχετικού κεφαλαίου, ',
      {text: 'και το ίδιο ισχύει για τις περαιτέρω διαβιβάσεις', href: 'https://gdpr-info.eu/art-44-gdpr/'},
      '. Δεν χρειάζεται να γίνεις ειδικός· χρειάζεται να ρωτήσεις πού φιλοξενείται το κατάστημα και τα αντίγραφά του, γραπτά, πριν ξεκινήσει η δουλειά.',
    ]},
    { type: 'paragraph', text: [
      'Τέλος, δύο πράγματα που μπαίνουν στη σελίδα από την πρώτη μέρα. Κάθε εφαρμογή που εγκαθιστάς είναι άλλος ένας εκτελών· το Shopify απαιτεί από κάθε εφαρμογή του App Store να είναι ',
      {text: 'εγγεγραμμένη στα υποχρεωτικά webhooks συμμόρφωσης', href: 'https://shopify.dev/docs/apps/build/compliance/privacy-law-compliance'},
      ', αλλιώς την απορρίπτει. Δέκα εγκατεστημένες εφαρμογές σημαίνουν δέκα σημεία όπου βρίσκονται δεδομένα πελατών. Και για τα cookies, η Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα γράφει ότι ',
      {text: '«Η εγκατάσταση των cookies αλλά και η χρήση συναφών τεχνολογιών επιτρέπεται μόνο με τη συγκατάθεση του χρήστη»', href: 'https://www.dpa.gr/el/enimerwtiko/thematikes_enotites/electronikesepikoinwnies/cookies/cookies_diadiktuo_cookies'},
      '. Αυτό αλλάζει τι φορτώνει η σελίδα πριν τη συγκατάθεση. Πολύ φθηνότερο να γίνει στην κατασκευή παρά να ξηλωθεί μετά.',
    ]},

    { type: 'cta', heading: 'Αν θέλεις κάποιον να κάνει αυτές τις ερωτήσεις μαζί σου', text: 'Κοιτάμε τι σου προτείνουν, τι βγαίνει από το σύστημα και τι υπογράφεις. Γραπτά, και χωρίς να σου πουλήσουμε πλατφόρμα.', label: 'Δες τι περιλαμβάνει', href: '/el/offers/website-seo' },

    { type: 'heading', text: 'Απόφαση 5: τι γίνεται την ημέρα που θέλεις να φύγεις' },
    { type: 'paragraph', text: [
      'Καμία από τις τέσσερις προηγούμενες αποφάσεις δεν είναι μόνιμη· η πέμπτη καθορίζει πόσο θα κοστίσει να τις αλλάξεις. Το Shopify είναι σαφές για το τι γίνεται όταν κλείνεις: ',
      {text: "«Your store's information is guaranteed for 2 years, in case you decide to re-open your store.»", href: 'https://help.shopify.com/en/manual/your-account/pause-deactivate-store'},
      " Στην ίδια σελίδα, για το επόμενο βήμα: «After your store data is deleted, your store can't be reactivated.» Δύο προτάσεις, δύο εντελώς διαφορετικές καταστάσεις. Και είναι σημαντικό να ξέρεις σε ποια βρίσκεσαι πριν πατήσεις οτιδήποτε.",
    ]},
    { type: 'paragraph', text: [
      'Υπάρχει και ένα χρονικό παράθυρο. Για domain που το διαχειρίζεται το Shopify: ',
      {text: '«For your domain to be eligible for transfer, you need to wait 60 days after performing the following tasks: purchasing the domain, transferring the domain to Shopify, changing your contact information.»', href: 'https://help.shopify.com/en/manual/domains/managing-domain-ownership/transferring-shopify-domains'},
      ' Πρόσεξε το τρίτο: ακόμη και μια αλλαγή στοιχείων επικοινωνίας ξαναμετράει τον χρόνο. Αν σχεδιάζεις μετακόμιση, είναι σημείο στο ημερολόγιο, όχι λεπτομέρεια της τελευταίας εβδομάδας.',
    ]},
    { type: 'paragraph', text: [
      'Και οι παραμετροποιήσεις σου λήγουν στο ημερολόγιο κάποιου άλλου: το Shopify ανακοίνωσε ότι ',
      {text: 'το αντικείμενο checkout αποσύρεται για τις σελίδες Information, Shipping και Payment στις 13 Αυγούστου 2024', href: 'https://shopify.dev/docs/api/liquid/objects/checkout'},
      ', και ότι όσοι είχαν παραμετροποιήσει αυτές τις σελίδες με checkout.liquid έπρεπε να περάσουν στο Checkout Extensibility πριν από τότε. Δεν είναι κατηγορία. Οι πλατφόρμες προχωρούν. Είναι υπενθύμιση ότι κάθε ειδική παραμετροποίηση είναι μελλοντική εργασία με ημερομηνία που δεν την ορίζεις εσύ.',
    ]},
    { type: 'paragraph', text: [
      'Από την άλλη πλευρά του φάσματος, η σελίδα του WooCommerce στο WordPress.org υπόσχεται το αντίθετο: ',
      {text: "«WooCommerce store data is future-proof; you're free to export all your content and take your site to any platform you choose. No restrictions.»", href: 'https://wordpress.org/plugins/woocommerce/'},
      ' Είναι πραγματικό πλεονέκτημα· αξίζει όμως να διαβαστεί δίπλα στα δύο που είδαμε πιο πάνω: ότι η εξαγωγή πελατών και παραγγελιών περνά από ξεχωριστή επέκταση, και ότι το εργαλείο προσωπικών δεδομένων μαζεύει μόνο από τα πρόσθετα που συμμετέχουν. Καμία διατύπωση δεν είναι ψέμα· μιλάνε για διαφορετικά πράγματα.',
    ]},

    { type: 'heading', text: 'Το τεστ που κάνεις πριν αποφασίσεις' },
    { type: 'paragraph', text: [
      'Όλα τα παραπάνω γίνονται ένας έλεγχος, με ένα δοκιμαστικό κατάστημα και ένα λογιστικό φύλλο. Δεν χρειάζεσαι τεχνικές γνώσεις. Αρκεί να ανοίξεις τα αρχεία και να δεις τι λείπει.',
    ]},
    { type: 'list', ordered: true, items: [
      ['Ζήτησε εξαγωγή προϊόντων, πελατών και παραγγελιών από δοκιμαστικό κατάστημα, και άνοιξέ τες.'],
      ['Ψάξε: υπάρχουν οι εικόνες; Είναι γεμάτα τα πεδία SEO; Είναι ολόκληρο το ιστορικό συναλλαγών;'],
      ['Ρώτησε τι δεν μεταφέρεται με τίποτα: οι κωδικοί πελατών και οι αξιολογήσεις είναι δύο τεκμηριωμένα παραδείγματα.'],
      ['Ζήτησε γραπτά ποιος υπογράφει τη ρήτρα διαγραφής ή επιστροφής δεδομένων, και σε ποια μορφή.'],
      ['Ρώτησε πού φιλοξενούνται τα δεδομένα και ποιος σε ειδοποιεί αν συμβεί περιστατικό.'],
      ['Πέρασε από το checkout σαν πελάτης: κείμενο κουμπιού, πληροφορίες υπαναχώρησης, βήμα ταυτοποίησης. Ό,τι δεν αλλάζει τώρα, δεν θα αλλάξει ούτε αργότερα.'],
      ['Βάλε μια διεύθυνση από κάθε περιοχή που εξυπηρετείς και δες αν εμφανίζεται μέθοδος αποστολής.'],
    ]},
    { type: 'paragraph', text: [
      'Αν απαντηθούν πριν την κατασκευή, το e-shop σου μπορεί κάλλιστα να αποδειχθεί λάθος επιλογή σε τρία χρόνια, αλλά θα είναι ',
      {text: 'δική σου', strong: true},
      ' επιλογή, και θα ξέρεις τι κοστίζει να την αλλάξεις.',
    ]},
    { type: 'paragraph', text: [
      'Δύο θέματα αγγίζουν αυτό το κείμενο και δεν χωράνε μέσα του. Τα φορολογικά και τα παραστατικά τα βλέπουμε στο ',
      {text: 'myDATA και ηλεκτρονική τιμολόγηση', href: '/el/blog/mydata-ilektroniki-timologisi-logismiko'},
      '. Και η σύγκριση των πλατφορμών, δηλαδή τι σε κλειδώνει και τι σε ελευθερώνει, είναι το θέμα του ',
      {text: 'WordPress, Shopify ή κάτι δικό σου', href: '/el/blog/wordpress-shopify-i-diko-sou'},
      '.',
    ]},

    { type: 'sources', heading: 'Πηγές', items: [
      {label: 'Κανονισμός (ΕΕ) 2016/679 (GDPR), άρθρο 4: ορισμοί υπεύθυνου επεξεργασίας και εκτελούντος (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://gdpr-info.eu/art-4-gdpr/'},
      {label: 'Κανονισμός (ΕΕ) 2016/679 (GDPR), άρθρο 20: δικαίωμα στη φορητότητα των δεδομένων (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://gdpr-info.eu/art-20-gdpr/'},
      {label: 'Κανονισμός (ΕΕ) 2016/679 (GDPR), άρθρο 28: εκτελών την επεξεργασία (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://gdpr-info.eu/art-28-gdpr/'},
      {label: 'Κανονισμός (ΕΕ) 2016/679 (GDPR), άρθρο 32: ασφάλεια της επεξεργασίας (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://gdpr-info.eu/art-32-gdpr/'},
      {label: 'Κανονισμός (ΕΕ) 2016/679 (GDPR), άρθρο 33: γνωστοποίηση παραβίασης στην αρχή (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://gdpr-info.eu/art-33-gdpr/'},
      {label: 'Κανονισμός (ΕΕ) 2016/679 (GDPR), άρθρο 44: γενική αρχή για τις διαβιβάσεις (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://gdpr-info.eu/art-44-gdpr/'},
      {label: 'Οδηγία 2011/83/ΕΕ για τα δικαιώματα των καταναλωτών, ελληνικό κείμενο (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://eur-lex.europa.eu/legal-content/EL/TXT/HTML/?uri=CELEX:32011L0083'},
      {label: 'Οδηγία (ΕΕ) 2019/771 για τις συμβάσεις πώλησης αγαθών, αγγλικό κείμενο (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://eur-lex.europa.eu/eli/dir/2019/771/oj/eng'},
      {label: 'Κατ’ εξουσιοδότηση Κανονισμός (ΕΕ) 2018/389: ισχυρή ταυτοποίηση πελάτη (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32018R0389'},
      {label: 'Ευρωπαϊκή Επιτροπή: διακοπή λειτουργίας της πλατφόρμας ΗΕΔ (ODR) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://consumer-redress.ec.europa.eu/site-relocation_el'},
      {label: 'Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα: cookies και συναφείς τεχνολογίες (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://www.dpa.gr/el/enimerwtiko/thematikes_enotites/electronikesepikoinwnies/cookies/cookies_diadiktuo_cookies'},
      {label: 'Shopify Help Center: Exporting products (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://help.shopify.com/en/manual/products/import-export/export-products'},
      {label: 'Shopify Help Center: Exporting orders (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://help.shopify.com/en/manual/fulfillment/managing-orders/exporting-orders'},
      {label: 'Shopify Help Center: Importing and exporting customer lists (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://help.shopify.com/en/manual/customers/import-export-customers'},
      {label: 'Shopify Help Center: Migrate from WooCommerce (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce'},
      {label: 'Shopify Help Center: Deactivating and reactivating your store (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://help.shopify.com/en/manual/your-account/pause-deactivate-store'},
      {label: 'Shopify Help Center: Transferring Shopify-managed domains to another provider (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://help.shopify.com/en/manual/domains/managing-domain-ownership/transferring-shopify-domains'},
      {label: 'Shopify Help Center: Third-party payment providers (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://help.shopify.com/en/manual/payments/third-party-providers'},
      {label: 'Shopify Help Center: Accepting payments with Shopify Payments for Greece (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/greece/accepting-payments'},
      {label: 'Shopify Help Center: Requirements for Shopify Payments in Greece (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/greece/requirements'},
      {label: 'Shopify.dev, Liquid object: checkout, ειδοποίηση απόσυρσης (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://shopify.dev/docs/api/liquid/objects/checkout'},
      {label: 'Shopify.dev, Privacy law compliance: υποχρεωτικά webhooks συμμόρφωσης (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://shopify.dev/docs/apps/build/compliance/privacy-law-compliance'},
      {label: 'WooCommerce: Product CSV Importer and Exporter (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://woocommerce.com/document/product-csv-importer-exporter/'},
      {label: 'WooCommerce: Customer / Order / Coupon CSV Export, επέκταση (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://woocommerce.com/document/ordercustomer-csv-export/'},
      {label: 'WooCommerce: Setting up shipping zones (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://woocommerce.com/document/setting-up-shipping-zones/'},
      {label: 'WooCommerce: PCI-DSS compliance and WooCommerce (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://woocommerce.com/document/pci-dss-compliance-and-woocommerce/'},
      {label: 'WooCommerce: Site and data security FAQ (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://woocommerce.com/document/woocommerce-security-faq/'},
      {label: 'WordPress.org: σελίδα του προσθέτου WooCommerce (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://wordpress.org/plugins/woocommerce/'},
      {label: 'WordPress.org: Tools Export Personal Data screen (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://wordpress.org/documentation/article/tools-export-personal-data-screen/'},
      {label: 'PrestaShop 8 documentation: Complying with the GDPR (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://docs.prestashop-project.org/v.8-documentation/user-guide/gdpr'},
      {label: 'PrestaShop 8 documentation: Your customers, Export (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://docs.prestashop-project.org/v.8-documentation/user-guide/selling/managing-customers/your-customers'},
      {label: 'Adobe Commerce documentation: CSV data files (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://experienceleague.adobe.com/en/docs/commerce-admin/systems/data-transfer/data-csv'},
      {label: 'OpenCart documentation: System / Maintenance, Backup & Restore (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://docs.opencart.com/admin-interface/system/maintenance'},
      {label: 'Stripe Documentation: Request a payment data export (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: 'https://docs.stripe.com/get-started/data-migrations/pan-export?locale=en-US'},
    ]},
  ],
};

export default post;
