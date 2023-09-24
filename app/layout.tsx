import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import { TicketIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { User } from '@/types/user';
import MusicPlayerWrapper from './components/music-player/MusicPlayerWrapper';
import SlimSideBar from './components/sidebar/SlimSideBar';
import StatsSideBar from './components/sidebar/StatsSideBar';
import './globals.css';
import getUser from './utils/getUser';
import getBands from './utils/getBands';
import SlimSideBarMobile from './components/sidebar/SlimSideBarMobile';
import GoogleAnalyticsWrapper from './components/analytics/GoogleAnalyticsWrapper';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const routes = [
  {
    label: 'Bands',
    href: '/',
    icon: <TicketIcon className="h-6 w-6" />
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: <UserCircleIcon className="h-6 w-6" />
  }
];

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

  return {
    metadataBase: new URL(`https://${profile.username}.sawthat.band`),
    referrer: 'origin-when-cross-origin',
    keywords: [`${profile.username}`, 'saw that band', 'band catalogue'],
    colorScheme: 'dark',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    title: {
      default: `${profile.username} saw that band`,
      template: `%s | ${profile.username} saw that band`
    },
    description: `Check all the bands ${profile.username} has seen live`,
    openGraph: {
      title: `${profile.username} saw that band`,
      description: `Check all the bands ${profile.username} has seen live`,
      url: '/',
      siteName: `${profile.username} saw that band`,
      images: '/api/og',
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
      title: `${profile.username} saw that band`,
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
        <body className="relative min-h-screen touch-none overflow-hidden bg-zinc-900 antialiased">
          <div className="flex">There is no account with this username</div>
        </body>
      </html>
    );

  const profile = res[0];
  const bands = await getBands();

  return (
    <html lang="en" className={font.className}>
      <head />
      <body className="relative min-h-screen touch-none overflow-hidden bg-zinc-900 antialiased">
        <div className="flex">
          <div className="fixed bottom-0 z-40 w-full sm:hidden">
            <SlimSideBarMobile routes={routes} />
          </div>
          <div className="flex max-h-screen min-h-screen">
            <div className="hidden sm:flex">
              <SlimSideBar profileName={profile.username} routes={routes} />
            </div>
            <div className="hidden lg:flex">
              <StatsSideBar profile={profile} bands={bands} />
            </div>
          </div>
          <MusicPlayerWrapper>{children}</MusicPlayerWrapper>
        </div>
      </body>
      <GoogleAnalyticsWrapper />
    </html>
  );
}
