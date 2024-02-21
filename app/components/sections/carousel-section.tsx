import Carousel, { type ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useWindowSize } from '../../lib/hooks/window-size';

interface CarouselSectionProps {
  autoPlaySpeed: number;
  carouselClassName?: string;
  children: React.ReactNode[];
  responsive: ResponsiveType;
}

export default function CarouselSection({
  autoPlaySpeed,
  carouselClassName,
  children,
  responsive,
}: CarouselSectionProps) {
  const { width } = useWindowSize();

  let slots = Infinity;
  if (width) {
    slots =
      Object.values(responsive).find(
        (value) => value.breakpoint.min <= width && width <= value.breakpoint.max,
      )?.items || 1;
  }
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={slots < children.length}
      responsive={responsive}
      ssr={false}
      infinite={false}
      autoPlay={true}
      autoPlaySpeed={autoPlaySpeed}
      keyBoardControl={true}
      transitionDuration={1_000}
      arrows={false}
      rewind={true}
      rewindWithAnimation={true}
      className={carouselClassName}
    >
      {children}
    </Carousel>
  );
}
