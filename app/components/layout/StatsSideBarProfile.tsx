import { User } from '@/app/types/user';
import formatDate from '@/app/utils/formatDate';
import Image from 'next/image';

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
  const hasJoinedAt = formatDate(
    new Date(profile.createdAt.slice(0, 10)).getTime()
  );
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          priority
          src={profile.picture}
          width={80}
          height={80}
          alt={(profile.name, 'photo')}
          className="h-[80px] w-[80px] shrink-0 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <p className="text-base font-semibold">{profile.name}</p>
          <p className="text-sm font-medium">
            saw {bandsCount} {bandsCount === 1 ? 'band' : 'bands'}
          </p>
          <p className="text-sm text-gray-500">
            out of {allConcertsCount}{' '}
            {allConcertsCount === 1 ? 'concert' : 'concerts'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsSideBarProfile;
