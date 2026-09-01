import type {Offer} from '@/components/OfferLanding';

// Offer L from the Proven Offers workbook: "Website + SEO".
//
// Timeline: the workbook says 10-30 days. Published as THREE WEEKS, which is the midpoint of that
// range rounded down to a clean unit, per the rule applied to all eight offers. Fifteen working
// days is three calendar weeks. The anchor is the kickoff workshop and it is stated in the same
// sentence as the number, every time.
//
// Guarantee: the workbook's row 11 for this offer lists "Guaranteed #1 Google ranking" alongside
// "x leads in y days". THE RANKING CLAIM IS NOT MADE, in either locale, in any form. Google does
// not sell positions and nobody can guarantee one, so the page guarantees the lead target the same
// cell already lists: a number and a window, agreed in writing before the build, with a refund of
// the fee behind it. That is a PROMISE WITH A REMEDY, not a measurement of past work, and every
// string here keeps it that way. The FAQ says out loud that we do not sell a ranking, because the
// reader has been promised one by somebody else and that is the objection worth answering.
//
// The on-time limb carries the SAME refund as the lead target, and the same claim route: email
// within thirty days, answered within ten working days. The spec makes "we refund your fee" the
// consequence of every limb of this guarantee, so a limb stated without one was a guarantee the
// reader could not enforce. If you edit one locale's guarantee bullets, edit the other in the same
// commit; the two must promise the identical thing.
//
// Keyword separation: the sibling page /offers/website-google-ads is offer M and sells the same
// rebuild with a paid campaign on top. Both would otherwise chase "website" purchase intent and
// split it. This page owns the ORGANIC intent, the "more leads from search without paying for
// ads" phrasing, and offer M owns the paid one. The /services/* pages keep "custom software
// development Greece"; nothing here goes near it. Two pages chasing one keyword is how the sister
// repo ended up issuing a 301.

const websiteSeo: Offer = {
  slug: 'offers/website-seo',
  questionMarker: 'offer-website-seo',
  serviceType: 'Search Engine Optimization',
  copy: {
    en: {
      metaTitle: 'Website and SEO, 3 Weeks From Kickoff | Fiji Solutions',
      metaDescription:
        'We rebuild or optimise your website and do the SEO, three weeks from the kickoff workshop. We agree a lead target in writing, or we refund your fee.',
      metaKeywords:
        'website and SEO, more leads from Google without ads, website redesign Greece, SEO for small business, Google Business Profile optimisation',
      ogAlt: 'Fiji Solutions - website and SEO delivered three weeks from the kickoff workshop',

      eyebrow: 'Website and SEO for more leads',
      title: 'A website that brings you customers from search. Live three weeks from the kickoff workshop.',
      subhead:
        'We rebuild or optimise the site, do the SEO, and sort out your Google Business Profile. The lead target is agreed in writing first, and if the site misses it, we refund your fee.',
      bullets: [
        {
          lead: 'One site, one target, agreed in writing.',
          body: 'Before we build, we count what search brings you today and write down the number we are aiming at.'
        },
        {
          lead: 'Three weeks from the kickoff workshop.',
          body: 'The clock starts the day we sit down and agree what the site has to do. Everything before that day is scoping.'
        },
        {
          lead: 'The Agreed-Target Guarantee.',
          body: 'If the site misses the target we agreed, you get your fee back. The number and the date sit in the contract before we build.'
        }
      ],

      problemTitle: 'The site that looks fine and sells nothing',
      problemParagraphs: [
        'Your website was built once, by somebody who has moved on. It looks respectable. It opens slowly on a phone, and the last time anyone touched it was two years ago.',
        'So people find you the way they always did. Word of mouth, the occasional referral, and whatever you pay for. Meanwhile somebody in your market types what you sell into Google, and what comes back is three competitors and a directory.',
        'You already know the answer is SEO. You also know the agencies that call saying exactly that, want a twelve-month retainer, and cannot tell you what you get for it.'
      ],

      mechanismTitle: 'Search first, design second',
      mechanismParagraphs: [
        'We start from what people type when they are ready to buy what you sell. That list decides which pages the site needs and what they say.',
        'Then we build. The site runs on a stack that handles structure, speed and technical SEO on its own, so the three weeks are not spent there. AI drafts and checks every page against the brief, and every line passes through us before it ships.',
        'That is why the estimate is three weeks. The slow part of a website is deciding what it says. That happens in the workshop, on day zero, with you at the table.'
      ],

      stackTitle: 'What you get',
      stackIntro: 'One fixed scope, agreed in writing before anything is built.',
      stackItems: [
        {
          lead: 'A requirements workshop, four to six hours.',
          body: 'What the site must do, who it must reach, and which searches are worth winning. We leave with the target and the baseline written down.'
        },
        {
          lead: 'The build.',
          body: 'The site rebuilt or optimised, page by page, against the brief from the workshop. Written for the person searching, structured for the machine reading.'
        },
        {
          lead: 'Your website, hosted and live.',
          body: 'The code and the content are yours, and you can take both elsewhere whenever you want.'
        },
        {
          lead: 'Google Business Profile, sorted out.',
          body: 'Categories, services, hours, photos, description and review prompt. Free local visibility, usually left half finished.'
        },
        {
          lead: 'SEO articles, written and published.',
          body: 'They answer what your buyers type before they buy. Each one aims at a search we picked together.'
        },
        {
          lead: 'A starting set of links.',
          body: 'Listings, profiles and partner pages that are real and relevant. We do not buy links from networks. Google works that out, and you carry the penalty.'
        },
        {
          lead: 'Presentation and handover, two to four hours.',
          body: 'We walk the site with you, show what you can change yourself, and hand over the documentation.'
        },
        {
          lead: 'Go-live, two to four hours.',
          body: 'Redirects from the old URLs, analytics and Search Console connected, and the first measurement taken.'
        }
      ],

      timelineTitle: 'What the three weeks look like',
      timeline: [
        {
          when: 'Day 0',
          body: 'The kickoff workshop. Four to six hours. We agree what the site must do, pick the searches, and measure what search brings you today. The clock starts here.'
        },
        {
          when: 'Days 1 to 10',
          body: 'The build. Structure, pages, copy and the technical work. You see it on a staging link partway through.'
        },
        {
          when: 'Days 11 to 13',
          body: 'Google Business Profile, the first articles and the first links. A review round with you.'
        },
        {
          when: 'Day 14',
          body: 'The presentation. What was built, what it targets, and what comes next.'
        },
        {
          when: 'Day 15',
          body: 'Go-live. Redirects, analytics, Search Console, and the first measurement.'
        }
      ],
      timelineNote:
        'Fifteen working days is three calendar weeks, counted from the workshop. Search answers on its own schedule, so the lead target carries its own window, agreed in the same document. If we are waiting on your content or your domain access, the clock pauses and we tell you the day it happens.',

      guaranteeTitle: 'The Agreed-Target Guarantee',
      guaranteePromise:
        'We agree a lead target and the window it is measured over, in writing, before we build. If the site misses it, we refund your fee.',
      guaranteePoints: [
        {
          lead: 'The baseline is measured in the workshop, before we build.',
          body: 'In the workshop we count the enquiries search brings you today, from your analytics and your inbox. That number goes into the contract and neither side can move it later.'
        },
        {
          lead: 'The target is a number and a date.',
          body: 'How many enquiries from search, over how long from go-live. Both are agreed with you and written down before anything is built.'
        },
        {
          lead: 'On time, and matching what we agreed.',
          body: 'The site goes live on the agreed day and does what the written requirements say. Any defect against them we fix at no cost. If we miss the agreed go-live day, the same refund applies. You claim it the same way, within thirty days of that day.'
        },
        {
          lead: 'We do not promise a ranking.',
          body: 'Nobody can. Google does not sell positions. We put the lead number in the contract instead, because that is the thing you actually wanted.'
        },
        {
          lead: 'What we need from you.',
          body: 'Keep the site live, answer questions within a few days, and let us see the analytics. That is the whole list.'
        },
        {
          lead: 'How you claim.',
          body: 'Email info@fijisolutions.net within thirty days of the measurement date, with the numbers we agreed. You get an answer within ten working days.'
        }
      ],
      guaranteeClosing:
        'These terms go into the contract before we build, in these words. It is a promise with a refund behind it, and you can hold us to every line.',

      fitTitle: 'Who this is for',
      fitForLabel: 'This is for you if',
      fitFor: [
        'You own the business, or you can decide without taking it upstairs.',
        'People already search for what you sell. You are just not the one they find.',
        'You can spare four to six hours for the workshop and answer questions during the build.',
        'You want the lead number measured, and you will give us the access to measure it.'
      ],
      fitNotForLabel: 'This is not for you if',
      fitNotFor: [
        'You want a ranking guaranteed. We do not sell that, and neither does anyone honest.',
        'Nobody internally can say what the business sells and to whom. The workshop needs an answer.',
        'You want the site live next week. Three weeks from the workshop is the shortest honest answer.',
        'You need paid traffic tomorrow. That is the Website and Google Ads offer, on its own page.'
      ],

      faqTitle: 'The questions we get asked',
      faqs: [
        {
          q: 'What does it cost?',
          a: 'We quote it after the first call, in writing, against what your site actually needs. There is no list price and no rate card, because scoping a website without seeing it is guessing. The fee is fixed before anything is built, and it does not move afterwards.'
        },
        {
          q: 'Can you guarantee we rank first on Google?',
          a: 'No. Nobody sells a Google position, us included. What goes in your contract is the number of enquiries from search, the date they are counted on, and the refund if the site misses.'
        },
        {
          q: 'How long until the SEO actually works?',
          a: 'The site goes live fifteen working days from the workshop. Search takes longer to respond, which is why the lead target carries a window agreed with you before we start. Anyone promising results in week one is selling ads and calling it SEO.'
        },
        {
          q: 'Will we be found in ChatGPT and other AI answers?',
          a: 'The same work helps: clear pages, real answers to real questions, a profile that matches, and a site a machine can read. We build for that deliberately. We do not guarantee it, because nobody controls what a model says.'
        },
        {
          q: 'Do we have to stay on your hosting?',
          a: 'No. The code and the content are yours. Hosting with us keeps the speed and the updates in one place. If you want to move, we hand over everything and help you do it.'
        }
      ],

      ctaButton: 'Book my website and SEO call',
      ctaCallout:
        'Free call, no obligation. You leave it knowing which searches your buyers actually use and what your site would need to win them, whether or not you hire us.',

      formTitle: 'Tell us about your website',
      formSubhead:
        'Send us the address and what you want it to bring in. We will come back with what it would take and the target we would put in writing.',
      formMessageLabel: 'Your website address, and what you want it to bring in (optional)',
      formMessagePlaceholder: 'e.g. yourcompany.gr, we want enquiries from search…',
      formMicrocopy: 'Free, no obligation, no sales pitch.',
      formSuccess: 'Thank you. We will come back to you about your website.',
      calendlyLead: 'Prefer to skip the form? Book the call directly:',
      calendlyLink: 'Pick a time on Calendly'
    },

    el: {
      // Aimed at measured demand, not at a translation of the English title. «κατασκευή ιστοσελίδων»
      // 2,900/mo and «κατασκευή ιστοσελίδων Θεσσαλονίκη» 480/mo (+~640 in spelling variants) are both
      // exact substrings of this one title, and it is also the Service schema name.
      metaTitle: 'Κατασκευή ιστοσελίδων Θεσσαλονίκη | Fiji Solutions',
      metaDescription:
        'Κατασκευή και προώθηση ιστοσελίδων στη Θεσσαλονίκη. Στον αέρα τρεις εβδομάδες από την εναρκτήρια συνάντηση. Γραπτός στόχος σε νέα αιτήματα ή πίσω η αμοιβή.',
      metaKeywords:
        'κατασκευή ιστοσελίδων, κατασκευή ιστοσελίδων Θεσσαλονίκη, προώθηση ιστοσελίδων, κατασκευή ιστοσελίδας Θεσσαλονίκη, SEO Θεσσαλονίκη, Google Business Profile',
      ogAlt: 'Fiji Solutions - κατασκευή και προώθηση ιστοσελίδων στη Θεσσαλονίκη, στον αέρα τρεις εβδομάδες από την εναρκτήρια συνάντηση',

      eyebrow: 'Κατασκευή ιστοσελίδων στη Θεσσαλονίκη',
      title: 'Φτιάχνουμε ιστοσελίδες στη Θεσσαλονίκη που σου φέρνουν πελάτες από την αναζήτηση. Στον αέρα τρεις εβδομάδες από την εναρκτήρια συνάντηση.',
      subhead:
        'Ξαναχτίζουμε ή βελτιστοποιούμε την ιστοσελίδα σου, αναλαμβάνουμε την προώθησή της στην αναζήτηση και τακτοποιούμε το Google Business Profile. Τον στόχο για νέα αιτήματα τον συμφωνούμε γραπτά πριν ξεκινήσουμε, και αν η ιστοσελίδα τον χάσει, σου επιστρέφουμε την αμοιβή.',
      bullets: [
        {
          lead: 'Μία ιστοσελίδα, ένας στόχος, συμφωνημένος γραπτά.',
          body: 'Πριν χτίσουμε, μετράμε τι σου φέρνει σήμερα η αναζήτηση και γράφουμε τον αριθμό που στοχεύουμε.'
        },
        {
          lead: 'Τρεις εβδομάδες από την εναρκτήρια συνάντηση.',
          body: 'Το ρολόι ξεκινά τη μέρα που καθόμαστε μαζί και συμφωνούμε τι πρέπει να κάνει η ιστοσελίδα. Ό,τι γίνεται πριν από εκείνη τη μέρα είναι προετοιμασία.'
        },
        {
          lead: 'Η Εγγύηση Συμφωνημένου Στόχου.',
          body: 'Αν η ιστοσελίδα χάσει τον στόχο που συμφωνήσαμε, παίρνεις πίσω την αμοιβή σου. Ο αριθμός και η ημερομηνία μπαίνουν στο συμβόλαιο πριν χτίσουμε.'
        }
      ],

      problemTitle: 'Η ιστοσελίδα που δείχνει μια χαρά και δεν πουλάει τίποτα',
      problemParagraphs: [
        'Η ιστοσελίδα σου φτιάχτηκε μία φορά, από κάποιον που έχει προχωρήσει αλλού. Δείχνει αξιοπρεπής. Στο κινητό ανοίγει αργά, και την τελευταία φορά που την άγγιξε κάποιος ήταν πριν από δύο χρόνια.',
        'Έτσι σε βρίσκουν όπως πάντα. Από στόμα σε στόμα, με καμιά σύσταση, και με ό,τι πληρώνεις. Στο μεταξύ κάποιος στην αγορά σου γράφει στη Google αυτό ακριβώς που πουλάς, και του βγαίνουν τρεις ανταγωνιστές και ένας κατάλογος.',
        'Ξέρεις ήδη ότι η απάντηση λέγεται SEO. Ξέρεις όμως και τα γραφεία που τηλεφωνούν λέγοντας ακριβώς το ίδιο, ζητούν δωδεκάμηνο συμβόλαιο, και δεν μπορούν να σου πουν τι παίρνεις για αυτά.'
      ],

      mechanismTitle: 'Πρώτα η αναζήτηση, μετά ο σχεδιασμός',
      mechanismParagraphs: [
        'Ξεκινάμε από αυτά που γράφουν οι άνθρωποι όταν είναι έτοιμοι να αγοράσουν αυτό που πουλάς. Αυτή η λίστα αποφασίζει ποιες σελίδες χρειάζεται η ιστοσελίδα και τι λένε.',
        'Μετά χτίζουμε. Η ιστοσελίδα τρέχει πάνω σε βάση που αναλαμβάνει μόνη της τη δομή, την ταχύτητα και το τεχνικό SEO, οπότε εκεί δεν ξοδεύονται οι τρεις εβδομάδες. Το AI γράφει τα προσχέδια και ελέγχει κάθε σελίδα απέναντι στις γραπτές απαιτήσεις. Κάθε γραμμή περνά από εμάς πριν βγει.',
        'Γι’ αυτό η εκτίμηση είναι τρεις εβδομάδες. Το αργό κομμάτι μιας ιστοσελίδας είναι να αποφασιστεί τι λέει. Αυτό γίνεται στην εναρκτήρια συνάντηση, την ημέρα μηδέν, με εσένα στο τραπέζι.'
      ],

      stackTitle: 'Τι παίρνεις',
      stackIntro: 'Ένα σταθερό αντικείμενο εργασίας, συμφωνημένο γραπτά πριν χτιστεί οτιδήποτε.',
      stackItems: [
        {
          lead: 'Εναρκτήρια συνάντηση, τέσσερις με έξι ώρες.',
          body: 'Τι πρέπει να κάνει η ιστοσελίδα, σε ποιον απευθύνεται, ποιες αναζητήσεις αξίζει να κερδίσεις. Φεύγουμε με τον στόχο και τη βάση αναφοράς γραμμένα.'
        },
        {
          lead: 'Η υλοποίηση.',
          body: 'Η ιστοσελίδα ξαναχτισμένη ή βελτιστοποιημένη, σελίδα σελίδα, πάνω στις γραπτές απαιτήσεις της συνάντησης. Γραμμένο για τον άνθρωπο που ψάχνει, δομημένο για τη μηχανή που διαβάζει.'
        },
        {
          lead: 'Η ιστοσελίδα σου, φιλοξενημένη και στον αέρα.',
          body: 'Ο κώδικας και το περιεχόμενο είναι δικά σου, και μπορείς να τα πάρεις αλλού όποτε θες.'
        },
        {
          lead: 'Το Google Business Profile, τακτοποιημένο.',
          body: 'Κατηγορίες, υπηρεσίες, ώρες, φωτογραφίες, περιγραφή και αίτημα για κριτικές. Δωρεάν τοπική ορατότητα, συνήθως μισοτελειωμένη.'
        },
        {
          lead: 'Άρθρα με SEO, γραμμένα και δημοσιευμένα.',
          body: 'Απαντούν σε αυτά που γράφουν οι πελάτες σου πριν αγοράσουν. Κάθε άρθρο στοχεύει σε μια αναζήτηση που διαλέξαμε μαζί.'
        },
        {
          lead: 'Ένα πρώτο σύνολο συνδέσμων.',
          body: 'Καταχωρίσεις, προφίλ και σελίδες συνεργατών, αληθινά και σχετικά με τη δουλειά σου. Δεν αγοράζουμε συνδέσμους από δίκτυα. Η Google το καταλαβαίνει και την ποινή τη σηκώνεις εσύ.'
        },
        {
          lead: 'Παρουσίαση και παράδοση, δύο με τέσσερις ώρες.',
          body: 'Περνάμε την ιστοσελίδα μαζί, σου δείχνουμε τι αλλάζεις μόνος σου, και παραδίδουμε τη γραπτή τεκμηρίωση.'
        },
        {
          lead: 'Βγαίνει στον αέρα, δύο με τέσσερις ώρες.',
          body: 'Ανακατευθύνσεις από τα παλιά URL, σύνδεση με analytics και Search Console, και η πρώτη μέτρηση.'
        }
      ],

      timelineTitle: 'Πώς μοιάζουν οι τρεις εβδομάδες',
      timeline: [
        {
          when: 'Ημέρα 0',
          body: 'Η εναρκτήρια συνάντηση. Τέσσερις με έξι ώρες. Συμφωνούμε τι πρέπει να κάνει η ιστοσελίδα, διαλέγουμε τις αναζητήσεις, και μετράμε τι σου φέρνει σήμερα η αναζήτηση. Το ρολόι ξεκινά εδώ.'
        },
        {
          when: 'Ημέρες 1 έως 10',
          body: 'Η υλοποίηση. Δομή, σελίδες, κείμενα και τεχνική δουλειά. Το βλέπεις σε δοκιμαστικό σύνδεσμο στη μέση της διαδρομής.'
        },
        {
          when: 'Ημέρες 11 έως 13',
          body: 'Google Business Profile, τα πρώτα άρθρα και οι πρώτοι σύνδεσμοι. Ένας γύρος διορθώσεων μαζί σου.'
        },
        {
          when: 'Ημέρα 14',
          body: 'Η παρουσίαση. Τι χτίστηκε, τι στοχεύει, και τι έρχεται μετά.'
        },
        {
          when: 'Ημέρα 15',
          body: 'Βγαίνει στον αέρα. Ανακατευθύνσεις, analytics, Search Console, και η πρώτη μέτρηση.'
        }
      ],
      timelineNote:
        'Δεκαπέντε εργάσιμες ημέρες είναι τρεις ημερολογιακές εβδομάδες, μετρημένες από την εναρκτήρια συνάντηση. Η αναζήτηση απαντά με τον δικό της ρυθμό, οπότε ο στόχος για τα αιτήματα έχει δικό του παράθυρο, συμφωνημένο στο ίδιο κείμενο. Αν περιμένουμε περιεχόμενο ή πρόσβαση στο domain, το ρολόι σταματά και σου το λέμε τη μέρα που συμβαίνει.',

      guaranteeTitle: 'Η Εγγύηση Συμφωνημένου Στόχου',
      guaranteePromise:
        'Συμφωνούμε γραπτά, πριν χτίσουμε, στόχο για νέα αιτήματα και το διάστημα στο οποίο μετριέται. Αν η ιστοσελίδα τον χάσει, σου επιστρέφουμε την αμοιβή σου.',
      guaranteePoints: [
        {
          lead: 'Η βάση αναφοράς μετριέται στην εναρκτήρια συνάντηση, πριν χτίσουμε.',
          body: 'Στη συνάντηση μετράμε πόσα αιτήματα σου φέρνει σήμερα η αναζήτηση, από τα analytics σου και από το inbox σου. Το νούμερο μπαίνει στο συμβόλαιο και δεν το μετακινεί μετά καμιά πλευρά.'
        },
        {
          lead: 'Ο στόχος είναι ένα νούμερο και μια ημερομηνία.',
          body: 'Πόσα αιτήματα από την αναζήτηση, σε πόσο διάστημα από τη μέρα που βγήκε στον αέρα. Και τα δύο συμφωνούνται μαζί σου και γράφονται πριν χτιστεί οτιδήποτε.'
        },
        {
          lead: 'Στην ώρα του, και σύμφωνο με ό,τι συμφωνήσαμε.',
          body: 'Η ιστοσελίδα βγαίνει στον αέρα τη συμφωνημένη μέρα και κάνει αυτά που λένε οι γραπτές απαιτήσεις. Κάθε σφάλμα απέναντί τους το διορθώνουμε χωρίς χρέωση. Αν χάσουμε τη συμφωνημένη μέρα, ισχύει η ίδια επιστροφή χρημάτων. Τη ζητάς με τον ίδιο τρόπο, μέσα σε τριάντα ημέρες από εκείνη τη μέρα.'
        },
        {
          lead: 'Δεν υποσχόμαστε θέση στα αποτελέσματα.',
          body: 'Κανείς δεν μπορεί. Η Google δεν πουλάει θέσεις. Στο συμβόλαιο μπαίνει ο αριθμός των αιτημάτων, γιατί αυτό είναι που ήθελες στην πραγματικότητα.'
        },
        {
          lead: 'Τι ζητάμε από εσένα.',
          body: 'Να μένει η ιστοσελίδα στον αέρα, να απαντάς σε ερωτήσεις μέσα σε λίγες μέρες, και να μας αφήνεις να βλέπουμε τα analytics. Αυτή είναι όλη η λίστα.'
        },
        {
          lead: 'Πώς κάνεις χρήση της εγγύησης.',
          body: 'Στέλνεις email στο info@fijisolutions.net μέσα σε τριάντα ημέρες από την ημερομηνία μέτρησης, με τα νούμερα που συμφωνήσαμε. Παίρνεις απάντηση μέσα σε δέκα εργάσιμες ημέρες.'
        }
      ],
      guaranteeClosing:
        'Αυτοί οι όροι μπαίνουν στο συμβόλαιο πριν χτίσουμε, με αυτά ακριβώς τα λόγια. Είναι υπόσχεση με επιστροφή χρημάτων από πίσω, και μπορείς να μας κρατήσεις σε κάθε γραμμή της.',

      fitTitle: 'Για ποιον είναι',
      fitForLabel: 'Είναι για εσένα αν',
      fitFor: [
        'Έχεις την επιχείρηση, ή μπορείς να αποφασίσεις χωρίς να το πας παραπάνω.',
        'Ο κόσμος ψάχνει ήδη αυτό που πουλάς. Απλώς δεν βρίσκει εσένα.',
        'Μπορείς να διαθέσεις τέσσερις με έξι ώρες για την εναρκτήρια συνάντηση και να απαντάς σε ερωτήσεις όσο χτίζουμε.',
        'Θέλεις να μετρηθεί ο αριθμός των αιτημάτων, και θα μας δώσεις την πρόσβαση για να μετρηθεί.'
      ],
      fitNotForLabel: 'Δεν είναι για εσένα αν',
      fitNotFor: [
        'Θέλεις εγγυημένη θέση στα αποτελέσματα. Δεν την πουλάμε, ούτε την πουλάει κανείς σοβαρός.',
        'Κανείς εσωτερικά δεν μπορεί να πει τι πουλάει η επιχείρηση και σε ποιον. Η συνάντηση χρειάζεται απάντηση.',
        'Θέλεις την ιστοσελίδα στον αέρα την άλλη εβδομάδα. Τρεις εβδομάδες από την εναρκτήρια συνάντηση είναι η πιο σύντομη ειλικρινής απάντηση.',
        'Χρειάζεσαι πληρωμένη επισκεψιμότητα από αύριο. Αυτό είναι η προσφορά Ιστοσελίδα και Google Ads, σε δική της σελίδα.'
      ],

      localTitle: 'Πού θα μας βρεις',
      localParagraphs: [
        'Η έδρα της Fiji Solutions είναι στη Θεσσαλονίκη, στο Porto Center. Η διεύθυνση και το τηλέφωνο είναι εδώ από κάτω, και η κουβέντα γίνεται στα ελληνικά.',
        'Η δουλειά δεν σταματά στα όρια του νομού: αναλαμβάνουμε ιστοσελίδες σε όλη την Ελλάδα, με τον ίδιο γραπτό στόχο και την ίδια εγγύηση.'
      ],
      localAddress: 'Fiji Solutions ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ, Νικηφόρου Ουρανού 15 και Μινώταυρου, Κτίριο Γ1, Porto Center, 3ος όροφος, Θεσσαλονίκη 54627. ΓΕΜΗ 185101306000.',
      localPhone: '+30 231 107 0108',
      localPhoneHref: 'tel:+302311070108',

      faqTitle: 'Οι ερωτήσεις που μας κάνουν',
      faqs: [
        {
          q: 'Πόσο κοστίζει;',
          a: 'Δεν υπάρχει τιμοκατάλογος, γιατί δύο ιστοσελίδες ίδιου μεγέθους μπορεί να θέλουν τελείως διαφορετική δουλειά. Την αμοιβή την καθορίζουν τέσσερα πράγματα, και τα βλέπεις κι εσύ: πόσες σελίδες χρειάζεται η ιστοσελίδα, αν ξαναχτίζουμε από την αρχή ή δουλεύουμε πάνω σε αυτό που ήδη έχεις, πόσα άρθρα γράφουμε, και αν υπάρχει παλιά ιστοσελίδα με URL που πρέπει να μεταφερθούν. Τα περνάμε ένα ένα στην πρώτη κλήση και μετά παίρνεις γραπτή προσφορά. Η αμοιβή κλειδώνει πριν χτιστεί οτιδήποτε και δεν μετακινείται μετά.'
        },
        {
          // Aimed at «κατασκευή ιστοσελίδων θεσσαλονίκη τιμες», 90/mo. It answers what the searcher
          // is actually asking — what drives the number, and when they get one — and carries no
          // figure, no range and no 'from', because rule 7 has no keyword exception. It is on-page
          // copy for a real query, not a rich-result play. Lifting rule 7 is Charis's call only.
          q: 'Γιατί δεν γράφετε τιμές στη σελίδα;',
          a: 'Γιατί όποιο νούμερο βάζαμε εδώ θα ήταν λάθος για τους μισούς που το διαβάζουν, και το ξέρουμε. Δεν δουλεύουμε με πακέτα. Κοστολογούμε αυτό που χρειάζεται η δική σου ιστοσελίδα, το γράφουμε, και το συμφωνούμε μαζί σου πριν χτιστεί οτιδήποτε. Η πρώτη κλήση είναι δωρεάν και τελειώνει με γραπτή προσφορά, όχι με μια εκτίμηση στο περίπου. Αν αυτό που ψάχνεις είναι το φθηνότερο πακέτο της αγοράς, θα το βρεις αλλού και θα το βρεις γρήγορα.'
        },
        {
          q: 'Μας εγγυάστε πρώτη θέση στη Google;',
          a: 'Όχι. Θέση στη Google δεν πουλάει κανείς, ούτε εμείς. Στο συμβόλαιό σου μπαίνει ο αριθμός των αιτημάτων από την αναζήτηση, η ημερομηνία που μετριούνται, και η επιστροφή χρημάτων αν η ιστοσελίδα τα χάσει.'
        },
        {
          q: 'Πόσο θέλει το SEO για να πιάσει;',
          a: 'Η ιστοσελίδα βγαίνει στον αέρα δεκαπέντε εργάσιμες ημέρες από την εναρκτήρια συνάντηση. Η αναζήτηση θέλει περισσότερο για να απαντήσει. Γι’ αυτό ο στόχος έχει δίπλα του γραπτό διάστημα, συμφωνημένο μαζί σου πριν ξεκινήσουμε. Όποιος σου υπόσχεται αποτελέσματα την πρώτη εβδομάδα πουλάει διαφήμιση και τη λέει SEO.'
        },
        {
          q: 'Θα μας βρίσκει το ChatGPT και οι άλλες AI απαντήσεις;',
          a: 'Βοηθά η ίδια δουλειά: καθαρές σελίδες, πραγματικές απαντήσεις στις ερωτήσεις που κάνει ο κόσμος, προφίλ επιχείρησης που ταιριάζει, και ιστοσελίδα που διαβάζεται από μηχανή. Το χτίζουμε συνειδητά για αυτό. Δεν το εγγυόμαστε, γιατί κανείς δεν ελέγχει τι θα πει ένα μοντέλο.'
        },
        {
          q: 'Πρέπει να μείνουμε στη δική σας φιλοξενία;',
          a: 'Όχι. Ο κώδικας και το περιεχόμενο είναι δικά σου. Η φιλοξενία σε εμάς κρατά την ταχύτητα και τις ενημερώσεις σε ένα σημείο. Αν θέλεις να φύγεις, παραδίδουμε τα πάντα και σε βοηθάμε να το κάνεις.'
        }
      ],

      ctaButton: 'Κλείσε την κλήση για την ιστοσελίδα και το SEO',
      ctaCallout:
        'Δωρεάν κλήση, χωρίς δέσμευση. Φεύγεις ξέροντας ποιες αναζητήσεις χρησιμοποιούν στ’ αλήθεια οι πελάτες σου και τι θα χρειαζόταν η ιστοσελίδα σου για να τις κερδίσει, είτε μας αναθέσεις τη δουλειά είτε όχι.',

      formTitle: 'Πες μας για την ιστοσελίδα σου',
      formSubhead:
        'Στείλε μας τη διεύθυνση και τι θέλεις να σου φέρνει. Θα σου πούμε τι θα χρειαζόταν και ποιον στόχο θα βάζαμε γραπτά.',
      formMessageLabel: 'Η διεύθυνση της ιστοσελίδας σου, και τι θέλεις να σου φέρνει (προαιρετικό)',
      formMessagePlaceholder: 'π.χ. etaireiamou.gr, θέλουμε αιτήματα από την αναζήτηση…',
      formMicrocopy: 'Δωρεάν, χωρίς δεσμεύσεις, χωρίς πιέσεις.',
      formSuccess: 'Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου για την ιστοσελίδα σου.',
      calendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση απευθείας:',
      calendlyLink: 'Διάλεξε ώρα στο Calendly'
    }
  }
};

export default websiteSeo;
