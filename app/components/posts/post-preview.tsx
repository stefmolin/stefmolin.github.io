import CoverImage from './cover-image';
import Link from 'next/link';
import PostTags from './post-tags';
import TimeToRead from '../datetime/duration-indicator';
import MarkdownSection from '../sections/markdown-section';

type Props = {
  title: string;
  subtitle?: string;
  coverImage: string;
  excerpt: string;
  slug: string[];
  tags: string[];
  duration: string;
  coverImageCaption?: string;
};

const PostPreview = ({
  title,
  subtitle,
  coverImage,
  excerpt,
  slug,
  tags,
  duration,
  coverImageCaption,
}: Props) => {
  const postTitle = (
    <h3 className="text-2xl md:text-3xl mb-3 leading-snug w-full text-center sm:text-left">
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
  );

  const readTime = (
    <div className="mb-4 whitespace-nowrap text-sm md:text-base flex items-center justify-center sm:justify-start">
      <TimeToRead duration={duration} />
    </div>
  );

  const image = (
    <div className="flex flex-row items-center justify-center w-full md:w-2/3 lg:w-1/3 md:mb-0 mb-4">
      <CoverImage slug={slug} title={title} src={coverImage} caption={coverImageCaption} />
    </div>
  );

  const linkedTags = <PostTags tags={tags} className="flex flex-row text-sm md:text-base" />;

  return (
    <div className="shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col my-5 sm:m-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-5">
        {postTitle}
        {readTime}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-end">
        {image}
        <div className="flex flex-col w-full h-full lg:w-2/3 justify-between">
          <MarkdownSection className="md:text-lg leading-relaxed mb-4 line-clamp-5">
            {excerpt}
          </MarkdownSection>
          {linkedTags}
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
