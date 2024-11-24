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
        className="rounded-lg bg-zinc-900 object-cover"
        style={{
          width: size,
          height: size
        }}
        priority
      />
    );

  return (
    <div
      className="flex items-center justify-center rounded-lg bg-zinc-900 object-cover text-4xl uppercase text-zinc-700"
      style={{
        width: size,
        height: size
      }}
    >
      {user.username[0]}
    </div>
  );
}

export default Picture;
