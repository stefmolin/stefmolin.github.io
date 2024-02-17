import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface StatsGridProps {
  stats: { title: string; value: number | string | undefined; link?: string }[];
  className?: string;
  linkClassName?: string;
}

export default function StatsGrid({
  stats,
  className,
  linkClassName = 'text-blue-800',
}: StatsGridProps) {
  return (
    <div className={classNames('flex justify-center', className)}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {stats.map(({ title, value, link }) => {
          if (value == null || value === 0) return null;
          const stat = (
            <>
              <h3 className="text-6xl md:text-7xl text-center px-2">{value}</h3>
              <h3 className="text-center px-2">{title}</h3>
            </>
          );
          return (
            <div
              key={title}
              className={classNames(
                'flex flex-col justify-center items-center',
                'shadow-sm hover:shadow-lg transition-shadow duration-200',
                'w-32 h-32 sm:w-48 sm:h-48',
              )}
            >
              {link != null && usePathname() !== link ? (
                <Link
                  href={{
                    pathname: link,
                  }}
                  className={classNames('hover:scale-110', linkClassName)}
                >
                  {stat}
                </Link>
              ) : (
                stat
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
