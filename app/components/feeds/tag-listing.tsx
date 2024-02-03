import classNames from 'classnames';
import Link from 'next/link';

interface TagCount {
  text: string;
  value: number;
}

export interface TagListingProps {
  tagCounts: TagCount[];
  className?: string;
}

const TagListing = ({ tagCounts, className }: TagListingProps) => {
  return (
    <div className={classNames(className)}>
      {tagCounts
        .sort((tag1, tag2) => (tag1.value > tag2.value ? -1 : 1))
        .map(({ text, value }) => (
          <Link
            key={text}
            href={{
              pathname: '/tags/[tag]',
              query: { tag: text },
            }}
            className="font-bold text-slate-500 hover:text-slate-800 hover:underline"
          >
            {text} ({value})
          </Link>
        ))}
    </div>
  );
};

export default TagListing;
