interface Interview {
  title: string;
  link: string;
  coverImage: string;
  format: 'article' | 'podcast';
  host: string;
  date: string;
  description: {
    text: string;
    source?: string;
  };
  duration: string;
  seeAlso?: {
    title: string;
    link: string;
  }[];
}
export default Interview;
