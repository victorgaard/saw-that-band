'use client';

import { use } from 'react';
import BandsListWrapper from '../components/list/BandsListWrapper';
import { AppContext } from '../ContextWrapper';

export default function ListPage() {
  const { bands } = use(AppContext);

  return <BandsListWrapper bands={bands} />;
}
