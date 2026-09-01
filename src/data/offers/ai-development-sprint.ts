import type {Offer} from '@/components/OfferLanding';

// Offer K from the Proven Offers workbook: "AI Development Sprint".
//
// Timeline: the workbook gives this offer a single figure, 15 days, rather than the 3-30 day range
// the prototype offers carry, so the midpoint rule that produced "two weeks" elsewhere has nothing
// to average here and 15 days is published as written. It reconciles with the workbook's own
// deliverables: a requirements workshop, a ten-day build sprint and one presentation day is eleven
// working days, and eleven working days after a Monday workshop lands on the fifteenth calendar
// day. The anchor is the kickoff workshop and it is stated in the same sentence as the number,
// every time it appears.
//
// Guarantee: the workbook's row 11 for this offer lists timeline, requirements match, "bug free"
// and "x% time/cost savings". "Bug free" is never printed literally, because nobody can guarantee
// it; what is printed is the warranty underneath it, which is that defects against the agreed
// requirements are fixed at no cost. The percentage is 75, measured against a development-cost
// baseline for the same scope agreed in writing at the workshop, and the consequence is a refund
// of the fee. That is a PROMISE WITH A REMEDY, not a measurement of past work. Nothing here says
// we have ever achieved it, because `proof/` cannot back that sentence.
//
// Keyword separation: /business-process-audit owns "business process audit" and "business process
// automation" on this site and must keep them. This page targets purchase-intent software delivery
// phrasing instead. Two pages chasing one keyword is how the sister repo ended up issuing a 301.
//
// No price, in any string, in either locale. Charis, 2026-08-31: "Do not mention price." The page
// may say the fee is fixed and agreed in writing before the sprint starts. It may never say what
// the fee is.

const aiDevelopmentSprint: Offer = {
  slug: 'offers/ai-development-sprint',
  questionMarker: 'offer-ai-development-sprint',
  serviceType: 'Custom Software Development',
  copy: {
    en: {
      metaTitle: 'Software Release, 15 Days From Kickoff | Fiji Solutions',
      metaDescription:
        'We develop your next software release in 15 days from the kickoff workshop, matched to your written requirements. On time and to spec, or your fee back.',
      metaKeywords:
        'software development sprint, fixed scope software development, reduce software development cost, custom software development Greece, software release in 15 days',
      ogAlt: 'Fiji Solutions - your next software release built in a 15-day sprint from the kickoff workshop',

      eyebrow: 'AI development sprint',
      title: 'Your next software release, working 15 days after the kickoff workshop.',
      subhead:
        'You bring the release you already want. We write the requirements with you, build for ten working days, and hand it back running. Fifteen days from the workshop, matching the document you signed off, or we refund your fee.',
      bullets: [
        {
          lead: 'Fifteen days from the kickoff workshop.',
          body: 'Not fifteen days from your first email. The clock starts the day we sit down and write the requirements together.'
        },
        {
          lead: 'The scope is written down before a line is built.',
          body: 'You sign off one document at the workshop. What we hand back is checked against it, item by item, in front of you.'
        },
        {
          lead: 'The Sprint Delivery Guarantee.',
          body: 'On time, matching that document, and at least 75% below the development cost we agree in writing for the same scope. Miss any of it and you get your fee back.'
        }
      ],

      problemTitle: 'The release that keeps moving to next quarter',
      problemParagraphs: [
        'You have a feature list everyone agrees on. The estimate came back in months. The quote came back bigger than the feature is worth, and the work still has not started.',
        'So the release slips. It slips again at the next planning meeting. The people who asked for it stop asking, and the thing you needed in spring is the thing somebody else shipped in summer.',
        'The invoice is the smaller half of what that costs you. The larger half is the quarter you spent waiting, and the decisions you postponed because the software was not there to make them with.'
      ],

      mechanismTitle: 'How fifteen days is possible',
      mechanismParagraphs: [
        'We write the requirements down first, in one workshop, with the people who will actually use the software. That document is the scope, the test list and the acceptance criteria at the same time. Most of the time a software project burns is spent discovering what was wanted.',
        'Then AI drafts the code, and we review, test and correct every line of it before it goes near your repository. The machine is fast at typing and careless about edge cases. We are the opposite, which is why the split works.',
        'That is why the estimate is fifteen days. The typing was never the slow part. The deciding was, and we do it on day zero with you in the room.'
      ],

      stackTitle: 'What you get',
      stackIntro: 'One fixed scope, agreed in writing before anything is built.',
      stackItems: [
        {
          lead: 'A requirements workshop, four to eight hours.',
          body: 'We sit with you and the people who will use the release, and write down exactly what it has to do. You sign that document before we build anything.'
        },
        {
          lead: 'A ten-day build sprint.',
          body: 'The release itself, built and tested against the requirements you signed. You see working software partway through, while changes are still cheap.'
        },
        {
          lead: 'A presentation day at the end.',
          body: 'We walk the release against the document, item by item. Your feedback is collected the same day, in the same room.'
        },
        {
          lead: 'Next steps, in writing.',
          body: 'What the next sprint would build, what it depends on, and what your own team can do without us. Take that list anywhere you like.'
        },
        {
          lead: 'A fee fixed before the sprint starts.',
          body: 'Agreed in writing at the workshop, against the scope in the document. It does not move because the build turned out harder than we expected.'
        }
      ],

      timelineTitle: 'What the fifteen days look like',
      timeline: [
        {
          when: 'Day 0',
          body: 'The kickoff workshop. Four to eight hours. We write the requirements, agree the scope, and write down the baseline the guarantee is measured against. The clock starts here.'
        },
        {
          when: 'Working days 1 to 8',
          body: 'The build. You get a working version to look at partway through, not a surprise at the end.'
        },
        {
          when: 'Working days 9 and 10',
          body: 'Testing against your real cases and the fixes that come out of it.'
        },
        {
          when: 'Working day 11',
          body: 'The presentation. We walk the document item by item, take your feedback, and hand you the next steps in writing.'
        }
      ],
      timelineNote:
        'Eleven working days after a Monday workshop is the fifteenth calendar day. That is where the fifteen comes from, and it is counted from the workshop. If we are waiting on access we do not have yet, the clock pauses, and we tell you the day it happens.',

      guaranteeTitle: 'The Sprint Delivery Guarantee',
      guaranteePromise:
        'We deliver on day fifteen, counted from the kickoff workshop, matching the requirements you signed, with defects fixed at no cost, at a development cost at least 75% below the baseline agreed in writing for the same scope. Miss any of the four and we refund your fee.',
      guaranteePoints: [
        {
          lead: 'On time, counted from the workshop.',
          body: 'Day fifteen is a date in the contract. It moves only when you ask for a change or we are waiting on access from you.'
        },
        {
          lead: 'It matches the written requirements.',
          body: 'The document from the workshop is the test. We walk it with you on the presentation day, item by item. Anything missing is missing.'
        },
        {
          lead: 'Defects are fixed at no cost.',
          body: 'Anything that fails to do what the requirements say it does, we fix, and you do not pay for the fix. Nobody can promise software with no defects in it. This is the promise that stands behind that one.'
        },
        {
          lead: 'The baseline is written down before we build.',
          body: 'At the workshop we cost the same scope the conventional way, in developer days at the rate you tell us. That number goes into the contract, and the 75% is measured against it. Neither of us can move it later.'
        },
        {
          lead: 'How you claim.',
          body: 'Email info@fijisolutions.net within thirty days of the presentation day, with the numbers we agreed. You get an answer within ten working days.'
        }
      ],
      guaranteeClosing:
        'These terms go into the contract before we build, in these words. The 75% is a promise with a refund behind it, measured against a number we both agree before the sprint starts. It is not a report of what past clients got.',

      fitTitle: 'Who this is for',
      fitForLabel: 'This is for you if',
      fitFor: [
        'You own the business, or you can sign off a scope without taking it upstairs.',
        'There is a release you already want, and somebody can describe what it has to do.',
        'You can give four to eight hours to the workshop, with the people who will use the software.',
        'You can give us access to the systems the release touches.'
      ],
      fitNotForLabel: 'This is not for you if',
      fitNotFor: [
        'You want a whole platform rebuilt. That is a different engagement and a different conversation.',
        'The requirements are still an argument between two people. Settle it first, then book the workshop.',
        'Nobody internally can spare four to eight hours on day zero.',
        'You want the sprint without the baseline. The guarantee is built on the baseline.'
      ],

      faqTitle: 'The questions we get asked',
      faqs: [
        {
          q: 'What does it cost?',
          a: 'We quote it after the first call, in writing, against the scope we agree at the workshop. There is no list price and no rate card, because costing a release before seeing it is guessing. The fee is fixed before the sprint starts and it does not move afterwards.'
        },
        {
          q: 'Fifteen days from when?',
          a: 'From the kickoff workshop, never from your first email. Between your first message and that workshop there is a call and a scoping round. How long those take depends mostly on how fast your requirements settle.'
        },
        {
          q: 'Who owns the code?',
          a: 'You do. It is written straight into your own repository, so the code is yours from the first commit. The scope you sign at the workshop says so.'
        },
        {
          q: 'Is AI writing our software unsupervised?',
          a: 'No. AI drafts, we review, test and correct. The speed comes from the drafting. The safety comes from the review, and the review is the part you are paying for.'
        },
        {
          q: 'What happens after the fifteen days?',
          a: 'You decide. Two doors are open: another sprint with us, or the next-steps document goes to your own developers. It is written so either works, and you are under no obligation to continue with us.'
        }
      ],

      ctaButton: 'Get my sprint scoped',
      ctaCallout:
        'Free call, no obligation. You leave it knowing what your next release would take and what another quarter of waiting costs you, whether or not you hire us.',

      formTitle: 'Tell us what the release has to do',
      formSubhead:
        'Describe the release you want out of the door. We come back with what it would take to build it in one sprint.',
      formMessageLabel: 'What should the release do? (optional)',
      formMessagePlaceholder: 'e.g. a customer portal, a reporting module, the integration that keeps slipping…',
      formMicrocopy: 'Free, no obligation, no sales pitch.',
      formSuccess: 'Thank you. We will come back to you about your release.',
      calendlyLead: 'Prefer to skip the form? Book the call directly:',
      calendlyLink: 'Pick a time on Calendly'
    },

    el: {
      metaTitle: 'Έκδοση λογισμικού με AI | Fiji Solutions',
      metaDescription:
        'Αναπτύσσουμε την επόμενη έκδοση του λογισμικού σου σε 15 ημέρες από τη συνάντηση, σύμφωνα με τις γραπτές απαιτήσεις. Αλλιώς επιστρέφουμε την αμοιβή.',
      metaKeywords:
        'ανάπτυξη λογισμικού σε 15 ημέρες, κόστος ανάπτυξης λογισμικού, κύκλος ανάπτυξης λογισμικού, custom software development Ελλάδα, ανάπτυξη λογισμικού με AI',
      ogAlt: 'Fiji Solutions - η επόμενη έκδοση του λογισμικού σου σε κύκλο υλοποίησης 15 ημερών από την εναρκτήρια συνάντηση',

      eyebrow: 'Κύκλος ανάπτυξης λογισμικού με AI',
      title: 'Η επόμενη έκδοση του λογισμικού σου, έτοιμη 15 ημέρες μετά την εναρκτήρια συνάντηση.',
      subhead:
        'Εσύ φέρνεις την έκδοση που ήδη θέλεις. Εμείς γράφουμε μαζί σου τις απαιτήσεις, χτίζουμε δέκα εργάσιμες, και στην παραδίδουμε να δουλεύει. Δεκαπέντε ημέρες από τη συνάντηση, σύμφωνα με το κείμενο που υπέγραψες, αλλιώς σου επιστρέφουμε την αμοιβή.',
      bullets: [
        {
          lead: 'Δεκαπέντε ημέρες από την εναρκτήρια συνάντηση.',
          body: 'Όχι δεκαπέντε ημέρες από το πρώτο σου email. Το ρολόι ξεκινά τη μέρα που καθόμαστε μαζί και γράφουμε τις απαιτήσεις.'
        },
        {
          lead: 'Το αντικείμενο γράφεται πριν χτιστεί μία γραμμή.',
          body: 'Υπογράφεις ένα κείμενο στη συνάντηση. Ό,τι σου παραδίδουμε ελέγχεται πάνω σε αυτό, σημείο προς σημείο, μπροστά σου.'
        },
        {
          lead: 'Η Εγγύηση Παράδοσης Κύκλου.',
          body: 'Στην ώρα της, σύμφωνα με εκείνο το κείμενο, και τουλάχιστον 75% κάτω από το κόστος ανάπτυξης που συμφωνούμε γραπτά για το ίδιο αντικείμενο. Αν χάσουμε οτιδήποτε από αυτά, παίρνεις πίσω την αμοιβή σου.'
        }
      ],

      problemTitle: 'Η έκδοση που μετακινείται συνέχεια στο επόμενο τρίμηνο',
      problemParagraphs: [
        'Έχεις μια λίστα λειτουργιών που τη συμφωνούν όλοι. Η εκτίμηση γύρισε σε μήνες. Η προσφορά γύρισε μεγαλύτερη από την αξία της ίδιας της λειτουργίας, και η δουλειά ακόμα δεν έχει ξεκινήσει.',
        'Έτσι η έκδοση καθυστερεί. Καθυστερεί ξανά στην επόμενη συνάντηση προγραμματισμού. Όσοι τη ζητούσαν σταματούν να τη ζητάνε, και αυτό που χρειαζόσουν την άνοιξη το έβγαλε κάποιος άλλος το καλοκαίρι.',
        'Το τιμολόγιο είναι το μικρότερο μέρος του κόστους. Το μεγαλύτερο είναι το τρίμηνο που πέρασε στην αναμονή, και οι αποφάσεις που ανέβαλες επειδή το λογισμικό δεν ήταν εκεί για να τις πάρεις.'
      ],

      mechanismTitle: 'Πώς γίνονται δεκαπέντε ημέρες',
      mechanismParagraphs: [
        'Πρώτα γράφουμε τις απαιτήσεις, σε μία συνάντηση, με τους ανθρώπους που θα χρησιμοποιήσουν στην πράξη το λογισμικό. Αυτό το κείμενο είναι ταυτόχρονα το αντικείμενο, η λίστα δοκιμών και τα κριτήρια αποδοχής. Ο περισσότερος χρόνος σε ένα έργο λογισμικού καίγεται στο να ανακαλύψεις τι ήθελε ο άλλος.',
        'Μετά το AI γράφει το πρώτο προσχέδιο του κώδικα, και εμείς ελέγχουμε, δοκιμάζουμε και διορθώνουμε κάθε γραμμή πριν πλησιάσει το repository σου. Η μηχανή είναι γρήγορη στην πληκτρολόγηση και απρόσεκτη στις ακραίες περιπτώσεις. Εμείς είμαστε το αντίστροφο, και γι’ αυτό ο διαχωρισμός δουλεύει.',
        'Γι’ αυτό η εκτίμηση είναι δεκαπέντε ημέρες. Η πληκτρολόγηση ποτέ δεν ήταν το αργό κομμάτι. Οι αποφάσεις ήταν, και τις παίρνουμε την ημέρα μηδέν, με εσένα στο τραπέζι.'
      ],

      stackTitle: 'Τι παίρνεις',
      stackIntro: 'Ένα σταθερό αντικείμενο εργασίας, συμφωνημένο γραπτά πριν χτιστεί οτιδήποτε.',
      stackItems: [
        {
          lead: 'Συνάντηση απαιτήσεων, τέσσερις έως οκτώ ώρες.',
          body: 'Καθόμαστε με εσένα και με αυτούς που θα χρησιμοποιήσουν την έκδοση, και γράφουμε ακριβώς τι πρέπει να κάνει. Υπογράφεις αυτό το κείμενο πριν χτίσουμε οτιδήποτε.'
        },
        {
          lead: 'Κύκλος υλοποίησης δέκα ημερών.',
          body: 'Η ίδια η έκδοση, χτισμένη και δοκιμασμένη πάνω στις απαιτήσεις που υπέγραψες. Βλέπεις λειτουργικό λογισμικό στη μέση της διαδρομής, όσο οι αλλαγές είναι ακόμα φθηνές.'
        },
        {
          lead: 'Ημέρα παρουσίασης στο τέλος.',
          body: 'Περνάμε την έκδοση πάνω στο κείμενο, σημείο προς σημείο. Τα σχόλιά σου τα μαζεύουμε την ίδια μέρα, στο ίδιο δωμάτιο.'
        },
        {
          lead: 'Επόμενα βήματα, γραπτά.',
          body: 'Τι θα έχτιζε ο επόμενος κύκλος, από τι εξαρτάται, και τι μπορεί να κάνει η δική σου ομάδα χωρίς εμάς. Πήγαινε αυτή τη λίστα όπου θέλεις.'
        },
        {
          lead: 'Αμοιβή κλειδωμένη πριν ξεκινήσει ο κύκλος.',
          body: 'Συμφωνείται γραπτά στη συνάντηση, πάνω στο αντικείμενο του κειμένου. Δεν μετακινείται επειδή η υλοποίηση βγήκε πιο δύσκολη.'
        }
      ],

      timelineTitle: 'Πώς μοιάζουν οι δεκαπέντε ημέρες',
      timeline: [
        {
          when: 'Ημέρα 0',
          body: 'Η εναρκτήρια συνάντηση. Τέσσερις έως οκτώ ώρες. Γράφουμε τις απαιτήσεις, συμφωνούμε το αντικείμενο, και καταγράφουμε τη βάση αναφοράς πάνω στην οποία μετριέται η εγγύηση. Το ρολόι ξεκινά εδώ.'
        },
        {
          when: 'Εργάσιμες 1 έως 8',
          body: 'Η υλοποίηση. Βλέπεις μια λειτουργική εκδοχή στη μέση της διαδρομής, όχι έκπληξη στο τέλος.'
        },
        {
          when: 'Εργάσιμες 9 και 10',
          body: 'Δοκιμές πάνω στις πραγματικές σου περιπτώσεις, και οι διορθώσεις που προκύπτουν από αυτές.'
        },
        {
          when: 'Εργάσιμη 11',
          body: 'Η παρουσίαση. Περνάμε το κείμενο σημείο προς σημείο, παίρνουμε τα σχόλιά σου, και σου δίνουμε γραπτά τα επόμενα βήματα.'
        }
      ],
      timelineNote:
        'Έντεκα εργάσιμες μετά από μια συνάντηση της Δευτέρας πέφτουν στη δέκατη πέμπτη ημερολογιακή ημέρα. Από εκεί βγαίνει το δεκαπέντε, και μετριέται από τη συνάντηση. Αν περιμένουμε πρόσβαση που δεν έχουμε ακόμα, το ρολόι σταματά, και σου το λέμε τη μέρα που συμβαίνει.',

      guaranteeTitle: 'Η Εγγύηση Παράδοσης Κύκλου',
      guaranteePromise:
        'Παραδίδουμε τη δέκατη πέμπτη ημέρα από την εναρκτήρια συνάντηση, σύμφωνα με τις απαιτήσεις που υπέγραψες, με τα σφάλματα να διορθώνονται χωρίς χρέωση, και με κόστος ανάπτυξης τουλάχιστον 75% κάτω από τη γραπτά συμφωνημένη βάση για το ίδιο αντικείμενο. Αν χάσουμε ένα από τα τέσσερα, σου επιστρέφουμε την αμοιβή.',
      guaranteePoints: [
        {
          lead: 'Στην ώρα της, μετρημένη από τη συνάντηση.',
          body: 'Η δέκατη πέμπτη ημέρα είναι ημερομηνία μέσα στο συμβόλαιο. Μετακινείται μόνο όταν ζητάς αλλαγή ή όταν περιμένουμε πρόσβαση από εσένα.'
        },
        {
          lead: 'Ταιριάζει με τις γραπτές απαιτήσεις.',
          body: 'Το κείμενο της συνάντησης είναι το τεστ. Το περνάμε μαζί σου την ημέρα της παρουσίασης, σημείο προς σημείο. Ό,τι λείπει, λείπει.'
        },
        {
          lead: 'Τα σφάλματα διορθώνονται χωρίς χρέωση.',
          body: 'Ό,τι δεν κάνει αυτό που λένε οι απαιτήσεις ότι κάνει, το διορθώνουμε, και δεν πληρώνεις για τη διόρθωση. Κανείς δεν μπορεί να υποσχεθεί λογισμικό χωρίς κανένα σφάλμα. Αυτή είναι η υπόσχεση που στέκεται πίσω από εκείνη.'
        },
        {
          lead: 'Η βάση αναφοράς γράφεται πριν χτίσουμε.',
          body: 'Στη συνάντηση κοστολογούμε το ίδιο αντικείμενο με τον συμβατικό τρόπο, σε ανθρωποημέρες, με τη χρέωση που μας δίνεις. Αυτό το νούμερο μπαίνει στο συμβόλαιο, και το 75% μετριέται πάνω σε αυτό. Δεν το μετακινεί κανείς μας μετά.'
        },
        {
          lead: 'Πώς κάνεις χρήση της εγγύησης.',
          body: 'Στέλνεις email στο info@fijisolutions.net μέσα σε τριάντα ημέρες από την ημέρα της παρουσίασης, με τα νούμερα που συμφωνήσαμε. Παίρνεις απάντηση μέσα σε δέκα εργάσιμες ημέρες.'
        }
      ],
      guaranteeClosing:
        'Αυτοί οι όροι μπαίνουν στο συμβόλαιο πριν χτίσουμε, με αυτά ακριβώς τα λόγια. Το 75% είναι υπόσχεση με επιστροφή χρημάτων από πίσω, μετρημένη πάνω σε ένα νούμερο που συμφωνούμε και οι δύο πριν ξεκινήσει ο κύκλος. Δεν είναι αναφορά για το τι πέτυχαν προηγούμενοι πελάτες.',

      fitTitle: 'Για ποιον είναι',
      fitForLabel: 'Είναι για εσένα αν',
      fitFor: [
        'Έχεις την επιχείρηση, ή μπορείς να υπογράψεις ένα αντικείμενο εργασίας χωρίς να το πας παραπάνω.',
        'Υπάρχει μια έκδοση που ήδη θέλεις, και κάποιος μπορεί να περιγράψει τι πρέπει να κάνει.',
        'Μπορείς να διαθέσεις τέσσερις έως οκτώ ώρες στη συνάντηση, με τους ανθρώπους που θα χρησιμοποιήσουν το λογισμικό.',
        'Μπορείς να μας δώσεις πρόσβαση στα συστήματα που ακουμπά η έκδοση.'
      ],
      fitNotForLabel: 'Δεν είναι για εσένα αν',
      fitNotFor: [
        'Θέλεις να ξαναχτιστεί ολόκληρη πλατφόρμα. Αυτό είναι άλλο έργο και άλλη συζήτηση.',
        'Οι απαιτήσεις είναι ακόμα διαφωνία ανάμεσα σε δύο ανθρώπους. Λύσε την πρώτα, και μετά κλείσε τη συνάντηση.',
        'Κανείς εσωτερικά δεν μπορεί να διαθέσει τέσσερις έως οκτώ ώρες την ημέρα μηδέν.',
        'Θέλεις τον κύκλο χωρίς τη βάση αναφοράς. Η εγγύηση στηρίζεται στη βάση αναφοράς.'
      ],

      faqTitle: 'Οι ερωτήσεις που μας κάνουν',
      faqs: [
        {
          q: 'Πόσο κοστίζει;',
          a: 'Σου δίνουμε προσφορά μετά την πρώτη κλήση, γραπτά, πάνω στο αντικείμενο που συμφωνούμε στη συνάντηση. Δεν υπάρχει τιμοκατάλογος, γιατί το να κοστολογήσεις μια έκδοση χωρίς να τη δεις είναι μαντεψιά. Η αμοιβή κλειδώνει πριν ξεκινήσει ο κύκλος και δεν μετακινείται μετά.'
        },
        {
          q: 'Δεκαπέντε ημέρες από πότε;',
          a: 'Από την εναρκτήρια συνάντηση, ποτέ από το πρώτο σου email. Ανάμεσα στο πρώτο σου μήνυμα και σε εκείνη τη συνάντηση υπάρχει μια κλήση και ένας γύρος αποσαφήνισης. Το πόσο κρατάνε εξαρτάται κυρίως από το πόσο γρήγορα καθαρίζουν οι απαιτήσεις σου.'
        },
        {
          q: 'Ποιος έχει τον κώδικα;',
          a: 'Εσύ. Γράφεται απευθείας στο δικό σου repository, οπότε ο κώδικας είναι δικός σου από το πρώτο commit. Το αντικείμενο που υπογράφεις στη συνάντηση το λέει ρητά.'
        },
        {
          q: 'Γράφει το AI το λογισμικό μας χωρίς επίβλεψη;',
          a: 'Όχι. Το AI γράφει το προσχέδιο, εμείς ελέγχουμε, δοκιμάζουμε και διορθώνουμε. Η ταχύτητα βγαίνει από το προσχέδιο. Η ασφάλεια βγαίνει από τον έλεγχο, και ο έλεγχος είναι αυτό που πληρώνεις.'
        },
        {
          q: 'Τι γίνεται μετά τις δεκαπέντε ημέρες;',
          a: 'Αποφασίζεις εσύ. Δύο δρόμοι είναι ανοιχτοί: άλλος ένας κύκλος μαζί μας, ή τα γραπτά επόμενα βήματα πάνε στους δικούς σου προγραμματιστές. Είναι γραμμένα ώστε να δουλεύουν και στις δύο περιπτώσεις, και δεν είσαι υποχρεωμένος να συνεχίσεις μαζί μας.'
        }
      ],

      ctaButton: 'Θέλω κύκλο ανάπτυξης για την έκδοσή μου',
      ctaCallout:
        'Δωρεάν κλήση, χωρίς δέσμευση. Φεύγεις ξέροντας τι χρειάζεται η επόμενή σου έκδοση και τι σου κοστίζει ένα ακόμα τρίμηνο αναμονής, είτε μας αναθέσεις τη δουλειά είτε όχι.',

      formTitle: 'Πες μας τι πρέπει να κάνει η έκδοση',
      formSubhead:
        'Περίγραψε την έκδοση που θέλεις να βγει. Επιστρέφουμε με το τι θα χρειαζόταν για να χτιστεί σε έναν κύκλο.',
      formMessageLabel: 'Τι πρέπει να κάνει η έκδοση; (προαιρετικό)',
      formMessagePlaceholder: 'π.χ. πύλη πελατών, module αναφορών, η διασύνδεση που όλο αναβάλλεται…',
      formMicrocopy: 'Δωρεάν, χωρίς δεσμεύσεις, χωρίς πιέσεις.',
      formSuccess: 'Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου για την έκδοσή σου.',
      calendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση απευθείας:',
      calendlyLink: 'Διάλεξε ώρα στο Calendly'
    }
  }
};

export default aiDevelopmentSprint;
