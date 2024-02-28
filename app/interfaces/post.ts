interface PostType {
  slug: string[];
  title: string;
  subtitle?: string;
  date: string;
  author: 'Stefanie Molin';
  excerpt: string;
  ogImage: {
    caption?: string;
    height: number;
    url: string;
    width: number;
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
