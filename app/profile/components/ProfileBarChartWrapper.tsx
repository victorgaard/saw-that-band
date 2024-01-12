'use client';

import { Bands } from '@/types/bands';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import ProfileBarChart from './ProfileBarChart';
import ProfileChartSelect from './ProfileChartSelect';
import getConcertsByYear from '../utils/getConcertsByYear';

type ProfileBarChartWrapperProps = {
  bands: Bands[];
  oldestConcertYear: number;
};

function ProfileBarChartWrapper({
  bands,
  oldestConcertYear
}: ProfileBarChartWrapperProps) {
  const currentYear = new Date().getFullYear() - 1;

  const [value, setValue] = useState(currentYear);
  const [concerts, setConcerts] = useState(getConcertsByYear(bands, value));

  const minYear = oldestConcertYear;

  const values = Array.from(
    { length: currentYear - minYear + 1 },
    (_, index) => currentYear - index
  );

  function handleChange(newValue: number) {
    setValue(newValue);
  }

  function back() {
    if (value !== values[values.length - 1]) {
      setValue(prev => prev - 1);
    }
  }

  function next() {
    if (value !== values[0]) {
      setValue(prev => prev + 1);
    }
  }

  const isFirst = value === values[values.length - 1];
  const isLast = value === values[0];
  const width = (typeof window !== 'undefined' && window.innerWidth) || 0;
  const isMobile = width < 640;

  useEffect(() => {
    setConcerts(getConcertsByYear(bands, value));
  }, [value, bands]);

  return (
    <div className="relative grid gap-4 rounded-lg border border-zinc-700/60 bg-zinc-850 p-6 text-sm">
      <div className="flex flex-wrap items-center justify-between sm:items-start">
        <p className="text-xs font-semibold text-zinc-400">
          CONCERTS PER MONTH
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={back}
            disabled={isFirst}
            className={classNames('h-full p-2', {
              'cursor-not-allowed opacity-50': isFirst
            })}
            aria-label="Navigate to previous year"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <ProfileChartSelect
            value={value}
            values={values}
            handleChange={handleChange}
          />
          <button
            type="button"
            onClick={next}
            disabled={isLast}
            className={classNames('h-full p-2', {
              'cursor-not-allowed opacity-50': isLast
            })}
            aria-label="Navigate to next year"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="relative max-h-[200px] min-h-[200px] min-w-[0px] max-w-[calc(100vw-40px)] sm:max-w-[calc(100vw-230px)] lg:max-w-[calc(100vw-550px)]">
        <ProfileBarChart
          concerts={concerts}
          value={value}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

export default ProfileBarChartWrapper;
