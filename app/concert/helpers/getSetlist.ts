import bands from '@/data/bands';

async function getSetlist(params: string) {
  const concert = bands.find(c => c.id.toString() === params);

  if (concert) {
    const { band, concerts } = concert;

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('x-api-key', process.env.SETLIST_API_KEY!);

    const res = await fetch(
      `${process.env.SETLIST_URL}/search/setlists?artistName=${band}&city=${concerts[0].location}&date=${concerts[0].date}`,
      {
        method: 'GET',
        credentials: 'include',
        redirect: 'follow',
        headers
      }
    );

    let concertInfo;

    if (!res.ok) {
      concertInfo = { concert };
      return concertInfo;
    }

    const json = await res.json();

    if (
      json.code !== 404 &&
      !json.message &&
      json.setlist[0].sets.set.length > 0
    ) {
      const coordinates = json.setlist[0].venue.city.coords;
      const setlist = json.setlist[0].sets.set.map(
        (c: { encore?: number; song: { name: string }[] }) => c.song
      );
      concertInfo = {
        concert,
        coordinates,
        setlist:
          setlist.length > 1 ? [...setlist[0], ...setlist[1]] : [...setlist[0]]
      };
    } else {
      concertInfo = { concert };
    }

    return concertInfo;
  }

  return undefined;
}

export default getSetlist;
