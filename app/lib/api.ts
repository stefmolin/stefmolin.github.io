import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingDuration from "reading-duration";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(category: string = "") {
  return fs
    .readdirSync(join(postsDirectory, category), { recursive: true })
    .filter((file) => file.toString().endsWith(".md"))
    .map((x) => x.toString().split("/"));
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

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], category: string = "") {
  const slugs = getPostSlugs(category);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, category))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
