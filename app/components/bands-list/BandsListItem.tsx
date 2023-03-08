import { Bands } from '@/app/types/bands';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import Image from 'next/image';
import Link from 'next/link';
import BandsListItemCollapsedTags from './BandsListItemCollapsedTags';

type BandsListItemProps = {
  band: Bands;
  setQuery: (query: string) => void;
  router: AppRouterInstance;
};

function BandsListItem({ band, setQuery, router }: BandsListItemProps) {
  return (
    <Link
      href={`/concert/${band.id}`}
      className="flex items-center justify-between p-6 hover:bg-gray-100"
    >
      <div className="flex items-center gap-8">
        <div className="h-[112px] w-[112px] shrink-0 overflow-hidden rounded-lg bg-gray-300">
          <Image
            width={112}
            height={112}
            src={band.picture}
            alt={band.band}
            className="h-[112px] w-[112px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <div className="flex gap-2 text-lg font-semibold">
              <span>{band.band}</span>
            </div>
            <div className="flex items-center gap-1">
              {band.concerts.slice(0, 1).map((concert, idx) => (
                <p
                  className="whitespace-nowrap text-sm text-gray-600"
                  key={idx}
                >
                  <span>
                    {concert.date.slice(6)} in {concert.location}
                  </span>
                </p>
              ))}
              {band.concerts.length > 1 && (
                <p className="whitespace-nowrap text-sm text-gray-600">
                  & {band.concerts.length - 1} other{' '}
                  {band.concerts.length === 2 ? 'time' : 'times'}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {band.genre.slice(0, 3).map(genre => (
              <button
                type="button"
                key={genre}
                className="whitespace-nowrap rounded-full bg-gray-200 p-2 px-3 text-xs hover:bg-gray-300"
                onClick={e => {
                  e.preventDefault();
                  setQuery(genre);
                  router.push(`/?search=${genre}`);
                }}
              >
                {genre}
              </button>
            ))}
            {band.genre.length > 3 && (
              <BandsListItemCollapsedTags
                bandGenre={band.genre}
                setQuery={setQuery}
                router={router}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BandsListItem;
