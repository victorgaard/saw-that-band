import getBandById from '@/app/[band]/[id]/utils/getBandById';
import getUser from '@/app/utils/getUser';
import ProfilePodium from './ProfilePodium';

async function ProfilePodiumWrapper() {
  const bandsId = [
    '5268799a-82df-4932-aa92-254cc3ce6aab',
    '970860c6-3172-4fa6-b50a-53063af12299',
    '94ebc7fb-9ade-438b-8e81-79de4706e3ca'
  ];
  const bands = [
    {
      id: '5268799a-82df-4932-aa92-254cc3ce6aab',
      reason:
        'Ronnie James Dio, Tony Iommi, Geezer Butler and Vinny Appice playing the Dio era of Black Sabbath. What else to say?'
    },
    {
      id: '970860c6-3172-4fa6-b50a-53063af12299',
      reason:
        'Beneath the waves (01011001) tour with over 18 singers and Arjen Lucassen himself.'
    },
    {
      id: '94ebc7fb-9ade-438b-8e81-79de4706e3ca',
      reason: 'Played Octavarium entire song. Simply insane!'
    }
  ];
  const res = await getUser();
  const profile = res[0];
  const [first, second, third] = await Promise.all([
    getBandById(bandsId[0], profile.id),
    getBandById(bandsId[1], profile.id),
    getBandById(bandsId[2], profile.id)
  ]);

  return (
    <ProfilePodium first={first} second={second} third={third} bands={bands} />
  );
}

export default ProfilePodiumWrapper;
