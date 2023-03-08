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
    <div className="w-full border-b">
      <input
        onChange={e => {
          handleChange(e);
        }}
        value={query}
        placeholder="Search for the band, genre or location"
        className="w-full bg-white/80 p-6 focus:outline-none"
      />
      {query && (
        <div className="absolute right-4 top-2 flex items-center gap-4">
          <p className="text-gray-500">
            {bandsCount} results for: {query}
          </p>
          <button
            onClick={() => {
              setQuery('');
              router.push('/');
            }}
            type="button"
            className=" h-14 w-14 rounded-full bg-gray-50 hover:bg-gray-100"
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

export default BandsListSearch;
