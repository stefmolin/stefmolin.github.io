const now = new Date().toISOString();

const PRIORITIES = {
  aboutPages: 0.1,
  tagPages: 0.2,
  interviewsPage: 0.3,
  slidesAndProjects: 0.3,
  eventsPages: 0.4,
  newsletterPages: 0.4,
  feedPage: 0.5,
  blogPost: 0.6,
  workshopsPages: 0.7,
  booksPages: 0.8,
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
  {
    regex: /^\/(about|contact|say-thanks)$/,
    priority: PRIORITIES.aboutPages,
    changefreq: 'yearly',
  },
  {
    regex: /^\/(talks|workshops)\/?/,
    priority: PRIORITIES.workshopsPages,
    changefreq: 'monthly',
  },
  {
    regex: /^\/books\/?\w*/,
    priority: PRIORITIES.booksPages,
    changefreq: 'yearly',
  },
  {
    regex: /^\/tags\/?\w*/,
    priority: PRIORITIES.tagPages,
    changefreq: 'yearly',
  },
  {
    regex: /^\/newsletter\/?\w*/,
    priority: PRIORITIES.newsletterPages,
    changefreq: 'yearly',
  },
  {
    regex: /^\/events\/?/,
    priority: PRIORITIES.eventsPages,
    changefreq: 'weekly',
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
    switch (path) {
      case '/':
        pagePriority = PRIORITIES.homePage;
        pageChangefreq = 'daily';
        break;
      case '/privacy-policy':
        pagePriority = 0.01;
        pageChangefreq = 'yearly';
        break;
      case '/interviews':
        pagePriority = PRIORITIES.interviewsPage;
        pageChangefreq = 'yearly';
        break;
    }

    // Use default transformation for all other cases
    return {
      loc: path,
      changefreq: pageChangefreq == null ? config.changefreq : pageChangefreq,
      priority: pagePriority == null ? config.priority : pagePriority,
      lastmod: now,
    };
  },

  additionalPaths: async (config) => [
    {
      loc: '/data-morph',
      changefreq: 'yearly',
      priority: PRIORITIES.slidesAndProjects,
      lastmod: now,
    },
    {
      loc: '/data-morph-talk',
      changefreq: 'yearly',
      priority: PRIORITIES.slidesAndProjects,
      lastmod: now,
    },
    {
      loc: '/pandas-workshop',
      changefreq: 'yearly',
      priority: PRIORITIES.slidesAndProjects,
      lastmod: now,
    },
    {
      loc: '/python-data-viz-workshop',
      changefreq: 'yearly',
      priority: PRIORITIES.slidesAndProjects,
      lastmod: now,
    },
    {
      loc: '/getting-started-with-open-source-talk/',
      changefreq: 'yearly',
      priority: PRIORITIES.slidesAndProjects,
      lastmod: now,
    },
    {
      loc: '/pre-commit-workshop/',
      changefreq: 'yearly',
      priority: PRIORITIES.slidesAndProjects,
      lastmod: now,
    },
  ],
  exclude: ['/coming-soonish'],
};
