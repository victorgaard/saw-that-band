import { Band } from '@/types/bands';

function sortBandsByConcertDate(bands: Band[]) {
  const flattenedBands: Band[] = bands.flatMap(band =>
    band.concerts.map(concert => ({
      ...band,
      concerts: [concert]
    }))
  );

  flattenedBands.sort((a, b) => {
    const dateA = new Date(
      a.concerts[0].date.split('-').reverse().join('-')
    ).getTime();
    const dateB = new Date(
      b.concerts[0].date.split('-').reverse().join('-')
    ).getTime();
    return dateB - dateA;
  });

  return flattenedBands.slice(0, 12);
}

export default sortBandsByConcertDate;
