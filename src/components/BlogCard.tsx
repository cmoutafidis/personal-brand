import Link from 'next/link';
import {Calendar, Clock} from 'lucide-react';
import type {Language} from '@/types/language';
import type {BlogPost} from '@/types/blog';

export default function BlogCard({post, language}: { post: BlogPost; language: Language }) {
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
        <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <Link href={`/${language}/blog/${post.slug}`}>{post.title}</Link>
        </h2>
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
