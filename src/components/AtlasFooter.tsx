import React from 'react';
import Link from 'next/link';
import {Language} from '@/types/language';
import {createTranslationFunction} from '@/translations';

// The footer of /en/offers/atlas and /el/offers/atlas only: the copyright line, the privacy policy
// and the legal page, nothing else. Added 2026-10-18 after QA round 1 of offer-os
// `offers/fiji-solutions--atlas` (04-qa.md, CRO1 and the 375px tap-target check): the shared
// Footer put 15 non-CTA links (social icons, partner badge, QuickLinks, side projects) on a page
// whose one goal is the application form, and its links were 20px tall on a phone.
// offer.yaml page.attention_ratio_notes keeps the footer "for privacy and legal"; this is that
// footer. Every label is an existing translations.ts key, so no new string is written here.
// The site-wide Atlas link in QuickLinks (AT-D8) is unaffected: it lives on every other page.

const linkClass =
  'inline-flex min-h-[44px] items-center px-3 text-gray-400 underline-offset-4 transition-colors hover:text-white hover:underline';

export default function AtlasFooter({language}: {language: Language}) {
  const t = createTranslationFunction(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pb-24 pt-8 text-white md:pb-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 text-center sm:px-6 lg:px-8">
        <nav aria-label={t('footer.links')}>
          <ul className="flex flex-wrap justify-center gap-x-4">
            <li>
              <Link href={`/${language}/privacy-policy`} className={linkClass}>
                {t('nav.privacy')}
              </Link>
            </li>
            <li>
              <Link href={`/${language}/legal`} className={linkClass}>
                {t('nav.legal')}
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-gray-500">
          &copy; {currentYear} Fiji Solutions. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
