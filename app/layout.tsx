import { ReactNode } from 'react';
import './globals.css';
import { Inter } from '@next/font/google';

const font = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={font.className}>
        <div className="flex min-h-screen">
          <div className="flex w-24 shrink-0 items-end justify-center border-r bg-gray-100 pb-8">
            <p className="rotate-180 [writing-mode:vertical-lr]">
              <span className="font-semibold">victor</span> saw that band
            </p>
          </div>
          <div className="flex w-80 shrink-0 flex-col justify-between border-r bg-gray-100 p-8">
            <p>foto</p>
            <p>otas coisa</p>
          </div>
          <div className="max-h-screen w-full overflow-y-auto bg-gray-50 py-8 px-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
