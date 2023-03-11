'use client';

import { ReactElement } from 'react';
import { Palette } from 'react-palette';

type SetlistWrapperProps = {
  url: string;
  children: ReactElement;
};

function SetlistWrapper({ url, children }: SetlistWrapperProps) {
  return (
    <Palette src={url}>
      {({ data }) => {
        const gradient = `linear-gradient(200deg, ${data.darkMuted}, #181818)`;
        return (
          <div
            className="h-screen overflow-auto bg-[#181818] p-8 text-white"
            style={{ background: gradient }}
          >
            {children}
          </div>
        );
      }}
    </Palette>
  );
}

export default SetlistWrapper;
