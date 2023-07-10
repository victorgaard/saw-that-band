import { Bands } from '@/types/bands';

function getTopBandPerYear(bands: Bands[], startYear: number, endYear: number) {
  const bandRank: { [key: string]: number } = {};

  bands.forEach(band => {
    band.concerts.forEach(concert => {
      const year = parseInt(concert.date.split('-')[2], 10);
      if (year >= startYear && year <= endYear) {
        if (!bandRank[band.band]) {
          bandRank[band.band] = 0;
        }
        bandRank[band.band] += 1;
      }
    });
  });

  const sortedBands = Object.keys(bandRank).sort(
    (a, b) => bandRank[b] - bandRank[a]
  );

  const topBands = sortedBands.slice(0, 5);

  return topBands;
}

export default getTopBandPerYear;
