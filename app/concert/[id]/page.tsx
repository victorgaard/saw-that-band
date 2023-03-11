import getBandById from '@/app/utils/getBandById';
import Image from 'next/image';
import BackButton from '../components/BackButton';
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
  const band = await getBandById(params.id);
  const data = await getSetlist(band);

  return (
    <div className="h-screen overflow-auto p-8">
      <BackButton />
      <div className="m-8"> </div>
      <div className="flex items-center gap-8">
        <Image
          src={band[0].picture}
          width={200}
          height={200}
          alt={band[0].band}
          className="rounded-lg"
        />
        <div className="flex flex-col">
          <p className="text-3xl font-semibold">{band[0].band}</p>
          <p className="text-xl">{band[0].concerts[0].location}</p>
          <p>{band[0].concerts[0].date}</p>
        </div>
      </div>
      <div className="m-8"> </div>
      {data && data.setlist
        ? data.setlist.map((music: { name: string }, idx: number) => (
            <p key={music.name} className="mb-4 flex gap-2">
              <span className="font-semibold">{idx + 1}.</span>{' '}
              <span>{music.name}</span>
            </p>
          ))
        : `We could not find the setlist for this concert`}
    </div>
  );
}

export default Concert;
