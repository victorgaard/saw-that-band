import bands from '@/app/(components)/bands';
import Link from 'next/link';

type ConcertProps = {
  params: {
    id: string;
  };
};

async function getSetlist(params: string) {
  const concert = bands.find(c => c.id.toString() === params);

  if (concert) {
    const { band, city, date } = concert;

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('x-api-key', process.env.SETLIST_API_KEY!);

    const res = await fetch(
      `${process.env.SETLIST_URL}/search/setlists?artistName=${band}&city=${city}&date=${date}`,
      {
        method: 'GET',
        credentials: 'include',
        redirect: 'follow',
        headers
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const json = await res.json();
    let blep;

    if (json.setlist[0].sets.set.length > 0) {
      const coordinates = json.setlist[0].venue.city.coords;
      const setlist = json.setlist[0].sets.set.map(
        (c: { encore?: number; song: { name: string }[] }) => c.song
      );

      blep = {
        concert,
        coordinates,
        setlist:
          setlist.length > 1 ? [...setlist[0], ...setlist[1]] : [...setlist[0]]
      };
    } else {
      blep = { concert };
    }

    return blep;
  }

  return undefined;
}

async function Concert({ params }: ConcertProps) {
  const data = await getSetlist(params.id);

  return (
    <>
      <Link href="/">Back</Link>
      <div className="m-8"> </div>
      <div className="font-semibold">{data?.concert.band}</div>
      <div>{data?.concert.city}</div>
      <div>{data?.concert.date}</div>
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
