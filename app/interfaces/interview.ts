import { type SeeAlso } from './related-content';

interface Interview {
  title: string;
  link: string;
  coverImage: string;
  format: 'article' | 'podcast';
  host: string;
  date: string;
  time?: string;
  description: {
    text: string;
    source?: string;
  };
  duration: string;
  seeAlso?: SeeAlso[];
}
export default Interview;
