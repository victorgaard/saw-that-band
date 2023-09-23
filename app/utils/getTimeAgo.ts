function getTimeAgo(dateString: string) {
  const currentDate = new Date();
  const dateParts = dateString.slice(0, 10).split('-');
  if (dateParts[0].length > 2) {
    dateParts.reverse();
  }
  const date = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
  const timeDifference = currentDate.getTime() - date.getTime();
  const millisecondsInOneSecond = 1000;
  const secondsInOneMinute = 60;
  const minutesInOneHour = 60;
  const hoursInOneDay = 24;
  const daysInOneWeek = 7;
  const daysInOneMonth = 30;
  const monthsInOneYear = 12;

  const timeUnits = [
    {
      unit: 'year',
      value:
        millisecondsInOneSecond *
        secondsInOneMinute *
        minutesInOneHour *
        hoursInOneDay *
        daysInOneMonth *
        monthsInOneYear
    },
    {
      unit: 'month',
      value:
        millisecondsInOneSecond *
        secondsInOneMinute *
        minutesInOneHour *
        hoursInOneDay *
        daysInOneMonth
    },
    {
      unit: 'week',
      value:
        millisecondsInOneSecond *
        secondsInOneMinute *
        minutesInOneHour *
        hoursInOneDay *
        daysInOneWeek
    },
    {
      unit: 'day',
      value:
        millisecondsInOneSecond *
        secondsInOneMinute *
        minutesInOneHour *
        hoursInOneDay
    },
    {
      unit: 'hour',
      value: millisecondsInOneSecond * secondsInOneMinute * minutesInOneHour
    },
    { unit: 'minute', value: millisecondsInOneSecond * secondsInOneMinute },
    { unit: 'second', value: millisecondsInOneSecond }
  ];

  const timeAgoUnit = timeUnits.find(timeUnit => {
    const timeAgo = Math.floor(timeDifference / timeUnit.value);
    return timeAgo >= 1;
  });

  if (timeAgoUnit) {
    const timeAgo = Math.floor(timeDifference / timeAgoUnit.value);
    return `${timeAgo} ${timeAgoUnit.unit}${timeAgo > 1 ? 's' : ''} ago`;
  }

  return 'Just now';
}

export default getTimeAgo;
