import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { MAP_PIN } from '../../data/constants';
import type MapLocation from '../../interfaces/map-location';

// TODO: make the zoomable part optional bc it is annoying that when you zoom in the most possible and
// it scrolls the page down (for events pages); same thing with zooming out and going up

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
  pinSize?: string;
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
  countryHighlightColor = '#ffd7a6', // TODO: when color scheme is chosen, the highlight color needs to be used here (should call it `highlight` in tailwind so i can easily change later)
  countryFadeColor = '#000',
  countryHighlightOpacity = 0.5,
  countryFadeOpacity = 0.1,
  countryOutlineColor = 'black',
  mapOutlineColor = '#eee',
  mapBackgroundColor = 'transparent',
  pinSize = '25px',
  projection = 'geoMercator',
  projectionCenter = [-50, 50],
  projectionScale = 200,
  geography = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json', // TODO: include the geographies file in this repo to avoid the issues those examples had?
  onPinClick,
  className,
}: PushPinMapProps) {
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
        strokeWidth={1}
      >
        <ZoomableGroup>
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
            <Marker key={location} coordinates={location.coordinates}>
              <text
                textAnchor="middle"
                style={{ cursor: 'pointer', fontSize: pinSize }}
                onClick={onPinClick != null ? () => onPinClick(location) : undefined}
              >
                {MAP_PIN}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
