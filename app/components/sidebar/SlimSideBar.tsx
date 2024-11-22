'use client';

import { ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '../logo/Logo';
import Tooltip from '../tooltip/Tooltip';
import { cn } from '@/app/utils/cn';

type SlimSideBarProps = {
  profileName: string;
  routes: {
    label: string;
    href: string;
    icon: ReactElement;
  }[];
  username: string;
};

function SlimSideBar({ profileName, routes, username }: SlimSideBarProps) {
  const path = usePathname();

  return (
    <div className="relative flex w-20 flex-col items-center justify-between gap-7 p-6">
      <div className="flex flex-col items-center gap-6">
        <div>
          <a
            href={`https://www.sawthat.band/?utm_source=${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="peer cursor-pointer text-zinc-600 transition-colors hover:text-zinc-500"
            aria-label="Create your profile"
          >
            <Logo width={48} height={48} />
          </a>
          <div className="absolute left-[4.5rem] top-5 z-20 hidden min-w-fit animate-fade-in whitespace-nowrap rounded bg-zinc-700 px-6 py-4 text-sm font-medium text-white shadow-lg peer-hover:block">
            Create your profile now 🤘
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {routes.map(route => {
            const isActive = path === route.href;
            return (
              <Link
                key={route.label}
                href={route.href}
                aria-label={`Navigate to ${route.label}`}
                className={cn('group relative flex items-center', {
                  'rounded outline outline-2 outline-zinc-700': isActive
                })}
              >
                <div
                  className={cn(
                    'absolute -left-5 w-[5px] rounded-r transition-all',
                    {
                      'h-8 bg-zinc-500': isActive,
                      'h-3 bg-zinc-800 group-hover:h-4': !isActive
                    }
                  )}
                />
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded transition-colors',
                    {
                      'bg-zinc-500 text-white': isActive,
                      'bg-zinc-700 text-zinc-400 hover:bg-zinc-600 active:bg-zinc-700':
                        !isActive
                    }
                  )}
                >
                  {route.icon}
                </div>
                <Tooltip>{route.label}</Tooltip>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="h-full w-[1px] bg-zinc-700/50" />
      <div className="flex shrink-0 items-end justify-center text-sm text-zinc-600">
        <p className="rotate-180 [writing-mode:vertical-lr]">
          <span className="font-semibold text-zinc-500">
            {profileName.toLowerCase()}
          </span>{' '}
          saw that band
        </p>
      </div>
    </div>
  );
}

export default SlimSideBar;
