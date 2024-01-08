import Link from "next/link";
// import Avatar from "./avatar";
import CoverImage from "./cover-image";
import PostPublicationDate from "./post-publication-date";
import PostTags from "./post-tags";
import TimeToRead from "./time-to-read";
import type Author from "../interfaces/author";

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

const HeroPost = ({
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
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              href={{
                pathname: "/posts/[...slug]",
                query: { slug },
              }}
              className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <div className="flex flex-row justify-between items-center">
              <div>
                <PostPublicationDate date={date} />
              </div>
              <div className="pl-4 float-right">
                <TimeToRead duration={duration} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <div className="float-right">
            <PostTags tags={tags} />
          </div>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
