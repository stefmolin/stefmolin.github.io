import classNames from 'classnames';
import { useState } from 'react';
import { isBrowser, browserName } from 'react-device-detect';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import type MapLocation from '../../interfaces/map-location';

// TopoJSON files can be downloaded from https://github.com/topojson/world-atlas if needed

export interface PushPinMapProps {
  locations: MapLocation[];
  highlightedCountries: string[];
  countryHighlightColor?: string;
  countryFadeColor?: string;
  countryHighlightOpacity?: number;
  countryFadeOpacity?: number;
  countryOutlineColor?: string;
  mapOutlineColor?: string;
  mapBackgroundColor?: string;
  locationDotFillColor?: string;
  locationDotCircleColor?: string;
  locationDotOutlineColor?: string;
  projection?: string;
  projectionCenter?: [number, number];
  projectionScale?: number;
  geography?: string;
  onPinClick?: (location: MapLocation | undefined) => void;
  className?: string;
}

export default function PushPinMap({
  locations,
  highlightedCountries,
  countryHighlightColor = '#FFD7A6', // TODO: when color scheme is chosen, the highlight color needs to be used here (should call it `highlight` in tailwind so i can easily change later)
  countryFadeColor = '#454955',
  countryHighlightOpacity = 0.5,
  countryFadeOpacity = 0.1,
  countryOutlineColor = 'black',
  mapOutlineColor = '#eee',
  mapBackgroundColor = 'transparent',
  locationDotFillColor = '#FF5533', // TODO: may need to change these as well when the color scheme is chosen
  locationDotCircleColor = '#AA1B18', // TODO: may need to change these as well when the color scheme is chosen
  locationDotOutlineColor = '#AA1B18', // TODO: may need to change these as well when the color scheme is chosen
  projection = 'geoMercator',
  projectionCenter = [8, 35],
  projectionScale = 130,
  geography = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json', // TODO: include the geographies file in this repo to avoid the issues those examples had?
  onPinClick,
  className,
}: PushPinMapProps) {
  const minZoom = 1;
  const maxZoom = browserName === 'Safari' && isBrowser ? 1 : 4;
  const [zoomLevel, setZoomLevel] = useState<number>(minZoom);

  const [hover, setHover] = useState<MapLocation | null>(null);
  const [clicked, setClicked] = useState<MapLocation | null>(null);

  const getScales = () => {
    if (zoomLevel >= 3.5) return ['scale-25', 'scale-75'];
    else if (zoomLevel >= 2.5) return ['scale-50', 'scale-100'];
    else if (zoomLevel >= 1.5) return ['scale-75', 'scale-150'];
    else return ['scale-100', 'scale-200'];
  };

  const [unfocusedScale, focusedScale] = getScales();

  return (
    <div className={className}>
      <ComposableMap
        projection={projection}
        projectionConfig={{
          center: projectionCenter,
          scale: projectionScale,
        }}
        fill={mapBackgroundColor}
        stroke={mapOutlineColor}
        strokeWidth={0.5}
      >
        <ZoomableGroup
          minZoom={minZoom}
          maxZoom={maxZoom}
          onMoveEnd={({ zoom }) => setZoomLevel(zoom)}
        >
          <Geographies geography={geography}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  opacity={
                    highlightedCountries.includes(geo.properties.name)
                      ? countryHighlightOpacity
                      : countryFadeOpacity
                  }
                  fill={
                    highlightedCountries.includes(geo.properties.name)
                      ? countryHighlightColor
                      : countryFadeColor
                  }
                  stroke={countryOutlineColor}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {locations.map((location) => (
            <Marker
              key={`${location.city}, ${location.country}`}
              coordinates={location.coordinates}
            >
              <g
                onClick={
                  onPinClick != null
                    ? () => {
                        if (location === clicked) {
                          setClicked(null);
                          onPinClick(undefined);
                        } else {
                          setClicked(location);
                          onPinClick(location);
                        }
                      }
                    : undefined
                }
                onMouseEnter={() => setHover(location)}
                onMouseLeave={() => setHover(null)}
                className={classNames('cursor-pointer hover:opacity-100', `hover:${focusedScale}`, {
                  [unfocusedScale]: clicked !== location,
                  [focusedScale]: clicked === location,
                  'opacity-100': hover == null && clicked === location,
                  'opacity-85': hover == null && clicked == null,
                  'opacity-50': hover == null && clicked != null && clicked !== location,
                  'opacity-10': hover != null && hover !== location,
                })}
              >
                <g
                  fill={locationDotFillColor}
                  stroke={locationDotOutlineColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -22)"
                >
                  <path
                    strokeWidth="2"
                    d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
                  />
                  <circle cx="12" cy="10" r="3.5" fill={locationDotCircleColor} />
                </g>
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
