import { Concert } from '@/types/bands';

function getFirstAndLastConcert(concerts: Concert[]) {
  // Convert the string date to a Date object
  const dates = concerts.map(
    concert => new Date(concert.date.split('-').reverse().join('-'))
  );

  // Sort the list to get the earliest date
  dates.sort((a, b) => Number(a) - Number(b));

  // Convert the Date object back to the string date
  const firstConcertDate = dates[0]
    .toLocaleDateString('pt-BR')
    .replaceAll('/', '-');

  const lastConcertDate = dates[dates.length - 1]
    .toLocaleDateString('pt-BR')
    .replaceAll('/', '-');

  // Find the object inside concerts array that matches the earliest date found
  const firstConcert = concerts.find(
    concert => concert.date === firstConcertDate
  );

  // Find the object inside concerts array that matches the latest date found
  const lastConcert = concerts.find(
    concert => concert.date === lastConcertDate
  );

  // Return the first concert object
  return { firstConcert, lastConcert };
}

export default getFirstAndLastConcert;
