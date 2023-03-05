'use client';

import { Bands } from '@/data/bands';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useIsVisible from './useIsVisible';

type useBandsListProps = {
  bands: Bands[];
};

function useBandsList({ bands }: useBandsListProps) {
  const [query, setQuery] = useState('');
  const [filteredBands, setfilteredBands] = useState<Bands[]>();
  const infiniteScrollDiv = useRef(null);
  const searchParams = useSearchParams();
  const searchedParam = searchParams.get('search');
  const router = useRouter();
  const loadMore = useIsVisible(infiniteScrollDiv);

  const sortBandsAlphabetically = useCallback(() => {
    const sorted = bands.sort((a, b) => {
      if (a.band < b.band) {
        return -1;
      }
      if (a.band > b.band) {
        return 1;
      }
      return 0;
    });
    setfilteredBands(sorted);
  }, [bands]);

  const searchBands = useCallback(() => {
    const searched = bands.filter(
      band =>
        band.band.toLowerCase().includes(query.toLowerCase()) ||
        band.genre.some(genre =>
          genre.toLowerCase().includes(query.toLowerCase())
        ) ||
        band.concerts.some(concert =>
          concert.location.toLowerCase().includes(query.toLowerCase())
        )
    );
    setfilteredBands(searched);
  }, [bands, query]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      setQuery('');
      router.push('/');
    } else {
      setQuery(e.target.value);
      router.push(`/?search=${e.target.value}`);
    }
  }

  useEffect(() => {
    if (!query) {
      sortBandsAlphabetically();
    } else {
      searchBands();
    }
  }, [query, sortBandsAlphabetically, searchBands]);

  useEffect(() => {
    if (!searchedParam) {
      setQuery('');
    } else {
      setQuery(searchedParam);
    }
  }, [searchedParam]);

  return { filteredBands, query, setQuery, handleChange, infiniteScrollDiv };
}

export default useBandsList;
