import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createTranslationFunction } from '@/translations';
import { blogData } from '@/data/blogs';
import BlogPost from '@/components/BlogPost';
import Footer from '@/components/Footer';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.en.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.en.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Fiji Solutions',
    };
  }

  return {
    title: `${post.title} | Fiji Solutions Blog`,
    description: post.excerpt,
    keywords: `${post.tags.join(', ')}, Fiji Solutions, software development, Thessaloniki`,
    alternates: {
      canonical: `https://www.fijisolutions.net/en/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://www.fijisolutions.net/en/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: ['Fiji Solutions'],
      tags: post.tags,
      images: [
        {
          url: 'https://www.fijisolutions.net/fijisolutions.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@fiji_solutions',
      title: post.title,
      description: post.excerpt,
      images: ['https://www.fijisolutions.net/fijisolutions.png'],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const language = 'en';
  const t = createTranslationFunction(language);
  const post = blogData[language].find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <BlogPost post={post} t={t} language={language} />
      <Footer t={t} />
    </div>
  );
}