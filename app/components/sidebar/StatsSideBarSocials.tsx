import { User, UserLink } from '@/types/user';
import { LinkIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import Picture from '../picture/Picture';
import DeezerIcon from '../icons/DeezerIcon';
import LastFmIcon from '../icons/LastFmIcon';
import SpotifyIcon from '../icons/SpotifyIcon';
import InstagramIcon from '../icons/InstagramIcon';

type StatsSideBarSocialsProps = {
  profile: User;
};

type Icons = {
  [key in UserLink['type']]?: ReactNode;
};

const icons: Icons = {
  lastfm: <LastFmIcon />,
  spotify: <SpotifyIcon className="size-6" />,
  setlist: <MusicalNoteIcon className="size-5" />,
  instagram: <InstagramIcon />,
  deezer: <DeezerIcon className="size-5" />,
  other: <LinkIcon className="size-5" />
};

function StatsSideBarSocials({ profile }: StatsSideBarSocialsProps) {
  const name = profile.name?.split(' ')[0] || profile.username;
  return (
    <div className="flex items-center gap-4 text-zinc-400">
      <Picture user={profile} size={48} />
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-semibold">
          FOLLOW {name.toLocaleUpperCase()}
        </p>
        <div className="flex items-center gap-3">
          {profile.links?.map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label={`Follow ${name} on ${link.type}`}
            >
              {icons[link.type] || icons.other}
            </a>
          ))}
          {!profile.links && (
            <span className="text-xs text-zinc-500">No social links added</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default StatsSideBarSocials;
