import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string[];
  caption?: string;
};

const CoverImage = ({ title, src, slug, caption }: Props) => {
  const image = (
    <img src={src} alt={caption ?? `Cover image for ${title}`} className="w-96 h-48 object-cover" />
  );
  return (
    <div className="mr-5">
      {slug ? (
        <Link
          href={{
            pathname: '/[...slug]',
            query: { slug },
          }}
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
