import { User, UserLink } from '@/types/user';
import { LinkIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ReactNode } from 'react';

type StatsSideBarSocialsProps = {
  profile: User;
};

type Icons = {
  [key in UserLink['type']]?: ReactNode;
};

const icons: Icons = {
  lastfm: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeWidth={1.25}
        d="M10.584 17.209l-.88-2.392s-1.43 1.595-3.573 1.595c-1.897 0-3.244-1.65-3.244-4.289 0-3.381 1.704-4.591 3.382-4.591 2.419 0 3.188 1.567 3.849 3.574l.88 2.75c.879 2.667 2.528 4.811 7.284 4.811 3.409 0 5.719-1.044 5.719-3.793 0-2.227-1.265-3.381-3.629-3.932l-1.76-.385c-1.209-.275-1.566-.77-1.566-1.594 0-.935.742-1.485 1.952-1.485 1.319 0 2.034.495 2.144 1.677l2.749-.33c-.22-2.474-1.924-3.491-4.729-3.491-2.474 0-4.893.935-4.893 3.931 0 1.87.907 3.052 3.188 3.602l1.869.439c1.402.33 1.869.907 1.869 1.705 0 1.017-.989 1.43-2.858 1.43-2.776 0-3.932-1.457-4.591-3.464l-.907-2.749c-1.155-3.574-2.997-4.894-6.653-4.894C2.145 5.333 0 7.89 0 12.233c0 4.179 2.145 6.433 5.993 6.433 3.107.001 4.591-1.457 4.591-1.457z"
      />
    </svg>
  ),
  spotify: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
      />
      <path
        fill="currentColor"
        d="M17.48 11.42c-.15 0-.3-.05-.44-.14-2.98-2.14-6.8-2.61-10.2-1.25a.75.75 0 01-.97-.42c-.15-.38.04-.82.42-.97 3.88-1.54 8.23-1.01 11.63 1.43.34.24.41.71.17 1.05-.14.19-.37.3-.61.3z"
      />
      <path
        fill="currentColor"
        d="M15.91 14.11c-.15 0-.3-.05-.44-.14a7.604 7.604 0 00-7.26-.89.753.753 0 01-.97-.42.75.75 0 01.42-.97 9.08 9.08 0 018.68 1.07c.34.24.41.71.17 1.05-.14.19-.37.3-.6.3zM14.81 16.9c-.15 0-.3-.05-.44-.14a5.55 5.55 0 00-5.27-.65.753.753 0 01-.97-.42.75.75 0 01.42-.97c2.24-.89 4.74-.58 6.69.82.34.24.41.71.17 1.05a.71.71 0 01-.6.31z"
      />
    </svg>
  ),
  setlist: <MusicalNoteIcon className="h-5 w-5" />,
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
      />
      <path
        fill="currentColor"
        d="M12 16.25A4.26 4.26 0 017.75 12 4.26 4.26 0 0112 7.75 4.26 4.26 0 0116.25 12 4.26 4.26 0 0112 16.25zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25zM17 7.5c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.09-.1-.17-.21-.22-.33A.986.986 0 0116 6.5c0-.13.02-.26.07-.38.06-.13.13-.23.22-.33.05-.04.1-.09.15-.12.06-.04.12-.07.18-.09a1.006 1.006 0 011.09.21c.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38-.12.23-.21.33c-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08z"
      />
    </svg>
  ),
  other: <LinkIcon className="h-5 w-5" />
};

function StatsSideBarSocials({ profile }: StatsSideBarSocialsProps) {
  return (
    <div className="flex items-center gap-4 text-zinc-400">
      <Image
        priority
        src={profile.picture}
        width={48}
        height={48}
        alt={(profile.name, 'photo')}
        className="h-[48px] w-[48px] shrink-0 rounded object-cover"
      />
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-semibold">
          FOLLOW {profile.name.toLocaleUpperCase()}
        </p>
        <div className="flex items-center gap-3">
          {profile.links.map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
              aria-label={`Follow ${profile.name} on ${link.type}`}
            >
              {icons[link.type]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSideBarSocials;
