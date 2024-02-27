import PostPublicationDate from '../datetime/publication-date';
import PostTitle from './post-title';
import TimeToRead from '../datetime/duration-indicator';
import Featured from './featured';
import type PostType from '../../interfaces/post';

const PostHeader = ({
  post,
}: {
  post: Pick<PostType, 'title' | 'subtitle' | 'date' | 'duration' | 'featured' | 'tags'>;
}) => {
  const { title, subtitle, date, tags, duration, featured } = post;
  return (
    <>
      <PostTitle title={title} subtitle={subtitle} />
      <div className="block my-6">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex flex-row space-x-4 pr-4">
            <PostPublicationDate date={date} relative />
            <TimeToRead duration={duration} />
            {featured && <Featured contentClass="Article" features={featured} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
