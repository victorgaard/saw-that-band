import { use, useEffect, useState } from 'react';
import { AppContext } from '@/app/ContextWrapper';
import { Bands } from '@/types/bands';
import ProfilePodium from './ProfilePodium';
import { getPodiumBandsInfo } from '../utils/getPodiumBandsInfo';
import LoadingSpinner from '../../icons/LoadingSpinner';

function ProfilePodiumWrapper() {
  const { user } = use(AppContext);
  const [bands] = useState([
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
  ]);

  const [bandsInfo, setBandsInfo] = useState<
    | {
        first: Bands[];
        second: Bands[];
        third: Bands[];
      }
    | undefined
  >();

  useEffect(() => {
    const bandIds = [bands[0].id, bands[1].id, bands[2].id];

    getPodiumBandsInfo({ bandIds, userId: user.id }).then(res =>
      setBandsInfo(res)
    );
  }, [bands, user.id]);

  if (!bandsInfo)
    return (
      <div className="flex flex-col rounded-lg border border-zinc-700/60 bg-zinc-850 p-0 text-sm sm:p-6 sm:pb-0">
        <div className="flex justify-between">
          <p className="pl-6 pt-6 text-xs font-semibold text-zinc-400 sm:pl-0 sm:pt-0">
            BIGGEST GEMS
          </p>
        </div>
        <div className="flex h-[272px] items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    );

  return (
    <ProfilePodium
      first={bandsInfo.first}
      second={bandsInfo.second}
      third={bandsInfo.third}
      bands={bands}
    />
  );
}

export default ProfilePodiumWrapper;
