import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useWindowSize } from '../../lib/hooks/window-size';
import CarouselSection from '../sections/carousel-section';

export interface MysteryCardsProps {
  cards: string[] | React.ReactNode[];
  color: string | string[];
}

export default function MysteryCards({ cards, color }: MysteryCardsProps) {
  const { width } = useWindowSize();
  const responsive = {
    lg: {
      breakpoint: { max: Infinity, min: 1024 },
      items: Math.min(3, cards.length),
    },
    md: {
      breakpoint: { max: 1024, min: 539 },
      items: 2,
    },
    sm: {
      breakpoint: { max: 539, min: 0 },
      items: 1,
    },
  };

  const mysteryCards = cards.map((text, index) => (
    <div key={index} className="flex items-center justify-center">
      <div
        className={classNames(
          'group flex items-center justify-center',
          'shadow-xs hover:shadow-lg transition-shadow-sm duration-200',
          'w-60 h-60 md:w-72 md:h-72 rounded-lg mx-2',
          Array.isArray(color) ? color[index] : color,
        )}
      >
        <FontAwesomeIcon
          icon={faQuestion}
          size="9x"
          fixedWidth
          className="group-hover:hidden"
          fade
        />
        <p className="hidden group-hover:block px-4 sm:px-8 py-4 md:text-lg">{text}</p>
      </div>
    </div>
  ));

  if (width == null || width < 1024)
    return (
      <CarouselSection
        autoPlaySpeed={5_000}
        responsive={responsive}
        carouselClassName="pt-4 pb-10 flex flex-row mx-auto"
      >
        {mysteryCards}
      </CarouselSection>
    );
  return (
    <div className="flex items-center justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-12">
        {mysteryCards}
      </div>
    </div>
  );
}
