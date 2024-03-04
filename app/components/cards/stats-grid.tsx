import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWindowSize } from '../../lib/hooks/window-size';
import CarouselSection from '../sections/carousel-section';

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
  const { width } = useWindowSize();
  const responsive = {
    lg: {
      breakpoint: { max: Infinity, min: 1024 },
      items: Math.min(4, stats.length),
    },
    md: {
      breakpoint: { max: 1024, min: 539 },
      items: 3,
    },
    sm: {
      breakpoint: { max: 539, min: 375 },
      items: 2,
    },
    xs: {
      breakpoint: { max: 375, min: 0 },
      items: 1,
    },
  };
  const cards = stats.map(({ title, value, link }) => {
    if (value == null || value === 0) return null;
    const stat = (
      <>
        <h3 className="text-6xl sm:text-7xl text-center px-2 -my-4">{value}</h3>
        <h3 className="text-sm sm:text-base md:text-lg text-center px-2">{title}</h3>
      </>
    );
    return (
      <div key={title} className="flex items-center justify-center">
        <div
          className={classNames(
            'flex flex-col justify-center items-center',
            'shadow-sm hover:shadow-lg transition-shadow duration-200',
            'w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-2 sm:mx-4',
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
      </div>
    );
  });
  if (width == null || width < 1024)
    return (
      <CarouselSection
        autoPlaySpeed={5_000}
        responsive={responsive}
        carouselClassName="pt-4 pb-10 flex flex-row mx-auto"
      >
        {cards}
      </CarouselSection>
    );
  return (
    <div className={classNames('flex items-center justify-center mx-auto', className)}>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards}
      </div>
    </div>
  );
}
