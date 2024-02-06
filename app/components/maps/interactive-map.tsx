import { useState } from 'react';
import Location, { AnnotatedLocation } from '../../interfaces/location';
import PushPinInfo from './push-pin-info';
import PushPinMap, { type PushPinMapProps } from './push-pin-map';
import classNames from 'classnames';

type AnnotatedPin = AnnotatedLocation<any>;

interface InteractiveMapProps {
  locations: Location[];
  highlightedCountries: PushPinMapProps['highlightedCountries'];
  getDisplayInfo: (AnnotatedLocation: AnnotatedPin) => React.ReactNode;
  pushPinMapClassName?: string;
  pushPinInfoClassName?: string;
}

export default function InteractiveMap({
  locations,
  highlightedCountries,
  getDisplayInfo,
  pushPinMapClassName,
  pushPinInfoClassName,
}: InteractiveMapProps) {
  const [selectedMapPin, setSelectedMapPin] = useState<AnnotatedPin>();
  return (
    <div
      className={classNames(
        'grid lg:grid-cols-3 mt-2 md:mx-10 gap-x-10 gap-y-10 items-center',
        pushPinMapClassName,
      )}
    >
      <PushPinMap
        className="lg:col-span-2"
        locations={locations}
        highlightedCountries={highlightedCountries}
        onPinClick={setSelectedMapPin}
      />
      <PushPinInfo
        annotation={selectedMapPin}
        className={classNames('flex flex-col items-center', pushPinInfoClassName)}
      >
        {selectedMapPin != null ? getDisplayInfo(selectedMapPin) : null}
      </PushPinInfo>
    </div>
  );
}
