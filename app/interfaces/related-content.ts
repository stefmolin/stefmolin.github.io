export default interface RelatedContentLink {
  link: string;
  contentClass: 'articles' | 'book' | 'page' | 'post' | 'workshop';
  image: string;
  title: string;
}
