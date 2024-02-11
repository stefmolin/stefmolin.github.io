import { FLAGS } from '../../data/constants';
import type MapLocation from '../../interfaces/map-location';

interface PushPinInfoProps {
  selectedMapPin: MapLocation | null | undefined;
  className?: string;
  children?: React.ReactNode;
}

export default function PushPinInfo({ selectedMapPin, className, children }: PushPinInfoProps) {
  return (
    <div className={className}>
      {selectedMapPin != null ? (
        <>
          <p className="text-bold text-center text-4xl md:text-5xl -mb-2">
            {FLAGS[selectedMapPin.country]}
          </p>
          <p className="text-bold text-center text-xl md:text-2xl">
            {selectedMapPin.city},{' '}
            {selectedMapPin.country === 'United States of America' ? 'USA' : selectedMapPin.country}
          </p>
        </>
      ) : null}
      {children}
    </div>
  );
}
