import { Bands } from '@/types/bands';

type TopGenres = {
  genre: string;
  count: number;
};

function getBandGenres(allBands: Bands[]) {
  const newBandsArray = [...allBands];
  const topGenres: Record<string, number> = newBandsArray.reduce(
    (counts: Record<string, number>, band) => {
      // Loop through each genre in the bands genres array using forEach()
      band.genre.forEach(genre => {
        // If the genre is already in the counts object, increment its count by 1
        if (genre in counts) {
          const newCounts = counts;
          newCounts[genre] += 1;
        }
        // Otherwise, add the genre to the counts object with a count of 1
        else {
          const newCounts = counts;
          newCounts[genre] = 1;
        }
      });
      // Return the counts object after processing the genres of the current band
      return counts;
    },
    {}
  );
  const sortTopGenres: TopGenres[] = Object.entries(topGenres)
    .sort((a, b) => b[1] - a[1])
    .map(([genre, count]) => ({ genre, count }));

  return sortTopGenres.slice(0, 5);
}

export default getBandGenres;
