import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faBook,
  faMapLocationDot,
  faMicrophoneLines,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import { faBell, faCalendarCheck, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import seedrandom from 'seedrandom';
import { useEffect, useState } from 'react';
import { findIndex, maxBy } from 'lodash';
import Announcement from '../components/cards/announcement';
import FollowButtons from '../components/follow';
import ResourceLink from '../components/links/resource-link';
import Layout from '../components/page-layout/layout';
import PostPreview from '../components/posts/post-preview';
import RelatedContentSection from '../components/related-content/related-content';
import Container from '../components/sections/container';
import EvenlySpacedSections from '../components/sections/evenly-spaced-sections';
import PageSection from '../components/sections/page-section';
import SubscribeToNewsletterForm from '../components/subscribe-to-newsletter';
import { FLAGS, HEADSHOT_THUMBNAIL } from '../data/constants';
import CONTENT_LINKS from '../data/content-links';
import { LIVE_EVENTS } from '../data/events';
import { type LivePresentation } from '../interfaces/event';
import type PostType from '../interfaces/post';
import { useCompletedSessions, useNextSessions } from '../lib/hooks/date-filtered-sessions';
import { getAllPosts } from '../lib/posts';

const NEW_ARTICLE_FEATURED_DAYS = 14;

const relatedContent = [
  CONTENT_LINKS.EVENTS,
  CONTENT_LINKS.ARTICLES,
  CONTENT_LINKS.WORKSHOPS,
  CONTENT_LINKS.INTERVIEWS,
  CONTENT_LINKS.DATA_MORPH_ARTICLE,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.TALKS,
  CONTENT_LINKS.BLOG,
  CONTENT_LINKS.TIMELINE,
];

const linkClassName = 'text-slate-600 underline hover:text-black';

const FeaturedPost = ({
  feedType,
  icon,
  post,
  title,
  titleClassName,
}: {
  feedType: 'articles' | 'blog';
  icon: IconDefinition;
  post: PostType;
  title: string;
  titleClassName: string;
}) => (
  <PageSection
    title={
      <>
        <FontAwesomeIcon icon={icon} fixedWidth className="pr-1" />
        {title}*
      </>
    }
    titleClassName={classNames('text-center', titleClassName)}
  >
    <div className="grid grid-cols-1">
      <PostPreview {...post} coverImage={post.ogImage.url} />

      <div className="text-center">
        <small>
          *Be sure to check out the{' '}
          <Link href={`/${feedType}`} className={linkClassName}>
            {feedType} feed
          </Link>{' '}
          or{' '}
          <Link href="/tags" className={linkClassName}>
            search posts by tag
          </Link>{' '}
          for more.
        </small>
      </div>
    </div>
  </PageSection>
);

export default function Home({
  articles,
  latestBlogPost,
}: {
  articles: PostType[];
  latestBlogPost: PostType;
}) {
  const [articleOfTheDay, setArticleOfTheDay] = useState<number | null>(null);

  const nextSessions = useNextSessions(LIVE_EVENTS);

  // make sure slow loads show latest sessions instead of first ones (nextSessions will have all sessions)
  if (nextSessions && articleOfTheDay == null) nextSessions.reverse();

  const pastSessions = useCompletedSessions(LIVE_EVENTS).reverse();

  const showcasedSessions = nextSessions.length ? nextSessions : pastSessions;
  const multipleSessionsShowcased = showcasedSessions.length > 1;

  const subsectionHeaderClassName = 'text-2xl sm:text-3xl md:text-5xl';
  const inviteMeToSpeakCTA = (
    <Announcement>
      <div className="flex flex-col items-center justify-between space-y-4 pb-2 lg:pb-0">
        <h3 className="text-lg text-center sm:text-xl font-bold mt-2">
          Invite me to speak at your event
        </h3>
        <FontAwesomeIcon icon={faMicrophoneLines} fixedWidth size="2x" />
        <p>
          If you would like to invite me to speak at your event or be a guest on your podcast,
          please{' '}
          <Link href="/contact" className="font-bold underline text-slate-600 hover:text-black">
            reach out
          </Link>
          .
        </p>
      </div>
    </Announcement>
  );
  const newsletterCTA = (
    <Announcement>
      <div className="w-full flex flex-col items-center">
        <SubscribeToNewsletterForm />
      </div>
    </Announcement>
  );

  useEffect(() => {
    const now = DateTime.now();
    const publishedArticles = articles.filter((x) => !x.preview && DateTime.fromISO(x.date) <= now);
    const mostRecent = maxBy(publishedArticles, 'date');
    const mostRecentIndex = findIndex(articles, mostRecent);
    setArticleOfTheDay(
      mostRecent != null &&
        DateTime.fromISO(mostRecent.date).diffNow().as('days') <= NEW_ARTICLE_FEATURED_DAYS
        ? mostRecentIndex
        : Math.floor(seedrandom(now.startOf('day'))() * articles.length),
    );
  }, [articles]);

  return (
    <Layout seoPageTitle="Stefanie Molin's website">
      <NextSeo
        title="Stefanie Molin"
        titleTemplate="%s"
        description={
          'Stefanie Molin is a full-stack software engineer, author, and international speaker. ' +
          'This is her personal website and features her articles, workshops, books, events, ' +
          'blog, and newsletter.'
        }
      />
      <Container>
        <div className="-mt-6 mb-20 max-w-5xl mx-auto">
          <EvenlySpacedSections className="my-10">
            <div className="text-center">
              <h1 className="text-6xl sm:text-7xl mb-2">
                <Link className="hover:underline" href="/about">
                  Stefanie Molin
                </Link>
              </h1>
              <div className="flex flex-col items-center justify-center">
                <Link href="/about">
                  <img
                    src={HEADSHOT_THUMBNAIL}
                    className="w-48 h-48 rounded-full object-cover"
                    alt="Picture of Stefanie Molin."
                  />
                </Link>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
                Software Engineer | Author | International Speaker
              </h2>
              <FollowButtons
                className="text-xl sm:text-2xl md:text-3xl px-5"
                withDivider
                dividerClassName="py-5"
              />
              <p className="text-lg sm:text-xl md:text-2xl">
                I help people of all levels improve their computer science and data science skills.
              </p>
              <RelatedContentSection relatedContent={relatedContent} title={null} />
            </div>
            {showcasedSessions.length ? (
              <PageSection
                title={
                  nextSessions.length ? (
                    <>
                      <FontAwesomeIcon icon={faBell} fixedWidth shake />
                      Upcoming Live Session{`${multipleSessionsShowcased ? 's' : ''}`}*
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faMapLocationDot} fixedWidth className="pr-2" />
                      Past Live Sessions*
                    </>
                  )
                }
                titleClassName={classNames('text-center', subsectionHeaderClassName)}
              >
                <div className="flex w-full place-content-around mt-2">
                  <div
                    className={classNames('grid grid-cols-1 gap-2', {
                      'md:grid-cols-2': multipleSessionsShowcased,
                    })}
                  >
                    {showcasedSessions.slice(0, 4).map((session) => {
                      const eventDate = DateTime.fromISO(session.date);
                      return (
                        <div
                          key={`${session.date}-${session.presentation.title}`}
                          className={classNames(
                            'h-auto lg:h-48 max-w-96',
                            'flex flex-col items-center justify-between space-y-4',
                            'bg-white border-2 border-slate-700',
                            'shadow-sm rounded-lg',
                            'p-4 my-4 sm:m-4',
                          )}
                        >
                          <ResourceLink
                            className="text-slate-600 hover:underline"
                            linkClass="internal"
                            resourceLink={session.presentation.link}
                          >
                            <h2
                              className={classNames('text-xl sm:text-2xl text-center', {
                                italic: session.presentation.contentClass === 'book signing',
                              })}
                            >
                              {session.presentation.title}
                            </h2>
                          </ResourceLink>
                          <div className="text-lg sm:text-xl text-center">
                            <div className="flex flex-col sm:flex-row items-center justify-center space-x-1">
                              <div>
                                <FontAwesomeIcon
                                  className="pr-1"
                                  icon={faCalendarCheck}
                                  fixedWidth
                                />
                                {eventDate.toLocaleString()}
                              </div>
                              {articleOfTheDay != null && (
                                <div>({eventDate.toRelativeCalendar({ unit: 'days' })})</div>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row items-center justify-between w-full">
                            <div className="flex flex-col sm:flex-row items-center justify-center space-x-1 text-center">
                              <div>
                                <span className="pr-1">
                                  {session.presentation.contentClass === 'podcast'
                                    ? '🌎'
                                    : FLAGS[(session as LivePresentation).event.location.country]}
                                </span>{' '}
                                {session.event.name}
                              </div>
                              {session.presentation.contentClass !== 'podcast' && (
                                <div className="hidden sm:flex">
                                  ({(session as LivePresentation).event.location.city})
                                </div>
                              )}
                            </div>
                            <p>
                              <FontAwesomeIcon
                                icon={
                                  session.presentation.contentClass === 'book signing'
                                    ? faBook
                                    : faMicrophoneLines
                                }
                                fixedWidth
                              />{' '}
                              {session.presentation.contentClass}
                              <span className="pl-1 inline-flex sm:hidden md:inline-flex lg:hidden">
                                @
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="text-center">
                  <small>
                    *A complete list can be found on the{' '}
                    {nextSessions.length > 4 ? (
                      <Link href={CONTENT_LINKS.UPCOMING_EVENTS.link} className={linkClassName}>
                        upcoming sessions page
                      </Link>
                    ) : (
                      <Link href={CONTENT_LINKS.EVENTS.link} className={linkClassName}>
                        events page
                      </Link>
                    )}
                    .
                  </small>
                </div>
              </PageSection>
            ) : null}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 sm:mx-4">
              {inviteMeToSpeakCTA}
              {newsletterCTA}
            </div>
            {articleOfTheDay != null && (
              <FeaturedPost
                feedType="articles"
                icon={faNewspaper}
                post={articles[Math.max(0, articleOfTheDay)]}
                title="Article of the Day"
                titleClassName={subsectionHeaderClassName}
              />
            )}
            <FeaturedPost
              feedType="blog"
              icon={faRss}
              post={latestBlogPost}
              title="Latest Blog Post"
              titleClassName={subsectionHeaderClassName}
            />
          </EvenlySpacedSections>
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const articles = getAllPosts(
    [
      'title',
      'subtitle',
      'date',
      'slug',
      'author',
      'ogImage',
      'excerpt',
      'tags',
      'duration',
      'preview',
    ],
    'articles',
  ).filter((post) => !post.preview);
  const latestBlogPost = getAllPosts(
    ['title', 'subtitle', 'date', 'slug', 'author', 'ogImage', 'excerpt', 'tags', 'duration'],
    'blog',
  ).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))[0];
  return { props: { articles, latestBlogPost } };
};
