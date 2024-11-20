import getTimeAgo from '@/app/utils/getTimeAgo';
import { Band } from '@/types/bands';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

type ProfileLatestConcertsProps = {
  latest: Band[];
};

function ProfileLatestConcerts({ latest }: ProfileLatestConcertsProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-zinc-700/60 bg-zinc-850 p-6 text-sm">
      <div className="flex justify-between">
        <p className="text-xs font-semibold text-zinc-400">LATEST CONCERTS</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-2">
        {latest.map(concert => (
          <Link
            key={concert.id}
            href={`/${concert.band.replaceAll(' ', '-')}/${concert.id}`}
            aria-label={`${concert.band} latest concert`}
            className="group relative flex h-[64px] items-center justify-end gap-2 overflow-hidden rounded px-2 py-1 font-medium text-zinc-100 hover:text-white"
          >
            <div className="absolute -left-6 flex items-center gap-2 overflow-hidden transition-all group-hover:left-0">
              <ArrowRightIcon className="h-4 w-4" />
              <div className="flex items-center gap-4">
                <Image
                  width={40}
                  height={40}
                  src={concert.picture}
                  alt={concert.band}
                  className="h-[40px] w-[40px] rounded-lg object-cover grayscale transition-all group-hover:grayscale-0"
                />
                <p className="flex flex-col">
                  <span className="truncate">{concert.band}</span>
                  <span className="text-xs text-zinc-400">
                    {getTimeAgo(concert.concerts[0].date)}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProfileLatestConcerts;
