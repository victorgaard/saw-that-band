import { cn } from '@/app/utils/cn';
import * as HeroIcons from '@heroicons/react/24/outline';

export type IconName = keyof typeof HeroIcons;
type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1 }: IconProps) => {
  const HeroIcon = HeroIcons[name];

  if (!HeroIcon)
    return (
      <HeroIcons.SparklesIcon
        className={cn('size-6 shrink-0 text-zinc-600', className)}
        strokeWidth={strokeWidth}
      />
    );

  return (
    <HeroIcon
      className={cn('size-6 shrink-0 text-zinc-600', className)}
      strokeWidth={strokeWidth}
    />
  );
};
