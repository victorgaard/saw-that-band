import { Concerts } from '@/types/bands';
import getBands from '../utils/getBands';
import getUser from '../utils/getUser';
import ProfileWrapper from './components/ProfileWrapper';

async function Profile() {
  const bands = await getBands();
  const res = await getUser();
  const user = res[0];
  const concerts = bands.map(band => band.concerts);
  const newArray: Concerts[] = [];
  const allConcerts = newArray.concat(...concerts);

  return <ProfileWrapper bands={bands} user={user} allConcerts={allConcerts} />;
}

export default Profile;
