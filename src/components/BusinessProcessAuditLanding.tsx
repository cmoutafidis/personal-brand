import ContactForm from '@/components/ContactForm';
import {Language} from '@/types/language';

type LandingCopy = {
  heroTitle: string;
  intro: string[];
  cta: string;
  proofParagraphs: string[];
  finalCta: string;
  urgency: string;
};

const copy: Record<Language, LandingCopy> = {
  en: {
    heroTitle: 'Are your business processes losing you money?',
    intro: [
      'We will analyse your business processes and workflows for free.',
      'We will find the bottlenecks that cause you to leave money on the table.',
      'We will build custom AI-based software solutions that solve these problems for you.',
      "If these solutions don't pay for themselves in 3 to 6 months, we will give you your money back."
    ],
    cta: 'Book a Free Consultation',
    proofParagraphs: [
      'Companies are losing 17-32% of revenue because of unoptimised workflows, manual processes, and late follow-ups with clients.',
      'They rely on outdated software or on employees doing manual work. This is a recipe for disaster.',
      'Or they try to buy software and services that are available in the market, but they quickly realise that they are too complicated to use or too generic and they are not a good fit for them.',
      "We don't do that here.",
      'We will create custom software that is built only for you and specifically to solve your business needs.',
      'And to show how confident we are, we put our money where our mouth is.',
      "We are so confident that this solution will make you money, that we are willing to take 100% of the risk.",
      "If our software doesn't earn it's money back by increasing your revenue in three to six months, we will give you your money back.",
      'This is our guarantee to you.'
    ],
    finalCta: 'Book a Free Consultation now.',
    urgency: 'Every day you wait, you are leaving free money to the table.'
  },
  el: {
    heroTitle: 'Σου κοστίζουν χρήματα οι διαδικασίες της επιχείρησής σου;',
    intro: [
      'Θα αναλύσουμε δωρεάν τις επιχειρηματικές διαδικασίες και τα workflows σου.',
      'Θα βρούμε τα bottlenecks που σε κάνουν να αφήνεις χρήματα στο τραπέζι.',
      'Θα φτιάξουμε εξατομικευμένες λύσεις λογισμικού με AI που λύνουν αυτά τα προβλήματα για εσένα.',
      'Αν αυτές οι λύσεις δεν αποσβέσουν το κόστος τους σε 3 έως 6 μήνες, θα σου επιστρέψουμε τα χρήματά σου.'
    ],
    cta: 'Κλείσε Δωρεάν Συμβουλευτική',
    proofParagraphs: [
      'Οι εταιρείες χάνουν 17-32% των εσόδων τους εξαιτίας μη βελτιστοποιημένων workflows, χειροκίνητων διαδικασιών και καθυστερημένων follow-ups με πελάτες.',
      'Βασίζονται σε παλιό λογισμικό ή σε εργαζόμενους που κάνουν χειροκίνητη δουλειά. Αυτό είναι συνταγή για καταστροφή.',
      'Ή προσπαθούν να αγοράσουν λογισμικό και υπηρεσίες που υπάρχουν ήδη στην αγορά, αλλά γρήγορα καταλαβαίνουν ότι είναι πολύ περίπλοκα στη χρήση ή πολύ γενικά και δεν ταιριάζουν στις ανάγκες τους.',
      'Εμείς δεν λειτουργούμε έτσι.',
      'Θα δημιουργήσουμε custom software που χτίζεται μόνο για εσένα και συγκεκριμένα για να λύσει τις επιχειρηματικές σου ανάγκες.',
      'Και για να δείξουμε πόσο σίγουροι είμαστε, βάζουμε τα χρήματά μας εκεί που είναι τα λόγια μας.',
      'Είμαστε τόσο σίγουροι ότι αυτή η λύση θα σου βγάλει χρήματα, που είμαστε διατεθειμένοι να πάρουμε το 100% του ρίσκου.',
      'Αν το λογισμικό μας δεν αποσβέσει το κόστος του αυξάνοντας τα έσοδά σου μέσα σε τρεις έως έξι μήνες, θα σου επιστρέψουμε τα χρήματά σου.',
      'Αυτή είναι η εγγύησή μας προς εσένα.'
    ],
    finalCta: 'Κλείσε Δωρεάν Συμβουλευτική τώρα.',
    urgency: 'Κάθε μέρα που περιμένεις, αφήνεις δωρεάν χρήματα στο τραπέζι.'
  }
};

interface BusinessProcessAuditLandingProps {
  language: Language;
}

export default function BusinessProcessAuditLanding({language}: BusinessProcessAuditLandingProps) {
  const pageCopy = copy[language];

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-200/60 blur-3xl dark:bg-primary-900/30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-200/60 blur-3xl dark:bg-secondary-900/30" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 text-4xl font-bold leading-tight text-gray-950 dark:text-white md:text-6xl lg:text-7xl">
              {pageCopy.heroTitle}
            </h1>
            <div className="mx-auto mb-10 max-w-3xl space-y-4 text-lg leading-8 text-gray-700 dark:text-gray-300 md:text-xl">
              {pageCopy.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-primary-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              {pageCopy.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {pageCopy.proofParagraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? 'rounded-2xl border border-primary-200 bg-primary-50 p-6 text-xl font-semibold text-gray-950 dark:border-primary-900/60 dark:bg-primary-900/20 dark:text-white' : undefined}
              >
                {paragraph}
              </p>
            ))}
            <p className="text-xl font-semibold text-primary-600 dark:text-primary-400">
              {pageCopy.finalCta}
            </p>
            <p className="text-xl font-semibold text-gray-950 dark:text-white">
              {pageCopy.urgency}
            </p>
          </div>
        </div>
      </section>

      <section id="consultation-form" className="scroll-mt-24 bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <ContactForm languageOverride={language} hideTitle />
          </div>
        </div>
      </section>
    </>
  );
}
