import type {BlogPost} from '@/types/blog';

// TERM: indexing is «ευρετηρίαση» — the live site's word. Not «καταχώριση».

// Άρθρο 6. Ορισμός + διαίρεση του πεδίου σε τρεις στήλες. Κάθε πρόταση για το πώς λειτουργεί η
// αναζήτηση παρατίθεται αυτούσια από την τεκμηρίωση της Google, με τη σελίδα της δίπλα.
// Δεν ξαναεξηγεί τα τρία στάδια, τον έλεγχο site:, το robots.txt/noindex ή τους αγορασμένους
// συνδέσμους — αυτά ανήκουν στο «Γιατί δεν εμφανίζεται η ιστοσελίδα σου στην Google».
// Δεν ξαναγράφει την εγγυημένη θέση ως όρο ανάθεσης — αυτό ανήκει στο «τι να ζητάς γραπτά».

const G_STARTER = 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide';
const G_HOWSEARCH = 'https://developers.google.com/search/docs/fundamentals/how-search-works';
const G_ESSENTIALS = 'https://developers.google.com/search/docs/essentials';
const G_TECHNICAL = 'https://developers.google.com/search/docs/essentials/technical';
const G_HIRING = 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo';
const G_SPAM = 'https://developers.google.com/search/docs/essentials/spam-policies';
const G_HELPFUL = 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content';
const G_RANKING_SYSTEMS = 'https://developers.google.com/search/docs/appearance/ranking-systems-guide';
const G_CORE_UPDATES = 'https://developers.google.com/search/updates/core-updates';
const G_DROPS = 'https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops';
const G_TITLES = 'https://developers.google.com/search/docs/appearance/title-link';
const G_SNIPPET = 'https://developers.google.com/search/docs/appearance/snippet';
const G_STRUCTURED = 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data';
const G_PAGE_EXPERIENCE = 'https://developers.google.com/search/docs/appearance/page-experience';
const G_AI = 'https://developers.google.com/search/docs/appearance/ai-features';
const G_SC_POSITION = 'https://support.google.com/webmasters/answer/7042828';
const G_SC_ABOUT = 'https://support.google.com/webmasters/answer/9128668';
const G_SC_MANUAL = 'https://support.google.com/webmasters/answer/9044175';
const G_RANKING_RESULTS = 'https://www.google.com/search/howsearchworks/how-search-works/ranking-results/';

const A_INDEXING = '/el/blog/giati-den-emfanizetai-i-istoselida-sto-google';
const A_BRIEF = '/el/blog/kataskevi-istoselidon-ti-na-zitas';

const post: BlogPost = {
  id: 'ti-einai-to-seo',
  slug: 'ti-einai-to-seo',
  title: 'Τι είναι το SEO, και ποιο κομμάτι του ελέγχεις πραγματικά',
  metaTitle: 'Τι είναι το SEO και τι ελέγχεις πραγματικά',
  excerpt: 'Ο ορισμός όπως τον γράφει η ίδια η Google, και μετά η διαίρεση: τι ελέγχεις πλήρως, τι επηρεάζεις και τι δεν σου ανήκει καθόλου.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 30,
  tags: ['Αναζήτηση', 'Ιστοσελίδες', 'Ανάθεση έργου'],
  body: [
    {type: 'paragraph', text: [
      'Το «SEO» σημαίνει διαφορετικό πράγμα ανάλογα με το ποιος τη λέει τη λέξη. Στην τεκμηρίωση της Google έχει έναν συγκεκριμένο, γραμμένο ορισμό — και μέσα εκεί ',
      {text: 'δεν υπάρχει πουθενά η λέξη «θέση»', strong: true},
      '.',
    ]},
    {type: 'paragraph', text: [
      'Η πρόταση είναι αυτή: «SEO—short for search engine optimization—is about helping search engines understand your content, and helping users find your site and make a decision about whether they should visit your site through a search engine.» (',
      {text: 'SEO Starter Guide', href: G_STARTER},
      '). Δύο μισά: να καταλαβαίνουν οι μηχανές τι λες, και να σε βρίσκουν οι άνθρωποι. Καμία υπόσχεση για το πού θα εμφανιστείς, γιατί το πού θα εμφανιστείς δεν το ορίζεις εσύ.',
    ]},
    {type: 'paragraph', text: [
      'Παρακάτω είναι πρώτα ο ορισμός όπως τον γράφει η πηγή, και μετά η διαίρεση του πεδίου σε τρεις στήλες: τι ελέγχεις πλήρως, τι επηρεάζεις, και τι δεν σου ανήκει. Η τρίτη είναι η μεγαλύτερη, και λείπει από κάθε προσφορά που έχεις δεχτεί.',
    ]},
    {type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε πρόταση της Google που παρατίθεται εδώ διαβάστηκε εκείνη τη μέρα στη σελίδα που τη συνοδεύει. Μένουν στα αγγλικά επίτηδες: έτσι είναι γραμμένες στην πηγή, και έτσι τις ελέγχεις.',
    ]},

    {type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Τι είναι τελικά το SEO;', a: 'Με τα λόγια της ίδιας της Google, το να βοηθάς τις μηχανές αναζήτησης να καταλάβουν το περιεχόμενό σου και τους ανθρώπους να βρουν τον ιστότοπό σου. Δεν ορίζεται ως τεχνική ανόδου σε θέση, και η τεκμηρίωση γράφει ρητά ότι δεν υπάρχουν μυστικά που κατατάσσουν αυτόματα έναν ιστότοπο πρώτο.'},
      {q: 'Μπορεί κάποιος να μου εγγυηθεί την πρώτη θέση;', a: 'Όχι, και δεν είναι θέμα ήθους αλλά αρχιτεκτονικής: η κατάταξη γίνεται από λογισμικό, πάνω σε πράγματα που δεν σου ανήκουν — τον ανταγωνισμό, τον χρήστη, τη διαρκή αλλαγή των συστημάτων. Το γράφει η ίδια η Google στη σελίδα της για την πρόσληψη ειδικού SEO.'},
      {q: 'Πληρώνω την Google για να βγαίνω ψηλά στα οργανικά;', a: 'Δεν υπάρχει τέτοια δυνατότητα. Η Google γράφει ότι δεν δέχεται χρήματα για να συμπεριλάβει ή να κατατάξει ιστότοπους, και ότι οι διαφημιζόμενοι δεν έχουν ειδική μεταχείριση στους αλγορίθμους κατάταξης. Αφορά τι χρεώνει η Google, τίποτε άλλο.'},
      {q: 'Χρειάζομαι ξεχωριστό «SEO για την τεχνητή νοημοσύνη»;', a: 'Η τεκμηρίωση λέει όχι: δεν υπάρχουν πρόσθετες απαιτήσεις ούτε ειδικές βελτιστοποιήσεις για τις λειτουργίες AI της Google. Η προϋπόθεση είναι η σελίδα να είναι καταχωρισμένη και επιλέξιμη να εμφανιστεί με απόσπασμα, δηλαδή ακριβώς τα ίδια βασικά.'},
      {q: 'Έπεσε η επισκεψιμότητά μου. Με τιμώρησε η Google;', a: 'Συνήθως όχι με την έννοια που εννοεί η αγορά. Η ανθρώπινη παρέμβαση λέγεται χειροκίνητη ενέργεια και εκδίδεται για παραβίαση των πολιτικών. Μια βασική ενημέρωση αλγορίθμου δεν στοχεύει συγκεκριμένους ιστότοπους, ενώ η ζήτηση για ένα ερώτημα αλλάζει και μόνη της.'},
      {q: 'Είναι υποχρεωτικό το Search Console;', a: 'Όχι. Η Google γράφει ότι δεν χρειάζεται να εγγραφείς για να συμπεριληφθείς στα αποτελέσματα. Είναι εργαλείο παρακολούθησης και διάγνωσης, όχι προϋπόθεση για να υπάρχεις.'},
    ]},

    {type: 'heading', text: 'Ο ορισμός της τεκμηρίωσης και ο ορισμός της αγοράς'},
    {type: 'paragraph', text: [
      'Η αγορά πουλάει το SEO ως ανάβαση· η τεκμηρίωση το περιγράφει ως κατανόηση. Η διαφορά αλλάζει το τι σου υπόσχεται κάποιος και το τι μπορείς να του ζητήσεις πίσω.',
    ]},
    {type: 'paragraph', text: [
      'Ξεκίνα από το πιο αντιδιαισθητικό που γράφει η Google για τον εαυτό της: «Google is a fully automated search engine that uses programs called crawlers to explore the web constantly, looking for pages to add to our index. You usually don’t need to do anything except publish your site on the web.» (',
      {text: 'SEO Starter Guide', href: G_STARTER},
      '). Η βασική περίπτωση δεν είναι «κάνε SEO για να μπεις»· είναι «δημοσίευσε την ιστοσελίδα σου». Και αυτό που τη διαβάζει είναι πρόγραμμα, όχι άνθρωπος που κρίνει την επιχείρησή σου.',
    ]},
    {type: 'paragraph', text: [
      'Μετά έρχεται η πρόταση που δεν μπαίνει ποτέ σε προσφορά: «There are no secrets here that’ll automatically rank your site first in Google (sorry!).» (',
      {text: 'SEO Starter Guide', href: G_STARTER},
      '). Το «sorry!» είναι δικό τους. Αν το SEO σού παρουσιάζεται ως κρυφό σύνολο κόλπων, ο ορισμός το διαψεύδει στην πηγή.',
    ]},

    {type: 'heading', text: 'Οι τρεις στήλες'},
    {type: 'paragraph', text: [
      'Κάθε κομμάτι της αναζήτησης ανήκει σε μία από τρεις κατηγορίες: ή το ορίζεις εσύ, ή το επηρεάζεις αλλά αποφασίζει το σύστημα, ή δεν σου ανήκει καθόλου. Ο πίνακας είναι όλο το άρθρο σε μία οθόνη· τα κεφάλαια που ακολουθούν εξηγούν τις γραμμές του.',
    ]},
    {type: 'table', caption: 'Το πεδίο της αναζήτησης, χωρισμένο σε τρεις στήλες.', head: ['Κομμάτι', 'Σε ποια στήλη ανήκει', 'Τι λέει η τεκμηρίωση'], rows: [
      [['Οι λέξεις που υπάρχουν πάνω στη σελίδα σου'], [{text: 'Ελέγχεις', strong: true}], ['Η Google το ονομάζει «complete control» — για τις λέξεις, όχι για το τι θα δείξει τελικά']],
      [['Οι τρεις τεχνικές απαιτήσεις'], [{text: 'Ελέγχεις', strong: true}], ['Να μην μπλοκάρεται το Googlebot, HTTP 200, περιεχόμενο που μπορεί να ευρετηριαστεί']],
      [['Τα δομημένα δεδομένα'], [{text: 'Ελέγχεις', strong: true}], ['Κάνουν τη σελίδα «eligible» για εμπλουτισμένο αποτέλεσμα, δεν το εξασφαλίζουν']],
      [['Το sitemap'], [{text: 'Ελέγχεις', strong: true}], ['Δεν εγγυάται ότι όλα όσα απαριθμεί θα ανιχνευθούν και θα ευρετηριαστούν']],
      [['Το αν θα ευρετηριαστεί η σελίδα'], [{text: 'Επηρεάζεις', strong: true}], ['Η ευρετηρίαση δεν είναι εγγυημένη: δεν ευρετηριάζεται κάθε σελίδα που επεξεργάζεται η Google']],
      [['Η συνάφεια με ένα ερώτημα'], [{text: 'Επηρεάζεις', strong: true}], ['Εκατοντάδες παράγοντες, μερικοί από τους οποίους αφορούν τον ίδιο τον χρήστη']],
      [['Ο τίτλος που τελικά εμφανίζεται'], [{text: 'Δεν σου ανήκει', strong: true}], ['«completely automated», και λαμβάνει υπόψη και αναφορές εκτός της σελίδας σου']],
      [['Το απόσπασμα κάτω από τον τίτλο'], [{text: 'Δεν σου ανήκει', strong: true}], ['Μπορεί να είναι διαφορετικό σε κάθε αναζήτηση']],
      [['Η θέση σου'], [{text: 'Δεν σου ανήκει', strong: true}], ['Γίνεται προγραμματιστικά, δηλαδή από λογισμικό και όχι από άνθρωπο']],
      [['Ο ανταγωνισμός'], [{text: 'Δεν σου ανήκει', strong: true}], ['Γενικά όχι πάνω από δύο καταχωρίσεις ανά ιστότοπο στα κορυφαία αποτελέσματα']],
      [['Ο αλγόριθμος'], [{text: 'Δεν σου ανήκει', strong: true}], ['Ευρείες αλλαγές αρκετές φορές τον χρόνο, που δεν στοχεύουν συγκεκριμένους ιστότοπους']],
      [['Η πρόθεση, η τοποθεσία, η γλώσσα και η συσκευή του χρήστη'], [{text: 'Δεν σου ανήκει', strong: true}], ['Η Google πρώτα προσπαθεί να καταλάβει τι θέλει ο χρήστης']],
      [['Η ζήτηση για ένα ερώτημα'], [{text: 'Δεν σου ανήκει', strong: true}], ['Αλλάζει από τάσεις και εποχικότητα, ανεξάρτητα από εσένα']],
    ]},
    {type: 'paragraph', text: [
      'Μέτρησε τις γραμμές: τέσσερις πλήρους ελέγχου, δύο επιρροής, επτά εκτός. Αυτή η αναλογία είναι όλος ο λόγος που καμία εγγύηση θέσης δεν είναι δυνατή.',
    ]},

    {type: 'heading', text: 'Η στήλη που ελέγχεις είναι μικρή και συγκεκριμένη'},
    {type: 'paragraph', text: [
      'Οι τεχνικές απαιτήσεις είναι λιγότερες απ’ όσο περιμένεις. Είναι ',
      {text: 'τρεις', strong: true},
      ': να μην μπλοκάρεται το πρόγραμμα ανίχνευσης, η σελίδα να απαντά με κωδικό επιτυχίας, και να έχει περιεχόμενο που μπορεί να ευρετηριαστεί. Για τη δεύτερη, η διατύπωση είναι απόλυτη: «Google only indexes pages that are served with an HTTP 200 (success) status code.» (',
      {text: 'Google Search technical requirements', href: G_TECHNICAL},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Το μπλοκάρισμα είναι ο πιο συνηθισμένος λόγος που μια ολοκαίνουργια ιστοσελίδα δεν εμφανίζεται πουθενά, και το εξηγεί αναλυτικά, με τον έλεγχο που κάνεις μόνος σου σε δέκα δευτερόλεπτα, το κείμενο για το ',
      {text: 'γιατί δεν εμφανίζεται η ιστοσελίδα σου στην Google', href: A_INDEXING},
      '. Ανήκει κι αυτό ακέραιο στη στήλη «ελέγχεις».',
    ]},
    {type: 'subheading', text: 'Οι λέξεις σου — το μόνο σημείο όπου η Google λέει «πλήρης έλεγχος»'},
    {type: 'paragraph', text: [
      'Υπάρχει ακριβώς μία πρόταση στην τεκμηρίωση με τη φράση «complete control», και δεν λέει αυτό που νομίζουν οι περισσότεροι: «The snippet is sourced from the actual content of the page the search result is linking to, thus you have complete control over the words that can be used to generate the snippet.» (',
      {text: 'SEO Starter Guide', href: G_STARTER},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Ο πλήρης έλεγχος αφορά ',
      {text: 'τις λέξεις που μπορούν να χρησιμοποιηθούν', strong: true},
      ', όχι το απόσπασμα που τελικά θα δει κάποιος. Σαν να δίνεις σε κάποιον ένα βιβλίο ξέροντας ότι θα διαβάσει δυνατά μία παράγραφο, χωρίς να ξέρεις ποια. Ελέγχεις μόνο τι υπάρχει στο βιβλίο — και αυτό είναι αρκετό: αν η σελίδα σου δεν λέει πουθενά τι κάνεις, για ποιον και πού, καμία διατύπωση δεν προκύπτει από το τίποτα.',
    ]},
    {type: 'subheading', text: 'Δομημένα δεδομένα, sitemap, ταχύτητα: επιλεξιμότητα, όχι εγγύηση'},
    {type: 'paragraph', text: [
      'Τα δομημένα δεδομένα είναι μια περιγραφή της σελίδας σε μορφή που διαβάζει μηχανή — ότι αυτό είναι προϊόν, αυτό συνταγή, αυτό ερωτοαπάντηση. Η λέξη για το αποτέλεσμά τους είναι πάντα η ίδια: «You must include all the required properties for an object to be eligible for appearance in Google Search with enhanced display.» (',
      {text: 'Intro to structured data markup', href: G_STRUCTURED},
      '). Επιλέξιμη. Όχι σίγουρη. Το ίδιο ισχύει και για το sitemap, το αρχείο που απαριθμεί τις σελίδες σου: δεν εγγυάται ότι θα ανιχνευθούν και θα ευρετηριαστούν όλες.',
    ]},
    {type: 'paragraph', text: [
      'Η λέξη «eligible» είναι το πιο υποτιμημένο πράγμα σε όλη την τεκμηρίωση. Επανέρχεται παντού και σημαίνει πάντα το ίδιο: έκανες ό,τι σου αναλογεί, και τώρα αποφασίζει κάποιος άλλος.',
    ]},
    {type: 'paragraph', text: [
      'Η ταχύτητα και η ευκολία χρήσης πωλούνται συχνά ως το κλειδί. Η σελίδα που τις περιγράφει έχει επικεφαλίδα-ερώτηση για το αν υπάρχει ένα ενιαίο σήμα «εμπειρίας σελίδας», και απαντά από κάτω ότι δεν υπάρχει· προσθέτει μάλιστα: «Google Search always seeks to show the most relevant content, even if the page experience is sub-par.» (',
      {text: 'Understanding page experience', href: G_PAGE_EXPERIENCE},
      '). Μια γρήγορη σελίδα που δεν απαντά σε τίποτα δεν κερδίζει μια αργή που απαντά.',
    ]},

    {type: 'heading', text: 'Η στήλη που δεν σου ανήκει'},
    {type: 'paragraph', text: [
      'Εδώ είναι το μισό που δεν γράφει κανείς, γιατί δεν πουλάει: τέσσερα πράγματα καθορίζουν πού θα εμφανιστείς, και κανένα τους δεν είναι δικό σου.',
    ]},
    {type: 'subheading', text: '1. Ο ανταγωνισμός — και ο χώρος που πραγματικά υπάρχει'},
    {type: 'paragraph', text: [
      'Η σελίδα αποτελεσμάτων δεν είναι λίστα με άπειρες θέσεις όπου ο καθένας παίρνει τη σειρά του· έχει σχεδιαστεί ώστε να μοιράζεται: «Our site diversity system works so that we generally won’t show more than two web page listings from the same site in our top results, so that no single site tends to dominate all the top results.» (',
      {text: 'A guide to Google Search ranking systems', href: G_RANKING_SYSTEMS},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Διάβασέ το ανάποδα: ο χώρος στην κορυφή είναι περιορισμένος εξ ορισμού, και δεν μοιράζεται με βάση το πόσο δούλεψες. Αν αύριο βγει ανταγωνιστής με σελίδα που απαντά καλύτερα σε ένα ερώτημα, κάτι πρέπει να μετακινηθεί — και μπορεί να είσαι εσύ, χωρίς να έχεις αλλάξει ούτε ένα γράμμα.',
    ]},
    {type: 'subheading', text: '2. Ο αλγόριθμος — που αλλάζει χωρίς να σε ρωτήσει'},
    {type: 'paragraph', text: [
      'Αρκετές φορές τον χρόνο η Google αλλάζει βαθιά τον τρόπο που αξιολογεί, και γράφει γι’ αυτό: «These changes are broad in nature, and don’t target specific sites or individual web pages.» (',
      {text: 'Google Search’s core updates', href: G_CORE_UPDATES},
      '). Δεν είναι προσωπικό, με την κυριολεκτική έννοια: δεν σε κοίταξε κανείς.',
    ]},
    {type: 'paragraph', text: [
      'Η ίδια σελίδα δίνει και μια παρομοίωση που λύνει την πιο επίπονη ερώτηση μιας πτώσης, το «τι έκανα λάθος;». Μια λίστα με τα είκοσι καλύτερα εστιατόρια, που ξαναγράφεται σήμερα: «The list will change, and restaurants that move down aren’t necessarily "bad"; there are just other restaurants that make your top 20.» (',
      {text: 'Google Search’s core updates', href: G_CORE_UPDATES},
      '). Και η συνέπεια, γραμμένη στη σελίδα για τις πτώσεις επισκεψιμότητας: «This constant change can cause both gains and drops in organic Search traffic.» (',
      {text: 'Debugging drops in Google Search traffic', href: G_DROPS},
      '). Προς τις δύο κατευθύνσεις — και για τις ανόδους που κάποιος θα θελήσει να χρεώσει στον εαυτό του.',
    ]},
    {type: 'subheading', text: '3. Ο άνθρωπος που ψάχνει'},
    {type: 'paragraph', text: [
      'Η αναζήτηση δεν ξεκινά από τη σελίδα σου· ξεκινά από την ερώτηση κάποιου: «To return relevant results, we first need to establish what you’re looking for - the intent behind your query.» (',
      {text: 'How Search Works: Ranking results', href: G_RANKING_RESULTS},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Και η συνάφεια δεν κρίνεται στο κενό: «Relevancy is determined by hundreds of factors, which could include information such as the user’s location, language, and device.» (',
      {text: 'In-depth guide to how Google Search works', href: G_HOWSEARCH},
      '). Η τοποθεσία, η γλώσσα και η συσκευή του άλλου δεν είναι δικά σου δεδομένα. Δύο άνθρωποι που γράφουν ταυτόχρονα την ίδια φράση μπορούν να δουν διαφορετική σελίδα, και κανείς από τους δύο δεν κάνει λάθος. Άμεση συνέπεια: το να ψάχνεις τον εαυτό σου στο κινητό σου, από τη δική σου πόλη, δεν σου λέει τίποτα για το τι βλέπει ο πελάτης σου.',
    ]},
    {type: 'subheading', text: '4. Η ζήτηση — που ανεβοκατεβαίνει μόνη της'},
    {type: 'paragraph', text: [
      'Το πόσοι άνθρωποι ψάχνουν κάτι δεν είναι σταθερό, και η τεκμηρίωση το βάζει από τις πρώτες εξηγήσεις μιας πτώσης: «Sometimes changes in user behavior will change the demand for certain queries, either due to a new trend, or seasonality throughout the year.» (',
      {text: 'Debugging drops in Google Search traffic', href: G_DROPS},
      '). Μια επιχείρηση με έντονη εποχικότητα το ζει κάθε χρόνο και το μπερδεύει με πρόβλημα: η θέση δεν κουνήθηκε, απλώς ρωτάει λιγότερος κόσμος.',
    ]},
    {type: 'subheading', text: 'Και η βιτρίνα: ο τίτλος και το απόσπασμα'},
    {type: 'paragraph', text: [
      'Μένει το πιο ορατό κομμάτι, αυτό που βλέπει ο άλλος στα αποτελέσματα — ούτε αυτό δικό σου. Για τον τίτλο: «Google’s generation of title links on the Google Search results page is completely automated and takes into account both the content of a page and references to it that appear on the web.» (',
      {text: 'Control your title links in search results', href: G_TITLES},
      '). Πλήρως αυτοματοποιημένη, και λαμβάνει υπόψη αναφορές που δεν βρίσκονται καν στη σελίδα σου.',
    ]},
    {type: 'paragraph', text: [
      'Για το απόσπασμα: «This means that Google Search might show different snippets for different searches.» (',
      {text: 'Control your snippets in search results', href: G_SNIPPET},
      '). Δεν υπάρχει «το απόσπασμά μου»· υπάρχει το απόσπασμα που παρήχθη για εκείνη την αναζήτηση, από τις λέξεις που εσύ έβαλες στη σελίδα. Η σωστή οδηγία δεν είναι «γράψε καλή περιγραφή», αλλά «γράψε καλή σελίδα, γιατί από αυτήν φτιάχνεται ό,τι δείχνει».',
    ]},

    {type: 'heading', text: 'Γιατί καμία εγγύηση θέσης δεν είναι δυνατή'},
    {type: 'paragraph', text: [
      'Η διαίρεση έχει γίνει και η απάντηση βγαίνει μόνη της: η κατάταξη είναι απόφαση λογισμικού πάνω σε μεταβλητές που, στην πλειοψηφία τους, ανήκουν σε τρίτους. «Google doesn’t accept payment to rank pages higher, and ranking is done programmatically.» (',
      {text: 'In-depth guide to how Google Search works', href: G_HOWSEARCH},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Και το λέει και ευθέως, στη δική της σελίδα για το πώς προσλαμβάνεις ειδικό: «No one can guarantee a #1 ranking on Google.» (',
      {text: 'Do You Need an SEO?', href: G_HIRING},
      '). Πρόσεξε ποιος το γράφει: όχι ένας ανταγωνιστής που κράζει τους άλλους, αλλά ο ίδιος ο πάροχος. Ως όρος συμφωνίας το ίδιο πράγμα καλύπτεται στο κείμενο για ',
      {text: 'τι να ζητάς γραπτά πριν αναθέσεις μια ιστοσελίδα', href: A_BRIEF},
      '· εδώ μας ενδιαφέρει μόνο ως συνέπεια της αρχιτεκτονικής.',
    ]},
    {type: 'paragraph', text: [
      'Η αλυσίδα των «δεν εγγυάται» ξεκινά μάλιστα πολύ πριν φτάσουμε σε θέση. Δεν εγγυάται ούτε ότι θα σε κρατήσει: «Indexing isn’t guaranteed; not every page that Google processes will be indexed.» (',
      {text: 'In-depth guide to how Google Search works', href: G_HOWSEARCH},
      '). Και τα ίδια τα Search Essentials —τα τρία μέρη με τις τεχνικές απαιτήσεις, τις πολιτικές ανεπιθύμητου περιεχομένου και τις βασικές καλές πρακτικές— περιγράφονται με την ίδια συγκρατημένη γλώσσα, ως κάτι που κάνει το περιεχόμενό σου «eligible». Και αμέσως μετά, για να μη μείνει αμφιβολία: «It’s important to note that just because a page meets all of these requirements and best practices, doesn’t mean that Google will crawl, index, or serve its content.» (',
      {text: 'Google Search Essentials', href: G_ESSENTIALS},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Με απλά λόγια: η καλύτερη δυνατή δουλειά σε ολόκληρη τη στήλη «ελέγχεις» σε φέρνει στην κατάσταση «επιλέξιμος». Δεν υπάρχει επόμενο σκαλί που να το ανεβαίνεις εσύ — και όποιος το πουλάει, πουλάει κάτι που δεν έχει.',
    ]},

    {type: 'heading', text: 'Και όχι, δεν πληρώνεται η Google για θέση'},
    {type: 'paragraph', text: [
      'Είναι από τις πιο επίμονες παρανοήσεις, και προκύπτει από το ότι οι διαφημίσεις κάθονται πάνω από τα οργανικά στην ίδια οθόνη. Στη σελίδα για την πρόσληψη ειδικού: «Google never accepts money to include or rank sites in our search results, and it costs nothing to appear in our organic search results.» (',
      {text: 'Do You Need an SEO?', href: G_HIRING},
      '). Και στη σελίδα για την κατάταξη: «We never provide special treatment to advertisers in how our search algorithms rank their websites, and nobody can pay us to do so.» (',
      {text: 'How Search Works: Ranking results', href: G_RANKING_RESULTS},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Μία διευκρίνιση, γιατί η φράση παρερμηνεύεται συστηματικά. Όλα τα παραπάνω λένε ένα και μόνο πράγμα: ',
      {text: 'η Google δεν χρεώνει για να σε συμπεριλάβει ή να σε κατατάξει', strong: true},
      '. Δεν λένε τίποτα για το τι κοστίζει η δουλειά που κάνει οποιοσδήποτε πάνω στην ιστοσελίδα σου — ούτε εμείς, ούτε κανείς άλλος. Η σύγχυση των δύο είναι ο λόγος που κάποιοι λένε «το SEO είναι δωρεάν» και κάποιοι άλλοι «πληρώνεις την Google». Και τα δύο είναι λάθος.',
    ]},

    {type: 'cta', heading: 'Θέλεις να δεις πού βρίσκεται η δική σου ιστοσελίδα σε αυτόν τον πίνακα;', text: 'Κοιτάμε τι ελέγχεις και δεν το έχεις κάνει, τι δεν σου ανήκει και δεν αξίζει να το κυνηγάς, και σου το δίνουμε γραπτά — με τη σελίδα της τεκμηρίωσης δίπλα σε κάθε πρόταση.', label: 'Δες τι περιλαμβάνει', href: '/el/offers/website-seo'},

    {type: 'heading', text: '«Ποινή»: μία λέξη για τρία διαφορετικά πράγματα'},
    {type: 'paragraph', text: [
      'Όταν πέφτει η επισκεψιμότητα, η αγορά έχει μία λέξη: penalty. Η τεκμηρίωση έχει τρία ξεχωριστά φαινόμενα, με διαφορετική αιτία και διαφορετική αντιμετώπιση. Το να τα μπερδεύεις είναι ο γρηγορότερος τρόπος να πληρώσεις για λάθος δουλειά.',
    ]},
    {type: 'table', caption: 'Τρία πράγματα που η αγορά τα λέει όλα «ποινή».', head: ['Τι συνέβη', 'Ποιος το προκάλεσε', 'Πώς το ξεχωρίζεις'], rows: [
      [['Χειροκίνητη ενέργεια'], ['Ελεγκτής άνθρωπος της Google, για παραβίαση των πολιτικών'], ['Η μόνη περίπτωση με ανθρώπινη κρίση· εμφανίζεται σε ξεχωριστή αναφορά στο Search Console']],
      [['Βασική ενημέρωση αλγορίθμου'], ['Ευρεία αλλαγή στα συστήματα, αρκετές φορές τον χρόνο'], ['Δεν στοχεύει συγκεκριμένους ιστότοπους· η μετακίνηση αφορά ολόκληρες κατηγορίες ερωτημάτων']],
      [['Αλλαγή ζήτησης'], ['Οι ίδιοι οι χρήστες — τάση ή εποχικότητα'], ['Η θέση μένει ίδια και μειώνεται το πλήθος των αναζητήσεων, όχι το μερίδιό σου']],
    ]},
    {type: 'paragraph', text: [
      'Για την πρώτη γραμμή ο ορισμός είναι ρητός: «Google issues a manual action against a site when a human reviewer at Google has determined that pages on the site are not compliant with Google’s spam policies.» (',
      {text: 'Manual actions report', href: G_SC_MANUAL},
      '). Το μόνο σημείο σε όλη τη διαδικασία όπου κάποιος άνθρωπος κοίταξε πραγματικά την ιστοσελίδα σου.',
    ]},
    {type: 'paragraph', text: [
      'Και προσοχή στη διατύπωση, γιατί ούτε η ίδια η Google χρησιμοποιεί τη λέξη «τιμωρία»: «Sites that violate our policies may rank lower in results or not appear in results at all.» (',
      {text: 'Spam policies for Google web search', href: G_SPAM},
      '). «May» και «lower», όχι «θα» και «εξαφάνιση».',
    ]},
    {type: 'subheading', text: 'Πώς ορίζεται η χειραγώγηση'},
    {type: 'paragraph', text: [
      'Αξίζει να ξέρεις τους ορισμούς, γιατί και οι δύο πρακτικές πωλούνται ακόμα ως υπηρεσία. Πρώτα η συσσώρευση λέξεων-κλειδιών: «Keyword stuffing refers to the practice of filling a web page with keywords or numbers in an attempt to manipulate rankings in Google Search results.» (',
      {text: 'Spam policies for Google web search', href: G_SPAM},
      '). Δηλαδή το «βάλε την πόλη σου δεκαπέντε φορές στο υποσέλιδο», που κυκλοφορεί ακόμα ως συμβουλή. Τους αγορασμένους συνδέσμους, που ορίζονται στην ίδια σελίδα, τους έχει το κείμενο για την ',
      {text: 'ευρετηρίαση', href: A_INDEXING},
      '.',
    ]},
    {type: 'paragraph', text: [
      'Και η πιο επίκαιρη, η μαζική παραγωγή σελίδων: «Scaled content abuse is when many pages are generated for the primary purpose of manipulating search rankings and not helping users.» (',
      {text: 'Spam policies for Google web search', href: G_SPAM},
      '). Ο ορισμός δεν αναφέρει καθόλου το εργαλείο παραγωγής — αναφέρει τον σκοπό. Το ίδιο κριτήριο επαναλαμβάνεται και για την τεχνητή νοημοσύνη ονομαστικά: «If you use automation, including AI-generation, to produce content for the primary purpose of manipulating search rankings, that’s a violation of our spam policies.» (',
      {text: 'Creating helpful, reliable, people-first content', href: G_HELPFUL},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Η γραμμή δεν περνάει ανάμεσα σε «γραμμένο από άνθρωπο» και «γραμμένο από μηχανή», αλλά ανάμεσα σε «φτιαγμένο για ανθρώπους» και «φτιαγμένο για κατάταξη». Στην ίδια σελίδα βρίσκεται και το E-E-A-T — εμπειρία, εξειδίκευση, κύρος, αξιοπιστία — με ρητή ιεράρχηση: «Of these aspects, trust is most important.» (',
      {text: 'Creating helpful, reliable, people-first content', href: G_HELPFUL},
      '). Για μια μικρή επιχείρηση αυτό μεταφράζεται σε βαρετά πράγματα: πραγματική διεύθυνση, πραγματικό τηλέφωνο, πραγματικό όνομα από πίσω, και να λες και τι δεν κάνεις.',
    ]},

    {type: 'heading', text: 'Το «SEO για την τεχνητή νοημοσύνη» δεν είναι ξεχωριστό πεδίο'},
    {type: 'paragraph', text: [
      'Θα δεις προσφορές για βελτιστοποίηση ειδικά για τις απαντήσεις AI, με καινούργια ακρωνύμια. Η τεκμηρίωση απαντά σε μία πρόταση: «There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary.» (',
      {text: 'AI features and your website', href: G_AI},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Στην ίδια σελίδα γράφει ότι, για να εμφανιστεί μια σελίδα ως υποστηρικτικός σύνδεσμος στις AI Overviews ή στο AI Mode, πρέπει να είναι καταχωρισμένη και επιλέξιμη να εμφανιστεί με απόσπασμα (',
      {text: 'AI features and your website', href: G_AI},
      '). Πίσω στις ίδιες γραμμές της πρώτης στήλης. Αν κάποιος σου ζητά χωριστή δουλειά γι’ αυτό, ζήτησέ του να σου δείξει πού γράφεται η πρόσθετη απαίτηση που καλύπτει.',
    ]},

    {type: 'heading', text: 'Πώς μετριέται, και γιατί ένα screenshot δεν αποδεικνύει τίποτα'},
    {type: 'paragraph', text: [
      'Αφού η θέση δεν είναι δική σου, τι μετράς; Το εργαλείο που δίνει η Google για τα δικά σου δεδομένα είναι το Search Console, και το πρώτο που πρέπει να ξέρεις είναι ότι δεν είναι υποχρεωτικό: η ίδια γράφει ότι δεν χρειάζεται να εγγραφείς σε αυτό για να συμπεριληφθείς στα αποτελέσματα (',
      {text: 'About Search Console', href: G_SC_ABOUT},
      '). Δεν αγοράζει παρουσία· δίνει όραση.',
    ]},
    {type: 'paragraph', text: [
      'Το δεύτερο είναι πιο σημαντικό, γιατί η στήλη «μέση θέση» διαβάζεται λάθος από σχεδόν όλους: «The position value shown in the Performance report is the topmost position occupied by a link to your property or page in search results, averaged across all queries in which your property appeared.» (',
      {text: 'What are impressions, position, and clicks?', href: G_SC_POSITION},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Δύο πράγματα κρύβονται εκεί μέσα. Είναι η ',
      {text: 'ανώτατη', strong: true},
      ' θέση που είχες, όχι η τυπική. Και είναι μέσος όρος ',
      {text: 'σε όλα τα ερωτήματα', strong: true},
      ' στα οποία εμφανίστηκες — που δεν είναι ισοδύναμα μεταξύ τους. Ένας αριθμός που κινείται μπορεί να σημαίνει βελτίωση, ή απλώς ότι εμφανίστηκες σε διαφορετικό μείγμα αναζητήσεων. Γι’ αυτό μια εικόνα από ένα εργαλείο δεν αποδεικνύει τίποτα: χωρίς το ερώτημα, την περίοδο, τη χώρα και τη συσκευή, ο αριθμός δεν έχει νόημα.',
    ]},
    {type: 'paragraph', text: [
      'Και για τον χρόνο, η μόνη δήλωση που υπάρχει στην τεκμηρίωση είναι σκόπιμα ανοιχτή: «Some changes might take effect in a few hours, others could take several months.» (',
      {text: 'SEO Starter Guide', href: G_STARTER},
      '). Είναι δήλωση της Google για τα δικά της συστήματα, όχι χρονοδιάγραμμα κανενός. Αν κάποιος σου δώσει σφιχτό αριθμό για το πότε θα αποτυπωθεί μια αλλαγή μέσα στην ίδια την Google, τον έβγαλε από αλλού. Άλλο πράγμα είναι ένας στόχος για τα αιτήματα που σου φέρνει η αναζήτηση, μετρημένος στα δικά σου δεδομένα και συμφωνημένος γραπτά: αυτό δεν το λέει η Google, το αναλαμβάνει ο συνεργάτης σου.',
    ]},

    {type: 'heading', text: 'Τι να ρωτάς όποιον σου προτείνει SEO'},
    {type: 'paragraph', text: [
      'Το πιο χρήσιμο κομμάτι της τεκμηρίωσης δεν είναι τεχνικό: η Google διατηρεί ολόκληρη σελίδα για το πώς προσλαμβάνεις ειδικό, και δίνει και τις ερωτήσεις. Μία από αυτές, αυτούσια: «Do you follow the Google Search Essentials (previously known as Webmaster Guidelines)?» (',
      {text: 'Do You Need an SEO?', href: G_HIRING},
      '). Προτείνει επίσης να ζητήσεις παραδείγματα προηγούμενης δουλειάς, και να ρωτήσεις τι αποτελέσματα περιμένει ο συνεργάτης, σε τι χρονικό ορίζοντα και πώς θα μετρηθούν.',
    ]},
    {type: 'paragraph', text: [
      'Αυτές τις ερωτήσεις δεν τις απαντάμε εμείς για λογαριασμό σου: ρώτησέ τες σε όποιον σου κάνει προσφορά, συμπεριλαμβανομένων και ημών. Η απάντηση είναι το μισό της αξιολόγησης· το άλλο μισό είναι το αν σου εξηγήθηκε με λέξεις που καταλαβαίνεις.',
    ]},
    {type: 'paragraph', text: [
      'Η ίδια σελίδα δίνει και προειδοποιήσεις, πιο κοφτές απ’ όσο περιμένεις από επίσημο κείμενο: «Beware of SEOs that claim to guarantee rankings, allege a \'special relationship\' with Google, or advertise a \'priority submit\' to Google.» (',
      {text: 'Do You Need an SEO?', href: G_HIRING},
      '). Και οι τρεις κόκκινες σημαίες κυκλοφορούν αυτούσιες στην ελληνική αγορά.',
    ]},
    {type: 'paragraph', text: [
      'Ακολουθεί μια δεύτερη, την οποία ελέγχεις μόνος σου μέσα σε μια συνάντηση: «Be careful if a company is secretive or won’t clearly explain what they intend to do.» (',
      {text: 'Do You Need an SEO?', href: G_HIRING},
      '). Η μυστικοπάθεια στο SEO δεν προστατεύει τεχνογνωσία· συνήθως προστατεύει το ότι δεν γίνεται τίποτα, ή ότι γίνεται κάτι που δεν θα ήθελες να μάθεις.',
    ]},
    {type: 'paragraph', text: [
      'Και η πρόταση που κάνει το θέμα δικό σου, όχι του συνεργάτη σου: «If an SEO creates deceptive or misleading content on your behalf, your site could be removed entirely from Google’s index.» (',
      {text: 'Do You Need an SEO?', href: G_HIRING},
      '). Το ρίσκο κάθεται πάνω στο δικό σου domain. Ο συνεργάτης φεύγει· η διεύθυνσή σου μένει.',
    ]},

    {type: 'heading', text: 'Τι μένει, πρακτικά'},
    {type: 'paragraph', text: [
      'Αν σβήσεις όλα τα εισαγωγικά και κρατήσεις μόνο το συμπέρασμα, το SEO για μια μικρή ή μεσαία επιχείρηση είναι πέντε πράγματα, όλα μέσα στη στήλη που ελέγχεις:',
    ]},
    {type: 'list', ordered: true, items: [
      ['Να μπορεί να διαβαστεί η ιστοσελίδα σου: τίποτα να μην την μπλοκάρει, να απαντά σωστά, να έχει κείμενο μέσα της.'],
      ['Να λέει η κάθε σελίδα ένα πράγμα, με τα λόγια που θα χρησιμοποιούσε ο πελάτης όταν το ψάχνει.'],
      ['Να υπάρχουν πάνω στη σελίδα οι λέξεις που θέλεις να μπορούν να χρησιμοποιηθούν, γιατί από εκεί και μόνο βγαίνει ό,τι δείχνει η Google.'],
      ['Να είναι φανερό ποιος είσαι και πού βρίσκεσαι, γιατί η αξιοπιστία είναι το σκέλος που η τεκμηρίωση βάζει πρώτο.'],
      ['Να μη γίνεται τίποτα από όσα ορίζονται ως χειραγώγηση, γιατί το ρίσκο μένει σε εσένα ακόμα κι όταν το κάνει κάποιος άλλος.'],
    ]},
    {type: 'paragraph', text: [
      'Αυτά είναι όλα. Δεν είναι λίγα σε δουλειά, αλλά είναι πεπερασμένα και κανένα τους δεν είναι μυστικό. Ό,τι υπόσχεται περισσότερα, υπόσχεται τη δεύτερη και την τρίτη στήλη.',
    ]},

    {type: 'sources', heading: 'Πηγές', items: [
      {label: 'Google Search Central, SEO Starter Guide — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_STARTER},
      {label: 'Google Search Central, In-depth guide to how Google Search works — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_HOWSEARCH},
      {label: 'Google Search Essentials — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_ESSENTIALS},
      {label: 'Google Search Central, Google Search technical requirements — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_TECHNICAL},
      {label: 'Google Search Central, Do You Need an SEO? Tips for Hiring an SEO — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_HIRING},
      {label: 'Google Search Central, Spam policies for Google web search — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SPAM},
      {label: 'Google Search Central, Creating helpful, reliable, people-first content — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_HELPFUL},
      {label: 'Google Search Central, A guide to Google Search ranking systems — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_RANKING_SYSTEMS},
      {label: 'Google Search Central, Google Search’s core updates — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_CORE_UPDATES},
      {label: 'Google Search Central, Debugging drops in Google Search traffic — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_DROPS},
      {label: 'Google Search Central, Control your title links in search results — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_TITLES},
      {label: 'Google Search Central, Control your snippets in search results — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SNIPPET},
      {label: 'Google Search Central, Intro to structured data markup in Google Search — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_STRUCTURED},
      {label: 'Google Search Central, Understanding page experience in Google Search results — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_PAGE_EXPERIENCE},
      {label: 'Google Search Central, AI features and your website — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_AI},
      {label: 'Search Console Help, What are impressions, position, and clicks? — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SC_POSITION},
      {label: 'Search Console Help, About Search Console — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SC_ABOUT},
      {label: 'Search Console Help, Manual actions report — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SC_MANUAL},
      {label: 'Google, How Search Works: Ranking results — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_RANKING_RESULTS},
    ]},
  ],
};

export default post;
