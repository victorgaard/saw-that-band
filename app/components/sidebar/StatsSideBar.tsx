import { Bands, Concerts } from '@/types/bands';
import { User } from '@/types/user';
import StatsSideBarGenres from './StatsSideBarGenres';
import StatsSideBarLocations from './StatsSideBarLocations';
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
    <div className="flex max-h-[calc(100%-96px)] w-80 shrink-0 flex-col overflow-auto p-6 pl-2 pr-10 text-sm text-white [-ms-overflow-style:none] [scrollbar-color:#262626_transparent] [&::-webkit-scrollbar-thumb]:hover:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-zinc-700 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:hover:bg-zinc-900">
      <div className="flex flex-col gap-6">
        <StatsSideBarProfile
          profile={profile}
          bandsCount={bands.length}
          allConcertsCount={allConcerts.length}
        />

        <StatsSideBarMostSeenBands bands={bands} />
        <StatsSideBarGenres bands={bands} />
        <StatsSideBarLocations bands={bands} />
      </div>
      <div className="fixed bottom-0 left-20 w-80 bg-zinc-900">
        <div className="flex flex-col gap-2 p-6 pl-2">
          <StatsSideBarSocials profile={profile} />
        </div>
      </div>
    </div>
  );
}

export default StatsSideBar;
