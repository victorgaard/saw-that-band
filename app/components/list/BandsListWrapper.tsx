import { Bands } from '@/types/bands';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import BandsList from './BandsList';

type BandsListWrapperProps = {
  bands: Bands[];
};

function BandsListWrapper({ bands }: BandsListWrapperProps) {
  const [query, setQuery] = useState('');
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
      router.push('/list');
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
        router.push(`/list?search=${query}`);
      }, 700);
    }
    return () => clearTimeout(queryToParamsTimeout);
  }, [query, router]);

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
