import CoverImage from './cover-image';
import PostPublicationDate from './post-publication-date';
import PostTags from './post-tags';
import PostTitle from './post-title';
import TimeToRead from './time-to-read';
import type Author from '../../interfaces/author';

type Props = {
  title: string;
  subtitle?: string;
  coverImage: string;
  date: string;
  author: Author;
  tags: string[];
  duration: number;
};

const PostHeader = ({ title, subtitle, coverImage, date, author, tags, duration }: Props) => {
  return (
    <>
      <PostTitle title={title} subtitle={subtitle} />
      <div className="block my-6">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="space-x-4 pr-4">
            <PostPublicationDate date={date} relative />
            <TimeToRead duration={duration} />
          </div>
          <div className="flex-1 lg:text-right">
            <PostTags tags={tags} />
          </div>
        </div>
      </div>
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
    </>
  );
};

export default PostHeader;
