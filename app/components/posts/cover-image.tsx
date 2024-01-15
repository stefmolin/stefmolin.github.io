import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string[];
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover image for ${title}`} // TODO: add caption for cover image
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1200}
      height={600}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          href={{
            pathname: "/[...slug]",
            query: { slug },
          }}
          aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
