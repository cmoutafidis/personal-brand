import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import BlogCard from './BlogCard';
import type {BlogPost} from '@/types/blog';

// 2026-10-19 (offer-os gtm/seo-loop-2026-10 S01, O2): the "latest posts" band on the English homepage.
// It gives the newest English posts an inbound link from /en, and it links
// the /en/blog index once.
//
// The posts are picked from the data by `publishedAt`, newest first, so a post added to blogData.en
// appears here on its own with no edit to this file. Posts that share a date keep their order in
// blogData.en (Array.prototype.sort is stable). No slug is typed here.
//
// The cards are BlogCard, the same card /en/blog renders, so the band matches the index. Each card title is
// an h3 here, under the band's h2.
// The Greek homepage does not render this band: its long-form block already links twelve Greek
// articles in prose (HomeLongForm). Copy rules: no price (CLAUDE.md rule 7), no client or business named.

const POST_COUNT = 3;

const COPY = {
  en: {
    heading: 'Latest from the blog',
    line: 'Plain answers on turning the spreadsheet your team runs on into an app.',
    all: 'All posts',
  },
};

export function latestPosts(posts: BlogPost[], count: number = POST_COUNT): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, count);
}

export default function LatestPostsSection({posts, language}: { posts: BlogPost[]; language: 'en' }) {
  const picked = latestPosts(posts);
  if (picked.length === 0) return null;
  const copy = COPY[language];

  return (
    <section id="latest-posts" className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{copy.heading}</h2>
          <p className="mx-auto max-w-[65ch] text-lg leading-8 text-gray-700 dark:text-gray-300">{copy.line}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {picked.map((post) => (<BlogCard key={post.id} post={post} language={language} headingLevel="h3"/>))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={`/${language}/blog`}
            className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400"
          >
            {copy.all}
            <ArrowRight className="ml-2 h-4 w-4"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
