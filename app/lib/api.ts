import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingDuration from "reading-duration";
import { Feed as RssFeed } from "feed";
import { DateTime } from "luxon";
import { HOME_URL } from "./constants";

type Items = {
  [key: string]: any;
};

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(category: string = "") {
  return fs
    .readdirSync(join(postsDirectory, category), { recursive: true })
    .map((x) => x.toString())
    .filter((file) => file.endsWith(".md"))
    .map((x) => x.split("/"));
}

export function getPostBySlug(
  slug: string[],
  fields: string[] = [],
  category: string = ""
) {
  const realSlug = (category ? [category, ...slug] : slug)
    .join("/")
    .replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  let { data, content } = matter(fileContents);

  // allow shorthand for referencing images by using /posts-assets and the assets value in front matter
  if (data.assets) {
    content = content.replaceAll(
      /\(\/post-assets(\/[\w\.-]+)\)/g,
      `(${data.assets}$1)`
    );
    data.ogImage.url = data.ogImage.url.replace(/^\/post-assets/, data.assets);
  }

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug.split("/");
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "duration") {
      items[field] = readingDuration(content, {
        wordsPerMinute: 250,
        emoji: false,
      });
    }
    if (field == "type") {
      items[field] = realSlug.split("/")[0];
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[] = [], type: string = "") {
  const slugs = getPostSlugs(type);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, type))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export const getFeed = (
  postType: string,
  feedTitle: string,
  feedDescription: string
) => {
  const allPosts = getAllPosts(
    [
      "title",
      "subtitle",
      "date",
      "slug",
      "author",
      "ogImage",
      "excerpt",
      "tags",
      "duration",
    ],
    postType
  );

  generateRssFeed(postType, feedTitle, allPosts);

  return {
    props: {
      allPosts,
      kind: postType,
      title: feedTitle,
      description: feedDescription,
    },
  };
};

export const generateRssFeed = async (
  feedType: string,
  feedTitle: string,
  posts: Items[]
) => {
  const rssFeed = new RssFeed({
    title: `Stefanie Molin's ${feedTitle}`,
    description: "Stay up to date with my latest posts.",
    id: `${HOME_URL}/${feedType}`,
    link: `${HOME_URL}/${feedType}`,
    copyright: `Copyright 2019-${DateTime.now().year}, Stefanie Molin`,
    language: "en",
    // TODO: image: `${HOME_URL}/logo.png`,
    // TODO: favicon: `${HOME_URL}/favicon.png`,
    author: {
      name: "Stefanie Molin",
      // email: "todo@example.com",
      link: HOME_URL,
    },
    feedLinks: {
      atom: `${HOME_URL}/feeds/${feedType}-atom.xml`,
      json: `${HOME_URL}/feeds/${feedType}.json`,
    },
  });

  rssFeed.addCategory(feedType);
  if (feedType === "articles") {
    [
      "technology",
      "data science",
      "computer science",
      "public speaking",
    ].forEach((category) => rssFeed.addCategory(category));
  }

  const localImageRegex = /^\/assets/;

  posts.forEach((post) => {
    const url = `${HOME_URL}/${post.slug.join("/")}`;
    rssFeed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      date: DateTime.fromISO(post.date).toJSDate(),
      category: post.slug.length > 1 ? post.slug[1] : null,
      image: localImageRegex.exec(post.ogImage.url)
        ? post.ogImage.url.replace(localImageRegex, HOME_URL)
        : post.ogImage.url,
    });
  });

  fs.writeFileSync(`./public/feeds/${feedType}-rss.xml`, rssFeed.rss2());
  fs.writeFileSync(`./public/feeds/${feedType}-atom.xml`, rssFeed.atom1());
  fs.writeFileSync(`./public/feeds/${feedType}.json`, rssFeed.json1());
};
