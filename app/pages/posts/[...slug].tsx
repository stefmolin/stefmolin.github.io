import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import MoreStories from "../../components/more-stories";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";

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

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle title="Loading…" />
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                subtitle={post.subtitle}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                tags={post.tags}
                duration={post.duration}
              />
              <PostBody content={post.content} />
            </article>
            {suggestedPosts.length > 0 ? (
              <MoreStories posts={suggestedPosts} title="You may also like" />
            ) : null}
            {/* add previews for related ones and also previous and next buttons */}
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
    "coverImage",
  ];
  const post = getPostBySlug(params.slug, fields);
  const content = await markdownToHtml(post.content || "");

  let suggestedPosts = getAllPosts([...fields, "excerpt"]).filter(
    (x) => x.slug != post.slug
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
      .slice(0, 2); // show top results (second number)
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
