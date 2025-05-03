import PostPreview from '../posts/post-preview';
import type Post from '../../interfaces/post';

type Props = {
  posts: Post[];
  title?: string;
};

const PostListing = ({ posts, title }: Props) => {
  return (
    <section>
      {title ? (
        <h2 className="mb-2 md:mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-center">
          {title}
        </h2>
      ) : null}
      <div className="grid grid-cols-1">
        {posts.map((post) => (
          <PostPreview key={post.slug.join('/')} {...post} />
        ))}
      </div>
    </section>
  );
};

export default PostListing;
