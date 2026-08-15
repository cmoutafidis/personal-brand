import React from 'react';
import RootShell, {buildRootMetadata, viewport} from '@/app/RootShell';
import {buildAlternates} from '@/lib/alternates';

// Root layout for the Greek tree. Its twin is `src/app/(en)/layout.tsx`.
// See RootShell.tsx for why there are two of these and no `src/app/layout.tsx`.

export const metadata = {
  ...buildRootMetadata('el'),
  alternates: buildAlternates('', 'el'),
};

export {viewport};

export default function ElLayout({children}: { children: React.ReactNode }) {
  return <RootShell lang="el">{children}</RootShell>;
}
