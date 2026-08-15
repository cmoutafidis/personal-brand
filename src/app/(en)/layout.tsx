import React from 'react';
import RootShell, {buildRootMetadata, viewport} from '@/app/RootShell';
import {buildAlternates} from '@/lib/alternates';

// Root layout for the English tree. Its twin is `src/app/(el)/layout.tsx`.
// See RootShell.tsx for why there are two of these and no `src/app/layout.tsx`.

export const metadata = {
  ...buildRootMetadata('en'),
  alternates: buildAlternates(''),
};

export {viewport};

export default function EnLayout({children}: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
