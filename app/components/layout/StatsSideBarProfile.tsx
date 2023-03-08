import { User } from '@/app/types/user';
import formatDate from '@/app/utils/formatDate';
import Image from 'next/image';

type StatsSideBarProfileProps = {
  profile: User;
};

function StatsSideBarProfile({ profile }: StatsSideBarProfileProps) {
  const hasJoinedAt = formatDate(
    new Date(profile.createdAt.slice(0, 10)).getTime()
  );

  return (
    <div className="flex items-center gap-4">
      <Image
        priority
        src={profile.picture}
        width={88}
        height={88}
        alt={(profile.name, 'photo')}
        className="h-[88px] w-[88px] shrink-0 rounded-lg object-cover shadow-xl"
      />
      <div className="flex flex-col">
        <p className="text-base font-semibold">{profile.fullName}</p>
        <p className="text-sm">{profile.handle}</p>
        <p className="text-sm text-gray-500">joined {hasJoinedAt}</p>
      </div>
    </div>
  );
}

export default StatsSideBarProfile;
