// import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import PostPublicationDate from "./post-publication-date";
import PostTags from "./post-tags";
import TimeToRead from "./time-to-read";

type Props = {
  title: string;
  subtitle?: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string[];
  tags: string[];
  duration: number;
};

const PostPreview = ({
  title,
  subtitle,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
  duration,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          href={{
            pathname: "/[...slug]",
            query: { slug },
          }}
          className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <PostPublicationDate date={date} />
          </div>
          <div className="pl-4 float-right">
            <TimeToRead duration={duration} />
          </div>
        </div>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <div className="float-right">
        <PostTags tags={tags} />
      </div>
      {/* TODO: replace the avatar with tags and maybe the time to read */}
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
};

export default PostPreview;
