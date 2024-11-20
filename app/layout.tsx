import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import { TicketIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { User } from '@/types/user';
import { Viewport } from 'next';
import MusicPlayerWrapper from './components/music-player/MusicPlayerWrapper';
import SlimSideBar from './components/sidebar/SlimSideBar';
import StatsSideBar from './components/sidebar/StatsSideBar';
import getUser from './utils/getUser';
import getBands from './utils/getBands';
import SlimSideBarMobile from './components/sidebar/SlimSideBarMobile';
import './globals.css';
import ContextWrapper from './ContextWrapper';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const routes = [
  {
    label: 'Profile',
    href: '/',
    icon: <UserCircleIcon className="h-6 w-6" />
  },
  {
    label: 'Bands',
    href: '/list',
    icon: <TicketIcon className="h-6 w-6" />
  }
];

export const viewport: Viewport = {
  colorScheme: 'dark'
};

export async function generateMetadata() {
  const res = await getUser();
  const profile: User = res[0];

  if ((res && res.length === 0) || !res)
    return {
      title: {
        default:
          'Create a bands catalogue from all the bands you have seen live'
      }
    };

  const name = profile.name?.split(' ')[0] || profile.username;

  return {
    metadataBase: new URL(`https://${profile.username}.sawthat.band`),
    referrer: 'origin-when-cross-origin',
    keywords: [`${name}`, 'saw that band', 'band catalogue'],
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    title: {
      default: `${name} saw that band`,
      template: `%s | ${name} saw that band`
    },
    description: `Check all the bands ${name} has seen live`,
    openGraph: {
      title: `${name} saw that band`,
      description: `Check all the bands ${name} has seen live`,
      url: '/',
      siteName: `${name} saw that band`,
      images: `/api/og?username=${profile.username}&userPicture=${
        profile.picture || ''
      }&userFirstName=${name}`,
      locale: 'en-DE',
      type: 'website'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    twitter: {
      title: `${name} saw that band`,
      card: 'summary_large_image'
    },
    icons: {
      shortcut: '/favicon.ico'
    },
    verification: {
      google: 'ofTvVJZzZHEMRIXg6cCRslqaEnRO3cqrum3zjSZTDu0'
    }
  };
}

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const res = await getUser();

  if ((res && res.length === 0) || !res)
    return (
      <html lang="en" className={font.className}>
        <head />
        <body className="relative min-h-screen touch-none overflow-hidden bg-gradient-to-tl from-zinc-850 to-zinc-900 antialiased">
          <div className="flex h-screen flex-col items-center justify-center gap-2 text-sm">
            There is no account with this username, would you like to register
            it?
            <a
              href="https://app.sawthat.band/signup?utm_source=nonExistingProfile"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-emerald-400 to-green-400 px-6 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:from-green-400 hover:to-green-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:from-emerald-400 disabled:hover:to-green-400"
            >
              Register
            </a>
          </div>
        </body>
      </html>
    );

  const user = res[0];
  const name = user.name?.split(' ')[0] || user.username;
  const bands = await getBands({ userId: user.id });

  return (
    <ContextWrapper user={user} bands={bands}>
      <html lang="en" className={font.className}>
        <head />
        <body className="relative min-h-screen touch-none overflow-hidden bg-zinc-900 antialiased">
          <div className="flex">
            <div className="fixed bottom-0 z-40 w-full sm:hidden">
              <SlimSideBarMobile routes={routes} username={user.username} />
            </div>
            <div className="flex max-h-screen min-h-screen">
              <div className="hidden sm:flex">
                <SlimSideBar
                  profileName={name}
                  routes={routes}
                  username={user.username}
                />
              </div>
              <div className="hidden lg:flex">
                <StatsSideBar profile={user} bands={bands} />
              </div>
            </div>
            <MusicPlayerWrapper>{children}</MusicPlayerWrapper>
          </div>
        </body>
      </html>
    </ContextWrapper>
  );
}
