import { Concert } from '@/types/bands';

function getOldestConcertYear(concerts: Concert[]) {
  const dates = concerts.map(
    concert => new Date(concert.date.split('-').reverse().join('-'))
  );

  dates.sort((a, b) => Number(a) - Number(b));

  const firstConcertDate = dates[0]
    .toLocaleDateString('pt-BR')
    .replaceAll('/', '-');

  return Number(firstConcertDate.slice(6));
}

export default getOldestConcertYear;
