import getBandById from '@/app/utils/getBandById';
import Image from 'next/image';
import BackButton from '../components/BackButton';
import SetlistWrapper from '../components/SetlistWrapper';
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
  const data = await getSetlist(band);

  return (
    <SetlistWrapper url={band.picture}>
      <>
        <BackButton />
        <div className="m-8"> </div>
        <div className="flex items-center gap-8">
          <Image
            src={band.picture}
            width={200}
            height={200}
            alt={band.band}
            className="h-[200px] w-[200px] rounded-lg object-cover shadow-2xl"
          />
          <div className="flex flex-col">
            <p className="text-3xl font-semibold">{band.band}</p>
            <p className="text-xl">{band.concerts[0].location}</p>
            <p>{band.concerts[0].date}</p>
          </div>
        </div>
        <div className="m-8"> </div>
        <div className="-mx-8 p-8">
          {data && data.setlist
            ? data.setlist.map((music: { name: string }, idx: number) => (
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
