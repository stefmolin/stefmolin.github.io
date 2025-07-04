import Link from 'next/link';
import { type TimelineEntryProps } from '../components/timeline/timeline-entry';
import { GITHUB_PROFILE } from './constants';
import { LIVE_EVENTS } from './events';
import INTERVIEWS from './interviews';

const COUNTRY_SHORTHAND = {
  'United Arab Emirates': 'UAE',
  'United Kingdom': 'UK',
  'United States of America': 'USA',
};

// NOTE: any new translations will eventually show up here:
// https://search.worldcat.org/search?q=au%3D%22Molin%2C+Stefanie%22

const TIMELINE_ITEMS: TimelineEntryProps[] = [
  {
    date: '2025-05-20',
    eventType: 'code',
    title: 'Docstringify 1.0.0 release',
    description:
      'Flag missing docstrings and, optionally, generate them from signatures and type annotations.',
    link: {
      linkClass: 'external',
      resourceLink: `${GITHUB_PROFILE}/docstringify`,
      text: 'View repository',
    },
  },
  {
    date: '2025-05-13',
    eventType: 'award',
    title: 'ODSC Speaker Impact Award',
    description: "One of six speakers honored during ODSC's 10-year anniversary celebration.",
    link: {
      linkClass: 'external',
      resourceLink:
        'https://opendatascience.com/celebrating-our-instructors-with-the-odsc-east-2025-speaker-impact-awards/',
      text: 'View announcement',
    },
  },
  {
    date: '2025-04-16',
    eventType: 'volunteer',
    title: 'Joined PyCon Portugal 2025 program committee',
  },
  {
    date: '2025-04-02',
    eventType: 'code',
    title: 'First release of Docstringify',
    description:
      'Flag missing docstrings and, optionally, generate them from signatures and type annotations.',
    link: {
      linkClass: 'external',
      resourceLink: `${GITHUB_PROFILE}/docstringify`,
      text: 'View repository',
    },
  },
  {
    date: '2025-03-28',
    eventType: 'volunteer',
    title: 'Became a proposal reviewer for EuroSciPy 2025',
  },
  {
    date: '2025-02-17',
    eventType: 'code',
    title: 'Data Morph v0.3.0 release',
    link: {
      linkClass: 'external',
      resourceLink: `${GITHUB_PROFILE}/data-morph`,
      text: 'View repository',
    },
  },
  {
    date: '2024-11-21',
    eventType: 'interview',
    title: 'ODSC West 2024 Minisodes: Part 2',
    description: "ODSC's Ai X Podcast",
    link: {
      linkClass: 'external',
      resourceLink:
        'https://castbox.fm/episode/ODSC-West-2024-Minisodes%3A-Part-2-id5754266-id756453327',
      text: 'Listen to podcast',
    },
  },
  {
    date: '2024-07-13',
    eventType: 'code',
    where: 'Prague, Czechia',
    title: 'Data Morph sprint at EuroPython 2024',
    description:
      'After participating in several sprints around the world, I figured I would try my hand at running one.',
    link: {
      linkClass: 'internal',
      resourceLink: {
        contentClass: 'blog',
        slug: '/blog/travel/2024/europython/',
      },
      text: 'Read blog post',
    },
  },
  {
    date: '2024-06-14',
    eventType: 'volunteer',
    title: 'Joined PyCon Portugal 2024 program committee',
    link: {
      linkClass: 'internal',
      resourceLink: {
        contentClass: 'blog',
        slug: '/blog/updates/2024/conference-program-committee/',
      },
      text: 'Read blog post',
    },
  },
  {
    date: '2024-04-30',
    eventType: 'code',
    title: (
      <>
        Became <code>numpydoc</code> core developer
      </>
    ),
    description: 'Accepted an invitation to join as a core developer',
    link: {
      linkClass: 'external',
      resourceLink: 'https://github.com/numpy/numpydoc',
      text: 'View repository',
    },
  },
  {
    date: '2024-03-10',
    eventType: 'code',
    title: 'Website redesign goes live',
    description: 'Rebuilt from scratch using Next.js (React) and TypeScript',
  },
  {
    date: '2024-01-17',
    eventType: 'code',
    title: (
      <>
        First release of <code>exif-stripper</code>
      </>
    ),
    description:
      'A pre-commit hook to remove image metadata before it makes it into version control.',
    link: {
      linkClass: 'external',
      resourceLink: `${GITHUB_PROFILE}/exif-stripper`,
      text: 'View repository',
    },
  },
  {
    date: '2023-09-24',
    eventType: 'code',
    title: 'Data Morph v0.2.0 release',
    link: {
      linkClass: 'external',
      resourceLink: 'https://stefaniemolin.com/data-morph',
      text: 'View project',
    },
  },
  {
    date: '2023-06-29',
    eventType: 'code',
    title: (
      <>
        <code>numpydoc-validation</code> pre-commit hook
      </>
    ),
    description: (
      <>
        The pre-commit hook I developed is officially merged into the <code>numpydoc</code>{' '}
        codebase.
      </>
    ),
    link: {
      linkClass: 'external',
      resourceLink: 'https://numpydoc.readthedocs.io/en/latest/validation.html',
      text: 'View documentation',
    },
  },
  {
    date: '2023-06-01', // https://baike.baidu.com/item/Pandas%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/63660283?fr=aladdin
    eventType: 'book',
    title: <>Hands-On Data Analysis with Pandas &ndash; Chinese Edition</>,
    description: 'The Simplified Chinese edition is published.',
    link: {
      linkClass: 'internal',
      resourceLink: {
        contentClass: 'book',
        slug: 'Hands-On-Data-Analysis-with-Pandas-2nd-edition',
      },
      text: 'Learn more',
    },
  },
  {
    date: '2023-04-01',
    eventType: 'code',
    title: 'First Data Morph release',
    description: (
      <>
        <code>data-morph-ai</code> is officially available on PyPI
      </>
    ),
    link: {
      linkClass: 'external',
      resourceLink: 'https://stefaniemolin.com/data-morph',
      text: 'View project',
    },
  },
  {
    date: '2022-12-16',
    eventType: 'education',
    title: "Earned Master's degree in Computer Science",
  },
  {
    date: '2022-11-30', // http://www.acornpub.co.kr/book/data-analysis-pandas
    eventType: 'book',
    title: <>Hands-On Data Analysis with Pandas &ndash; Korean Edition</>,
    description: 'The Korean edition is published.',
    link: {
      linkClass: 'internal',
      resourceLink: {
        contentClass: 'book',
        slug: 'Hands-On-Data-Analysis-with-Pandas-2nd-edition',
      },
      text: 'Learn more',
    },
  },
  {
    date: '2022-07-16',
    eventType: 'code',
    title: 'Participated in my first open source sprint',
    description: (
      <>
        Worked with <code>scikit-learn</code> maintainers at EuroPython
      </>
    ),
    link: {
      linkClass: 'internal',
      resourceLink: {
        contentClass: 'article',
        slug: '/articles/open-source/5-ways-to-get-started-in-open-source/',
      },
      text: 'Read about my experience',
    },
  },
  {
    date: '2021-07-24',
    eventType: 'code',
    title: 'First open source code contribution',
    description: (
      <>
        Added <code>refline()</code> method to Seaborn's <code>FacetGrid</code> and{' '}
        <code>JointGrid</code> plot types
      </>
    ),
    link: {
      linkClass: 'external',
      resourceLink: 'https://github.com/mwaskom/seaborn/pull/2620',
      text: 'View pull request',
    },
  },
  {
    date: '2021-04-26',
    eventType: 'book',
    title: 'Hands-On Data Analysis with Pandas (2nd Edition)',
    description: 'The second edition is published.',
    link: {
      linkClass: 'internal',
      resourceLink: {
        contentClass: 'book',
        slug: 'Hands-On-Data-Analysis-with-Pandas-2nd-edition',
      },
      text: 'Learn more',
    },
  },
  {
    date: '2019-07-19',
    eventType: 'book',
    title: 'Hands-On Data Analysis with Pandas',
    description: 'My first book is published.',
    link: {
      linkClass: 'internal',
      resourceLink: {
        contentClass: 'book',
        slug: 'Hands-On-Data-Analysis-with-Pandas-1st-edition',
      },
      text: 'Learn more',
    },
  },
];

const TIMELINE_EVENTS: TimelineEntryProps[] = LIVE_EVENTS.map((entry) => {
  const { date, event, presentation } = entry;

  let eventType: TimelineEntryProps['eventType'];
  if (event.eventClass === 'podcast') eventType = 'interview';
  else if (presentation.contentClass === 'book signing') eventType = 'book';
  else if (presentation.contentClass === 'sprint') eventType = 'code';
  else eventType = 'presentation';

  let eventName = event.name;
  if (event.eventClass === 'conference') eventName += ` ${date.slice(0, 4)}`;

  const link: string = event['link'] || presentation.link;
  let hasArticle = false;
  let hasBlogPost = false;
  let resourceLink;
  if (link.startsWith('/blog/') || link.startsWith('/articles/')) {
    let contentClass = link.slice(1).split('/')[0];
    if (contentClass.endsWith('s')) contentClass = contentClass.slice(0, contentClass.length - 1);

    if (contentClass === 'blog') hasBlogPost = true;
    else if (contentClass === 'article') hasArticle = true;

    resourceLink = {
      contentClass,
      slug: link,
    };
  } else {
    resourceLink = link;
  }

  let linkText;
  if (resourceLink) {
    if (event.eventClass === 'podcast') linkText = 'Watch live stream';
    else if (hasArticle) linkText = 'Read article';
    else if (hasBlogPost) linkText = 'Read blog post';
    else linkText = 'More information';
  }

  const getLocation = (event: (typeof entry)['event']) => {
    if (event.location) {
      const country = COUNTRY_SHORTHAND[event.location.country] ?? event.location.country;
      const location = `${event.location.city}, ${country}`;
      return event.virtual ? `${location} (virtual)` : location;
    }
    return undefined;
  };

  return {
    date,
    time: entry['time'],
    where: getLocation(event),
    eventType,
    title: (
      <Link className="hover:underline" href={presentation.link}>
        {presentation.title}
      </Link>
    ),
    description: `${eventName} ${presentation.subclass ?? presentation.contentClass}`,
    link: {
      linkClass: event.eventClass === 'podcast' ? 'external' : 'internal',
      resourceLink,
      text: linkText,
    },
  };
});

const TIMELINE_INTERVIEWS: TimelineEntryProps[] = INTERVIEWS.map((interview) => {
  const { date, format, host, link, time, title } = interview;
  return {
    date,
    eventType: 'interview',
    title,
    time,
    description: host,
    link: {
      linkClass: 'external',
      resourceLink: link,
      text: `${format === 'podcast' ? 'Listen to' : 'Read'} ${format}`,
    },
  };
});

TIMELINE_ITEMS.push(...TIMELINE_EVENTS, ...TIMELINE_INTERVIEWS);

export default TIMELINE_ITEMS;
