import PostPreview from './post-preview';
import type Post from '../../interfaces/post';

type Props = {
  posts: Post[];
  title?: string;
};

const MoreStories = ({ posts, title = 'More Stories' }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug.join('/')}
            title={post.title}
            subtitle={post.subtitle}
            coverImage={post.ogImage.url}
            date={post.date}
            author={post.author}
            tags={post.tags}
            duration={post.duration}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
