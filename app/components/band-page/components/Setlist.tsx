import Logo from '@/app/components/logo/Logo';
import { Bands, Concerts } from '@/types/bands';
import { User } from '@/types/user';
import {
  CalendarIcon,
  GlobeAltIcon,
  MapPinIcon,
  PlayIcon,
  TicketIcon
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useContext } from 'react';
import { SetlistData } from '../utils/getSetlist';
import SetlistConcertsSelect from './SetlistConcertsSelect';
import MusicPlayerContext from '../../music-player/MusicPlayerContext';

type SetlistProps = {
  user: User;
  band: Bands;
  data: SetlistData | undefined;
  concert: Concerts;
  token: string | undefined;
  setConcert: (concert: Concerts) => void;
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

  return (
    <div className="flex flex-col text-zinc-100">
      <p className="pb-4 text-xs font-semibold text-zinc-400">
        {user.username.toLocaleUpperCase()} SAW{' '}
        <span className="font-semibold">{band.band.toLocaleUpperCase()}</span>{' '}
        {band.concerts.length === 1 ? 'ONCE' : `${band.concerts.length} TIMES`}
      </p>
      <div className="lg:hidden">
        {band.concerts.length > 1 && (
          <SetlistConcertsSelect
            band={band}
            setConcert={setConcert}
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
                  onClick={() =>
                    setConcert({
                      location: currentConcert.location,
                      date: currentConcert.date
                    })
                  }
                  type="button"
                  key={`${currentConcert.date}${currentConcert.location}`}
                  className={classNames(
                    '-ml-[1px] truncate whitespace-nowrap border border-zinc-700/60 px-4 py-3 text-sm font-medium shadow-sm transition-colors duration-75 first:ml-0 first:rounded-tl last:rounded-tr hover:text-white',
                    {
                      ' border-b-0 bg-zinc-850 text-white': isActive,
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
                setConcert={setConcert}
                concert={concert}
              />
            )}
          </div>
        )}
      </div>
      <div
        className={classNames(
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
        {data && data.setlist && (
          <div className="-mx-10 mt-12 flex flex-col rounded-lg px-6 text-sm">
            <p className="m-0 mb-6 flex w-full flex-nowrap items-center text-xs text-zinc-300 before:relative before:mr-5 before:h-[1px] before:w-full before:bg-zinc-600 before:opacity-30 before:content-[''] after:relative after:ml-5 after:h-[1px] after:w-full after:bg-zinc-600 after:opacity-30 after:content-['']">
              <span className="flex-shrink-0 text-xs font-semibold text-zinc-600">
                CONCERT SETLIST
              </span>
            </p>
            {data?.setlist?.map((song, idx) => (
              <div
                aria-hidden
                onClick={() => {
                  getSongToPlay(token!, band.band, song.name);
                }}
                key={`${idx}${song.name}`}
                className="group flex cursor-pointer items-center justify-between gap-4 border-b border-zinc-700/50 px-8 py-4 last:border-none hover:bg-zinc-900/20"
              >
                <div
                  className={classNames(
                    'flex items-center gap-3 font-medium sm:gap-6',
                    {
                      'text-zinc-500': song.tape,
                      'text-zinc-300 group-hover:text-white': !song.tape
                    }
                  )}
                >
                  <p className="w-5">
                    <span className="font-semibold group-hover:hidden">
                      {idx + 1}.
                    </span>
                    {'  '}
                    <PlayIcon className="-ml-0.5 hidden h-4 w-4 fill-white group-hover:block" />
                  </p>
                  <span>
                    {song.tape
                      ? `Played from tape${song.name ? `: ${song.name}` : ''} ${
                          song.info ? `(${song.info})` : ''
                        }`
                      : song.name}
                  </span>
                </div>
                <p className="hidden group-hover:sm:block">Play</p>
                <PlayIcon className="h-4 w-4 shrink-0 fill-white sm:hidden" />
              </div>
            ))}
          </div>
        )}

        <div className={isOpen && data?.setlist ? 'mb-44' : 'mb-12 sm:mb-0'} />
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Setlist;
