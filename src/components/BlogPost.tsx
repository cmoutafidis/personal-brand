import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { BlogPost as BlogPostType } from '@/types/blog';
import { Language } from '@/types/language';

interface BlogPostProps {
  post: BlogPostType;
  t: (key: string) => string;
  language: Language;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, t, language }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'el' ? 'el-GR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    // Convert markdown-style links to HTML
    return content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 dark:text-primary-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <article className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to blog link */}
        <Link
          href={`/${language}/blog`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('blog.back_to_blog')}
        </Link>

        {/* Article header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{t('blog.published_on')} {formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} {t('blog.reading_time')}</span>
            </div>
            <button
              onClick={sharePost}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span>{t('blog.share')}</span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
              {t('blog.tags')}:
            </span>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: formatContent(post.content).replace(/\n\n/g, '</p><p class="mb-6">').replace(/^/, '<p class="mb-6">').replace(/$/, '</p>')
            }}
          />
        </div>

        {/* Call to action */}
        <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            {language === 'en' ? 'Ready to grow your business?' : 'Έτοιμος να μεγαλώσεις την επιχείρησή σου;'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {language === 'en' 
              ? 'Get in touch with us for a free consultation and see how we can help your business succeed online.'
              : 'Επικοινώνησε μαζί μας για μια δωρεάν συνομιλία και δες πώς μπορούμε να βοηθήσουμε την επιχείρησή σου να πετύχει online.'
            }
          </p>
          <Link
            href={`/${language}/contact`}
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
          >
            {language === 'en' ? 'Contact Us' : 'Επικοινωνία'}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;