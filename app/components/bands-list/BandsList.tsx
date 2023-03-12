'use client';

import { Bands } from '@/app/types/bands';
import Loading from '@/app/[id]/loading';
import { useRouter } from 'next/navigation';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import BandsListRenderItem from './BandsListRender';
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

  if (!filteredBands) return <Loading />;

  return (
    <div className="flex flex-col items-center bg-stone-800 text-white">
      <BandsListSearch
        query={query}
        setQuery={setQuery}
        handleChange={handleChange}
        router={router}
        bandsCount={filteredBands.length}
      />
      <div className="h-[calc(100vh-73px)] w-full">
        <AutoSizer>
          {({ height, width }) => (
            <List
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
                  router={router}
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
