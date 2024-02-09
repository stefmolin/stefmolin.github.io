import type RelatedContentLink from '../interfaces/related-content';

const CONTENT_LINKS: Record<string, RelatedContentLink> = {
  PANDAS_WORKSHOP: {
    link: '/workshops/pandas-workshop',
    contentClass: 'workshop',
    image:
      'https://hips.hearstapps.com/elleuk.cdnds.net/16/36/3200x1599/gallery-1473083573-pandas.jpg',
    title: 'Pandas Workshop',
  },
  DATA_VIZ_WORKSHOP: {
    link: '/workshops/python-data-viz-workshop',
    contentClass: 'workshop',
    image: '/assets/workshops/python-data-viz-workshop/cover-image.avif', // TODO: change to just the image name and then use the link to find it (i.e. prepend "/assets")
    title: 'Python Data Visualization Workshop',
  },
  PIVOT_AND_PLOT_WITH_PANDAS_ARTICLE: {
    link: '/articles/how-to-pivot-and-plot-data-with-pandas',
    contentClass: 'post',
    image: '/assets/articles/how-to-pivot-and-plot-data-with-pandas/cover-image.jpg',
    title: 'How to Pivot and Plot Data with Pandas',
  },
  DATA_MORPH_ARTICLE: {
    link: '/articles/introducing-data-morph/',
    contentClass: 'post',
    image: '/assets/articles/introducing-data-morph/panda-to-star.gif',
    title: 'Data Morph',
  },
  DATA_SCIENCE_ARTICLES: {
    link: '/tags/data%20science/',
    contentClass: 'articles',
    image: '/assets/articles/introducing-data-morph/panda-to-star.gif',
    title: 'Data Science Articles',
  },
  DATA_VIZ_ARTICLES: {
    link: '/tags/data%20visualization/',
    contentClass: 'articles',
    image: '/assets/articles/introducing-data-morph/panda-to-star.gif',
    title: 'Data Visualization Articles',
  },
  PANDAS_BOOK: {
    link: '/books/Hands-On-Data-Analysis-with-Pandas-2nd-edition/',
    contentClass: 'book',
    image: '/assets/books/pandas-book-stack.jpg',
    title: 'Hands-On Data Analysis with Pandas',
  },
  BOOKS: {
    link: '/books/',
    contentClass: 'page',
    image: '/assets/books/pandas-book-stack.jpg',
    title: 'Books',
  },
  EVENTS: {
    link: '/events',
    contentClass: 'page',
    image: '/assets/events/events-thumbnail.jpg',
    title: 'Events',
  },
  INTERVIEWS: {
    link: '/interviews',
    contentClass: 'page',
    image: '/assets/interviews/portrait.jpg',
    title: 'Interviews',
  },
  WORKSHOPS: {
    link: '/workshops',
    contentClass: 'page',
    image: '/assets/workshops/j1vnusMbXTuyRn8CZWZT--4--6d4uz.jpg', // TODO: finalize this and rename appropriately
    title: 'Workshops',
  },
  ARTICLES: {
    link: '/articles',
    contentClass: 'page',
    image: '/assets/articles/desk.jpg',
    title: 'Articles',
  },
};
export default CONTENT_LINKS;
