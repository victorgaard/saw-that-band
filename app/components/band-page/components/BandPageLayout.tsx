import { ReactNode } from 'react';

type BandPageLayoutProps = {
  children: ReactNode;
};

function BandPageLayout({ children }: BandPageLayoutProps) {
  return (
    <div className="flex h-screen flex-col gap-10 overflow-y-auto bg-zinc-870 px-4 py-8 text-white sm:px-12 sm:py-8">
      {children}
    </div>
  );
}

export default BandPageLayout;
