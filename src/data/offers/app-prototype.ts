import type {Offer} from '@/components/OfferLanding';

// Offer F from the Proven Offers workbook: "App Prototype".
//
// Timeline: the workbook says 3-30 days. Published as TWO WEEKS, which is the midpoint of that
// range rounded down to a clean unit, per the rule applied to all eight offers. The anchor is the
// kickoff workshop and it is stated in the same sentence as the number, every time. Two weeks from
// the workshop is not two weeks from the reader's first email, and no string here lets that blur.
//
// Guarantee: the workbook's row 11 for this offer lists timeline, requirements match, "guaranteed
// free of bugs" and a cost reduction. Nobody can guarantee software with no bugs, so the third limb
// is written as the warranty underneath it: we fix any defect against the approved requirements at
// no cost for THIRTY DAYS after handover, claimed by email inside that window. That window is
// load-bearing. Without it the page promises free fixes on generated code forever, which is an
// obligation nobody can honour and which the "hold us to every one of them" closing invites.
// The fourth limb is the build cost sitting at least 75% below the conventional-build baseline,
// and that baseline is written down with the client BEFORE THE FEE IS FIXED. It cannot be the
// workshop: the workshop is day 0 of the build, by which point the fee is quoted and the contract
// signed, so a baseline written there would be set after the trigger it is supposed to decide.
// Every limb is a PROMISE WITH A REMEDY, and the remedy is a refund of the fee. None of it is a
// measurement of past work, and every string keeps it that way: `proof/` for this company holds
// only the Snowflake partnership, so a results claim here would have nothing behind it.
//
// Deliverables: the workbook lists "working app, source code, documentation" and does NOT list
// hosting (offers L and M list it explicitly, so the workbook distinguishes the two). The app is
// handed over running with a shareable link for thirty days, and the deployment steps ship in the
// documentation. Do not turn that into an open-ended hosting promise this offer was never scoped
// to carry.
//
// TODO(charis): three thirty-day windows now run from handover, and they are set to coincide on
// purpose: the defect warranty, the shareable link, and the refund claim window that was already
// here. The claim window is the one the guarantee always had; the other two were derived to bound
// promises that had no end date at all. None of the three is his own number. If he wants a
// different length for any of them, move all three together, in both locales.
//
// No price, in either locale, in copy or metadata. Charis, 2026-08-31: "Do not mention price." The
// 75% limb talks about a ratio against a baseline the client writes down with us. It never names a
// figure on either side of that ratio, and it must not start.
//
// Keyword separation: /business-process-audit is the page this one must not compete with. It owns
// "business process audit" and "business process automation" organically, so nothing here reaches
// for the word "process" as a keyword. This page targets purchase intent on the app build itself:
// app prototype development, build an app prototype, custom app. Sibling caution: offer G,
// /offers/software-prototype, is the closest neighbour on the site. This page stays on the app the
// reader's users will open; that one stays on the system behind it.

const appPrototype: Offer = {
  slug: 'offers/app-prototype',
  questionMarker: 'offer-app-prototype',
  serviceType: 'Custom Software Development',
  copy: {
    en: {
      metaTitle: 'App Prototype in Two Weeks From Kickoff | Fiji Solutions',
      metaDescription:
        'We build your app prototype and hand it over working, two weeks from the kickoff workshop. On time and to your written requirements, or your fee back.',
      metaKeywords:
        'app prototype development, build an app prototype, custom app prototype, clickable app prototype, app development cost',
      ogAlt: 'Fiji Solutions - a working app prototype, two weeks from the kickoff workshop',

      eyebrow: 'App prototype development',
      title: 'Your app, working and clickable, two weeks after the kickoff workshop.',
      subhead:
        'You bring the idea. We run a two-hour requirements workshop, build the prototype, and hand you the working app with its source code and documentation. Two weeks from that workshop, matching the requirements you approved, or we refund your fee.',
      bullets: [
        {
          lead: 'A real app, not a slide deck.',
          body: 'Screens your users can open, data they can enter, flows they can finish. You can put it in front of a client and watch what happens.'
        },
        {
          lead: 'Two weeks from the kickoff workshop.',
          body: 'Not two weeks from your first email. The clock starts the day we sit down and write the requirements together.'
        },
        {
          lead: 'The On-Time Prototype Guarantee.',
          body: 'On time, matching the requirements we agreed in writing, and at least 75% below the conventional build baseline we wrote down with you. Miss one and you get your fee back.'
        }
      ],

      problemTitle: 'The app that stays a document',
      problemParagraphs: [
        'You have the idea written down. Maybe a spec, maybe a deck, maybe a folder of screenshots from tools you liked. Everyone who reads it agrees with something slightly different.',
        'So you ask for quotes. They come back with months of discovery, a team you have to keep fed, and a number that turns a test into a commitment. The budget exists. Spending it on a guess is what stops you.',
        'Meanwhile the decision that matters is still open, because nobody has held the thing. Users cannot react to a paragraph. A board cannot fund a paragraph.'
      ],

      mechanismTitle: 'How two weeks is possible',
      mechanismParagraphs: [
        'We generate the app instead of typing it. The workshop produces a written requirements document, and that document drives the code generation. What used to be weeks of scaffolding takes hours.',
        'Then the slow part starts, and it is the part that matters. We test what came out against your requirements, fix it, and refine it until the flows hold up under a real person.',
        'AI writes the code. We decide what it should do and we check every screen against the document you approved. That split is why two weeks from the workshop is a date we put in the contract, and why the requirements are written before anything is generated.'
      ],

      stackTitle: 'What you get',
      stackIntro: 'One fixed scope, agreed in writing before anything is generated.',
      stackItems: [
        {
          lead: 'A requirements workshop, two hours.',
          body: 'We take the idea apart on a call and write down what the prototype must do, screen by screen. You approve that document. It becomes the thing the guarantee is measured against.'
        },
        {
          lead: 'The build.',
          body: 'Code generation, testing and refinement, run against your requirements rather than a demo dataset.'
        },
        {
          lead: 'A presentation session, two hours.',
          body: 'We walk the working app with you, agree what happens next, and tell you what a full build would involve.'
        },
        {
          lead: 'The working app.',
          body: 'Handed over running, with a link you can share for thirty days. The documentation carries the deployment steps, so your own team can host it after that. Put it in front of users, clients or your board the same day.'
        },
        {
          lead: 'The source code and the documentation.',
          body: 'Yours at handover. If the full build goes to your own team or to somebody else, the code goes with you.'
        }
      ],

      timelineTitle: 'What the two weeks look like',
      timeline: [
        {
          when: 'Day 0',
          body: 'The requirements workshop. Two hours. We write down what the prototype does and you approve it. The clock starts here.'
        },
        {
          when: 'Days 1 to 7',
          body: 'Generation and build. You see the first working screens inside the first week, not at the end.'
        },
        {
          when: 'Days 8 and 9',
          body: 'Testing against the requirements document, and the fixes that come out of it.'
        },
        {
          when: 'Day 10',
          body: 'The presentation session. Two hours. We hand over the app, the source code and the documentation, and agree the next step.'
        }
      ],
      timelineNote:
        'Ten working days is two calendar weeks, counted from the workshop. If we are waiting on a decision or an access we do not have yet, the clock pauses, and we tell you the day it happens.',

      guaranteeTitle: 'The On-Time Prototype Guarantee',
      guaranteePromise:
        'Two weeks from the workshop, matching the requirements you approved, and at least 75% below the conventional build baseline we agreed in writing. Miss any of the three and we refund your fee.',
      guaranteePoints: [
        {
          lead: 'The requirements are written before we build.',
          body: 'The workshop ends with a document and you approve it. Nobody moves it afterwards, us included, so "matches the requirements" means something you can check.'
        },
        {
          lead: 'The cost baseline is written down with you before the fee is fixed.',
          body: 'We agree what the same prototype would take to build the conventional way, in developer days at the rates you already pay. Your fee for this build sits at least 75% under that number. That is a promise with a refund behind it. We are not quoting a result from somebody else’s project.'
        },
        {
          lead: 'Defects are ours to fix.',
          body: 'Anything that does not do what the approved requirements say is a defect, and we fix it at no cost for thirty days after handover. Email info@fijisolutions.net inside that window. Nobody can promise software with no bugs. We can promise who pays for them, and for how long.'
        },
        {
          lead: 'What we need from you.',
          body: 'Two hours for the workshop, one person who can approve the requirements, and answers within a working day while we build. That is the whole list.'
        },
        {
          lead: 'How you claim.',
          body: 'Email info@fijisolutions.net within thirty days of handover, naming which of the three we missed. You get an answer within ten working days.'
        }
      ],
      guaranteeClosing:
        'These terms go into the contract before we build, in these words. You can hold us to every one of them.',

      fitTitle: 'Who this is for',
      fitForLabel: 'This is for you if',
      fitFor: [
        'You have an app in mind and a budget already set aside for building it.',
        'You can describe what it should do in two hours, with one person who can approve it.',
        'You need something users, clients or a board can open before the money is committed.',
        'You want the source code, because the full build may go to your own team later.'
      ],
      fitNotForLabel: 'This is not for you if',
      fitNotFor: [
        'You need a production system carrying real customers and real data on day one. This is a prototype.',
        'The requirements cannot be settled by anyone available within two hours.',
        'You want a clickable design mockup with nothing behind it. A design tool does that faster.',
        'Nobody can be in the room for the workshop or the handover.'
      ],

      faqTitle: 'The questions we get asked',
      faqs: [
        {
          q: 'What does it cost?',
          a: 'We quote it after the first call, in writing, against what your prototype actually needs. There is no list price and no rate card. The fee is fixed before anything is built and it does not move afterwards, and the guarantee ties it to the baseline we write down together.'
        },
        {
          q: 'Is a prototype the same as an MVP?',
          a: 'No. A prototype exists to answer a question. Does this work, do people understand it, will they use it. An MVP carries real customers and real data. Answer that question first and you know whether the MVP is worth building. That is what this prototype is for.'
        },
        {
          q: 'Who owns the code?',
          a: 'You do, from handover. Source code and documentation come with the prototype. If you take the full build to your own team or to another supplier, nothing here holds you back.'
        },
        {
          q: 'If AI writes it, why do we need you?',
          a: 'Because generated code is easy to produce and hard to trust. The value sits in the requirements written before it and the testing and refinement after it. That is where the two weeks actually go.'
        },
        {
          q: 'What happens after the two weeks?',
          a: 'Three things can happen next. You take the prototype to users and stop there. You commission the full build, with the prototype as the specification. Or you hand the code to your own team. All three suit us, and you decide once you have seen it.'
        }
      ],

      ctaButton: 'Get my prototype scoped',
      ctaCallout:
        'Free call, no obligation. You leave it knowing what your prototype would take and whether it is worth building at all.',

      formTitle: 'Tell us what the app should do',
      formSubhead:
        'Describe the app in a couple of lines. We will come back with what a prototype of it would take and what it would answer for you.',
      formMessageLabel: 'What should the app do? (optional)',
      formMessagePlaceholder: 'e.g. a booking app for our field team, a client portal, an internal ordering tool…',
      formMicrocopy: 'Free, no obligation, no sales pitch.',
      formSuccess: 'Thank you. We will come back to you about your app prototype.',
      calendlyLead: 'Prefer to skip the form? Book the call directly:',
      calendlyLink: 'Pick a time on Calendly'
    },

    el: {
      metaTitle: 'Πρωτότυπο εφαρμογής | Fiji Solutions',
      metaDescription:
        'Χτίζουμε το πρωτότυπο της εφαρμογής σου, δύο εβδομάδες από το workshop έναρξης. Στην ώρα και στις γραπτές προδιαγραφές, αλλιώς επιστρέφουμε την αμοιβή.',
      metaKeywords:
        'πρωτότυπο εφαρμογής, κατασκευή εφαρμογής, κόστος ανάπτυξης εφαρμογής, ανάπτυξη custom εφαρμογής, δημιουργία πρωτοτύπου εφαρμογής',
      ogAlt: 'Fiji Solutions - πρωτότυπο εφαρμογής που δουλεύει, δύο εβδομάδες από το workshop έναρξης',

      eyebrow: 'Πρωτότυπο εφαρμογής',
      title: 'Η εφαρμογή σου, να δουλεύει και να πατιέται, δύο εβδομάδες από το workshop έναρξης.',
      subhead:
        'Εσύ φέρνεις την ιδέα. Εμείς κάνουμε ένα workshop προδιαγραφών δύο ωρών, χτίζουμε το πρωτότυπο και σου παραδίδουμε την εφαρμογή να δουλεύει, μαζί με τον πηγαίο κώδικα και την τεκμηρίωση. Δύο εβδομάδες από εκείνο το workshop, πάνω στις προδιαγραφές που ενέκρινες, αλλιώς σου επιστρέφουμε την αμοιβή.',
      bullets: [
        {
          lead: 'Μια πραγματική εφαρμογή, όχι παρουσίαση.',
          body: 'Οθόνες που ανοίγουν οι χρήστες σου, δεδομένα που καταχωρούν, ροές που ολοκληρώνουν. Μπορείς να τη βάλεις μπροστά σε πελάτη και να δεις τι θα γίνει.'
        },
        {
          lead: 'Δύο εβδομάδες από το workshop έναρξης.',
          body: 'Όχι δύο εβδομάδες από το πρώτο σου email. Το ρολόι ξεκινά τη μέρα που καθόμαστε μαζί και γράφουμε τις προδιαγραφές.'
        },
        {
          lead: 'Η Εγγύηση Έγκαιρης Παράδοσης Πρωτοτύπου.',
          body: 'Στην ώρα της, πάνω στις προδιαγραφές που συμφωνήσαμε γραπτά, και τουλάχιστον 75% κάτω από τη βάση συμβατικής κατασκευής που γράψαμε μαζί σου. Αν χάσουμε ένα από τα τρία, παίρνεις πίσω την αμοιβή σου.'
        }
      ],

      problemTitle: 'Η εφαρμογή που μένει έγγραφο',
      problemParagraphs: [
        'Έχεις την ιδέα γραμμένη. Ίσως μια προδιαγραφή, ίσως μια παρουσίαση, ίσως έναν φάκελο με screenshots από εργαλεία που σου άρεσαν. Όποιος τα διαβάζει συμφωνεί με κάτι λίγο διαφορετικό.',
        'Οπότε ζητάς προσφορές. Γυρνάνε με μήνες ανάλυσης, με μια ομάδα που πρέπει να τη συντηρείς, και με ένα ποσό που μετατρέπει μια δοκιμή σε δέσμευση. Ο προϋπολογισμός υπάρχει. Αυτό που σε σταματά είναι να τον ξοδέψεις πάνω σε μια εικασία.',
        'Στο μεταξύ η απόφαση που μετράει μένει ανοιχτή, γιατί κανείς δεν έχει κρατήσει το πράγμα στα χέρια του. Οι χρήστες δεν αντιδρούν σε παράγραφο. Η διοίκηση δεν χρηματοδοτεί παράγραφο.'
      ],

      mechanismTitle: 'Πώς γίνονται δύο εβδομάδες',
      mechanismParagraphs: [
        'Παράγουμε την εφαρμογή αντί να την πληκτρολογούμε. Το workshop βγάζει ένα γραπτό κείμενο προδιαγραφών, και αυτό το κείμενο οδηγεί την παραγωγή του κώδικα. Ό,τι παλιά ήταν εβδομάδες στησίματος παίρνει τώρα ώρες.',
        'Μετά ξεκινά το αργό κομμάτι, και είναι αυτό που μετράει. Δοκιμάζουμε ό,τι βγήκε πάνω στις προδιαγραφές σου, το διορθώνουμε και το δουλεύουμε μέχρι οι ροές να αντέχουν σε πραγματικό άνθρωπο.',
        'Το AI γράφει τον κώδικα. Εμείς αποφασίζουμε τι πρέπει να κάνει και ελέγχουμε κάθε οθόνη πάνω στο κείμενο που ενέκρινες. Αυτός ο διαχωρισμός είναι ο λόγος που οι δύο εβδομάδες από το workshop είναι ημερομηνία που μπαίνει στο συμβόλαιο, και ο λόγος που οι προδιαγραφές γράφονται πριν παραχθεί οτιδήποτε.'
      ],

      stackTitle: 'Τι παίρνεις',
      stackIntro: 'Ένα σταθερό αντικείμενο εργασίας, συμφωνημένο γραπτά πριν παραχθεί οτιδήποτε.',
      stackItems: [
        {
          lead: 'Workshop προδιαγραφών, δύο ώρες.',
          body: 'Λύνουμε την ιδέα στα κομμάτια της και γράφουμε τι πρέπει να κάνει το πρωτότυπο, οθόνη προς οθόνη. Εσύ εγκρίνεις αυτό το κείμενο. Πάνω σε αυτό μετριέται η εγγύηση.'
        },
        {
          lead: 'Η υλοποίηση.',
          body: 'Παραγωγή κώδικα, δοκιμές και βελτίωση, πάνω στις δικές σου προδιαγραφές και όχι σε δείγμα επίδειξης.'
        },
        {
          lead: 'Συνάντηση παρουσίασης, δύο ώρες.',
          body: 'Περνάμε μαζί την εφαρμογή που δουλεύει, συμφωνούμε τι γίνεται στη συνέχεια, και σου λέμε τι θα σήμαινε μια πλήρης υλοποίηση.'
        },
        {
          lead: 'Η εφαρμογή που δουλεύει.',
          body: 'Παραδίδεται να τρέχει, με σύνδεσμο που μπορείς να στείλεις για τριάντα ημέρες. Η τεκμηρίωση έχει τα βήματα εγκατάστασης, ώστε μετά να τη φιλοξενήσει η δική σου ομάδα. Τη βάζεις μπροστά σε χρήστες, πελάτες ή στη διοίκηση την ίδια μέρα.'
        },
        {
          lead: 'Ο πηγαίος κώδικας και η τεκμηρίωση.',
          body: 'Δικά σου, στην παράδοση. Αν η πλήρης υλοποίηση πάει στη δική σου ομάδα ή σε κάποιον άλλο, ο κώδικας πάει μαζί σου.'
        }
      ],

      timelineTitle: 'Πώς μοιάζουν οι δύο εβδομάδες',
      timeline: [
        {
          when: 'Ημέρα 0',
          body: 'Το workshop προδιαγραφών. Δύο ώρες. Γράφουμε τι κάνει το πρωτότυπο και το εγκρίνεις. Το ρολόι ξεκινά εδώ.'
        },
        {
          when: 'Ημέρες 1 έως 7',
          body: 'Παραγωγή και υλοποίηση. Βλέπεις τις πρώτες οθόνες να δουλεύουν μέσα στην πρώτη εβδομάδα, όχι στο τέλος.'
        },
        {
          when: 'Ημέρες 8 και 9',
          body: 'Δοκιμές πάνω στο κείμενο των προδιαγραφών, και οι διορθώσεις που προκύπτουν από αυτές.'
        },
        {
          when: 'Ημέρα 10',
          body: 'Η συνάντηση παρουσίασης. Δύο ώρες. Παραδίδουμε την εφαρμογή, τον πηγαίο κώδικα και την τεκμηρίωση, και συμφωνούμε το επόμενο βήμα.'
        }
      ],
      timelineNote:
        'Δέκα εργάσιμες ημέρες είναι δύο ημερολογιακές εβδομάδες, μετρημένες από το workshop. Αν περιμένουμε μια απόφαση ή μια πρόσβαση που δεν έχουμε ακόμα, το ρολόι σταματά, και σου το λέμε τη μέρα που συμβαίνει.',

      guaranteeTitle: 'Η Εγγύηση Έγκαιρης Παράδοσης Πρωτοτύπου',
      guaranteePromise:
        'Δύο εβδομάδες από το workshop, πάνω στις προδιαγραφές που ενέκρινες, και τουλάχιστον 75% κάτω από τη βάση συμβατικής κατασκευής που συμφωνήσαμε γραπτά. Αν χάσουμε ένα από τα τρία, σου επιστρέφουμε την αμοιβή σου.',
      guaranteePoints: [
        {
          lead: 'Οι προδιαγραφές γράφονται πριν χτίσουμε.',
          body: 'Το workshop τελειώνει με ένα κείμενο και εσύ το εγκρίνεις. Μετά δεν το μετακινεί κανείς, ούτε εμείς, οπότε το «πάνω στις προδιαγραφές» σημαίνει κάτι που ελέγχεται.'
        },
        {
          lead: 'Η βάση κόστους γράφεται μαζί σου πριν κλειδώσει η αμοιβή.',
          body: 'Συμφωνούμε τι θα έπαιρνε το ίδιο πρωτότυπο με συμβατική κατασκευή, σε ανθρωποημέρες και με τις χρεώσεις που ήδη πληρώνεις. Η αμοιβή σου για αυτή την υλοποίηση κάθεται τουλάχιστον 75% κάτω από εκείνο το νούμερο. Αυτή είναι υπόσχεση με επιστροφή χρημάτων από πίσω. Δεν είναι νούμερο από παλιότερο έργο.'
        },
        {
          lead: 'Τα σφάλματα είναι δική μας δουλειά.',
          body: 'Ό,τι δεν κάνει αυτό που λένε οι εγκεκριμένες προδιαγραφές είναι σφάλμα, και το διορθώνουμε χωρίς χρέωση για τριάντα ημέρες από την παράδοση. Στέλνεις email στο info@fijisolutions.net μέσα σε αυτό το διάστημα. Κανείς δεν μπορεί να υποσχεθεί λογισμικό χωρίς σφάλματα. Μπορούμε να υποσχεθούμε ποιος τα πληρώνει και για πόσο.'
        },
        {
          lead: 'Τι ζητάμε από εσένα.',
          body: 'Δύο ώρες για το workshop, έναν άνθρωπο που μπορεί να εγκρίνει τις προδιαγραφές, και απαντήσεις μέσα σε μία εργάσιμη όσο χτίζουμε. Αυτή είναι όλη η λίστα.'
        },
        {
          lead: 'Πώς κάνεις χρήση της εγγύησης.',
          body: 'Στέλνεις email στο info@fijisolutions.net μέσα σε τριάντα ημέρες από την παράδοση, λέγοντας ποιο από τα τρία χάσαμε. Παίρνεις απάντηση μέσα σε δέκα εργάσιμες ημέρες.'
        }
      ],
      guaranteeClosing:
        'Αυτοί οι όροι μπαίνουν στο συμβόλαιο πριν χτίσουμε, με αυτά ακριβώς τα λόγια. Μπορείς να μας κρατήσεις σε κάθε έναν από αυτούς.',

      fitTitle: 'Για ποιον είναι',
      fitForLabel: 'Είναι για εσένα αν',
      fitFor: [
        'Έχεις μια εφαρμογή στο μυαλό σου και προϋπολογισμό ήδη δεσμευμένο για να χτιστεί.',
        'Μπορείς να περιγράψεις τι πρέπει να κάνει μέσα σε δύο ώρες, με έναν άνθρωπο που μπορεί να το εγκρίνει.',
        'Χρειάζεσαι κάτι που χρήστες, πελάτες ή η διοίκηση μπορούν να ανοίξουν πριν δεσμευτούν τα χρήματα.',
        'Θέλεις τον πηγαίο κώδικα, γιατί η πλήρης υλοποίηση μπορεί να πάει αργότερα στη δική σου ομάδα.'
      ],
      fitNotForLabel: 'Δεν είναι για εσένα αν',
      fitNotFor: [
        'Χρειάζεσαι σύστημα παραγωγής με πραγματικούς πελάτες και πραγματικά δεδομένα από την πρώτη μέρα. Αυτό είναι πρωτότυπο.',
        'Οι προδιαγραφές δεν κλείνουν από κανέναν διαθέσιμο μέσα σε δύο ώρες.',
        'Θέλεις ένα σχεδιαστικό μοκάπ που πατιέται και τίποτα από πίσω. Ένα εργαλείο σχεδίασης το κάνει πιο γρήγορα.',
        'Δεν υπάρχει κανείς να παρευρεθεί στο workshop ή στην παράδοση.'
      ],

      faqTitle: 'Οι ερωτήσεις που μας κάνουν',
      faqs: [
        {
          q: 'Πόσο κοστίζει;',
          a: 'Σου δίνουμε προσφορά μετά την πρώτη κλήση, γραπτά, με βάση αυτό που χρειάζεται πραγματικά το πρωτότυπό σου. Δεν υπάρχει τιμοκατάλογος. Η αμοιβή κλειδώνει πριν χτιστεί οτιδήποτε και δεν μετακινείται μετά, και η εγγύηση τη δένει με τη βάση κόστους που γράφουμε μαζί.'
        },
        {
          q: 'Το πρωτότυπο είναι το ίδιο με MVP;',
          a: 'Όχι. Το πρωτότυπο υπάρχει για να απαντήσει σε μια ερώτηση. Δουλεύει αυτό, το καταλαβαίνουν οι άνθρωποι, θα το χρησιμοποιήσουν. Το MVP σηκώνει πραγματικούς πελάτες και πραγματικά δεδομένα. Απάντησε πρώτα σε αυτή την ερώτηση και ξέρεις αν αξίζει να χτιστεί το MVP. Γι’ αυτό υπάρχει το πρωτότυπο.'
        },
        {
          q: 'Ποιος έχει τον κώδικα;',
          a: 'Εσύ, από την παράδοση. Ο πηγαίος κώδικας και η τεκμηρίωση έρχονται μαζί με το πρωτότυπο. Αν πας την πλήρη υλοποίηση στη δική σου ομάδα ή σε άλλον συνεργάτη, τίποτα εδώ δεν σε κρατά πίσω.'
        },
        {
          q: 'Αν τον κώδικα τον γράφει το AI, γιατί χρειαζόμαστε εσάς;',
          a: 'Γιατί ο παραγόμενος κώδικας βγαίνει εύκολα και εμπιστεύεται δύσκολα. Η αξία κάθεται στις προδιαγραφές που γράφονται πριν από αυτόν, και στις δοκιμές και τη βελτίωση μετά από αυτόν. Εκεί πάνε πραγματικά οι δύο εβδομάδες.'
        },
        {
          q: 'Τι γίνεται μετά τις δύο εβδομάδες;',
          a: 'Μετά μπορούν να γίνουν τρία πράγματα. Πας το πρωτότυπο σε χρήστες και σταματάς εκεί. Αναθέτεις την πλήρη υλοποίηση, με το πρωτότυπο ως προδιαγραφή. Ή δίνεις τον κώδικα στη δική σου ομάδα. Και τα τρία μας βολεύουν, και αποφασίζεις αφού το δεις.'
        }
      ],

      ctaButton: 'Θέλω να συζητήσουμε το πρωτότυπό μου',
      ctaCallout:
        'Δωρεάν κλήση, χωρίς δέσμευση. Φεύγεις ξέροντας τι θα χρειαζόταν το πρωτότυπό σου και αν αξίζει καν να χτιστεί.',

      formTitle: 'Πες μας τι πρέπει να κάνει η εφαρμογή',
      formSubhead:
        'Περίγραψέ μας την εφαρμογή σε δυο γραμμές. Θα σου πούμε τι θα χρειαζόταν ένα πρωτότυπό της και τι θα σου απαντούσε.',
      formMessageLabel: 'Τι πρέπει να κάνει η εφαρμογή; (προαιρετικό)',
      formMessagePlaceholder: 'π.χ. εφαρμογή ραντεβού για τα συνεργεία μας, portal πελατών, εσωτερικό εργαλείο παραγγελιών…',
      formMicrocopy: 'Δωρεάν, χωρίς δεσμεύσεις, χωρίς πιέσεις.',
      formSuccess: 'Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου για το πρωτότυπο της εφαρμογής σου.',
      calendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση απευθείας:',
      calendlyLink: 'Διάλεξε ώρα στο Calendly'
    }
  }
};

export default appPrototype;
