import type SEOImage from './seo-image';

export default interface RelatedContentLink {
  link: string;
  contentClass: 'articles' | 'book' | 'page' | 'post' | 'workshop';
  image: SEOImage;
  title: string;
}
