import 'server-only';

export type SetlistData = {
  date: Date;
  city: string[];
  venue?: string;
  tour?: string;
  coordinates?: {
    lat: number;
    long: number;
  };
  setlist?: {
    name: string;
    tape?: boolean;
    info?: string;
  }[];
};

async function getSetlist(band: string, location: string, date: string) {
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

  let data: SetlistData | undefined;
  const [day, month, year] = date.split('-');
  const formatDate = new Date(Number(year), Number(month) - 1, Number(day));

  if (
    json.code !== 404 &&
    !json.message &&
    json.setlist[0].sets.set.length > 0
  ) {
    const response = json.setlist[0];
    const venue = response.venue?.name;
    const tour = response.tour?.name;
    const stateCodeIsNumber = /\d/.test(response.venue.city?.stateCode);
    const city = [
      response.venue.city?.name,
      stateCodeIsNumber
        ? response.venue.city?.state
        : response.venue.city?.stateCode,
      response.venue.city?.country.name
    ];
    const coordinates = response.venue.city.coords;
    const setlist = response.sets.set.map(
      (c: { encore?: number; song: { name: string }[] }) => c.song
    );
    data = {
      date: formatDate,
      city,
      venue,
      tour,
      coordinates,
      setlist:
        setlist.length > 1 ? [...setlist[0], ...setlist[1]] : [...setlist[0]]
    };
  }

  if (json.code === 404 || json.setlist[0].sets.set.length === 0) {
    data = {
      city: [location],
      date: formatDate
    };
  }

  return data;
}

export default getSetlist;
