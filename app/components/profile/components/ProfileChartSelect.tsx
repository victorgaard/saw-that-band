'use client';

import { cn } from '@/app/utils/cn';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

type ProfileChartSelectProps = {
  value: number;
  values: number[];
  handleChange: (value: number) => void;
};

function ProfileChartSelect({
  value,
  values,
  handleChange
}: ProfileChartSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <button
        onClick={toggle}
        type="button"
        className="flex h-full w-24 items-center justify-between rounded border border-zinc-700/60 bg-zinc-900/20 px-3 py-2 text-sm font-medium text-zinc-400 shadow-sm transition-colors duration-75 hover:border-zinc-600 hover:bg-zinc-700/50 hover:text-white"
        aria-label="Select a year"
      >
        {value}
        <ChevronDownIcon className="h-4 w-4" />
      </button>

      {isOpen && (
        <>
          <div
            aria-hidden
            className="fixed inset-0 z-10 bg-transparent"
            onClick={toggle}
          >
            {' '}
          </div>
          <div
            className={cn(
              'absolute right-0 top-11 z-20 flex w-full flex-col overflow-hidden rounded bg-zinc-700 shadow-sm'
            )}
          >
            <div className="max-h-[300px] overflow-auto p-1 [-ms-overflow-style:none] [scrollbar-color:#52525b_transparent] [&::-webkit-scrollbar-thumb]:hover:bg-zinc-600 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:hover:bg-zinc-700">
              {values.map(currentValue => {
                const isActive = value === currentValue;
                return (
                  <button
                    onClick={() => {
                      handleChange(currentValue);
                      toggle();
                    }}
                    type="button"
                    key={currentValue}
                    className={cn(
                      'flex w-full items-center justify-between whitespace-nowrap rounded bg-zinc-700 p-4 text-left text-sm font-medium hover:bg-zinc-600 sm:p-2',
                      {
                        'text-white': isActive,
                        'text-zinc-300': !isActive
                      }
                    )}
                  >
                    {currentValue}
                    {isActive && <CheckIcon className="h-3 w-3" />}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileChartSelect;
