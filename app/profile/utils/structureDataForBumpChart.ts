import { Bands } from '@/types/bands';
import getTopBandPerYear from './getTopBandPerYear';

export type BandData = {
  x: number;
  y: number | null;
};

export type BandInfo = {
  id: string;
  data: BandData[];
};

function structureDataForBumpChart(
  bands: Bands[],
  currentYear: number,
  minYear: number,
  targetYear: number
) {
  const years = Array.from(
    { length: currentYear - targetYear + 1 },
    (_, index) => targetYear + index
  );
  const rawData = years.map(year => getTopBandPerYear(bands, minYear, year));
  const data: BandInfo[] = [];

  rawData.forEach((topBands, yearIndex) => {
    topBands.forEach((band, bandIndex) => {
      const bandInfo = data.find(info => info.id === band);

      if (bandInfo) {
        bandInfo.data.push({ x: targetYear + yearIndex, y: bandIndex + 1 });
      } else {
        data.push({
          id: band,
          data: Array.from({ length: yearIndex }, (_, i) => ({
            x: targetYear + i,
            y: null as null | number
          })).concat([{ x: targetYear + yearIndex, y: bandIndex + 1 }])
        });
      }
    });

    data.forEach(bandInfo => {
      if (bandInfo.data.length <= yearIndex) {
        bandInfo.data.push({ x: targetYear + yearIndex, y: null });
      }
    });
  });

  return data;
}

export default structureDataForBumpChart;
