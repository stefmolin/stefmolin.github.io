import Link from 'next/link';
import CoverImage from './cover-image';
import PostTags from './post-tags';
import type Author from '../../interfaces/author';
import DurationIndicator from '../datetime/duration-indicator';

type Props = {
  title: string;
  subtitle?: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string[];
  tags: string[];
  duration: string;
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
                pathname: '/[...slug]',
                query: { slug },
              }}
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <div className="flex flex-row justify-between items-center">
              <div className="pl-4 float-right">
                <DurationIndicator duration={duration} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <PostTags tags={tags} className="float-right" />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
