import { ReactNode } from 'react';
import './globals.css';
import { Work_Sans } from 'next/font/google';
import user from '@/data/user';
import Image from 'next/image';

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

export async function getUser() {
  const res = user;
  return res;
}

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const profile = await getUser();

  return (
    <html lang="en" className={font.className}>
      <head />
      <body className="antialiased">
        <div className="flex min-h-screen">
          <div className="flex w-24 shrink-0 items-end justify-center border-r bg-gray-100 pb-8">
            <p className="rotate-180 [writing-mode:vertical-lr]">
              <span className="font-semibold">{profile.name}</span> saw that
              band
            </p>
          </div>
          <div className="flex w-80 shrink-0 flex-col justify-between border-r bg-gray-100 p-8">
            <div className="flex flex-col gap-6">
              <Image
                src={profile.picture}
                width={255}
                height={255}
                alt={(profile.name, 'photo')}
                className="h-[255px] w-[255px] rounded-lg object-cover shadow-xl"
              />
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p>{profile.bio}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Links</p>
              <div className="flex flex-col gap-1">
                {profile.links.map(link => (
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.type}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="max-h-screen w-full overflow-y-auto bg-gray-50 py-8 px-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
