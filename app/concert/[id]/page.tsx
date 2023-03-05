import BackButton from '../components/BackButton';
import getSetlist from '../helpers/getSetlist';

type ConcertProps = {
  params: {
    id: string;
  };
};

export const metadata = {
  title: 'Setlist'
};

async function Concert({ params }: ConcertProps) {
  const data = await getSetlist(params.id);

  return (
    <>
      <BackButton />
      <div className="m-8"> </div>
      <div className="font-semibold">{data?.concert.band}</div>
      <div className="m-8"> </div>
      {data && data.setlist
        ? data.setlist.map((music: { name: string }, idx: number) => (
            <p key={music.name} className="mb-4 flex gap-2">
              <span className="font-semibold">{idx + 1}.</span>{' '}
              <span>{music.name}</span>
            </p>
          ))
        : `We could not find the setlist for this concert`}
    </>
  );
}

export default Concert;
