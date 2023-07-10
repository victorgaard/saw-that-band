import { Bands } from '@/types/bands';
import Image from 'next/image';
import Link from 'next/link';
import BandsListItemCollapsedTags from './BandsListItemCollapsedTags';

type BandsListItemProps = {
  band: Bands;
  setQuery: (query: string) => void;
  resetScroll: () => void;
};

function BandsListItem({ band, setQuery, resetScroll }: BandsListItemProps) {
  const url = `/${band.band.replaceAll(' ', '-')}/${band.id}`;
  return (
    <div className="flex justify-center md:mx-6">
      <Link
        href={url}
        className="group flex h-[160px] w-full items-center justify-between border-b border-zinc-700/50 from-zinc-100/5 to-zinc-500/5 to-50% p-6 text-white hover:border-zinc-600/40 hover:bg-gradient-to-tr sm:border sm:border-transparent md:rounded-lg"
      >
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="h-[112px] w-[112px] shrink-0 overflow-hidden rounded-lg bg-zinc-900">
            <Image
              width={112}
              height={112}
              src={band.picture}
              alt={band.band}
              className="h-[112px] w-[112px] object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:gap-0">
              <span className="text-xl font-semibold text-zinc-300 transition-colors group-hover:text-white sm:text-lg">
                {band.band}
              </span>
              <p className="mt-0.5 flex flex-col text-sm text-zinc-400 transition-colors group-hover:text-zinc-300 sm:flex-row sm:gap-1">
                <span>
                  {band.concerts[0].date.slice(6)} in{' '}
                  {band.concerts[0].location}{' '}
                </span>
                {band.concerts.length > 1 && (
                  <span>
                    & {band.concerts.length - 1} other{' '}
                    {band.concerts.length === 2 ? 'time' : 'times'}
                  </span>
                )}
              </p>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              {band.genre.slice(0, 3).map(genre => (
                <button
                  type="button"
                  key={genre}
                  className="whitespace-nowrap rounded border border-zinc-700/60 p-2 px-3 text-xs font-medium text-zinc-300 shadow-sm transition-colors duration-75 hover:border-zinc-600 hover:bg-zinc-700/50 hover:text-white"
                  onClick={e => {
                    e.preventDefault();
                    setQuery(genre);
                    resetScroll();
                  }}
                >
                  {genre}
                </button>
              ))}
              {band.genre.length > 3 && (
                <BandsListItemCollapsedTags
                  bandGenre={band.genre}
                  setQuery={setQuery}
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BandsListItem;
