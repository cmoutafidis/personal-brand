import Link from 'next/link';
import {Calendar, Clock} from 'lucide-react';
import type {Language} from '@/types/language';
import type {BlogPost} from '@/types/blog';

// `headingLevel` (2026-10-19, offer-os gtm/seo-loop-2026-10 S01, O2): the blog index renders the title as an
// h2 under its h1. The homepage band (LatestPostsSection.tsx) passes 'h3', since its own heading is the h2.
export default function BlogCard({post, language, headingLevel = 'h2'}: {
  post: BlogPost;
  language: Language;
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  const locale = language === 'el' ? 'el-GR' : 'en-US';
  const readingTimeLabel = language === 'el' ? 'λεπτά' : 'min';
  const readMore = language === 'el' ? 'Διάβασέ το' : 'Read it';
  const published = new Date(post.publishedAt).toLocaleDateString(locale, {year: 'numeric', month: 'long', day: 'numeric'});

  return (
    <article className="group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1"><Calendar className="h-4 w-4"/><span>{published}</span></div>
          <div className="flex items-center gap-1"><Clock className="h-4 w-4"/><span>{post.readingTime} {readingTimeLabel}</span></div>
        </div>
        <Heading className="mb-3 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <Link href={`/${language}/blog/${post.slug}`}>{post.title}</Link>
        </Heading>
        <p className="mb-4 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
        <Link
          href={`/${language}/blog/${post.slug}`}
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          {readMore}
        </Link>
      </div>
    </article>
  );
}
