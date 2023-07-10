import { User } from '@/types/user';
import getTimeAgo from '@/app/utils/getTimeAgo';
import ProfileHeader from './ProfileHeader';

type ProfileHeaderWrapperProps = {
  user: User;
};

function ProfileHeaderWrapper({ user }: ProfileHeaderWrapperProps) {
  const joinedAt = getTimeAgo(user.created_at);

  return <ProfileHeader user={user} joinedAt={joinedAt} />;
}

export default ProfileHeaderWrapper;
