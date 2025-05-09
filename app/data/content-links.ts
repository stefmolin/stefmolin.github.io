import type RelatedContentLink from '../interfaces/related-content';
import { type SeeAlso } from '../interfaces/related-content';
import { HOME_URL } from './constants';

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
      src: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80',
      width: 2340,
      height: 1560,
    }, // TODO: change to just the image name and then use the link to find it (i.e. prepend "/assets")
    title: 'Python Data Visualization Workshop',
  },
  PRE_COMMIT_WORKSHOP: {
    link: '/workshops/pre-commit-workshop',
    contentClass: 'workshop',
    image: {
      src: `${HOME_URL}/pre-commit-workshop/images/cover.jpg`,
      width: 1344,
      height: 768,
    },
    title: 'Pre-Commit Hooks Workshop',
  },
  PIVOT_AND_PLOT_WITH_PANDAS_ARTICLE: {
    link: '/articles/data-science/how-to-pivot-and-plot-data-with-pandas',
    contentClass: 'article',
    image: {
      src: '/assets/articles/data-science/how-to-pivot-and-plot-data-with-pandas/cover-image.jpg',
      width: 2880,
      height: 1920,
    },
    title: 'How to Pivot and Plot Data with Pandas',
  },
  PRE_COMMIT_ARTICLES: {
    link: '/articles/devx/pre-commit/',
    contentClass: 'page',
    image: {
      src: '/assets/articles/devx/pre-commit/setup-guide/cover.jpg',
      width: 1200,
      height: 691,
    },
    title: 'Pre-Commit Articles',
  },
  DATA_MORPH_ARTICLE: {
    link: '/articles/data-science/introducing-data-morph/',
    contentClass: 'article',
    image: {
      src: '/assets/articles/data-science/introducing-data-morph/panda-to-star.gif',
      width: 774,
      height: 379,
    },
    title: '[Project] Data Morph',
  },
  EXIF_STRIPPER_ARTICLE: {
    link: '/articles/devx/pre-commit/exif-stripper/',
    contentClass: 'article',
    image: {
      src: 'https://github.com/stefmolin/exif-stripper/raw/main/logo.png',
      width: 269,
      height: 176,
    },
    title: '[Project] exif-stripper',
  },
  DATA_SCIENCE_ARTICLES: {
    link: '/tags/data%20science/',
    contentClass: 'page',
    image: {
      src: '/assets/articles/data-science/introducing-data-morph/panda-to-star.gif',
      width: 774,
      height: 379,
    },
    title: 'Data Science Articles',
  },
  DATA_VIZ_ARTICLES: {
    link: '/tags/data%20visualization/',
    contentClass: 'page',
    image: {
      src: '/assets/articles/data-science/introducing-data-morph/panda-to-star.gif',
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
      src: '/assets/workshops/thumbnail.jpg',
      width: 1152,
      height: 896,
      alt: 'Conference talks developed by Stefanie Molin.',
    },
    title: 'Workshops',
  },
  TALKS: {
    link: '/talks/',
    contentClass: 'page',
    image: {
      // TODO: should this be the SEO image also?
      src: '/assets/talks/thumbnail.jpg',
      width: 300,
      height: 225,
      alt: 'Conference talks developed by Stefanie Molin.',
    },
    title: 'Talks',
  },
  ARTICLES: {
    link: '/articles/',
    contentClass: 'page',
    image: {
      // TODO: should this be the SEO image also?
      src: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      width: 400,
      height: 311,
    },
    title: 'Articles',
  },
  BLOG: {
    link: '/blog/',
    contentClass: 'page',
    image: { src: '/assets/blog/thumbnail.jpg', width: 400, height: 311 },
    title: 'Journal',
  },
  TRAVEL_BLOG: {
    link: '/blog/travel/',
    contentClass: 'page',
    image: { src: '/assets/blog/travel/travel-blog.jpg', width: 1152, height: 896 },
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
  TIMELINE: {
    link: '/timeline/',
    contentClass: 'page',
    image: {
      src: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3d0aHxlbnwwfHwwfHx8MA%3D%3D',
      width: 800,
      height: 534,
    },
    title: 'Timeline',
  },
  UPCOMING_EVENTS: {
    link: '/events/upcoming/',
    contentClass: 'page',
    image: {
      src: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3d0aHxlbnwwfHwwfHx8MA%3D%3D',
      width: 800,
      height: 532,
    },
    title: 'Upcoming Events',
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
