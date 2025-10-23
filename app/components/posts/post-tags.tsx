import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  tags: string[];
  className?: string;
  asLinks?: boolean;
};

const PostTags = ({ tags, className, asLinks = false }: Props) => {
  return (
    <div className={classNames('flex flex-row items-center flex-wrap', className)}>
      <FontAwesomeIcon icon={tags.length > 1 ? faTags : faTag} className="pr-1" />
      {tags.map((tag, index) => (
        <p key={tag}>
          {asLinks ? (
            <Link
              href={{
                pathname: '/tags/[tag]',
                query: { tag },
              }}
              className="hover:underline whitespace-nowrap"
            >
              {tag}
            </Link>
          ) : (
            tag
          )}
          {tags.length > 1 && index < tags.length - 1 ? <span className="pr-1">,</span> : null}
        </p>
      ))}
    </div>
  );
};

export default PostTags;
