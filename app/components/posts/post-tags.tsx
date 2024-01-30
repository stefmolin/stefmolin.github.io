import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type Props = {
  tags: string[];
};

const PostTags = ({ tags }: Props) => {
  return (
    <>
      <FontAwesomeIcon icon={tags.length > 1 ? faTags : faTag} />{' '}
      {tags.map((tag, index) => (
        <>
          <Link
            href={{
              pathname: '/tags/[tag]',
              query: { tag },
            }}
            className="hover:underline"
            key={tag}
          >
            {tag}
          </Link>
          {tags.length > 1 && index < tags.length - 1 ? <span>, </span> : null}
        </>
      ))}
    </>
  );
};

export default PostTags;
