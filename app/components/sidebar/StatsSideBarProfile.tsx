import { User } from '@/types/user';

type StatsSideBarProfileProps = {
  profile: User;
  bandsCount: number;
  allConcertsCount: number;
};

function StatsSideBarProfile({
  profile,
  bandsCount,
  allConcertsCount
}: StatsSideBarProfileProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <p className="text-lg font-semibold">
          {profile.name} saw {bandsCount} {bandsCount === 1 ? 'band' : 'bands'}
        </p>
        <p className="text-sm text-zinc-400">
          from {allConcertsCount}{' '}
          {allConcertsCount === 1 ? 'concert' : 'concerts'}
        </p>
      </div>
    </div>
  );
}

export default StatsSideBarProfile;
