'use client';

import { Bands } from '@/app/types/bands';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

type useBandsListProps = {
  bands: Bands[];
};

function useBandsList({ bands }: useBandsListProps) {
  const [query, setQuery] = useState('');
  const [filteredBands, setfilteredBands] = useState<Bands[]>();
  const searchParams = useSearchParams();
  const searchedParam = searchParams.get('search');
  const router = useRouter();

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
        ) ||
        band.concerts.some(concert =>
          concert.date.toLowerCase().includes(query.toLowerCase())
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

  return { filteredBands, query, setQuery, handleChange };
}

export default useBandsList;
