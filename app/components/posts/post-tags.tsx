import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  tags: string[];
  className?: string;
};

const PostTags = ({ tags, className }: Props) => {
  return (
    <div className={classNames('flex flex-row items-center flex-wrap', className)}>
      <FontAwesomeIcon icon={tags.length > 1 ? faTags : faTag} className="pr-1" fixedWidth />
      {tags.map((tag, index) => (
        <p key={tag}>
          <Link
            href={{
              pathname: '/tags/[tag]',
              query: { tag },
            }}
            className="hover:underline whitespace-nowrap"
          >
            {tag}
          </Link>
          {tags.length > 1 && index < tags.length - 1 ? <span className="pr-1">,</span> : null}
        </p>
      ))}
    </div>
  );
};

export default PostTags;
