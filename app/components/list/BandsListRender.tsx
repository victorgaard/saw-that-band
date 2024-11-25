import { Band } from '@/types/bands';
import sortConcertsByDate from '@/app/utils/sortConcertsByDate';
import { CSSProperties, useContext } from 'react';
import BandsListItem from './BandsListItem';
import MusicPlayerContext from '../music-player/MusicPlayerContext';
import { cn } from '@/app/utils/cn';

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
  const { isOpen } = useContext(MusicPlayerContext);
  const band = data[index];
  band.concerts = sortConcertsByDate(band.concerts);

  return (
    <div
      style={style}
      className={cn('mt-20 pb-60 sm:pb-48', { 'pb-[357px] sm:pb-60': isOpen })}
    >
      <BandsListItem
        band={band}
        setQuery={setQuery}
        resetScroll={resetScroll}
      />
    </div>
  );
}

export default BandsListRenderItem;
