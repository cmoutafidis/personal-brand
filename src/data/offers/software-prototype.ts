import type {Offer} from '@/components/OfferLanding';

// Offer G from the Proven Offers workbook: "Custom Software Prototype".
//
// Timeline: the workbook says 3-30 days. Published as TWO WEEKS, which is the midpoint of that
// range rounded down to a clean unit, per the rule applied to all eight offers. The anchor is the
// kickoff workshop and it is stated in the same sentence as the number, every time. Ten working
// days is two calendar weeks, which is why the timeline ends on Day 10 and not on Day 14.
// That "every time" includes the two surfaces that travel away from the page and cannot be
// qualified by anything below them: the metaTitle (which is also og:title, twitter:title and the
// schema.org Service.name, split off the pipe) and the ogAlt. Carrying the anchor costs the title
// characters. The 60-character cap is hard and the anchor outranks the longer brand, so do not
// lengthen the title without first removing something else from the string, and never by removing
// the anchor or the exact keyword "custom software prototype".
// ⚠️ CORRECTED 2026-09-06: this paragraph used to state that the brand suffix here "is | Fiji"
// rather than the "| Fiji Solutions" the sibling offer files use, and forbade restoring
// "Solutions". The en metaTitle at line 45 already reads "| Fiji Solutions" and is 57 characters,
// so it is inside the cap. The prohibition described a string this file no longer carries.
//
// Guarantee: the workbook's row 11 for this offer lists timeline, requirements match, "bug free"
// and a cost reduction. "Bug free" is never printed literally, because nobody can guarantee it;
// what is printed is the warranty underneath it, which is that defects against the agreed
// requirements are fixed at our cost. The cost term is the build coming in at least 75% below the
// conventional-build baseline agreed in writing. The consequence for every term is a refund of the
// fee. That makes the 75% a PROMISE WITH A REMEDY, not a measurement of past work, and the copy
// says so out loud in the first guarantee point so no reader can mistake it for a case study.
// `proof/` for Fiji holds only the Snowflake partnership. There is nothing else to cite and this
// page cites nothing else.
//
// Keyword separation: /services/custom-software-development-greece already owns "custom software
// development Greece" and the topic phrasings around it. This page targets the purchase-intent
// phrasing instead, "custom software prototype" and "software prototype development", and never
// the service page's terms. The sibling offer page /offers/app-prototype is the other neighbour:
// it sells a customer-facing app, this one sells internal or product software for a CTO or a
// product owner, and the two eyebrows are deliberately different strings. Two pages chasing one
// keyword is how the sister repo ended up issuing a 301.
//
// No price appears in any string here, in either locale, per CLAUDE.md rule 7 and Charis on
// 2026-08-31: "Do not mention price." The FAQ answers the cost question with the process, which is
// a written quote after the first call, and stops there.

const softwarePrototype: Offer = {
  slug: 'offers/software-prototype',
  questionMarker: 'offer-software-prototype',
  serviceType: 'Custom Software Development',
  copy: {
    en: {
      metaTitle: 'Software Prototype, 2 Weeks From Kickoff | Fiji Solutions',
      metaDescription:
        'Your custom software as a working prototype, two weeks from the kickoff workshop. On time and matching your written requirements, or we refund the fee.',
      metaKeywords:
        'custom software prototype, software prototype development, working prototype in two weeks, proof of concept software, rapid software prototyping, AI software development',
      ogAlt: 'Fiji Solutions - a custom software prototype built in two weeks from the kickoff workshop',

      eyebrow: 'Custom software prototype',
      title: 'Show them the software instead of the slide deck. Two weeks from the kickoff workshop.',
      subhead:
        'You bring the idea and the people who will use it. We turn it into software that runs, and hand it over with the source code and the documentation. Two weeks from the kickoff workshop, on time and matching what we wrote down, or we refund your fee.',
      bullets: [
        {
          lead: 'Software that runs, end to end.',
          body: 'Real logic, real screens, a link you can send to a stakeholder who then works through it alone.'
        },
        {
          lead: 'Two weeks from the kickoff workshop.',
          body: 'Not two weeks from your first email. The clock starts the day we sit down and write the requirements together.'
        },
        {
          lead: 'The On-Time Prototype Guarantee.',
          body: 'On time, matching the written requirements, defects fixed at our cost, and built for at least 75% less than the conventional-build baseline we agree in writing. Otherwise you get your fee back.'
        }
      ],

      problemTitle: 'The estimate came back and the project went quiet',
      problemParagraphs: [
        'The software already exists in your head. Somebody has already put a number on it. Four months, a team of five, and a figure large enough to turn a project into a board decision.',
        'So it waits. For the budget round, for the business case, for someone senior to be convinced by a document describing something nobody has seen. The requirements drift while it waits, because nothing tests a requirement like using it.',
        'And the money that does get spent goes into the same shape of estimate that produced the delay. Code written by hand from scratch, against a plan approved before anyone could click anything.'
      ],

      mechanismTitle: 'How two weeks is possible',
      mechanismParagraphs: [
        'We write the requirements with you first, in one session, in plain sentences that a person and a model can both read. That document is the specification and the acceptance test at once, which is what the guarantee points at.',
        'Then we generate. AI writes the first draft of the code against those requirements. The rest of the two weeks goes on the part AI does not do: reading it, testing it against your real cases, cutting what is wrong, hardening what you will show.',
        'That is why the estimate is two weeks. Typing is no longer the slow part of building software. Deciding is, and we do the deciding with you on day zero.'
      ],

      stackTitle: 'What you get',
      stackIntro: 'One fixed scope, agreed in writing before anything is built.',
      stackItems: [
        {
          lead: 'A requirements workshop, two hours.',
          body: 'You, us, and the people who will use the thing. We leave with a written specification in your words, and with the list of what is deliberately out of scope.'
        },
        {
          lead: 'The build.',
          body: 'Code generation, then testing and refinement against your real cases. You see it running partway through, so the first look is not on the last day.'
        },
        {
          lead: 'A presentation session, two hours.',
          body: 'We walk you and the people you need to convince through the working software, and through what full development would take from here.'
        },
        {
          lead: 'The working software.',
          body: 'Deployed somewhere you can open it, log in, and hand the link to somebody else.'
        },
        {
          lead: 'The source code, in your repository.',
          body: 'Yours from the first commit. If you continue with a different team, they pick it up and keep going.'
        },
        {
          lead: 'Written documentation.',
          body: 'What it does, how it is put together, and what the next developer needs to know before touching it.'
        }
      ],

      timelineTitle: 'What the two weeks look like',
      timeline: [
        {
          when: 'Day 0',
          body: 'The kickoff workshop. Two hours. We write the requirements together and agree what the prototype has to do. The clock starts here.'
        },
        {
          when: 'Days 1 to 7',
          body: 'Generation and build. You get a first running version to click before the halfway point.'
        },
        {
          when: 'Days 8 to 10',
          body: 'Testing and refinement against your real cases, and the fixes that come out of it.'
        },
        {
          when: 'Day 10',
          body: 'The presentation session. Two hours. The working software, the source code, the documentation, and a straight answer about the time full development would take.'
        }
      ],
      timelineNote:
        'Ten working days is two calendar weeks, counted from the workshop. If the prototype needs access to a system we do not have yet, the clock pauses until we have it, and we tell you the day it happens.',

      guaranteeTitle: 'The On-Time Prototype Guarantee',
      guaranteePromise:
        'On time, matching the written requirements, defects fixed at our cost, and built for at least 75% less than the conventional-build baseline we agree in writing. Miss one and we refund your fee.',
      guaranteePoints: [
        {
          lead: 'This is a promise, not a track record.',
          body: 'Every number on this page is something we owe you, with a refund behind it. None of it is a measurement of past work.'
        },
        {
          lead: 'The baseline is agreed before we build, not after.',
          body: 'In the workshop we write down what the same scope would cost to build conventionally, using the quote you already have or the day rate of your own team. That number goes into the contract and neither side can move it later.'
        },
        {
          lead: 'On time means the date in the contract.',
          body: 'Two weeks from the workshop, counted in working days, with the pause rule above written into the same clause.'
        },
        {
          lead: 'Matching requirements means the document we wrote together.',
          body: 'Anything that fails to do what the specification says it does is a defect. We fix defects against that specification at our cost, for thirty days after the presentation session.'
        },
        {
          lead: 'How you claim.',
          body: 'Email info@fijisolutions.net within thirty days of the presentation session, pointing at the term we missed. You get an answer within ten working days.'
        }
      ],
      guaranteeClosing:
        'These terms go into the contract before we build, in these words. You can hold us to every one of them.',

      fitTitle: 'Who this is for',
      fitForLabel: 'This is for you if',
      fitFor: [
        'You already have a budget allocated for software development, or a quote sitting in front of you.',
        'You can decide, or you can get the decision made in one conversation.',
        'Real people will use this, and you can get two hours of their time.',
        'You want to see it running before the full project is committed.'
      ],
      fitNotForLabel: 'This is not for you if',
      fitNotFor: [
        'You need a production system on day ten. A prototype is built to be tested and shown, and hardening it is the next engagement.',
        'The requirements cannot be written down yet. Finding them is useful work and it is a different session.',
        'Nobody internally can spare two hours for the workshop.',
        'You want us to skip the workshop and build from a short brief. The guarantee rests on that document.'
      ],

      faqTitle: 'The questions we get asked',
      faqs: [
        {
          q: 'What does it cost?',
          a: 'We quote it after the first call, in writing, against what your prototype needs. There is no list price and no rate card. The fee is fixed before anything is built and does not move afterwards.'
        },
        {
          q: 'Is a prototype the same as production software?',
          a: 'No. It runs, it carries real logic, and people can work all the way through it. Making it survive load, real users and an audit trail is the next engagement, and we tell you at the presentation what that takes.'
        },
        {
          q: 'Who owns the code?',
          a: 'You do, from the first commit. It sits in your repository with the documentation next to it. If you carry on with another team, they read it and continue.'
        },
        {
          q: 'AI wrote it. Should I trust it?',
          a: 'Trust the review rather than the generation. Every line is read, tested against the requirements we wrote with you, and covered by the defect warranty above. The judgement stays with people.'
        },
        {
          q: 'What happens after the two weeks?',
          a: 'Three doors are open: MVP development, full development of the project, or maintenance once it is live. You are under no obligation, and the source code leaves with you either way.'
        }
      ],

      ctaButton: 'Build my prototype',
      ctaCallout:
        'Free call, no obligation. You leave it knowing what your prototype would cover and how long it would take, whether or not you hire us.',

      formTitle: 'Tell us what to build',
      formSubhead:
        'Describe the software you want to see running. We will come back with what the prototype would cover and what it would take.',
      formMessageLabel: 'What should the prototype do? (optional)',
      formMessagePlaceholder: 'e.g. a portal our clients log into, an internal tool replacing three spreadsheets…',
      formMicrocopy: 'Two minutes to fill in. The message field is optional.',
      formSuccess: 'Thank you. We will come back to you about your prototype.',
      calendlyLead: 'Prefer to skip the form? Book the call directly:',
      calendlyLink: 'Pick a time on Calendly'
    },

    el: {
      metaTitle: 'Πρωτότυπο λογισμικού | Fiji Solutions',
      metaDescription:
        'Πρωτότυπο λογισμικού που δουλεύει, δύο εβδομάδες από την εναρκτήρια συνάντηση. Στην ώρα του, στις γραπτές προδιαγραφές, αλλιώς επιστρέφουμε την αμοιβή.',
      metaKeywords:
        'πρωτότυπο λογισμικού, ανάπτυξη πρωτοτύπου λογισμικού, proof of concept λογισμικό, κατασκευή λογισμικού με AI, γρήγορη ανάπτυξη λογισμικού',
      ogAlt: 'Fiji Solutions - πρωτότυπο λογισμικού σε δύο εβδομάδες από την εναρκτήρια συνάντηση',

      eyebrow: 'Πρωτότυπο λογισμικού',
      title: 'Δείξε τους το λογισμικό, αντί για τις διαφάνειες. Δύο εβδομάδες από την εναρκτήρια συνάντηση.',
      subhead:
        'Εσύ φέρνεις την ιδέα και τους ανθρώπους που θα τη χρησιμοποιήσουν. Εμείς τη μετατρέπουμε σε λογισμικό που τρέχει, με τον πηγαίο κώδικα και την τεκμηρίωση στα χέρια σου. Δύο εβδομάδες από την εναρκτήρια συνάντηση, στην ώρα του και πάνω σε αυτά που γράψαμε, αλλιώς σου επιστρέφουμε την αμοιβή.',
      bullets: [
        {
          lead: 'Λογισμικό που τρέχει, από άκρη σε άκρη.',
          body: 'Πραγματική λογική, πραγματικές οθόνες, ένας σύνδεσμος που τον στέλνεις σε κάποιον και τον δουλεύει μόνος του.'
        },
        {
          lead: 'Δύο εβδομάδες από την εναρκτήρια συνάντηση.',
          body: 'Όχι δύο εβδομάδες από το πρώτο σου email. Το ρολόι ξεκινά τη μέρα που καθόμαστε μαζί και γράφουμε τις προδιαγραφές.'
        },
        {
          lead: 'Η Εγγύηση Έγκαιρης Παράδοσης.',
          body: 'Στην ώρα του, πάνω στις γραπτές προδιαγραφές, με τα σφάλματα να διορθώνονται με δικό μας κόστος, και με κόστος κατασκευής τουλάχιστον 75% κάτω από τη βάση συμβατικής ανάπτυξης που συμφωνούμε γραπτά. Αλλιώς παίρνεις πίσω την αμοιβή σου.'
        }
      ],

      problemTitle: 'Η εκτίμηση γύρισε και το έργο πάγωσε',
      problemParagraphs: [
        'Το λογισμικό υπάρχει ήδη στο μυαλό σου. Κάποιος έχει ήδη βάλει νούμερο πάνω του. Τέσσερις μήνες, ομάδα πέντε ατόμων, και ένα ποσό αρκετά μεγάλο ώστε ένα έργο να γίνει απόφαση διοίκησης.',
        'Οπότε περιμένει. Τον προϋπολογισμό, τη μελέτη σκοπιμότητας, κάποιον ανώτερο που πρέπει να πειστεί από ένα κείμενο για κάτι που δεν έχει δει κανείς. Όσο περιμένει, οι προδιαγραφές αλλάζουν, γιατί τίποτα δεν δοκιμάζει μια προδιαγραφή όσο η χρήση της.',
        'Και τα χρήματα που τελικά ξοδεύονται πάνε στο ίδιο σχήμα εκτίμησης που παρήγαγε την καθυστέρηση. Κώδικας γραμμένος στο χέρι από το μηδέν, πάνω σε ένα πλάνο που εγκρίθηκε πριν μπορέσει κανείς να πατήσει οτιδήποτε.'
      ],

      mechanismTitle: 'Πώς γίνονται δύο εβδομάδες',
      mechanismParagraphs: [
        'Πρώτα γράφουμε μαζί σου τις προδιαγραφές, σε μία συνάντηση, σε απλές προτάσεις που τις διαβάζει και άνθρωπος και μοντέλο. Αυτό το κείμενο είναι η προδιαγραφή και το κριτήριο αποδοχής μαζί, και σε αυτό δείχνει η εγγύηση.',
        'Μετά παράγουμε. Το AI γράφει την πρώτη εκδοχή του κώδικα πάνω σε αυτές τις προδιαγραφές. Οι υπόλοιπες μέρες πάνε σε αυτό που δεν κάνει το AI: διαβάζουμε, δοκιμάζουμε στις πραγματικές σου περιπτώσεις, κόβουμε ό,τι είναι λάθος, σταθεροποιούμε αυτό που θα δείξεις.',
        'Γι’ αυτό η εκτίμηση είναι δύο εβδομάδες. Η πληκτρολόγηση δεν είναι πια το αργό κομμάτι στην ανάπτυξη λογισμικού. Οι αποφάσεις είναι, και τις παίρνουμε μαζί σου την ημέρα μηδέν.'
      ],

      stackTitle: 'Τι παίρνεις',
      stackIntro: 'Ένα σταθερό αντικείμενο εργασίας, συμφωνημένο γραπτά πριν χτιστεί οτιδήποτε.',
      stackItems: [
        {
          lead: 'Συνάντηση προδιαγραφών, δύο ώρες.',
          body: 'Εσύ, εμείς, και οι άνθρωποι που θα το χρησιμοποιήσουν. Φεύγουμε με γραπτή προδιαγραφή, με τα δικά σου λόγια, και με τη λίστα του τι μένει συνειδητά εκτός.'
        },
        {
          lead: 'Η υλοποίηση.',
          body: 'Παραγωγή κώδικα, μετά δοκιμές και βελτιώσεις πάνω στις πραγματικές σου περιπτώσεις. Το βλέπεις να τρέχει στη μέση της διαδρομής, ώστε η πρώτη ματιά να μην πέφτει την τελευταία μέρα.'
        },
        {
          lead: 'Συνάντηση παρουσίασης, δύο ώρες.',
          body: 'Περνάμε εσένα και τους ανθρώπους που πρέπει να πειστούν μέσα από το λογισμικό που δουλεύει, και μετά από το τι χρειάζεται η πλήρης ανάπτυξη από εδώ και πέρα.'
        },
        {
          lead: 'Το λογισμικό που δουλεύει.',
          body: 'Ανεβασμένο κάπου που το ανοίγεις, μπαίνεις, και δίνεις τον σύνδεσμο σε κάποιον άλλο.'
        },
        {
          lead: 'Ο πηγαίος κώδικας, στο δικό σου repository.',
          body: 'Δικός σου από το πρώτο commit. Αν συνεχίσεις με άλλη ομάδα, τον παίρνει και προχωράει.'
        },
        {
          lead: 'Γραπτή τεκμηρίωση.',
          body: 'Τι κάνει, πώς είναι φτιαγμένο, και τι πρέπει να ξέρει ο επόμενος προγραμματιστής πριν το ακουμπήσει.'
        }
      ],

      timelineTitle: 'Πώς μοιάζουν οι δύο εβδομάδες',
      timeline: [
        {
          when: 'Ημέρα 0',
          body: 'Η εναρκτήρια συνάντηση. Δύο ώρες. Γράφουμε μαζί τις προδιαγραφές και συμφωνούμε τι πρέπει να κάνει το πρωτότυπο. Το ρολόι ξεκινά εδώ.'
        },
        {
          when: 'Ημέρες 1 έως 7',
          body: 'Παραγωγή και υλοποίηση. Παίρνεις μια πρώτη εκδοχή που τρέχει και την πατάς πριν τη μέση της διαδρομής.'
        },
        {
          when: 'Ημέρες 8 έως 10',
          body: 'Δοκιμές και βελτιώσεις πάνω στις πραγματικές σου περιπτώσεις, και οι διορθώσεις που προκύπτουν από αυτές.'
        },
        {
          when: 'Ημέρα 10',
          body: 'Η συνάντηση παρουσίασης. Δύο ώρες. Το λογισμικό που δουλεύει, ο πηγαίος κώδικας, η τεκμηρίωση, και μια ευθεία απάντηση για τον χρόνο που θέλει η πλήρης ανάπτυξη.'
        }
      ],
      timelineNote:
        'Δέκα εργάσιμες ημέρες είναι δύο ημερολογιακές εβδομάδες, μετρημένες από τη συνάντηση. Αν το πρωτότυπο χρειάζεται πρόσβαση σε σύστημα που δεν έχουμε ακόμα, το ρολόι σταματά μέχρι να τη λάβουμε, και σου το λέμε τη μέρα που συμβαίνει.',

      guaranteeTitle: 'Η Εγγύηση Έγκαιρης Παράδοσης',
      guaranteePromise:
        'Στην ώρα του, πάνω στις γραπτές προδιαγραφές, με τα σφάλματα διορθωμένα με δικό μας κόστος, και με κόστος κατασκευής τουλάχιστον 75% κάτω από τη βάση συμβατικής ανάπτυξης που συμφωνούμε γραπτά. Αν χάσουμε έναν από αυτούς τους όρους, σου επιστρέφουμε την αμοιβή σου.',
      guaranteePoints: [
        {
          lead: 'Αυτό είναι υπόσχεση, όχι ιστορικό.',
          body: 'Κάθε νούμερο σε αυτή τη σελίδα είναι κάτι που σου χρωστάμε, με επιστροφή χρημάτων από πίσω. Κανένα δεν είναι μέτρηση από παλιότερη δουλειά.'
        },
        {
          lead: 'Η βάση αναφοράς συμφωνείται πριν χτίσουμε, όχι μετά.',
          body: 'Στη συνάντηση γράφουμε τι θα κόστιζε το ίδιο αντικείμενο εργασίας με συμβατική ανάπτυξη, με βάση την προσφορά που ήδη έχεις ή το ημερήσιο κόστος της ομάδας σου. Αυτό το νούμερο μπαίνει στο συμβόλαιο και δεν το μετακινεί μετά καμία πλευρά.'
        },
        {
          lead: 'Στην ώρα του σημαίνει την ημερομηνία του συμβολαίου.',
          body: 'Δύο εβδομάδες από τη συνάντηση, μετρημένες σε εργάσιμες ημέρες, με τον κανόνα παύσης γραμμένο μέσα στον ίδιο όρο.'
        },
        {
          lead: 'Στις προδιαγραφές σημαίνει το κείμενο που γράψαμε μαζί.',
          body: 'Ό,τι δεν κάνει αυτό που λέει η προδιαγραφή είναι σφάλμα. Τα σφάλματα απέναντι σε αυτή την προδιαγραφή τα διορθώνουμε με δικό μας κόστος, για τριάντα ημέρες μετά τη συνάντηση παρουσίασης.'
        },
        {
          lead: 'Πώς κάνεις χρήση της εγγύησης.',
          body: 'Στέλνεις email στο info@fijisolutions.net μέσα σε τριάντα ημέρες από τη συνάντηση παρουσίασης, δείχνοντας τον όρο που χάσαμε. Παίρνεις απάντηση μέσα σε δέκα εργάσιμες ημέρες.'
        }
      ],
      guaranteeClosing:
        'Αυτοί οι όροι μπαίνουν στο συμβόλαιο πριν χτίσουμε, με αυτά ακριβώς τα λόγια. Μπορείς να μας κρατήσεις σε κάθε έναν από αυτούς.',

      fitTitle: 'Για ποιον είναι',
      fitForLabel: 'Είναι για εσένα αν',
      fitFor: [
        'Έχεις ήδη προϋπολογισμό για ανάπτυξη λογισμικού, ή μια προσφορά μπροστά σου.',
        'Αποφασίζεις εσύ, ή η απόφαση κλείνει με μία συζήτηση.',
        'Υπάρχουν άνθρωποι που θα το χρησιμοποιήσουν, και μπορείς να πάρεις δύο ώρες από τον χρόνο τους.',
        'Θέλεις να το δεις να τρέχει πριν δεσμευτεί ολόκληρο το έργο.'
      ],
      fitNotForLabel: 'Δεν είναι για εσένα αν',
      fitNotFor: [
        'Χρειάζεσαι σύστημα σε παραγωγή τη δέκατη μέρα. Το πρωτότυπο φτιάχνεται για να δοκιμαστεί και να δειχτεί, και η θωράκισή του είναι επόμενο έργο.',
        'Οι προδιαγραφές δεν γράφονται ακόμα. Το να βρεθούν είναι χρήσιμη δουλειά και είναι άλλη συνάντηση.',
        'Κανείς εσωτερικά δεν μπορεί να διαθέσει δύο ώρες για τη συνάντηση.',
        'Θέλεις να προσπεράσουμε τη συνάντηση και να χτίσουμε από ένα σύντομο σημείωμα. Η εγγύηση στηρίζεται σε αυτό το κείμενο.'
      ],

      faqTitle: 'Οι ερωτήσεις που μας κάνουν',
      faqs: [
        {
          q: 'Πόσο κοστίζει;',
          a: 'Σου δίνουμε προσφορά μετά την πρώτη κλήση, γραπτά, με βάση αυτό που χρειάζεται πραγματικά το πρωτότυπό σου. Δεν υπάρχει τιμοκατάλογος. Η αμοιβή κλειδώνει πριν χτιστεί οτιδήποτε και δεν μετακινείται μετά.'
        },
        {
          q: 'Το πρωτότυπο είναι το ίδιο με λογισμικό σε παραγωγή;',
          a: 'Όχι. Τρέχει, έχει πραγματική λογική, και ο κόσμος το δουλεύει από άκρη σε άκρη. Το να αντέξει φόρτο, πραγματικούς χρήστες και ίχνος ελέγχου είναι το επόμενο έργο, και σου λέμε στην παρουσίαση τι χρειάζεται.'
        },
        {
          q: 'Ποιος έχει τον κώδικα;',
          a: 'Εσύ, από το πρώτο commit. Κάθεται στο δικό σου repository με την τεκμηρίωση δίπλα. Αν συνεχίσεις με άλλη ομάδα, τον διαβάζει και προχωράει.'
        },
        {
          q: 'Τον έγραψε AI. Να τον εμπιστευτώ;',
          a: 'Εμπιστεύσου τον έλεγχο περισσότερο από την παραγωγή. Κάθε γραμμή διαβάζεται, δοκιμάζεται πάνω στις προδιαγραφές που γράψαμε μαζί σου, και καλύπτεται από την εγγύηση σφαλμάτων παραπάνω. Η κρίση μένει στους ανθρώπους.'
        },
        {
          q: 'Τι γίνεται μετά τις δύο εβδομάδες;',
          a: 'Τρεις δρόμοι είναι ανοιχτοί: ανάπτυξη MVP, πλήρης ανάπτυξη του έργου, ή συντήρηση όταν βγει σε παραγωγή. Δεν δεσμεύεσαι σε κανέναν, και ο πηγαίος κώδικας φεύγει μαζί σου.'
        }
      ],

      ctaButton: 'Θέλω το πρωτότυπό μου',
      ctaCallout:
        'Δωρεάν κλήση, χωρίς δέσμευση. Φεύγεις ξέροντας τι θα κάλυπτε το πρωτότυπο και πόσο χρόνο θέλει, είτε μας αναθέσεις τη δουλειά είτε όχι.',

      formTitle: 'Πες μας τι να χτίσουμε',
      formSubhead:
        'Περίγραψε το λογισμικό που θέλεις να δεις να τρέχει. Θα σου πούμε τι θα κάλυπτε το πρωτότυπο και τι θα χρειαζόταν.',
      formMessageLabel: 'Τι πρέπει να κάνει το πρωτότυπο; (προαιρετικό)',
      formMessagePlaceholder: 'π.χ. πύλη όπου μπαίνουν οι πελάτες μας, εσωτερικό εργαλείο που αντικαθιστά τρία υπολογιστικά φύλλα…',
      formMicrocopy: 'Δύο λεπτά για να τη συμπληρώσεις. Το μήνυμα είναι προαιρετικό.',
      formSuccess: 'Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου για το πρωτότυπό σου.',
      calendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση απευθείας:',
      calendlyLink: 'Διάλεξε ώρα στο Calendly'
    }
  }
};

export default softwarePrototype;
