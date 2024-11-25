import { Band } from '@/types/bands';
import sortConcertsByDate from '@/app/utils/sortConcertsByDate';
import { CSSProperties } from 'react';
import BandsListItem from './BandsListItem';

type BandsListRenderItemProps = {
  index: number;
  style: CSSProperties;
  data: Band[];
  setQuery: (query: string) => void;
  resetScroll: () => void;
};

function BandsListRenderItem({
  index,
  style,
  data,
  setQuery,
  resetScroll
}: BandsListRenderItemProps) {
  const band = data[index];
  band.concerts = sortConcertsByDate(band.concerts);

  return (
    <div style={style} className="mt-20 pb-60 sm:pb-48">
      <BandsListItem
        band={band}
        setQuery={setQuery}
        resetScroll={resetScroll}
      />
    </div>
  );
}

export default BandsListRenderItem;
