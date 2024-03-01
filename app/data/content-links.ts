import type RelatedContentLink from '../interfaces/related-content';
import { type SeeAlso } from '../interfaces/related-content';

const CONTENT_LINKS: Record<string, RelatedContentLink> = {
  PANDAS_WORKSHOP: {
    link: '/workshops/pandas-workshop',
    contentClass: 'workshop',
    image: {
      src: 'https://hips.hearstapps.com/elleuk.cdnds.net/16/36/3200x1599/gallery-1473083573-pandas.jpg',
      width: 3200,
      height: 1599,
    },
    title: 'Pandas Workshop',
  },
  DATA_VIZ_WORKSHOP: {
    link: '/workshops/python-data-viz-workshop',
    contentClass: 'workshop',
    image: {
      src: '/assets/workshops/python-data-viz-workshop/cover-image.avif',
      width: 2340,
      height: 1560,
    }, // TODO: change to just the image name and then use the link to find it (i.e. prepend "/assets")
    title: 'Python Data Visualization Workshop',
  },
  PIVOT_AND_PLOT_WITH_PANDAS_ARTICLE: {
    link: '/articles/how-to-pivot-and-plot-data-with-pandas',
    contentClass: 'article',
    image: {
      src: '/assets/articles/how-to-pivot-and-plot-data-with-pandas/cover-image.jpg',
      width: 2880,
      height: 1920,
    },
    title: 'How to Pivot and Plot Data with Pandas',
  },
  DATA_MORPH_ARTICLE: {
    link: '/articles/introducing-data-morph/',
    contentClass: 'article',
    image: {
      src: '/assets/articles/introducing-data-morph/panda-to-star.gif',
      width: 774,
      height: 379,
    },
    title: 'Data Morph',
  },
  DATA_SCIENCE_ARTICLES: {
    link: '/tags/data%20science/',
    contentClass: 'page',
    image: {
      src: '/assets/articles/introducing-data-morph/panda-to-star.gif',
      width: 774,
      height: 379,
    },
    title: 'Data Science Articles',
  },
  DATA_VIZ_ARTICLES: {
    link: '/tags/data%20visualization/',
    contentClass: 'page',
    image: {
      src: '/assets/articles/introducing-data-morph/panda-to-star.gif',
      width: 774,
      height: 379,
    },
    title: 'Data Visualization Articles',
  },
  PANDAS_BOOK: {
    link: '/books/Hands-On-Data-Analysis-with-Pandas-2nd-edition/',
    contentClass: 'book',
    image: { src: '/assets/books/pandas-book-stack.jpg', width: 2520, height: 1897 },
    title: 'Hands-On Data Analysis with Pandas',
  },
  PANDAS_BOOK_1: {
    link: '/books/Hands-On-Data-Analysis-with-Pandas-1st-edition/',
    contentClass: 'book',
    image: {
      src: '/assets/books/hands-on-data-analysis-with-pandas-1st-edition/cover.png',
      width: 250,
      height: 309,
    },
    title: 'Hands-On Data Analysis with Pandas (1st edition)',
  },
  PANDAS_BOOK_2: {
    link: '/books/Hands-On-Data-Analysis-with-Pandas-2nd-edition/',
    contentClass: 'book',
    image: {
      src: '/assets/books/hands-on-data-analysis-with-pandas-2nd-edition/cover.png',
      width: 1050,
      height: 1295,
    },
    title: 'Hands-On Data Analysis with Pandas (2nd edition)',
  },
  BOOKS: {
    link: '/books/',
    contentClass: 'page',
    image: { src: '/assets/books/pandas-book-stack.jpg', width: 2520, height: 1897 },
    title: 'Books',
  },
  EVENTS: {
    link: '/events/',
    contentClass: 'page',
    image: { src: '/assets/events/events-thumbnail.jpg', width: 1653, height: 1264 },
    title: 'Events',
  },
  INTERVIEWS: {
    link: '/interviews/',
    contentClass: 'page',
    image: { src: '/assets/interviews/portrait.jpg', width: 2500, height: 1668 },
    title: 'Interviews',
  },
  WORKSHOPS: {
    link: '/workshops/',
    contentClass: 'page',
    image: {
      src: '/assets/workshops/j1vnusMbXTuyRn8CZWZT--4--6d4uz.jpg',
      width: 1152,
      height: 896,
      alt: 'Conference talks developed by Stefanie Molin.',
    }, // TODO: finalize this image and rename appropriately
    title: 'Workshops',
  },
  TALKS: {
    link: '/talks/',
    contentClass: 'page',
    image: {
      src: '/assets/articles/introducing-data-morph/panda-to-star.gif',
      width: 774,
      height: 379,
      alt: 'Conference talks developed by Stefanie Molin.',
    }, // TODO: finalize this image and rename appropriately
    title: 'Talks',
  },
  ARTICLES: {
    link: '/articles/',
    contentClass: 'page',
    image: { src: '/assets/articles/desk.jpg', width: 1152, height: 896 },
    title: 'Articles',
  },
  BLOG: {
    link: '/blog/',
    contentClass: 'page',
    image: { src: '/assets/articles/desk.jpg', width: 1152, height: 896 }, // TODO: should be travel related probably
    title: 'Travel Blog',
  },
  BOOK_SIGNINGS: {
    link: '/events/book-signings/',
    contentClass: 'page',
    image: {
      src: '/assets/events/book-signings/first-book-signing-line.jpg',
      width: 2016,
      height: 1512,
    },
    title: 'Book Signings',
  },
  CONFERENCES: {
    link: '/events/conferences/',
    contentClass: 'page',
    image: {
      src: '/assets/events/conferences/conference-badges.jpg',
      width: 2967,
      height: 2956,
    },
    title: 'Conferences',
  },
};
export default CONTENT_LINKS;

export const SEE_ALSO_LINKS: Record<string, SeeAlso> = {
  GET_STARTED_IN_OPEN_SOURCE_ARTICLE: {
    title: '5 Ways to Get Started in Open Source',
    slug: '/articles/open-source/5-ways-to-get-started-in-open-source',
    contentClass: 'article',
  },
};
