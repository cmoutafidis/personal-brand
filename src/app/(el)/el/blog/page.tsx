import type {Metadata} from 'next';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';
import {blogData} from '@/data/blogs';
import {createTranslationFunction} from '@/translations';

const siteUrl = 'https://www.fijisolutions.net';

// Indexable: blogData.el carries posts. The English index is noindex while blogData.en is empty —
// see (en)/en/blog/page.tsx, that divergence is deliberate.
export const metadata: Metadata = {
  title: 'Blog: ιστοσελίδες και αναζήτηση | Fiji Solutions',
  description: 'Πρακτικά κείμενα για ιστοσελίδες, αναζήτηση και ό,τι αξίζει να συμφωνηθεί γραπτά. Κάθε ισχυρισμός για την Google με πηγή και ημερομηνία.',
  keywords: 'κατασκευή ιστοσελίδων, προώθηση ιστοσελίδων, αναζήτηση Google, Θεσσαλονίκη, Fiji Solutions',
  // NOT buildAlternates(): that always declares both locales, and /en/blog is an empty noindex
  // page. src/app/sitemap.ts lists only the Greek blog URLs, and Google discards an hreflang set
  // when the sitemap and the page disagree. Restore buildAlternates('/blog', 'el') in the same
  // commit that fills blogData.en.
  alternates: {
    canonical: `${siteUrl}/el/blog`,
    languages: {el: `${siteUrl}/el/blog`, 'x-default': `${siteUrl}/el/blog`},
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/el/blog`,
    title: 'Blog: ιστοσελίδες και αναζήτηση',
    description: 'Πρακτικά κείμενα για ιστοσελίδες και αναζήτηση, με πηγή και ημερομηνία.',
    locale: 'el_GR',
    siteName: 'Fiji Solutions',
    images: [{url: `${siteUrl}/fijisolutions.png`, width: 1200, height: 630, alt: 'Fiji Solutions'}],
  },
};

export default function Page() {
  const t = createTranslationFunction('el');

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Ιστοσελίδες και αναζήτηση, χωρίς υποσχέσεις
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
              Κείμενα για το πώς δουλεύει πραγματικά η αναζήτηση και τι αξίζει να συμφωνείς γραπτά. Κάθε ισχυρισμός για την Google παραπέμπει στη δική της τεκμηρίωση, με ημερομηνία.
            </p>
          </div>
          <BlogList posts={blogData.el} language="el" emptyMessage="Δεν υπάρχουν ακόμη κείμενα."/>
        </div>
      </section>
      <Footer t={t}/>
    </>
  );
}
