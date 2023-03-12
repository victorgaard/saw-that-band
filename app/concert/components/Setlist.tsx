import { Bands } from '@/app/types/bands';
import { SetlistData } from '../utils/getSetlist';

type SetlistProps = {
  band: Bands;
  data: SetlistData | undefined;
};

function Setlist({ band, data }: SetlistProps) {
  return (
    <div>
      {data ? (
        <>
          <div className="flex flex-col gap-2">
            <p className="text-base font-medium text-stone-300">
              Victor saw {band.band} live {band.concerts.length}{' '}
              {band.concerts.length === 1 ? 'time:' : 'times:'}
            </p>
            <div className="flex items-center gap-2 self-start rounded-lg bg-stone-800 p-2">
              {band.concerts.map(concert => (
                <button
                  type="button"
                  key={concert.date}
                  className="whitespace-nowrap rounded bg-stone-700 px-2 py-1 text-left text-sm text-white first:bg-yellow-700 hover:bg-stone-600"
                >
                  {concert.location} {concert.date.slice(6)}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6"> </div>
          <div className="-mx-8 px-8">
            {data.tour && <p>Tour: {data.tour}</p>}
            {data.venue && <p>Venue: {data.venue}</p>}
            <p>
              {data.city[0]} - {data.city[1]} - {data.city[2]}
            </p>
            <div className="m-8"> </div>
            {data.setlist?.map((music, idx: number) => (
              <p key={music.name} className="mb-2 flex gap-2">
                <span className="font-semibold">{idx + 1}.</span>{' '}
                <span>{music.tape ? 'Intro from tape' : music.name}</span>
              </p>
            ))}
          </div>
        </>
      ) : (
        'We could not find the setlist for this concert'
      )}
    </div>
  );
}

export default Setlist;
