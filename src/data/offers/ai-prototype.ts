import type {Offer} from '@/components/OfferLanding';

// Offer H from the Proven Offers workbook: "AI Prototype (1 use case)".
//
// Timeline: the workbook says 3-30 days. Published as TWO WEEKS, which is the midpoint of that
// range rounded down to a clean unit, per the rule applied to all eight offers. The anchor is the
// kickoff workshop and it is stated in the same sentence as the number, every time. Somebody who
// mails us today does not have a prototype in two weeks; the clock starts when we sit down.
//
// Guarantee: the workbook's row 11 for this offer lists timeline, requirements match, "guaranteed
// free of bugs", and a cost reduction for the agreed use case. Three of those are written here as
// they stand. The fourth is written as a WARRANTY, "we fix any defect against the agreed
// requirements at no cost", because nobody can guarantee software free of bugs and the promise
// underneath that phrase is a warranty. The percentage is 75 and the consequence is a refund.
//
// THE 75% IS A PROMISE WITH A REMEDY, NOT A MEASUREMENT OF PAST WORK. Nothing here says we have
// achieved 75% for anyone: `proof/` holds no measured client result and cannot back that sentence.
// The guarantee section says as much in its own words, in both locales, and that line is
// load-bearing. Delete it and the same number starts reading as a case study we do not have.
//
// Keyword separation: /services/custom-software-development-greece already owns "custom software
// development Greece" and its sibling terms, and it is the page this one must not compete with.
// This page targets the purchase-intent AI phrasings instead, "AI prototype", "AI proof of
// concept", "AI pilot", which that service page does not chase. Two pages chasing one keyword is
// how the sister repo ended up issuing a 301.

const aiPrototype: Offer = {
  slug: 'offers/ai-prototype',
  questionMarker: 'offer-ai-prototype',
  serviceType: 'Custom Software Development',
  copy: {
    en: {
      metaTitle: 'AI Prototype, Two Weeks From Kickoff | Fiji Solutions',
      metaDescription:
        'Pick one use case. We build a working AI prototype two weeks from the kickoff workshop, and guarantee at least 75% lower cost, or we refund your fee.',
      metaKeywords:
        'AI prototype, AI proof of concept, AI pilot project, test AI on one use case, AI prototype Greece',
      ogAlt: 'Fiji Solutions - an AI prototype for one use case, two weeks from the kickoff workshop',

      eyebrow: 'AI prototype for one use case',
      title: 'See what AI is actually worth here, on one use case, two weeks from the kickoff workshop.',
      subhead:
        'You pick the use case. We build a working AI prototype on your data and measure it against what that work costs you today. Two weeks from the kickoff workshop, and at least 75% lower cost, or we refund your fee.',
      bullets: [
        {
          lead: 'One use case, not an AI programme.',
          body: 'You choose it in the workshop. Reading supplier documents, drafting quotes, triaging tickets, whatever costs most by hand.'
        },
        {
          lead: 'Two weeks from the kickoff workshop.',
          body: 'Not from your first email. The clock starts the day we write the requirements together.'
        },
        {
          lead: 'The Proven-Savings Prototype Guarantee.',
          body: 'We write down what that work costs you today. Miss 75% against that number and you get your fee back.'
        }
      ],

      problemTitle: 'The AI decision nobody can make on paper',
      problemParagraphs: [
        'Everyone in the building has an opinion about AI. The board wants a plan. A vendor wants a nine-month programme and a signature first. Nobody can tell you what it is worth in your business, on your data, on the work your people do every day.',
        'So the decision waits. It waits through another quarter of slide decks and pilots that never touch a real process. The same work carries on by hand, at the same cost.',
        'The real question is narrower. Does this work here, on this use case, at a number worth paying for? One use case is enough to answer it. Postponing it means another year of opinions.'
      ],

      mechanismTitle: 'How two weeks is possible',
      mechanismParagraphs: [
        'We do not start with a blank page. We start with one use case, written down as requirements you sign off, and build on models and platforms that already exist. Nothing is trained from scratch.',
        'The build is AI-assisted on our side too. Code generation writes the first pass. We review it, test it against your real cases, and refine it. That is what takes the months out.',
        'The measurement runs beside the build. We record what the use case costs today in the workshop, and judge the prototype against that number at the end.'
      ],

      stackTitle: 'What you get',
      stackIntro: 'One fixed scope, agreed in writing before anything is built.',
      stackItems: [
        {
          lead: 'A requirements workshop, four to six hours.',
          body: 'We define the use case, the data it touches, and what success means as a number. We leave with what the work costs you today.'
        },
        {
          lead: 'The build sprint.',
          body: 'The prototype itself, built and tested on your real cases rather than a demo dataset.'
        },
        {
          lead: 'A presentation session, two to four hours.',
          body: 'We run it in front of the people who decide, show the measurement against the baseline, and set out what production would take.'
        },
        {
          lead: 'Working software and the source code, in your name.',
          body: 'It runs, and you can put it in front of a board, a client or the team that would use it. The code is yours to keep.'
        },
        {
          lead: 'Written documentation.',
          body: 'What it does, what data it uses, where its limits are, and what production would need.'
        }
      ],

      timelineTitle: 'What the two weeks look like',
      timeline: [
        {
          when: 'Day 0',
          body: 'The kickoff workshop. Four to six hours. We write the requirements and record what the use case costs today. The clock starts here.'
        },
        {
          when: 'Days 1 to 8',
          body: 'The build sprint. You see a working version partway through, not a reveal at the end.'
        },
        {
          when: 'Day 9',
          body: 'Testing on your real cases, the fixes that follow, and the measurement against the baseline.'
        },
        {
          when: 'Day 10',
          body: 'The presentation. Two to four hours, with the people who decide in the room, and a written view of what production would take.'
        }
      ],
      timelineNote:
        'Ten working days is two calendar weeks, counted from the workshop. If we are missing data or access, the clock pauses until we have it.',

      guaranteeTitle: 'The Proven-Savings Prototype Guarantee',
      guaranteePromise:
        'The prototype arrives on time, matches the requirements you signed, and shows at least a 75% cost reduction for the agreed use case against the baseline measured in the workshop. If not, we refund your fee.',
      guaranteePoints: [
        {
          lead: 'This is a promise, not a past result.',
          body: 'The 75% is what we commit to for your use case, with a refund behind it. It is not a figure measured on somebody else’s project.'
        },
        {
          lead: 'The baseline is measured before we build.',
          body: 'In the workshop we count what the use case takes today and what that time costs. That number goes into the contract.'
        },
        {
          lead: 'On time, and to the requirements.',
          body: 'Two weeks from the workshop, against the requirements you signed. If we are waiting on data or access from you, that time does not count. Miss either and we refund your fee.'
        },
        {
          lead: 'Defects are ours.',
          body: 'We fix any defect against the agreed requirements at no cost.'
        },
        {
          lead: 'How you claim.',
          body: 'Email info@fijisolutions.net within thirty days of the measurement. You get an answer within ten working days.'
        }
      ],
      guaranteeClosing:
        'These terms go into the contract before we build, in these words.',

      fitTitle: 'Who this is for',
      fitForLabel: 'This is for you if',
      fitFor: [
        'You have a budget line for AI, or you are about to justify one.',
        'You can name one use case that costs real money by hand today.',
        'You can decide without a six-month committee.',
        'You can give us the data, or a realistic sample of it.'
      ],
      fitNotForLabel: 'This is not for you if',
      fitNotFor: [
        'You want a company-wide AI strategy. This is one use case.',
        'The use case has no data behind it yet.',
        'Nobody can spare four to six hours for the workshop.',
        'You want the prototype without the measurement.'
      ],

      faqTitle: 'The questions we get asked',
      faqs: [
        {
          q: 'What does it cost?',
          a: 'We quote it after the first call, in writing, against what your use case needs. There is no list price and no rate card, because scoping a use case without seeing it is guessing. The fee is fixed before we build.'
        },
        {
          q: 'Is a prototype just a demo?',
          a: 'No. It runs on your data and your real cases, and you keep the source code. What makes it a prototype is scope: one use case, without the edge cases and integrations a production system needs.'
        },
        {
          q: 'What if it shows AI is not worth it here?',
          a: 'Then you have your answer for the cost of two weeks instead of a year, and you keep the code, the documentation and the baseline numbers. The guarantee covers that too. No 75%, no fee.'
        },
        {
          q: 'Who owns the code and the data?',
          a: 'The code we write is yours. Your data stays yours, and we agree in writing which data may reach which model provider before anything is processed.'
        },
        {
          q: 'What happens after the two weeks?',
          a: 'Three doors, and you pick. Stop here with the answer. Take it to an MVP. Or go to a full build with the same team. Nothing from the prototype is thrown away.'
        }
      ],

      ctaButton: 'Scope my AI prototype',
      ctaCallout:
        'Free call, no obligation. You leave knowing whether your use case is worth building and what it would take.',

      formTitle: 'Tell us the use case',
      formSubhead:
        'Name the work you would test AI on first. We will come back with what a prototype would take and what it would have to save to be worth it.',
      formMessageLabel: 'Which use case should we look at? (optional)',
      formMessagePlaceholder: 'e.g. reading supplier invoices, drafting quotes, triaging tickets…',
      formMicrocopy: 'Free, no obligation, no sales pitch.',
      formSuccess: 'Thank you. We will come back to you about your use case.',
      calendlyLead: 'Prefer to skip the form? Book the call directly:',
      calendlyLink: 'Pick a time on Calendly'
    },

    el: {
      metaTitle: 'AI πρωτότυπο, 2 εβδομάδες από το workshop | Fiji Solutions',
      metaDescription:
        'Μία περίπτωση χρήσης. Χτίζουμε AI πρωτότυπο σε δύο εβδομάδες από το workshop, με εγγύηση τουλάχιστον 75% χαμηλότερου κόστους ή επιστροφή αμοιβής.',
      metaKeywords:
        'AI πρωτότυπο, AI proof of concept, πιλοτικό έργο AI, δοκιμή AI σε μία περίπτωση χρήσης, AI πρωτότυπο Ελλάδα',
      ogAlt: 'Fiji Solutions - AI πρωτότυπο για μία περίπτωση χρήσης, δύο εβδομάδες από το workshop έναρξης',

      eyebrow: 'AI πρωτότυπο για μία περίπτωση χρήσης',
      title: 'Δες τι αξίζει στα αλήθεια το AI εδώ, σε μία περίπτωση χρήσης, δύο εβδομάδες από το workshop έναρξης.',
      subhead:
        'Εσύ διαλέγεις την περίπτωση χρήσης. Χτίζουμε ένα AI πρωτότυπο πάνω στα δικά σου δεδομένα και το μετράμε απέναντι σε αυτό που σου κοστίζει σήμερα η ίδια δουλειά. Δύο εβδομάδες από το workshop έναρξης, και τουλάχιστον 75% χαμηλότερο κόστος, αλλιώς σου επιστρέφουμε την αμοιβή.',
      bullets: [
        {
          lead: 'Μία περίπτωση χρήσης, όχι πρόγραμμα AI.',
          body: 'Τη διαλέγεις στο workshop. Ανάγνωση εγγράφων προμηθευτών, σύνταξη προσφορών, διαλογή αιτημάτων, ό,τι κοστίζει περισσότερο στο χέρι.'
        },
        {
          lead: 'Δύο εβδομάδες από το workshop έναρξης.',
          body: 'Όχι από το πρώτο σου email. Το ρολόι ξεκινά τη μέρα που γράφουμε μαζί τις απαιτήσεις.'
        },
        {
          lead: 'Η Εγγύηση Αποδεδειγμένης Εξοικονόμησης.',
          body: 'Γράφουμε τι σου κοστίζει σήμερα αυτή η δουλειά. Αν το πρωτότυπο πέσει έξω από το 75%, παίρνεις πίσω την αμοιβή σου.'
        }
      ],

      problemTitle: 'Η απόφαση για το AI που δεν βγαίνει στα χαρτιά',
      problemParagraphs: [
        'Όλοι μέσα στην εταιρεία έχουν άποψη για το AI. Η διοίκηση θέλει πλάνο. Ένας προμηθευτής θέλει εννιάμηνο πρόγραμμα και υπογραφή από πριν. Κανείς δεν μπορεί να σου πει τι αξίζει στη δική σου επιχείρηση, στα δικά σου δεδομένα, πάνω στη δουλειά που κάνουν οι άνθρωποί σου κάθε μέρα.',
        'Έτσι η απόφαση περιμένει. Περιμένει άλλο ένα τρίμηνο με παρουσιάσεις και πιλότους που δεν ακουμπούν καμία πραγματική διαδικασία. Και η ίδια δουλειά συνεχίζει να γίνεται στο χέρι, με το ίδιο κόστος.',
        'Το πραγματικό ερώτημα είναι πιο στενό. Δουλεύει εδώ, σε αυτή την περίπτωση χρήσης, με νούμερο που αξίζει να πληρώσεις; Μία περίπτωση χρήσης φτάνει για να απαντηθεί. Κάθε αναβολή σημαίνει άλλον έναν χρόνο με απόψεις.'
      ],

      mechanismTitle: 'Πώς γίνονται δύο εβδομάδες',
      mechanismParagraphs: [
        'Δεν ξεκινάμε από άδειο αρχείο. Ξεκινάμε από μία περίπτωση χρήσης, γραμμένη ως απαιτήσεις που εγκρίνεις εσύ, και χτίζουμε πάνω σε μοντέλα και πλατφόρμες που ήδη υπάρχουν. Τίποτα δεν εκπαιδεύεται από το μηδέν.',
        'Η υλοποίηση είναι AI-assisted και από τη δική μας πλευρά. Η παραγωγή κώδικα γράφει το πρώτο πέρασμα. Εμείς το ελέγχουμε, το δοκιμάζουμε στις πραγματικές σου περιπτώσεις και το διορθώνουμε. Αυτό βγάζει τους μήνες από τη μέση.',
        'Η μέτρηση τρέχει δίπλα στην υλοποίηση. Καταγράφουμε στο workshop τι κοστίζει σήμερα η περίπτωση χρήσης, και στο τέλος κρίνουμε το πρωτότυπο πάνω στο ίδιο νούμερο.'
      ],

      stackTitle: 'Τι παίρνεις',
      stackIntro: 'Ένα σταθερό αντικείμενο εργασίας, συμφωνημένο γραπτά πριν χτιστεί οτιδήποτε.',
      stackItems: [
        {
          lead: 'Workshop απαιτήσεων, τέσσερις με έξι ώρες.',
          body: 'Ορίζουμε την περίπτωση χρήσης, τα δεδομένα που ακουμπά, και τι σημαίνει επιτυχία σε νούμερο. Φεύγουμε έχοντας γράψει τι σου κοστίζει σήμερα.'
        },
        {
          lead: 'Το build sprint.',
          body: 'Το ίδιο το πρωτότυπο, χτισμένο και δοκιμασμένο στις πραγματικές σου περιπτώσεις, όχι σε δείγμα επίδειξης.'
        },
        {
          lead: 'Συνάντηση παρουσίασης, δύο με τέσσερις ώρες.',
          body: 'Το τρέχουμε μπροστά σε όσους αποφασίζουν, δείχνουμε τη μέτρηση απέναντι στη βάση αναφοράς, και λέμε τι θα χρειαζόταν η παραγωγή.'
        },
        {
          lead: 'Λογισμικό που δουλεύει και ο πηγαίος κώδικας, στο όνομά σου.',
          body: 'Τρέχει, και μπορείς να το δείξεις σε διοικητικό συμβούλιο, σε πελάτη ή στην ομάδα που θα το χρησιμοποιούσε. Ο κώδικας μένει δικός σου.'
        },
        {
          lead: 'Γραπτή τεκμηρίωση.',
          body: 'Τι κάνει, ποια δεδομένα χρησιμοποιεί, πού είναι τα όριά του, και τι θα χρειαζόταν για παραγωγή.'
        }
      ],

      timelineTitle: 'Πώς μοιάζουν οι δύο εβδομάδες',
      timeline: [
        {
          when: 'Ημέρα 0',
          body: 'Το workshop έναρξης. Τέσσερις με έξι ώρες. Γράφουμε τις απαιτήσεις και καταγράφουμε τι κοστίζει σήμερα η περίπτωση χρήσης. Το ρολόι ξεκινά εδώ.'
        },
        {
          when: 'Ημέρες 1 έως 8',
          body: 'Το build sprint. Βλέπεις μια λειτουργική εκδοχή στη μέση της διαδρομής, όχι αποκάλυψη στο τέλος.'
        },
        {
          when: 'Ημέρα 9',
          body: 'Δοκιμές στις πραγματικές σου περιπτώσεις, οι διορθώσεις που ακολουθούν, και η μέτρηση απέναντι στη βάση αναφοράς.'
        },
        {
          when: 'Ημέρα 10',
          body: 'Η παρουσίαση. Δύο με τέσσερις ώρες, με όσους αποφασίζουν στην αίθουσα, και γραπτό πλάνο για το τι θα χρειαζόταν η παραγωγή.'
        }
      ],
      timelineNote:
        'Δέκα εργάσιμες ημέρες είναι δύο ημερολογιακές εβδομάδες, μετρημένες από το workshop. Αν μας λείπουν δεδομένα ή πρόσβαση, το ρολόι σταματά μέχρι να τα λάβουμε.',

      guaranteeTitle: 'Η Εγγύηση Αποδεδειγμένης Εξοικονόμησης',
      guaranteePromise:
        'Το πρωτότυπο έρχεται στην ώρα του, ταιριάζει με τις απαιτήσεις που ενέκρινες, και δείχνει τουλάχιστον 75% μείωση κόστους για τη συμφωνημένη περίπτωση χρήσης, πάνω στη βάση αναφοράς που μετρήσαμε στο workshop. Αν όχι, σου επιστρέφουμε την αμοιβή.',
      guaranteePoints: [
        {
          lead: 'Είναι υπόσχεση, όχι αποτέλεσμα από το παρελθόν.',
          body: 'Το 75% είναι αυτό που δεσμευόμαστε για τη δική σου περίπτωση χρήσης, με επιστροφή χρημάτων από πίσω. Δεν είναι νούμερο μετρημένο σε έργο κάποιου άλλου.'
        },
        {
          lead: 'Η βάση αναφοράς μετριέται πριν χτίσουμε.',
          body: 'Στο workshop μετράμε πόσο χρόνο παίρνει σήμερα η περίπτωση χρήσης και τι κοστίζει αυτός ο χρόνος. Το νούμερο μπαίνει στο συμβόλαιο.'
        },
        {
          lead: 'Στην ώρα του, και πάνω στις απαιτήσεις.',
          body: 'Δύο εβδομάδες από το workshop, απέναντι στις απαιτήσεις που ενέκρινες. Αν περιμένουμε δεδομένα ή πρόσβαση από εσένα, αυτός ο χρόνος δεν μετράει. Αν χάσουμε κάποιο από τα δύο, σου επιστρέφουμε την αμοιβή.'
        },
        {
          lead: 'Τα σφάλματα είναι δική μας δουλειά.',
          body: 'Διορθώνουμε χωρίς χρέωση κάθε σφάλμα σε σχέση με τις συμφωνημένες απαιτήσεις.'
        },
        {
          lead: 'Πώς κάνεις χρήση της εγγύησης.',
          body: 'Στέλνεις email στο info@fijisolutions.net μέσα σε τριάντα ημέρες από τη μέτρηση. Παίρνεις απάντηση μέσα σε δέκα εργάσιμες ημέρες.'
        }
      ],
      guaranteeClosing:
        'Αυτοί οι όροι μπαίνουν στο συμβόλαιο πριν χτίσουμε, με αυτά ακριβώς τα λόγια.',

      fitTitle: 'Για ποιον είναι',
      fitForLabel: 'Είναι για εσένα αν',
      fitFor: [
        'Έχεις προϋπολογισμό για AI, ή πρόκειται να χρειαστεί να τον δικαιολογήσεις.',
        'Μπορείς να ονομάσεις μία περίπτωση χρήσης που κοστίζει πραγματικά χρήματα στο χέρι.',
        'Αποφασίζεις χωρίς εξάμηνη επιτροπή.',
        'Μπορείς να μας δώσεις τα δεδομένα, ή ένα ρεαλιστικό δείγμα τους.'
      ],
      fitNotForLabel: 'Δεν είναι για εσένα αν',
      fitNotFor: [
        'Θέλεις στρατηγική AI για όλη την εταιρεία. Εδώ μιλάμε για μία περίπτωση χρήσης.',
        'Η περίπτωση χρήσης δεν έχει ακόμα δεδομένα από πίσω.',
        'Κανείς δεν μπορεί να διαθέσει τέσσερις με έξι ώρες για το workshop.',
        'Θέλεις το πρωτότυπο χωρίς τη μέτρηση.'
      ],

      faqTitle: 'Οι ερωτήσεις που μας κάνουν',
      faqs: [
        {
          q: 'Πόσο κοστίζει;',
          a: 'Σου δίνουμε προσφορά μετά την πρώτη κλήση, γραπτά, με βάση αυτό που χρειάζεται η περίπτωση χρήσης σου. Δεν υπάρχει τιμοκατάλογος, γιατί το να κοστολογήσεις μια περίπτωση χρήσης χωρίς να τη δεις είναι μαντεψιά. Η αμοιβή κλειδώνει πριν χτίσουμε.'
        },
        {
          q: 'Το πρωτότυπο είναι απλώς ένα demo;',
          a: 'Όχι. Τρέχει πάνω στα δικά σου δεδομένα και στις πραγματικές σου περιπτώσεις, και κρατάς τον πηγαίο κώδικα. Αυτό που το κάνει πρωτότυπο είναι το εύρος: μία περίπτωση χρήσης, χωρίς τις ακραίες περιπτώσεις και τις ενοποιήσεις που θέλει ένα σύστημα παραγωγής.'
        },
        {
          q: 'Τι γίνεται αν δείξει ότι δεν αξίζει εδώ το AI;',
          a: 'Τότε έχεις την απάντησή σου με κόστος δύο εβδομάδων αντί για έναν χρόνο, και κρατάς τον κώδικα, την τεκμηρίωση και τα νούμερα της βάσης αναφοράς. Η εγγύηση καλύπτει και αυτό. Χωρίς 75%, χωρίς αμοιβή.'
        },
        {
          q: 'Ποιος έχει τον κώδικα και τα δεδομένα;',
          a: 'Ο κώδικας που γράφουμε είναι δικός σου. Τα δεδομένα σου μένουν δικά σου, και συμφωνούμε γραπτά ποια δεδομένα φτάνουν σε ποιον πάροχο μοντέλου πριν επεξεργαστεί οτιδήποτε.'
        },
        {
          q: 'Τι γίνεται μετά τις δύο εβδομάδες;',
          a: 'Τρεις δρόμοι, και διαλέγεις εσύ. Σταματάς εδώ με την απάντηση. Το πας σε MVP. Ή προχωράς σε πλήρη υλοποίηση με την ίδια ομάδα. Τίποτα από το πρωτότυπο δεν πετιέται.'
        }
      ],

      ctaButton: 'Θέλω το AI πρωτότυπό μου',
      ctaCallout:
        'Δωρεάν κλήση, χωρίς δέσμευση. Φεύγεις ξέροντας αν η περίπτωση χρήσης σου αξίζει να χτιστεί και τι θα χρειαζόταν.',

      formTitle: 'Πες μας την περίπτωση χρήσης',
      formSubhead:
        'Ονόμασε τη δουλειά που θα δοκίμαζες πρώτη με AI. Θα σου πούμε τι θα χρειαζόταν ένα πρωτότυπο και τι θα έπρεπε να γλιτώνει για να αξίζει.',
      formMessageLabel: 'Ποια περίπτωση χρήσης να δούμε; (προαιρετικό)',
      formMessagePlaceholder: 'π.χ. ανάγνωση τιμολογίων προμηθευτών, σύνταξη προσφορών, διαλογή αιτημάτων…',
      formMicrocopy: 'Δωρεάν, χωρίς δεσμεύσεις, χωρίς πιέσεις.',
      formSuccess: 'Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου για την περίπτωση χρήσης σου.',
      calendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση απευθείας:',
      calendlyLink: 'Διάλεξε ώρα στο Calendly'
    }
  }
};

export default aiPrototype;
