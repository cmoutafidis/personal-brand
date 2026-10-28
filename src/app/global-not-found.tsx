import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import Link from 'next/link';
import './globals.css';

// The 404 for URLs that match no route at all, such as /no-such-page or /el/no-such-page
// (2026-10-28, offer-os gtm/seo-plan-2026-10 C5, TECH-2). Enabled by experimental.globalNotFound in
// next.config.ts.
//
// Both root layouts sit in route groups, so before this file such a URL got Next's bare default page:
// no brand, no links, no <title>. `src/app/(en)/not-found.tsx` still serves notFound() calls inside the
// English tree. This page renders without any layout, so it brings its own <html> and <body>, and the
// URL does not tell a static page the visitor's language: it is English with the Greek words beside it,
// in the words of (en)/not-found.tsx.
//
// No navbar, chat widget or analytics: those need the providers of RootShell, and a 404 needs none of them.

const inter = Inter({subsets: ['latin', 'greek'], variable: '--font-inter', display: 'swap'});

export const metadata: Metadata = {
  title: 'Page not found | Fiji Solutions',
  description: 'This page is not on fijisolutions.net. The links below lead to the English and Greek sites.',
  robots: 'noindex, follow',
};

const secondary =
  'rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100';

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
          <Link href="/en" className="mb-10 flex items-center gap-2">
            <img src="/fiji-solutions-logo.webp" alt="" width={32} height={32} className="h-8 w-8 object-contain"/>
            <span className="text-xl font-bold text-gray-950">Fiji Solutions</span>
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">404</p>
          <h1 className="mt-4 max-w-xl text-3xl font-bold text-gray-950 md:text-4xl">That page is not here</h1>
          <p className="mt-4 max-w-md text-lg text-gray-600">
            It may have moved, or the link may be missing its language prefix.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/en" className="rounded-lg bg-[#0086ff] px-5 py-3 font-semibold text-white transition hover:bg-[#006add]">
              English site
            </Link>
            <Link href="/el" lang="el" className={secondary}>Ελληνικά</Link>
            <Link href="/en/business-process-audit" className={secondary}>Free process audit</Link>
            <Link href="/en/contact" className={secondary}>Contact</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
