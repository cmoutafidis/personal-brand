import type {Metadata} from 'next';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';
import {blogData} from '@/data/blogs';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';

// Indexable since 2026-10-12 (F20 of offer-os gtm/followups-and-search): blogData.en now carries the two
// English answer articles. Until then this page was noindex with a one-locale alternates block, because an
// indexed empty page is worse than no page and /el/blog did not name a missing English twin. Filling
// blogData.en is the commit that undoes all three parts together, as the old comment and the Greek twin
// asked: this page is indexable and uses buildAlternates('/blog', 'en'), src/app/sitemap.ts lists the English
// blog URLs with the shared hreflang map, and /el/blog now names en as its alternate. The Greek posts are not
// machine translated to fill the English blog; these two are original English.
// 2026-10-30 (offer-os seo-plan-2026-10 D12, audit CONT-5, D-124): the H1, intro and description name the full
// range the home lists, not one offer; the SEO loop's topic list now covers every service in both languages.
export const metadata: Metadata = {
  title: 'Blog: software, automation, AI and websites | Fiji Solutions',
  description: 'Guides on custom software, web and mobile apps, process automation, AI agents, websites and Snowflake data platforms.',
  alternates: buildAlternates('/blog', 'en'),
};

export default function Page() {
  const t = createTranslationFunction('en');

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Guides on custom software, automation, AI and websites
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
              Practical guides on custom software, web and mobile apps, process automation, AI agents, websites and Snowflake data platforms.
            </p>
          </div>
          <BlogList posts={blogData.en} language="en" emptyMessage="Nothing here yet. The Greek edition has articles."/>
        </div>
      </section>
      <Footer t={t}/>
    </>
  );
}
