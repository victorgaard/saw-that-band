'use client';

import { Bands } from '@/data/bands';
import { ChangeEvent, useState } from 'react';

type useBandsListSearchProps = {
  bands: Bands[];
};

function useBandsListSearch({ bands }: useBandsListSearchProps) {
  const [query, setQuery] = useState('');

  function sortBands() {
    bands.sort((a, b) => {
      if (a.band < b.band) {
        return -1;
      }
      if (a.band > b.band) {
        return 1;
      }
      return 0;
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return { query, handleChange };
}

export default useBandsListSearch;
