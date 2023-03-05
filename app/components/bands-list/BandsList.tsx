'use client';

import { Bands } from '@/data/bands';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useBandsList from './hooks/useBandsList';

type BandsListProps = {
  bands: Bands[];
};

function BandsList({ bands }: BandsListProps) {
  const { filteredBands, query, handleChange } = useBandsList({
    bands
  });
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <div className="fixed w-[675px]">
        <input
          onChange={e => {
            handleChange(e);
          }}
          value={query}
          placeholder="Search for the band, genre or location"
          className="w-full rounded-full border bg-white/80 p-6 backdrop-blur-xl transition-all focus:shadow-2xl"
        />
        {query && (
          <button
            onClick={() => router.push('/')}
            type="button"
            className="absolute right-4 top-2 h-14 w-14 rounded-full bg-gray-50 hover:bg-gray-100"
          >
            x
          </button>
        )}
      </div>
      <div className="w-[675px] pt-24">
        {query && (
          <p className="mb-4 text-center text-gray-500">
            {filteredBands?.length} results for: {query}
          </p>
        )}
        {filteredBands?.map(concert => (
          <Link
            href={`/concert/${concert.id}`}
            key={concert.id}
            className="flex items-center justify-between rounded-lg p-6 hover:bg-gray-100"
          >
            <div className="flex items-center gap-8">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-300">
                <Image
                  width={96}
                  height={96}
                  src={concert.picture}
                  alt={concert.band}
                  className="h-[96px] w-[96px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 text-lg font-semibold">
                  <span>{concert.band}</span>
                  {concert.concerts.length > 1 && (
                    <span>- saw {concert.concerts.length} times</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {concert.genre.slice(0, 3).map(genre => (
                    <button
                      type="button"
                      key={genre}
                      className="whitespace-nowrap rounded-full bg-gray-200 p-2 text-xs hover:bg-gray-300"
                      onClick={e => {
                        e.preventDefault();
                        router.push(`/?search=${genre}`);
                      }}
                    >
                      {genre}
                    </button>
                  ))}
                  {concert.genre.length > 3 && (
                    <p className="rounded-full bg-gray-200 p-2 text-xs">
                      +{concert.genre.length - 3}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BandsList;
