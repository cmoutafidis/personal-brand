import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ProjectDetail, projectMetadata} from '@/components/ProjectPages';
import Footer from '@/components/Footer';
import {createTranslationFunction} from '@/translations';
import {LIVE_PROJECTS, projectBySlug} from '@/data/projects';

// One project page, added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G06). The same slug in both locales;
// every slug is prerendered and any other 404s.

export const dynamicParams = false;

export function generateStaticParams() {
  return LIVE_PROJECTS.map((p) => ({slug: p.slug}));
}

type Props = {params: Promise<{slug: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const project = projectBySlug((await params).slug);
  return project ? projectMetadata('en', project) : {};
}

export default async function EnglishProjectPage({params}: Props) {
  const project = projectBySlug((await params).slug);
  if (!project) notFound();
  const t = createTranslationFunction('en');

  return (
    <>
      <ProjectDetail lang="en" project={project}/>
      <Footer t={t}/>
    </>
  );
}
