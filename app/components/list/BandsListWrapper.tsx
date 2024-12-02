import { Band } from '@/types/bands';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import BandsList from './BandsList';

type BandsListWrapperProps = {
  bands: Band[];
};

function BandsListWrapper({ bands }: BandsListWrapperProps) {
  const [query, setQuery] = useState('');
  const path = usePathname();
  const searchParams = useSearchParams();
  const searchedParam = searchParams?.get('search');

  const listRef = useRef<List>(null);

  function resetScroll() {
    listRef.current?.scrollToItem(0);
  }

  const treatedQuery = query.trim().toLowerCase();
  const filteredBands = bands.filter(
    band =>
      band.band.toLowerCase().includes(treatedQuery) ||
      band.genre.some(genre => genre.toLowerCase().includes(treatedQuery)) ||
      band.concerts.some(concert =>
        concert.location.toLowerCase().includes(treatedQuery)
      ) ||
      band.concerts.some(concert =>
        concert.date.toLowerCase().includes(treatedQuery)
      )
  );

  function replaceUrl(url: string) {
    window.history.replaceState(
      { ...window.history.state, as: url, url },
      '',
      url
    );
  }

  function handleChange(newQuery: string) {
    resetScroll();
    if (!newQuery) {
      setQuery('');
      replaceUrl(`${path}`);
    } else {
      setQuery(newQuery);
    }
  }

  useEffect(() => {
    if (!searchedParam) {
      setQuery('');
    } else {
      setQuery(searchedParam);
    }
  }, [searchedParam]);

  useEffect(() => {
    resetScroll();
    let queryToParamsTimeout: ReturnType<typeof setTimeout>;

    if (query) {
      queryToParamsTimeout = setTimeout(() => {
        const url = `${path}?search=${query}`;
        replaceUrl(url);
      }, 700);
    }
    return () => clearTimeout(queryToParamsTimeout);
  }, [query, path]);

  return (
    <BandsList
      filteredBands={filteredBands}
      query={query}
      setQuery={setQuery}
      handleChange={handleChange}
      listRef={listRef}
      resetScroll={resetScroll}
    />
  );
}

export default BandsListWrapper;
