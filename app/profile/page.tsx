import { Concerts } from '@/types/bands';
import getBands from '../utils/getBands';
import getUser from '../utils/getUser';
import ProfileWrapper from './components/ProfileWrapper';

async function Profile() {
  const bands = await getBands();
  const user = await getUser();
  const concerts = bands.map(band => band.concerts);
  const newArray: Concerts[] = [];
  const allConcerts = newArray.concat(...concerts);

  return <ProfileWrapper bands={bands} user={user} allConcerts={allConcerts} />;
}

export default Profile;
