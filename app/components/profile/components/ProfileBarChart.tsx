'use client';

import { BarCustomLayerProps, BarLayer, ResponsiveBar } from '@nivo/bar';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

type Concert = {
  month: string;
  concerts: number;
};

type ProfileBarChartProps = {
  concerts: Concert[];
  value: number;
  isMobile: boolean;
};

type OverlayProps = {
  value: number;
  props: BarCustomLayerProps<Concert>;
  isMobile: boolean;
};

function Overlay({ props, value, isMobile }: OverlayProps) {
  const router = useRouter();

  function convertMonth(month: string) {
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
    const monthIndex = monthNames.findIndex(shortMonth => shortMonth === month);
    const monthNumber = (monthIndex + 1).toString().padStart(2, '0');

    return monthNumber;
  }

  return (
    <g>
      {props.bars.map(bar => (
        <g key={bar.key}>
          <rect
            x={bar.x}
            y={bar.y}
            width={bar.width}
            height={bar.height}
            className="peer cursor-pointer fill-emerald-600 opacity-0 transition-[opacity] hover:opacity-50"
            onClick={() =>
              router.push(
                `/?search=${convertMonth(bar.data.data.month)}-${value}`
              )
            }
          />
          <text
            x={isMobile ? bar.x : bar.x + 15}
            y={isMobile ? bar.y - 10 : bar.y - 15}
            className="animate-fade-in-up fill-emerald-300 text-xs font-semibold opacity-0 peer-hover:fill-emerald-200"
          >
            {bar.data.data.concerts}
          </text>
        </g>
      ))}
    </g>
  );
}

function ProfileBarChart({ concerts, value, isMobile }: ProfileBarChartProps) {
  const renderOverlay: BarLayer<Concert>[] = [
    'grid',
    'axes',
    'bars',
    'markers',
    'legends',
    props => <Overlay props={props} value={value} isMobile={isMobile} />
  ];

  return (
    <ResponsiveBar
      data={concerts}
      enableGridX={false}
      enableGridY={false}
      borderRadius={2}
      isInteractive={false}
      axisBottom={{
        tickSize: 0,
        tickPadding: 24
      }}
      defs={[
        {
          id: 'gradient',
          type: 'linearGradient',
          colors: [
            { offset: 0, color: '#34d399' },
            { offset: 100, color: '#6ee7b7' }
          ],
          gradientTransform: 'rotate(145 0.5 0.5)'
        }
      ]}
      theme={{
        text: {
          fontFamily: 'inherit',
          color: 'white'
        },
        labels: {
          text: {
            fill: 'transparent'
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
      keys={['concerts']}
      indexBy="month"
      margin={
        isMobile
          ? { top: 40, right: 5, bottom: 50, left: -8 }
          : { top: 40, right: 0, bottom: 50, left: 0 }
      }
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      fill={[{ match: { id: 'concerts' }, id: 'gradient' }]}
      layers={renderOverlay}
    />
  );
}

export default memo(ProfileBarChart);
