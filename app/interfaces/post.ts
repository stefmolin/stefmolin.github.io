import type Author from "./author";

type PostType = {
  slug: string[];
  title: string;
  subtitle?: string;
  date: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags: string[];
  duration: number;
  type: string;
  canonical?: string;
  modified?: string;
};

export default PostType;
