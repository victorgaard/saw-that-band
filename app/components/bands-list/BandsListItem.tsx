import { Bands } from '@/app/types/bands';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import Image from 'next/image';
import Link from 'next/link';

type BandsListItemProps = {
  band: Bands;
  setQuery: (query: string) => void;
  router: AppRouterInstance;
};

function BandsListItem({ band, setQuery, router }: BandsListItemProps) {
  return (
    <Link
      href={`/band/${band.id}`}
      key={band.id}
      className="flex items-center justify-between rounded-lg p-6 hover:bg-gray-100"
    >
      <div className="flex items-center gap-8">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-300">
          <Image
            width={96}
            height={96}
            src={band.picture}
            alt={band.band}
            className="h-[96px] w-[96px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-lg font-semibold">
            <span>{band.band}</span>
            {band.concerts.length > 1 && (
              <span>- saw {band.concerts.length} times</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {band.genre.slice(0, 3).map(genre => (
              <button
                type="button"
                key={genre}
                className="whitespace-nowrap rounded-full bg-gray-200 p-2 text-xs hover:bg-gray-300"
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
              <p className="rounded-full bg-gray-200 p-2 text-xs">
                +{band.genre.length - 3}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BandsListItem;
