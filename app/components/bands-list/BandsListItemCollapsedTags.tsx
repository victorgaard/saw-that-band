'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useState } from 'react';
import classNames from 'classnames';

type BandsListItemCollapsedTagsProps = {
  bandGenre: string[];
  setQuery: (query: string) => void;
  router: AppRouterInstance;
};

function BandsListItemCollapsedTags({
  bandGenre,
  setQuery,
  router
}: BandsListItemCollapsedTagsProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <button
        type="button"
        className={classNames(
          'w-8 rounded-full bg-gray-200 p-2 text-xs hover:bg-gray-300',
          { 'bg-gray-400 hover:bg-gray-400': isOpen }
        )}
        onClick={e => {
          e.preventDefault();
          toggle();
        }}
      >
        +{bandGenre.length - 3}
      </button>

      {isOpen && (
        <>
          <div
            aria-hidden
            className="fixed inset-0 z-10 bg-transparent"
            onClick={e => {
              e.preventDefault();
              toggle();
            }}
          >
            {' '}
          </div>
          <div className="absolute right-0 top-10 z-10 flex flex-col overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            {bandGenre.slice(3).map(genre => (
              <button
                type="button"
                className="w-full whitespace-nowrap rounded-lg bg-white px-4 py-2 text-left text-xs text-gray-600 hover:bg-gray-50"
                onClick={e => {
                  e.preventDefault();
                  setQuery(genre);
                  router.push(`/?search=${genre}`);
                }}
              >
                {genre}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BandsListItemCollapsedTags;
