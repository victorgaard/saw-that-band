'use client';

import { Bands } from '@/data/bands';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

type useBandsListSearchProps = {
  bands: Bands[];
};

function useBandsListSearch({ bands }: useBandsListSearchProps) {
  const [query, setQuery] = useState('');
  const [filteredBands, setfilteredBands] = useState<Bands[]>();

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
    setfilteredBands(sorted.slice(0, 50));
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
    setQuery(e.target.value);
  }

  useEffect(() => {
    if (!query) {
      sortBandsAlphabetically();
    }

    if (query) {
      searchBands();
    }
  }, [query, sortBandsAlphabetically, searchBands]);

  return { filteredBands, query, handleChange, setQuery };
}

export default useBandsListSearch;
