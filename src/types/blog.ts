export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
}

export interface BlogData {
  en: BlogPost[];
  el: BlogPost[];
}