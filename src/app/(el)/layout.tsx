import React from 'react';
import {Inter, Plus_Jakarta_Sans} from 'next/font/google';
import RootShell, {buildRootMetadata, viewport} from '@/app/RootShell';
import {buildAlternates} from '@/lib/alternates';

// Root layout for the Greek tree. Its twin is `src/app/(en)/layout.tsx`.
// See RootShell.tsx for why there are two of these and no `src/app/layout.tsx`.

export const metadata = {
  ...buildRootMetadata('el'),
  alternates: buildAlternates('', 'el'),
};

export {viewport};

// Fonts (2026-10-28, offer-os seo-plan-2026-10 C2). Inter adds 'greek', so the Greek file is preloaded
// rather than found late in the CSS (`subsets` sets the preloads only); it was the late re-render behind the 5.3 s phone LCP of /el (PERF-1).
// Plus Jakarta Sans has no Greek glyphs, and its metric-matched fallback is Arial, which took every Greek
// letter of every heading (ONP-10). `adjustFontFallback: false` drops that fallback here only, so the
// display stack in tailwind.config.ts falls through to Inter for Greek. The English tree keeps the
// fallback in `src/app/(en)/layout.tsx`.
const inter = Inter({
  subsets: ['latin', 'greek'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  adjustFontFallback: false,
});

export default function ElLayout({children}: { children: React.ReactNode }) {
  return <RootShell lang="el" fonts={`${inter.variable} ${plusJakartaSans.variable}`}>{children}</RootShell>;
}
