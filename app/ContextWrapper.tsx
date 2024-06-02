'use client';

import { Bands } from '@/types/bands';
import { User } from '@/types/user';
import { ReactNode, createContext, useMemo } from 'react';

type AppContextType = {
  user: User;
  bands: Bands[];
};

export const AppContext = createContext<AppContextType>({
  user: {
    id: '',
    username: '',
    created_at: '',
    name: '',
    picture: '',
    bio: '',
    links: []
  },
  bands: []
});

type ContextWrapperProps = {
  children: ReactNode;
  user: User;
  bands: Bands[];
};

function ContextWrapper({ children, user, bands }: ContextWrapperProps) {
  const context = useMemo(
    () => ({
      user,
      bands
    }),
    [bands, user]
  );
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default ContextWrapper;
