import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type Props = {
  tags: string[];
};

const PostTags = ({ tags }: Props) => {
  return (
    <>
      <FontAwesomeIcon icon={tags.length > 1 ? faTags : faTag} /> {tags.join(', ')}
    </>
  );
};

export default PostTags;
