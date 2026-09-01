import type {Offer} from '@/components/OfferLanding';

// Offer I from the Proven Offers workbook: "1 Process Automated (No Code)".
//
// Timeline: the workbook says 3-30 days. Published as TWO WEEKS, which is the midpoint of that
// range rounded down to a clean unit, per the rule applied to all eight offers. The anchor is the
// kickoff workshop and it is stated in the same sentence as the number, every time.
//
// Guarantee: the workbook's row 11 for this offer lists four limbs, and the page carries all four.
// On time. Matches the written requirements. Any defect against those requirements fixed at no
// cost. And process cost at least 75% below the baseline measured in the kickoff workshop. The
// consequence on every limb is a refund of the fee. That is a PROMISE WITH A REMEDY, not a
// measurement of past work, and every string here keeps it that way. If you narrow a limb out of
// `guaranteePromise` or `guaranteeClosing`, the closing line's "every one of them" becomes a
// completeness claim over a list that is missing content.
//
// Timeline arithmetic: Day 0 workshop, days 1 to 7 build, days 8 and 9 test, day 10 handover. No
// day is claimed twice and the last day is the tenth working day from the workshop, which is what
// `timelineNote` says. Move one boundary and you have to move the others.
//
// Keyword separation: /business-process-audit already owns "business process audit" and "business
// process automation". This page targets the purchase-intent phrasing instead. Two pages chasing
// one keyword is how the sister repo ended up issuing a 301.

const processAutomation: Offer = {
  slug: 'offers/process-automation',
  questionMarker: 'offer-process-automation',
  serviceType: 'Business Process Automation',
  copy: {
    en: {
      metaTitle: 'Automate One Process, 2 Weeks From Kickoff | Fiji Solutions',
      metaDescription:
        'Pick the process eating your week. We automate it in two weeks from the kickoff workshop, guaranteed to cost 75% less to run or we refund your fee.',
      metaKeywords:
        'automate a business process, process automation for small business, workflow automation Greece, no-code automation, automate manual data entry',
      ogAlt: 'Fiji Solutions - one business process automated, two weeks from the kickoff workshop',

      eyebrow: 'Automate one business process',
      title: 'Pick the process that eats your week. Two weeks from the kickoff workshop, it runs itself.',
      subhead:
        'You name one process. We map it, build the automation, and hand it over working. Two weeks from the kickoff workshop, and it costs at least 75% less to run than it does today, or we refund your fee.',
      bullets: [
        {
          lead: 'One process, not a transformation programme.',
          body: 'You choose it in the first hour. Order entry, invoicing, client follow-ups, report assembly, whatever costs you most.'
        },
        {
          lead: 'Two weeks from the kickoff workshop.',
          body: 'Not two weeks from your first email. The clock starts the day we sit down and map the process together.'
        },
        {
          lead: 'The 75% Guarantee.',
          body: 'We measure what the process costs you today, in the workshop, in writing. If the automation does not cut that by at least 75%, you get your fee back.'
        }
      ],

      problemTitle: 'The process nobody has time to fix',
      problemParagraphs: [
        'There is one in every business. Somebody opens a file, reads a number, types it somewhere else, checks it, and does it again tomorrow. It takes four hours a week, or ten, and it has taken that long for years.',
        'Everyone knows it is stupid. Nobody fixes it, because fixing it means a week nobody has, a project nobody owns, and a software quote that comes back longer than the process itself.',
        'So it stays. It grows quietly with the business. And the person doing it is usually one of the people you can least afford to have doing it.'
      ],

      mechanismTitle: 'How two weeks is possible',
      mechanismParagraphs: [
        'We do not start with a blank editor. We start with your process on a whiteboard, then build it on automation platforms that already handle the connecting, the retrying and the logging, so the only thing left to build is the part that is specific to you.',
        'AI does the parts it is good at. Reading a messy document, classifying an email, pulling a figure out of a PDF that changes shape every month. Everything else is boring, deterministic plumbing, which is exactly what you want holding your business up.',
        'That is why two weeks from the kickoff workshop is a date we put in the contract. We assemble a system around a process we mapped with you in the first session, on platforms that already exist.'
      ],

      stackTitle: 'What you get',
      stackIntro: 'One fixed scope, agreed in writing before anything is built.',
      stackItems: [
        {
          lead: 'The kickoff workshop, two to three hours.',
          body: 'We walk your process step by step, with the people who actually run it. We leave with the map and with the numbers: how long each step takes and what it costs you.'
        },
        {
          lead: 'The build.',
          body: 'The automation itself, built and tested against your real cases, not a demo dataset.'
        },
        {
          lead: 'A handover session, one to two hours.',
          body: 'We show your team how it runs, what happens when something fails, and how to tell.'
        },
        {
          lead: 'Access to the automation platform, in your name.',
          body: 'The accounts are created in your name, so nothing we build sits in a login only we can reach.'
        },
        {
          lead: 'Written documentation.',
          body: 'What it does, what it connects to, and what to do when a step breaks. Written so the person who has to read it at 8am can follow it.'
        }
      ],

      timelineTitle: 'What the two weeks look like',
      timeline: [
        {
          when: 'Day 0',
          body: 'The kickoff workshop. Two to three hours. We map the process and measure what it costs you today. The clock starts here.'
        },
        {
          when: 'Days 1 to 7',
          body: 'We build. You get a working version to look at partway through, not a surprise at the end.'
        },
        {
          when: 'Days 8 and 9',
          body: 'Testing against your real cases, and the fixes that come out of it.'
        },
        {
          when: 'Day 10',
          body: 'Handover. Your team runs it, we watch, and we answer the questions that only come up once somebody actually uses it.'
        }
      ],
      timelineNote:
        'Ten working days is two calendar weeks, counted from the workshop. If your process needs access we do not have yet, the clock pauses until we have it, and we tell you the day it happens.',

      guaranteeTitle: 'The 75% Guarantee',
      guaranteePromise:
        'If we miss the handover date agreed at the kickoff workshop, or the automation does not cut what that process costs you to run by at least 75%, we refund your fee.',
      guaranteePoints: [
        {
          lead: 'The baseline is measured before we build, not after.',
          body: 'In the workshop we count the hours the process takes and the errors it produces, and we write the number down. That number goes into the contract. We cannot move it later and neither can you.'
        },
        {
          lead: 'The number is checkable.',
          body: 'Cost to run means the time your team spends on the process, at the rate you tell us, plus the rework the errors cause. Same method before and after.'
        },
        {
          lead: 'You get thirty days of us fixing it first.',
          body: 'If the first measurement is short of the target, we have thirty days to close the gap before any money moves. Fixing beats refunding, for both of us.'
        },
        {
          lead: 'What we need from you.',
          body: 'Use it, let your team be trained on it, and give us the access needed to measure. That is the whole list.'
        },
        {
          lead: 'How you claim.',
          body: 'We measure again thirty days after handover, by the same method. Email info@fijisolutions.net within thirty days of that measurement, with the numbers we agreed. You get an answer within ten working days.'
        }
      ],
      guaranteeClosing:
        'The automation also matches the written requirements we agree at the kickoff workshop, and we fix any defect against those requirements at no cost to you. These terms go into the contract before we build, in these words. You can hold us to every one of them.',

      fitTitle: 'Who this is for',
      fitForLabel: 'This is for you if',
      fitFor: [
        'You own the business, or you can decide without taking it upstairs.',
        'At least one person spends hours every week on the same repetitive task.',
        'The process has a shape somebody can describe. Messy is fine. Undefined is not.',
        'You can give us access to the systems the process touches.'
      ],
      fitNotForLabel: 'This is not for you if',
      fitNotFor: [
        'You want a full platform rebuild. That is a different engagement and a different conversation.',
        'The process changes fundamentally every month. There is nothing stable to automate yet.',
        'Nobody internally can spare two to three hours for the workshop.',
        'You want the automation but not the measurement. The guarantee is built on the measurement.'
      ],

      faqTitle: 'The questions we get asked',
      faqs: [
        {
          q: 'What does it cost?',
          a: 'We quote it after the first call, in writing, against what your process actually needs. There is no list price and no rate card, because scoping a process without seeing it is guessing. The fee is fixed before anything is built, and it does not move afterwards.'
        },
        {
          q: 'Which process should I pick?',
          a: 'The one you would describe to a friend as stupid. If you have three candidates, bring all three to the call and we will tell you which one pays back fastest. That part is free.'
        },
        {
          q: 'What if the automation breaks?',
          a: 'Automations break when the systems around them change. That is why the handover covers what failure looks like and how you are alerted to it. Ongoing maintenance is a separate care plan, and you are not obliged to take it.'
        },
        {
          q: 'Do we have to replace our existing software?',
          a: 'No. Most of this work sits between the tools you already pay for and makes them talk to each other. Replacing things is expensive and rarely necessary for a single process.'
        },
        {
          q: 'Is this really AI, or is it just scripts?',
          a: 'Both, and the split matters. AI handles the judgement steps, like reading a document that changes shape. Everything else is deterministic, because a process that runs your business should fail loudly rather than creatively.'
        }
      ],

      ctaButton: 'Automate my process',
      ctaCallout:
        'Free call, no obligation. You leave it knowing which of your processes pays back fastest, whether or not you hire us.',

      formTitle: 'Tell us which process to look at',
      formSubhead:
        'Name the process that costs you most. We will come back with what it would take to automate it and what it would save.',
      formMessageLabel: 'Which process should we look at? (optional)',
      formMessagePlaceholder: 'e.g. order entry, invoice matching, weekly reporting…',
      formMicrocopy: 'We only ask for what we need to call you back.',
      formSuccess: 'Thank you. We will come back to you about your process.',
      calendlyLead: 'Prefer to skip the form? Book the call directly:',
      calendlyLink: 'Pick a time on Calendly'
    },

    el: {
      metaTitle: 'Αυτοματοποίηση διαδικασίας | Fiji Solutions',
      metaDescription:
        'Αυτοματοποίηση διαδικασίας σε δύο εβδομάδες από την εναρκτήρια συνάντηση. Κοστίζει τουλάχιστον 75% λιγότερο να τρέχει, αλλιώς επιστρέφουμε την αμοιβή.',
      metaKeywords:
        'αυτοματοποίηση διαδικασίας, αυτοματοποίηση διαδικασιών μικρή επιχείρηση, αυτοματισμοί επιχείρησης, no-code αυτοματοποίηση, χειροκίνητη καταχώρηση δεδομένων',
      ogAlt: 'Fiji Solutions - μία διαδικασία αυτοματοποιημένη, δύο εβδομάδες από την εναρκτήρια συνάντηση',

      eyebrow: 'Αυτοματοποίηση μίας διαδικασίας',
      title: 'Διάλεξε τη διαδικασία που σου τρώει την εβδομάδα. Δύο εβδομάδες από την εναρκτήρια συνάντηση, τρέχει μόνη της.',
      subhead:
        'Εσύ διαλέγεις μία διαδικασία. Εμείς τη χαρτογραφούμε, χτίζουμε τον αυτοματισμό και στον παραδίδουμε να δουλεύει. Δύο εβδομάδες από την εναρκτήρια συνάντηση, και κοστίζει τουλάχιστον 75% λιγότερο από σήμερα, αλλιώς σου επιστρέφουμε την αμοιβή.',
      bullets: [
        {
          lead: 'Μία διαδικασία, όχι πρόγραμμα μετασχηματισμού.',
          body: 'Τη διαλέγεις μέσα στην πρώτη ώρα. Καταχώρηση παραγγελιών, τιμολόγηση, υπενθυμίσεις σε πελάτες, σύνθεση αναφορών, ό,τι σου κοστίζει περισσότερο.'
        },
        {
          lead: 'Δύο εβδομάδες από την εναρκτήρια συνάντηση.',
          body: 'Όχι δύο εβδομάδες από το πρώτο σου email. Το ρολόι ξεκινά τη μέρα που καθόμαστε μαζί και χαρτογραφούμε τη διαδικασία.'
        },
        {
          lead: 'Η Εγγύηση 75%.',
          body: 'Μετράμε τι σου κοστίζει η διαδικασία σήμερα, στην εναρκτήρια συνάντηση, γραπτά. Αν ο αυτοματισμός δεν το κόψει κατά τουλάχιστον 75%, παίρνεις πίσω την αμοιβή σου.'
        }
      ],

      problemTitle: 'Η διαδικασία που κανείς δεν προλαβαίνει να φτιάξει',
      problemParagraphs: [
        'Υπάρχει σε κάθε επιχείρηση. Κάποιος ανοίγει ένα αρχείο, διαβάζει έναν αριθμό, τον πληκτρολογεί κάπου αλλού, τον ελέγχει, και το ξανακάνει αύριο. Παίρνει τέσσερις ώρες την εβδομάδα, ή δέκα, και παίρνει τόσες εδώ και χρόνια.',
        'Όλοι ξέρουν ότι είναι ανόητο. Κανείς δεν το φτιάχνει, γιατί για να το φτιάξεις χρειάζεσαι μια εβδομάδα που δεν έχει κανείς, ένα έργο που δεν αναλαμβάνει κανείς, και μια προσφορά λογισμικού που γυρνά πιο μεγάλη από την ίδια τη διαδικασία.',
        'Έτσι μένει. Μεγαλώνει αθόρυβα μαζί με την επιχείρηση. Και αυτός που την κάνει είναι συνήθως από τους ανθρώπους που λιγότερο από όλους θα ήθελες να την κάνουν.'
      ],

      mechanismTitle: 'Πώς γίνονται δύο εβδομάδες',
      mechanismParagraphs: [
        'Δεν ξεκινάμε από άδειο αρχείο. Ξεκινάμε με τη διαδικασία σου σε έναν πίνακα, και μετά τη χτίζουμε πάνω σε πλατφόρμες αυτοματισμού που ήδη αναλαμβάνουν τις συνδέσεις, τις επαναλήψεις και την καταγραφή. Έτσι μένει να χτιστεί μόνο το κομμάτι που είναι δικό σου.',
        'Το AI κάνει αυτά που κάνει καλά. Διαβάζει ένα ακατάστατο έγγραφο, ταξινομεί ένα email, βγάζει ένα νούμερο από ένα PDF που αλλάζει μορφή κάθε μήνα. Όλα τα υπόλοιπα είναι βαρετή, προβλέψιμη υδραυλική, που είναι ακριβώς αυτό που θέλεις να κρατά όρθια την επιχείρησή σου.',
        'Γι’ αυτό βάζουμε στο συμβόλαιο ημερομηνία παράδοσης δύο εβδομάδες από την εναρκτήρια συνάντηση. Συναρμολογούμε ένα σύστημα γύρω από μια διαδικασία που χαρτογραφήσαμε μαζί σου στην πρώτη συνάντηση, πάνω σε πλατφόρμες που ήδη υπάρχουν.'
      ],

      stackTitle: 'Τι παίρνεις',
      stackIntro: 'Ένα σταθερό αντικείμενο εργασίας, συμφωνημένο γραπτά πριν χτιστεί οτιδήποτε.',
      stackItems: [
        {
          lead: 'Η εναρκτήρια συνάντηση, δύο με τρεις ώρες.',
          body: 'Περνάμε τη διαδικασία βήμα βήμα, με τους ανθρώπους που την τρέχουν στην πράξη. Φεύγουμε με τον χάρτη και με τα νούμερα: πόσο παίρνει κάθε βήμα και τι σου κοστίζει.'
        },
        {
          lead: 'Η υλοποίηση.',
          body: 'Ο ίδιος ο αυτοματισμός, χτισμένος και δοκιμασμένος πάνω στις πραγματικές σου περιπτώσεις, όχι σε δείγμα επίδειξης.'
        },
        {
          lead: 'Συνάντηση παράδοσης, μία με δύο ώρες.',
          body: 'Δείχνουμε στην ομάδα σου πώς τρέχει, τι γίνεται όταν κάτι αποτύχει, και πώς θα το καταλάβει.'
        },
        {
          lead: 'Πρόσβαση στην πλατφόρμα αυτοματισμού, στο όνομά σου.',
          body: 'Οι λογαριασμοί ανοίγουν στο δικό σου όνομα, ώστε τίποτα από όσα χτίζουμε να μη βρίσκεται σε λογαριασμό που τον φτάνουμε μόνο εμείς.'
        },
        {
          lead: 'Γραπτή τεκμηρίωση.',
          body: 'Τι κάνει, με τι συνδέεται, και τι κάνεις όταν ένα βήμα σπάσει. Γραμμένη ώστε να τη διαβάσει και να τη βγάλει πέρα αυτός που θα την ανοίξει στις 8 το πρωί.'
        }
      ],

      timelineTitle: 'Πώς μοιάζουν οι δύο εβδομάδες',
      timeline: [
        {
          when: 'Ημέρα 0',
          body: 'Η εναρκτήρια συνάντηση. Δύο με τρεις ώρες. Χαρτογραφούμε τη διαδικασία και μετράμε τι σου κοστίζει σήμερα. Το ρολόι ξεκινά εδώ.'
        },
        {
          when: 'Ημέρες 1 έως 7',
          body: 'Χτίζουμε. Βλέπεις μια λειτουργική εκδοχή στη μέση της διαδρομής, όχι έκπληξη στο τέλος.'
        },
        {
          when: 'Ημέρες 8 και 9',
          body: 'Δοκιμές πάνω στις πραγματικές σου περιπτώσεις, και οι διορθώσεις που προκύπτουν από αυτές.'
        },
        {
          when: 'Ημέρα 10',
          body: 'Παράδοση. Η ομάδα σου την τρέχει, εμείς παρακολουθούμε, και απαντάμε στις ερωτήσεις που βγαίνουν μόνο όταν τη χρησιμοποιήσει κάποιος στα αλήθεια.'
        }
      ],
      timelineNote:
        'Δέκα εργάσιμες ημέρες είναι δύο ημερολογιακές εβδομάδες, μετρημένες από την εναρκτήρια συνάντηση. Αν η διαδικασία χρειάζεται πρόσβαση που δεν έχουμε ακόμα, το ρολόι σταματά μέχρι να τη λάβουμε, και σου το λέμε τη μέρα που συμβαίνει.',

      guaranteeTitle: 'Η Εγγύηση 75%',
      guaranteePromise:
        'Αν χάσουμε την ημερομηνία παράδοσης που συμφωνήσαμε στην εναρκτήρια συνάντηση, ή αν ο αυτοματισμός δεν μειώσει κατά τουλάχιστον 75% το κόστος λειτουργίας αυτής της διαδικασίας, σου επιστρέφουμε την αμοιβή σου.',
      guaranteePoints: [
        {
          lead: 'Η βάση αναφοράς μετριέται πριν χτίσουμε, όχι μετά.',
          body: 'Στην εναρκτήρια συνάντηση μετράμε τις ώρες που παίρνει η διαδικασία και τα λάθη που παράγει, και γράφουμε το νούμερο. Αυτό το νούμερο μπαίνει στο συμβόλαιο. Δεν μπορούμε να το μετακινήσουμε μετά, ούτε εμείς ούτε εσύ.'
        },
        {
          lead: 'Το νούμερο ελέγχεται.',
          body: 'Κόστος λειτουργίας σημαίνει ο χρόνος που ξοδεύει η ομάδα σου στη διαδικασία, με τη χρέωση που μας δίνεις, συν τη διόρθωση που προκαλούν τα λάθη. Ίδια μέθοδος πριν και μετά.'
        },
        {
          lead: 'Έχεις τριάντα ημέρες που το διορθώνουμε πρώτα.',
          body: 'Αν η πρώτη μέτρηση πέσει έξω από τον στόχο, έχουμε τριάντα ημέρες να κλείσουμε τη διαφορά πριν κινηθεί οποιοδήποτε χρήμα. Η διόρθωση είναι καλύτερη από την επιστροφή, και για τους δυο μας.'
        },
        {
          lead: 'Τι ζητάμε από εσένα.',
          body: 'Να τη χρησιμοποιείς, να αφήσεις την ομάδα σου να εκπαιδευτεί, και να μας δώσεις την πρόσβαση που χρειάζεται για να μετράμε. Αυτή είναι όλη η λίστα.'
        },
        {
          lead: 'Πώς κάνεις χρήση της εγγύησης.',
          body: 'Μετράμε ξανά τριάντα ημέρες μετά την παράδοση, με την ίδια μέθοδο. Στέλνεις email στο info@fijisolutions.net μέσα σε τριάντα ημέρες από εκείνη τη μέτρηση, με τα νούμερα που συμφωνήσαμε. Παίρνεις απάντηση μέσα σε δέκα εργάσιμες ημέρες.'
        }
      ],
      guaranteeClosing:
        'Ο αυτοματισμός αντιστοιχεί επίσης στις γραπτές απαιτήσεις που συμφωνούμε στην εναρκτήρια συνάντηση, και διορθώνουμε χωρίς χρέωση κάθε σφάλμα σε σχέση με αυτές. Αυτοί οι όροι μπαίνουν στο συμβόλαιο πριν χτίσουμε, με αυτά ακριβώς τα λόγια. Μπορείς να μας κρατήσεις σε κάθε έναν από αυτούς.',

      fitTitle: 'Για ποιον είναι',
      fitForLabel: 'Είναι για εσένα αν',
      fitFor: [
        'Έχεις την επιχείρηση, ή μπορείς να αποφασίσεις χωρίς να το πας παραπάνω.',
        'Τουλάχιστον ένας άνθρωπος ξοδεύει ώρες κάθε εβδομάδα στην ίδια επαναλαμβανόμενη δουλειά.',
        'Η διαδικασία έχει σχήμα που μπορεί κάποιος να περιγράψει. Ακατάστατη είναι εντάξει. Ακαθόριστη όχι.',
        'Μπορείς να μας δώσεις πρόσβαση στα συστήματα που ακουμπά η διαδικασία.'
      ],
      fitNotForLabel: 'Δεν είναι για εσένα αν',
      fitNotFor: [
        'Θέλεις πλήρη ανακατασκευή πλατφόρμας. Αυτό είναι άλλο έργο και άλλη συζήτηση.',
        'Η διαδικασία αλλάζει ριζικά κάθε μήνα. Δεν υπάρχει ακόμα κάτι σταθερό να αυτοματοποιηθεί.',
        'Κανείς εσωτερικά δεν μπορεί να διαθέσει δύο με τρεις ώρες για την εναρκτήρια συνάντηση.',
        'Θέλεις τον αυτοματισμό αλλά όχι τη μέτρηση. Η εγγύηση στηρίζεται στη μέτρηση.'
      ],

      faqTitle: 'Οι ερωτήσεις που μας κάνουν',
      faqs: [
        {
          q: 'Πόσο κοστίζει;',
          a: 'Σου δίνουμε προσφορά μετά την πρώτη κλήση, γραπτά, με βάση αυτό που χρειάζεται πραγματικά η διαδικασία σου. Δεν υπάρχει τιμοκατάλογος, γιατί το να κοστολογήσεις μια διαδικασία χωρίς να τη δεις είναι μαντεψιά. Η αμοιβή κλειδώνει πριν χτιστεί οτιδήποτε και δεν μετακινείται μετά.'
        },
        {
          q: 'Ποια διαδικασία να διαλέξω;',
          a: 'Αυτή που θα περιέγραφες σε φίλο ως ανόητη. Αν έχεις τρεις υποψήφιες, φέρε και τις τρεις στην κλήση και θα σου πούμε ποια αποσβένει πιο γρήγορα. Αυτό το κομμάτι είναι δωρεάν.'
        },
        {
          q: 'Τι γίνεται αν σπάσει ο αυτοματισμός;',
          a: 'Οι αυτοματισμοί σπάνε όταν αλλάζουν τα συστήματα γύρω τους. Γι’ αυτό η παράδοση καλύπτει πώς μοιάζει μια αποτυχία και πώς ειδοποιείσαι για αυτήν. Η συνεχής συντήρηση είναι ξεχωριστό πλάνο φροντίδας, και δεν είσαι υποχρεωμένος να το πάρεις.'
        },
        {
          q: 'Πρέπει να αντικαταστήσουμε το λογισμικό που ήδη έχουμε;',
          a: 'Όχι. Αυτή η δουλειά κάθεται ανάμεσα στα εργαλεία που ήδη πληρώνεις και τα κάνει να μιλάνε μεταξύ τους. Η αντικατάσταση κοστίζει ακριβά και σπάνια χρειάζεται για μία διαδικασία.'
        },
        {
          q: 'Είναι στα αλήθεια AI ή απλά scripts;',
          a: 'Και τα δύο, και ο διαχωρισμός μετράει. Το AI αναλαμβάνει τα βήματα κρίσης, όπως το να διαβάσει ένα έγγραφο που αλλάζει μορφή. Όλα τα υπόλοιπα είναι προβλέψιμα, γιατί μια διαδικασία που κρατά την επιχείρησή σου πρέπει να αποτυγχάνει θορυβωδώς και όχι δημιουργικά.'
        }
      ],

      ctaButton: 'Θέλω να αυτοματοποιήσω τη διαδικασία μου',
      ctaCallout:
        'Δωρεάν κλήση, χωρίς δέσμευση. Φεύγεις ξέροντας ποια από τις διαδικασίες σου αποσβένει πιο γρήγορα, είτε μας αναθέσεις τη δουλειά είτε όχι.',

      formTitle: 'Πες μας ποια διαδικασία να δούμε',
      formSubhead:
        'Ονόμασε τη διαδικασία που σου κοστίζει περισσότερο. Θα σου πούμε τι θα χρειαζόταν για να αυτοματοποιηθεί και τι θα σου γλίτωνε.',
      formMessageLabel: 'Ποια διαδικασία να δούμε; (προαιρετικό)',
      formMessagePlaceholder: 'π.χ. καταχώρηση παραγγελιών, αντιστοίχιση τιμολογίων, εβδομαδιαία αναφορά…',
      formMicrocopy: 'Ζητάμε μόνο όσα χρειαζόμαστε για να σου απαντήσουμε.',
      formSuccess: 'Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου για τη διαδικασία σου.',
      calendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση απευθείας:',
      calendlyLink: 'Διάλεξε ώρα στο Calendly'
    }
  }
};

export default processAutomation;
