import type {Offer} from '@/components/OfferLanding';

// Offer J from the Proven Offers workbook: "AI Agent (1 Process)".
//
// Timeline: the workbook says 5-10 days. Published as ONE WEEK, which is the midpoint of that
// range rounded down to a clean unit, per the rule applied to all eight offers. The anchor is the
// kickoff workshop and it is stated in the same sentence as the number, every time. This is the
// shortest of the eight, so the anchor matters more here than anywhere else: one week from the
// workshop is not one week from the reader's first email, and the copy says so above the fold.
//
// Guarantee: the workbook's row 11 for this offer lists "Guaranteed x% time/cost savings or
// [consequence]", the same row as offer I. The percentage is 75 and the consequence is a refund of
// the fee. That is a PROMISE WITH A REMEDY, not a measurement of past work. `proof/` holds nothing
// for Fiji except the Snowflake partnership, so there is no number here that describes a past
// engagement, and `guaranteePromise` says out loud that the 75 is a promise about the reader's own
// process. Row 11 also carries three quieter promises (on time, matches the written requirements,
// defects fixed at no cost); they are the first bullet of `guaranteePoints` rather than a separate
// section, because a guarantee split across two places is a guarantee nobody reads. Each of those
// three states its own consequence: defects are fixed at no cost, and a missed date refunds the
// fee exactly as a missed 75% does. `guaranteeClosing` tells the reader to hold us to every one of
// them, so none of them may sit there as a promise with no remedy behind it.
//
// The claim window counts from the MEASUREMENT DATE, and that date is fixed in the workshop next
// to the baseline. Without it the thirty days have no start the buyer can date, and the one term
// that bounds our liability becomes unfalsifiable from their side.
//
// Keyword separation: this page must not compete with /offers/process-automation, its sibling and
// the closest thing on this site to it. That page owns "automate a business process" and
// "αυτοματοποίηση διαδικασίας". This one owns "custom AI agent" and everything hanging off it, and
// the difference is real rather than cosmetic: offer I automates a process whose input has a fixed
// shape, offer J puts a model on a process whose input is written by a person. /business-process-audit
// separately owns "business process audit". Two pages chasing one keyword is how the sister repo
// ended up issuing a 301.

const aiAgent: Offer = {
  slug: 'offers/ai-agent',
  questionMarker: 'offer-ai-agent',
  serviceType: 'Business Process Automation',
  copy: {
    en: {
      metaTitle: 'Custom AI Agent, Live a Week From Kickoff | Fiji Solutions',
      metaDescription:
        'Pick one process. We build an AI agent that runs it, live one week from the kickoff workshop. It costs at least 75% less to run, or we refund your fee.',
      metaKeywords:
        'custom AI agent, AI agent for business, AI agent development, AI agent for customer emails, AI agent to run a process',
      ogAlt:
        'Fiji Solutions - a custom AI agent running one business process, live a week after the kickoff workshop',

      eyebrow: 'Custom AI agent for one process',
      title: 'Pick one process. One week from the kickoff workshop, an AI agent runs it.',
      subhead:
        'You name the process. We map it, build the agent, and hand it over running. One week from the kickoff workshop, and that process costs at least 75% less to run than it does today, or we refund your fee.',
      bullets: [
        {
          lead: 'One process, and you pick it.',
          body: 'Supplier emails, quote requests, order intake, claim triage, whatever swallows the most hours. You choose it in the first hour.'
        },
        {
          lead: 'One week from the kickoff workshop.',
          body: 'Not a week from your first email. The clock starts the day we sit down and map the process together.'
        },
        {
          lead: 'The 75% Guarantee.',
          body: 'We measure what the process costs you today, in the workshop, in writing. If the agent does not cut that by at least 75%, you get your fee back.'
        }
      ],

      problemTitle: 'The inbox that holds your business up',
      problemParagraphs: [
        'Somebody on your team reads all day. Supplier emails, customer questions, order confirmations, PDFs that change layout every month. Then they decide what each one means and type the answer into a second system.',
        'A script cannot do that, so it never got automated. The work sits with one person, and that person is usually the one who also knows how everything else works. When they take a week off, the week goes slower.',
        'The volume grows with the business. The answer so far has been another pair of hands, which is the most expensive way anyone has found to read an email.'
      ],

      mechanismTitle: 'How one week from the kickoff workshop is possible',
      mechanismParagraphs: [
        'An AI agent is a model with one job, a short list of tools, and a boundary. It reads the input, decides what it means, and calls the systems you already pay for to act on it. The boundary is the part that matters. It does the four things your process needs and refuses everything else.',
        'We do not train a model. We put a general model behind your process, give it your rules, your examples and your access, and test it against cases that already happened in your business, where you already know the right answer.',
        'The steps where a wrong answer is expensive stay deterministic. The agent reads and decides. The plumbing that writes into your systems is ordinary code, so it fails loudly and leaves a log.'
      ],

      stackTitle: 'What you get',
      stackIntro: 'One fixed scope, agreed in writing before anything is built.',
      stackItems: [
        {
          lead: 'A process mapping workshop, two to three hours.',
          body: 'We walk the process step by step, with the people who run it. We leave with the map and the numbers: how long each step takes, how often it goes wrong, what it costs you.'
        },
        {
          lead: 'The build.',
          body: 'The agent itself, built and tested against your real cases from the last few months, not a demo dataset.'
        },
        {
          lead: 'A handover session, one to two hours.',
          body: 'We show your team how to hand the agent work, how to see what it decided, and when to take a case back.'
        },
        {
          lead: 'Access to the agent platform, in your name.',
          body: 'The accounts, the prompts and the rules are yours. If you ever want somebody else to run it, you can hand it over without asking us for anything.'
        },
        {
          lead: 'Written documentation.',
          body: 'What the agent does, what it is allowed to touch, what it escalates, and what to do when it stops. Written for the person who opens it at 8am.'
        }
      ],

      timelineTitle: 'What the week looks like',
      timeline: [
        {
          when: 'Day 0',
          body: 'The kickoff workshop. Two to three hours. We map the process and measure what it costs you today. The clock starts here.'
        },
        {
          when: 'Days 1 to 3',
          body: 'We build. The agent reads your real cases and we correct it in front of you.'
        },
        {
          when: 'Day 4',
          body: 'Testing against cases that already happened, and the fixes that come out of it.'
        },
        {
          when: 'Day 5',
          body: 'Handover. Your team runs it on live work, we watch, and we answer the questions that only appear once somebody actually uses it.'
        }
      ],
      timelineNote:
        'Five working days is one calendar week, counted from the workshop. If the agent needs access we do not have yet, the clock pauses until we have it, and we tell you the day it happens.',

      guaranteeTitle: 'The 75% Guarantee',
      guaranteePromise:
        'If the agent does not cut what that process costs you to run by at least 75%, we refund your fee. That is a promise about your process, with a refund behind it. It is not a number measured on somebody else.',
      guaranteePoints: [
        {
          lead: 'Three more promises sit next to it.',
          body: 'The agent is live within one week of the kickoff workshop, and it does what the written requirements say. Any defect against them is fixed at no cost. If we miss the date, the same refund applies.'
        },
        {
          lead: 'The baseline is measured before we build, not after.',
          body: 'In the workshop we count the hours the process takes and the errors it produces, and we write the number down. That number goes into the contract, and neither side can move it later.'
        },
        {
          lead: 'The number is checkable.',
          body: 'Cost to run means the hours your team spends on the process, at the rate you tell us, plus the rework the errors cause, plus what the agent costs to run. Same method before and after.'
        },
        {
          lead: 'You get thirty days of us fixing it first.',
          body: 'If the first measurement falls short, we have thirty days to close the gap before any money moves. Fixing beats refunding, for both of us.'
        },
        {
          lead: 'What we need from you.',
          body: 'Let the agent handle real cases, let your team be trained on it, and give us the access needed to measure.'
        },
        {
          lead: 'How you claim.',
          body: 'Email info@fijisolutions.net within thirty days of the measurement date we set in the workshop, with the numbers we agreed. You get an answer within ten working days.'
        }
      ],
      guaranteeClosing:
        'These terms go into the contract before we build, in these words. You can hold us to every one of them.',

      fitTitle: 'Who this is for',
      fitForLabel: 'This is for you if',
      fitFor: [
        'You own the business, or you can decide without taking it upstairs.',
        'The process runs on reading and judging. Emails, documents, forms, messages.',
        'You can show us cases from the last few months to test the agent against.',
        'You can give us access to the systems the agent has to write into.'
      ],
      fitNotForLabel: 'This is not for you if',
      fitNotFor: [
        'You want an assistant that answers anything. This agent does one job and refuses the rest.',
        'A wrong decision here cannot be undone. Payments and legal filings need a person in the loop, and we will say so on the call.',
        'Nobody internally can spare two to three hours for the workshop.',
        'You want the agent but not the measurement. The guarantee is built on the measurement.'
      ],

      faqTitle: 'The questions we get asked',
      faqs: [
        {
          q: 'What does it cost?',
          a: 'We quote it after the first call, in writing, against what your process actually needs. There is no list price, because scoping a process without seeing it is guessing. The fee is fixed before anything is built and it does not move afterwards.'
        },
        {
          q: 'What happens when the agent gets something wrong?',
          a: 'Every case it handles is logged with the reason it decided what it did. Anything below the confidence line we agree on goes to a person instead. You see the wrong ones in the first week, which is why testing runs on cases where you already know the right answer.'
        },
        {
          q: 'Where does our data go?',
          a: 'We agree the model and the hosting region with you before the build, and the agent touches only the systems you grant it. The documentation lists every connection. If your data cannot leave a specific jurisdiction, say so on the call.'
        },
        {
          q: 'How is this different from automating the process without AI?',
          a: 'A rules-based automation needs the input to look the same every time. An agent copes with input that does not: an email written by a person, a document with a new layout. If your process is stable and structured, we will say so and point you at the simpler build.'
        },
        {
          q: 'Does somebody lose their job?',
          a: 'The agent takes the repetitive reading. Your team keeps the work that needs a person: the exceptions, the customers, the judgement calls the agent escalates. The hours come back to you, and what you do with them is your decision.'
        }
      ],

      ctaButton: 'Build my AI agent',
      ctaCallout:
        'The form takes a minute and there is no obligation. The call after it is free. You leave that call knowing if an agent fits the process you have in mind, whether or not you hire us.',

      formTitle: 'Tell us which process the agent should run',
      formSubhead:
        'Name the process that eats the most reading time. We will come back with what an agent would take to build and what it would save.',
      formMessageLabel: 'Which process should the agent run? (optional)',
      formMessagePlaceholder: 'e.g. supplier emails, quote requests, claim triage…',
      formMicrocopy: 'Free, no obligation, no sales pitch.',
      formSuccess: 'Thank you. We will come back to you about your process.',
      calendlyLead: 'Prefer to skip the form? Book the call directly:',
      calendlyLink: 'Pick a time on Calendly'
    },

    el: {
      metaTitle: 'Custom AI agent, εβδομάδα από τη συνάντηση | Fiji Solutions',
      metaDescription:
        'Διάλεξε μία διαδικασία. Χτίζουμε AI agent που την τρέχει, μία εβδομάδα από τη συνάντηση. Κοστίζει τουλάχιστον 75% λιγότερο, αλλιώς επιστρέφουμε την αμοιβή.',
      metaKeywords:
        'custom AI agent, AI agent για επιχειρήσεις, ανάπτυξη AI agent, AI agent για email πελατών, AI agent που τρέχει διαδικασία',
      ogAlt:
        'Fiji Solutions - custom AI agent που τρέχει μία διαδικασία, ζωντανό μία εβδομάδα από την εναρκτήρια συνάντηση',

      eyebrow: 'Custom AI agent για μία διαδικασία',
      title: 'Διάλεξε μία διαδικασία. Μία εβδομάδα από την εναρκτήρια συνάντηση, την τρέχει ένα AI agent.',
      subhead:
        'Εσύ ονομάζεις τη διαδικασία. Εμείς τη χαρτογραφούμε, χτίζουμε το agent και στο παραδίδουμε να δουλεύει. Μία εβδομάδα από την εναρκτήρια συνάντηση, και αυτή η διαδικασία κοστίζει τουλάχιστον 75% λιγότερο από σήμερα, αλλιώς σου επιστρέφουμε την αμοιβή.',
      bullets: [
        {
          lead: 'Μία διαδικασία, και τη διαλέγεις εσύ.',
          body: 'Email προμηθευτών, αιτήματα προσφοράς, καταχώρηση παραγγελιών, διαλογή αιτημάτων, ό,τι τρώει τις περισσότερες ώρες. Τη διαλέγεις μέσα στην πρώτη ώρα.'
        },
        {
          lead: 'Μία εβδομάδα από την εναρκτήρια συνάντηση.',
          body: 'Όχι μία εβδομάδα από το πρώτο σου email. Το ρολόι ξεκινά τη μέρα που καθόμαστε μαζί και χαρτογραφούμε τη διαδικασία.'
        },
        {
          lead: 'Η Εγγύηση 75%.',
          body: 'Μετράμε τι σου κοστίζει η διαδικασία σήμερα, στη συνάντηση, γραπτά. Αν το agent δεν το κόψει κατά τουλάχιστον 75%, παίρνεις πίσω την αμοιβή σου.'
        }
      ],

      problemTitle: 'Το inbox που κρατά όρθια την επιχείρηση',
      problemParagraphs: [
        'Κάποιος στην ομάδα σου διαβάζει όλη μέρα. Email προμηθευτών, ερωτήσεις πελατών, επιβεβαιώσεις παραγγελιών, PDF που αλλάζουν διάταξη κάθε μήνα. Μετά αποφασίζει τι σημαίνει το καθένα και το πληκτρολογεί σε ένα δεύτερο σύστημα.',
        'Ένα script δεν το κάνει αυτό, οπότε δεν αυτοματοποιήθηκε ποτέ. Η δουλειά μένει σε έναν άνθρωπο, και συνήθως είναι ο ίδιος που ξέρει και πώς δουλεύουν όλα τα υπόλοιπα. Όταν λείψει μια εβδομάδα, η εβδομάδα πάει πιο αργά.',
        'Ο όγκος μεγαλώνει μαζί με την επιχείρηση. Η απάντηση μέχρι σήμερα ήταν άλλο ένα ζευγάρι χέρια, που είναι ο πιο ακριβός τρόπος να διαβάσεις ένα email.'
      ],

      mechanismTitle: 'Πώς γίνεται μία εβδομάδα από την εναρκτήρια συνάντηση',
      mechanismParagraphs: [
        'Ένα AI agent είναι ένα μοντέλο με μία δουλειά, μια μικρή λίστα εργαλείων και ένα όριο. Διαβάζει το εισερχόμενο, αποφασίζει τι σημαίνει, και καλεί τα συστήματα που ήδη πληρώνεις για να το κάνει πράξη. Το όριο είναι το σημαντικό. Κάνει τα τέσσερα πράγματα που ζητά η διαδικασία σου και αρνείται όλα τα υπόλοιπα.',
        'Δεν εκπαιδεύουμε μοντέλο. Βάζουμε ένα γενικό μοντέλο πίσω από τη διαδικασία σου, του δίνουμε τους κανόνες σου, τα παραδείγματά σου και την πρόσβαση, και το δοκιμάζουμε πάνω σε περιπτώσεις που έχουν ήδη συμβεί στην επιχείρησή σου, εκεί που ξέρεις ήδη τη σωστή απάντηση.',
        'Τα βήματα όπου μια λάθος απόφαση κοστίζει ακριβά μένουν προβλέψιμα. Το agent διαβάζει και αποφασίζει. Η διασύνδεση που γράφει μέσα στα συστήματά σου είναι συνηθισμένος κώδικας, οπότε αποτυγχάνει θορυβωδώς και αφήνει ίχνος.'
      ],

      stackTitle: 'Τι παίρνεις',
      stackIntro: 'Ένα σταθερό αντικείμενο εργασίας, συμφωνημένο γραπτά πριν χτιστεί οτιδήποτε.',
      stackItems: [
        {
          lead: 'Συνάντηση χαρτογράφησης, δύο με τρεις ώρες.',
          body: 'Περνάμε τη διαδικασία βήμα βήμα, με τους ανθρώπους που την τρέχουν. Φεύγουμε με τον χάρτη και με τα νούμερα: πόσο παίρνει κάθε βήμα, πόσο συχνά πάει στραβά, τι σου κοστίζει.'
        },
        {
          lead: 'Η υλοποίηση.',
          body: 'Το ίδιο το agent, χτισμένο και δοκιμασμένο πάνω στις πραγματικές σου περιπτώσεις των τελευταίων μηνών, όχι σε δείγμα επίδειξης.'
        },
        {
          lead: 'Συνάντηση παράδοσης, μία με δύο ώρες.',
          body: 'Δείχνουμε στην ομάδα σου πώς δίνει δουλειά στο agent, πώς βλέπει τι αποφάσισε, και πότε παίρνει μια περίπτωση πίσω.'
        },
        {
          lead: 'Πρόσβαση στην πλατφόρμα του agent, στο όνομά σου.',
          body: 'Οι λογαριασμοί, τα prompts και οι κανόνες είναι δικά σου. Αν κάποτε θέλεις να το τρέχει άλλος, μπορείς να το παραδώσεις χωρίς να ζητήσεις τίποτα από εμάς.'
        },
        {
          lead: 'Γραπτή τεκμηρίωση.',
          body: 'Τι κάνει το agent, τι επιτρέπεται να ακουμπά, τι προωθεί σε άνθρωπο, και τι κάνεις όταν σταματήσει. Γραμμένη για αυτόν που θα την ανοίξει στις 8 το πρωί.'
        }
      ],

      timelineTitle: 'Πώς μοιάζει η εβδομάδα',
      timeline: [
        {
          when: 'Ημέρα 0',
          body: 'Η εναρκτήρια συνάντηση. Δύο με τρεις ώρες. Χαρτογραφούμε τη διαδικασία και μετράμε τι σου κοστίζει σήμερα. Το ρολόι ξεκινά εδώ.'
        },
        {
          when: 'Ημέρες 1 έως 3',
          body: 'Χτίζουμε. Το agent διαβάζει τις πραγματικές σου περιπτώσεις και το διορθώνουμε μπροστά σου.'
        },
        {
          when: 'Ημέρα 4',
          body: 'Δοκιμές πάνω σε περιπτώσεις που έχουν ήδη συμβεί, και οι διορθώσεις που προκύπτουν από αυτές.'
        },
        {
          when: 'Ημέρα 5',
          body: 'Παράδοση. Η ομάδα σου το τρέχει σε πραγματική δουλειά, εμείς παρακολουθούμε, και απαντάμε στις ερωτήσεις που βγαίνουν μόνο όταν το χρησιμοποιήσει κάποιος στα αλήθεια.'
        }
      ],
      timelineNote:
        'Πέντε εργάσιμες ημέρες είναι μία ημερολογιακή εβδομάδα, μετρημένες από τη συνάντηση. Αν το agent χρειάζεται πρόσβαση που δεν έχουμε ακόμα, το ρολόι σταματά μέχρι να τη λάβουμε, και σου το λέμε τη μέρα που συμβαίνει.',

      guaranteeTitle: 'Η Εγγύηση 75%',
      guaranteePromise:
        'Αν το agent δεν μειώσει κατά τουλάχιστον 75% το κόστος λειτουργίας αυτής της διαδικασίας, σου επιστρέφουμε την αμοιβή σου. Είναι υπόσχεση για τη δική σου διαδικασία, με επιστροφή χρημάτων από πίσω. Δεν είναι νούμερο μετρημένο σε κάποιον άλλον.',
      guaranteePoints: [
        {
          lead: 'Δίπλα της στέκονται άλλες τρεις υποσχέσεις.',
          body: 'Το agent είναι ζωντανό μέσα σε μία εβδομάδα από την εναρκτήρια συνάντηση και κάνει αυτό που λένε οι γραπτές προδιαγραφές. Κάθε σφάλμα σε σχέση με αυτές διορθώνεται χωρίς χρέωση. Αν χάσουμε την ημερομηνία, ισχύει η ίδια επιστροφή χρημάτων.'
        },
        {
          lead: 'Η βάση αναφοράς μετριέται πριν χτίσουμε, όχι μετά.',
          body: 'Στη συνάντηση μετράμε τις ώρες που παίρνει η διαδικασία και τα λάθη που παράγει, και γράφουμε το νούμερο. Μπαίνει στο συμβόλαιο, και δεν το μετακινεί μετά καμία πλευρά.'
        },
        {
          lead: 'Το νούμερο ελέγχεται.',
          body: 'Κόστος λειτουργίας σημαίνει τις ώρες που ξοδεύει η ομάδα σου στη διαδικασία, με τη χρέωση που μας δίνεις, συν τη διόρθωση που προκαλούν τα λάθη, συν το τι κοστίζει να τρέχει το agent. Ίδια μέθοδος πριν και μετά.'
        },
        {
          lead: 'Έχεις τριάντα ημέρες που το διορθώνουμε πρώτα.',
          body: 'Αν η πρώτη μέτρηση πέσει έξω, έχουμε τριάντα ημέρες να κλείσουμε τη διαφορά πριν κινηθεί χρήμα. Η διόρθωση είναι καλύτερη από την επιστροφή, και για τους δυο μας.'
        },
        {
          lead: 'Τι ζητάμε από εσένα.',
          body: 'Να αφήσεις το agent να δουλέψει σε πραγματικές περιπτώσεις, να εκπαιδευτεί η ομάδα σου, και να μας δώσεις την πρόσβαση που χρειάζεται για να μετράμε.'
        },
        {
          lead: 'Πώς κάνεις χρήση της εγγύησης.',
          body: 'Στέλνεις email στο info@fijisolutions.net μέσα σε τριάντα ημέρες από την ημερομηνία μέτρησης που ορίζουμε στη συνάντηση, με τα νούμερα που συμφωνήσαμε. Παίρνεις απάντηση μέσα σε δέκα εργάσιμες ημέρες.'
        }
      ],
      guaranteeClosing:
        'Αυτοί οι όροι μπαίνουν στο συμβόλαιο πριν χτίσουμε, με αυτά ακριβώς τα λόγια. Μπορείς να μας κρατήσεις σε κάθε έναν από αυτούς.',

      fitTitle: 'Για ποιον είναι',
      fitForLabel: 'Είναι για εσένα αν',
      fitFor: [
        'Έχεις την επιχείρηση, ή μπορείς να αποφασίσεις χωρίς να το πας παραπάνω.',
        'Η διαδικασία στηρίζεται στο διάβασμα και στην κρίση. Email, έγγραφα, φόρμες, μηνύματα.',
        'Μπορείς να μας δείξεις περιπτώσεις των τελευταίων μηνών για να δοκιμαστεί πάνω τους το agent.',
        'Μπορείς να μας δώσεις πρόσβαση στα συστήματα όπου πρέπει να γράφει το agent.'
      ],
      fitNotForLabel: 'Δεν είναι για εσένα αν',
      fitNotFor: [
        'Θέλεις βοηθό που απαντά σε οτιδήποτε. Αυτό το agent κάνει μία δουλειά και αρνείται τα υπόλοιπα.',
        'Μια λάθος απόφαση εδώ δεν παίρνεται πίσω. Οι πληρωμές και οι νομικές υποβολές θέλουν άνθρωπο στη μέση, και θα στο πούμε στην κλήση.',
        'Κανείς εσωτερικά δεν μπορεί να διαθέσει δύο με τρεις ώρες για τη συνάντηση.',
        'Θέλεις το agent αλλά όχι τη μέτρηση. Η εγγύηση στηρίζεται στη μέτρηση.'
      ],

      faqTitle: 'Οι ερωτήσεις που μας κάνουν',
      faqs: [
        {
          q: 'Πόσο κοστίζει;',
          a: 'Σου δίνουμε προσφορά μετά την πρώτη κλήση, γραπτά, με βάση αυτό που χρειάζεται η διαδικασία σου. Δεν υπάρχει τιμοκατάλογος, γιατί το να κοστολογήσεις μια διαδικασία χωρίς να τη δεις είναι μαντεψιά. Η αμοιβή κλειδώνει πριν χτιστεί οτιδήποτε.'
        },
        {
          q: 'Τι γίνεται όταν το agent κάνει λάθος;',
          a: 'Κάθε περίπτωση που χειρίζεται καταγράφεται μαζί με τον λόγο της απόφασης. Ό,τι πέφτει κάτω από το όριο εμπιστοσύνης που συμφωνούμε πάει σε άνθρωπο. Τα λάθη τα βλέπεις μέσα στην πρώτη εβδομάδα, γι’ αυτό οι δοκιμές τρέχουν σε περιπτώσεις όπου ξέρεις ήδη τη σωστή απάντηση.'
        },
        {
          q: 'Πού πάνε τα δεδομένα μας;',
          a: 'Το μοντέλο και η περιοχή φιλοξενίας συμφωνούνται μαζί σου πριν την υλοποίηση, και το agent ακουμπά μόνο τα συστήματα που του δίνεις. Η τεκμηρίωση αναφέρει κάθε σύνδεση. Αν τα δεδομένα σου δεν επιτρέπεται να φύγουν από συγκεκριμένη δικαιοδοσία, πες το μας στην κλήση.'
        },
        {
          q: 'Σε τι διαφέρει από αυτοματοποίηση χωρίς AI;',
          a: 'Ένας αυτοματισμός με κανόνες θέλει το εισερχόμενο να μοιάζει ίδιο κάθε φορά. Το agent αντέχει εισερχόμενο που αλλάζει: ένα email γραμμένο από άνθρωπο, ένα έγγραφο με νέα διάταξη. Αν η διαδικασία σου είναι σταθερή και δομημένη, θα στο πούμε και θα σε στείλουμε στην απλούστερη λύση.'
        },
        {
          q: 'Θα χάσει κάποιος τη δουλειά του;',
          a: 'Το agent παίρνει το επαναλαμβανόμενο διάβασμα. Η ομάδα σου κρατά αυτό που θέλει άνθρωπο: τις εξαιρέσεις, τους πελάτες, τις κρίσεις που της προωθεί το agent. Οι ώρες γυρίζουν πίσω σε εσένα, και το τι θα τις κάνεις είναι δική σου απόφαση.'
        }
      ],

      ctaButton: 'Θέλω το AI agent μου',
      ctaCallout:
        'Η φόρμα θέλει ένα λεπτό και δεν σε δεσμεύει. Η κλήση που ακολουθεί είναι δωρεάν. Φεύγεις από αυτήν ξέροντας αν ταιριάζει agent στη διαδικασία που έχεις στο μυαλό σου, είτε μας αναθέσεις τη δουλειά είτε όχι.',

      formTitle: 'Πες μας ποια διαδικασία θα τρέχει το agent',
      formSubhead:
        'Ονόμασε τη διαδικασία που τρώει τις περισσότερες ώρες διαβάσματος. Θα σου πούμε τι θα χρειαζόταν ένα agent για αυτήν και τι θα σου γλίτωνε.',
      formMessageLabel: 'Ποια διαδικασία θα τρέχει το agent; (προαιρετικό)',
      formMessagePlaceholder: 'π.χ. email προμηθευτών, αιτήματα προσφοράς, διαλογή αιτημάτων…',
      formMicrocopy: 'Δωρεάν, χωρίς δεσμεύσεις, χωρίς πιέσεις.',
      formSuccess: 'Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου για τη διαδικασία σου.',
      calendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση απευθείας:',
      calendlyLink: 'Διάλεξε ώρα στο Calendly'
    }
  }
};

export default aiAgent;
