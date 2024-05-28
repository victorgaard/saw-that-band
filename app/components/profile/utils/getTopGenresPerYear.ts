import { Bands } from '@/types/bands';

type YearlyGenre = {
  genre: string;
  concerts: number;
};

export type YearlyGenres = {
  year: number;
  genres: YearlyGenre[];
};

function getTopGenresByYear(
  bands: Bands[],
  currentYear: number
): YearlyGenres[] {
  const topGenresPerYear: Record<number, YearlyGenre[]> = {};

  bands.forEach(band => {
    band.concerts.forEach(concert => {
      const concertYear = parseInt(concert.date.split('-')[2], 10);
      if (concertYear === currentYear) {
        band.genre.forEach(genre => {
          if (!topGenresPerYear[currentYear]) {
            topGenresPerYear[currentYear] = [];
          }
          const yearlyGenre = topGenresPerYear[currentYear].find(
            yg => yg.genre === genre
          );
          if (yearlyGenre) {
            yearlyGenre.concerts += 1;
          } else {
            topGenresPerYear[currentYear].push({ genre, concerts: 1 });
          }
        });
      }
    });
  });

  const yearlyGenres: YearlyGenres[] = Object.entries(topGenresPerYear).map(
    ([year, genres]) => {
      const topGenres = genres
        .sort((a, b) => b.concerts - a.concerts)
        .slice(0, 5);

      return { year: parseInt(year, 10), genres: topGenres };
    }
  );

  return yearlyGenres;
}

export default getTopGenresByYear;
