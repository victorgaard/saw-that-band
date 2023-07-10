import getBandById from '@/app/[band]/[id]/utils/getBandById';
import getUser from '@/app/utils/getUser';
import { Bands } from '@/types/bands';
import ProfilePodium from './ProfilePodium';

async function ProfilePodiumWrapper() {
  const bandsId = [
    '5268799a-82df-4932-aa92-254cc3ce6aab',
    '94ebc7fb-9ade-438b-8e81-79de4706e3ca',
    '49a09421-b99c-4e3d-a044-252153de4984'
  ];
  const bands = [
    {
      id: '5268799a-82df-4932-aa92-254cc3ce6aab',
      reason:
        'Ronnie James Dio, Tony Iommi, Geezer Butler and Vinny Appice playing the Dio era of Black Sabbath. What else to say?'
    },
    {
      id: '94ebc7fb-9ade-438b-8e81-79de4706e3ca',
      reason: 'Played Octavarium entire song. Simply insane!'
    },
    {
      id: '49a09421-b99c-4e3d-a044-252153de4984',
      reason: 'Last André Matos tour.'
    }
  ];
  const res = await getUser();
  const profile = res[0];
  const first: Bands[] = await getBandById(bandsId[0], profile.id);
  const second: Bands[] = await getBandById(bandsId[1], profile.id);
  const third: Bands[] = await getBandById(bandsId[2], profile.id);

  return (
    <ProfilePodium first={first} second={second} third={third} bands={bands} />
  );
}

export default ProfilePodiumWrapper;
