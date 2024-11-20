import { Band, Concert } from '@/types/bands';

function compareConcertDates(a: Concert, b: Concert): number {
  const dateA = new Date(a.date.split('-').reverse().join('-'));
  const dateB = new Date(b.date.split('-').reverse().join('-'));
  return dateB.getTime() - dateA.getTime();
}

function sortBandsByConcertDate(bands: Band[]): Band[] {
  const currentBands = Array.from(bands);
  currentBands.forEach(band => {
    band.concerts.sort(compareConcertDates);
  });
  currentBands.sort((a, b) => {
    const mostRecentConcertA =
      a.concerts.length > 0
        ? new Date(a.concerts[0].date.split('-').reverse().join('-')).getTime()
        : 0;
    const mostRecentConcertB =
      b.concerts.length > 0
        ? new Date(b.concerts[0].date.split('-').reverse().join('-')).getTime()
        : 0;
    return mostRecentConcertB - mostRecentConcertA;
  });
  return currentBands.slice(0, 12);
}

export default sortBandsByConcertDate;
