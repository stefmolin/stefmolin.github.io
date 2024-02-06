import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from '../components/container';
import Header from '../components/header';
import Layout from '../components/layout';
import { usePageURL } from '../lib/hooks';
import { getImageLink } from '../lib/images';
import { Interview } from '../lib/interview';
import {
  faArrowUpRightFromSquare,
  faNewspaper,
  faPodcast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EXTERNAL_LINK_PROPS } from '../data/constants';
import PublicationDate from '../components/datetime/publication-date';
import DurationIndicator from '../components/datetime/duration-indicator';

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

export default function Interviews() {
  const preview = false;
  const pageTitle = 'Interviews';

  const insertBookLinks = ({ text, source }: Interview['description'], dateString: string) => {
    const pTagClassName = 'text-left text-pretty';

    const sourceText = source != null ? ` (This description comes from the ${source}.)` : '';
    const description = `${text}${sourceText}`;

    const pattern = /Hands-On Data Analysis with Pandas/;
    const match = pattern.exec(description);
    if (match == null) return <p className={pTagClassName}>{description}</p>;
    const [before, after] = description.split(pattern);

    const edition = parseInt(dateString.slice(0, 4)) < 2020 ? '1st' : '2nd';

    return (
      <p className={pTagClassName}>
        {before}
        <Link
          href={{
            pathname: `/books/Hands-On-Data-Analysis-with-Pandas-${edition}-edition`,
          }}
          className="text-slate-500"
        >
          <em>Hands-On Data Analysis with Pandas</em>
        </Link>
        {after}
      </p>
    );
  };

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title={pageTitle}
          description="A listing of interviews with Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink('/assets/interviews/portrait.jpg'),
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
                alt: 'Photo of Stefanie Molin taken by Alex Guevara (@agnyphoto on Instagram) after her first book came out.',
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl">{pageTitle}</h1>
          {/* {pageSubtitle != null ? <h2 className="text-xl pt-2">{pageSubtitle}</h2> : null} */}
          <div className="grid grid-cols-1 sm:gap-y-10">
            {INTERVIEWS.map(
              ({ link, coverImage, format, host, date, title, description, duration, seeAlso }) => (
                <div
                  key={title}
                  className="shadow-sm hover:shadow-lg transition-shadow duration-200 px-6 py-4 flex flex-col m-5"
                >
                  <div className="flex flex-col justify-evenly space-y-5">
                    <div className="flex flex-col items-start">
                      <a href={link} {...EXTERNAL_LINK_PROPS}>
                        <h3 className="text-xl hover:underline text-pretty">
                          {title}
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size="sm"
                            fixedWidth
                            className="pl-2"
                          />
                        </h3>
                      </a>
                      <div className="flex flex-row items-center">
                        <FontAwesomeIcon
                          icon={format === 'podcast' ? faPodcast : faNewspaper}
                          fixedWidth
                          className="pr-1"
                        />
                        <h4 className="text-slate-600">{host}</h4>
                      </div>
                    </div>
                    <div>
                      <a href={link} {...EXTERNAL_LINK_PROPS}>
                        <img
                          src={coverImage}
                          alt={title}
                          className="md:float-left md:mr-5 mb-2 mx-auto sm:h-60 object-cover"
                        />
                      </a>
                      <div className="md:-mt-1">{insertBookLinks(description, date)}</div>
                      {seeAlso != null ? (
                        <>
                          <br />
                          <p>
                            See also:
                            {seeAlso.map(({ title, link }) => {
                              const linkClassName = 'text-slate-500 pl-1';
                              if (link.startsWith('/')) {
                                return (
                                  <Link
                                    key={title}
                                    href={{
                                      pathname: link,
                                    }}
                                    className={linkClassName}
                                  >
                                    {title}
                                  </Link>
                                );
                              }
                              return (
                                <a
                                  key={title}
                                  href={link}
                                  className={linkClassName}
                                  {...EXTERNAL_LINK_PROPS}
                                >
                                  {title}
                                </a>
                              );
                            })}
                          </p>
                        </>
                      ) : null}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                      <PublicationDate date={date} />
                      <div className="flex flex-row items-center">
                        <DurationIndicator
                          duration={`${duration} ${format === 'podcast' ? 'listen' : 'read'}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
