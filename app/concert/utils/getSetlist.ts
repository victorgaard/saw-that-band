import { Bands } from '@/app/types/bands';

async function getSetlist(fromThisBand: Bands[]) {
  const { band } = fromThisBand[0];
  const { location } = fromThisBand[0].concerts[0];
  const { date } = fromThisBand[0].concerts[0];

  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('x-api-key', process.env.SETLIST_API_KEY!);

  const res = await fetch(
    `${process.env.SETLIST_URL}/search/setlists?artistName=${band}&city=${location}&date=${date}`,
    {
      method: 'GET',
      credentials: 'include',
      redirect: 'follow',
      headers
    }
  );

  if (!res.ok) return undefined;

  const json = await res.json();
  let data;

  if (
    json.code !== 404 &&
    !json.message &&
    json.setlist[0].sets.set.length > 0
  ) {
    const coordinates = json.setlist[0].venue.city.coords;
    const setlist = json.setlist[0].sets.set.map(
      (c: { encore?: number; song: { name: string }[] }) => c.song
    );
    data = {
      coordinates,
      setlist:
        setlist.length > 1 ? [...setlist[0], ...setlist[1]] : [...setlist[0]]
    };
  }

  return data;
}

export default getSetlist;
