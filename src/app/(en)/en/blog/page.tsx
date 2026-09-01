import type {Metadata} from 'next';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';
import {blogData} from '@/data/blogs';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';

const siteUrl = 'https://www.fijisolutions.net';

// noindex on purpose, and this is a DELIBERATE divergence from the Greek twin rather than a
// shared default. blogData.el carries posts and /el/blog is indexed; blogData.en is still empty,
// and an indexed empty page is worse than no page. Remove this line in the same commit that adds
// the first entry to blogData.en, and add the English routes to src/app/sitemap.ts then.
//
// The Greek posts do not get a machine translation merely to fill this page. That is the defect
// the eight offer pages shipped with on 2026-08-31.
export const metadata: Metadata = {
  robots: {index: false, follow: true},
  title: 'Blog | Fiji Solutions',
  description: 'Practical writing about websites and search.',
  alternates: buildAlternates('/blog', 'en'),
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
