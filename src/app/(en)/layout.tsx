import React from 'react';
import {Inter, Plus_Jakarta_Sans} from 'next/font/google';
import RootShell, {buildRootMetadata, viewport} from '@/app/RootShell';
import {buildAlternates} from '@/lib/alternates';

// Root layout for the English tree. Its twin is `src/app/(el)/layout.tsx`.
// See RootShell.tsx for why there are two of these and no `src/app/layout.tsx`.

export const metadata = {
  ...buildRootMetadata('en'),
  alternates: buildAlternates(''),
};

export {viewport};

// Fonts (2026-10-28, offer-os seo-plan-2026-10 C2). `subsets` picks only what is preloaded; every subset's
// @font-face stays in the CSS and loads on demand by unicode-range. Plus Jakarta Sans preloads 'latin' only:
// its 'latin-ext' file was preloaded on every page and no page sets a single glyph from it. The Greek tree
// declares its own pair in `src/app/(el)/layout.tsx`.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export default function EnLayout({children}: { children: React.ReactNode }) {
  return <RootShell lang="en" fonts={`${inter.variable} ${plusJakartaSans.variable}`}>{children}</RootShell>;
}
