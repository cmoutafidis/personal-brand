import ContactForm from '@/components/ContactForm';
import {Language} from '@/types/language';
import {GUARANTEE_WINDOW_MONTHS, REPLY_SLA} from '@/lib/offer';

// The audit request form, and the CTA copy that points at it.
//
// This section used to live inside BusinessProcessAuditLanding.tsx. It was extracted on
// 2026-08-30 so the homepage can render the same section rather than a lookalike: one set of
// strings, one set of ContactForm props, one Calendly URL. The homepage lost its form entirely in
// commit 000f837, which stripped it from both homepages and both portfolio pages as a rider on an
// unrelated commit ("the contact form renders twice site-wide instead of six times").
//
// AUDIT_CTA lives here rather than in the landing page's own copy record because CtaBlock's button
// is an in-page `#consultation-form` anchor: the CTA and the thing it scrolls to are one unit, and
// splitting them across two files is how the button label and the submit label drift apart.
//
// `presetQuestion` is the only thing the two callers differ on. It rides along as the `question`
// field, so it is the marker that tells a homepage submission from an offer-page one in the inbox.
// Give a new caller a new value; do not reuse another surface's.

export const CALENDLY_URL = 'https://calendly.com/charis-fijisolutions/30min';

export type CtaCopy = {
  button: string;
  callout: string;
  microcopy: string;
};

export const AUDIT_CTA: Record<Language, CtaCopy> = {
  en: {
    button: 'Get my free Process Audit',
    callout: `The audit is free, no obligation. Every fix we build is backed by the Pays-For-Itself Guarantee. If the fix we build doesn’t pay for itself within ${GUARANTEE_WINDOW_MONTHS} months of going live, we refund your build fee.`,
    microcopy: `We reply within ${REPLY_SLA.en}.`
  },
  el: {
    button: 'Κλείσε τον δωρεάν έλεγχο διαδικασιών σου',
    callout: `Ο έλεγχος είναι δωρεάν, χωρίς καμία δέσμευση. Κάθε λύση που χτίζουμε καλύπτεται από την Εγγύηση Απόσβεσης. Αν η λύση που χτίζουμε δεν αποσβέσει το κόστος της μέσα σε ${GUARANTEE_WINDOW_MONTHS} μήνες από τη θέση της σε λειτουργία, σου επιστρέφουμε την αμοιβή υλοποίησης.`,
    microcopy: `Απαντάμε μέσα σε ${REPLY_SLA.el}.`
  }
};

type FormCopy = {
  formTitle: string;
  formSubhead: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formMicrocopy: string;
  formCalendlyLead: string;
  formCalendlyLink: string;
  formSuccess: string;
};

const formCopy: Record<Language, FormCopy> = {
  en: {
    formTitle: 'Get your free Process Audit',
    formSubhead: `Tell us where the week goes. We’ll reply within ${REPLY_SLA.en} to schedule your call. Within a week of the call you’ll know exactly what your processes are costing you.`,
    formMessageLabel: 'What’s the most time-consuming process in your business right now? (optional)',
    formMessagePlaceholder: 'e.g. invoicing, order entry, client follow-ups…',
    formMicrocopy: `Free, no obligation, no sales pitch. We reply within ${REPLY_SLA.en}.`,
    formCalendlyLead: 'Prefer to skip the form? Book your audit call directly:',
    formCalendlyLink: 'Pick a time on Calendly',
    formSuccess: `Thank you! We’ll reply within ${REPLY_SLA.en} to schedule your audit call.`
  },
  el: {
    formTitle: 'Κλείσε τον δωρεάν έλεγχο διαδικασιών σου',
    formSubhead: `Πες μας πού πάει η εβδομάδα. Θα απαντήσουμε μέσα σε ${REPLY_SLA.el} για να κανονίσουμε την κλήση σου. Μέσα σε μία εβδομάδα από την κλήση θα ξέρεις ακριβώς τι σου κοστίζουν οι διαδικασίες σου.`,
    formMessageLabel: 'Ποια είναι η πιο χρονοβόρα διαδικασία στην επιχείρησή σου αυτή τη στιγμή; (προαιρετικό)',
    formMessagePlaceholder: 'π.χ. τιμολόγηση, καταχώρηση παραγγελιών, υπενθυμίσεις σε πελάτες…',
    formMicrocopy: `Δωρεάν, χωρίς δεσμεύσεις, χωρίς πιέσεις. Απαντάμε μέσα σε ${REPLY_SLA.el}.`,
    formCalendlyLead: 'Προτιμάς να παραλείψεις τη φόρμα; Κλείσε την κλήση του ελέγχου απευθείας:',
    formCalendlyLink: 'Διάλεξε ώρα στο Calendly',
    formSuccess: `Ευχαριστούμε! Θα απαντήσουμε μέσα σε ${REPLY_SLA.el} για να κανονίσουμε την κλήση του ελέγχου σου.`
  }
};

interface AuditFormSectionProps {
  language: Language;
  /** Lead-source marker sent as `question`. One per surface, so the inbox can tell them apart. */
  presetQuestion?: string;
}

export default function AuditFormSection({
  language,
  presetQuestion = 'business-process-audit'
}: AuditFormSectionProps) {
  const copy = formCopy[language];
  const cta = AUDIT_CTA[language];

  return (
    <section id="consultation-form" className="scroll-mt-24 bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">
            {copy.formTitle}
          </h2>
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            {copy.formSubhead}
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <ContactForm
            languageOverride={language}
            hideTitle
            presetQuestion={presetQuestion}
            messageOptional
            messageLabelOverride={copy.formMessageLabel}
            messagePlaceholderOverride={copy.formMessagePlaceholder}
            submitLabelOverride={cta.button}
            successMessageOverride={copy.formSuccess}
          />
          <p className="mt-6 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
            {copy.formMicrocopy}
          </p>
          <p className="mt-2 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
            {copy.formCalendlyLead}{' '}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              {copy.formCalendlyLink}
            </a>
          </p>
          <p className="mt-6 text-center text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
            {cta.callout}
          </p>
        </div>
      </div>
    </section>
  );
}
