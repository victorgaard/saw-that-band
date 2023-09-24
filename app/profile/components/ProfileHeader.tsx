import Picture from '@/app/components/picture/Picture';
import { User } from '@/types/user';
import Balancer from 'react-wrap-balancer';

type ProfileHeaderProps = {
  user: User;
  joinedAt: string;
};

function ProfileHeader({ user, joinedAt }: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg sm:gap-6">
      <Picture user={user} />
      <div className="flex flex-col gap-1 sm:gap-1.5">
        <p className="text-base font-bold text-white sm:text-lg">
          @{user.username}
        </p>
        <p className="text-sm text-zinc-200">
          <Balancer>{user.bio}</Balancer>
        </p>
        <p className="text-xs text-zinc-400">joined {joinedAt}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
