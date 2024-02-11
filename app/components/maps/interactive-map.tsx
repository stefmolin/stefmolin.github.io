import { useState } from 'react';
import type MapLocation from '../../interfaces/map-location';
import PushPinInfo from './push-pin-info';
import PushPinMap, { type PushPinMapProps } from './push-pin-map';

interface InteractiveMapProps {
  locations: MapLocation[];
  highlightedCountries: PushPinMapProps['highlightedCountries'];
  getDisplayInfo: (location: MapLocation | undefined) => React.ReactNode | null;
  containerClassName?: string;
  pushPinMapClassName?: string;
  pushPinInfoClassName?: string;
}

export default function InteractiveMap({
  locations,
  highlightedCountries,
  getDisplayInfo,
  containerClassName,
  pushPinMapClassName,
  pushPinInfoClassName,
}: InteractiveMapProps) {
  const [selectedMapPin, setSelectedMapPin] = useState<MapLocation>();
  return (
    <div className={containerClassName}>
      <PushPinMap
        className={pushPinMapClassName}
        locations={locations}
        highlightedCountries={highlightedCountries}
        onPinClick={setSelectedMapPin}
        usePinEmoji
      />
      <PushPinInfo selectedMapPin={selectedMapPin} className={pushPinInfoClassName}>
        {getDisplayInfo(selectedMapPin)}
      </PushPinInfo>
    </div>
  );
}
