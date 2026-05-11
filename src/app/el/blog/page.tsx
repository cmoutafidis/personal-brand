import type { Metadata } from 'next';
import { createTranslationFunction } from '@/translations';
import { blogData } from '@/data/blogs';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Software, Data & Snowflake Insights | Fiji Solutions',
  description: 'Διαβάστε άρθρα της Fiji Solutions για εξατομικευμένο λογισμικό, ανάλυση δεδομένων, Snowflake, business intelligence, αυτοματοποίηση και digital growth στην Ελλάδα.',
  keywords: 'Fiji Solutions blog, εξατομικευμένο λογισμικό Ελλάδα blog, ανάλυση δεδομένων Ελλάδα, Snowflake consulting Ελλάδα, business intelligence Ελλάδα, blog ανάπτυξης λογισμικού',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/blog',
    title: 'Software, Data & Snowflake Insights | Fiji Solutions',
    description: 'Άρθρα για εξατομικευμένο λογισμικό, ανάλυση δεδομένων, Snowflake, BI, αυτοματοποίηση και digital growth στην Ελλάδα.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Blog - Ιδέες και συμβουλές από την ομάδα ανάπτυξης λογισμικού στη Θεσσαλονίκη',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Software, Data & Snowflake Insights | Fiji Solutions',
    description: 'Άρθρα για εξατομικευμένο λογισμικό, ανάλυση δεδομένων, Snowflake, BI, αυτοματοποίηση και digital growth στην Ελλάδα.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekBlogPage() {
  const language = 'el';
  const t = createTranslationFunction(language);
  const posts = blogData[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>

          <BlogList posts={posts} t={t} language={language} />
        </div>
      </section>
      <Footer t={t} />
    </div>
  );
}
