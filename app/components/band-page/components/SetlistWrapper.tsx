'use client';

import { Band, Concert } from '@/types/bands';
import { User } from '@/types/user';
import { useEffect, useState } from 'react';
import getSetlist, { SetlistData } from '../utils/getSetlist';
import getSpotifyToken from '../utils/getSpotifyToken';
import Setlist from './Setlist';
import SetlistSkeleton from './SetlistSkeleton';

type SetlistWrapperProps = {
  band: Band;
  user: User;
};

function SetlistWrapper({ band, user }: SetlistWrapperProps) {
  const [loading, setLoading] = useState(true);
  const [concert, setConcert] = useState<Concert>(band.concerts[0]);
  const [data, setData] = useState<SetlistData>();
  const [token, setToken] = useState<string>();
  const bandName = band.band;

  function getToken() {
    getSpotifyToken().then(res => {
      if (!res) {
        setToken(undefined);
      } else {
        setToken(res.accessToken);
      }
    });
  }

  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, [token]);

  useEffect(() => {
    const { location, date } = concert;

    getSetlist(bandName, location, date).then(res => {
      setLoading(false);
      setData(res);
    });
  }, [bandName, concert]);

  if (loading) return <SetlistSkeleton />;

  return (
    <Setlist
      band={band}
      data={data}
      concert={concert}
      token={token}
      setConcert={setConcert}
      user={user}
    />
  );
}

export default SetlistWrapper;
