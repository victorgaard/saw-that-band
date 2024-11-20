'use client';

import { Band } from '@/types/bands';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '@/app/components/logo/Logo';
import ProfileChartSelect from './ProfileChartSelect';
import ProfileGenreTrendsChart from './ProfileGenreTrendsChart';
import getTopGenresByYear from '../utils/getTopGenresPerYear';
import { cn } from '@/app/utils/cn';

type ProfileGenreTrendsChartWrapperProps = {
  bands: Band[];
  oldestConcertYear: number;
};

function ProfileGenreTrendsChartWrapper({
  bands,
  oldestConcertYear
}: ProfileGenreTrendsChartWrapperProps) {
  const currentYear = new Date().getFullYear();

  const [value, setValue] = useState(currentYear);
  const [genres, setGenres] = useState(getTopGenresByYear(bands, value));

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
  const hasData = genres.length !== 0;

  const width = (typeof window !== 'undefined' && window.innerWidth) || 0;
  const isMobile = width < 640;

  useEffect(() => {
    setGenres(getTopGenresByYear(bands, value));
  }, [value, bands]);

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-zinc-700/60 bg-zinc-850 p-6 text-sm">
      <div className="flex flex-wrap items-center justify-between sm:items-start">
        <p className="text-xs font-semibold text-zinc-400">
          GENRE TRENDS OVER YEAR
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={back}
            disabled={isFirst}
            className={cn('h-full p-2', {
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
            className={cn('h-full p-2', {
              'cursor-not-allowed opacity-50': isLast
            })}
            aria-label="Navigate to next year"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="max-[200px] relative min-h-[200px] max-w-[calc(100vw-20px)] sm:max-h-[300px] sm:min-h-[300px] sm:max-w-[calc(100vw-230px)] lg:max-w-[calc(100vw-550px)]">
        {hasData && (
          <ProfileGenreTrendsChart genres={genres} isMobile={isMobile} />
        )}
        {!hasData && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-1 pb-4 text-zinc-700">
              <span className="text-6xl font-bold">4</span>
              <Logo width={56} height={56} />{' '}
              <span className="text-6xl font-bold">4</span>
            </div>
            There were no concerts on {value}
          </div>
        )}
      </div>
      {hasData && (
        <div className="-m-6 mt-0 flex flex-col gap-3 rounded-b-lg border-t border-zinc-700/60 bg-zinc-800 p-6">
          <p className="text-xs font-semibold text-zinc-400">
            EXPLORE BANDS FROM THESE GENRES
          </p>
          {genres.map(genre => (
            <div key={genre.year} className="flex flex-wrap items-center gap-2">
              {genre.genres.map(currentGenre => (
                <Link
                  href={`/list?search=${currentGenre.genre}`}
                  key={currentGenre.genre}
                  className="whitespace-nowrap rounded border border-zinc-700/60 p-2 px-3 text-xs font-medium text-zinc-300 shadow-sm transition-colors duration-75 hover:border-zinc-600 hover:bg-zinc-700/50 hover:text-white"
                >
                  {currentGenre.genre}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProfileGenreTrendsChartWrapper;
