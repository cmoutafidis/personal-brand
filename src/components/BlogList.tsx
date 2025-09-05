import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
  t: (key: string) => string;
}

const BlogList: React.FC<BlogListProps> = ({ posts, t }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {t('blog.no_posts')}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;