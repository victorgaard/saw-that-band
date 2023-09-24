import { User } from '@/types/user';
import Image from 'next/image';

type PictureProps = {
  user: User;
  size?: number;
};

function Picture({ user, size = 116 }: PictureProps) {
  if (user.picture)
    return (
      <Image
        src={user.picture}
        width={size}
        height={size}
        alt="Avatar"
        className={`h-[${size}px] w-[${size}px] rounded-lg bg-zinc-900 object-cover`}
      />
    );

  return (
    <div
      className={`flex h-[${size}px] w-[${size}px] items-center justify-center rounded-lg bg-zinc-900 object-cover text-4xl uppercase text-zinc-700`}
    >
      {user.username[0]}
    </div>
  );
}

export default Picture;
