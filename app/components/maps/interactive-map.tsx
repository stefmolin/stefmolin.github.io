import { useState } from 'react';
import classNames from 'classnames';
import type MapLocation from '../../interfaces/map-location';
import PushPinInfo from './push-pin-info';
import PushPinMap, { type PushPinMapProps } from './push-pin-map';

interface InteractiveMapProps {
  locations: MapLocation[];
  highlightedCountries: PushPinMapProps['highlightedCountries'];
  getDisplayInfo: (location: MapLocation) => React.ReactNode;
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
  const [selectedMapPin, setSelectedMapPin] = useState<MapLocation>();
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
