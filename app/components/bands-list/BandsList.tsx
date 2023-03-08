'use client';

import { Bands } from '@/app/types/bands';
import { useRouter } from 'next/navigation';
import BandsListItem from './BandsListItem';
import BandsListSearch from './BandsListSearch';
import useBandsList from './hooks/useBandsList';

type BandsListProps = {
  bands: Bands[];
};

function BandsList({ bands }: BandsListProps) {
  const { filteredBands, query, setQuery, handleChange } = useBandsList({
    bands
  });
  const router = useRouter();

  if (!filteredBands) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center">
      <BandsListSearch
        query={query}
        setQuery={setQuery}
        handleChange={handleChange}
        router={router}
      />
      <div className="w-[675px] pt-24">
        {query && (
          <p className="mb-4 text-center text-gray-500">
            {filteredBands?.length} results for: {query}
          </p>
        )}
        {filteredBands?.map(band => (
          <BandsListItem band={band} setQuery={setQuery} router={router} />
        ))}
      </div>
    </div>
  );
}

export default BandsList;
