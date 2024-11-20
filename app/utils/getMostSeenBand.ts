import { Band } from '@/types/bands';

function getMostSeenBand(allBands: Band[]) {
  const newBandsArray = [...allBands];
  return newBandsArray
    .sort((a, b) => b.concerts.length - a.concerts.length)
    .slice(0, 5);
}

export default getMostSeenBand;
