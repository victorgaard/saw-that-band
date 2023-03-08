import { Bands } from '@/app/types/bands';
import getBandGenres from '@/app/utils/getBandsGenres';
import Link from 'next/link';

type StatsSideBarGenresProps = {
  bands: Bands[];
};

function StatsSideBarGenres({ bands }: StatsSideBarGenresProps) {
  const genres = getBandGenres(bands);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-base font-semibold">Top genres</p>
      {genres.map(genre => (
        <Link
          href={`/?search=${genre.genre}`}
          key={genre.genre}
          className="flex justify-between hover:text-gray-500"
        >
          <span>{genre.genre}</span>
          <span>{genre.count}</span>
        </Link>
      ))}
    </div>
  );
}

export default StatsSideBarGenres;
