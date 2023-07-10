import getMostSeenBand from '@/app/utils/getMostSeenBand';
import { Bands } from '@/types/bands';
import Link from 'next/link';

type StatsSideBarMostSeenBandsProps = {
  bands: Bands[];
};

function StatsSideBarMostSeenBands({ bands }: StatsSideBarMostSeenBandsProps) {
  const mostSeenBands = getMostSeenBand(bands);
  const numOfConcertsArray = mostSeenBands.map(band => band.concerts.length);
  const biggestConcertCount = numOfConcertsArray[0];

  return (
    <div className="relative flex flex-col gap-1">
      <p className="text-xs font-semibold text-zinc-400">TOP BANDS</p>
      {mostSeenBands.map(band => (
        <Link
          href={`/${band.band.replaceAll(' ', '-')}/${band.id}`}
          key={band.id}
          className="group relative text-[13px]"
        >
          <div
            className="absolute inset-0 rounded bg-zinc-800 group-hover:bg-zinc-700 group-active:bg-zinc-600"
            style={{
              width: `${(band.concerts.length / biggestConcertCount) * 100}%`
            }}
          >
            {' '}
          </div>
          <div className="relative flex justify-between px-2 py-1 font-medium text-zinc-300 group-hover:text-white">
            <span>{band.band}</span>
            <span>{band.concerts.length}x</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StatsSideBarMostSeenBands;
