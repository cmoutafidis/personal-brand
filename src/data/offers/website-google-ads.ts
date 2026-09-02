import type {Offer} from '@/components/OfferLanding';

// Offer M from the Proven Offers workbook: "Website + Google Ads".
//
// Timeline: the workbook says 10-30 days. Published as THREE WEEKS, which is the midpoint of that
// range rounded down to a clean unit, per the rule applied to all eight offers. The anchor is the
// kickoff workshop and it is stated in the same sentence as the number, every time.
//
// Guarantee: the workbook's row 11 for this offer lists the timeline, a requirements match, "bug
// free", a #1 Google ranking, a lead target and a cost per lead. THE RANKING IS NOT CLAIMED HERE
// AND MUST NOT BE ADDED BACK. Google does not sell positions in its organic results and nobody can
// promise one, so the page refuses it out loud, once in the guarantee and once in the FAQ. What
// remains is the lead target, agreed in writing before the build, with a refund of the fee as the
// remedy. That is a PROMISE WITH A REMEDY, not a measurement of past work, and every string here
// keeps it that way. "Bug free" is written as the warranty underneath it: anything that does not
// match the agreed requirements gets fixed at no cost. The cost-per-lead ceiling the same row
// mentions is offered as an optional line in the same written target, and it never carries a
// figure, because no figure on this engagement is public.
//
// EVERY CLAUSE UNDER THE GUARANTEE HEADING CARRIES ITS OWN REMEDY. The on-time clause used to
// name the three weeks and stop there, while the section's promise said "we refund your fee", so
// the page implied a delivery refund nothing on it committed to. The clause now says the delivery
// date goes into the contract, and that a delay of ours lets the client cancel and take the fee
// back. If a later edit removes that remedy, the clause has to leave the guarantee section with
// it. A limb with no consequence is decoration, and the reader reads the section's consequence
// onto it anyway. TODO(charis): the cancel-and-refund remedy on a late delivery is derived from
// the rule that every guarantee here ends in money back. It is a contract term, so confirm the
// wording before this page takes traffic. Nobody has quoted him on it and nobody should.
//
// Keyword separation: /offers/website-seo (offer L) sells the same website build against ORGANIC
// search and owns every SEO and ranking phrasing on this site. This page stays on paid-search
// purchase intent instead: Google Ads, campaign, clicks, leads. It carries no ranking keyword at
// all, which is both an honesty rule and the thing that keeps the two pages apart. Two pages
// chasing one keyword is how the sister repo ended up issuing a 301.

const websiteGoogleAds: Offer = {
  slug: 'offers/website-google-ads',
  questionMarker: 'offer-website-google-ads',
  serviceType: 'Search Engine Marketing',
  copy: {
    en: {
      metaTitle: 'Website + Google Ads, 3 Weeks from Kickoff | Fiji Solutions',
      metaDescription:
        'We rebuild your website and launch your Google Ads campaign three weeks from the kickoff workshop. We agree a lead target in writing, or your fee back.',
      metaKeywords:
        'google ads agency, google ads campaign setup, website and google ads, ppc for small business, google ads management Greece',
      ogAlt: 'Fiji Solutions - website and Google Ads campaign live three weeks after the kickoff workshop',

      eyebrow: 'Website and Google Ads campaign',
      title: 'Your website and your Google Ads campaign, live together, three weeks from the kickoff workshop.',
      subhead:
        'We rebuild or optimise your site, host it, and launch the campaign inside your own ads account. Before anything is built we agree in writing how many leads it has to bring you. If it misses, we refund your fee.',
      bullets: [
        {
          lead: 'The site and the ads are one job.',
          body: 'A good page nobody visits and paid clicks landing on a weak page fail the same way. Both are built against one keyword list.'
        },
        {
          lead: 'Three weeks from the kickoff workshop.',
          body: 'Not three weeks from your first email. The clock starts the day we sit down and agree the scope, the keywords and the target.'
        },
        {
          lead: 'The Agreed-Target Guarantee.',
          body: 'The lead target goes into the contract before anything is built. If the campaign does not reach it inside the agreed window, you get your fee back.'
        }
      ],

      problemTitle: 'The website that never brings anyone in',
      problemParagraphs: [
        'Your site has been up for years. It looks fine. It says what you do. And the enquiries still arrive the way they always did, from people who already knew you.',
        'Maybe you have tried ads. Somebody set up a campaign, the budget went out, and the report came back full of impressions and clicks. Nobody could tell you which click became a customer, because nothing was counted properly.',
        'So the site sits there, the ads are off, and fixing it stays on the list that moves from month to month. Meanwhile the people searching this afternoon for what you sell are clicking on somebody else.'
      ],

      mechanismTitle: 'Why three weeks is enough',
      mechanismParagraphs: [
        'We call it a search-first build. We start from what people actually type into Google when they want what you sell, and that one list drives both halves of the job. The pages answer those searches. The ads bid on them. The search phrase, the ad and the page all say the same thing.',
        'The build is fast because we are not designing a site from a blank page. We assemble it from a component library we maintain, and AI does the first pass on the structure and the copy. We edit every line before it ships.',
        'Measurement is wired before launch. Forms, calls and conversions are tracked from the very first click, inside accounts you own. That is what makes the target in the guarantee checkable by both of us.'
      ],

      stackTitle: 'What you get',
      stackIntro: 'One fixed scope, agreed in writing before anything is built.',
      stackItems: [
        {
          lead: 'A requirements workshop, four to six hours.',
          body: 'Who you sell to, what a customer is worth to you, the keyword list, and the lead target that goes into the contract.'
        },
        {
          lead: 'The build sprint.',
          body: 'Your website, rebuilt or optimised, with every page written against a search somebody actually makes.'
        },
        {
          lead: 'A presentation session, two to four hours.',
          body: 'We walk you through the site and the campaign before either is public, and you say what changes.'
        },
        {
          lead: 'Go-live, two to four hours.',
          body: 'Domain, tracking and campaign switched on with us watching the first clicks arrive.'
        },
        {
          lead: 'Hosting, included.',
          body: 'The site runs on our hosting. If you ever want it elsewhere, we hand over the files and the access.'
        },
        {
          lead: 'Your Google Business Profile, optimised.',
          body: 'The listing that shows up in Google Maps results, filled in properly, in the same pass.'
        },
        {
          lead: 'The Google Ads campaign, launched.',
          body: 'Structure, keywords, negative keywords, ad copy and conversion tracking, in an account that stays in your name.'
        },
        {
          lead: 'Written documentation.',
          body: 'How to edit a page, how to publish it, and what to check each week so the campaign does not drift.'
        }
      ],

      timelineTitle: 'What the three weeks look like',
      timeline: [
        {
          when: 'Day 0',
          body: 'The kickoff workshop. Four to six hours. Scope, keywords, what counts as a lead, and the target. The clock starts here.'
        },
        {
          when: 'Days 1 to 10',
          body: 'The build. Pages, copy and tracking. You see a working version partway through, while there is still time to change it.'
        },
        {
          when: 'Days 11 to 13',
          body: 'The campaign is built inside your own ads account. Keywords, negative keywords, ad copy, budgets and conversion tracking.'
        },
        {
          when: 'Day 14',
          body: 'Presentation, two to four hours. Everything in front of you before any of it is public.'
        },
        {
          when: 'Day 15',
          body: 'Go-live, two to four hours. The domain switches, the campaign opens, and we watch the first traffic together.'
        }
      ],
      timelineNote:
        'Fifteen working days is three calendar weeks, counted from the workshop. If we are waiting on your domain, your ads account or your content, the clock pauses until we have it, and we tell you the day it happens.',

      guaranteeTitle: 'The Agreed-Target Guarantee',
      guaranteePromise:
        'We agree a lead target in writing before we build. If the campaign does not reach it inside the agreed window, we refund your fee.',
      guaranteePoints: [
        {
          lead: 'The target is written down before we build, not after.',
          body: 'How many leads, over how long, and what counts as one. All three go into the contract at the workshop and neither side moves them later. If you want a ceiling on what a lead may cost you, it goes in too.'
        },
        {
          lead: 'A lead is defined once and counted the same way throughout.',
          body: 'Form submissions and tracked calls that meet the criteria we set together. Counted inside your own Google Ads and analytics accounts, which you can read yourself.'
        },
        {
          lead: 'On time, and matching the written requirements.',
          body: 'Three weeks from the workshop, and that date goes into the contract. If the delay is ours, you can cancel and we refund your fee. If anything we deliver does not match the requirements document we signed, we fix it at no cost.'
        },
        {
          lead: 'What we need from you.',
          body: 'Keep the click budget running for the whole window, give us access to the domain and the accounts, and answer every lead within one business day. A lead nobody calls back is not a campaign failure.'
        },
        {
          lead: 'How you claim.',
          body: 'Email info@fijisolutions.net within thirty days of the window closing, with the figures from your own accounts. You get an answer within ten working days.'
        }
      ],
      guaranteeClosing:
        'These terms go into the contract before we build, in these words. We never promise a position in the organic results on Google. Google does not sell rankings.',

      fitTitle: 'Who this is for',
      fitForLabel: 'This is for you if',
      fitFor: [
        'You own the business, or you can decide without taking it upstairs.',
        'You can fund the click budget for the whole window we agree.',
        'Somebody answers new enquiries within one business day.',
        'You sell something people search for. If you are not sure, we check that in the workshop.'
      ],
      fitNotForLabel: 'This is not for you if',
      fitNotFor: [
        'You want the website now and the ads sometime later. The target depends on both.',
        'You want traffic from organic search rather than ads. That is a different engagement.',
        'Nobody internally can spare four to six hours for the workshop.',
        'You want the campaign without the measurement. The guarantee is built on the measurement.'
      ],

      faqTitle: 'The questions we get asked',
      faqs: [
        {
          q: 'What does it cost?',
          a: 'We quote it after the first call, in writing, against what your site and your market need. There is no list price, because scoping a website without seeing yours is guessing. The fee is fixed before anything is built. Your click budget is separate, and you pay Google directly. Separately from the fee there are recurring lines: the domain, renewed at your registrar, hosting and maintenance, and any third-party licence or subscription. We name them in the written quote, in their own column, apart from the one-off work.'
        },
        {
          q: 'Can you get us to number one on Google?',
          a: 'No, and neither can anybody else. Google does not sell positions in its organic results. An agency promising one is paying for the click and calling it a ranking. What we guarantee is a lead target agreed in writing, with your fee back if the campaign misses it.'
        },
        {
          q: 'Who owns the website and the ads account?',
          a: 'You do. The ads account is opened in your name and stays there. The site runs on our hosting because that is faster to launch. You can move it whenever you like, and we hand over the files and the access.'
        },
        {
          q: 'We already have a website. Does it have to be rebuilt?',
          a: 'Not always. If your platform lets us work with it, we optimise what you have. We tell you in the workshop which route reaches the target sooner, and it goes into the scope before you commit.'
        },
        {
          q: 'What happens after go-live?',
          a: 'The campaign keeps running and it needs a hand on it. Ongoing management is a separate Google Ads retainer, and keeping the site current is a separate care plan. Both are optional.'
        }
      ],

      ctaButton: 'Launch my website and campaign',
      ctaCallout:
        'Free call, no obligation. You leave it knowing whether Google Ads can pay for itself in your market, whether or not you hire us.',

      formTitle: 'Tell us what you sell, and where',
      formSubhead:
        'Name what you sell and the area you serve. We will come back with what it would take to bring you leads from Google, and the target we would sign.',
      formMessageLabel: 'What do you sell, and where? (optional)',
      formMessagePlaceholder: 'e.g. commercial air conditioning, Thessaloniki and Halkidiki…',
      formMicrocopy: 'Free, no obligation, no sales pitch.',
      formSuccess: 'Thank you. We will come back to you about your website and your campaign.',
      calendlyLead: 'Prefer to skip the form? Book the call directly:',
      calendlyLink: 'Pick a time on Calendly'
    },

    el: {
      // Paid-search intent only. The organic money keywords (κατασκευή ιστοσελίδων, προώθηση
      // ιστοσελίδων) belong to /offers/website-seo and must never appear in this title — see the
      // keyword-separation note at the top of this file. No «Θεσσαλονίκη» here either: «διαφήμιση
      // google θεσσαλονίκη» is unmeasured, and a second Thessaloniki-modified website page on one
      // domain is the cannibalisation the sibling file warns about.
      metaTitle: 'Διαφήμιση Google Ads | Fiji Solutions',
      metaDescription:
        'Διαφήμιση στη Google και ιστοσελίδα, στον αέρα μαζί τρεις εβδομάδες από την εναρκτήρια συνάντηση. Γραπτός στόχος σε νέα αιτήματα ή πίσω η αμοιβή.',
      metaKeywords:
        'διαφήμιση Google, διαφήμιση στη Google, διαχείριση Google Ads, καμπάνια Google Ads, κατασκευή ιστοσελίδας και Google Ads, Google Ads για μικρή επιχείρηση',
      ogAlt: 'Fiji Solutions - διαφήμιση Google Ads και ιστοσελίδα, στον αέρα τρεις εβδομάδες από την εναρκτήρια συνάντηση',

      eyebrow: 'Διαφήμιση Google Ads και ιστοσελίδα',
      title: 'Η ιστοσελίδα σου και η καμπάνια σου στο Google Ads, στον αέρα μαζί, τρεις εβδομάδες από την εναρκτήρια συνάντηση.',
      subhead:
        'Ξαναχτίζουμε ή βελτιώνουμε την ιστοσελίδα σου, τη φιλοξενούμε και ανεβάζουμε την καμπάνια μέσα στον δικό σου λογαριασμό Google Ads. Πριν χτιστεί οτιδήποτε, συμφωνούμε γραπτά πόσα νέα αιτήματα πρέπει να σου φέρει. Αν δεν τα φέρει, σου επιστρέφουμε την αμοιβή.',
      bullets: [
        {
          lead: 'Η ιστοσελίδα και οι διαφημίσεις είναι μία δουλειά.',
          body: 'Μια καλή σελίδα που δεν τη βλέπει κανείς και πληρωμένα κλικ που πέφτουν σε αδύναμη σελίδα αποτυγχάνουν το ίδιο. Και τα δύο χτίζονται πάνω σε μία λίστα λέξεων-κλειδιών.'
        },
        {
          lead: 'Τρεις εβδομάδες από την εναρκτήρια συνάντηση.',
          body: 'Όχι τρεις εβδομάδες από το πρώτο σου email. Το ρολόι ξεκινά τη μέρα που καθόμαστε μαζί και συμφωνούμε αντικείμενο, λέξεις-κλειδιά και στόχο.'
        },
        {
          lead: 'Η Εγγύηση Συμφωνημένου Στόχου.',
          body: 'Ο στόχος σε νέα αιτήματα μπαίνει στο συμβόλαιο πριν χτιστεί οτιδήποτε. Αν η καμπάνια δεν τον πιάσει μέσα στο συμφωνημένο διάστημα, παίρνεις πίσω την αμοιβή σου.'
        }
      ],

      problemTitle: 'Η ιστοσελίδα που δεν φέρνει ποτέ κανέναν',
      problemParagraphs: [
        'Η ιστοσελίδα σου είναι στον αέρα εδώ και χρόνια. Δείχνει μια χαρά. Λέει τι κάνεις. Και τα τηλέφωνα χτυπάνε πάλι από ανθρώπους που ήδη σε ήξεραν, όπως ακριβώς και πριν υπάρξει.',
        'Ίσως έχεις δοκιμάσει διαφημίσεις. Κάποιος έστησε μια καμπάνια, ο προϋπολογισμός έφυγε, και η αναφορά γύρισε γεμάτη εμφανίσεις και κλικ. Κανείς δεν μπορούσε να σου πει ποιο κλικ έγινε πελάτης, γιατί τίποτα δεν μετριόταν σωστά.',
        'Έτσι η ιστοσελίδα κάθεται, οι διαφημίσεις είναι κλειστές, και η διόρθωση μένει σε μια λίστα που μεταφέρεται από μήνα σε μήνα. Στο μεταξύ, όσοι ψάχνουν σήμερα αυτό που πουλάς κάνουν κλικ σε κάποιον άλλον.'
      ],

      mechanismTitle: 'Γιατί φτάνουν τρεις εβδομάδες',
      mechanismParagraphs: [
        'Το λέμε χτίσιμο με πρώτη την αναζήτηση. Ξεκινάμε από αυτό που πληκτρολογεί στ’ αλήθεια ο κόσμος στη Google όταν θέλει αυτό που πουλάς, και αυτή η μία λίστα οδηγεί και τα δύο κομμάτια της δουλειάς. Οι σελίδες απαντούν σε αυτές τις αναζητήσεις. Οι διαφημίσεις δίνουν προσφορά σε αυτές. Η φράση αναζήτησης, η διαφήμιση και η σελίδα λένε το ίδιο πράγμα.',
        'Το χτίσιμο είναι γρήγορο γιατί δεν σχεδιάζουμε ιστοσελίδες από λευκή σελίδα. Τις συναρμολογούμε από μια βιβλιοθήκη κομματιών που συντηρούμε εμείς, και το AI κάνει το πρώτο πέρασμα στη δομή και στα κείμενα. Κάθε γραμμή περνά από εμάς πριν βγει.',
        'Η μέτρηση στήνεται πριν βγει οτιδήποτε στον αέρα. Φόρμες, κλήσεις και μετατροπές καταγράφονται από το πρώτο κιόλας κλικ, μέσα σε λογαριασμούς που είναι δικοί σου. Αυτό είναι που κάνει τον στόχο της εγγύησης ελέγξιμο και από τους δύο.'
      ],

      stackTitle: 'Τι παίρνεις',
      stackIntro: 'Ένα σταθερό αντικείμενο εργασίας, συμφωνημένο γραπτά πριν χτιστεί οτιδήποτε.',
      stackItems: [
        {
          lead: 'Εναρκτήρια συνάντηση, τέσσερις με έξι ώρες.',
          body: 'Σε ποιον πουλάς, τι αξίζει ένας πελάτης για εσένα, η λίστα με τις λέξεις-κλειδιά, και ο στόχος σε νέα αιτήματα που μπαίνει στο συμβόλαιο.'
        },
        {
          lead: 'Η υλοποίηση.',
          body: 'Η ιστοσελίδα σου, ξαναχτισμένη ή βελτιωμένη, με κάθε σελίδα γραμμένη πάνω σε μια αναζήτηση που κάποιος κάνει στ’ αλήθεια.'
        },
        {
          lead: 'Συνάντηση παρουσίασης, δύο με τέσσερις ώρες.',
          body: 'Σου δείχνουμε ιστοσελίδα και καμπάνια πριν βγει οτιδήποτε στον αέρα, και μας λες τι αλλάζει.'
        },
        {
          lead: 'Βγαίνει στον αέρα, δύο με τέσσερις ώρες.',
          body: 'Domain, καταγραφή και καμπάνια ανοίγουν με εμάς μπροστά, βλέποντας τα πρώτα κλικ να έρχονται.'
        },
        {
          lead: 'Φιλοξενία, μέσα στο αντικείμενο.',
          body: 'Η ιστοσελίδα τρέχει στη δική μας φιλοξενία. Αν κάποτε το θέλεις αλλού, σου παραδίδουμε τα αρχεία και τις προσβάσεις.'
        },
        {
          lead: 'Το Google Business Profile σου, τακτοποιημένο.',
          body: 'Η καταχώρηση που εμφανίζεται στα αποτελέσματα του Google Maps, συμπληρωμένη σωστά, στο ίδιο πέρασμα.'
        },
        {
          lead: 'Η καμπάνια Google Ads, στον αέρα.',
          body: 'Δομή, λέξεις-κλειδιά, αρνητικές λέξεις-κλειδιά, κείμενα διαφημίσεων και καταγραφή μετατροπών, σε λογαριασμό που μένει στο όνομά σου.'
        },
        {
          lead: 'Γραπτή τεκμηρίωση.',
          body: 'Πώς αλλάζεις μια σελίδα, πώς τη δημοσιεύεις, και τι κοιτάς κάθε εβδομάδα ώστε να μην ξεφύγει η καμπάνια.'
        }
      ],

      timelineTitle: 'Πώς μοιάζουν οι τρεις εβδομάδες',
      timeline: [
        {
          when: 'Ημέρα 0',
          body: 'Η εναρκτήρια συνάντηση. Τέσσερις με έξι ώρες. Αντικείμενο, λέξεις-κλειδιά, τι μετράει ως αίτημα, και ο στόχος. Το ρολόι ξεκινά εδώ.'
        },
        {
          when: 'Ημέρες 1 έως 10',
          body: 'Χτίζουμε. Σελίδες, κείμενα και καταγραφή. Βλέπεις μια λειτουργική εκδοχή στη μέση της διαδρομής, όσο προλαβαίνεις ακόμα να ζητήσεις αλλαγές.'
        },
        {
          when: 'Ημέρες 11 έως 13',
          body: 'Στήνουμε την καμπάνια μέσα στον δικό σου λογαριασμό. Λέξεις-κλειδιά, αρνητικές λέξεις-κλειδιά, κείμενα, προϋπολογισμοί και καταγραφή μετατροπών.'
        },
        {
          when: 'Ημέρα 14',
          body: 'Παρουσίαση, δύο με τέσσερις ώρες. Όλα μπροστά σου πριν βγει τίποτα δημόσια.'
        },
        {
          when: 'Ημέρα 15',
          body: 'Βγαίνει στον αέρα, δύο με τέσσερις ώρες. Το domain αλλάζει, η καμπάνια ανοίγει, και βλέπουμε μαζί την πρώτη επισκεψιμότητα.'
        }
      ],
      timelineNote:
        'Δεκαπέντε εργάσιμες ημέρες είναι τρεις ημερολογιακές εβδομάδες, μετρημένες από την εναρκτήρια συνάντηση. Αν περιμένουμε το domain σου, τον λογαριασμό διαφημίσεων ή το υλικό σου, το ρολόι σταματά μέχρι να τα λάβουμε, και σου το λέμε τη μέρα που συμβαίνει.',

      guaranteeTitle: 'Η Εγγύηση Συμφωνημένου Στόχου',
      guaranteePromise:
        'Συμφωνούμε γραπτά έναν στόχο σε νέα αιτήματα πριν χτίσουμε. Αν η καμπάνια δεν τον πιάσει μέσα στο συμφωνημένο διάστημα, σου επιστρέφουμε την αμοιβή.',
      guaranteePoints: [
        {
          lead: 'Ο στόχος γράφεται πριν χτίσουμε, όχι μετά.',
          body: 'Πόσα αιτήματα, σε πόσο διάστημα, και τι μετράει ως αίτημα. Και τα τρία μπαίνουν στο συμβόλαιο μέσα στη συνάντηση και δεν τα μετακινεί μετά κανένας μας. Αν θέλεις και ανώτατο κόστος ανά αίτημα, μπαίνει και αυτό.'
        },
        {
          lead: 'Το αίτημα ορίζεται μία φορά και μετριέται το ίδιο σε όλη τη διαδρομή.',
          body: 'Υποβολές φόρμας και καταγεγραμμένες κλήσεις που πληρούν τα κριτήρια που ορίζουμε μαζί. Μετριούνται μέσα στους δικούς σου λογαριασμούς Google Ads και analytics, που τους διαβάζεις μόνος σου.'
        },
        {
          lead: 'Στην ώρα του, και σύμφωνα με τις γραπτές απαιτήσεις.',
          body: 'Τρεις εβδομάδες από την εναρκτήρια συνάντηση, και η ημερομηνία μπαίνει στο συμβόλαιο. Αν αργήσουμε με δική μας ευθύνη, μπορείς να ακυρώσεις και σου επιστρέφουμε την αμοιβή. Αν κάτι από όσα παραδίδουμε δεν ταιριάζει με το έγγραφο απαιτήσεων που υπογράψαμε, το διορθώνουμε χωρίς χρέωση.'
        },
        {
          lead: 'Τι ζητάμε από εσένα.',
          body: 'Να κρατήσεις τον προϋπολογισμό των κλικ ανοιχτό για όλο το διάστημα, να μας δώσεις πρόσβαση στο domain και στους λογαριασμούς, και να απαντάς σε κάθε αίτημα μέσα σε μία εργάσιμη ημέρα. Ένα αίτημα που δεν το πήρε κανείς τηλέφωνο δεν είναι αποτυχία της καμπάνιας.'
        },
        {
          lead: 'Πώς κάνεις χρήση της εγγύησης.',
          body: 'Στέλνεις email στο info@fijisolutions.net μέσα σε τριάντα ημέρες από το κλείσιμο του διαστήματος, με τα νούμερα από τους δικούς σου λογαριασμούς. Παίρνεις απάντηση μέσα σε δέκα εργάσιμες ημέρες.'
        }
      ],
      guaranteeClosing:
        'Αυτοί οι όροι μπαίνουν στο συμβόλαιο πριν χτίσουμε, με αυτά ακριβώς τα λόγια. Θέση στα οργανικά αποτελέσματα της Google δεν την υποσχόμαστε ποτέ. Η Google δεν πουλάει κατατάξεις.',

      fitTitle: 'Για ποιον είναι',
      fitForLabel: 'Είναι για εσένα αν',
      fitFor: [
        'Έχεις την επιχείρηση, ή μπορείς να αποφασίσεις χωρίς να το πας παραπάνω.',
        'Μπορείς να καλύψεις τον προϋπολογισμό των κλικ για όλο το διάστημα που συμφωνούμε.',
        'Κάποιος απαντά στα νέα αιτήματα μέσα σε μία εργάσιμη ημέρα.',
        'Πουλάς κάτι που ο κόσμος το ψάχνει. Αν δεν είσαι σίγουρος, το ελέγχουμε στην εναρκτήρια συνάντηση.'
      ],
      fitNotForLabel: 'Δεν είναι για εσένα αν',
      fitNotFor: [
        'Θέλεις πρώτα την ιστοσελίδα και τις διαφημίσεις κάποια άλλη στιγμή. Ο στόχος στηρίζεται και στα δύο.',
        'Θέλεις επισκεψιμότητα από την οργανική αναζήτηση αντί για διαφημίσεις. Αυτό είναι άλλο έργο.',
        'Κανείς εσωτερικά δεν μπορεί να διαθέσει τέσσερις με έξι ώρες για την εναρκτήρια συνάντηση.',
        'Θέλεις την καμπάνια χωρίς τη μέτρηση. Η εγγύηση στηρίζεται στη μέτρηση.'
      ],

      localTitle: 'Η εταιρεία πίσω από την καμπάνια',
      localParagraphs: [
        'Η Fiji Solutions είναι ελληνική εταιρεία με έδρα τη Θεσσαλονίκη, στο Porto Center. Η διεύθυνση και το τηλέφωνο είναι εδώ από κάτω.',
        'Τις περιοχές στις οποίες θα δείχνει διαφημίσεις η καμπάνια τις διαλέγουμε μαζί στην εναρκτήρια συνάντηση, μαζί με τις λέξεις-κλειδιά, και μπαίνουν στο ίδιο γραπτό με τον στόχο. Αν πουλάς σε Θεσσαλονίκη και Χαλκιδική, η καμπάνια στήνεται ακριβώς για εκεί.'
      ],
      localAddress: 'Fiji Solutions ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ, Νικηφόρου Ουρανού 15 και Μινώταυρου, Κτίριο Γ1, Porto Center, 3ος όροφος, Θεσσαλονίκη 54627. ΓΕΜΗ 185101306000.',
      localPhone: '+30 231 107 0108',
      localPhoneHref: 'tel:+302311070108',

      faqTitle: 'Οι ερωτήσεις που μας κάνουν',
      faqs: [
        {
          q: 'Πόσο κοστίζει;',
          a: 'Δεν υπάρχει τιμοκατάλογος, γιατί το να κοστολογήσεις μια ιστοσελίδα χωρίς να τη δεις είναι μαντεψιά. Την αμοιβή την καθορίζουν πόσες σελίδες χρειάζεται η ιστοσελίδα, αν ξαναχτίζουμε από την αρχή ή δουλεύουμε πάνω σε αυτό που ήδη έχεις, και πόσο μεγάλη είναι η καμπάνια που θέλει η αγορά σου. Τα περνάμε ένα ένα στην πρώτη κλήση και μετά παίρνεις γραπτή προσφορά. Η αμοιβή κλειδώνει πριν χτιστεί οτιδήποτε. Ο προϋπολογισμός των κλικ είναι ξεχωριστός και τον πληρώνεις εσύ απευθείας στη Google. Χωριστά από την αμοιβή τρέχουν οι επαναλαμβανόμενες γραμμές: το όνομα χώρου, που ανανεώνεται στον καταχωρητή σου, η φιλοξενία και η συντήρηση, και όποια άδεια ή συνδρομή τρίτου χρειαστεί. Τις γράφουμε ονομαστικά στη γραπτή προσφορά, χωρισμένες από τα εφάπαξ.'
        },
        {
          // Same target as the twin entry in website-seo.ts: the «τιμες» query, answered without a
          // figure. Rule 7 has no keyword exception.
          q: 'Γιατί δεν γράφετε τιμές στη σελίδα;',
          a: 'Γιατί όποιο νούμερο βάζαμε εδώ θα ήταν λάθος για τους μισούς που το διαβάζουν. Δεν δουλεύουμε με πακέτα. Κοστολογούμε αυτό που χρειάζεται η δική σου ιστοσελίδα και η δική σου αγορά, το γράφουμε, και το συμφωνούμε μαζί σου πριν χτιστεί οτιδήποτε. Δύο νούμερα πάντως τα ξεχωρίζουμε από την πρώτη κουβέντα: η αμοιβή μας, που κλειδώνει και δεν κουνιέται, και ο προϋπολογισμός των κλικ, που πάει κατευθείαν στη Google και μένει δικός σου.'
        },
        {
          q: 'Μπορείτε να μας βγάλετε πρώτους στη Google;',
          a: 'Όχι, και κανείς άλλος δεν μπορεί. Η Google δεν πουλάει θέσεις στα οργανικά της αποτελέσματα. Όποιο γραφείο το υπόσχεται πληρώνει το κλικ και το ονομάζει κατάταξη. Αυτό που εγγυόμαστε εμείς είναι ένας στόχος σε νέα αιτήματα, συμφωνημένος γραπτά, με επιστροφή της αμοιβής αν η καμπάνια τον χάσει.'
        },
        {
          q: 'Ποιος έχει την ιστοσελίδα και τον λογαριασμό διαφημίσεων;',
          a: 'Εσύ. Ο λογαριασμός Google Ads ανοίγει στο όνομά σου και μένει εκεί. Η ιστοσελίδα τρέχει στη δική μας φιλοξενία γιατί έτσι βγαίνει πιο γρήγορα στον αέρα. Μπορείς να το μεταφέρεις όποτε θελήσεις, και σου παραδίδουμε αρχεία και προσβάσεις.'
        },
        {
          q: 'Έχουμε ήδη ιστοσελίδα. Πρέπει να ξαναχτιστεί;',
          a: 'Όχι πάντα. Αν η πλατφόρμα σου μας αφήνει να δουλέψουμε πάνω της, βελτιώνουμε αυτό που έχεις. Στην εναρκτήρια συνάντηση σου λέμε ποιος δρόμος φτάνει πιο γρήγορα στον στόχο, και μπαίνει στο αντικείμενο πριν δεσμευτείς.'
        },
        {
          q: 'Τι γίνεται αφού βγει στον αέρα;',
          a: 'Η καμπάνια συνεχίζει να τρέχει και θέλει χέρι πάνω της. Η συνεχής διαχείριση Google Ads είναι ξεχωριστή, όπως και το πλάνο φροντίδας που κρατά την ιστοσελίδα ενημερωμένη. Και τα δύο είναι προαιρετικά.'
        }
      ],

      ctaButton: 'Ξεκίνα την ιστοσελίδα και την καμπάνια μου',
      ctaCallout:
        'Δωρεάν κλήση, χωρίς δέσμευση. Φεύγεις ξέροντας αν το Google Ads βγάζει τα λεφτά του στην αγορά σου, είτε μας αναθέσεις τη δουλειά είτε όχι.',

      formTitle: 'Πες μας τι πουλάς και πού',
      formSubhead:
        'Γράψε μας τι πουλάς και σε ποια περιοχή. Θα σου πούμε τι θα χρειαζόταν για να σου φέρνει αιτήματα η Google, και ποιον στόχο θα υπογράφαμε.',
      formMessageLabel: 'Τι πουλάς και πού; (προαιρετικό)',
      formMessagePlaceholder: 'π.χ. επαγγελματικός κλιματισμός, Θεσσαλονίκη και Χαλκιδική…',
      formMicrocopy: 'Δωρεάν, χωρίς δεσμεύσεις, χωρίς πιέσεις.',
      formSuccess: 'Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου για την ιστοσελίδα και την καμπάνια σου.',
      calendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση απευθείας:',
      calendlyLink: 'Διάλεξε ώρα στο Calendly'
    }
  }
};

export default websiteGoogleAds;
