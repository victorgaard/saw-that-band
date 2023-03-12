'use client';

import { ReactElement } from 'react';

type SetlistLayoutProps = {
  url: string;
  children: ReactElement;
};

function SetlistLayout({ url, children }: SetlistLayoutProps) {
  const gradient = `linear-gradient(200deg, #424242, #181818)`;
  return (
    <div
      className="h-screen overflow-auto bg-[#181818] p-8 text-white"
      style={{ background: gradient }}
    >
      {children}
    </div>
  );
}

export default SetlistLayout;
