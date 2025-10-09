'use client';

import { Band } from '@/types/bands';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileMap, { Locations } from './ProfileMap';
import groupLocationsByCountry from '../utils/groupLocationsByCountry';
import ProfileMapTooltip, { TooltipProps } from './ProfileMapTooltip';
import { cn } from '@/app/utils/cn';

type ProfileMapWrapperProps = {
  bands: Band[];
};

function ProfileMapWrapper({ bands }: ProfileMapWrapperProps) {
  const [tooltip, setTooltip] = useState<TooltipProps>();

  const locations: Locations[] = [
    {
      location: 'São Paulo',
      country: 'Brazil',
      country_code: 'BR',
      lat: -23.5506507,
      lon: -46.6333824
    },
    {
      location: 'Curitiba',
      country: 'Brazil',
      country_code: 'BR',
      lat: -25.4295963,
      lon: -49.2712724
    },
    {
      location: 'Wacken',
      country: 'Germany',
      country_code: 'DE',
      lat: 54.0223299,
      lon: 9.375352
    },
    {
      location: 'Berlin',
      country: 'Germany',
      country_code: 'DE',
      lat: 52.5170365,
      lon: 13.3888599
    },
    {
      location: 'ArcTangent',
      country: 'United Kingdom',
      country_code: 'GB',
      lat: 51.2971249,
      lon: -2.6776064
    },
    {
      location: 'Brasília',
      country: 'Brazil',
      country_code: 'BR',
      lat: -15.7934036,
      lon: -47.8823172
    },
    {
      location: 'Metaldays',
      country: 'Slovenia',
      country_code: 'SI',
      lat: 46.1751021,
      lon: 13.737324
    },
    {
      location: 'Goiânia',
      country: 'Brazil',
      country_code: 'BR',
      lat: -16.680882,
      lon: -49.2532691
    },
    {
      location: 'Cologne',
      country: 'Germany',
      country_code: 'DE',
      lat: 50.938361,
      lon: 6.959974
    },
    {
      location: 'Potsdam',
      country: 'Germany',
      country_code: 'DE',
      lat: 52.4009309,
      lon: 13.0591397
    },
    {
      location: 'Rio de Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      lat: -22.9110137,
      lon: -43.2093727
    },
    {
      location: 'Budapest',
      country: 'Hungary',
      country_code: 'HU',
      lat: 47.4979937,
      lon: 19.0403594
    },
    {
      location: 'Tampere',
      country: 'Finland',
      country_code: 'FI',
      lat: 61.4980214,
      lon: 23.7603118
    },
    {
      location: 'Hoofddorp',
      country: 'The Netherlands',
      country_code: 'NL',
      lat: 52.3061,
      lon: 4.6907
    },
    {
      location: 'Tilburg',
      country: 'The Netherlands',
      country_code: 'NL',
      lat: 51.5606,
      lon: 5.0919
    },
    {
      location: 'Lisboa',
      country: 'Portugal',
      country_code: 'PT',
      lat: 38.71667,
      lon: -9.13333
    }
  ];
  const locationsGroupedByCountry = groupLocationsByCountry(locations);
  const countriesArray = locations.map(location => location.country);
  const uniqueCountries = new Set(countriesArray);
  const countries = uniqueCountries.size;

  return (
    <div className="flex flex-col gap-8 overflow-hidden rounded-lg border border-zinc-700/60 bg-zinc-850 p-4 sm:max-h-[400px] sm:min-h-[400px] sm:p-6">
      <div className="sm:grid sm:grid-cols-3 2xl:grid-cols-2 3xl:grid-cols-3">
        <div className="pr-4 sm:col-span-2 2xl:col-span-1 3xl:col-span-2">
          <p className="text-xs font-semibold text-zinc-400">
            {bands.length} {bands.length === 1 ? 'BAND' : 'BANDS'} SEEN LIVE IN{' '}
            {countries} {countries === 1 ? 'COUNTRY' : 'COUNTRIES'} AND{' '}
            {locations.length}{' '}
            {locations.length === 1 ? 'LOCATION' : 'LOCATIONS'}
          </p>
          <div className="flex h-[250px] w-full max-w-[400px] overflow-hidden sm:-ml-2 sm:h-[400px] sm:max-h-[400px] sm:w-full sm:max-w-[600px]">
            <ProfileMap locations={locations} setTooltip={setTooltip} />
            <ProfileMapTooltip tooltip={tooltip} />
          </div>
        </div>
        <div className="-m-6 flex flex-col gap-6 rounded-b-lg border-t border-zinc-700/60 bg-zinc-800 p-6 [-ms-overflow-style:none] [scrollbar-color:#52525b_transparent] sm:col-span-1 sm:ml-0 sm:max-h-[399px] sm:overflow-auto sm:rounded-b-none sm:border-l sm:border-t-0 [&::-webkit-scrollbar-thumb]:hover:bg-zinc-700 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:hover:bg-zinc-800">
          {locationsGroupedByCountry.map(location => (
            <div key={location.country}>
              <div className="flex items-center gap-2 pb-3 text-[13px] font-semibold text-zinc-400">
                <Image
                  src={`https://flagcdn.com/32x24/${location.country_code.toLowerCase()}.png`}
                  width={12}
                  height={12}
                  alt="Flag"
                  className="h-3 w-3"
                />
                <span>{location.country.toLocaleUpperCase()}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {location.locations.map(currentLocation => {
                  const isHovered = currentLocation === tooltip?.city;
                  return (
                    <Link
                      key={currentLocation}
                      href={`/list?search=${currentLocation}`}
                      className={cn(
                        'whitespace-nowrap rounded border p-2 px-3 text-xs font-medium text-zinc-300 shadow-sm transition-colors duration-75 hover:border-zinc-600 hover:bg-zinc-700/50 hover:text-white',
                        {
                          'border-zinc-600 bg-zinc-700/50 text-white':
                            isHovered,
                          'border-zinc-700/60': !isHovered
                        }
                      )}
                    >
                      {currentLocation}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileMapWrapper;
