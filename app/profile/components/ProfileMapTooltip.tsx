import Image from 'next/image';
import { memo } from 'react';

export type TooltipProps = {
  country: string;
  country_code: string;
  city: string;
  x: number;
  y: number;
};

type ProfileMapTooltipProps = {
  tooltip: TooltipProps | undefined;
};

function ProfileMapTooltip({ tooltip }: ProfileMapTooltipProps) {
  return (
    <>
      {tooltip && (
        <div
          className="absolute z-40 flex animate-fade-in flex-col gap-2 rounded border border-zinc-700/40 bg-zinc-800/80 px-4 py-2 text-xs opacity-0 backdrop-blur-lg"
          style={{
            top: `${tooltip.y + 10}px`,
            left: `${tooltip.x - 390}px`
          }}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-300" />
            <span className="text-sm font-semibold text-white">
              {tooltip.city}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={`https://www.countryflagicons.com/FLAT/32/${tooltip.country_code}.png`}
              width={12}
              height={12}
              alt="Flag"
            />
            <span className="font-medium text-zinc-400">{tooltip.country}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(ProfileMapTooltip);
