import type SEOImage from './seo-image';

export default interface RelatedContentLink {
  link: string;
  contentClass: 'article' | 'book' | 'page' | 'post' | 'workshop';
  image: SEOImage;
  title: string;
}

export interface SeeAlso extends Pick<RelatedContentLink, 'title' | 'contentClass'> {
  slug: string;
}
