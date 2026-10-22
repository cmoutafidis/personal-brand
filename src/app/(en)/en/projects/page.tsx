import type {Metadata} from 'next';
import {ProjectsIndex, projectsIndexMetadata} from '@/components/ProjectPages';
import Footer from '@/components/Footer';
import {createTranslationFunction} from '@/translations';

// The projects index, added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G06). Everything on it lives in
// src/components/ProjectPages.tsx and src/data/projects.ts.

export const metadata: Metadata = projectsIndexMetadata('en');

export default function EnglishProjectsPage() {
  const t = createTranslationFunction('en');

  return (
    <>
      <ProjectsIndex lang="en"/>
      <Footer t={t}/>
    </>
  );
}
