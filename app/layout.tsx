import { Concerts } from '@/app/types/bands';
import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import Balancer from 'react-wrap-balancer';
import AnalyticsWrapper from './components/analytics/AnalyticsWrapper';
import './globals.css';
import formatDate from './utils/formatDate';
import getBands from './utils/getBands';
import getBandGenres from './utils/getBandsGenres';
import getMostSeenBand from './utils/getMostSeenBand';
import getUser from './utils/getUser';
import getFirstAndLastConcert from './utils/getFirstAndLastConcert';

const font = Work_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Saw that band',
    template: '%s | Saw that band'
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
    title: 'Saw that band',
    card: 'summary_large_image'
  },
  icons: {
    shortcut: '/favicon.ico'
  },
  verification: {
    google:
      'add from here later on https://search.google.com/search-console/welcome'
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const profile = await getUser();
  const profileBands = await getBands();
  const concerts = profileBands.map(band => band.concerts);
  const concertsArray: Concerts[] = [];
  const unifiedConcertsDatesAndLocations = concertsArray.concat(...concerts);
  const findTheFirstAndLastConcert = getFirstAndLastConcert(
    unifiedConcertsDatesAndLocations
  );

  const firstConcert = profileBands.find(band =>
    band.concerts.includes(findTheFirstAndLastConcert.firstConcert as Concerts)
  );
  const lastConcert = profileBands.find(band =>
    band.concerts.includes(findTheFirstAndLastConcert.lastConcert as Concerts)
  );
  const mostSeenBands = getMostSeenBand(profileBands);

  const genres = getBandGenres(profileBands);

  const hasJoinedAt = formatDate(
    new Date(profile.createdAt.slice(0, 10)).getTime()
  );

  return (
    <html lang="en" className={font.className}>
      <head />
      <body className="overflow-hidden antialiased">
        <div className="flex min-h-screen">
          <div className="flex w-24 shrink-0 items-end justify-center border-r bg-gray-100 pb-8">
            <p className="rotate-180 [writing-mode:vertical-lr]">
              <span className="font-semibold">{profile.name}</span> saw that
              band
            </p>
          </div>
          <div className="flex w-80 shrink-0 flex-col justify-between border-r bg-gray-100 p-8">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <Image
                  priority
                  src={profile.picture}
                  width={88}
                  height={88}
                  alt={(profile.name, 'photo')}
                  className="h-[88px] w-[88px] shrink-0 rounded-lg object-cover shadow-xl"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{profile.fullName}</p>
                  <p className="text-sm">{profile.handle}</p>
                  <p className="text-sm">joined {hasJoinedAt}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">Bio</p>
                <p>
                  <Balancer>{profile.bio}</Balancer>
                </p>
              </div>
              <div>
                <p className="font-semibold">Bands seen live</p>
                <p>{profileBands?.length}</p>
              </div>
              <div>
                <p className="font-semibold">Total concerts</p>
                <p>{unifiedConcertsDatesAndLocations.length}</p>
              </div>
              <div className="group">
                <p className="font-semibold">First concert</p>
                <Link
                  href={`/concert/${firstConcert?.id}`}
                  className="group-hover:text-gray-500"
                >
                  <p>{firstConcert?.band}</p>
                  <p>
                    {firstConcert?.concerts[0].date} @{' '}
                    {firstConcert?.concerts[0].location}
                  </p>
                </Link>
              </div>
              <div className="group">
                <p className="font-semibold">Last concert</p>
                <Link
                  href={`/concert/${lastConcert?.id}`}
                  className="group-hover:text-gray-500"
                >
                  <p>{lastConcert?.band}</p>
                  <p>
                    {lastConcert?.concerts[0].date} @{' '}
                    {lastConcert?.concerts[0].location}
                  </p>
                </Link>
              </div>
              <div>
                <p className="font-semibold">Most seen bands</p>
                {mostSeenBands.map(band => (
                  <Link
                    href={`/?search=${band.band}`}
                    key={band.id}
                    className="flex justify-between hover:text-gray-500"
                  >
                    <span>{band.band}</span>
                    <span>{band.concerts.length}x</span>
                  </Link>
                ))}
              </div>
              <div>
                <p className="font-semibold">Genres</p>
                {genres.map(genre => (
                  <Link
                    href={`/?search=${genre.genre}`}
                    key={genre.genre}
                    className="flex justify-between hover:text-gray-500"
                  >
                    <span>{genre.genre}</span>
                    <span>{genre.count}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Links</p>
              <div className="flex gap-2">
                {profile.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-500"
                  >
                    {link.type}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative max-h-screen w-full overflow-y-auto bg-gray-50 py-8 px-24">
            {children}
            <AnalyticsWrapper />
          </div>
        </div>
      </body>
    </html>
  );
}
