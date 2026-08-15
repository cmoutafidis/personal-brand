import type {Metadata} from 'next';
import Link from 'next/link';
import React from 'react';

// The 404 lives inside the (en) group rather than at src/app/not-found.tsx.
//
// Both root layouts are in route groups, so a not-found at the app root has no layout above it and
// Next refuses to build ("not-found.tsx doesn't have a root layout"). Placed here it inherits
// (en)/layout.tsx and comes with <html lang>, the navbar, the fonts and the theme. Before this
// file existed the 404 shipped as an unstyled page with no navigation and no way back.

export const metadata: Metadata = {
  title: 'Page not found | Fiji Solutions',
  robots: 'noindex, follow',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 pt-20 text-center dark:bg-gray-900">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">404</p>
      <h1 className="mt-4 max-w-xl text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">
        That page is not here
      </h1>
      <p className="mt-4 max-w-md text-lg text-gray-600 dark:text-gray-300">
        It may have moved, or the link may be missing its language prefix.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/en" className="rounded-lg bg-[#0086ff] px-5 py-3 font-semibold text-white transition hover:bg-[#006add]">
          English site
        </Link>
        <Link href="/el" className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
          Ελληνικά
        </Link>
        <Link href="/en/business-process-audit" className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
          Free process audit
        </Link>
      </div>
    </main>
  );
}
