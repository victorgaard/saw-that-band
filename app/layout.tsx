import { Work_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import AnalyticsWrapper from './components/analytics/AnalyticsWrapper';
import SlimSideBar from './components/layout/SlimSideBar';
import StatsSideBar from './components/layout/StatsSideBar';
import './globals.css';
import getBands from './utils/getBands';
import getUser from './utils/getUser';

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

const font = Work_Sans({ subsets: ['latin'] });

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const profile = await getUser();
  const bands = await getBands();

  return (
    <html lang="en" className={font.className}>
      <head />
      <body className="overflow-hidden antialiased">
        <div className="flex min-h-screen">
          <SlimSideBar profileName={profile.name} />
          <StatsSideBar profile={profile} bands={bands} />
          <div className="relative max-h-screen w-full bg-gray-50">
            {children}
            <AnalyticsWrapper />
          </div>
        </div>
      </body>
    </html>
  );
}
