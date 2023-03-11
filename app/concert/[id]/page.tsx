import getBandById from '@/app/utils/getBandById';
import Image from 'next/image';
import BackButton from '../components/BackButton';
import SetlistWrapper from '../components/SetlistWrapper';
import getBandBio from '../utils/getBandBio';
import getSetlist from '../utils/getSetlist';

type ConcertProps = {
  params: {
    id: string;
  };
};

export const metadata = {
  title: 'Setlist'
};

async function Concert({ params }: ConcertProps) {
  const bandArray = await getBandById(params.id);
  const band = bandArray[0];
  const data = await getSetlist(
    band.band,
    band.concerts[0].location,
    band.concerts[0].date
  );
  const bandBio = await getBandBio(band.band);

  return (
    <SetlistWrapper url={band.picture}>
      <>
        <div className="relative -m-8 bg-stone-800 p-8">
          <BackButton />
          <div className="m-8"> </div>
          <div className="flex items-center gap-8">
            <Image
              src={band.picture}
              width={200}
              height={200}
              alt={band.band}
              className="absolute top-20 h-[200px] w-[200px] rounded-lg bg-stone-600 object-cover shadow-2xl"
            />
            <div className="ml-[224px] mt-6 flex flex-col gap-3">
              <p className="text-4xl font-bold">{band.band}</p>
              {bandBio && (
                <p
                  dangerouslySetInnerHTML={{ __html: bandBio }}
                  className="h-[60px] text-sm text-stone-400 line-clamp-3"
                />
              )}
            </div>
          </div>
        </div>
        <div className="m-16"> </div>
        <div className="-mx-8 p-8">
          {data && (
            <>
              {data.tour && <p>Tour: {data.tour}</p>}
              {data.venue && <p>Venue: {data.venue}</p>}
              <p>
                {data.city[0]} - {data.city[1]} - {data.city[2]}
              </p>
            </>
          )}
          <div className="m-8"> </div>
          {data
            ? data.setlist?.map((music: { name: string }, idx: number) => (
                <p key={music.name} className="mb-4 flex gap-2">
                  <span className="font-semibold">{idx + 1}.</span>{' '}
                  <span>{music.name}</span>
                </p>
              ))
            : `We could not find the setlist for this concert`}
        </div>
      </>
    </SetlistWrapper>
  );
}

export default Concert;
