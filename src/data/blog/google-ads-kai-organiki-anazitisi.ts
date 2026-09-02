import type {BlogPost} from '@/types/blog';

// Άρθρο 12. Ουδέτερο και περιγραφικό: η Fiji πουλάει και τα δύο. Καμία πρόταση εδώ δεν λέει ότι
// το ένα κανάλι υπερέχει του άλλου. Κανένα νούμερο σε νόμισμα, καμία διάρκεια ως υπόσχεση,
// καμία εγγύηση θέσης. Κάθε μηχανισμός είναι παρμένος αυτούσιος από την τεκμηρίωση της Google.
// Τα αγγλικά αποσπάσματα είναι byte-identical με τις πηγές, με τους αποστρόφους της Google
// (η ίδια σελίδα μπερδεύει ίσιους και καμπύλους) — μην τα «διορθώσεις».

const A_AUCTION = 'https://support.google.com/google-ads/answer/6366577?hl=en';
const A_AUCTION2 = 'https://support.google.com/google-ads/answer/1704431?hl=en';
const A_ADRANK = 'https://support.google.com/google-ads/answer/1752122?hl=en';
const A_THRESH = 'https://support.google.com/google-ads/answer/7634668?hl=en';
const A_QS = 'https://support.google.com/google-ads/answer/7050591?hl=en';
const A_ADQUALITY = 'https://support.google.com/google-ads/answer/156066?hl=en';
const A_ACPC = 'https://support.google.com/google-ads/answer/6297?hl=en';
const A_DIFFER = 'https://support.google.com/google-ads/answer/1722080?hl=en';
const A_ORGANIC = 'https://support.google.com/google-ads/answer/6054492?hl=en';
const A_BOTH = 'https://support.google.com/google-ads/answer/1722020?hl=en';
const A_PAIDORG = 'https://support.google.com/google-ads/answer/3097241?hl=en';
const A_TOPADS = 'https://support.google.com/google-ads/answer/14662643?hl=en';
const A_FIRSTPAGE = 'https://support.google.com/google-ads/answer/2472742?hl=en';
const A_TEXTADS = 'https://support.google.com/google-ads/answer/1704389?hl=en';
const A_GROW = 'https://support.google.com/google-ads/answer/6336021?hl=en';
const A_TERMS = 'https://support.google.com/google-ads/answer/2472708?hl=en';
const A_SHOPPING = 'https://support.google.com/google-ads/answer/2454022?hl=en';
const A_FREELIST = 'https://support.google.com/merchants/answer/9199328?hl=en';
const A_POLICY = 'https://support.google.com/adspolicy/answer/6008942?hl=en';
const G_HOWSEARCH = 'https://developers.google.com/search/docs/fundamentals/how-search-works';
const G_NEEDSEO = 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo';
const G_STARTER = 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide';
const G_RANKSYS = 'https://developers.google.com/search/docs/appearance/ranking-systems-guide';
const G_APPROACH = 'https://www.google.com/search/howsearchworks/our-approach/';
const G_SCPOS = 'https://support.google.com/webmasters/answer/7042828?hl=en';

const post: BlogPost = {
  id: 'google-ads-kai-organiki-anazitisi',
  slug: 'google-ads-kai-organiki-anazitisi',
  title: 'Google Ads και οργανική αναζήτηση: τι κάνει το καθένα και τι δεν κάνει',
  metaTitle: 'Google Ads και οργανική αναζήτηση: τι κάνει το καθένα',
  excerpt: 'Η διαφήμιση δεν ανεβάζει την οργανική σου θέση και η διακοπή της δεν τη ρίχνει. Τι κάνει το καθένα, πώς δουλεύει η δημοπρασία, πότε είναι λάθος εργαλείο.',
  author: 'Χαράλαμπος Μουταφίδης',
  publishedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  readingTime: 20,
  tags: ['Αναζήτηση', 'Ιστοσελίδες', 'E-shop'],
  body: [
    { type: 'paragraph', text: [
      'Στην ίδια οθόνη εμφανίζονται δύο πράγματα που μοιάζουν ίδια και δεν είναι: οι διαφημίσεις και τα οργανικά αποτελέσματα. Τα λάθη ξεκινάνε από την υπόθεση ότι πρόκειται για ',
      {text: 'το ίδιο πράγμα σε δύο ταχύτητες', strong: true},
      ', δηλαδή ότι πληρώνεις για να φτάσεις πιο γρήγορα εκεί όπου θα έφτανες έτσι κι αλλιώς. Δεν λειτουργεί έτσι. Είναι δύο χωριστά συστήματα που απαντούν σε δύο διαφορετικά ερωτήματα.',
    ]},
    { type: 'paragraph', text: [
      'Η διαφήμιση απαντά στο «θέλω να εμφανίζομαι σε αυτές τις αναζητήσεις, από σήμερα, και θέλω να ελέγχω πότε». Η οργανική αναζήτηση απαντά στο «ποια σελίδα αξίζει να δείξει η Google σε κάποιον που έψαξε αυτό». Το πρώτο έχει διακόπτη και δημοπρασία. Το δεύτερο δεν έχει ούτε το ένα ούτε το άλλο.',
    ]},
    { type: 'paragraph', text: [
      'Το μπέρδεμα κοστίζει προς δύο κατευθύνσεις. Άλλοι πληρώνουν διαφήμιση περιμένοντας να ανέβει η οργανική τους θέση, που δεν πρόκειται να συμβεί. Άλλοι φοβούνται να σταματήσουν τη διαφήμιση επειδή νομίζουν ότι θα καταρρεύσει η οργανική τους παρουσία, που επίσης δεν συμβαίνει. Χάνουν όμως ακαριαία την επισκεψιμότητα που πλήρωναν. Παρακάτω: τι κάνει το καθένα, πώς προκύπτει το κόστος στη δημοπρασία, και πού το ένα είναι λάθος εργαλείο.',
    ]},
    { type: 'note', text: [
      {text: 'Έλεγχος στοιχείων: 2 Σεπτεμβρίου 2026.', strong: true},
      ' Κάθε πρόταση της Google που παρατίθεται εδώ ελέγχθηκε εκείνη τη μέρα στη σελίδα που τη συνοδεύει. Τα αποσπάσματα μένουν στα αγγλικά επίτηδες: οι ελληνικές εκδόσεις προειδοποιούν οι ίδιες ότι μέρος τους είναι αυτόματη μετάφραση. Το νόημα το αποδίδουμε δίπλα.',
    ]},

    { type: 'faq', heading: 'Σύντομες απαντήσεις', items: [
      {q: 'Ανεβάζει η διαφήμιση την οργανική μου θέση;', a: 'Όχι. Η τεκμηρίωση του ίδιου του Google Ads το γράφει ρητά: η επένδυση στην πληρωμένη αναζήτηση δεν έχει καμία επίδραση στην οργανική κατάταξη, και η Google κρατά αυστηρό διαχωρισμό ανάμεσα στην αναζήτηση και τη διαφήμιση.'},
      {q: 'Αν σταματήσω τις διαφημίσεις, θα πέσω στα οργανικά;', a: 'Η οργανική σου θέση δεν στηρίζεται στη διαφήμιση, άρα δεν πέφτει επειδή σταμάτησες. Αυτό που χάνεις αμέσως είναι η επισκεψιμότητα που έφερναν οι ίδιες οι διαφημίσεις. Πραγματικό κόστος, απλώς όχι κόστος κατάταξης.'},
      {q: 'Πόσο κοστίζει το Google Ads;', a: 'Δεν υπάρχει τιμή, υπάρχει μοντέλο. Δηλώνεις πόσο δέχεσαι να δώσεις για ένα κλικ, μπαίνεις σε δημοπρασία που τρέχει ξανά σε κάθε αναζήτηση, και πληρώνεις μόνο όταν κάποιος αλληλεπιδρά με τη διαφήμιση. Το ποσό που χρεώνεσαι είναι συχνά μικρότερο από τη μέγιστη προσφορά.'},
      {q: 'Κερδίζει πάντα αυτός που δίνει τα περισσότερα;', a: 'Όχι. Η ίδια η Google γράφει ότι δεν είναι σαν δημοπρασία έργου τέχνης όπου κερδίζει πάντα η υψηλότερη προσφορά. Με πιο συναφείς λέξεις-κλειδιά και στοιχεία μπορείς να πάρεις υψηλότερη θέση σε χαμηλότερη τιμή από κάποιον που προσφέρει περισσότερα.'},
      {q: 'Οι διαφημίσεις είναι πάντα πάνω από τα οργανικά;', a: 'Όχι πάντα. Η Google γράφει ότι οι κορυφαίες διαφημίσεις είναι γενικά πάνω από τα κορυφαία οργανικά, αλλά σε ορισμένα ερωτήματα μπορεί να εμφανιστούν και από κάτω. Υπάρχουν επίσης αναζητήσεις χωρίς καμία διαφήμιση.'},
      {q: 'Τι από τα δύο να διαλέξω;', a: 'Δεν είναι επιλογή του ενός αντί του άλλου, είναι ερώτημα ποιο εργαλείο ταιριάζει σε ποια δουλειά. Το ίδιο το Google Ads γράφει ότι χρησιμοποιώντας και τα δύο βελτιώνεις τις πιθανότητές σου να βρεθείς μπροστά στον πελάτη τη στιγμή που ψάχνει.'},
    ]},

    { type: 'heading', text: 'Δύο συστήματα που δεν επικοινωνούν' },
    { type: 'paragraph', text: [
      'Δεν είναι άποψη συμβούλου. Είναι γραμμένο στη σελίδα βοήθειας του Google Ads, δηλαδή στο προϊόν που πληρώνεις: ',
      {text: '«Investment in paid search has no impact on your organic search ranking. Google maintains a strict separation between our search business and our advertising business.»', href: A_PAIDORG},
      ' Όσα και να ξοδέψεις, το οργανικό αποτέλεσμα δεν μετακινείται.',
    ]},
    { type: 'paragraph', text: [
      'Η ίδια δήλωση υπάρχει και από την άλλη πλευρά του σπιτιού, στην τεκμηρίωση της Αναζήτησης: ',
      {text: "«Advertising with Google won't have any effect on your site's presence in our search results. Google never accepts money to include or rank sites in our search results, and it costs nothing to appear in our organic search results.»", href: G_NEEDSEO},
      ' Δύο πράγματα να μείνουν: η διαφήμιση δεν επηρεάζει την παρουσία σου στα αποτελέσματα, και το να εμφανιστείς οργανικά δεν κοστίζει τίποτα.',
    ]},
    { type: 'paragraph', text: [
      'Επειδή η υπόσχεση «έχω άκρη, σε βάζω εγώ ψηλά» ακούγεται ακόμα, η Google την προλαβαίνει: ',
      {text: "«Google doesn't accept payment to crawl a site more frequently, or rank it higher. If anyone tells you otherwise, they're wrong.»", href: G_HOWSEARCH},
      ' Ούτε συχνότερη ανίχνευση αγοράζεται, ούτε ψηλότερη κατάταξη.',
    ]},
    { type: 'paragraph', text: [
      'Στη δημόσια περιγραφή των αρχών της το διατυπώνει ως πολιτική: ',
      {text: '«Google Search does not provide special treatment such as ranking boosts or specialized support based on personal or financial relationships, including advertising or unrelated business partnerships.»', href: G_APPROACH},
      ' Ούτε ο μεγάλος διαφημιζόμενος παίρνει ώθηση επειδή είναι μεγάλος. Η σελίδα του Google Ads που εξηγεί τη διαφορά καταλήγει στο ίδιο: ',
      {text: '«Google’s search results are independent of Google’s advertising programs.»', href: A_DIFFER},
    ]},

    { type: 'subheading', text: 'Η ανάποδη ανάγνωση, που είναι επίσης λάθος' },
    { type: 'paragraph', text: [
      'Από το «η διαφήμιση δεν βοηθά την οργανική κατάταξη» πολλοί βγάζουν το «άρα αν σταματήσω θα με τιμωρήσει η Google». Δεν το λέει καμία πηγή, και προκύπτει το αντίθετο ως συνέπεια του διαχωρισμού: αν τα δύο συστήματα δεν επικοινωνούν προς τη μία κατεύθυνση, δεν επικοινωνούν ούτε προς την άλλη. Η οργανική σου θέση δεν ξέρει καν αν τρέχεις καμπάνια.',
    ]},
    { type: 'paragraph', text: [
      'Αυτό που χάνεις πραγματικά, και ακαριαία, είναι η πληρωμένη επισκεψιμότητα. Αν το ένα τρίτο των επισκεπτών σου ερχόταν από διαφήμιση, την επόμενη μέρα λείπει το ένα τρίτο των επισκεπτών σου. Δεν είναι ποινή, είναι αφαίρεση: ',
      {text: 'σταμάτησες να πληρώνεις για κάτι και έπαψες να το έχεις', strong: true},
      '. Η σωστή ερώτηση πριν διακόψεις μια καμπάνια δεν είναι «θα πέσω;» αλλά «πόση από τη δουλειά μου ερχόταν από εκεί;».',
    ]},
    { type: 'paragraph', text: [
      'Και για να μη γείρει το κείμενο, η άλλη πλευρά όπως τη γράφει η Google: ',
      {text: "«By using both search results and ads to help customers find your website, you can improve your chances of connecting with customers at the moment when they're looking for your product or service.»", href: A_BOTH},
      ' Τα δύο κανάλια δεν ανταγωνίζονται μεταξύ τους για τα λεφτά σου. Πιάνουν διαφορετική δουλειά.',
    ]},

    { type: 'heading', text: 'Τι βλέπει πραγματικά ο χρήστης στη σελίδα' },
    { type: 'paragraph', text: [
      'Πρώτα τι είναι τι, με τους ορισμούς της ίδιας της Google. Το οργανικό αποτέλεσμα: ',
      {text: "«A free listing in Google Search that appears because it's relevant to someone's search terms.»", href: A_ORGANIC},
      ' Δωρεάν καταχώριση, που εμφανίζεται επειδή είναι συναφής.',
    ]},
    { type: 'paragraph', text: [
      'Η διαφήμιση ξεχωρίζει με ετικέτα: ',
      {text: '«The ads above organic results contain a “Sponsored” box.»', href: A_ORGANIC},
      ' Στα ελληνικά η ετικέτα είναι «Χορηγούμενο». Αν σου δείξει κάποιος στιγμιότυπο όπου είσαι πρώτος και από πάνω γράφει «Χορηγούμενο», δεν σου δείχνει οργανική θέση: σου δείχνει ότι πλήρωσες το κλικ.',
    ]},
    { type: 'paragraph', text: [
      'Η διάταξη της σελίδας δεν είναι σταθερή, και εδώ πέφτουν έξω τα σχεδιαγράμματα που κυκλοφορούν: ',
      {text: '«Top ads are generally above the top organic results, although top ads may show below the top organic search results on certain queries.»', href: A_TOPADS},
      ' Γενικά από πάνω, σε ορισμένα ερωτήματα από κάτω.',
    ]},
    { type: 'paragraph', text: [
      'Και δεν υπάρχουν καν διαφημίσεις παντού: ',
      {text: '«There might not be ads on all search results, even for queries that advertisers are bidding on.»', href: A_TEXTADS},
      ' Αυτό αρκεί για να πάψεις να ελέγχεις την καμπάνια σου γράφοντας τη λέξη στη δική σου Google: βλέπεις μία εκτέλεση της δημοπρασίας, όχι τη σελίδα που βλέπουν όλοι.',
    ]},

    { type: 'heading', text: 'Πώς προκύπτει το κόστος: η δημοπρασία, βήμα βήμα' },
    { type: 'paragraph', text: [
      'Η ερώτηση «πόσο κοστίζει το Google Ads» δεν έχει απάντηση σε νούμερο. Δεν την έχει ούτε η Google. Έχει όμως πλήρη απάντηση σε ',
      {text: 'μοντέλο', strong: true},
      ', και το μοντέλο είναι που σου λέει τι μπορείς να αλλάξεις: ',
      {text: '«Google Ads determines which ads should show with a lightning-fast ad auction, that takes place every time someone searches on Google or visits a site that shows ads.»', href: A_AUCTION},
      ' Μια δημοπρασία, που τρέχει από την αρχή σε κάθε μεμονωμένη αναζήτηση.',
    ]},
    { type: 'paragraph', text: [
      'Το δεύτερο θεμέλιο είναι το πότε ανοίγει το πορτοφόλι: ',
      {text: '«You decide how much you want to spend, and pay only when someone interacts with your ad, like clicking your text ad or watching your video ad.»', href: A_GROW},
      ' Η εμφάνιση δεν χρεώνεται, η αλληλεπίδραση χρεώνεται. Γι’ αυτό η «προσφορά» σημαίνει «μέχρι τόσα δέχομαι να πληρώσω για ένα κλικ», όχι «τόσα θα πληρώσω».',
    ]},
    { type: 'paragraph', text: [
      'Το τρίτο είναι η παρανόηση που καίει τα περισσότερα χρήματα, και η Google τη γράφει μόνη της: ',
      {text: "«It's not like an art auction where the highest bidder always wins»", href: A_AUCTION2},
      '. Δεν κερδίζει αυτόματα η μεγαλύτερη προσφορά. Υπάρχει δεύτερος μοχλός, φτηνότερος από το να ανεβάζεις το ποσό.',
    ]},

    { type: 'subheading', text: 'Η κατάταξη διαφήμισης (Ad Rank) και τι μπαίνει μέσα της' },
    { type: 'paragraph', text: [
      'Το μέγεθος που αποφασίζει αν και πού θα εμφανιστεί μια διαφήμιση λέγεται κατάταξη διαφήμισης. Η Google απαριθμεί τι το συνθέτει: ',
      {text: '«Ad Rank scores are calculated based on many factors, including your bid amount, the quality of your ads and landing page, the Ad Rank thresholds, the competitiveness of an auction, the context of the person’s search (for example, the person’s location, device, time of search, the nature of the search terms, the other ads and search results that show on the page, and other user signals and attributes), and the expected impact of assets and other ad formats.»', href: A_ADRANK},
    ]},
    { type: 'paragraph', text: [
      'Μέτρα πόσα από αυτά είναι το ποσό: ένα. Τα υπόλοιπα είναι η ποιότητα της διαφήμισης και της σελίδας προορισμού, τα ελάχιστα όρια, η ένταση του ανταγωνισμού, το περιβάλλον της αναζήτησης και τα στοιχεία διαφήμισης. Η τιμή είναι ένας μοχλός ανάμεσα σε πολλούς, όχι ο διακόπτης.',
    ]},
    { type: 'paragraph', text: [
      'Ο υπολογισμός γίνεται δύο φορές, και αυτό εξηγεί γιατί το «δεν εμφανίζομαι καθόλου» και το «εμφανίζομαι χαμηλά» είναι δύο διαφορετικά προβλήματα: ',
      {text: '«In each auction, your Ad Rank is calculated first to determine whether your ad is eligible to show, and a second time to determine where your ad is ranked relative to other eligible ads.»', href: A_ADRANK},
    ]},
    { type: 'paragraph', text: [
      'Το κατώφλι της πρώτης κρίσης λέγεται ελάχιστα όρια κατάταξης διαφήμισης: ',
      {text: '«Ad Rank thresholds determine your ability to compete in an ad auction.»', href: A_THRESH},
      ' Και δεν είναι ένα όριο για όλη τη σελίδα: ',
      {text: '«Ads that appear higher on the search results page have higher thresholds than ads that appear lower on the page.»', href: A_THRESH},
      ' Όσο πιο ψηλά η θέση, τόσο ψηλότερος ο πήχης.',
    ]},
    { type: 'paragraph', text: [
      'Από όλα αυτά βγαίνει η μία πρόταση που αξίζει να κρατήσεις: ',
      {text: '«So even if your competition has higher bids, you can still win a higher position at a lower price by using highly relevant keywords, ads, and assets.»', href: A_AUCTION},
      ' Η συνάφεια είναι νόμισμα μέσα στη δημοπρασία: ένας μικρός διαφημιζόμενος με σωστά στοχευμένες λέξεις-κλειδιά δεν είναι εξ ορισμού χαμένος απέναντι σε έναν μεγαλύτερο.',
    ]},

    { type: 'subheading', text: 'Τι χρεώνεσαι τελικά' },
    { type: 'paragraph', text: [
      'Η μέγιστη προσφορά είναι οροφή, όχι τιμή: ',
      {text: "«Actual CPC is often less than max. CPC because with the Google Ads auction, you only pay what's minimally required to clear the Ad Rank thresholds and beat the Ad Rank of the competitor immediately below you.»", href: A_ACPC},
      ' Πληρώνεις το ελάχιστο που χρειάζεται για να περάσεις τα όρια και να ξεπεράσεις αυτόν ακριβώς από κάτω σου.',
    ]},
    { type: 'paragraph', text: [
      'Και υπάρχει συνέπεια στην τοποθέτηση, που εξηγεί γιατί το «θέλω να είμαι πάντα πρώτος» είναι ακριβή απαίτηση: ',
      {text: '«As a result, the actual CPC when you appear above search results is often higher than the actual CPC if you appear below search results, even if no other advertisers are immediately below you.»', href: A_ACPC},
      ' Οι θέσεις πάνω από τα οργανικά έχουν ψηλότερα όρια, άρα συνήθως ψηλότερο κόστος ανά κλικ.',
    ]},
    { type: 'paragraph', text: [
      'Το ίδιο το εργαλείο σε προειδοποιεί ότι οι εκτιμήσεις του δεν είναι υπόσχεση: ',
      {text: '«First page, top of page, and first position bid estimates are a guide, meant to give you greater insight with which to plan your bidding strategy—but meeting or exceeding these estimates isn’t a guarantee of ad placement.»', href: A_FIRSTPAGE},
      ' Καμία θέση δεν αγοράζεται ούτε στη διαφήμιση· αγοράζεται συμμετοχή σε δημοπρασία με κανόνες.',
    ]},
    { type: 'paragraph', text: [
      'Η άλλη όψη του ίδιου κανόνα είναι σκληρή για όποιον προσπαθεί να λύσει με χρήμα ένα πρόβλημα συνάφειας: ',
      {text: '«In some cases, low-quality ads may hardly show at all (even if they have high bids).»', href: A_TEXTADS},
    ]},
    { type: 'paragraph', text: [
      'Τέλος, μη διαβάζεις τη διακύμανση ως πρόβλημα. Επειδή η δημοπρασία τρέχει ξανά κάθε φορά, η θέση αλλάζει από αναζήτηση σε αναζήτηση: ',
      {text: "«So don't worry if your position on the page fluctuates -- it's normal for it to vary each time.»", href: A_AUCTION2},
      ' Η «θέση» στη διαφήμιση δεν κλειδώνει: είναι το αποτέλεσμα μιας διαδικασίας που έτρεξε μία φορά, για έναν άνθρωπο.',
    ]},

    { type: 'heading', text: 'Ο Δείκτης ποιότητας δεν μπαίνει στη δημοπρασία' },
    { type: 'paragraph', text: [
      'Εδώ γράφουν λάθος σχεδόν όλα τα κείμενα που θα βρεις για το θέμα. Ο Δείκτης ποιότητας ',
      {text: 'δεν είναι είσοδος στη δημοπρασία', strong: true},
      ', και το λέει η σελίδα που τον ορίζει: ',
      {text: '«Quality Score is not a key performance indicator and should not be optimized or aggregated with the rest of your data. Quality Score is not an input in the ad auction.»', href: A_QS},
    ]},
    { type: 'paragraph', text: [
      'Δύο πράγματα μπερδεύονται συνεχώς. Η ποιότητα της διαφήμισης και της σελίδας προορισμού τη στιγμή της δημοπρασίας ',
      {text: 'είναι', strong: true},
      ' παράγοντας της κατάταξης διαφήμισης. Ο Δείκτης ποιότητας είναι κάτι άλλο: διαγνωστικό που δείχνει εκ των υστέρων πού στέκεσαι. Το να τον «δουλεύεις σαν νούμερο» είναι σαν να γυαλίζεις το θερμόμετρο για να πέσει ο πυρετός.',
    ]},
    { type: 'paragraph', text: [
      'Ως διαγνωστικό, πάντως, είναι χρήσιμος. ',
      {text: '«This score is measured on a scale from 1-10 and available at the keyword level.»', href: A_QS},
      ' Μετριέται ανά λέξη-κλειδί και υπολογίζεται από τρία συστατικά: ',
      {text: '«Quality Score is calculated based on the combined performance of 3 components:»', href: A_QS},
    ]},
    { type: 'list', items: [
      [{text: 'Αναμενόμενο ποσοστό κλικ.', strong: true}, ' Πόσο πιθανό είναι να πατηθεί η διαφήμισή σου όταν εμφανιστεί.'],
      [{text: 'Συνάφεια διαφήμισης.', strong: true}, ' Πόσο κοντά είναι το κείμενό της στην πρόθεση πίσω από την αναζήτηση.'],
      [{text: 'Εμπειρία σελίδας προορισμού.', strong: true}, ' Πόσο συναφής και χρήσιμη είναι η σελίδα στην οποία προσγειώνεται αυτός που έκανε κλικ.'],
    ]},
    { type: 'paragraph', text: [
      'Η βαθμολογία δεν είναι απόλυτη, είναι σύγκριση: ',
      {text: '«This evaluation is based on a comparison with other advertisers whose ads showed for the exact same search over the last 90 days.»', href: A_QS},
      ' Μια μέτρια βαθμολογία δεν σημαίνει απαραίτητα κακή διαφήμιση· μπορεί να σημαίνει πολύ καλά στοχευμένους ανταγωνιστές στην ίδια αναζήτηση.',
    ]},
    { type: 'paragraph', text: [
      'Δύο προτάσεις κλείνουν το θέμα. Πρώτη: ',
      {text: '«The amount you bid may affect your Ad Rank, but it doesn’t impact the assessment of your ad quality.»', href: A_ADQUALITY},
      ' Δεν αγοράζεις ποιότητα με χρήμα. Δεύτερη, η ανταμοιβή: ',
      {text: '«Higher ad quality generally leads to better performance, including better ad positions and lower cost.»', href: A_ADQUALITY},
      ' Γι’ αυτό η δουλειά στο κείμενο και στη σελίδα προορισμού είναι η φθηνότερη διαθέσιμη παρέμβαση στη δημοπρασία.',
    ]},

    { type: 'table', caption: 'Το ίδιο ερώτημα του χρήστη, δύο εντελώς διαφορετικοί μηχανισμοί.', head: ['Τι εξετάζεις', 'Διαφήμιση (Google Ads)', 'Οργανικό αποτέλεσμα'], rows: [
      [['Πώς μπαίνεις'], ['Ανοίγεις λογαριασμό, δηλώνεις λέξεις-κλειδιά και προσφορά, μπαίνεις σε δημοπρασία'], ['Η Google περιλαμβάνει αυτόματα τους περισσότερους ιστότοπους, χωρίς να το εγγυάται']],
      [['Τι πληρώνεις'], ['Μόνο όταν κάποιος αλληλεπιδρά με τη διαφήμιση'], ['Δεν κοστίζει τίποτα να εμφανιστείς στα οργανικά']],
      [['Τι ελέγχεις'], ['Πότε εμφανίζεσαι, σε ποιες γλώσσες και τοποθεσίες, με ποιο κείμενο'], ['Τι δημοσιεύεις και πώς είναι φτιαγμένη η σελίδα. Όχι τη θέση']],
      [['Πόσο γρήγορα αλλάζει'], ['Η δημοπρασία τρέχει ξανά σε κάθε αναζήτηση'], ['Κάθε αλλαγή θέλει χρόνο για να αποτυπωθεί, και δεν έχει διακόπτη']],
      [['Τι σε αποκλείει'], ['Ελάχιστα όρια κατάταξης, χαμηλή ποιότητα, παραβίαση πολιτικών'], ['Να μην ανιχνευθεί, να μην ευρετηριαστεί, ή να μη θεωρηθεί συναφής']],
      [['Πώς μετριέται η θέση'], ['Ποσοστά εμφανίσεων στην κορυφή, μέσα στο Google Ads'], ['«Μέση θέση» στο Search Console, μόνο για τα αποτελέσματα αναζήτησης']],
      [['Τι δεν κάνει για το άλλο'], ['Δεν βελτιώνει την οργανική κατάταξη'], ['Δεν μειώνει το κόστος της δημοπρασίας']],
    ]},

    { type: 'heading', text: 'Τι ελέγχεις σε κάθε κανάλι, και τι όχι' },
    { type: 'paragraph', text: [
      'Το πιο χρήσιμο πράγμα που αγοράζεις με μια καμπάνια δεν είναι η θέση, είναι ο έλεγχος του πότε: ',
      {text: "«Since Google automatically includes most websites in its search results, it's likely that you'll see your website in search results. But running ads too can help you gain more control over when your website can appear to people who are searching.»", href: A_BOTH},
    ]},
    { type: 'paragraph', text: [
      'Αυτός ο έλεγχος είναι και όριο, και το όριο δεν ισχύει για τα οργανικά: ',
      {text: "«Organic results aren't constrained by your Google Ads campaigns’ ad targeting settings.»", href: A_PAIDORG},
      ' Οι διαφημίσεις σου περιορίζονται στις γλώσσες και τις τοποθεσίες που δήλωσες, οι οργανικές καταχωρίσεις όχι. Γι’ αυτό είναι φυσιολογικό να έχεις πολύ περισσότερες οργανικές εμφανίσεις από πληρωμένες.',
    ]},
    { type: 'paragraph', text: [
      'Από την άλλη πλευρά, το οργανικό αποτέλεσμα κρίνεται ανά σελίδα και όχι ανά ιστότοπο: ',
      {text: '«Our ranking systems are designed to work on the page level, using a variety of signals and systems to understand how to rank individual pages.»', href: G_RANKSYS},
      ' Πρακτικά: μία καλή σελίδα δεν ανεβάζει τις υπόλοιπες, και κάθε ερώτημα θέλει τη δική του σελίδα.',
    ]},
    { type: 'paragraph', text: [
      'Και δεν υπάρχει κουμπί «ανέβα». Η Google το γράφει στον εισαγωγικό της οδηγό: ',
      {text: "«Every change you make will take some time to be reflected on Google's end.»", href: G_STARTER},
      ' Κάποιες αλλαγές αποτυπώνονται γρήγορα, άλλες αργούν πολύ, και το εύρος δεν είναι δικό μας να το υποσχεθούμε.',
    ]},

    { type: 'heading', text: 'Λέξη-κλειδί ή όρος αναζήτησης;' },
    { type: 'paragraph', text: [
      'Δύο λέξεις που χρησιμοποιούνται σαν συνώνυμα και δεν είναι, με αποτέλεσμα οι μισές συζητήσεις για καμπάνιες να γίνονται στο κενό: ',
      {text: '«A search term is a word or set of words a person enters when searching on Google or one of our Search Network sites. A keyword is a word or set of words that Google Ads advertisers can add to a given ad group so that your ads are targeting the right audience.»', href: A_TERMS},
    ]},
    { type: 'paragraph', text: [
      'Ο όρος αναζήτησης είναι αυτό που πληκτρολόγησε ο άνθρωπος· η λέξη-κλειδί είναι αυτό που δήλωσες εσύ. Ανάμεσά τους υπάρχει πάντα ένα κενό, και η αναφορά όρων αναζήτησης είναι το μέρος όπου το βλέπεις: εκεί ανακαλύπτεις για ποιες αναζητήσεις πληρώνεις χωρίς να το φανταστείς.',
    ]},
    { type: 'paragraph', text: [
      'Το ίδιο κενό υπάρχει και στα οργανικά, με αντίστροφη ροή: εκεί δεν δηλώνεις, ανακαλύπτεις. Οι φράσεις που πληκτρολογούν πραγματικά οι πελάτες σου είναι υλικό και για τις σελίδες σου.',
    ]},

    { type: 'heading', text: 'Πότε το ένα είναι λάθος εργαλείο' },
    { type: 'paragraph', text: [
      'Κανένα από τα δύο κανάλια δεν είναι καλύτερο. Υπάρχουν όμως δουλειές που το ένα δεν κάνει, όσο σωστά κι αν το στήσεις.',
    ]},
    { type: 'list', items: [
      [{text: 'Θέλεις να εμφανίζεσαι αύριο σε μια συγκεκριμένη αναζήτηση.', strong: true}, ' Η οργανική αναζήτηση δεν έχει διακόπτη και η αλλαγή θέλει χρόνο να αποτυπωθεί. Αυτή η δουλειά έχει ένα εργαλείο: τη δημοπρασία.'],
      [{text: 'Πληρώνεις διαφήμιση για να ανέβει η οργανική σου θέση.', strong: true}, ' Λάθος εργαλείο εξ ορισμού. Η καμπάνια θα σου φέρει επισκέπτες· δεν θα μετακινήσει το οργανικό αποτέλεσμα ούτε κατά μία θέση.'],
      [{text: 'Θέλεις να απαντάς σε ερωτήσεις που κάνει ο κόσμος πριν αγοράσει.', strong: true}, ' Μια σελίδα που απαντά σε μια ερώτηση δεν περιορίζεται από ρυθμίσεις στόχευσης και δεν παύει να υπάρχει όταν κλείσει μια καμπάνια.'],
      [{text: 'Στέλνεις τη διαφήμιση σε σελίδα που δεν απαντά στην αναζήτηση.', strong: true}, ' Η ποιότητα της σελίδας προορισμού είναι παράγοντας της κατάταξης διαφήμισης και ένα από τα τρία συστατικά του Δείκτη ποιότητας. Λάθος σελίδα σημαίνει ακριβότερο κλικ για χειρότερη θέση.'],
      [{text: 'Ανεβάζεις προσφορά για να λύσεις πρόβλημα συνάφειας.', strong: true}, ' Η Google γράφει ρητά ότι διαφημίσεις χαμηλής ποιότητας μπορεί μόλις που να εμφανίζονται ακόμη κι αν έχουν υψηλές προσφορές.'],
      [{text: 'Περιμένεις σταθερή θέση από τη διαφήμιση.', strong: true}, ' Η δημοπρασία επαναλαμβάνεται σε κάθε αναζήτηση. Η διακύμανση δεν είναι σφάλμα ρύθμισης, είναι ο μηχανισμός.'],
    ]},

    { type: 'cta', heading: 'Αν θέλεις να τρέξεις διαφημίσεις χωρίς να μαντεύεις', text: 'Στήνουμε τις καμπάνιες, τις λέξεις-κλειδιά και τη σελίδα προορισμού, και σου εξηγούμε γραπτά τι ελέγχει η κάθε ρύθμιση και τι δεν ελέγχει κανείς.', label: 'Δες τι περιλαμβάνει', href: '/el/offers/website-google-ads' },

    { type: 'heading', text: 'Αν πουλάς προϊόντα: δύο δρόμοι από το ίδιο υλικό' },
    { type: 'paragraph', text: [
      'Στο ηλεκτρονικό εμπόριο η διάκριση γίνεται ακόμα πιο καθαρή, γιατί το ίδιο αρχείο προϊόντων τροφοδοτεί και τα δύο. Οι διαφημίσεις Shopping δεν δουλεύουν με λέξεις-κλειδιά: ',
      {text: '«Shopping ads use your existing Merchant Center product data (not keywords) to decide how and where to show your ads.»', href: A_SHOPPING},
      ' Χτίζεται από τα δεδομένα του προϊόντος (φωτογραφία, τίτλος, η τιμή του προϊόντος, το κατάστημα). Δεν χτίζεται από φράσεις που δηλώνεις.',
    ]},
    { type: 'paragraph', text: [
      'Από το ίδιο υλικό υπάρχει και δωρεάν δρόμος: ',
      {text: '«Your products can show for free across many areas of Google including Search, Maps, and more.»', href: A_FREELIST},
      ' Οι δωρεάν καταχωρίσεις προϊόντων είναι το αντίστοιχο των οργανικών για ένα κατάστημα: ίδιο υλικό, δύο μηχανισμοί.',
    ]},
    { type: 'paragraph', text: [
      'Και όπως παντού στα οργανικά, η εμφάνιση δεν είναι δεδομένη: ',
      {text: '«Your products aren’t guaranteed to show across Google, as we rely on the data you provide to us to match your products with what customers might be searching for.»', href: A_FREELIST},
      ' Ένας τίτλος προϊόντος γραμμένος όπως τον ψάχνει ο πελάτης δουλεύει και στους δύο δρόμους.',
    ]},

    { type: 'heading', text: 'Μέτρηση: μη συγκρίνεις δύο διαφορετικά μετρικά' },
    { type: 'paragraph', text: [
      'Η λέξη «θέση» σημαίνει άλλο πράγμα σε κάθε κανάλι. Στο Search Console η μέση θέση ορίζεται ως ',
      {text: '«A relative ranking of the position of your link on Google, where 1 is the topmost position, 2 is the next position, and so on. Shown only for Google Search results.»', href: G_SCPOS},
      ' Το «μόνο για τα αποτελέσματα αναζήτησης» είναι η σημαντική λεπτομέρεια: το μετρικό δεν υπάρχει για τη διαφήμιση. Εκεί η αντίστοιχη πληροφορία είναι τα ποσοστά εμφανίσεων στην κορυφή.',
    ]},
    { type: 'paragraph', text: [
      'Αν θέλεις να δεις τα δύο κανάλια μαζί, το Google Ads δίνει αναφορά που τα συνδυάζει, αλλά θέλει σύνδεση με το Search Console, και έχει παγίδα που δεν διορθώνεται αναδρομικά: ',
      {text: "«Your organic data is only reported back to the date you started importing it from webmaster tools, so you won't find historical organic data from before you established that link.»", href: A_PAIDORG},
      ' Σύνδεσέ τα σήμερα, όχι τη μέρα που θα θελήσεις την αναφορά.',
    ]},

    { type: 'heading', text: 'Μια διαφορά χωρίς αντίστοιχο στα οργανικά: οι πολιτικές' },
    { type: 'paragraph', text: [
      'Ο διαφημιστικός λογαριασμός είναι σχέση με κανόνες, και οι κανόνες έχουν συνέπειες που δεν υπάρχουν στην οργανική πλευρά: ',
      {text: '«We take action on content that violates our policies. This may include disapproving violating ads so they don’t serve, as well as suspending accounts for repeat or egregious violations.»', href: A_POLICY},
      ' Μια διαφήμιση μπορεί να απορριφθεί και να μην προβληθεί καθόλου, και σε σοβαρές ή επαναλαμβανόμενες παραβάσεις να ανασταλεί ο λογαριασμός.',
    ]},
    { type: 'paragraph', text: [
      'Δεν είναι λόγος να μην τρέξεις διαφημίσεις. Είναι λόγος το κείμενο της διαφήμισης και η σελίδα προορισμού να λένε το ίδιο πράγμα, και αυτό να είναι αληθές και ελέγξιμο.',
    ]},

    { type: 'heading', text: 'Με τι σειρά να τα σκεφτείς' },
    { type: 'list', ordered: true, items: [
      ['Γράψε με απλά λόγια τι ακριβώς πουλάς και σε ποιον. Και τα δύο κανάλια ξεκινάνε από το ίδιο κείμενο.'],
      ['Δες τι πληκτρολογεί πραγματικά ο κόσμος. Ο όρος αναζήτησης είναι δεδομένο, η λέξη-κλειδί είναι υπόθεσή σου.'],
      ['Βεβαιώσου ότι η σελίδα στην οποία στέλνεις τον επισκέπτη απαντά σε αυτό που έψαξε. Μετράει και στη δημοπρασία και στα οργανικά.'],
      ['Χώρισε τα ερωτήματα: τι θέλεις να πιάσεις τώρα και με έλεγχο, και τι θέλεις να απαντήσεις μία φορά και να μείνει.'],
      ['Σύνδεσε νωρίς το Search Console με το Google Ads. Τα οργανικά δεδομένα ξεκινούν από τη μέρα της σύνδεσης.'],
      ['Μη συγκρίνεις τη μέση θέση του ενός με τα ποσοστά εμφανίσεων του άλλου. Είναι δύο μετρικά, όχι δύο ονόματα του ίδιου πράγματος.'],
    ]},
    { type: 'paragraph', text: [
      'Δύο ερωτήματα που πιάνει αλλού αυτό το ιστολόγιο. Τι γίνεται όταν η σελίδα δεν έχει μπει καν στο ευρετήριο, οπότε δεν υπάρχει κατάταξη για να συζητηθεί: το απαντά το ',
      {text: 'γιατί δεν εμφανίζεται η ιστοσελίδα σου στην Google', href: '/el/blog/giati-den-emfanizetai-i-istoselida-sto-google'},
      '. Και τι να μη δεχτείς ποτέ γραπτά όταν αναθέτεις τη δουλειά, με πρώτο την εγγυημένη θέση: το πιάνει το ',
      {text: 'τι να ζητάς γραπτά πριν αναθέσεις μια ιστοσελίδα', href: '/el/blog/kataskevi-istoselidon-ti-na-zitas'},
      '.',
    ]},

    { type: 'sources', heading: 'Πηγές', items: [
      {label: 'Google Ads Help, How the Google Ads auction works (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_AUCTION},
      {label: 'Google Ads Help, The ad auction (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_AUCTION2},
      {label: 'Google Ads Help, Ad Rank: Definition (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_ADRANK},
      {label: 'Google Ads Help, Ad Rank thresholds: Definition (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_THRESH},
      {label: 'Google Ads Help, About Quality Score for Search campaigns (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_QS},
      {label: 'Google Ads Help, About ad quality (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_ADQUALITY},
      {label: 'Google Ads Help, Actual cost-per-click (CPC): Definition (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_ACPC},
      {label: 'Google Ads Help, How Google search results differ from ads (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_DIFFER},
      {label: 'Google Ads Help, Organic search result: Definition (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_ORGANIC},
      {label: 'Google Ads Help, Ads and search results (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_BOTH},
      {label: 'Google Ads Help, About measuring paid and organic search results (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_PAIDORG},
      {label: 'Google Ads Help, Top ads (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_TOPADS},
      {label: 'Google Ads Help, Get your ads to show on the first page (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_FIRSTPAGE},
      {label: 'Google Ads Help, About text ads (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_TEXTADS},
      {label: 'Google Ads Help, Grow your business with Google Ads (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_GROW},
      {label: 'Google Ads Help, About the search terms report (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_TERMS},
      {label: 'Google Ads Help, About Shopping ads (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_SHOPPING},
      {label: 'Google Merchant Center Help, Free listings for products (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_FREELIST},
      {label: 'Google Advertising Policies Help, Google Ads policies (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: A_POLICY},
      {label: 'Google Search Central, In-Depth Guide to How Google Search Works (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_HOWSEARCH},
      {label: 'Google Search Central, Do You Need an SEO? (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_NEEDSEO},
      {label: 'Google Search Central, SEO Starter Guide (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_STARTER},
      {label: 'Google Search Central, A Guide to Google Search Ranking Systems (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_RANKSYS},
      {label: 'How Google Search Works, Our Approach (Honest Results) (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_APPROACH},
      {label: 'Search Console Help, What are impressions, position, and clicks? (ανακτήθηκε 2 Σεπτεμβρίου 2026)', url: G_SCPOS},
    ]},
  ],
};

export default post;
