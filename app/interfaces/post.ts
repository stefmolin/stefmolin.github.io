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
  duration: string;
  type: string;
  canonical?: string;
  modified?: string;
  featured?: string[];
}

export default PostType;
