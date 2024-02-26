import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faBook,
  faMicrophoneLines,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import { faBell, faCalendarCheck, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';
import { DateTime } from 'luxon';
import Link from 'next/link';
import seedrandom from 'seedrandom';
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
import { FLAGS, HEADSHOT } from '../data/constants';
import CONTENT_LINKS from '../data/content-links';
import { LIVE_PRESENTATIONS } from '../data/events';
import type PostType from '../interfaces/post';
import { getNextSessions } from '../lib/events';
import { getAllPosts } from '../lib/posts';

const relatedContent = [
  CONTENT_LINKS.EVENTS,
  CONTENT_LINKS.ARTICLES,
  CONTENT_LINKS.WORKSHOPS,
  CONTENT_LINKS.INTERVIEWS,
  CONTENT_LINKS.DATA_MORPH_ARTICLE,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.TALKS,
  CONTENT_LINKS.BLOG,
];

const FeaturedPost = ({
  feedType,
  icon,
  post,
  title,
  titleClassName,
}: {
  feedType: 'article' | 'blog';
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
          <Link href={`/${feedType}`} className="text-slate-600 underline hover:text-black">
            {feedType} feed
          </Link>{' '}
          or{' '}
          <Link href="/tags" className="text-slate-600 underline hover:text-black">
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
  const articleOfTheDay =
    articles[Math.floor(seedrandom(DateTime.now().startOf('day'))() * articles.length)];
  const nextSessions = getNextSessions(LIVE_PRESENTATIONS);
  const subsectionHeaderClassName = 'text-2xl sm:text-3xl md:text-5xl';
  const inviteMeToSpeakCTA = (
    <Announcement>
      <div className="flex flex-col items-center justify-between space-y-4">
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
  return (
    <Layout>
      <Container>
        <div className="-mt-8 mb-20 max-w-5xl mx-auto">
          <EvenlySpacedSections className="my-10">
            <div className="text-center">
              <h1 className="text-3xl sm:text-5xl md:text-7xl mb-4 md:mb-8">
                <Link className="hover:underline" href="/about">
                  Stefanie Molin
                </Link>
              </h1>
              <div className="flex flex-col items-center justify-center">
                <Link href="/about">
                  <img
                    src={HEADSHOT}
                    className="w-48 h-48 rounded-full object-cover"
                    alt="Picture of Stefanie Molin."
                  />
                </Link>
              </div>
              <h2 className="text-lg sm:text-2xl md:text-4xl mt-4">
                Software Engineer | Author | International Speaker
              </h2>
              <FollowButtons
                className="text-xl md:text-3xl px-5"
                withDivider
                dividerClassName="py-5"
              />
              <p className=" sm:text-xl md:text-2xl">
                I help people of all levels improve their data science and computer science skills.
              </p>
              <RelatedContentSection
                relatedContent={relatedContent.sort((a, b) => (a.title > b.title ? 1 : -1))}
                title={null}
              />
            </div>
            {nextSessions.length > 0 && (
              <PageSection
                title={
                  <>
                    <FontAwesomeIcon icon={faBell} fixedWidth shake />
                    Upcoming Live Sessions*
                  </>
                }
                titleClassName={classNames('text-center', subsectionHeaderClassName)}
              >
                <div className="flex w-full place-content-around mt-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {nextSessions.map((session) => {
                      const eventDate = DateTime.fromISO(session.date);
                      const relativeEventDate = eventDate.toRelative({ unit: ['days', 'hours'] });
                      return (
                        <div
                          key={`${session.date}-${session.presentation.title}`}
                          className={classNames(
                            'h-auto lg:h-48 w-auto lg:w-96',
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
                          <h3 className="text-lg sm:text-xl text-center">
                            <div className="flex flex-col sm:flex-row items-center justify-center space-x-1">
                              <div>
                                <FontAwesomeIcon
                                  className="pr-1"
                                  icon={faCalendarCheck}
                                  fixedWidth
                                />
                                {DateTime.fromISO(session.date).toLocaleString()}
                              </div>
                              <div>({relativeEventDate})</div>
                            </div>
                          </h3>
                          <div className="flex flex-col-reverse sm:flex-row items-center justify-between w-full">
                            <div className="flex flex-col sm:flex-row items-center justify-center space-x-1 text-center">
                              <div>
                                <span className="pr-1">
                                  {FLAGS[session.event.location.country]}
                                </span>{' '}
                                {session.event.name}
                              </div>
                              <div className="hidden sm:flex">({session.event.location.city})</div>
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
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="text-center">
                  <small>
                    *A complete listing of past and upcoming sessions can be found on the{' '}
                    <Link href="/events" className="text-slate-600 underline hover:text-black">
                      events page
                    </Link>
                    .
                  </small>
                </div>
              </PageSection>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 sm:mx-4">
              {inviteMeToSpeakCTA}
              {newsletterCTA}
            </div>
            <FeaturedPost
              feedType="article"
              icon={faNewspaper}
              post={articleOfTheDay}
              title="Article of the Day"
              titleClassName={subsectionHeaderClassName}
            />
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
    ['title', 'subtitle', 'date', 'slug', 'author', 'ogImage', 'excerpt', 'tags', 'duration'],
    'articles',
  );
  const latestBlogPost = getAllPosts(
    ['title', 'subtitle', 'date', 'slug', 'author', 'ogImage', 'excerpt', 'tags', 'duration'],
    'blog',
  ).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))[0];
  return { props: { articles, latestBlogPost } };
};
