import Link from 'next/link';
import {ArrowRight} from 'lucide-react';

// The head of every home section (offer-os broad home BR-D45, after ignitech.ch): a short line and a small
// uppercase label, the h2 below it, an optional line under that, and an optional link at the right on wide screens.
// `light` is for the blue closing band.

export const SECTION_PAD = 'py-14 md:py-[72px]';

export default function SectionHeading({label, heading, line, link, light = false}: {
  label: string;
  heading: string;
  line?: string;
  link?: {href: string; label: string};
  light?: boolean;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal="">
      <div className="max-w-3xl">
        <p className={`mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] ${light ? 'text-primary-100' : 'text-primary-700 dark:text-primary-300'}`}>
          <span className={`inline-block h-0.5 w-[18px] rounded ${light ? 'bg-primary-100' : 'bg-primary-600 dark:bg-primary-400'}`} aria-hidden="true"/>
          {label}
        </p>
        <h2 className={`text-[1.9rem] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[2.5rem] ${light ? 'text-white' : 'text-gray-950 dark:text-white'}`}>
          {heading}
        </h2>
        {line && <p className={`mt-4 max-w-[60ch] text-lg leading-8 ${light ? 'text-primary-50' : 'text-gray-600 dark:text-gray-300'}`}>{line}</p>}
      </div>
      {link && (
        <Link href={link.href} className="inline-flex flex-shrink-0 items-center font-semibold text-primary-600 hover:underline dark:text-primary-400">
          {link.label}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true"/>
        </Link>
      )}
    </div>
  );
}
