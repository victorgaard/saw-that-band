import BandsList from './components/bands-list/BandsList';
import getBands from './components/getBands';

export default async function Home() {
  const bands = await getBands();

  return <BandsList bands={bands} />;
}
