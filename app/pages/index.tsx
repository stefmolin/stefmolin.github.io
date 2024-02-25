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
import FollowButtons from '../components/follow';
import ResourceLink from '../components/links/resource-link';
import Layout from '../components/page-layout/layout';
import PostPreview from '../components/posts/post-preview';
import RelatedContentSection from '../components/related-content/related-content';
import Container from '../components/sections/container';
import EvenlySpacedSections from '../components/sections/evenly-spaced-sections';
import PageSection from '../components/sections/page-section';
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
}: {
  feedType: 'article' | 'blog';
  icon: IconDefinition;
  post: PostType;
  title: string;
}) => (
  <PageSection
    title={
      <>
        <FontAwesomeIcon icon={icon} fixedWidth className="pr-1" />
        {title}*
      </>
    }
    titleClassName="text-5xl text-center"
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
  return (
    <Layout>
      <Container>
        <div className="-mt-8 mb-20 max-w-5xl mx-auto">
          <EvenlySpacedSections className="my-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl">Stefanie Molin</h1>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={HEADSHOT}
                  className="w-48 h-48 rounded-full object-cover mb-2"
                  alt="Picture of Stefanie Molin."
                />
              </div>
              <h2 className="text-2xl md:text-4xl">
                Software Engineer | Author | International Speaker
              </h2>
              <FollowButtons size="3x" className="px-5" withDivider dividerClassName="py-5" />
              <p className="text-2xl">
                I help people of all levels improve their data science and computer science skills.
              </p>
              <RelatedContentSection
                relatedContent={relatedContent.sort((a, b) => (a.title > b.title ? 1 : -1))}
                title={null}
                relatedContentClassName="pt-2"
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
                titleClassName="text-5xl text-center"
              >
                <div className="flex w-full place-content-around">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {nextSessions.map((session) => {
                      const eventDate = DateTime.fromISO(session.date);
                      const relativeEventDate = eventDate.toRelative({ unit: ['days', 'hours'] });
                      return (
                        <div
                          key={`${session.date}-${session.presentation.title}`}
                          className="bg-white h-60 sm:h-48 w-auto lg:w-96 shadow-sm rounded p-4 m-4 flex flex-col items-center justify-between"
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
                          <h3 className="text-lg sm:text-xl">
                            <FontAwesomeIcon icon={faCalendarCheck} fixedWidth />{' '}
                            {DateTime.fromISO(session.date).toLocaleString()} ({relativeEventDate})
                          </h3>
                          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                            <p>
                              {FLAGS[session.event.location.country]} {session.event.name} (
                              {session.event.location.city})
                            </p>
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
            <FeaturedPost
              feedType="article"
              icon={faNewspaper}
              post={articleOfTheDay}
              title="Article of the Day"
            />
            <FeaturedPost
              feedType="blog"
              icon={faRss}
              post={latestBlogPost}
              title="Latest Blog Post"
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
