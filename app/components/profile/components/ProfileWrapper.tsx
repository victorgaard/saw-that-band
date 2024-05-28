import dynamic from 'next/dynamic';
import { Bands, Concerts } from '@/types/bands';
import { User } from '@/types/user';
import getOldestConcertYear from '../utils/getOldestConcertYear';
import ProfileHeaderWrapper from './ProfileHeaderWrapper';
import ProfileLatestConcertsWrapper from './ProfileLatestConcertsWrapper';
import ProfileMostSeenBandsChartWrapper from './ProfileMostSeenBandsChartWrapper';
import ProfilePodiumWrapper from './ProfilePodiumWrapper';

const ProfileMapWrapper = dynamic(() => import('./ProfileMapWrapper'));

const ProfileBarChartWrapper = dynamic(
  () => import('./ProfileBarChartWrapper')
);
const ProfileGenreTrendsChartWrapper = dynamic(
  () => import('./ProfileGenreTrendsChartWrapper')
);
const ProfileCuriositiesWrapper = dynamic(
  () => import('./ProfileCuriositiesWrapper')
);

type ProfileWrapperProps = {
  bands: Bands[];
  user: User;
  allConcerts: Concerts[];
};

function ProfileWrapper({ bands, user, allConcerts }: ProfileWrapperProps) {
  const oldestConcertYear = getOldestConcertYear(allConcerts);

  return (
    <div className="flex h-screen flex-col gap-8 overflow-auto overflow-x-hidden bg-zinc-870 py-8 pb-24 sm:px-12 sm:pb-8">
      <ProfileHeaderWrapper user={user} />
      <div className="grid gap-8 3xl:grid-cols-2">
        {user.username === 'victor' && <ProfileMapWrapper bands={bands} />}
        <ProfileMostSeenBandsChartWrapper
          bands={bands}
          oldestConcertYear={oldestConcertYear}
        />
      </div>
      <div className="grid gap-8 3xl:grid-cols-2">
        {user.username === 'victor' && <ProfilePodiumWrapper />}
        <ProfileBarChartWrapper
          bands={bands}
          oldestConcertYear={oldestConcertYear}
        />
      </div>
      <div className="grid gap-8 3xl:grid-cols-2">
        <ProfileGenreTrendsChartWrapper
          bands={bands}
          oldestConcertYear={oldestConcertYear}
        />
        <ProfileLatestConcertsWrapper bands={bands} />
      </div>
      <ProfileCuriositiesWrapper concertsLength={allConcerts.length} />
    </div>
  );
}

export default ProfileWrapper;
