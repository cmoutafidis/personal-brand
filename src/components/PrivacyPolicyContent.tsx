'use client';

import React from 'react';
import {Language} from '@/types/language';
import {CONSENT_KEY, CONSENT_EVENT, useConsent} from '@/lib/useConsent';

// The website privacy policy.
//
// Until 2026-08-15 both locales shipped a MOBILE APP policy — "Our Apps do not collect, store, or
// process any personal data from users" — while the site loaded a visitor-identification tag and
// an advertising tag for every visitor and POSTed form contents to a third-party endpoint in the
// United States. This file describes what the site actually does.
//
// One component, both locales, because two files drift. Every section exists in both languages or
// in neither.

type Block = { h: string; p: string[] };

const CONTENT: Record<Language, {
  title: string;
  updated: string;
  intro: string;
  blocks: Block[];
  consentH: string;
  consentP: string;
  consentBtn: string;
  consentState: (s: string) => string;
  granted: string;
  denied: string;
  unknown: string;
}> = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: 15 August 2026',
    intro:
      'This policy covers www.fijisolutions.net. It describes what the website collects, why, who it is shared with, and what you can require us to do about it.',
    blocks: [
      {
        h: 'Who is responsible',
        p: [
          'Fiji Solutions Single Member Private Company (IKE), GEMI 185101306000, Nikiforou Ouranou & Minotavrou 15, Building G1, Porto Center, 3rd Floor, Thessaloniki 54627, Greece.',
          'For anything in this policy, write to info@fijisolutions.net. A person reads that address.',
        ],
      },
      {
        h: 'What we collect when you contact us',
        p: [
          'The forms on this site ask for your name, your email address, your company, the question or process you want to discuss, your message, and how you heard about us. Everything you type is what we get; we do not enrich it from anywhere else.',
          'We use it to answer you and, if it goes that way, to run a process audit and quote work. The legal basis is Article 6(1)(b) GDPR: steps taken at your request before entering a contract.',
        ],
      },
      {
        h: 'What happens if you use the voice or chat assistant',
        p: [
          'The "Let\'s talk now" button and the chat bubble are operated by Vapi. If you start a call, your speech is sent to Vapi and its model providers to be transcribed and answered. If you type, the same applies to your messages.',
          'Do not put confidential information into either. Use the contact form or email instead.',
        ],
      },
      {
        h: 'Cookies and tracking',
        p: [
          'No analytics or advertising cookie loads until you accept it. Before you choose, this site sets none and makes no request to Google or to Leadsy. The chat and voice assistant described above is a separate, visible feature and loads regardless. It is not analytics and it sets no advertising cookie.',
          'If you accept, two things load. Google Ads tracks which advertisement led to an enquiry. Leadsy attempts to identify the company an anonymous visitor is browsing from, using your IP address. Both are used to work out which pages produce enquiries.',
          'If you decline, they never load and the site works exactly the same. You can change your answer at the bottom of this page at any time.',
          'The legal basis for both is your consent, Article 6(1)(a) GDPR.',
        ],
      },
      {
        h: 'Who else sees your data',
        p: [
          'Form submissions are transmitted to and stored by Amazon Web Services on infrastructure located in the United States (region us-east-1). This is a transfer outside the European Economic Area, made under the European Commission\'s Standard Contractual Clauses.',
          'If you book a call, Calendly receives the name and email you give it. If you accept cookies, Google and Leadsy receive the data described above.',
          'We do not sell your data, and we do not share it with anyone who is not listed here.',
        ],
      },
      {
        h: 'How long we keep it',
        p: [
          'Enquiries are kept for 24 months after our last contact with you, so we can pick up a conversation where it stopped. If you become a client, the record is kept for as long as Greek accounting and tax law requires.',
          'Ask us to delete it sooner and we will, unless we are legally required to keep it.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'You can ask us for a copy of what we hold about you, ask us to correct it, ask us to delete it, ask us to restrict what we do with it, ask for it in a portable format, and object to us processing it. Where we rely on your consent, you can withdraw it at any time. Withdrawing is as easy as giving it, and the button is below.',
          'Write to info@fijisolutions.net. We answer within one month.',
          'If you think we have handled your data badly, you can complain to the Hellenic Data Protection Authority (Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα), Kifisias 1-3, 115 23 Athens, www.dpa.gr.',
        ],
      },
      {
        h: 'Children',
        p: [
          'This site is for businesses. It is not directed at children and we do not knowingly collect data from them.',
        ],
      },
      {
        h: 'Changes',
        p: [
          'If this policy changes, the date at the top changes with it. Material changes will be visible on this page before they take effect.',
        ],
      },
    ],
    consentH: 'Your cookie choice',
    consentP: 'This is the choice currently stored in your browser. Clearing it will ask you again on your next page view.',
    consentBtn: 'Clear my choice',
    consentState: (s) => `Current setting: ${s}`,
    granted: 'accepted',
    denied: 'declined',
    unknown: 'not yet chosen',
  },
  el: {
    title: 'Πολιτική Απορρήτου',
    updated: 'Τελευταία ενημέρωση: 15 Αυγούστου 2026',
    intro:
      'Η πολιτική αυτή αφορά το www.fijisolutions.net. Περιγράφει τι συλλέγει ο ιστότοπος, γιατί, με ποιους μοιράζεται και τι μπορείς να μας ζητήσεις να κάνουμε.',
    blocks: [
      {
        h: 'Ποιος είναι υπεύθυνος',
        p: [
          'Fiji Solutions Μονοπρόσωπη ΙΚΕ, ΓΕΜΗ 185101306000, Νικηφόρου Ουρανού 15 και Μινώταυρου, Κτίριο Γ1, Porto Center, 3ος όροφος, Θεσσαλονίκη 54627.',
          'Για οτιδήποτε αφορά αυτή την πολιτική, γράψε στο info@fijisolutions.net. Το διαβάζει άνθρωπος.',
        ],
      },
      {
        h: 'Τι συλλέγουμε όταν επικοινωνείς',
        p: [
          'Οι φόρμες του ιστότοπου ζητούν το όνομά σου, το email σου, την εταιρεία σου, την ερώτηση ή τη διαδικασία που θέλεις να συζητήσουμε, το μήνυμά σου και το πώς μας έμαθες. Παίρνουμε ακριβώς ό,τι γράφεις. Δεν το εμπλουτίζουμε από αλλού.',
          'Τα χρησιμοποιούμε για να σου απαντήσουμε και, αν πάει έτσι, για να κάνουμε έλεγχο διαδικασιών και να δώσουμε προσφορά. Νομική βάση: άρθρο 6 παρ. 1 στοιχ. β΄ ΓΚΠΔ. Πρόκειται για ενέργειες κατόπιν αιτήματός σου πριν από τη σύναψη σύμβασης.',
        ],
      },
      {
        h: 'Τι γίνεται αν χρησιμοποιήσεις τον φωνητικό βοηθό ή το chat',
        p: [
          'Το κουμπί «Ας μιλήσουμε τώρα» και η φυσαλίδα συνομιλίας λειτουργούν μέσω της Vapi. Αν ξεκινήσεις κλήση, η φωνή σου στέλνεται στη Vapi και στους παρόχους μοντέλων της για απομαγνητοφώνηση και απάντηση. Το ίδιο ισχύει για τα γραπτά μηνύματα.',
          'Μη βάζεις εμπιστευτικές πληροφορίες σε κανένα από τα δύο. Χρησιμοποίησε τη φόρμα ή το email.',
        ],
      },
      {
        h: 'Cookies και παρακολούθηση',
        p: [
          'Κανένα cookie ανάλυσης ή διαφήμισης δεν φορτώνει πριν το αποδεχτείς. Πριν επιλέξεις, ο ιστότοπος δεν βάζει κανένα και δεν κάνει κανένα αίτημα προς την Google ή τη Leadsy. Ο βοηθός συνομιλίας και φωνής που περιγράφεται παραπάνω είναι ξεχωριστό, ορατό χαρακτηριστικό και φορτώνει ανεξάρτητα. Δεν είναι ανάλυση και δεν βάζει διαφημιστικό cookie.',
          'Αν αποδεχτείς, φορτώνουν δύο πράγματα. Το Google Ads καταγράφει ποια διαφήμιση οδήγησε σε αίτημα. Η Leadsy προσπαθεί να αναγνωρίσει από ποια εταιρεία περιηγείται ένας ανώνυμος επισκέπτης, με βάση τη διεύθυνση IP. Και τα δύο χρησιμεύουν στο να καταλάβουμε ποιες σελίδες φέρνουν αιτήματα.',
          'Αν αρνηθείς, δεν φορτώνουν ποτέ και ο ιστότοπος δουλεύει ακριβώς το ίδιο. Μπορείς να αλλάξεις την απάντησή σου στο τέλος αυτής της σελίδας όποτε θέλεις.',
          'Νομική βάση και για τα δύο είναι η συγκατάθεσή σου, άρθρο 6 παρ. 1 στοιχ. α΄ ΓΚΠΔ.',
        ],
      },
      {
        h: 'Ποιοι άλλοι βλέπουν τα δεδομένα σου',
        p: [
          'Οι υποβολές των φορμών μεταφέρονται και αποθηκεύονται στην Amazon Web Services, σε υποδομή στις Ηνωμένες Πολιτείες (περιοχή us-east-1). Πρόκειται για διαβίβαση εκτός Ευρωπαϊκού Οικονομικού Χώρου, που γίνεται βάσει των Τυποποιημένων Συμβατικών Ρητρών της Ευρωπαϊκής Επιτροπής.',
          'Αν κλείσεις ραντεβού, η Calendly λαμβάνει το όνομα και το email που δίνεις. Αν αποδεχτείς τα cookies, η Google και η Leadsy λαμβάνουν όσα περιγράφονται παραπάνω.',
          'Δεν πουλάμε τα δεδομένα σου και δεν τα μοιραζόμαστε με κανέναν που δεν αναφέρεται εδώ.',
        ],
      },
      {
        h: 'Πόσο καιρό τα κρατάμε',
        p: [
          'Τα αιτήματα κρατιούνται 24 μήνες μετά την τελευταία μας επικοινωνία, ώστε να μπορούμε να συνεχίσουμε μια κουβέντα από εκεί που σταμάτησε. Αν γίνεις πελάτης, το αρχείο κρατιέται όσο απαιτεί η ελληνική λογιστική και φορολογική νομοθεσία.',
          'Ζήτησέ μας να τα διαγράψουμε νωρίτερα και θα το κάνουμε, εκτός αν υποχρεωνόμαστε από τον νόμο να τα κρατήσουμε.',
        ],
      },
      {
        h: 'Τα δικαιώματά σου',
        p: [
          'Μπορείς να ζητήσεις αντίγραφο όσων τηρούμε για σένα, να ζητήσεις διόρθωση, διαγραφή, περιορισμό της επεξεργασίας, φορητότητα, και να εναντιωθείς στην επεξεργασία. Όπου στηριζόμαστε στη συγκατάθεσή σου, μπορείς να την ανακαλέσεις όποτε θέλεις. Η ανάκληση είναι εξίσου εύκολη με τη χορήγηση, και το κουμπί είναι παρακάτω.',
          'Γράψε στο info@fijisolutions.net. Απαντάμε εντός ενός μήνα.',
          'Αν θεωρείς ότι χειριστήκαμε άσχημα τα δεδομένα σου, μπορείς να προσφύγεις στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα, Κηφισίας 1-3, 115 23 Αθήνα, www.dpa.gr.',
        ],
      },
      {
        h: 'Παιδιά',
        p: [
          'Ο ιστότοπος απευθύνεται σε επιχειρήσεις. Δεν απευθύνεται σε παιδιά και δεν συλλέγουμε εν γνώσει μας δεδομένα από αυτά.',
        ],
      },
      {
        h: 'Αλλαγές',
        p: [
          'Αν αλλάξει αυτή η πολιτική, αλλάζει και η ημερομηνία στην κορυφή. Ουσιώδεις αλλαγές θα είναι ορατές σε αυτή τη σελίδα πριν τεθούν σε ισχύ.',
        ],
      },
    ],
    consentH: 'Η επιλογή σου για τα cookies',
    consentP: 'Αυτή είναι η επιλογή που είναι αποθηκευμένη στον browser σου. Αν τη διαγράψεις, θα σε ρωτήσουμε ξανά στην επόμενη σελίδα.',
    consentBtn: 'Διαγραφή της επιλογής μου',
    consentState: (s) => `Τρέχουσα ρύθμιση: ${s}`,
    granted: 'αποδοχή',
    denied: 'απόρριψη',
    unknown: 'δεν έχει επιλεγεί ακόμη',
  },
};

export default function PrivacyPolicyContent({lang}: { lang: Language }) {
  const c = CONTENT[lang];
  // useConsent returns 'unknown' on the server and on the first client render, so the markup the
  // server produced and the markup React hydrates are identical. Reading localStorage during
  // render instead would make a returning visitor hydrate a different string than was prerendered.
  const state = useConsent();
  const label = state === 'granted' ? c.granted : state === 'denied' ? c.denied : c.unknown;

  const clear = () => {
    try {
      window.localStorage.removeItem(CONSENT_KEY);
    } catch {
      /* private mode */
    }
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
  };

  return (
    <div className="min-h-screen bg-white pt-20 dark:bg-gray-900">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold text-gray-950 dark:text-white md:text-5xl">
            {c.title}
          </h1>
          <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">{c.updated}</p>
          <p className="mb-12 text-lg text-gray-700 dark:text-gray-300">{c.intro}</p>

          <div className="space-y-10">
            {c.blocks.map((b) => (
              <section key={b.h}>
                <h2 className="mb-3 text-xl font-bold text-gray-950 dark:text-white">{b.h}</h2>
                {b.p.map((para) => (
                  <p key={para} className="mb-3 text-gray-700 dark:text-gray-300">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            <section className="border-t border-gray-200 pt-10 dark:border-gray-700">
              <h2 className="mb-3 text-xl font-bold text-gray-950 dark:text-white">{c.consentH}</h2>
              <p className="mb-2 text-gray-700 dark:text-gray-300">{c.consentP}</p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                <strong>{c.consentState(label)}</strong>
              </p>
              <button
                type="button"
                onClick={clear}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                {c.consentBtn}
              </button>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
