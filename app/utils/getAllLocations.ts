import { Bands } from '@/types/bands';

function getAllLocations(bands: Bands[]) {
  const locationMap: Map<string, Set<string>> = new Map();
  const allBands = [...bands];

  allBands.forEach(band => {
    band.concerts.forEach(concert => {
      const locationSet: Set<string> =
        locationMap.get(concert.date) || new Set();
      locationSet.add(concert.location);
      locationMap.set(concert.date, locationSet);
    });
  });

  const locations: string[] = Array.from(locationMap.values())
    .flatMap(locationSet => Array.from(locationSet))
    .filter((location, index, self) => self.indexOf(location) === index);

  return locations;
}

export default getAllLocations;
