import { type Presentation } from '../interfaces/event';
import CONTENT_LINKS from './content-links';
import { TALKS } from './talks';
import { WORKSHOPS } from './workshops';

export const PRESENTATIONS: Record<string, Presentation> = {
  ...TALKS,
  ...WORKSHOPS,
  BOOK_SIGNING_PANDAS_1: {
    contentClass: 'book signing',
    title: CONTENT_LINKS.PANDAS_BOOK_1.title,
    link: CONTENT_LINKS.PANDAS_BOOK_1.link,
  },
  BOOK_SIGNING_PANDAS_2: {
    contentClass: 'book signing',
    title: CONTENT_LINKS.PANDAS_BOOK_2.title,
    link: CONTENT_LINKS.PANDAS_BOOK_2.link,
  },
  DATA_MORPH_SPRINT: {
    contentClass: 'sprint',
    title: 'Data Morph Development Sprint',
    link: 'https://stefaniemolin.com/data-morph/',
  },
};
