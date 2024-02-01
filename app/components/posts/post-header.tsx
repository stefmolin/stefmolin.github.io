import PostPublicationDate from './post-publication-date';
import PostTags from './post-tags';
import PostTitle from './post-title';
import TimeToRead from './time-to-read';

type Props = {
  title: string;
  subtitle?: string;
  date: string;
  tags: string[];
  duration: number;
};

const PostHeader = ({ title, subtitle, date, tags, duration }: Props) => {
  return (
    <>
      <PostTitle title={title} subtitle={subtitle} />
      <div className="block my-6">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex flex-row space-x-4 pr-4">
            <PostPublicationDate date={date} relative />
            <TimeToRead duration={duration} />
          </div>
          <PostTags tags={tags} className="flex-1 lg:text-right" />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
