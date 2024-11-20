import getBandGenres from '@/app/utils/getBandsGenres';
import { Band } from '@/types/bands';
import Link from 'next/link';

type StatsSideBarGenresProps = {
  bands: Band[];
};

function StatsSideBarGenres({ bands }: StatsSideBarGenresProps) {
  const genres = getBandGenres(bands);
  const numOfGenresArray = genres.map(genre => genre.count);
  const sumOfGenres = numOfGenresArray.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  const biggestGenreCount = numOfGenresArray[0];

  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-semibold text-zinc-400">TOP GENRES</p>
      {genres.map(genre => (
        <Link
          href={`/list?search=${genre.genre}`}
          key={genre.genre}
          className="group relative text-[13px]"
        >
          <div
            className="absolute inset-0 rounded bg-zinc-800 group-hover:bg-zinc-700 group-active:bg-zinc-600"
            style={{
              width: `${(genre.count / biggestGenreCount) * 100}%`
            }}
          >
            {' '}
          </div>
          <div className="relative flex justify-between px-2 py-1 font-medium text-zinc-300 group-hover:text-white">
            <span>{genre.genre}</span>
            <span>{genre.count}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StatsSideBarGenres;
