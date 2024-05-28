import getBandLocations from '@/app/utils/getBandsLocations';
import { Bands } from '@/types/bands';
import Link from 'next/link';

type StatsSideBarLocationsProps = {
  bands: Bands[];
};

function StatsSideBarLocations({ bands }: StatsSideBarLocationsProps) {
  const locations = getBandLocations(bands);
  const numOfLocationsArray = locations.map(location => location.count);
  const biggestLocationCount = numOfLocationsArray[0];

  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-semibold text-zinc-400">TOP LOCATIONS</p>
      {locations.map(location => (
        <Link
          href={`/list?search=${location.location}`}
          key={location.location}
          className="group relative text-[13px]"
        >
          <div
            className="absolute inset-0 rounded bg-zinc-800 group-hover:bg-zinc-700 group-active:bg-zinc-600"
            style={{
              width: `${(location.count / biggestLocationCount) * 100}%`
            }}
          >
            {' '}
          </div>
          <div className="relative flex justify-between px-2 py-1 font-medium text-zinc-300 group-hover:text-white">
            <span>{location.location}</span>
            <span>{location.count}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StatsSideBarLocations;
