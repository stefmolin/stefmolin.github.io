export default interface RelatedContentLink {
  link: string;
  contentClass: 'book' | 'interview' | 'page' | 'post' | 'workshop'; // TODO: might not be necessary
  image: string;
  title: string;
}
