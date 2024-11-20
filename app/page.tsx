'use client';

import { Concert } from '@/types/bands';
import { use } from 'react';
import ProfileWrapper from './components/profile/components/ProfileWrapper';
import { AppContext } from './ContextWrapper';

function ProfilePage() {
  const { bands, user } = use(AppContext);
  const concerts = bands.map(band => band.concerts);
  const newArray: Concert[] = [];
  const allConcerts = newArray.concat(...concerts);

  if (allConcerts.length === 0)
    return (
      <div className="flex h-screen flex-col gap-8 overflow-auto overflow-x-hidden bg-zinc-870 py-6 pb-24 sm:px-12 sm:pb-8">
        This user has added no bands yet.
      </div>
    );

  return <ProfileWrapper bands={bands} user={user} allConcerts={allConcerts} />;
}

export default ProfilePage;
