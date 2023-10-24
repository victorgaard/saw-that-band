import { Concerts } from '@/types/bands';

function parseDate(dateStr: string): Date {
  const parts = dateStr.split('-');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
}

function sortConcertsByDate(concertsArray: Concerts[]) {
  const newConcerts = [...concertsArray];
  return newConcerts.sort(
    (a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime()
  );
}

export default sortConcertsByDate;
