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
  const router = useRouter();

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

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    resetScroll();
    if (!e.target.value) {
      setQuery('');
      router.push(`${path}`);
    } else {
      setQuery(e.target.value);
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
        router.push(`${path}?search=${query}`);
      }, 700);
    }
    return () => clearTimeout(queryToParamsTimeout);
  }, [query, path, router]);

  return (
    <BandsList
      filteredBands={filteredBands}
      query={query}
      setQuery={setQuery}
      handleChange={handleChange}
      router={router}
      listRef={listRef}
      resetScroll={resetScroll}
    />
  );
}

export default BandsListWrapper;
