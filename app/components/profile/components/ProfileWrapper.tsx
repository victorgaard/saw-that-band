import { Band, Concert } from '@/types/bands';
import { User } from '@/types/user';
import getOldestConcertYear from '../utils/getOldestConcertYear';
import ProfileHeaderWrapper from './ProfileHeaderWrapper';
import ProfileLatestConcertsWrapper from './ProfileLatestConcertsWrapper';
import ProfileMostSeenBandsChartWrapper from './ProfileMostSeenBandsChartWrapper';
import ProfilePodiumWrapper from './ProfilePodiumWrapper';
import ProfileMapWrapper from './ProfileMapWrapper';
import ProfileBarChartWrapper from './ProfileBarChartWrapper';
import ProfileGenreTrendsChartWrapper from './ProfileGenreTrendsChartWrapper';
import ProfileCuriositiesWrapper from './ProfileCuriositiesWrapper';

type ProfileWrapperProps = {
  bands: Band[];
  user: User;
  allConcerts: Concert[];
};

function ProfileWrapper({ bands, user, allConcerts }: ProfileWrapperProps) {
  const oldestConcertYear = getOldestConcertYear(allConcerts);

  return (
    <div className="flex h-screen flex-col gap-4 overflow-auto bg-zinc-870 p-2 pb-24 sm:gap-8 sm:px-12 sm:py-8 sm:pb-8">
      <ProfileHeaderWrapper user={user} />
      <div className="grid gap-4 sm:gap-8 3xl:grid-cols-2">
        {user.username === 'victor' && <ProfileMapWrapper bands={bands} />}
        <ProfileMostSeenBandsChartWrapper
          bands={bands}
          oldestConcertYear={oldestConcertYear}
        />
        {user.username === 'victor' && <ProfilePodiumWrapper />}
        <ProfileBarChartWrapper
          bands={bands}
          oldestConcertYear={oldestConcertYear}
        />
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
