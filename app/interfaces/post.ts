import type Author from './author';

interface PostType {
  slug: string[];
  title: string;
  subtitle?: string;
  date: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
    caption?: string;
  };
  content: string;
  tags: string[];
  duration: number;
  type: string;
  canonical?: string;
  modified?: string;
}

export default PostType;
