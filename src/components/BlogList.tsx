import type {Language} from '@/types/language';
import type {BlogPost} from '@/types/blog';
import BlogCard from './BlogCard';

export default function BlogList({posts, language, emptyMessage}: {
  posts: BlogPost[];
  language: Language;
  emptyMessage: string;
}) {
  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-8 text-center shadow-sm">
        <p className="text-lg text-gray-600 dark:text-gray-300">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (<BlogCard key={post.id} post={post} language={language}/>))}
    </div>
  );
}
