import Link from 'next/link';
import type {BlogInline} from '@/types/blog';
import type {Language} from '@/types/language';
import type {HomeLongFormCopy} from '@/types/homeLongForm';

// The long-form block at the bottom of the home page.
//
// ⚠️ IT IS VISIBLE. NOT COLLAPSED, NOT BEHIND A "READ MORE".
// peakcodeconsulting.ch ships a CSS-collapsed disclosure block and copying it here would be wrong.
// That block exists to resolve an arithmetic impossibility: a visible-word ceiling locked at
// 800–1,200 against a section skeleton that is 2,890 words at its minimums. This site has the
// opposite problem, 770 rendered words against Peak Code's 3,047, and no ceiling recorded anywhere.
// Every site in the 17-site comparison sample that ships long-form bottom content leaves it visible.
// Position audit 2026-09-02, §9 item 18, which says so explicitly and gives the reason.
//
// WHY IT EXISTS AT ALL: it is the internal-linking surface. The fourteen Greek articles and the two
// service pages at /services/custom-software-development-greece and /services/data-analysis-greece
// are reachable from the home page through nothing else, and the audit named this the cheapest
// distribution lever on the site. Links belong INSIDE sentences, where a reader is already thinking
// about the thing; a bare "read more" list at the bottom is not the same asset.
//
// ⚠️ THE ENGLISH BLOCK CARRIES NO /en/blog LINK, AND THAT ASYMMETRY IS DELIBERATE. `blogData.en` is
// empty and `/en/blog/<slug>` is a hard 404 under `dynamicParams = false`, so every English article
// link would be a broken link on the home page. The English makes the same points in prose and
// links the service pages, the audit page and the offer pages instead.

function Inline({parts}: { parts: BlogInline[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === 'string') return <span key={i}>{part}</span>;
        if (part.href) {
          const external = part.href.startsWith('http');
          if (external) {
            return (
              <a
                key={i}
                href={part.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline underline-offset-2 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {part.text}
              </a>
            );
          }
          // Internal links go through next/link so the whole point of this block — moving a reader
          // from the home page into an article or a service page — is a client navigation.
          return (
            <Link
              key={i}
              href={part.href}
              className="text-primary-600 underline underline-offset-2 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              {part.text}
            </Link>
          );
        }
        if (part.strong) {
          return (
            <strong key={i} className="font-semibold text-gray-900 dark:text-white">
              {part.text}
            </strong>
          );
        }
        return <span key={i}>{part.text}</span>;
      })}
    </>
  );
}

export default function HomeLongForm({copy}: { copy: HomeLongFormCopy; language?: Language }) {
  return (
    <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* h2, because the page's only h1 is the hero. */}
        <h2 className="text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">
          {copy.heading}
        </h2>
        <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
          <Inline parts={copy.intro}/>
        </p>

        <div className="mt-12 space-y-12">
          {copy.sections.map((s) => (
            <div key={s.id}>
              <h3 className="text-2xl font-semibold text-gray-950 dark:text-white">{s.heading}</h3>
              <div className="mt-4 space-y-5">
                {s.paragraphs.map((p, i) => (
                  <p key={`${s.id}-${i}`} className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                    <Inline parts={p}/>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-950 dark:text-white">{copy.faqHeading}</h3>
          {/* Rendered from the SAME array the route emits as FAQPage, so the marked-up questions and
              the visible ones cannot drift. The home page had no FAQPage at all before this. */}
          <dl className="mt-6 divide-y divide-gray-200 dark:divide-gray-800">
            {copy.faqs.map((faq) => (
              <div key={faq.id} className="py-5 first:pt-0">
                <dt className="text-lg font-semibold text-gray-950 dark:text-white">{faq.q}</dt>
                <dd className="mt-2 text-lg leading-8 text-gray-700 dark:text-gray-300">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
