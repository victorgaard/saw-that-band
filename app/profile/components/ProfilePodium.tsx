import getTimeAgo from '@/app/utils/getTimeAgo';
import { Bands } from '@/types/bands';
import Image from 'next/image';
import Link from 'next/link';

type ProfilePodiumProps = {
  first: Bands[];
  second: Bands[];
  third: Bands[];
  bands: {
    id: string;
    reason: string;
  }[];
};

function ProfilePodium({ first, second, third, bands }: ProfilePodiumProps) {
  return (
    <div className="flex flex-col rounded-lg border border-zinc-700/60 bg-zinc-850 p-0 text-sm sm:p-6 sm:pb-0">
      <div className="flex justify-between">
        <p className="pl-6 pt-6 text-xs font-semibold text-zinc-400 sm:pl-0 sm:pt-0">
          BIGGEST GEMS
        </p>
      </div>
      <div className="grid h-[272px] grid-cols-3 items-end">
        <Link
          key={second[0].id}
          href={`/${second[0].band.replaceAll(' ', '-')}/${second[0].id}`}
          aria-label={`${second[0].band} gem concert`}
          className="group relative flex items-center gap-2 font-medium text-zinc-100 hover:text-white"
        >
          <div className="flex w-full flex-col gap-4">
            <span className="text-center text-xs text-zinc-400 group-hover:text-white">
              # 2
            </span>
            <div className="flex h-44 flex-col gap-4 rounded-lg rounded-b-none rounded-r-none border border-b-0 border-r-0 border-zinc-600/70 bg-gradient-to-b from-zinc-500/20 from-5% to-zinc-850 to-100% p-4 transition-all group-hover:h-48 group-hover:from-zinc-500/30 group-hover:to-zinc-700/10 xl:p-5">
              <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap lg:gap-4">
                <Image
                  width={40}
                  height={40}
                  src={second[0].picture}
                  alt={second[0].band}
                  className="h-[40px] w-[40px] shrink-0 rounded-lg object-cover"
                />
                <p className="flex flex-col flex-wrap">
                  <span>{second[0].band}</span>
                  <span className="text-xs text-zinc-400">
                    {getTimeAgo(second[0].concerts[0].date)}
                  </span>
                </p>
              </div>
              <span className="hidden text-[13px] font-medium text-zinc-300 group-hover:text-white lg:block">
                {bands[1].reason}
              </span>
            </div>
          </div>
        </Link>
        <Link
          key={first[0].id}
          href={`/${first[0].band.replaceAll(' ', '-')}/${first[0].id}`}
          aria-label={`${first[0].band} gem concert`}
          className="group relative flex items-center gap-2 font-medium text-zinc-100 hover:text-white"
        >
          <div className="flex w-full flex-col gap-4">
            <span className="text-center text-xs text-zinc-400 group-hover:text-white">
              # 1
            </span>
            <div className="flex h-52 w-full flex-col gap-4 rounded-lg rounded-b-none border border-b-0 border-zinc-600/70 bg-gradient-to-b from-zinc-500/20 from-5% to-zinc-850 to-100% p-4 transition-all group-hover:h-56 group-hover:from-zinc-500/30 group-hover:to-zinc-700/10 xl:p-5">
              <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap lg:gap-4">
                <Image
                  width={40}
                  height={40}
                  src={first[0].picture}
                  alt={first[0].band}
                  className="h-[40px] w-[40px] shrink-0 rounded-lg object-cover"
                />
                <p className="flex flex-col flex-wrap">
                  <span>{first[0].band}</span>
                  <span className="text-xs text-zinc-400">
                    {getTimeAgo(first[0].concerts[0].date)}
                  </span>
                </p>
              </div>
              <span className="hidden text-[13px] font-medium text-zinc-300 group-hover:text-white lg:block">
                {bands[0].reason}
              </span>
            </div>
          </div>
        </Link>
        <Link
          key={third[0].id}
          href={`/${third[0].band.replaceAll(' ', '-')}/${third[0].id}`}
          aria-label={`${third[0].band} gem concert`}
          className="group relative flex items-center gap-2 font-medium text-zinc-100 hover:text-white"
        >
          <div className="flex w-full flex-col gap-4">
            <span className="text-center text-xs text-zinc-400 group-hover:text-white">
              # 3
            </span>
            <div className="flex h-36 flex-col gap-4 rounded-lg rounded-b-none rounded-l-none border border-b-0 border-l-0 border-zinc-600/70 bg-gradient-to-b from-zinc-500/20 from-5% to-zinc-850 to-100% p-4 transition-all group-hover:h-40 group-hover:from-zinc-500/30 group-hover:to-zinc-700/10 xl:p-5">
              <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap lg:gap-4">
                <Image
                  width={40}
                  height={40}
                  src={third[0].picture}
                  alt={third[0].band}
                  className="h-[40px] w-[40px] shrink-0 rounded-lg object-cover"
                />
                <p className="flex flex-col flex-wrap">
                  <span>{third[0].band}</span>
                  <span className="text-xs text-zinc-400">
                    {getTimeAgo(third[0].concerts[0].date)}
                  </span>
                </p>
              </div>
              <span className="hidden text-[13px] font-medium text-zinc-300 group-hover:text-white lg:block">
                {bands[2].reason}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProfilePodium;
