import { Band, Concert } from '@/types/bands';

function getConcertsByYear(bands: Band[], requestYear: number) {
  const filteredConcerts: Concert[] = [];
  bands.forEach(band => {
    const concerts = band.concerts.filter(concert => {
      const dateParts = concert.date.split('-');
      const year = parseInt(dateParts[2], 10);
      return year === requestYear;
    });
    filteredConcerts.push(...concerts);
  });

  const groupedConcertsByMonth: { [key: number]: Concert[] } = {};
  filteredConcerts.forEach(concert => {
    const dateParts = concert.date.split('-');
    const month = parseInt(dateParts[1], 10);
    if (!groupedConcertsByMonth[month]) {
      groupedConcertsByMonth[month] = [];
    }
    groupedConcertsByMonth[month].push(concert);
  });

  // Transform the groupedConcertsByMonth object into an array of objects with desired format
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const result = monthNames.map((monthName, index) => {
    const month = index + 1; // Add 1 to convert to one-based index
    const concerts = groupedConcertsByMonth[month] || [];
    return { month: monthName, concerts: concerts.length };
  });

  // Add months with no concerts with concerts count of 0
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Add 1 to convert to one-based index
  const missingMonths = monthNames.filter((monthName, index) => {
    const month = index + 1;
    return !groupedConcertsByMonth[month];
  });

  if (requestYear === currentYear && currentMonth >= 12) {
    // If the request year is the current year and the current month is December or later,
    // remove duplicates of December from the result
    const indexToRemove = result.findIndex(month => month.month === 'December');
    result.splice(indexToRemove, 1);
  }

  // Add missingMonths to the result array only if they are not already present
  missingMonths.forEach(monthName => {
    const monthExists = result.some(month => month.month === monthName);
    if (!monthExists) {
      result.push({ month: monthName, concerts: 0 });
    }
  });

  return result;
}

export default getConcertsByYear;
