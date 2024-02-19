const now = new Date().toISOString();

const PRIORITIES = {
  newsPage: 0.1,
  feedPage: 0.5,
  blogPost: 0.6,
  workshopsPage: 0.7,
  booksPage: 0.8,
  homePage: 0.9,
  articlePost: 1.0,
};

const PAGE_CONFIGS = [
  {
    regex: /^\/articles\/\w+/,
    priority: PRIORITIES.articlePost,
    changefreq: 'yearly',
  },
  {
    regex: /^\/blog\/\w+/,
    priority: PRIORITIES.blogPost,
    changefreq: 'yearly',
  },
  {
    regex: /^\/(articles|blog)$/,
    priority: PRIORITIES.feedPage,
    changefreq: 'monthly',
  },
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://stefaniemolin.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // not enough pages to warrant this
  priority: 0.5, // default priority
  transform: async (config, path) => {
    let pageChangefreq;
    let pagePriority;

    for (const { regex, priority, changefreq } of PAGE_CONFIGS) {
      if (regex.exec(path)) {
        pagePriority = priority;
        pageChangefreq = changefreq;
        break;
      }
    }

    // Use default transformation for all other cases
    return {
      loc: path,
      changefreq: pageChangefreq ?? config.changefreq,
      priority: pagePriority ?? config.priority,
      lastmod: now,
    };
  },

  // TODO: add slides?
  additionalPaths: async (config) => [
    // {
    //   loc: '/',
    //   changefreq: 'weekly',
    //   priority: PRIORITIES.homePage,
    //   lastmod: now,
    // },
  ],
  exclude: ['/coming-soonish/'],
};
