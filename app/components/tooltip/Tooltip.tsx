import { ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
};

function Tooltip({ children }: TooltipProps) {
  return (
    <div className="absolute left-12 z-50 hidden animate-fade-in whitespace-nowrap rounded-lg bg-zinc-200 px-6 py-2 text-sm font-semibold text-zinc-600 shadow-lg group-hover:block">
      {children}
    </div>
  );
}

export default Tooltip;
