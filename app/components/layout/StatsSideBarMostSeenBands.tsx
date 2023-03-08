import { Bands } from '@/app/types/bands';
import getMostSeenBand from '@/app/utils/getMostSeenBand';
import Link from 'next/link';

type StatsSideBarMostSeenBandsProps = {
  bands: Bands[];
};

function StatsSideBarMostSeenBands({ bands }: StatsSideBarMostSeenBandsProps) {
  const mostSeenBands = getMostSeenBand(bands);

  return (
    <div>
      <p className="font-semibold">Most seen bands</p>
      {mostSeenBands.map(band => (
        <Link
          href={`/?search=${band.band}`}
          key={band.id}
          className="flex justify-between hover:text-gray-500"
        >
          <span>{band.band}</span>
          <span>{band.concerts.length}x</span>
        </Link>
      ))}
    </div>
  );
}

export default StatsSideBarMostSeenBands;
