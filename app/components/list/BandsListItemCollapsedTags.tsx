'use client';

import classNames from 'classnames';
import { useState } from 'react';

type BandsListItemCollapsedTagsProps = {
  bandGenre: string[];
  setQuery: (query: string) => void;
};

function BandsListItemCollapsedTags({
  bandGenre,
  setQuery
}: BandsListItemCollapsedTagsProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <button
        type="button"
        className={classNames('w-8 rounded p-2 text-xs hover:bg-zinc-700', {
          'bg-zinc-600': isOpen,
          'bg-zinc-700/30': !isOpen
        })}
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
          <div className="absolute right-0 top-10 z-10 flex flex-col overflow-hidden rounded bg-zinc-700 p-1 shadow-sm">
            {bandGenre.slice(3).map(genre => (
              <button
                key={genre}
                type="button"
                className="w-full whitespace-nowrap rounded bg-zinc-700 px-4 py-2 text-left text-xs font-medium text-zinc-100 hover:bg-zinc-800/70 hover:text-white"
                onClick={e => {
                  e.preventDefault();
                  setQuery(genre);
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
