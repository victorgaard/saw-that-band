import BandsListWrapper from '../components/list/BandsListWrapper';
import getBands from '../utils/getBands';

export default async function Home() {
  const bands = await getBands();

  return <BandsListWrapper bands={bands} />;
}
