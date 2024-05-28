import BandsListWrapper from '../components/list/BandsListWrapper';
import getBands from '../utils/getBands';

export default async function ListPage() {
  const bands = await getBands();

  return <BandsListWrapper bands={bands} />;
}
