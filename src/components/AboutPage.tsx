import React from 'react';
import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import {BOOKING_CLICK_EVENT} from '@/utils/gtag';
import {Language} from '@/types/language';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import {ORGANISATION_ID, PERSON_REF} from '@/lib/person';
import sheetToApp from '@/data/offers/sheet-to-app';
import {BOOKING_URL, BOOKING_URL_TEXT} from '@/lib/booking';

// The about page, /en/about and /el/about. Added 2026-10-08 in F16 of offer-os
// gtm/followups-and-search (PLAN.md F-D130, F-D131): a lead who gets an email from Charis Moutafidis
// and checks the sender finds a named person with a face, the company facts and the offer.
//
// Every string is copied word for word from offer-os
// `offers/fiji-solutions--sheet-to-app/derived/site/F16-COPY.md` section 1; change it there first.
// The facts come from the approved Gamma doc GD1 and the two proof records it names. Rules held:
// "we", with his facts in the third person (D13); no price (CLAUDE.md rule 7); "7 days" with its
// anchor (rule 6); AKB on no Fiji page (F-D21, superseded 2026-10-22 by offer-os BR-D35: approved sentences only, text only); no AWS region (F-D31).
//
// The photo is his own, cropped out of a group photo at his word (F-D131), metadata stripped.
//
// 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G07, decisions BR-D7 and BR-D22): the copy is now offer-os
// `companies/fiji-solutions/site/03-copy-home.md`, "About"; change it there first. The intro, the meta
// descriptions, the second founder line and "Where to start" are broad, the /el/about title is his pick of
// BR-D7, and both H1s are unchanged byte for byte (the /el/about Bing slot). "What we have built" links
// /projects and "Where to start" links the home's ways to start; the one sheet-to-app link stays (F-D130).

const BASE = 'https://www.fijisolutions.net';
const PHOTO = '/charis-moutafidis.jpg';
const LINKEDIN = 'https://www.linkedin.com/in/charalampos-moutafidis-71330414a/';
// The personal site in the page's locale (offer-os gtm/seo-plan-2026-10 B2, D-23); /el/about linked the English home
// until 2026-10-27.
const PERSONAL_SITE: Record<Language, string> = {en: 'https://charismoutafidis.com/', el: 'https://charismoutafidis.com/el'};
const SNOWFLAKE_LISTING = 'https://www.snowflake.com/en/why-snowflake/partners/all-partners/fiji-solutions/';

type AboutCopy = {
  metaTitle: string;
  metaDescription: string;
  photoAlt: string;
  h1: string;
  intro: string[];
  founderH2: string;
  founder: string[];
  moreLead: string;
  linkedinLabel: string;
  and: string;
  builtH2: string;
  built: string[];
  checkH2: string;
  snowflake: string;
  snowflakeLabel: string;
  officeLead: string;
  phoneLead: string;
  emailLead: string;
  legalBefore: string;
  legalLabel: string;
  startH2: string;
  bookBefore: string;
  builtMore: string;
  builtMoreLabel: string;
  waysBefore: string;
  waysLabel: string;
  offerBefore: string;
};

const COPY: Record<Language, AboutCopy> = {
  en: {
    metaTitle: 'About Fiji Solutions | Software company in Thessaloniki',
    metaDescription: 'Fiji Solutions is a software company in Thessaloniki, Greece, founded by Charis Moutafidis. We build custom software, apps, automation, AI agents and websites.',
    photoAlt: 'Charis Moutafidis, founder of Fiji Solutions',
    h1: 'Fiji Solutions is a software company in Thessaloniki, Greece',
    intro: [
      'We build custom software, web and mobile apps, process automation, AI agents, websites and Snowflake data platforms for businesses in Greece and abroad.',
      'We work with business owners in the United States and in Greece.'
    ],
    founderH2: 'Who started Fiji Solutions',
    founder: [
      'Our founder, Charis Moutafidis, has more than ten years of experience building software in banking, travel, telecom, health and online education.',
      'From the first call through the build and the launch, you talk directly to the engineer who builds your software.'
    ],
    moreLead: 'More about him: ',
    linkedinLabel: 'his LinkedIn profile',
    and: ' and ',
    builtH2: 'What we have built',
    built: [
      'PAP Center, a hair clinic in Thessaloniki, ran on software built in 2000 and feared it would stop working. We built the clinic a custom CRM. We started in July 2026 and have shipped changes every week since. It went live in September 2026, and the staff use it every day.',
      'New Era Learning is an online learning platform. We helped build the platform and built a Snowflake data setup that extracts their data into customer and revenue insights.'
    ],
    checkH2: 'How to check us',
    snowflake: 'Snowflake lists Fiji Solutions in its own partner directory as a Snowflake AI Data Cloud Select Partner: ',
    snowflakeLabel: 'the listing',
    officeLead: 'Our office is at ',
    phoneLead: 'Phone ',
    emailLead: ', email ',
    legalBefore: 'The company\'s registration details are on our ',
    legalLabel: 'legal page',
    startH2: 'Where to start',
    builtMore: 'Every project we can show is on our projects page: ',
    builtMoreLabel: 'Projects',
    bookBefore: 'Book a free 30-minute call: ',
    waysBefore: 'Or pick one of the ways to start on our home page: ',
    waysLabel: 'Ways to start',
    offerBefore: 'If your team runs on a shared spreadsheet, the 7-day prototype has its own page: '
  },
  el: {
    metaTitle: 'Σχετικά με τη Fiji Solutions | Ανάπτυξη λογισμικού στη Θεσσαλονίκη',
    metaDescription: 'Η Fiji Solutions, που την ίδρυσε ο Χάρης Μουταφίδης, είναι εταιρεία λογισμικού στη Θεσσαλονίκη. Φτιάχνουμε λογισμικό, εφαρμογές, αυτοματισμούς, AI agents και ιστοσελίδες.',
    photoAlt: 'Ο Χάρης Μουταφίδης, ιδρυτής της Fiji Solutions',
    h1: 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη',
    intro: [
      'Φτιάχνουμε λογισμικό κατά παραγγελία, διαδικτυακές εφαρμογές και εφαρμογές για κινητά, αυτοματισμούς, AI agents, ιστοσελίδες και πλατφόρμες δεδομένων Snowflake, για επιχειρήσεις στην Ελλάδα και στο εξωτερικό.',
      'Δουλεύουμε με ιδιοκτήτες επιχειρήσεων στις Ηνωμένες Πολιτείες και στην Ελλάδα.'
    ],
    founderH2: 'Ποιος ίδρυσε τη Fiji Solutions',
    founder: [
      'Ο ιδρυτής μας, ο Χάρης Μουταφίδης, έχει πάνω από δέκα χρόνια εμπειρία στην κατασκευή λογισμικού, σε τράπεζες, τουρισμό, τηλεπικοινωνίες, υγεία και διαδικτυακή εκπαίδευση.',
      'Από την πρώτη κλήση ως την υλοποίηση και την παράδοση, μιλάς απευθείας με τον μηχανικό που φτιάχνει το λογισμικό σου.'
    ],
    moreLead: 'Περισσότερα για τον ίδιο: ',
    linkedinLabel: 'το προφίλ του στο LinkedIn',
    and: ' και ',
    builtH2: 'Τι έχουμε φτιάξει',
    built: [
      'Το PAP Center, μια κλινική μαλλιών στη Θεσσαλονίκη, δούλευε με λογισμικό φτιαγμένο το 2000 και φοβόταν μήπως σταματήσει να λειτουργεί. Φτιάξαμε για την κλινική ένα CRM στα μέτρα της. Ξεκινήσαμε τον Ιούλιο του 2026 και από τότε παραδίδουμε αλλαγές κάθε βδομάδα. Μπήκε σε λειτουργία τον Σεπτέμβριο του 2026, και το προσωπικό το χρησιμοποιεί κάθε μέρα.',
      'Το New Era Learning είναι πλατφόρμα διαδικτυακής εκπαίδευσης. Βοηθήσαμε να χτιστεί η πλατφόρμα και στήσαμε στη Snowflake ένα σύστημα που μετατρέπει τα δεδομένα της πλατφόρμας σε εικόνα για τους πελάτες και τα έσοδά της.'
    ],
    checkH2: 'Πώς μπορείς να μας ελέγξεις',
    snowflake: 'Η Snowflake μάς έχει στον δικό της κατάλογο συνεργατών ως Snowflake AI Data Cloud Select Partner: ',
    snowflakeLabel: 'η καταχώριση',
    officeLead: 'Το γραφείο μας είναι στη ',
    phoneLead: 'Τηλέφωνο ',
    emailLead: ', email ',
    legalBefore: 'Τα στοιχεία της εταιρείας είναι στη ',
    legalLabel: 'σελίδα με τα νομικά στοιχεία',
    startH2: 'Από πού ξεκινάς',
    builtMore: 'Όλα τα έργα που μπορούμε να δείξουμε είναι στη σελίδα με τα έργα μας: ',
    builtMoreLabel: 'Έργα',
    bookBefore: 'Κλείσε δωρεάν κλήση 30 λεπτών: ',
    waysBefore: 'Ή διάλεξε έναν από τους τρόπους να ξεκινήσεις, στην αρχική μας σελίδα: ',
    waysLabel: 'Τρόποι να ξεκινήσεις',
    offerBefore: 'Αν η ομάδα σου δουλεύει πάνω σε ένα κοινό Excel, το πρωτότυπο των 7 ημερών έχει τη δική του σελίδα: '
  }
};

export function aboutMetadata(lang: Language): Metadata {
  const c = COPY[lang];
  const url = `${BASE}/${lang}/about`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: buildAlternates('/about', lang),
    openGraph: {
      type: 'profile',
      url,
      title: c.metaTitle,
      description: c.metaDescription,
      images: [{url: `${BASE}${PHOTO}`, width: 800, height: 1000, alt: c.photoAlt}]
    },
    twitter: {
      card: 'summary',
      site: '@fiji_solutions',
      title: c.metaTitle,
      description: c.metaDescription,
      images: [`${BASE}${PHOTO}`]
    }
  };
}

/** AboutPage about the organisation, with the founder as a reference to the canonical Person node
 *  (src/lib/person.ts) plus `image`, so the photo attaches to the one Person @id. */
export function aboutSchema(lang: Language) {
  const c = COPY[lang];
  const url = `${BASE}/${lang}/about`;
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${url}#webpage`,
    url,
    name: c.metaTitle,
    description: c.metaDescription,
    inLanguage: lang,
    about: {'@id': ORGANISATION_ID},
    mainEntity: {
      ...PERSON_REF,
      image: `${BASE}${PHOTO}`,
      worksFor: {'@id': ORGANISATION_ID}
    }
  };
}

const linkClass = 'font-medium text-primary-600 dark:text-primary-400 underline underline-offset-4 hover:no-underline';

export default function AboutPage({lang}: {lang: Language}) {
  const c = COPY[lang];
  const t = createTranslationFunction(lang);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-28 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-600 dark:text-primary-400">
          {c.h1}
        </h1>
        {c.intro.map((p) => (
          <p key={p} className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-3xl">{p}</p>
        ))}

        <section className="mt-12 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
          <Image
            src={PHOTO}
            alt={c.photoAlt}
            width={800}
            height={1000}
            sizes="(min-width: 768px) 360px, 100vw"
            priority
            className="w-full max-w-sm rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{c.founderH2}</h2>
            {c.founder.map((p) => (
              <p key={p} className="text-gray-700 dark:text-gray-300 mb-4">{p}</p>
            ))}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {c.moreLead}
              <a href={PERSONAL_SITE[lang]} className={linkClass}>charismoutafidis.com</a>
              {c.and}
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={linkClass}>{c.linkedinLabel}</a>
              .
            </p>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{c.builtH2}</h2>
          {c.built.map((p) => (
            <p key={p} className="text-gray-700 dark:text-gray-300 mb-4">{p}</p>
          ))}
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {c.builtMore}
            <Link href={`/${lang}/projects`} className={linkClass}>{c.builtMoreLabel}</Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{c.checkH2}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {c.snowflake}
            <a href={SNOWFLAKE_LISTING} target="_blank" rel="noopener noreferrer" className={linkClass}>{c.snowflakeLabel}</a>
            .
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {c.officeLead}{t('contact.address.street')}, {t('contact.address.city')}. {c.phoneLead}
            <a href="tel:+302311070108" className={linkClass}>+30 231 107 0108</a>
            {c.emailLead}
            <a href="mailto:info@fijisolutions.net" className={linkClass}>info@fijisolutions.net</a>
            . {c.legalBefore}
            <Link href={`/${lang}/legal`} className={linkClass}>{c.legalLabel}</Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{c.startH2}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {c.bookBefore}
            <TrackedLink
              event={BOOKING_CLICK_EVENT}
              params={{cta_location: 'about-calendly', locale: lang}}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {BOOKING_URL_TEXT}
            </TrackedLink>
            .
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {c.waysBefore}
            <Link href={`/${lang}#ways-to-start`} className={linkClass}>{c.waysLabel}</Link>
            .
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {c.offerBefore}
            <Link href={`/${lang}/${sheetToApp.slug}`} className={linkClass}>
              {sheetToApp.copy[lang].eyebrow}
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
