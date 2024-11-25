'use client';

import { ResponsivePie } from '@nivo/pie';
import { memo } from 'react';
import { YearlyGenres } from '../utils/getTopGenresPerYear';
import chart from '../utils/chartHelper';

type ProfileGenreTrendsChartProps = {
  genres: YearlyGenres[];
  isMobile: boolean;
};

function ProfileGenreTrendsChart({
  genres,
  isMobile
}: ProfileGenreTrendsChartProps) {
  const data = genres[0].genres.map(genre => ({
    id: genre.genre,
    label: genre.genre,
    value: genre.concerts
  }));

  return (
    <ResponsivePie
      isInteractive={false}
      enableArcLabels={false}
      data={data}
      margin={
        isMobile
          ? { top: 20, right: 100, bottom: 20, left: 100 }
          : { top: 20, right: 0, bottom: 60, left: 0 }
      }
      theme={chart.theme}
      innerRadius={0.8}
      padAngle={4}
      cornerRadius={5}
      activeOuterRadiusOffset={8}
      arcLinkLabel={d => {
        const sum = data
          .map(dataPoint => dataPoint.value)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        if (isMobile) return `${d.id.toString().slice(0, 11)}...`;

        return `#${d.arc.index + 1}. ${d.id}: ${((d.value / sum) * 100).toFixed(
          0
        )}%`;
      }}
      arcLinkLabelsSkipAngle={isMobile ? 10 : 10}
      arcLinkLabelsStraightLength={isMobile ? 12 : 24}
      arcLinkLabelsDiagonalLength={isMobile ? 10 : 16}
      arcLinkLabelsOffset={0}
      arcLinkLabelsTextColor={{ from: 'color' }}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
    />
  );
}

export default memo(ProfileGenreTrendsChart);
