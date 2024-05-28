import { Concerts } from '@/types/bands';
import getBands from './utils/getBands';
import getUser from './utils/getUser';
import ProfileWrapper from './components/profile/components/ProfileWrapper';

async function ProfilePage() {
  const [bands, res] = await Promise.all([getBands(), getUser()]);
  const user = res[0];
  const concerts = bands.map(band => band.concerts);
  const newArray: Concerts[] = [];
  const allConcerts = newArray.concat(...concerts);

  if (allConcerts.length === 0)
    return (
      <div className="flex h-screen flex-col gap-8 overflow-auto overflow-x-hidden bg-zinc-870 py-6 pb-24 sm:px-12 sm:pb-8">
        This user has added no bands yet.
      </div>
    );

  return <ProfileWrapper bands={bands} user={user} allConcerts={allConcerts} />;
}

export default ProfilePage;
