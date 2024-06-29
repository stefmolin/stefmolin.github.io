import { isBrowser, browserName } from 'react-device-detect';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { MAP_PIN } from '../../data/constants';
import type MapLocation from '../../interfaces/map-location';
import { useState } from 'react';

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
  usePinEmoji: boolean;
  maxPinSize?: number;
  pinColor?: string;
  projection?: string;
  projectionCenter?: [number, number];
  projectionScale?: number;
  geography?: string;
  onPinClick?: (location: MapLocation) => void;
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
  usePinEmoji = true,
  maxPinSize = 25,
  pinColor = '#FF5533',
  projection = 'geoMercator',
  projectionCenter = [5, 35],
  projectionScale = 130,
  geography = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json', // TODO: include the geographies file in this repo to avoid the issues those examples had?
  onPinClick,
  className,
}: PushPinMapProps) {
  const minZoom = 1;
  const maxZoom = browserName === 'Safari' && isBrowser ? 1 : 4;
  const [zoomLevel, updateZoomLevel] = useState<number>(minZoom);
  const minPinSize = Math.max(2, Math.ceil(maxPinSize / maxZoom));

  const [minPinStickSize, maxPinStickSize] = [3, 16];

  const scalePin = (zoomLevel, zoomedOutValue, zoomedInValue) => {
    if (minZoom === maxZoom) return maxPinSize;
    const b = (zoomedInValue - zoomedOutValue) / (maxZoom - minZoom);
    const a = zoomedInValue - b * maxZoom;
    return a + b * zoomLevel;
  };

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
          onMoveEnd={({ zoom }) => updateZoomLevel(zoom)}
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
              {usePinEmoji ? (
                <g fill="none">
                  <text
                    textAnchor="middle"
                    style={{
                      cursor: 'pointer',
                      fontSize: scalePin(zoomLevel, maxPinSize, minPinSize),
                    }}
                    onClick={onPinClick != null ? () => onPinClick(location) : undefined}
                  >
                    {MAP_PIN}
                  </text>
                </g>
              ) : (
                <g
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform={`translate(0, -${scalePin(zoomLevel, maxPinStickSize, minPinStickSize)})`}
                  style={{ cursor: 'pointer' }}
                  onClick={onPinClick != null ? () => onPinClick(location) : undefined}
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2={scalePin(zoomLevel, maxPinStickSize, minPinStickSize)}
                    stroke="#4F5156"
                    strokeWidth={scalePin(zoomLevel, 2, 0.5)}
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r={scalePin(zoomLevel, maxPinSize / 5, minPinSize / 4)}
                    fill={pinColor}
                    stroke={pinColor}
                  />
                </g>
              )}
              {/* <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -22)"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g> */}
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
