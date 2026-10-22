import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {BlogPost} from '@/types/blog';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';

// The "latest posts" band of both homepages.
//
// 2026-10-19 (offer-os gtm/seo-loop-2026-10 S01, O2): added to the English homepage, to give the newest
// English posts an inbound link from /en and to link the /en/blog index once.
// 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1 row 12, decision BR-D8): both homepages
// render it, so `language` is 'en' | 'el', and the copy moved to src/data/home.ts. On /el a short «Οδηγοί»
// list follows the cards: a text link to every other Greek post, titled as each post is, in the order of
// blogData.el (the /el/blog index order). It keeps the Greek posts one click from /el, as the HomeLongForm
// block did until this date.
//
// The cards are picked from the data by `publishedAt`, newest first, so a post added to blogData appears
// here on its own with no edit to this file. Posts that share a date keep their order in the data
// (Array.prototype.sort is stable). No slug is typed here. Since 2026-10-22 (BR-G05) the three newest are
// compact items (date and title as an h3 link, under the band's h2) in place of BlogCard, so the home stays
// inside its height target (PLAN.md §4.1); the excerpts stay on the blog index. Copy rules: no price (CLAUDE.md rule 7), no
// client or business named (SL-D4).

const POST_COUNT = 3;

export function latestPosts(posts: BlogPost[], count: number = POST_COUNT): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, count);
}

export default function LatestPostsSection({posts, language}: { posts: BlogPost[]; language: Language }) {
  const picked = latestPosts(posts);
  if (picked.length === 0) return null;
  const copy = HOME[language].posts;
  const pickedIds = new Set(picked.map((p) => p.id));
  const guides = copy.guidesHeading ? posts.filter((p) => !pickedIds.has(p.id)) : [];

  return (
    <section id="latest-posts" className="bg-gray-50 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-[2rem]">{copy.heading}</h2>
          <p className="mx-auto max-w-[65ch] text-lg leading-8 text-gray-700 dark:text-gray-300">{copy.line}</p>
        </div>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {picked.map((post) => (
            <li key={post.id} className="w-[80%] flex-shrink-0 snap-start rounded-xl md:w-auto border border-gray-200/80 bg-white p-5 dark:border-gray-700/80 dark:bg-gray-800">
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString(language === 'el' ? 'el-GR' : 'en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
              </p>
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                <Link href={`/${language}/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">{post.title}</Link>
              </h3>
            </li>
          ))}
        </ul>
        {guides.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-1 text-xl font-semibold text-gray-950 dark:text-white">{copy.guidesHeading}</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{copy.guidesLine}</p>
            <ul className="grid gap-x-8 gap-y-2 text-sm leading-snug md:grid-cols-2 lg:grid-cols-4">
              {guides.map((post) => (
                <li key={post.id}>
                  <Link href={`/${language}/blog/${post.slug}`} className="text-primary-600 hover:underline dark:text-primary-400">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-6 text-center">
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
