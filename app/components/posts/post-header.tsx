import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostPublicationDate from '../datetime/publication-date';
import PostTitle from './post-title';
import TimeToRead from '../datetime/duration-indicator';
import Featured from './featured';
import type PostType from '../../interfaces/post';
import FancyDivider from '../dividers/fancy-divider';
import SectionSeparator from '../dividers/section-separator';
import MentionStats from '../mention-stats';

const PostHeader = ({
  post,
}: {
  post: Pick<PostType, 'title' | 'subtitle' | 'date' | 'duration' | 'featured' | 'preview'>;
}) => {
  const { title, subtitle, date, duration, featured, preview = false } = post;
  return (
    <div className="lg:max-w-5xl mx-auto">
      <div className="space-y-4 md:space-y-6">
        <PostTitle title={`${title}${preview ? ' [Preview]' : ''}`} subtitle={subtitle} />
        <div className="flex flex-col md:flex-row md:space-x-3 md:items-center justify-start">
          <PostPublicationDate date={date} relative />
          <TimeToRead duration={duration} />
          <MentionStats className="" />
          {featured && <Featured contentClass="Article" features={featured} />}
        </div>
      </div>
      {preview ? (
        <FancyDivider className="mt-5">
          <div className="rounded border-2 border-black text-nowrap px-2 py-1 mx-2">
            <FontAwesomeIcon icon={faWarning} className="pr-1" key={date} fixedWidth />{' '}
            <span>You are currently previewing a new post. This is a rough draft.</span>
            <FontAwesomeIcon icon={faWarning} className="pl-1" key={date} fixedWidth />{' '}
          </div>
        </FancyDivider>
      ) : (
        <SectionSeparator className="my-4" />
      )}
    </div>
  );
};

export default PostHeader;
