import classNames from 'classnames';
import ErrorPage from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Giscus from '@giscus/react';
import PostListing from '../components/feeds/post-listing';
import FollowButtons, { type FollowButtonsProps } from '../components/follow';
import Layout from '../components/page-layout/layout';
import PostBody from '../components/posts/post-body';
import PostHeader from '../components/posts/post-header';
import PostTags from '../components/posts/post-tags';
import PostTitle from '../components/posts/post-title';
import SocialShareButtons from '../components/posts/social-share';
import Container from '../components/sections/container';
import { HOME_URL } from '../data/constants';
import type PostType from '../interfaces/post';
import { usePageURL } from '../lib/hooks/page-url';
import { useWindowSize } from '../lib/hooks/window-size';
import { getImageLink } from '../lib/images';
import markdownToHtml from '../lib/markdownToHtml';
import { getAllPosts, getPostBySlug } from '../lib/posts';
import { getSeoImageLink } from '../lib/seo';

type Props = {
  post: PostType;
  suggestedPosts: PostType[];
};

export default function Post({ post, suggestedPosts }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { width } = useWindowSize();

  const ogImageURL = getImageLink(post.ogImage.url);

  const socialButtonsProps = {
    url: usePageURL(),
    image: ogImageURL,
    emailSubject: post.title,
    emailBody: `Read this ${
      post.slug[0] === 'blog' ? 'blog post' : 'article'
    } from Stefanie Molin:`,
    hashtags: post.tags,
    postTitle: post.title,
    postSummary: post.excerpt,
    roundedIcons: true,
  };

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle title="Loading…" />
        ) : (
          <>
            <NextSeo
              title={post.title}
              description={post.subtitle || post.title}
              canonical={post.canonical}
              openGraph={{
                type: 'article',
                article: {
                  publishedTime: post.date,
                  modifiedTime: post.modified,
                  section: post.type === 'blog' ? 'Blog' : 'Technology',
                  authors: [HOME_URL],
                  tags: post.tags,
                },
                images: [
                  {
                    url: getSeoImageLink(
                      ogImageURL,
                      'New York',
                      post.title,
                      ` | ${post.type === 'blog' ? 'blog post' : 'article'} by Stefanie Molin`,
                    ),
                    alt:
                      post.ogImage.caption ?? `Cover image for "${post.title}" by Stefanie Molin.`,
                  },
                ],
              }}
            />
            <article
              className={classNames('-mt-4 -mx-5 sm:mx-auto', {
                'mb-32': suggestedPosts.length === 0,
                'mb-20': suggestedPosts.length > 0,
              })}
            >
              <PostHeader post={post} />
              {/* This only shows on larger screens */}
              <div className="hidden lg:flex sticky top-20 float-right text-center items-start justify-center">
                <div>
                  Share
                  <SocialShareButtons {...socialButtonsProps} iconSize={35} />
                </div>
              </div>
              <PostBody content={post.content}>
                <PostTags tags={post.tags} />
                <div
                  className={classNames(
                    'flex flex-row items-center justify-center space-x-2',
                    'text-xl sm:text-3xl md:text-4xl',
                    'mt-5',
                    'opacity-10',
                  )}
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                </div>
                <div className="flex flex-col items-center justify-center mt-5 mb-10">
                  <p className="md:text-lg lg:text-xl mb-5 text-center">
                    <FontAwesomeIcon icon={faBell} shake className="pr-2" />
                    Never miss a post:{' '}
                    <Link
                      href="/newsletter"
                      className="font-bold underline decoration-yellow-400 hover:text-slate-700"
                    >
                      sign up for my newsletter
                    </Link>
                    .
                  </p>
                  <FollowButtons
                    className="text-lg sm:text-2xl md:text-3xl mx-2 sm:mx-3"
                    feed={post.slug[0] as FollowButtonsProps['feed']}
                    withDivider
                  />
                </div>
                <Giscus
                  id="comments"
                  repo="stefmolin/comments"
                  repoId="R_kgDOLEl3Hw"
                  category="Announcements"
                  categoryId="DIC_kwDOLEl3H84CcaE4"
                  mapping="pathname"
                  strict="1"
                  reactionsEnabled="1"
                  emitMetadata="0"
                  inputPosition="top"
                  theme="light"
                  lang="en"
                  loading="lazy"
                />
                <div className="absolute flex space-x-2 justify-center content-center z-40 sticky bottom-0 bg-white pt-4 pb-2 lg:hidden -mx-px">
                  <SocialShareButtons
                    {...socialButtonsProps}
                    iconSize={width == null || width < 350 ? 25 : 30}
                  />
                </div>
              </PostBody>
            </article>
            {suggestedPosts.length > 0 ? (
              <div className="lg:max-w-5xl -mx-5 sm:mx-auto mb-32">
                <PostListing posts={suggestedPosts} title="You may also like" />
              </div>
            ) : null}
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string[];
  };
};

export async function getStaticProps({ params }: Params) {
  const fields: string[] = [
    'title',
    'subtitle',
    'date',
    'slug',
    'author',
    'tags',
    'duration',
    'content',
    'ogImage',
    'type',
    'canonical',
    'modified',
    'featured',
  ];
  const post = getPostBySlug(params.slug, fields);
  const content = await markdownToHtml(post.content || '');

  let suggestedPosts = getAllPosts([...fields, 'excerpt'], post.type).filter(
    (x) => x.slug.join() != post.slug.join(),
  );
  if (suggestedPosts.length > 0) {
    suggestedPosts.forEach((otherPost) => {
      const tags: string[] = otherPost.tags;
      otherPost.similarity = tags.filter((tag) => post.tags.includes(tag)).length;
    });

    suggestedPosts = suggestedPosts
      .sort((post1, post2) =>
        post1.similarity > post2.similarity || post1.date > post2.date ? -1 : 1,
      )
      .slice(0, 2); // show top x results (second number)
  }

  return {
    props: {
      post: {
        ...post,
        content,
      },
      suggestedPosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
