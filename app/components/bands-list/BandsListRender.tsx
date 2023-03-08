import { Bands } from '@/app/types/bands';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { CSSProperties } from 'react';
import BandsListItem from './BandsListItem';

type BandsListRenderItemProps = {
  index: number;
  style: CSSProperties;
  data: Bands[];
  setQuery: (query: string) => void;
  router: AppRouterInstance;
};

function BandsListRenderItem({
  index,
  style,
  data,
  setQuery,
  router
}: BandsListRenderItemProps) {
  const band = data[index];
  return (
    <div style={style}>
      <BandsListItem band={band} setQuery={setQuery} router={router} />
    </div>
  );
}

export default BandsListRenderItem;
