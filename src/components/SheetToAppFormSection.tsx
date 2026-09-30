import ContactForm from '@/components/ContactForm';
import TrackedLink from '@/components/TrackedLink';
import {BOOKING_CLICK_EVENT} from '@/utils/gtag';
import {Language} from '@/types/language';
import {SHEET_TO_APP_BOOKING_URL} from '@/data/offers/sheet-to-app';

// The homepage's form for the 7-Day Sheet-to-App Prototype. Added 2026-09-30 in the rollout's goal
// G20 (offer-os gtm/sheet-to-app-rollout/PLAN.md D5: the homepage is the hook for this offer). It
// takes the slot the audit form (AuditFormSection, presetQuestion "homepage-process-audit") held on
// both homepages; the audit page still renders that section as it was.
//
// Every string below is copied word for word from offer-os
// `offers/fiji-solutions--sheet-to-app/03-copy-homepage.md` section 5, except `formMessageRequired`,
// which that file does not give (see its note). To change a line, change it there first.
//
// GA4 follows the G19 pattern. ContactForm sends `contact_form_submit` with
// form_location 'homepage-sheet-to-app' (the presetQuestion, the inbox's lead-source marker) and
// offer_slug 'sheet-to-app'. The booking link sends `booking_click` with cta_location
// 'home-form-calendly'. Both homepage buttons scroll here and send `cta_click`.
//
// The column headers field is required (the section's whole ask, as the copy file recommends).
// The site's "How did you hear about us?" field stays as a fifth field, as on the landing page:
// ContactForm gives no prop to switch it off, on purpose (see its validateForm).

export const HOMEPAGE_FORM_ID = 'sheet-to-app-form';

type HomeFormCopy = {
  formTitle: string;
  formSubhead: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  /** Chosen by the build (G20): the copy file gives no error line for an empty headers field. */
  formMessageRequired: string;
  submitLabel: string;
  formCallout: string;
  formMicrocopy: string;
  formSuccess: string;
  formCalendlyLead: string;
  formCalendlyLink: string;
};

const homeFormCopy: Record<Language, HomeFormCopy> = {
  en: {
    formTitle: 'Send us your column headers',
    formSubhead:
      'Paste the top row of your spreadsheet, the one with the column headers. We read them before the audit call, so the call starts from your own columns.',
    formMessageLabel: 'Your column headers: the top row of your spreadsheet, with no data',
    formMessagePlaceholder: 'e.g. Order, Customer, Product, Quantity, Due date, Status, Owner',
    formMessageRequired: 'Paste your column headers here.',
    submitLabel: 'Send my column headers',
    formCallout:
      'Pay only if you like it: at the day-7 walkthrough for the prototype, and again at delivery for the finished app. Nothing is paid before day 7, and a no needs no reason.',
    formMicrocopy: 'The audit call takes 30 minutes.',
    formSuccess:
      'Thank you. Your column headers are with us. Book your 30-minute audit call with the link below. We will read your headers before it.',
    formCalendlyLead: 'Or book the 30-minute audit call here:',
    formCalendlyLink: 'Pick a time'
  },
  el: {
    formTitle: 'Στείλε μας τα ονόματα των στηλών σου',
    formSubhead:
      'Επικόλλησε την επάνω γραμμή του Excel σου, εκεί που είναι τα ονόματα των στηλών. Τα διαβάζουμε πριν από την πρώτη κλήση, για να ξεκινήσουμε από τις δικές σου στήλες.',
    formMessageLabel:
      'Τα ονόματα των στηλών σου, από την επάνω γραμμή του Excel σου. Τα στοιχεία από κάτω δεν χρειάζονται.',
    formMessagePlaceholder: 'π.χ. Παραγγελία, Πελάτης, Προϊόν, Ποσότητα, Παράδοση, Κατάσταση, Υπεύθυνος',
    formMessageRequired: 'Επικόλλησε εδώ τα ονόματα των στηλών σου.',
    submitLabel: 'Στέλνω τα ονόματα των στηλών μου',
    formCallout:
      'Πληρώνεις μόνο αν σου αρέσει: στη συνάντηση της 7ης μέρας για το πρωτότυπο, και ξανά στην παράδοση για την τελική εφαρμογή. Πριν από την 7η μέρα δεν πληρώνεις τίποτα, και το «όχι» δεν θέλει αιτιολογία.',
    formMicrocopy: 'Η πρώτη κλήση κρατάει 30 λεπτά.',
    formSuccess:
      'Ευχαριστούμε. Λάβαμε τα ονόματα των στηλών σου. Κλείσε ώρα για την πρώτη κλήση από τον σύνδεσμο παρακάτω, και ως τότε θα τα έχουμε διαβάσει.',
    formCalendlyLead: 'Ή κλείσε ραντεβού για την πρώτη κλήση των 30 λεπτών:',
    formCalendlyLink: 'Διάλεξε ώρα'
  }
};

export default function SheetToAppFormSection({language}: {language: Language}) {
  const copy = homeFormCopy[language];

  return (
    <section id={HOMEPAGE_FORM_ID} className="scroll-mt-24 bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
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
            presetQuestion="homepage-sheet-to-app"
            offerSlug="sheet-to-app"
            messageLabelOverride={copy.formMessageLabel}
            messagePlaceholderOverride={copy.formMessagePlaceholder}
            messageRequiredErrorOverride={copy.formMessageRequired}
            submitLabelOverride={copy.submitLabel}
            successMessageOverride={copy.formSuccess}
          />
          <p className="mt-6 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
            {copy.formMicrocopy}
          </p>
          {/* The same 30-minute Calendly event as the landing page (offer-os D120), and it renders
              only while SHEET_TO_APP_BOOKING_URL is set. It sits outside the form, so it stays on
              screen after ContactForm hides its success line. */}
          {SHEET_TO_APP_BOOKING_URL && (
            <p className="mt-2 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
              {copy.formCalendlyLead}{' '}
              <TrackedLink
                event={BOOKING_CLICK_EVENT}
                params={{cta_location: 'home-form-calendly', locale: language, offer_slug: 'sheet-to-app'}}
                href={SHEET_TO_APP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {copy.formCalendlyLink}
              </TrackedLink>
            </p>
          )}
          <p className="mt-6 text-center text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
            {copy.formCallout}
          </p>
        </div>
      </div>
    </section>
  );
}
