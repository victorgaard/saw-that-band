import { API_URL } from '@/environments/environments';

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
  const res = await fetch(
    `${API_URL}/api/setlist?band=${band}&location=${location}&date=${date}`
  );

  if (!res.ok) return undefined;

  const resJson = await res.json();
  const json = resJson.data;

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
    const cityArray = [
      response.venue.city?.name,
      stateCodeIsNumber
        ? response.venue.city?.state
        : response.venue.city?.stateCode,
      response.venue.city?.country.name
    ];
    const city = cityArray.filter(c => c !== undefined);
    const coordinates = response.venue.city.coords;
    const mapResponse = response.sets.set.map(
      (c: { song: SetlistData['setlist'] }) => c.song
    );
    const newSetlist: SetlistData['setlist'] = [];
    const setlist = newSetlist.concat(...mapResponse);
    data = {
      date: formatDate,
      city,
      venue,
      tour,
      coordinates,
      setlist
    };
  }

  if (
    json.code === 404 ||
    (json.setlist && json.setlist[0]?.sets.set.length === 0)
  ) {
    data = {
      city: [location],
      date: formatDate
    };
  }

  return data;
}

export default getSetlist;
