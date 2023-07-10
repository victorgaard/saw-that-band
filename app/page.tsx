import { Suspense } from 'react';
import BandsListWrapper from './components/bands-list/BandsListWrapper';
import getBands from './utils/getBands';

export default async function Home() {
  const bands = await getBands();

  return (
    <Suspense fallback={<div className="h-screen bg-zinc-870" />}>
      <BandsListWrapper bands={bands} />
    </Suspense>
  );
}
