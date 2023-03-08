import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { ChangeEvent } from 'react';

type BandsListSearchProps = {
  query: string;
  setQuery: (query: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  router: AppRouterInstance;
};

function BandsListSearch({
  handleChange,
  query,
  setQuery,
  router
}: BandsListSearchProps) {
  return (
    <div className="fixed w-[675px]">
      <input
        onChange={e => {
          handleChange(e);
        }}
        value={query}
        placeholder="Search for the band, genre or location"
        className="w-full rounded-full border bg-white/80 p-6 backdrop-blur-xl transition-all focus:shadow-2xl"
      />
      {query && (
        <button
          onClick={() => {
            setQuery('');
            router.push('/');
          }}
          type="button"
          className="absolute right-4 top-2 h-14 w-14 rounded-full bg-gray-50 hover:bg-gray-100"
        >
          x
        </button>
      )}
    </div>
  );
}

export default BandsListSearch;
