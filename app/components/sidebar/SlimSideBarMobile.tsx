'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';

type SlimSideBarMobileProps = {
  routes: {
    label: string;
    href: string;
    icon: ReactElement;
  }[];
};

function SlimSideBarMobile({ routes }: SlimSideBarMobileProps) {
  const path = usePathname();

  return (
    <div className="flex w-full items-center justify-between gap-2 bg-zinc-870/70 px-8 pt-2 backdrop-blur-lg">
      <div className="flex items-center gap-2">
        {routes.map(route => {
          const isActive = path === route.href;
          return (
            <Link
              key={route.label}
              href={route.href}
              aria-label={`Navigate to ${route.label}`}
              className="group z-20 mb-3 flex justify-center"
            >
              <div
                className={classNames(
                  'absolute bottom-0 h-1 rounded-t transition-all',
                  {
                    'w-10 bg-zinc-200': isActive,
                    'w-4 bg-zinc-500': !isActive
                  }
                )}
              />
              <div
                className={classNames(
                  'flex h-14 w-14 items-center justify-center rounded transition-colors',
                  {
                    'text-white': isActive,
                    'text-zinc-500 active:bg-zinc-800': !isActive
                  }
                )}
              >
                <div className="scale-125">{route.icon}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <a
        href="https://www.sawthat.band"
        target="_blank"
        rel="noreferrer"
        aria-label="Create yours"
        className="flex items-center gap-2 p-3 text-sm text-zinc-400"
      >
        Create yours
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

export default SlimSideBarMobile;
