import { Bands, Concerts } from '@/app/types/bands';
import { User } from '@/app/types/user';
import StatsSideBarBio from './StatsSideBarBio';
import StatsSideBarFirstAndLastConcert from './StatsSideBarFirstAndLastConcert';
import StatsSideBarGenres from './StatsSideBarGenres';
import StatsSideBarMostSeenBands from './StatsSideBarMostSeenBands';
import StatsSideBarProfile from './StatsSideBarProfile';
import StatsSideBarSocials from './StatsSideBarSocials';

type StatsSideBarProps = {
  profile: User;
  bands: Bands[];
};

function StatsSideBar({ profile, bands }: StatsSideBarProps) {
  const concerts = bands.map(band => band.concerts);
  const newArray: Concerts[] = [];
  const allConcerts = newArray.concat(...concerts);

  return (
    <div className="flex w-80 shrink-0 flex-col justify-between border-r border-stone-700/70 bg-stone-900 p-6 text-sm text-stone-300">
      <div className="flex flex-col gap-8">
        <StatsSideBarProfile
          profile={profile}
          bandsCount={bands.length}
          allConcertsCount={allConcerts.length}
        />
        <StatsSideBarBio bio={profile.bio} />
        <StatsSideBarFirstAndLastConcert
          bands={bands}
          allConcerts={allConcerts}
        />
        <StatsSideBarMostSeenBands bands={bands} />
        <StatsSideBarGenres bands={bands} />
      </div>
      <div className="flex flex-col gap-2">
        <StatsSideBarSocials profileLinks={profile.links} />
      </div>
    </div>
  );
}

export default StatsSideBar;
