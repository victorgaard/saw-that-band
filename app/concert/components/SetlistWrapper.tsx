import { Bands } from '@/app/types/bands';
import getSetlist from '../utils/getSetlist';
import Setlist from './Setlist';

type SetlistWrapperProps = {
  band: Bands;
};

async function SetlistWrapper({ band }: SetlistWrapperProps) {
  const data = await getSetlist(
    band.band,
    band.concerts[0].location,
    band.concerts[0].date
  );

  return <Setlist band={band} data={data} />;
}

export default SetlistWrapper;
