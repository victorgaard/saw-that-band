'use client';

import { cn } from '@/app/utils/cn';
import { Band, Concert } from '@/types/bands';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

type SetlistConcertsSelectProps = {
  band: Band;
  concert: Concert;
  setConcert: (concert: Concert) => void;
  isMobile?: boolean;
};

function SetlistConcertsSelect({
  band,
  concert,
  setConcert,
  isMobile = false
}: SetlistConcertsSelectProps) {
  const standardTitle = `and ${band.concerts.length - 3} other${' '}
  ${band.concerts.length - 3 === 1 ? 'time' : 'times'}`;
  const newConcert = `${concert.location} ${concert.date.slice(6)}`;

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(isMobile ? newConcert : standardTitle);

  const isActive = newConcert === title;

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <button
        onClick={toggle}
        type="button"
        className={cn(
          'flex h-full items-center justify-between whitespace-nowrap border border-zinc-700/60 px-4 text-sm font-medium shadow-sm transition-colors duration-75 hover:text-white',
          {
            'w-full rounded-t bg-zinc-700 py-3': isMobile,
            '-ml-[1px] w-[calc(100%+1px)] rounded-l-none rounded-tr': !isMobile,
            'lg:border-b-0 lg:bg-zinc-850': isActive,
            'bg-zinc-900/20 text-zinc-400 hover:border-zinc-600 hover:bg-zinc-700/50':
              !isActive
          }
        )}
      >
        <span className="truncate pr-2">{title}</span>
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
              'absolute right-0 top-12 z-20 flex w-full flex-col rounded bg-zinc-700 p-1 shadow-sm sm:top-12'
            )}
          >
            {band.concerts.slice(isMobile ? 0 : 3).map(currentConcert => {
              const optionIsActive =
                (currentConcert.location, currentConcert.date) ===
                (concert.location, concert.date);
              return (
                <button
                  onClick={() => {
                    setConcert({
                      location: currentConcert.location,
                      date: currentConcert.date,
                      notes: currentConcert.notes
                    });
                    setTitle(
                      `${currentConcert.location} ${currentConcert.date.slice(
                        6
                      )}`
                    );
                    toggle();
                  }}
                  type="button"
                  key={`${currentConcert.date}${currentConcert.location}`}
                  className={cn(
                    'flex w-full items-center justify-between whitespace-nowrap rounded bg-zinc-700 p-4 text-left text-sm font-medium hover:bg-zinc-600 sm:p-2',
                    {
                      'text-white': optionIsActive,
                      'text-zinc-300': !optionIsActive
                    }
                  )}
                >
                  <span className="truncate pr-2">
                    {currentConcert.location} {currentConcert.date.slice(6)}
                  </span>
                  {optionIsActive && (
                    <CheckIcon className="h-3 w-3 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default SetlistConcertsSelect;
