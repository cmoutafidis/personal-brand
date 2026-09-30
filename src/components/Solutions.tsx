import React from 'react';
import Link from 'next/link';
import {Link2, Phone, ThumbsUp} from 'lucide-react';
import ContactButton2 from "@/components/ContactButton2";
import {Language} from '@/types/language';
import sheetToApp from '@/data/offers/sheet-to-app';

interface SolutionsProps {
  t: (key: string) => string;
  language: Language;
}

// 2026-09-30 (G20, offer-os gtm/sheet-to-app-rollout/PLAN.md D5): the three cards are steps 2 to 4
// of the 7-Day Sheet-to-App Prototype, and the box under them is the homepage's one priced slot
// (D68, the dated exception to CLAUDE.md rule 7). Under the box sit two lines that have no key in
// translations.ts, since its keys stay as they are: the body link to /offers/sheet-to-app and his
// limit line (D75). Both are copied word for word from offer-os
// `offers/fiji-solutions--sheet-to-app/03-copy-homepage.md` section 4.
//
// The body link is the homepage's one link to that page, in prose. Its anchor text is the
// destination's own `eyebrow`, read from the data file and never typed here (offerLinks.ts rule).
const BODY_LINK: Record<Language, {before: string; after: string}> = {
  en: {before: 'Everything the finished app includes is on the prototype\'s page: ', after: '.'},
  el: {before: 'Όσα περιλαμβάνει η τελική εφαρμογή τα βρίσκεις στη σελίδα του πρωτοτύπου: ', after: '.'}
};

// His limit line, once on the homepage, in its own paragraph with no button beside it (D75). The
// capacity number is his (D75), so CLAUDE.md rule 5 is met.
const LIMIT_LINE: Record<Language, string> = {
  en: 'We take on 3 prototypes a month, so each one gets our full attention. Today\'s prices are where we start, and they will rise as we grow the team.',
  el: 'Αναλαμβάνουμε 3 πρωτότυπα τον μήνα, για να έχει το καθένα όλη μας την προσοχή. Ξεκινάμε με αυτές τις τιμές, και θα ανεβαίνουν όσο μεγαλώνει η ομάδα μας.'
};

const Solutions: React.FC<SolutionsProps> = ({t, language}) => {

  const solutions = [
    {
      icon: <Phone className="h-12 w-12"/>,
      title: t('solutions.experts.title'),
      description: t('solutions.experts.description')
    },
    {
      icon: <Link2 className="h-12 w-12"/>,
      title: t('solutions.industry.title'),
      description: t('solutions.industry.description')
    },
    {
      icon: <ThumbsUp className="h-12 w-12"/>,
      title: t('solutions.payment.title'),
      description: t('solutions.payment.description')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
            {t('solutions.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index}
                 className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-6 text-center">
              <div
                className="inline-block p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {solution.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-primary-600 dark:bg-primary-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {t('solutions.cta.title')}
            </h3>
            {/* The box holds several short blocks, one per blank line of the string. */}
            <div className="mb-6 space-y-3 text-left">
              {t('solutions.cta.description').split('\n\n').map((block, i) => (
                <p key={i}>{block}</p>
              ))}
            </div>
            <ContactButton2/>
          </div>
          <p className="max-w-2xl mx-auto mt-8 text-gray-700 dark:text-gray-300">
            {BODY_LINK[language].before}
            <Link
              href={`/${language}/${sheetToApp.slug}`}
              className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              {sheetToApp.copy[language].eyebrow}
            </Link>
            {BODY_LINK[language].after}
          </p>
          <p className="max-w-2xl mx-auto mt-4 text-gray-700 dark:text-gray-300">
            {LIMIT_LINE[language]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
