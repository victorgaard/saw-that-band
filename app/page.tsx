import bands from '../data/bands';
import BandsList from './components/bands-list/BandsList';

export default async function Home() {
  return <BandsList bands={bands} />;
}
