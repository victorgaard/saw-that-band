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
    <div className="flex w-full items-center justify-between border-b bg-white">
      <input
        onChange={e => {
          handleChange(e);
        }}
        value={query}
        placeholder="Search for the band, genre or location"
        className="w-[50%] shrink-0 p-6 focus:outline-none"
      />
      {query && (
        <div className="flex items-center gap-4 pr-6">
          <p className="max-w-[20rem] truncate text-gray-500">
            {bandsCount} results for: {query}
          </p>
          <button
            onClick={() => {
              setQuery('');
              router.push('/');
            }}
            type="button"
            className="h-14 w-14 shrink-0 rounded-full bg-gray-50 hover:bg-gray-100"
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

export default BandsListSearch;
