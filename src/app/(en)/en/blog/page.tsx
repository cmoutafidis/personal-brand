import type {Metadata} from 'next';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';
import {blogData} from '@/data/blogs';
import {createTranslationFunction} from '@/translations';

const siteUrl = 'https://www.fijisolutions.net';

// noindex on purpose, and this is a DELIBERATE divergence from the Greek twin rather than a
// shared default. blogData.el carries posts and /el/blog is indexed; blogData.en is still empty,
// and an indexed empty page is worse than no page. Remove this line in the same commit that adds
// the first entry to blogData.en, and add the English routes to src/app/sitemap.ts then.
//
// The Greek posts do not get a machine translation merely to fill this page. That is the defect
// the eight offer pages shipped with on 2026-08-31.
// NOT buildAlternates(), and this mirrors the Greek twin rather than contradicting it.
// buildAlternates always declares both locales plus `x-default: /en/blog`. That made this page
// claim two things the rest of the site denies. It named /el/blog as its Greek alternate while
// /el/blog deliberately does NOT name this page back, and Google discards a one way set. It also
// claimed x-default while /el/blog claims x-default too, so the pair published two of them. On top
// of that this page is noindex and src/app/sitemap.ts lists only the fifteen Greek blog URLs, which
// is the exact page-versus-sitemap disagreement the Greek file's own comment warns about.
// The divergence was decided and was only ever applied to the Greek half. This is the other half.
// Restore buildAlternates('/blog', 'en') in the same commit that fills blogData.en.
export const metadata: Metadata = {
  robots: {index: false, follow: true},
  title: 'Blog | Fiji Solutions',
  description: 'Practical writing about websites and search.',
  alternates: {
    canonical: `${siteUrl}/en/blog`,
    languages: {en: `${siteUrl}/en/blog`},
  },
};

export default function Page() {
  const t = createTranslationFunction('en');

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Blog</h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
              Practical writing about websites and search.
            </p>
          </div>
          <BlogList posts={blogData.en} language="en" emptyMessage="Nothing here yet. The Greek edition has articles."/>
        </div>
      </section>
      <Footer t={t}/>
    </>
  );
}
