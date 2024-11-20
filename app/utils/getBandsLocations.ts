import { Band } from '@/types/bands';

type TopLocations = {
  location: string;
  count: number;
};

function getBandLocations(allBands: Band[]) {
  const newBandsArray = [...allBands];
  const topLocations: Record<string, number> = newBandsArray.reduce(
    (counts: Record<string, number>, band) => {
      // Loop through each genre in the bands genres array using forEach()
      band.concerts.forEach(concert => {
        // If the genre is already in the counts object, increment its count by 1
        if (concert.location in counts) {
          const newCounts = counts;
          newCounts[concert.location] += 1;
        }
        // Otherwise, add the genre to the counts object with a count of 1
        else {
          const newCounts = counts;
          newCounts[concert.location] = 1;
        }
      });
      // Return the counts object after processing the genres of the current band
      return counts;
    },
    {}
  );

  const sortTopLocations: TopLocations[] = Object.entries(topLocations)
    .sort((a, b) => b[1] - a[1])
    .map(([location, count]) => ({ location, count }));

  return sortTopLocations.slice(0, 5);
}

export default getBandLocations;
