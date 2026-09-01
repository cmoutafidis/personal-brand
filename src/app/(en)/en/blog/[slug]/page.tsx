import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import BlogPost from '@/components/BlogPost';
import Footer from '@/components/Footer';
import {blogData} from '@/data/blogs';
import {blogPostSchema, buildBlogPostMetadata} from '@/lib/blogSchema';
import {createTranslationFunction} from '@/translations';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogData.en.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const post = blogData.en.find((entry) => entry.slug === slug);
  if (!post) return {title: 'Post not found'};
  // Canonical and hreflang come from the post object — see src/lib/blogSchema.ts. Do NOT call
  // buildAlternates() here: it always emits both locales, and these posts have no English twin.
  return buildBlogPostMetadata(post, 'en');
}

export default async function Page({params}: Props) {
  const {slug} = await params;
  const post = blogData.en.find((entry) => entry.slug === slug);
  if (!post) notFound();
  const t = createTranslationFunction('en');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(blogPostSchema(post, 'en'))}}
      />
      <BlogPost post={post} language="en"/>
      <Footer t={t}/>
    </>
  );
}
