import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { ChangeEvent } from 'react';

type BandsListSearchProps = {
  query: string;
  setQuery: (query: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  router: AppRouterInstance;
  bandsCount: number;
};

function BandsListSearch({
  handleChange,
  query,
  setQuery,
  router,
  bandsCount
}: BandsListSearchProps) {
  return (
    <div className="flex w-full items-center justify-between border-b border-stone-700 bg-stone-700/20">
      <input
        onChange={e => {
          handleChange(e);
        }}
        value={query}
        placeholder="Search for the band, genre or location"
        className="w-[50%] shrink-0 bg-transparent p-6 text-stone-300 placeholder:text-stone-500 focus:outline-none"
      />
      {query && (
        <div className="flex items-center gap-4 pr-6">
          <p className="max-w-[20rem] truncate text-stone-400">
            {bandsCount} {bandsCount === 1 ? 'result' : 'results'} for: {query}
          </p>
          <button
            onClick={() => {
              setQuery('');
              router.push('/');
            }}
            type="button"
            className="h-14 w-14 shrink-0 rounded-full bg-stone-900 hover:bg-stone-700"
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

export default BandsListSearch;
