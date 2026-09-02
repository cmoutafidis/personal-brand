import type {BlogPost} from '@/types/blog';

// Άρθρο 13. Χωρίζει το τεκμηριωμένο από το πωλούμενο στο «AI SEO».
// Κάθε ισχυρισμός για το πώς συμπεριφέρεται ένα σύστημα τρίτου παρατίθεται αυτούσιος από την
// τεκμηρίωση του ίδιου του συστήματος, με τη σελίδα του δίπλα. Καμία υπόσχεση εμφάνισης, καμία
// μέτρηση της Fiji, κανένα ποσοστό, καμία τιμή.
// Δεν ξαναεξηγεί τα τρία στάδια (crawl/index/serve) ούτε το noindex ως έννοια — αυτά ανήκουν στο
// «Γιατί δεν εμφανίζεται η ιστοσελίδα σου στην Google». Δεν ξαναγράφει την εγγυημένη θέση ως όρο
// ανάθεσης — αυτό ανήκει στο «τι να ζητάς γραπτά».

const G_AI = 'https://developers.google.com/search/docs/appearance/ai-features';
const G_CRAWLERS = 'https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers';
const G_COMMON = 'https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers';
const G_FETCHERS = 'https://developers.google.com/search/docs/crawling-indexing/google-user-triggered-fetchers';
const G_ROBOTS_SPEC = 'https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt';
const G_ROBOTS_INTRO = 'https://developers.google.com/search/docs/crawling-indexing/robots/intro';
const G_META = 'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag';
const G_BLOG_AI = 'https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search';
const G_BLOG_GENAI = 'https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports';
const G_SC_GENAI = 'https://support.google.com/webmasters/answer/16984139?hl=en';
const G_SC_CONTROL = 'https://support.google.com/webmasters/answer/16908024?hl=en';
const G_SC_IMPR = 'https://support.google.com/webmasters/answer/7042828?hl=en';
const G_STRUCTURED = 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data';
const OPENAI_BOTS = 'https://developers.openai.com/api/docs/bots';
const ANTHROPIC_BOTS = 'https://support.claude.com/en/articles/8896518';
const CCBOT = 'https://commoncrawl.org/ccbot';
const PERPLEXITY = 'https://docs.perplexity.ai/guides/bots';
const APPLEBOT = 'https://support.apple.com/en-us/119829';
const BING_AIPERF = 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview';
const BING_INSIGHTS = 'https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare';
const MS_ADS = 'https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers';
const INDEXNOW = 'https://www.indexnow.org/';
const CLOUDFLARE = 'https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/';
const RFC9309 = 'https://www.rfc-editor.org/rfc/rfc9309.html';
const ROBOTSTXT_ORG = 'https://www.robotstxt.org/robotstxt.html';

const A_SEO = '/el/blog/ti-einai-to-seo';
const A_GSC = '/el/blog/google-search-console-ti-sou-leei';

const post: BlogPost = {
  id: 'istoselida-stis-apantiseis-ai',
  slug: 'istoselida-stis-apantiseis-ai',
  title: 'Η ιστοσελίδα σου στις απαντήσεις της τεχνητής νοημοσύνης: τι είναι μετρήσιμο και τι μάρκετινγκ',
  metaTitle: 'Η ιστοσελίδα σου στις απαντήσεις AI: τι μετριέται',
  excerpt: 'Ποιοι crawlers υπάρχουν, ποιος διακόπτης κλείνει τι και τι μετράει πραγματικά το Search Console. Και ποια υπόσχεση δεν την ελέγχει κανείς.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 20,
  tags: ['Αναζήτηση', 'Ιστοσελίδες', 'Ανάθεση έργου'],
  body: [
    {type: 'paragraph', text: [
      'Πουλιέται καινούργια υπηρεσία με καινούργια ονόματα: «AI ορατότητα», «GEO», «βελτιστοποίηση για τις απαντήσεις της τεχνητής νοημοσύνης». Το θέμα υπάρχει πραγματικά. Απλώς μέσα του έχουν μπερδευτεί ',
      {text: 'δύο εντελώς διαφορετικά πράγματα', strong: true},
      ': κάτι που είναι γραμμένο, ελέγξιμο και μετρήσιμο, και κάτι που δεν το ελέγχει ούτε αυτός που στο πουλάει.',
    ]},
    {type: 'paragraph', text: [
      'Τεκμηριωμένο είναι το ποιοι αυτόματοι επισκέπτες περνούν από την ιστοσελίδα σου, με ποιο όνομα δηλώνεται ο καθένας, ποιον διακόπτη κλείνει ποιο αρχείο, και τι ακριβώς μετράνε τα εργαλεία της Google και της Microsoft. Μάρκετινγκ είναι κάθε πρόταση της μορφής «θα σε αναφέρει το ChatGPT». Κανένα σύστημα δεν το υπόσχεται αυτό — η ίδια η Google γράφει για τις δικές της AI λειτουργίες: ',
      {text: "«Indexing and serving isn't guaranteed.»", href: G_AI},
    ]},
    {type: 'paragraph', text: [
      'Παρακάτω είναι πρώτα τα τεκμηριωμένα, με την πρόταση της πηγής δίπλα σε κάθε ισχυρισμό, και μετά τα σημεία όπου η αγορά λέει κάτι που η τεκμηρίωση δεν το λέει. Δεν θα βρεις εδώ ούτε μία συμβουλή που να στηρίζεται σε δικές μας μετρήσεις αποτελεσμάτων: δεν υπάρχουν, και δεν έχει νόημα να τις φανταστούμε.',
    ]},
    {type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε πρόταση που παρατίθεται εδώ διαβάστηκε εκείνη τη μέρα στη σελίδα που τη συνοδεύει. Μένουν στα αγγλικά επίτηδες: έτσι είναι γραμμένες στην πηγή, και έτσι μπορείς να τις ελέγξεις μόνος σου με μια αναζήτηση μέσα στη σελίδα.',
    ]},

    {type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Χρειάζεται ξεχωριστή δουλειά για να εμφανίζομαι στις AI απαντήσεις της Google;', a: 'Η τεκμηρίωση της Google λέει όχι. Γράφει ότι δεν υπάρχουν πρόσθετες απαιτήσεις ούτε ειδικές βελτιστοποιήσεις, και ότι δεν χρειάζεται να φτιάξεις κανένα νέο μηχαναγνώσιμο αρχείο ούτε ειδικό schema. Η προϋπόθεση είναι η σελίδα να είναι στο ευρετήριο και επιλέξιμη να εμφανιστεί με απόσπασμα.'},
      {q: 'Μπορεί κάποιος να μου εγγυηθεί ότι θα με αναφέρει το ChatGPT ή η Google;', a: 'Όχι. Η Google γράφει ότι η ευρετηρίαση και η προβολή δεν είναι εγγυημένες ακόμη κι όταν τα πληροίς όλα. Η Microsoft γράφει ότι δεν υπάρχει μυστική στρατηγική για να σε διαλέξει ένα AI σύστημα. Η OpenAI υπόσχεται μόνο το αντίστροφο: ότι όποιος έχει εξαιρεθεί δεν θα εμφανίζεται.'},
      {q: 'Αν μπλοκάρω το GPTBot, βγαίνω από την αναζήτηση του ChatGPT;', a: 'Όχι. Είναι δύο διαφορετικά ρομπότ με διαφορετική δουλειά: το GPTBot αφορά την εκπαίδευση μοντέλων, το OAI-SearchBot την αναζήτηση. Η OpenAI γράφει ρητά ότι κάθε ρύθμιση είναι ανεξάρτητη από τις άλλες.'},
      {q: 'Το Google-Extended κλείνει τα AI Overviews;', a: 'Όχι, και αυτό είναι το πιο συχνό λάθος της αγοράς. Το Google-Extended αφορά την εκπαίδευση και τη θεμελίωση των μοντέλων Gemini, και η Google γράφει ότι δεν επηρεάζει ούτε τη συμπερίληψη ούτε την κατάταξη στην Αναζήτηση. Τα AI Overviews και το AI Mode ελέγχονται από άλλα εργαλεία.'},
      {q: 'Βλέπω πουθενά πόση επισκεψιμότητα μου φέρνουν οι AI απαντήσεις;', a: 'Στο Search Console. Από τις 31 Αυγούστου 2026 η αναφορά generative AI είναι διαθέσιμη σε όλους τους ιστότοπους παγκοσμίως και δείχνει πόσες φορές εμφανίστηκαν σύνδεσμοι προς εσένα μέσα σε ένα generative AI χαρακτηριστικό. Δεν είναι δεύτερη ανεξάρτητη μέτρηση: αντλεί από τον ίδιο τύπο αναζήτησης Web της κανονικής αναφοράς επιδόσεων.'},
      {q: 'Το robots.txt εμποδίζει τα AI να διαβάσουν τη σελίδα μου;', a: 'Όχι με βεβαιότητα. Είναι αίτημα, όχι κλειδαριά. Η επίσημη σελίδα του πρωτοκόλλου γράφει ότι τα ρομπότ μπορούν να το αγνοήσουν, και οι fetchers που ενεργοποιεί ο ίδιος ο χρήστης — της Google, της OpenAI, της Perplexity — γενικά δεν το τηρούν.'},
    ]},

    {type: 'heading', text: 'Τι λέει η ίδια η Google ότι χρειάζεται, και τι λέει ότι δεν χρειάζεται'},
    {type: 'paragraph', text: [
      'Ξεκίνα από την πρόταση που κάνει περιττή τη μισή προσφορά που θα δεχτείς. Στη σελίδα της για τις AI λειτουργίες η Google γράφει: «There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary.» (',
      {text: 'AI features and your website', href: G_AI},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Και συνεχίζει, για να μην αφήσει περιθώριο ερμηνείας: ',
      {text: "«You don't need to create new machine readable files, AI text files, or markup to appear in these features. There's also no special schema.org structured data that you need to add.»", href: G_AI},
      ' Αν κάποιος σου προτείνει να ανεβάσεις ένα καινούργιο αρχείο στη ρίζα της ιστοσελίδας σου «για να σε διαβάζουν τα AI», αυτή είναι η πρόταση που του δείχνεις.',
    ]},
    {type: 'paragraph', text: [
      'Τι χρειάζεται τότε; Ακριβώς τα ίδια που χρειαζόσουν και πριν: «To be eligible to be shown as a supporting link in AI Overviews or AI Mode, a page must be indexed and eligible to be shown in Google Search with a snippet» (',
      {text: 'AI features and your website', href: G_AI},
      '). Δηλαδή η δουλειά είναι η γνωστή δουλειά, και αν δεν είσαι σίγουρος τι περιλαμβάνει και τι όχι, υπάρχει χωριστό κείμενο για το ',
      {text: 'τι είναι το SEO και ποιο κομμάτι του ελέγχεις πραγματικά', href: A_SEO},
      '.',
    ]},
    {type: 'paragraph', text: [
      'Ένα πράγμα όμως αλλάζει στ’ αλήθεια, και δεν είναι αυτό που πουλιέται. Η Google γράφει ότι και τα AI Overviews και το AI Mode μπορεί να χρησιμοποιήσουν τεχνική «query fan-out»: ',
      {text: 'Both AI Overviews and AI Mode may use a "query fan-out" technique — issuing multiple related searches across subtopics and data sources — to develop a response.', href: G_AI},
      ' Μία ερώτηση του χρήστη γίνεται πολλές παράλληλες αναζητήσεις σε υποθέματα. Το συμπέρασμα που βγάζω εγώ από αυτό — δικό μου, όχι της Google — είναι ότι μια σελίδα που απαντά καθαρά σε ένα συγκεκριμένο υποερώτημα έχει περισσότερους τρόπους να βρεθεί από μια σελίδα που λέει λίγο από όλα. Αυτό δεν είναι νέα τεχνική· είναι ο ίδιος λόγος για τον οποίο μια σελίδα ανά θέμα δούλευε και πριν.',
    ]},
    {type: 'paragraph', text: [
      'Και το τελευταίο, που το κρατάς για κάθε συζήτηση περί εγγυήσεων: ',
      {text: "«Just because a page meets all requirements, best practices, and complies with the policies, doesn't mean that Google will crawl, index, or serve its content. Indexing and serving isn't guaranteed.»", href: G_AI},
    ]},

    {type: 'heading', text: 'Πέντε διακόπτες που δεν κάνουν το ίδιο πράγμα'},
    {type: 'paragraph', text: [
      'Η αγορά μιλάει για «μπλοκάρισμα των AI» σαν να υπάρχει ένας διακόπτης. Είναι πέντε, κάνουν διαφορετικά πράγματα, και ο πιο διάσημος από όλους δεν κάνει αυτό που νομίζει ο κόσμος ότι κάνει.',
    ]},
    {type: 'table', caption: 'Τι ελέγχει ο καθένας — και τι δεν ελέγχει.', head: ['Εργαλείο', 'Τι ελέγχει', 'Τι δεν ελέγχει'], rows: [
      [[{text: 'robots.txt για Googlebot', strong: true}], ['Το αν ανιχνεύεται η ιστοσελίδα σου για την Αναζήτηση — και η AI είναι ενσωματωμένη μέσα στην Αναζήτηση'], ['Δεν κρατάει μια σελίδα εκτός Google· η ίδια η τεκμηρίωση λέει ότι δεν είναι μηχανισμός για αυτό']],
      [[{text: 'noindex', strong: true}], ['Το αν η σελίδα υπάρχει καθόλου στα αποτελέσματα'], ['Δεν είναι επιλεκτικό: ό,τι φεύγει από την Αναζήτηση φεύγει και από τις AI λειτουργίες της']],
      [[{text: 'nosnippet και max-snippet', strong: true}], ['Το απόσπασμα, και επιπλέον το πόσο από το περιεχόμενο μπορεί να χρησιμοποιηθεί ως άμεση είσοδος στα AI Overviews και στο AI Mode'], ['Δεν εμποδίζει την ανίχνευση ούτε την ευρετηρίαση της σελίδας']],
      [[{text: 'Search generative AI control', strong: true}], ['Το αν το περιεχόμενό σου μπορεί να εμφανιστεί στα generative AI χαρακτηριστικά της Αναζήτησης· η προεπιλογή σε κάθε property είναι η συμπερίληψη'], ['Δεν αφορά την εκπαίδευση μοντέλων και δεν χρησιμοποιείται ως σήμα κατάταξης αλλού μέσα στην Αναζήτηση']],
      [[{text: 'Google-Extended', strong: true}], ['Την εκπαίδευση και το grounding των μοντέλων Gemini'], ['Δεν επηρεάζει ούτε τη συμπερίληψη ούτε την κατάταξη στην Google Αναζήτηση — και δεν είναι καν crawler']],
    ]},
    {type: 'paragraph', text: [
      'Η πρώτη γραμμή είναι πιο σημαντική απ’ όσο φαίνεται, γιατί εξηγεί γιατί δεν υπάρχει ξεχωριστός διακόπτης «AI» στη Google: «AI is built into Search and integral to how Search functions, which is why robots.txt directives for Googlebot is the control for site owners to manage access to how their sites are crawled for Search.» (',
      {text: 'AI features and your website', href: G_AI},
      '). Ταυτόχρονα η ίδια η Google γράφει για το robots.txt: ',
      {text: 'This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google.', href: G_ROBOTS_INTRO},
    ]},
    {type: 'paragraph', text: [
      'Το nosnippet είναι το εργαλείο που άλλαξε νόημα χωρίς να αλλάξει όνομα. Δεν κρύβει πια απλώς το απόσπασμα: η τεκμηρίωση γράφει ότι ',
      {text: 'will also prevent the content from being used as a direct input for AI Overviews and AI Mode.', href: G_META},
      ' Το max-snippet αντίστοιχα ',
      {text: 'will also limit how much of the content may be used as a direct input for AI Overviews and AI Mode.', href: G_META},
      ' Δηλαδή μια ρύθμιση που ίσως έβαλε κάποιος πριν χρόνια για να μη «φαίνεται πολύ κείμενο» στα αποτελέσματα, σήμερα κόβει και κάτι άλλο.',
    ]},
    {type: 'paragraph', text: [
      'Αν έχεις πολλαπλές οδηγίες σε διαφορετικά σημεία, μην ψάχνεις ποια «κερδίζει» με τη λογική: ',
      {text: 'In the case of conflicting robots rules, the more restrictive rule applies.', href: G_META},
      ' Και στη γενική της καθοδήγηση για τις AI εμπειρίες η Google το λέει με μία γραμμή: ',
      {text: 'More restrictive permissions will limit how your content is featured in our AI experiences.', href: G_BLOG_AI},
    ]},
    {type: 'paragraph', text: [
      'Ο τέταρτος διακόπτης είναι ο καινούργιος. Στις ρυθμίσεις του Search Console υπάρχει πλέον το Search generative AI control, και η βοήθεια γράφει ότι η συμπερίληψη είναι το προεπιλεγμένο: «This is the default control for all properties.» Αν επιλέξεις εξαίρεση, ',
      {text: "«This control only affects whether your content can appear in certain Search generative AI features; this control isn't used as a ranking or inclusion signal affecting other parts of Search.»", href: G_SC_CONTROL},
      ' Η ίδια σελίδα σημειώνει ότι ',
      {text: 'Content will be excluded within 1-2 days after the control goes live, but some content may take longer to be excluded due to caching and propagation across Google systems.', href: G_SC_CONTROL},
      ' — τεκμηριωμένη συμπεριφορά της Google, όχι χρονοδιάγραμμα δικής μας δουλειάς.',
    ]},
    {type: 'paragraph', text: [
      'Και ο πέμπτος, το Google-Extended, είναι εκείνος που η αγορά χρησιμοποιεί λάθος πιο συχνά από κάθε άλλον. Η βοήθεια του Search Console λέει ρητά ότι ο διακόπτης της Αναζήτησης ',
      {text: "«This control doesn't affect AI training; to limit training of the models used to generate responses in Search generative AI features, use Google-Extended .»", href: G_SC_CONTROL},
      ' Και η σελίδα των crawlers λέει το αντίστροφο για το ίδιο το Google-Extended: ',
      {text: "«Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search.»", href: G_COMMON},
      ' Δύο διαφορετικά κουμπιά, δύο διαφορετικά αποτελέσματα. Όποιος σου πει ότι έκλεισε τα AI Overviews βάζοντας Google-Extended στο robots.txt, δεν έκλεισε τίποτα από αυτά.',
    ]},
    {type: 'paragraph', text: [
      'Υπάρχει και μια λεπτομέρεια που εξηγεί γιατί δεν θα δεις ποτέ το Google-Extended στα αρχεία καταγραφής σου: ',
      {text: "«Google-Extended doesn't have a separate HTTP request user agent string. Crawling is done with existing Google user agent strings; the robots.txt user-agent token is used in a control capacity.»", href: G_COMMON},
      ' Δεν είναι επισκέπτης. Είναι μόνο μια λέξη μέσα σε ένα αρχείο.',
    ]},

    {type: 'heading', text: 'Τα ονόματα που θα δεις στα αρχεία καταγραφής'},
    {type: 'paragraph', text: [
      'Κάθε λίστα «AI crawlers» που κυκλοφορεί σε ιστολόγια είναι ήδη λάθος σε τουλάχιστον ένα σημείο, γιατί τα ονόματα αλλάζουν. Παράδειγμα από την ίδια την τεκμηρίωση της Google: ο fetcher του NotebookLM είναι πλέον Google-GeminiNotebook, ενώ το παλιό Google-NotebookLM καταχωρείται ως «Former agent (supported until August 2026)» (',
      {text: 'Google user-triggered fetchers', href: G_FETCHERS},
      '). Ο παρακάτω πίνακας γράφει, για κάθε όνομα, τι λέει ο ίδιος ο κάτοχός του ότι κάνει.',
    ]},
    {type: 'table', caption: 'Ποιος περνάει, με ποιο όνομα, και για ποια δουλειά — σύμφωνα με την τεκμηρίωση του καθενός.', head: ['Ποιος', 'Όνομα στο robots.txt', 'Για τι είναι'], rows: [
      [['Google'], [{text: 'Googlebot', strong: true}], ['Η ανίχνευση για την Αναζήτηση — και άρα ο έλεγχος για ό,τι τρέχει μέσα της, AI Overviews και AI Mode συμπεριλαμβανομένων']],
      [['Google'], [{text: 'Google-Extended', strong: true}], ['Μόνο token ελέγχου για εκπαίδευση και grounding των Gemini· χωρίς δικό του user agent']],
      [['Google'], [{text: 'Google-GeminiNotebook', strong: true}], ['Ο σημερινός fetcher του NotebookLM· το Google-NotebookLM είναι το παλιό όνομα']],
      [['OpenAI'], [{text: 'OAI-SearchBot', strong: true}], ['Η εμφάνιση στα αποτελέσματα αναζήτησης του ChatGPT']],
      [['OpenAI'], [{text: 'GPTBot', strong: true}], ['Η εκπαίδευση των foundation models — όχι η αναζήτηση']],
      [['OpenAI'], [{text: 'ChatGPT-User', strong: true}], ['Ενεργοποιείται από ενέργεια χρήστη· δεν κρίνει το αν εμφανίζεσαι στην αναζήτηση']],
      [['OpenAI'], [{text: 'OAI-AdsBot', strong: true}], ['Ελέγχει σελίδες προορισμού που υποβλήθηκαν ως διαφημίσεις στο ChatGPT']],
      [['Anthropic'], [{text: 'Claude-SearchBot', strong: true}], ['Ευρετηρίαση περιεχομένου για την αναζήτηση']],
      [['Perplexity'], [{text: 'PerplexityBot', strong: true}], ['Εμφάνιση και σύνδεση ιστότοπων στα αποτελέσματα· ρητά όχι εκπαίδευση μοντέλων']],
      [['Perplexity'], [{text: 'Perplexity-User', strong: true}], ['Ενεργοποιείται από τον χρήστη']],
      [['Apple'], [{text: 'Applebot και Applebot-Extended', strong: true}], ['Το δεύτερο είναι το opt-out από την εκπαίδευση των generative μοντέλων']],
      [['Common Crawl'], [{text: 'CCBot', strong: true}], ['Δημόσιο αρχείο του ιστού· δηλώνεται ως CCBot/2.0']],
    ]},
    {type: 'paragraph', text: [
      'Η OpenAI είναι η πιο ρητή για το γιατί έχει σημασία η διάκριση: «Each setting is independent of the others – for example, a webmaster can allow OAI-SearchBot in order to appear in search results while disallowing GPTBot to indicate that crawled content should not be used for training OpenAI’s generative AI foundation models.» (',
      {text: 'OpenAI crawlers', href: OPENAI_BOTS},
      '). Πρόσεξε τι υπόσχεται και τι δεν υπόσχεται: ',
      {text: 'Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still appear as navigational links.', href: OPENAI_BOTS},
      ' Δηλαδή σου εγγυάται μόνο την αρνητική κατεύθυνση — ότι αν εξαιρεθείς δεν θα φαίνεσαι. Δεν υπάρχει πουθενά η αντίστροφη υπόσχεση.',
    ]},
    {type: 'paragraph', text: [
      'Το ChatGPT-User είναι η δεύτερη παγίδα της ίδιας σελίδας: ',
      {text: 'Because these actions are initiated by a user, robots.txt rules may not apply. ChatGPT-User is not used to determine whether content may appear in Search.', href: OPENAI_BOTS},
      ' Άρα ούτε το μπλοκάρεις με σιγουριά, ούτε αλλάζει το αν εμφανίζεσαι.',
    ]},
    {type: 'paragraph', text: [
      'Η Anthropic γράφει ότι «Anthropic’s Bots respect “do not crawl” signals by honoring industry standard directives in robots.txt.» και είναι από τους λίγους που γράφουν ανοιχτά το κόστος του αποκλεισμού: ',
      {text: "«Disabling Claude-SearchBot on your site prevents our system from indexing your content for search optimization, which may reduce your site's visibility and accuracy in user search results.»", href: ANTHROPIC_BOTS},
      ' Και προειδοποιεί για τη λύση που προτείνουν συχνά οι τεχνικοί: ',
      {text: 'Alternate methods like blocking IP address(es) from which Anthropic Bots operates may not work correctly or persistently guarantee an opt-out, as doing so impedes our ability to read your robots.txt file.', href: ANTHROPIC_BOTS},
      ' Αν κόψεις τις διευθύνσεις, κόβεις και την ανάγνωση του αρχείου με το οποίο ζητάς να μη σε σαρώσουν.',
    ]},
    {type: 'paragraph', text: [
      'Η Perplexity χωρίζει τα δικά της με τον ίδιο τρόπο: «PerplexityBot is designed to surface and link websites in search results on Perplexity. It is not used to crawl content for AI foundation models.» (',
      {text: 'Perplexity bots', href: PERPLEXITY},
      '), ενώ για τον δεύτερο γράφει: ',
      {text: 'Since a user requested the fetch, this fetcher generally ignores robots.txt rules.', href: PERPLEXITY},
    ]},
    {type: 'paragraph', text: [
      'Το Common Crawl δεν είναι μηχανή αναζήτησης αλλά καταλήγει σε πολλά σύνολα δεδομένων, και η οδηγία του είναι δύο γραμμές: «To prevent Common Crawl from crawling your website, include the following in your robots.txt» (',
      {text: 'CCBot', href: CCBOT},
      ').',
    ]},

    {type: 'subheading', text: 'Η παγίδα του Applebot'},
    {type: 'paragraph', text: [
      'Αυτή αξίζει ξεχωριστή παράγραφο γιατί χτυπάει σιωπηλά. Η Apple γράφει: ',
      {text: "«If robots instructions don't mention Applebot but mention Googlebot, the Apple robot will follow Googlebot instructions. Applebot does not follow crawl-delay.»", href: APPLEBOT},
      ' Δηλαδή ένα Disallow που γράφτηκε «για την Google» εφαρμόζεται και στο Spotlight, στο Siri και στα προτεινόμενα του Safari, χωρίς να το γράψει ποτέ κανείς και χωρίς να το δεις πουθενά.',
    ]},
    {type: 'paragraph', text: [
      'Η Apple χωρίζει επίσης τα δύο επίπεδα καθαρά. Για την εκπαίδευση: «Web publishers can opt-out from having their content used to train generative foundation models by disallowing Applebot-Extended in the robots.txt file.» Για τις απαντήσεις γενικής γνώσης: ',
      {text: 'Web publishers can opt out of their content being used in these broad world knowledge answers by applying the nosnippet meta tag to specific content.', href: APPLEBOT},
      ' Δύο διαφορετικά εργαλεία, ξανά, για δύο διαφορετικά πράγματα.',
    ]},

    {type: 'heading', text: 'Το robots.txt είναι αίτημα, όχι κλειδαριά'},
    {type: 'paragraph', text: [
      'Όλα τα παραπάνω στηρίζονται σε ένα αρχείο κειμένου που κανείς δεν είναι υποχρεωμένος να διαβάσει. Η επίσημη σελίδα του πρωτοκόλλου το γράφει χωρίς περιστροφές: «robots can ignore your /robots.txt.» (',
      {text: 'About /robots.txt', href: ROBOTSTXT_ORG},
      '). Και προσθέτει κάτι που ξεχνιέται συνέχεια: ',
      {text: "the /robots.txt file is a publicly available file. Anyone can see what sections of your server you don't want robots to use.", href: ROBOTSTXT_ORG},
    ]},
    {type: 'paragraph', text: [
      'Δεν είναι καν εφεύρεση της εποχής της τεχνητής νοημοσύνης. Το πρότυπο RFC 9309 του 2022 γράφει: «This document specifies and extends the "Robots Exclusion Protocol" method originally defined by Martijn Koster in 1994 for service owners to control how content served by their services may be accessed, if at all, by automatic clients known as crawlers.» (',
      {text: 'RFC 9309', href: RFC9309},
      '). Το «if at all» είναι η ουσία: το πρωτόκολλο περιγράφει ένα αίτημα προς καλόπιστους πελάτες.',
    ]},
    {type: 'paragraph', text: [
      'Οι μεγάλοι το τηρούν στις αυτόματες σαρώσεις — η Google γράφει για τους κοινούς crawlers της «They always respect robots.txt rules for automatic crawls.» — αλλά υπάρχουν δύο κατηγορίες που δεν το κάνουν. Η πρώτη είναι όσα ενεργοποιεί ο ίδιος ο χρήστης: ',
      {text: 'Because the fetch was requested by a user, these fetchers generally ignore robots.txt rules.', href: G_FETCHERS},
      ' Η δεύτερη είναι οι ειδικές περιπτώσεις: ',
      {text: "«For example, AdsBot ignores the global robots.txt user agent ( * ) with the ad publisher's permission.»", href: G_CRAWLERS},
      ' Οπότε το «θα εμποδίσουμε τα AI να διαβάσουν τη σελίδα σου» δεν είναι πρόταση που μπορεί να υποσχεθεί κάποιος. Το «θα δηλώσουμε ρητά τι δεν θέλεις» είναι.',
    ]},
    {type: 'paragraph', text: [
      'Ούτε ισχύει ακαριαία, και οι ίδιες οι εταιρείες γράφουν γιατί. Η Google: «Google generally caches the contents of robots.txt file for up to 24 hours» (',
      {text: 'robots.txt specification', href: G_ROBOTS_SPEC},
      '). Το πρότυπο επιτρέπει ρητά αυτή τη συμπεριφορά: ',
      {text: "«Crawlers MAY cache the fetched robots.txt file's contents»", href: RFC9309},
      '. Και η OpenAI: ',
      {text: 'For search results, please note it can take ~24 hours from a site’s robots.txt update for our systems to adjust.', href: OPENAI_BOTS},
      ' Είναι τεκμηριωμένες συμπεριφορές τρίτων, όχι προθεσμία που αναλαμβάνει κάποιος απέναντί σου.',
    ]},

    {type: 'heading', text: 'Μία οδηγία, τρεις διαφορετικές απαντήσεις'},
    {type: 'paragraph', text: [
      'Αν θέλεις ένα μόνο παράδειγμα του γιατί δεν υπάρχει «σωστό robots.txt για τα AI», πάρε το crawl-delay. Η Google γράφει: ',
      {text: "«Google supports the following fields (other fields such as crawl-delay aren't supported):»", href: G_ROBOTS_SPEC},
      ' Η Anthropic γράφει το αντίθετο για τα δικά της: ',
      {text: 'To limit crawling activity, we support the non-standard Crawl-delay extension to robots.txt.', href: ANTHROPIC_BOTS},
      ' Και η Apple, στην ίδια πρόταση που είδες πιο πάνω, λέει ότι το Applebot δεν το ακολουθεί. Τρεις εταιρείες, τρεις συμπεριφορές, μία γραμμή κειμένου.',
    ]},
    {type: 'paragraph', text: [
      'Στην ίδια σελίδα προδιαγραφών υπάρχουν και δύο όρια που τα βρίσκει κανείς μόνο όταν τον πονέσουν. Η Google υποστηρίζει τέσσερα μόνο πεδία — user-agent, allow, disallow, sitemap — και επιβάλλει όριο μεγέθους: ',
      {text: 'Google enforces a robots.txt file size limit of 500 kibibytes (KiB).', href: G_ROBOTS_SPEC},
      ' Ό,τι γράψεις μετά από εκεί δεν διαβάζεται. Ένα robots.txt που έχει μεγαλώσει με τα χρόνια, με δεκάδες κανόνες για δεκάδες ρομπότ, είναι ακριβώς το αρχείο που κινδυνεύει να έχει τη σημαντική του γραμμή στο τέλος.',
    ]},

    {type: 'heading', text: 'Τι μετριέται πραγματικά, και πού'},
    {type: 'paragraph', text: [
      'Εδώ είναι το κομμάτι που άλλαξε μέσα στο καλοκαίρι, και είναι ο λόγος που το άρθρο γράφεται τώρα. Μέχρι πρόσφατα η απάντηση στο «πόσο κόσμο μου φέρνουν οι AI απαντήσεις» ήταν ότι δεν ξεχωρίζει. Η Google εξηγούσε ήδη ότι η επισκεψιμότητα δεν είναι αόρατη: «Just like the rest of the search results page, sites appearing in AI features (such as AI Overviews and AI Mode) are included in the overall search traffic in Search Console» (',
      {text: 'AI features and your website', href: G_AI},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Στις 3 Ιουνίου 2026 ανακοίνωσε ξεχωριστή αναφορά «Generative AI performance», και στην ίδια ανάρτηση σημειώνει: ',
      {text: "«Note: As of August 31, 2026, we've rolled out these insights to all websites worldwide.»", href: G_BLOG_GENAI},
      ' Δηλαδή δύο μέρες πριν γραφτεί αυτό το κείμενο. Αν κάποιος σου έχει πει τους τελευταίους μήνες ότι «δεν φαίνεται πουθενά», ίσχυε τότε και δεν ισχύει τώρα.',
    ]},
    {type: 'paragraph', text: [
      'Τι δείχνει: «Impressions are how many times links to your site were shown to a user in a generative AI feature on Google Search.» (',
      {text: 'Generative AI performance report', href: G_SC_GENAI},
      '). Και τι δεν είναι: δεύτερη, ανεξάρτητη πηγή δεδομένων. Η ίδια σελίδα γράφει ότι ',
      {text: 'The generative AI performance report includes data from the Web search type in the Performance report (Search results)', href: G_SC_GENAI},
      ' — αντλεί από τα ίδια νούμερα, δεν προσθέτει καινούργια. Μην αθροίσεις τα δύο, και μην αφήσεις κάποιον να στα αθροίσει σε αναφορά.',
    ]},
    {type: 'paragraph', text: [
      'Δύο ακόμη λεπτομέρειες που αλλάζουν το πώς διαβάζεις τον πίνακα. Πρώτη: ',
      {text: "«Search Console doesn't include data from experiments in Search Labs»", href: G_SC_GENAI},
      ' — ό,τι έχεις δει σε πειραματική λειτουργία δεν μετριέται εκεί. Δεύτερη, για το AI Mode: ',
      {text: 'Clicking a link to an external page in AI Mode counts as a click.', href: G_SC_IMPR},
      ' Αν θέλεις να καταλάβεις τι σου λέει και τι δεν σου λέει αυτό το εργαλείο συνολικά, υπάρχει χωριστό κείμενο για ',
      {text: 'το Google Search Console', href: A_GSC},
      '.',
    ]},

    {type: 'heading', text: 'Το Bing μετράει αλλιώς — και το γράφει το ίδιο'},
    {type: 'paragraph', text: [
      'Η δεύτερη μετρήσιμη πηγή δεν είναι η Google. Από τον Φεβρουάριο του 2026 τα Bing Webmaster Tools έχουν αναφορά AI Performance: «AI Performance extends those insights to AI-generated answers by showing where and how content from your site is referenced as a source across AI experiences.» (',
      {text: 'Bing Webmaster Blog', href: BING_AIPERF},
      ').',
    ]},
    {type: 'paragraph', text: [
      'Και έχει σημασία για περισσότερα από το Bing: «Powered by Bing’s search index, experiences like Microsoft Copilot, Microsoft Start, and others handle billions of queries each month, embedding Bing deeply into how people search, shop, and explore online.» (',
      {text: 'Microsoft Advertising Blog', href: MS_ADS},
      '). Αν δεν έχεις καν καταχωρίσει την ιστοσελίδα σου εκεί, δεν έχεις κοιτάξει ποτέ τη μισή εικόνα.',
    ]},
    {type: 'paragraph', text: [
      'Το πιο χρήσιμο όμως που γράφει η Microsoft είναι τι ',
      {text: 'δεν', strong: true},
      ' σημαίνουν τα νούμερά της: ',
      {text: 'This reflects how often pages are cited, not page importance, ranking, or placement.', href: BING_AIPERF},
      ' Και για τα δείγματα ερωτημάτων: ',
      {text: 'The data shown represents a sample of overall citation activity.', href: BING_AIPERF},
      ' Άρα ένας αριθμός αναφορών δεν είναι θέση, δεν είναι κατάταξη, και δεν είναι πλήρης καταγραφή. Κάθε αναφορά που σου το παρουσιάζει σαν «ανεβήκαμε», το παρουσιάζει λάθος.',
    ]},
    {type: 'paragraph', text: [
      'Από τον Ιούνιο του 2026 υπάρχουν και οι μετρήσεις Intents, Topics, Citation Share και Compare. Η Microsoft ορίζει τη βάση τους καθαρά — «In AI-generated answers, grounding refers to the source material and web evidence the system uses to support and cite its response.» — αλλά παραδέχεται και το στάδιο: ',
      {text: 'During the preview phase, some labels may still be broad', href: BING_INSIGHTS},
      ' Είναι εργαλεία σε προεπισκόπηση. Χρήσιμα για να δεις κατεύθυνση, όχι για να χτίσεις πάνω τους στόχο.',
    ]},
    {type: 'paragraph', text: [
      'Για τον έλεγχο, η ίδια πηγή γράφει ότι ',
      {text: 'Bing respects all content owner preferences expressed through robots.txt and other supported control mechanisms.', href: BING_AIPERF},
      ' Και για την υπόσχεση, η Microsoft είναι εξίσου σαφής με τη Google: ',
      {text: 'While there’s no secret strategy for being selected by AI systems, success starts with content that is fresh, authoritative, structured, and semantically clear.', href: MS_ADS},
    ]},

    {type: 'heading', text: 'Δύο προμηθευτές, δύο απαντήσεις για το schema — και οι δύο σωστές'},
    {type: 'paragraph', text: [
      'Εδώ βρίσκεται η καλύτερη απόδειξη ότι δεν υπάρχει ένας καθολικός κανόνας. Η Google γράφει για τα δικά της AI χαρακτηριστικά ότι δεν χρειάζεσαι ειδικό schema.org structured data. Η Microsoft, για τα δικά της, γράφει ότι το δομημένο και σημασιολογικά καθαρό περιεχόμενο είναι εκεί που αρχίζει η επιτυχία. Καμία από τις δύο δεν λέει ψέματα: ',
      {text: 'η καθεμία περιγράφει το δικό της σύστημα', strong: true},
      '. Το λάθος γίνεται όταν κάποιος πάρει τη μία πρόταση και τη βαφτίσει νόμο του ιστού.',
    ]},
    {type: 'paragraph', text: [
      'Πρακτικά αυτό σημαίνει ότι το structured data παραμένει χρήσιμο, αλλά όχι ως μαγικό κλειδί για τις AI απαντήσεις της Google. Και υπάρχει όριο που το γράφει η ίδια η Google: ',
      {text: "«Don't create blank or empty pages just to hold structured data, and don't add structured data about information that is not visible to the user, even if the information is accurate.»", href: G_STRUCTURED},
      ' Δηλαδή ό,τι δηλώνεις πρέπει να το βλέπει και ο άνθρωπος στη σελίδα. Αν κάποιος σου προτείνει «κρυφό markup για τα AI», σου προτείνει κάτι που η τεκμηρίωση απαγορεύει ρητά.',
    ]},

    {type: 'cta', heading: 'Αν θέλεις να δεις τι από όλα αυτά ισχύει στη δική σου ιστοσελίδα', text: 'Κοιτάμε το robots.txt σου, τι ετικέτες στέλνει η κάθε σελίδα, τι δείχνει το Search Console σου και τι λείπει από το Bing, και σου γράφουμε ποιος διακόπτης είναι κλειστός και τι ακριβώς κλείνει. Γραπτά, με τις πηγές δίπλα.', label: 'Δες τι περιλαμβάνει', href: '/el/offers/website-seo'},

    {type: 'heading', text: 'Μπορεί να αποφασίζει ο πάροχός σου αντί για σένα'},
    {type: 'paragraph', text: [
      'Ένα σημείο που λείπει από κάθε συζήτηση: το robots.txt δεν είναι το μόνο πράγμα ανάμεσα σε εσένα και σε έναν crawler. Την 1η Ιουλίου 2025 η Cloudflare ανακοίνωσε ότι ',
      {text: "«Cloudflare, along with a majority of the world's leading publishers and AI companies, is changing the default to block AI crawlers unless they pay creators for their content.»", href: CLOUDFLARE},
      ' Αν η ιστοσελίδα σου περνάει από τέτοιο δίκτυο, η προεπιλογή μπορεί να μπλοκάρει AI crawlers χωρίς να το έχεις ζητήσει και χωρίς να το γράφει πουθενά το δικό σου αρχείο. Άξιζε να το ξέρεις πριν πληρώσεις κάποιον να «διορθώσει το robots.txt».',
    ]},
    {type: 'paragraph', text: [
      'Στην ίδια λογική «τι δεν κάνει αυτό που νομίζεις» ανήκει και το IndexNow. Είναι πραγματικό και χρήσιμο, αλλά η επίσημη σελίδα του γράφει ποιοι το υποστηρίζουν: «IndexNow is offered under the terms of the Attribution-ShareAlike Creative Commons License and has support from Microsoft Bing, Naver, Seznam.cz, Yandex, Yep.» (',
      {text: 'IndexNow', href: INDEXNOW},
      '). Η Google δεν είναι στη λίστα. Άρα «ειδοποιούμε αμέσως όλες τις μηχανές» δεν στέκει ως πρόταση.',
    ]},

    {type: 'heading', text: 'Πώς διαβάζεις μια προσφορά για «AI ορατότητα»'},
    {type: 'paragraph', text: [
      'Δεν χρειάζεται να ξέρεις τεχνικά για να ξεχωρίσεις. Πέντε ερωτήσεις αρκούν, και όλες απαντιούνται με ναι ή όχι.',
    ]},
    {type: 'list', items: [
      [{text: 'Ποια σελίδα τεκμηρίωσης λέει αυτό που μου λες;', strong: true}, ' Κάθε ισχυρισμός για το πώς συμπεριφέρεται ένα σύστημα υπάρχει γραμμένος από τον ίδιο τον κάτοχό του. Αν δεν μπορεί να σου δείξει τη σελίδα, δεν είναι γεγονός· είναι εντύπωση.'],
      [{text: 'Μου υπόσχεσαι εμφάνιση ή μου υπόσχεσαι δουλειά;', strong: true}, ' Η μία είναι αδύνατη και το γράφουν και η Google και η Microsoft. Η άλλη είναι απολύτως εύλογη και περιγράφεται σε συγκεκριμένα βήματα.'],
      [{text: 'Ποιον διακόπτη ακριβώς θα αγγίξεις;', strong: true}, ' Αν η απάντηση είναι «θα βάλουμε το Google-Extended για να μπεις στα AI Overviews», η δουλειά είναι λάθος πριν καν ξεκινήσει.'],
      [{text: 'Πού θα το δω;', strong: true}, ' Υπάρχουν δύο μετρήσιμα σημεία σήμερα, το Search Console και τα Bing Webmaster Tools, και τα δύο ανήκουν σε εσένα. Ένα στιγμιότυπο οθόνης από μια συνομιλία δεν είναι μέτρηση: το ίδιο ερώτημα δίνει άλλη απάντηση σε άλλον χρήστη και σε άλλη στιγμή.'],
      [{text: 'Τι θα χαλάσει αν το κάνουμε;', strong: true}, ' Κάθε περιοριστική ρύθμιση έχει κόστος που το γράφουν οι ίδιοι οι πάροχοι — η Anthropic λέει ρητά ότι ο αποκλεισμός μπορεί να μειώσει την ορατότητα, και η Google ότι οι πιο περιοριστικές άδειες περιορίζουν το πώς προβάλλεται το περιεχόμενό σου.'],
    ]},

    {type: 'heading', text: 'Τι μένει, πρακτικά'},
    {type: 'paragraph', text: [
      'Χωρίς καινούργια εργαλεία, χωρίς καινούργια αρχεία και χωρίς καμία υπόσχεση, η λίστα είναι μικρή και έχει σειρά.',
    ]},
    {type: 'list', ordered: true, items: [
      ['Άνοιξε το robots.txt σου και διάβασέ το ολόκληρο. Ψάξε γραμμές που γράφτηκαν για ένα ρομπότ και εφαρμόζονται σε άλλο — και θυμήσου την περίπτωση της Apple, όπου ένας κανόνας για το Googlebot ισχύει και για το Applebot.'],
      ['Δες αν κάποια σελίδα στέλνει nosnippet ή max-snippet από παλιά. Σήμερα αυτές οι ετικέτες κόβουν και τη χρήση του περιεχομένου ως άμεσης εισόδου στα AI Overviews και στο AI Mode.'],
      ['Μπες στις ρυθμίσεις του Search Console και δες πού είναι ο διακόπτης Search generative AI control. Η προεπιλογή είναι η συμπερίληψη· αν είναι αλλιώς, κάποιος το άλλαξε.'],
      ['Άνοιξε την αναφορά generative AI performance. Είναι διαθέσιμη παντού από τις 31 Αυγούστου 2026 και αντλεί από τον τύπο αναζήτησης Web, οπότε διάβασέ τη ως ανάλυση, όχι ως πρόσθεση.'],
      ['Καταχώρισε την ιστοσελίδα στα Bing Webmaster Tools, αν δεν το έχεις κάνει. Ο ίδιος δείκτης τροφοδοτεί το Copilot και το Microsoft Start.'],
      ['Σταμάτα εκεί. Το επόμενο βήμα δεν είναι «AI βελτιστοποίηση»· είναι το ίδιο περιεχόμενο που θα έγραφες ούτως ή άλλως, σε σελίδες που απαντούν σε μία ερώτηση η καθεμία.'],
    ]},
    {type: 'paragraph', text: [
      'Και αν πρέπει να κρατήσεις δύο προτάσεις από όλο το κείμενο, κράτα αυτές που τις έγραψαν οι ίδιοι οι πάροχοι, όχι εμείς. Η Google: ',
      {text: "«Indexing and serving isn't guaranteed.»", href: G_AI},
      ' Η Microsoft: ',
      {text: 'While there’s no secret strategy for being selected by AI systems, success starts with content that is fresh, authoritative, structured, and semantically clear.', href: MS_ADS},
      ' Ό,τι πουλιέται πάνω από αυτές τις δύο γραμμές, πουλιέται χωρίς κάλυψη.',
    ]},

    {type: 'sources', heading: 'Πηγές', items: [
      {label: 'Google Search Central, AI features and your website — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_AI},
      {label: 'Google Search Central, Overview of Google crawlers and fetchers — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_CRAWLERS},
      {label: 'Google Search Central, List of Google’s common crawlers (Googlebot, Google-Extended) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_COMMON},
      {label: 'Google Search Central, List of Google user-triggered fetchers — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_FETCHERS},
      {label: 'Google Search Central, How Google interprets the robots.txt specification — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_ROBOTS_SPEC},
      {label: 'Google Search Central, Introduction to robots.txt — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_ROBOTS_INTRO},
      {label: 'Google Search Central, Robots meta tag, data-nosnippet and X-Robots-Tag specifications — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_META},
      {label: 'Google Search Central Blog, Top ways to ensure your content performs well in Google’s AI experiences on Search — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_BLOG_AI},
      {label: 'Google Search Central Blog, Introducing Search Generative AI performance reports in Search Console (3 Ιουνίου 2026) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_BLOG_GENAI},
      {label: 'Search Console Help, Generative AI performance report — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SC_GENAI},
      {label: 'Search Console Help, Search generative AI control — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SC_CONTROL},
      {label: 'Search Console Help, What are impressions, position and clicks; — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_SC_IMPR},
      {label: 'Google Search Central, Introduction to structured data markup in Google Search — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: G_STRUCTURED},
      {label: 'OpenAI, Overview of OpenAI crawlers (OAI-SearchBot, GPTBot, ChatGPT-User, OAI-AdsBot) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: OPENAI_BOTS},
      {label: 'Anthropic Support, Does Anthropic crawl data from the web, and how can site owners block the crawler; — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: ANTHROPIC_BOTS},
      {label: 'Common Crawl, CCBot — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: CCBOT},
      {label: 'Perplexity Docs, PerplexityBot and Perplexity-User — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: PERPLEXITY},
      {label: 'Apple Support, About Applebot — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: APPLEBOT},
      {label: 'Bing Webmaster Blog, Introducing AI Performance in Bing Webmaster Tools (Φεβρουάριος 2026) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: BING_AIPERF},
      {label: 'Bing Blog, New AI Visibility Insights in Bing Webmaster Tools (Ιούνιος 2026) — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: BING_INSIGHTS},
      {label: 'Microsoft Advertising Blog, Optimizing your content for inclusion in AI search answers — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: MS_ADS},
      {label: 'IndexNow.org, What is IndexNow; — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: INDEXNOW},
      {label: 'Cloudflare Blog, Content Independence Day: no AI crawl without compensation — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: CLOUDFLARE},
      {label: 'RFC 9309, Robots Exclusion Protocol — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: RFC9309},
      {label: 'robotstxt.org, About /robots.txt — ανακτήθηκε 2 Σεπτεμβρίου 2026', url: ROBOTSTXT_ORG},
    ]},
  ],
};

export default post;
