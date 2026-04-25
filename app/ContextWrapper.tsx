'use client';

import { Band } from '@/types/bands';
import { User } from '@/types/user';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, createContext, useMemo } from 'react';

type AppContextType = {
  user: User;
  bands: Band[];
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
  bands: Band[];
};

const queryClient = new QueryClient();

function ContextWrapper({ children, user, bands }: ContextWrapperProps) {
  const context = useMemo(
    () => ({
      user,
      bands
    }),
    [bands, user]
  );
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={context}>{children}</AppContext.Provider>
    </QueryClientProvider>
  );
}

export default ContextWrapper;
