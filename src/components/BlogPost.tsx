import Link from 'next/link';
import {ArrowLeft, Calendar, CheckCircle2, Clock, Tag, User} from 'lucide-react';
import type {Language} from '@/types/language';
import type {BlogInline, BlogPost as BlogPostType} from '@/types/blog';

// Renders a post's typed body. The post's title is the page's only <h1>; every block here emits
// h2/h3 or lower.

function Inline({parts}: { parts: BlogInline[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === 'string') return <span key={i}>{part}</span>;
        if (part.href) {
          const external = part.href.startsWith('http');
          return (
            <a
              key={i}
              href={part.href}
              className="text-primary-600 dark:text-primary-400 underline underline-offset-2 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
            >
              {part.text}
            </a>
          );
        }
        if (part.strong) return <strong key={i} className="font-semibold text-gray-900 dark:text-white">{part.text}</strong>;
        return <span key={i}>{part.text}</span>;
      })}
    </>
  );
}

export default function BlogPost({post, language}: { post: BlogPostType; language: Language }) {
  const locale = language === 'el' ? 'el-GR' : 'en-US';
  const backLabel = language === 'el' ? 'Πίσω στο blog' : 'Back to the blog';
  const readingTimeLabel = language === 'el' ? 'λεπτά ανάγνωσης' : 'min read';
  const publishedLabel = language === 'el' ? 'Δημοσιεύτηκε' : 'Published';
  const checkedLabel = language === 'el' ? 'Έλεγχος στοιχείων' : 'Last checked';
  const fmt = (d: string) => new Date(d).toLocaleDateString(locale, {year: 'numeric', month: 'long', day: 'numeric'});

  return (
    <article className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${language}/blog`}
          className="mb-8 inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4"/>
          {backLabel}
        </Link>

        <header className="mb-10">
          <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            {post.author ? (
              <div className="flex items-center gap-2"><User className="h-4 w-4"/><span>{post.author}</span></div>
            ) : null}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4"/>
              <span>{publishedLabel} <time dateTime={post.publishedAt}>{fmt(post.publishedAt)}</time></span>
            </div>
            {post.updatedAt ? (
              // The freshness stamp renders even when it equals the publication date: "checked
              // today" is information, and these articles are dated on purpose.
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4"/>
                <span>{checkedLabel}: <time dateTime={post.updatedAt}>{fmt(post.updatedAt)}</time></span>
              </div>
            ) : null}
            <div className="flex items-center gap-2"><Clock className="h-4 w-4"/><span>{post.readingTime} {readingTimeLabel}</span></div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm text-primary-700 dark:text-primary-300">
                <Tag className="mr-1 h-3 w-3"/>{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {post.body.map((block, i) => {
            switch (block.type) {
              case 'heading':
                return <h2 key={i} className="scroll-mt-24 pt-6 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{block.text}</h2>;
              case 'subheading':
                return <h3 key={i} className="pt-2 text-xl font-semibold text-gray-900 dark:text-white">{block.text}</h3>;
              case 'paragraph':
                return <p key={i}><Inline parts={block.text}/></p>;
              case 'list': {
                const cls = 'ml-6 list-outside space-y-2';
                const items = block.items.map((item, j) => <li key={j}><Inline parts={item}/></li>);
                return block.ordered
                  ? <ol key={i} className={`${cls} list-decimal`}>{items}</ol>
                  : <ul key={i} className={`${cls} list-disc`}>{items}</ul>;
              }
              case 'table':
                return (
                  <figure key={i} className="my-8">
                    {/* Each table scrolls inside its own box; the page must never scroll sideways. */}
                    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                      <table className="w-full border-collapse text-left text-base">
                        <caption className="sr-only">{block.caption}</caption>
                        <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>{block.head.map((h, j) => (
                          <th key={j} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold text-gray-900 dark:text-white">{h}</th>
                        ))}</tr>
                        </thead>
                        <tbody>
                        {block.rows.map((row, j) => (
                          <tr key={j} className="border-t border-gray-200 dark:border-gray-700 align-top">
                            {row.map((cell, k) => (<td key={k} className="px-4 py-3"><Inline parts={cell}/></td>))}
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                    <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">{block.caption}</figcaption>
                  </figure>
                );
              case 'note':
                return (
                  <aside key={i} className="rounded-xl border-l-4 border-primary-400 bg-gray-50 dark:bg-gray-800/60 p-5 text-base">
                    <Inline parts={block.text}/>
                  </aside>
                );
              case 'faq':
                return (
                  <section key={i} className="my-8 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{block.heading}</h2>
                    <dl className="space-y-5">
                      {block.items.map((item, j) => (
                        <div key={j}>
                          <dt className="font-semibold text-gray-900 dark:text-white">{item.q}</dt>
                          <dd className="mt-1 text-base">{item.a}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                );
              case 'sources':
                return (
                  <section key={i} className="my-8">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{block.heading}</h2>
                    <ol className="ml-6 list-outside list-decimal space-y-2 break-words text-base">
                      {block.items.map((s, j) => (
                        <li key={j}>
                          {s.label}{': '}
                          <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline underline-offset-2">{s.url}</a>
                        </li>
                      ))}
                    </ol>
                  </section>
                );
              case 'cta':
                return (
                  <div key={i} className="my-10 rounded-xl border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 p-6">
                    <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{block.heading}</h2>
                    <p className="mb-4 text-base text-gray-600 dark:text-gray-400">{block.text}</p>
                    <Link href={block.href} className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-medium text-white hover:bg-primary-700 transition-colors">
                      {block.label}
                    </Link>
                  </div>
                );
            }
          })}
        </div>
      </div>
    </article>
  );
}
