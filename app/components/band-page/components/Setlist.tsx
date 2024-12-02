import Logo from '@/app/components/logo/Logo';
import { Band, Concert } from '@/types/bands';
import { User } from '@/types/user';
import {
  CalendarIcon,
  GlobeAltIcon,
  MapPinIcon,
  PlayIcon,
  PlusCircleIcon,
  TicketIcon
} from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { SetlistData } from '../utils/getSetlist';
import SetlistConcertsSelect from './SetlistConcertsSelect';
import MusicPlayerContext from '../../music-player/MusicPlayerContext';
import { cn } from '@/app/utils/cn';
import ConcertNotes from './ConcertNotes';
import { usePathname, useRouter } from 'next/navigation';
import { constants } from '@/app/utils/constants';

type SetlistProps = {
  user: User;
  band: Band;
  data: SetlistData | undefined;
  concert: Concert;
  token: string | undefined;
  setConcert: (concert: Concert) => void;
};

function Setlist({
  user,
  band,
  data,
  concert,
  token,
  setConcert
}: SetlistProps) {
  const { isOpen, getSongToPlay } = useContext(MusicPlayerContext);

  const router = useRouter();
  const pathname = usePathname();

  function onConcertChange(concert: Concert) {
    setConcert({
      location: concert.location,
      date: concert.date,
      notes: concert.notes
    });
    router.replace(`${pathname}/?&date=${concert.date}`);
  }

  return (
    <div
      className={cn('flex flex-col pb-12 text-zinc-100 sm:pb-0', {
        'pb-48 sm:pb-24': isOpen
      })}
    >
      <p className="pb-4 text-xs font-semibold text-zinc-400">
        {user.username.toLocaleUpperCase()} SAW{' '}
        <span className="font-semibold">{band.band.toLocaleUpperCase()}</span>{' '}
        {band.concerts.length === 1 ? 'ONCE' : `${band.concerts.length} TIMES`}
      </p>
      <div className="lg:hidden">
        {band.concerts.length > 1 && (
          <SetlistConcertsSelect
            band={band}
            onConcertChange={onConcertChange}
            concert={concert}
            isMobile
          />
        )}
      </div>
      <div className="relative hidden lg:block">
        {band.concerts.length > 1 && (
          <div className="-mb-[1px] grid grid-cols-2 lg:grid-cols-4">
            {band.concerts.slice(0, 3).map(currentConcert => {
              const isActive =
                (currentConcert.location, currentConcert.date) ===
                (concert.location, concert.date);
              return (
                <button
                  onClick={() => onConcertChange(currentConcert)}
                  type="button"
                  key={`${currentConcert.date}${currentConcert.location}`}
                  className={cn(
                    '-ml-[1px] truncate whitespace-nowrap border border-zinc-700/60 px-4 py-3 text-sm font-medium shadow-sm transition-colors duration-75 first:ml-0 first:rounded-tl last:rounded-tr hover:text-white',
                    {
                      'border-b-0 bg-zinc-850 text-white': isActive,
                      'bg-zinc-900/20 text-zinc-400 hover:border-zinc-600 hover:bg-zinc-700/50':
                        !isActive,
                      'last:rounded-none': band.concerts.length > 3
                    }
                  )}
                >
                  {currentConcert.location} {currentConcert.date.slice(6)}
                </button>
              );
            })}
            {band.concerts.length > 3 && (
              <SetlistConcertsSelect
                band={band}
                onConcertChange={onConcertChange}
                concert={concert}
              />
            )}
          </div>
        )}
      </div>
      <div
        className={cn(
          'flex flex-col rounded border border-zinc-700/60 bg-zinc-850 p-4',
          {
            'rounded-tl-none': band.concerts.length > 1,
            'rounded-t-none border-t-0': band.concerts.length > 3
          }
        )}
      >
        <div className="mt-5 grid gap-8 px-2 text-sm text-white sm:grid-cols-2">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <GlobeAltIcon className="h-8 w-8 text-zinc-600" strokeWidth={1} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-zinc-400">
                LOCATION
              </span>
              <div className="flex flex-wrap items-center gap-1">
                {data?.city.map((c, idx) => (
                  <p key={idx}>
                    <span>{c}</span>
                    {data.city.length - 1 !== idx && <span> - </span>}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <CalendarIcon className="h-8 w-8 text-zinc-600" strokeWidth={1} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-zinc-400">DATE</span>
              {data?.date.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
          {data?.venue && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <MapPinIcon className="h-8 w-8 text-zinc-600" strokeWidth={1} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-zinc-400">
                  VENUE
                </span>
                <span>{data.venue}</span>
              </div>
            </div>
          )}
          {data?.tour && (
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <TicketIcon className="h-8 w-8 text-zinc-600" strokeWidth={1} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-zinc-400">
                  TOUR
                </span>{' '}
                <span>{data.tour}</span>
              </div>
            </div>
          )}
        </div>
        <ConcertNotes user={user.name || user.username} notes={concert.notes} />
        {data && data.setlist && (
          <div className="mt-12 flex flex-col rounded-lg text-sm sm:-mx-10 sm:px-6">
            <p className="m-0 mb-6 flex w-full flex-nowrap items-center text-xs text-zinc-300 before:relative before:mr-5 before:h-[1px] before:w-full before:bg-zinc-600 before:opacity-30 before:content-[''] after:relative after:ml-5 after:h-[1px] after:w-full after:bg-zinc-600 after:opacity-30 after:content-['']">
              <span className="flex-shrink-0 text-xs font-semibold text-zinc-600">
                CONCERT SETLIST
              </span>
            </p>
            {data?.setlist?.map((song, idx) => (
              <div
                aria-hidden
                onClick={() => {
                  getSongToPlay(
                    token || '',
                    song.cover ? song.cover.name : band.band,
                    song.name
                  );
                }}
                key={`${idx}${song.name}`}
                className="group flex cursor-pointer items-center justify-between gap-4 border-b border-zinc-700/50 px-2 py-4 last:border-none hover:bg-zinc-900/20 sm:px-7"
              >
                <div
                  className={cn(
                    'flex items-center gap-3 font-medium sm:gap-6',
                    {
                      'text-zinc-500': song.tape,
                      'text-zinc-200 group-hover:text-white': !song.tape
                    }
                  )}
                >
                  <p className="w-5 shrink-0 pl-1">
                    <span className="font-semibold group-hover:hidden">
                      {idx + 1}.
                    </span>
                    {'  '}
                    <PlayIcon className="-ml-0.5 hidden h-4 w-4 fill-white group-hover:block" />
                  </p>
                  <div className="flex flex-col gap-[2px]">
                    {song.tape
                      ? `Played from tape${song.name ? `: ${song.name}` : ''}`
                      : song.name}
                    <div className="flex flex-wrap items-center gap-1">
                      {song.cover && (
                        <span
                          className={cn('text-xs font-normal', {
                            'text-zinc-400': !song.tape
                          })}
                        >
                          ({song.cover.name} cover)
                        </span>
                      )}
                      {song.with && (
                        <span
                          className={cn('text-xs font-normal', {
                            'text-zinc-400': !song.tape
                          })}
                        >
                          (with {song.with.name})
                        </span>
                      )}
                      {song.info && (
                        <span
                          className={cn('text-xs font-normal', {
                            'text-zinc-400': !song.tape
                          })}
                        >
                          {song.info}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="hidden group-hover:sm:block">Play</p>
                <PlayIcon className="h-4 w-4 shrink-0 fill-white sm:hidden" />
              </div>
            ))}
          </div>
        )}

        {data && !data.setlist && (
          <div className="-mx-4 flex flex-col items-center gap-2 rounded-lg py-16">
            <p className="m-0 mb-6 flex w-full flex-nowrap items-center text-xs text-zinc-300 before:relative before:mr-5 before:h-[1px] before:w-full before:bg-zinc-600 before:opacity-30 before:content-[''] after:relative after:ml-5 after:h-[1px] after:w-full after:bg-zinc-600 after:opacity-30 after:content-['']">
              <span className="flex-shrink-0 text-xs font-semibold text-zinc-600">
                CONCERT SETLIST
              </span>
            </p>
            <div className="flex items-center gap-1 pb-4 text-zinc-700">
              <span className="text-6xl font-bold">4</span>
              <Logo width={56} height={56} />{' '}
              <span className="text-6xl font-bold">4</span>
            </div>
            <p className="text-zinc-300">Oh crap, there is no setlist for</p>
            <p className="text-xl font-medium text-white">
              {band.band} in {concert.location} {concert.date.slice(6)}
            </p>
            <div className="py-6">
              <a
                href={data.url || constants.SETLIST.ADD_SETLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded border border-zinc-700/60 p-2 px-3 text-sm font-medium text-zinc-300 shadow-sm transition-colors duration-75 hover:border-zinc-600 hover:bg-zinc-700/50 hover:text-white"
                aria-label="Create a setlist for this concert"
              >
                <PlusCircleIcon className="size-4 opacity-50" /> Add setlist
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Setlist;
