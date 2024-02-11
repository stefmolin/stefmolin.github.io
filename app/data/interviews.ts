import Interview from '../interfaces/interview';

const INTERVIEWS: Interview[] = [
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
    seeAlso: [
      {
        link: '/articles/5-ways-to-get-started-in-open-source/',
        title: '5 Ways to Get Started in Open Source',
      },
    ],
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
    seeAlso: [
      {
        link: '/articles/introducing-data-morph/',
        title: 'Data Morph: Moving Beyond the Datasaurus Dozen',
      },
    ],
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
    seeAlso: [
      {
        link: '/workshops',
        title: 'Workshops',
      },
    ],
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
