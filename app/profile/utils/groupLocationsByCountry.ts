import { Locations } from '../components/ProfileMap';

function groupLocationsByCountry(locations: Locations[]) {
  const groupedByCountry: {
    country: string;
    country_code: string;
    locations: string[];
  }[] = [];

  // Sort the original array by country and location alphabetically
  const sortedLocations = locations.sort((a, b) => {
    if (a.country < b.country) return -1;
    if (a.country > b.country) return 1;
    if (a.location < b.location) return -1;
    if (a.location > b.location) return 1;
    return 0;
  });

  // Use array iterators to group locations by country
  sortedLocations.forEach(location => {
    const countryIndex = groupedByCountry.findIndex(
      group => group.country === location.country
    );

    if (countryIndex !== -1) {
      // If the country is already in the grouped array, push the location
      groupedByCountry[countryIndex].locations.push(location.location);
    } else {
      // If the country is not in the grouped array, create a new country entry
      groupedByCountry.push({
        country: location.country,
        country_code: location.country_code,
        locations: [location.location]
      });
    }
  });

  return groupedByCountry;
}

export default groupLocationsByCountry;
