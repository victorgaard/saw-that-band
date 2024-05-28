'use client';

import { memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { TooltipProps } from './ProfileMapTooltip';

export type Locations = {
  location: string;
  country: string;
  country_code: string;
  lat: number;
  lon: number;
};

type ProfileMapProps = {
  locations: Locations[];
  setTooltip: (tooltip: TooltipProps | undefined) => void;
};

function ProfileMap({ locations, setTooltip }: ProfileMapProps) {
  const router = useRouter();
  return (
    <ComposableMap
      projection="geoNaturalEarth1"
      height={482}
      width={820}
      projectionConfig={{
        center: [14, 0]
      }}
    >
      <Geographies geography="/map/countries.json">
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              tabIndex={-1}
              key={geo.rsmKey}
              geography={geo}
              fill="#3f3f46"
              stroke="#2c2c31"
              strokeWidth={1.35}
              style={{
                default: { outline: 'none' },
                hover: { outline: 'none' },
                pressed: { outline: 'none' }
              }}
            />
          ))
        }
      </Geographies>
      {locations.map(location => (
        <Marker
          key={location.location}
          coordinates={[location.lon, location.lat]}
          onMouseEnter={e =>
            setTooltip({
              city: location.location,
              country: location.country,
              country_code: location.country_code,
              x: e.clientX,
              y: e.clientY
            })
          }
          onMouseLeave={() => setTooltip(undefined)}
        >
          <circle
            r={10}
            className="pointer-events-none animate-wide-pulse fill-emerald-300/40"
          />
          <circle
            r={8}
            stroke="#2c2c31"
            strokeWidth={1.5}
            className="cursor-pointer fill-emerald-300 transition-colors hover:fill-emerald-200"
            onClick={() => router.push(`/list?search=${location.location}`)}
          />
        </Marker>
      ))}
    </ComposableMap>
  );
}

export default memo(ProfileMap);
