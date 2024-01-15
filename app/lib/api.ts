import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingDuration from "reading-duration";

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
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: any;
  };

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
