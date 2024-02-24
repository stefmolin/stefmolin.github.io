import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { NextSeo } from "next-seo";
import Giscus from "@giscus/react";
import Container from "../components/container";
import PostBody from "../components/posts/post-body";
import Header from "../components/header";
import PostHeader from "../components/posts/post-header";
import Layout from "../components/layout";
import { getPostBySlug, getAllPosts } from "../lib/api";
import MoreStories from "../components/posts/more-stories";
import PostTitle from "../components/posts/post-title";
import markdownToHtml from "../lib/markdownToHtml";
import type PostType from "../interfaces/post";
import { HOME_URL } from "../lib/constants";
import SocialShareButtons from "../components/posts/social-share";
import { usePageURL } from "../lib/hooks";

type Props = {
  post: PostType;
  suggestedPosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, suggestedPosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const pageURL = usePageURL();
  const ogImageURL = post.ogImage.url.startsWith("/")
    ? `${HOME_URL}${post.ogImage.url}`
    : post.ogImage.url;

  const socials = (
    <SocialShareButtons
      url={pageURL}
      image={ogImageURL}
      emailSubject={post.title}
      emailBody={`Read this ${
        post.slug[0] === "blog" ? "blog post" : "article"
      } from Stefanie Molin:`}
      hashtags={post.tags}
      postTitle={post.title}
      postSummary={post.excerpt}
      roundedIcons
    />
  );

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle title="Loading…" />
        ) : (
          <>
            <article className="mb-32">
              <NextSeo
                title={post.title}
                description={post.subtitle || post.title}
                canonical={post.canonical}
                openGraph={{
                  type: 'article',
                  url: pageURL,
                  article: {
                    publishedTime: post.date,
                    modifiedTime: post.modified,
                    section: post.type === 'blog' ? 'Blog' : 'Technology',
                    authors: [HOME_URL],
                    tags: post.tags,
                  },
                  images: [
                    {
                      url: ogImageURL,
                      // TODO: consider providing these? could add to the front matter definition
                      // width: 850,
                      // height: 650,
                      alt: post.ogImage.caption,
                    },
                  ],
                }}
              />
              <PostHeader
                title={post.title}
                subtitle={post.subtitle}
                coverImage={post.ogImage.url}
                date={post.date}
                author={post.author}
                tags={post.tags}
                duration={post.duration}
              />
              <div>
                {/* This only shows on larger screens */}
                <div className="hidden lg:block lg:sticky lg:top-5 lg:float-right lg:text-center">
                  Share
                  {socials}
                </div>
                <PostBody content={post.content}>
                  <hr className="lg:hidden" />
                  <div className="flex space-x-2 justify-center content-center z-50 sticky bottom-0 bg-white pt-4 pb-2 lg:hidden">
                    {socials}
                  </div>
                  <hr className="mb-5" />
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
                </PostBody>
              </div>
            </article>
            {suggestedPosts.length > 0 ? (
              <MoreStories posts={suggestedPosts} title="You may also like" />
            ) : null}
            {/* TODO: add previous/next and follow/support/subscribe buttons */}
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
    "title",
    "subtitle",
    "date",
    "slug",
    "author",
    "tags",
    "duration",
    "content",
    "ogImage",
    "type",
    "canonical",
    "modified",
  ];
  const post = getPostBySlug(params.slug, fields);
  const content = await markdownToHtml(post.content || "");

  let suggestedPosts = getAllPosts([...fields, "excerpt"], post.type).filter(
    (x) => x.slug.join() != post.slug.join()
  );
  if (suggestedPosts.length > 0) {
    suggestedPosts.forEach((otherPost) => {
      let tags: string[] = otherPost.tags;
      otherPost.similarity = tags.filter((tag) =>
        post.tags.includes(tag)
      ).length;
    });

    suggestedPosts = suggestedPosts
      .sort((post1, post2) =>
        post1.similarity > post2.similarity || post1.date > post2.date ? -1 : 1
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
  const posts = getAllPosts(["slug"]);

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
