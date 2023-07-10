import { API_URL } from '@/environments/environments';

type Data = {
  location: string;
  country: string;
  lat: number;
  lon: number;
};

async function getGeolocations(locations: string[]) {
  const firstBatch = [...locations];
  const all: Data[] = [];

  const results = firstBatch.map(async item => {
    const res = await fetch(`${API_URL}/api/geolocation?city=${item}`);
    const resJson = await res.json();
    const shortcut = resJson.features[0]?.properties;

    if (shortcut) {
      const data = {
        location: item,
        country: shortcut.country,
        lat: shortcut.lat,
        lon: shortcut.lon
      };
      all.push(data);
    }
  });

  await Promise.all(results);

  return all;
}

export default getGeolocations;
