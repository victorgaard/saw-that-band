'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useState } from 'react';

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
        className="rounded-full bg-gray-200 p-2 text-xs hover:bg-gray-300"
        onClick={e => {
          e.preventDefault();
          toggle();
        }}
      >
        +{bandGenre.length - 3}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-10 z-10 overflow-hidden rounded-lg border">
          {bandGenre.slice(3).map(genre => (
            <button
              type="button"
              className="w-full whitespace-nowrap border-b bg-white px-4 py-2 text-right text-xs text-gray-600 last:border-none hover:bg-gray-50"
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
      )}
    </div>
  );
}

export default BandsListItemCollapsedTags;
