import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
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

type Props = {
  post: PostType;
  suggestedPosts: PostType[];
  preview?: boolean;
};

// TODO: look into doing a URL pattern like posts/2024/01/01/slug
// maybe this is overkill? but should at least have something for handling collisions

export default function Post({ post, suggestedPosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | Stefanie Molin`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const socials = (
    <SocialShareButtons
      url={`${HOME_URL}/${post.slug.join("/")}`}
      image={`${HOME_URL}/${post.ogImage.url}`}
      emailSubject={post.title}
      emailBody={`Read this ${post.slug[0]} from Stefanie Molin:`}
      hashtags={post.tags}
      postTitle={post.title}
      postSummary={post.excerpt}
      roundedIcons
    />
  );

  return (
    <Layout pageDescription={post.subtitle || post.title} preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle title="Loading…" />
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={post.ogImage.url} />
                <meta property="article:published_time" content={post.date} />
                {...post.tags.map((tag) => (
                  <meta property="article:tag" content={tag} />
                ))}
                <meta
                  property="article:section"
                  content={post.type === "blog" ? "Blog" : "Technology"}
                />
                {post.modified ? (
                  <meta
                    property="article:modified_time"
                    content={post.modified}
                  />
                ) : null}
                {post.canonical ? (
                  <link rel="canonical" href={post.canonical} />
                ) : null}
              </Head>
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
