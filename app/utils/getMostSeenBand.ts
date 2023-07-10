import { Bands } from '@/types/bands';

function getMostSeenBand(allBands: Bands[]) {
  const newBandsArray = [...allBands];
  return newBandsArray
    .sort((a, b) => b.concerts.length - a.concerts.length)
    .slice(0, 5);
}

export default getMostSeenBand;
