'use client';

import { Band } from '@/types/bands';
import { PropsWithChildren, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileMap from './ProfileMap';
import groupLocationsByCountry from '../utils/groupLocationsByCountry';
import ProfileMapTooltip, { TooltipProps } from './ProfileMapTooltip';
import { cn } from '@/app/utils/cn';
import { extractUniqueLocations } from '@/app/utils/extractUniqueLocations';
import { useGeocodeBatch } from '@/app/hooks/useGeocodeBatch';
import LoadingSpinner from '../../icons/LoadingSpinner';
import { User } from '@/types/user';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-8 overflow-hidden rounded-lg border border-zinc-700/60 bg-zinc-850 p-4 sm:max-h-[400px] sm:min-h-[400px] sm:p-6">
      {children}
    </div>
  );
}

type ProfileMapWrapperProps = {
  bands: Band[];
  user: User;
};

function ProfileMapWrapper({ bands, user }: ProfileMapWrapperProps) {
  const [tooltip, setTooltip] = useState<TooltipProps>();

  const extractedLocations = extractUniqueLocations(bands);
  const { data, isLoading, isError } = useGeocodeBatch({
    locations: extractedLocations,
    user
  });

  if (isError)
    return (
      <Layout>
        <p className="text-sm text-zinc-400">
          There was an error on our side while retrieving the location
          coordinates. Please try again later.
        </p>
      </Layout>
    );

  if (isLoading || data?.status === 'pending') {
    return (
      <Layout>
        <div className="sm:grid sm:grid-cols-3 2xl:grid-cols-2 3xl:grid-cols-3">
          <div className="pr-4 sm:col-span-2 2xl:col-span-1 3xl:col-span-2">
            <p className="text-xs font-semibold text-zinc-400">
              PLACING CONCERT LOCATIONS IN THE MAP...
            </p>
            <div className="relative flex h-[250px] w-full max-w-[400px] animate-pulse overflow-hidden sm:-ml-2 sm:h-[400px] sm:max-h-[400px] sm:w-full sm:max-w-[600px]">
              <div className="absolute left-1/2 top-1/2 sm:top-1/3">
                <LoadingSpinner />
              </div>
              <ProfileMap locations={[]} setTooltip={setTooltip} />
            </div>
          </div>
          <div className="-m-6 flex flex-col gap-6 rounded-b-lg border-t border-zinc-700/60 bg-zinc-800 p-6 [-ms-overflow-style:none] [scrollbar-color:#52525b_transparent] sm:col-span-1 sm:ml-0 sm:max-h-[399px] sm:overflow-auto sm:rounded-b-none sm:border-l sm:border-t-0 [&::-webkit-scrollbar-thumb]:hover:bg-zinc-700 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:hover:bg-zinc-800">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="mb-5">
                <div className="flex items-center gap-1.5 pb-3">
                  <div className="h-2.5 w-3.5 animate-pulse rounded bg-zinc-700/60" />
                  <div className="h-3 w-24 animate-pulse rounded bg-zinc-700/60" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div
                      key={j}
                      className="h-7 w-20 animate-pulse rounded border border-zinc-700/40 bg-zinc-800/40"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  if (!data || data.status === 'no_results')
    return (
      <Layout>
        <p className="text-sm text-zinc-400">
          There are no concerts to display.
        </p>
      </Layout>
    );

  const locations = data.data;
  const locationsGroupedByCountry = groupLocationsByCountry(locations);
  const countriesArray = locations.map(location => location.country);
  const uniqueCountries = new Set(countriesArray);
  const countries = uniqueCountries.size;

  return (
    <Layout>
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
              <div className="flex items-center gap-1.5 pb-3 text-[13px] font-semibold text-zinc-400">
                <Image
                  src={`https://flagcdn.com/32x24/${location.country_code.toLowerCase()}.png`}
                  width={14}
                  height={10}
                  alt="Flag"
                  className="h-2.5 w-3.5"
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
    </Layout>
  );
}

export default ProfileMapWrapper;
