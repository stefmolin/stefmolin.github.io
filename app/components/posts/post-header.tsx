import PostPublicationDate from '../datetime/publication-date';
import PostTitle from './post-title';
import TimeToRead from '../datetime/duration-indicator';
import Featured from './featured';
import type PostType from '../../interfaces/post';
import FancyDivider from '../dividers/fancy-divider';
import SectionSeparator from '../dividers/section-separator';

const PostHeader = ({
  post,
}: {
  post: Pick<PostType, 'title' | 'subtitle' | 'date' | 'duration' | 'featured'>;
}) => {
  const { title, subtitle, date, duration, featured } = post;
  return (
    <div className="lg:max-w-5xl mx-auto">
      <div className="space-y-4 md:space-y-6">
        <PostTitle title={title} subtitle={subtitle} />
        <div className="flex flex-col md:flex-row md:space-x-3 md:items-center justify-start">
          <PostPublicationDate date={date} relative />
          <TimeToRead duration={duration} />
          {featured && <Featured contentClass="Article" features={featured} />}
        </div>
      </div>
      <SectionSeparator className="my-4" />
    </div>
  );
};

export default PostHeader;
