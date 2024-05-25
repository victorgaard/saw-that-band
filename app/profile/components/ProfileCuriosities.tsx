import {
  ClockIcon,
  InformationCircleIcon,
  SunIcon,
  TvIcon
} from '@heroicons/react/24/outline';

type ProfileCuriositiesProps = {
  isOpen: boolean;
  concertsLength: number;
  hoursSpentOnConcerts: number;
  avgConcert: number;
  daysSpentOnConcerts: number;
  kmTravelled: number;
  avgKmPerHour: number;
  timesToTravelTheEarthFlying: number;
  avgEarthTravel: number;
  theOffice: number;
  theOfficeTimes: number;
  onePiece: number;
  onePieceTimes: number;
  missingForOnePiece: number;
};

function ProfileCuriosities({
  isOpen,
  concertsLength,
  hoursSpentOnConcerts,
  avgConcert,
  daysSpentOnConcerts,
  kmTravelled,
  avgKmPerHour,
  timesToTravelTheEarthFlying,
  avgEarthTravel,
  theOffice,
  theOfficeTimes,
  onePiece,
  onePieceTimes,
  missingForOnePiece
}: ProfileCuriositiesProps) {
  return (
    <>
      <p className="text-center text-xs font-semibold text-zinc-400">
        HOW DOES {concertsLength}{' '}
        {concertsLength === 1 ? 'CONCERT' : 'CONCERTS'} IN HOURS LOOK LIKE?
      </p>
      <div className="relative grid text-sm text-zinc-400 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-6 rounded-t-lg border border-zinc-700/60 bg-zinc-850 py-12 lg:rounded-l-lg lg:rounded-tr-none">
          <ClockIcon className="h-6 w-6 opacity-50" />
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-4xl font-semibold text-white">
              {hoursSpentOnConcerts} hours
            </span>{' '}
            <div className="relative">
              <span className="peer flex items-center gap-2">
                watching concerts
                <InformationCircleIcon className="h-4 w-4" />
              </span>
              <div className="absolute top-7 hidden min-w-[200px] animate-fade-in-up-short rounded-lg bg-zinc-900 px-4 py-2 text-xs peer-hover:block">
                Considering the average concert time of {avgConcert} minutes
              </div>
            </div>
          </div>
        </div>
        <div className="item-center pointer-events-none absolute flex h-full w-full justify-center">
          <p className="flex h-12 w-12 items-center justify-center self-center rounded-full border border-zinc-700 bg-zinc-850 text-zinc-400">
            or
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-b-lg border border-t-0 border-zinc-700/60 bg-zinc-850 py-12 lg:rounded-l-none lg:rounded-r-lg lg:border-l-0 lg:border-t">
          <SunIcon className="h-6 w-6 opacity-50" />
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-4xl font-semibold text-white">
              {daysSpentOnConcerts} days
            </span>{' '}
            of concerts non-stop
          </div>
        </div>
      </div>
      {/* <p className="text-center text-xs font-semibold text-zinc-400">
        WITH THIS MUCH TIME, ONE COULD TRAVEL:
      </p>
      <div className="relative grid text-sm text-zinc-400 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-6 rounded-t-lg border border-zinc-700/60 bg-zinc-850 py-12 lg:rounded-l-lg lg:rounded-tr-none">
          <MapIcon className="h-6 w-6 opacity-50" />
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-4xl font-semibold text-white">
              {kmTravelled} km
            </span>
            <div className="relative">
              <span className="peer flex items-center gap-2">
                by foot
                <InformationCircleIcon className="h-4 w-4" />
              </span>
              <div className="absolute top-7 hidden min-w-[200px] animate-fade-in-up-short rounded-lg bg-zinc-900 px-4 py-2 text-xs peer-hover:block">
                Considering the average walking speed of {avgKmPerHour} km/h
              </div>
            </div>
          </div>
        </div>
        <div className="item-center pointer-events-none absolute flex h-full w-full justify-center">
          <p className="flex h-12 w-12 items-center justify-center self-center rounded-full border border-zinc-700 bg-zinc-850 text-zinc-400">
            or
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-b-lg border border-t-0 border-zinc-700/60 bg-zinc-850 py-12 lg:rounded-l-none lg:rounded-r-lg lg:border-l-0 lg:border-t">
          <GlobeAmericasIcon className="h-6 w-6 opacity-50" />
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-4xl font-semibold text-white">
              {timesToTravelTheEarthFlying}x
            </span>
            <div className="relative">
              <span className="peer flex items-center gap-2">
                around the earth on a plane
                <InformationCircleIcon className="h-4 w-4" />
              </span>
              <div className="absolute top-7 hidden min-w-[200px] animate-fade-in-up-short rounded-lg bg-zinc-900 px-4 py-2 text-xs peer-hover:block">
                Considering it would take {avgEarthTravel} hours to fly around
                the Earth.
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <p className="text-center text-xs font-semibold text-zinc-400">
        WITH THIS MUCH TIME, ONE COULD BINGE WATCH:
      </p>
      <div className="relative grid text-sm text-zinc-400 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-6 rounded-t-lg border border-zinc-700/60 bg-zinc-850 py-12 lg:rounded-l-lg lg:rounded-tr-none">
          <TvIcon className="h-6 w-6 opacity-50" />
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-4xl font-semibold text-white">
              The Office
            </span>
            <div className="relative">
              <span className="peer flex items-center gap-2">
                entire series {theOfficeTimes.toFixed(0)}x.
                <InformationCircleIcon className="h-4 w-4" />
              </span>
              <div className="absolute top-7 hidden min-w-[200px] animate-fade-in-up-short rounded-lg bg-zinc-900 px-4 py-2 text-xs peer-hover:block">
                Considering it takes {theOffice} hours to watch The Office (US).
              </div>
            </div>
          </div>
        </div>
        <div className="item-center pointer-events-none absolute flex h-full w-full justify-center">
          <p className="flex h-12 w-12 items-center justify-center self-center rounded-full border border-zinc-700 bg-zinc-850 text-zinc-400">
            or
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-b-lg border border-t-0 border-zinc-700/60 bg-zinc-850 py-12 lg:rounded-l-none lg:rounded-r-lg lg:border-l-0 lg:border-t">
          <TvIcon className="h-6 w-6 opacity-50" />
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-4xl font-semibold text-white">One Piece</span>
            <div className="relative">
              <span className="peer flex items-center gap-1 text-balance px-12 text-center">
                not really, still missing {missingForOnePiece} hours. Gomu gomu
                no...
                <InformationCircleIcon className="h-4 w-4 shrink-0" />
              </span>
              <div className="absolute top-12 hidden min-w-[200px] animate-fade-in-up-short rounded-lg bg-zinc-900 px-4 py-2 text-xs peer-hover:block">
                Considering it takes {onePiece} hours to watch One Piece.
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <div className="mb-24" />}
    </>
  );
}

export default ProfileCuriosities;
