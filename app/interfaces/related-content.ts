import type SEOImage from './seoImage';

export default interface RelatedContentLink {
  link: string;
  contentClass: 'articles' | 'book' | 'page' | 'post' | 'workshop';
  image: SEOImage;
  title: string;
}
