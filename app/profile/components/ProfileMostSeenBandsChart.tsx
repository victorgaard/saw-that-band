'use client';

import { BumpComputedSerie, ResponsiveBump } from '@nivo/bump';
import { memo } from 'react';
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  MinusCircleIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { BandData, BandInfo } from '../utils/structureDataForBumpChart';

type ProfileMostSeenBandsChartProps = {
  data: BandInfo[];
  isMobile?: boolean;
};

function Tooltip({ serie }: { serie: BumpComputedSerie<BandData, BandInfo> }) {
  const firstPosition = serie.data.data.find(entry => entry.y !== null)?.y;
  const rank = serie.data.data[serie.data.data.length - 1].y || 'unranked';
  const validate =
    typeof rank !== 'string' && firstPosition && firstPosition > rank;
  const isTie = firstPosition && firstPosition === rank;
  const shouldRenderTrendingUp = validate && !isTie;
  const shouldRenderTrendingDown = !validate && !isTie;

  return (
    <div className="relative flex animate-fade-in-with-delay items-center gap-4 rounded border border-zinc-700/40 bg-zinc-800/80 px-4 py-2 text-xs opacity-0 backdrop-blur-lg">
      {shouldRenderTrendingUp && (
        <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
      )}
      {shouldRenderTrendingDown && (
        <ArrowTrendingDownIcon className="h-6 w-6 text-red-600" />
      )}
      {isTie && <MinusCircleIcon className="h-6 w-6 text-sky-600" />}

      <p className="flex flex-col gap-0.5">
        <span className="text-base font-semibold text-white">{serie.id}</span>
        <span className="text-zinc-400">
          from #{firstPosition} to{' '}
          {typeof rank === 'number' ? `#${rank}` : rank}
        </span>
      </p>
    </div>
  );
}

function ProfileMostSeenBandsChart({
  data,
  isMobile = false
}: ProfileMostSeenBandsChartProps) {
  const router = useRouter();
  const width = (typeof window !== 'undefined' && window.innerWidth) || 0;
  const isLargeWidth = width > 1900;

  return (
    <ResponsiveBump
      data={data}
      interpolation="smooth"
      enableGridX={false}
      enableGridY={false}
      axisTop={{
        renderTick: () => <></>
      }}
      axisLeft={{
        renderTick: () => <></>
      }}
      axisBottom={{
        tickSize: 0,
        tickPadding: 24
      }}
      endLabel={d => `#${d.data[d.data.length - 1].y}. ${d.id}`}
      theme={{
        fontFamily: 'inherit',
        textColor: 'white',
        labels: {
          text: {
            fill: 'transparent'
          }
        },
        tooltip: {
          container: {
            background: 'black'
          }
        },
        axis: {
          ticks: {
            text: {
              fill: '#71717a'
            }
          }
        }
      }}
      yOuterPadding={isLargeWidth ? 0 : 0.5}
      colors={{ scheme: 'set2' }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointBorderWidth={0}
      activePointBorderWidth={3}
      margin={
        isMobile
          ? { top: 0, right: 150, bottom: 60, left: 0 }
          : { top: 10, right: 180, bottom: 60, left: 20 }
      }
      tooltip={Tooltip}
      onClick={props => router.push(`/?search=${props.id}`)}
    />
  );
}

export default memo(ProfileMostSeenBandsChart);
