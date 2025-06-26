import Interview from '../interfaces/interview';
import type RelatedContentLink from '../interfaces/related-content';
import CONTENT_LINKS, { SEE_ALSO_LINKS } from './content-links';
import { TALKS } from './talks';

const toSeeAlso = (contentLink: RelatedContentLink) => {
  const { contentClass, link: slug, title } = contentLink;
  return { contentClass, slug, title };
};

const INTERVIEWS: Interview[] = [
  {
    title: 'PyCon Lithuania Special - Stefanie Molin',
    link: 'https://youtu.be/etV2lQxWqM0',
    coverImage: 'https://img.youtube.com/vi/etV2lQxWqM0/sddefault.jpg',
    format: 'podcast',
    host: 'Uncle Data',
    date: '2025-05-19',
    description: {
      text: `This discussion follows Stefanie Molin's evolution from programming novice to core
      open-source developer. Stefanie shares her transition from R to Python and her approach to
      creating accessible learning materials for workshops and presentations.

      She offers practical insights into open-source development, emphasising how quality
      documentation drives tool adoption and user engagement. The conversation addresses challenges
      like balancing contribution time with other responsibilities and staying current with emerging
      libraries.

      Stefanie provides valuable advice for aspiring contributors, highlighting the importance of
      communication skills and understanding user needs. Her reflections on her engineering journey
      and upcoming projects offer a realistic look at the collaborative nature of open-source
      development and the satisfaction that comes from community contribution.`,
      source: 'episode summary',
    },
    duration: '54 m',
    seeAlso: [
      {
        contentClass: 'page',
        slug: TALKS.AST_KEYNOTE.link,
        title: 'PyCon Lithuania Keynote',
      },
      toSeeAlso(CONTENT_LINKS.PRE_COMMIT_ARTICLES),
      SEE_ALSO_LINKS.GET_STARTED_IN_OPEN_SOURCE_ARTICLE,
    ],
  },
  {
    title: 'Episode 482: Pre-Commit Hooks for Python Devs',
    link: 'https://talkpython.fm/episodes/show/482/pre-commit-hooks-for-python-devs',
    coverImage:
      'https://cdn-podcast.talkpython.fm/episodes/youtube_image/EzlzX1OL92w/pre-commit-hooks-for-python-devs.jpg?v=1',
    format: 'podcast',
    host: 'Talk Python To Me',
    date: '2024-10-24',
    time: '15:20:00-04:00',
    description: {
      text: `Do you struggle to make sure your code is always correct before you check it in? What
      about your team members' code? That one person who never wants to run the linter? Tired of
      dealing with tons of conflicts and spurious git changes? You need git pre-commit hooks. We're
      lucky to have Stefanie Molin on this episode who has done a bunch of writing and teaching of
      git hooks.`,
      source: 'episode summary',
    },
    duration: '1h 10m',
    seeAlso: [toSeeAlso(CONTENT_LINKS.PRE_COMMIT_ARTICLES)],
  },
  {
    title: 'Episode 190: Great Starting Points for Contributing to Open Source',
    link: 'https://realpython.com/podcasts/rpp/190/',
    coverImage:
      'https://realpython.com/cdn-cgi/image/width=1920,format=auto/https://files.realpython.com/media/E_190_Podcast_Title.2a7fa5865b10.jpg',
    format: 'podcast',
    host: 'The Real Python Podcast',
    date: '2024-02-02',
    description: {
      text: `What's it like to sit down for your first developer sprint at a conference?
      How do you find an appropriate issue to work on as a new open-source
      contributor? This week on the show, author and software engineer Stefanie
      Molin is here to discuss starting to contribute to open-source projects.`,
      source: 'episode summary',
    },
    duration: '1h 19m',
    seeAlso: [SEE_ALSO_LINKS.GET_STARTED_IN_OPEN_SOURCE_ARTICLE],
  },
  {
    title: 'SDS 675: Pandas for Data Analysis and Visualization',
    link: 'https://www.superdatascience.com/podcast/pandas-for-data-analysis-and-visualization',
    coverImage:
      'https://sds-platform-private.s3-us-east-2.amazonaws.com/uploads/PT675-Main-Image.jpg',
    format: 'podcast',
    host: 'Super Data Science Podcast',
    date: '2023-05-02',
    description: {
      text: `Wrangling data in Pandas, when to use Pandas, Matplotlib or Seaborn, and why
    you should learn to create Python packages: Jon Krohn speaks with guest Stefanie Molin,
    author of Hands-On Data Analysis with Pandas.`,
      source: 'episode summary',
    },
    duration: '1h 09m',
    seeAlso: [toSeeAlso(CONTENT_LINKS.DATA_MORPH_ARTICLE)],
  },
  {
    title: 'PyDev of the Week: Stefanie Molin',
    link: 'https://www.blog.pythonlibrary.org/2022/08/01/pydev-of-the-week-stefanie-molin/',
    coverImage: '/assets/interviews/portrait.jpg',
    format: 'article',
    host: 'Mouse vs. Python',
    date: '2022-08-01',
    description: {
      text: `In her feature as PyDev of the Week, Stefanie Molin discusses how she got started
    with Python, her favorite Python libraries, and what projects she is working on. She also discusses
    the top 3 lessons she learned while writing Hands-On Data Analysis with Pandas.`,
    },
    duration: '6 min',
    seeAlso: [toSeeAlso(CONTENT_LINKS.WORKSHOPS)],
  },
  {
    title: 'Writing the Book on Pandas - KNN Ep. 58',
    link: 'https://www.youtube.com/watch?v=Pb5CfWa8yUU',
    coverImage: 'https://i3.ytimg.com/vi/Pb5CfWa8yUU/maxresdefault.jpg',
    format: 'podcast',
    host: "Ken's Nearest Neighbors Podcast",
    date: '2021-07-28',
    description: {
      text: `During her guest episode on the Ken's Nearest Neighbor's Podcast, Stefanie Molin
    talks about how she got started in data, the importance of domain knowledge, and what data
    professionals could learn from software engineers. On a personal side, Ken and Stefanie discuss
    balancing work and studies, the process of writing a book, and the importance of accountability
    and seeking feedback.`,
    },
    duration: '1h 17m',
  },
  {
    title: 'Interview with Stefanie Molin',
    link: 'https://partnerships.packt.com/interview-with-stefanie-molin/',
    coverImage: '/assets/interviews/portrait.jpg',
    format: 'article',
    host: 'Packt',
    date: '2021-04-27',
    description: {
      text: `In this written interview, Stefanie Molin shares her experience writing the second edition
    of Hands-On Data Analysis with Pandas (published by Packt on April 29, 2021).`,
    },
    duration: '4 min',
  },
  {
    title:
      "A Conversation with Bloomberg's Stefanie Molin about her new book on Data Science, Python and Pandas",
    link: 'https://www.bloomberg.com/company/stories/conversation-bloombergs-stefanie-molin-data-science-python-pandas-recent-book/',
    coverImage:
      'https://assets.bbhub.io/image/v1/resize?width=auto&type=webp&url=https://assets.bbhub.io/company/sites/51/2019/08/IMG_4612.jpeg',
    format: 'article',
    host: 'Tech At Bloomberg',
    date: '2019-08-22',
    description: {
      text: `Stefanie Molin recently wrote the technical book Hands-On Data Analysis with Pandas
      (published by Packt on July 26, 2019). Her work shows readers how to analyze data and get started
      with machine learning in Python using the powerful pandas library. She's a software engineer and
      data scientist, and a member of the Security Data Science team at Bloomberg that researches and
      develops solutions using data and machine learning to help improve and automate Bloomberg's
      information security processes. In her job, Stefanie focuses on identifying and answering
      security-related questions using data and developing software to solve them. She holds a bachelor's
      degree in Operations Research from Columbia University's Fu Foundation School of Engineering and
      Applied Science (CUSEAS), with minors in Economics, and Entrepreneurship and Innovation.`,
      source: 'article introduction',
    },
    duration: '7 min',
  },
];
export default INTERVIEWS;
