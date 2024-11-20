import { Band } from '@/types/bands';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, RefObject } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import BandsListRenderItem from './BandsListRender';
import BandsListSearch from './BandsListSearch';
import LoadingSpinner from '../icons/LoadingSpinner';

type BandsListProps = {
  filteredBands: Band[] | undefined;
  query: string;
  setQuery: (query: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  router: AppRouterInstance;
  listRef: RefObject<List>;
  resetScroll: () => void;
};

function BandsList({
  filteredBands,
  query,
  setQuery,
  handleChange,
  router,
  listRef,
  resetScroll
}: BandsListProps) {
  if (!filteredBands) return <LoadingSpinner />;

  if (filteredBands.length === 0 && !query)
    return (
      <div className="flex h-screen flex-col gap-8 overflow-auto overflow-x-hidden bg-zinc-870 py-6 pb-24 sm:px-12 sm:pb-8">
        This user has added no bands yet.
      </div>
    );

  return (
    <div className="relative flex flex-col items-center bg-zinc-870 text-white">
      <BandsListSearch
        query={query}
        setQuery={setQuery}
        handleChange={handleChange}
        router={router}
        bandsCount={filteredBands.length}
      />

      {filteredBands.length === 0 && (
        <div className="mt-20 flex flex-col items-center justify-center gap-8 px-8 pt-8 sm:mt-48">
          <div className="flex flex-col items-center gap-2">
            <p className="text-zinc-400">There are no results for: </p>
            <p className="max-w-[calc(100vw-48px)] truncate text-xl font-medium text-white sm:max-w-[calc(100vw-480px)]">
              {query}
            </p>
          </div>
          <button
            onClick={() => {
              setQuery('');
              router.push('/list');
            }}
            type="button"
            className="flex items-center gap-4 rounded bg-zinc-900 p-4 text-zinc-400 hover:bg-zinc-700/50 hover:text-white sm:hidden"
          >
            <p>Clear search</p>
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="h-screen w-full">
        <AutoSizer>
          {({ height, width }) => (
            <List
              ref={listRef}
              width={width}
              height={height}
              itemSize={160}
              itemCount={filteredBands.length}
            >
              {(props: ListChildComponentProps) => (
                <BandsListRenderItem
                  index={props.index}
                  style={props.style}
                  data={filteredBands}
                  setQuery={setQuery}
                  resetScroll={resetScroll}
                />
              )}
            </List>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default BandsList;
