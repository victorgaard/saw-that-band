import { GeocodeGetResponse, GeocodePostResponse } from '@/types/geocode';
import { User } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { admin, adminLocations } from '../utils/beta';

type UseGeocodeBatchArgs = {
  locations: string[];
  user: User;
};

export const useGeocodeBatch = ({ locations, user }: UseGeocodeBatchArgs) => {
  const isAdmin = user.username === admin;

  const startQuery = useQuery({
    queryKey: ['geocode-start', locations],
    queryFn: async () => {
      const res = await fetch('/api/geocode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locations })
      });

      if (!res.ok) throw new Error('Failed to start batch');

      const data: Promise<GeocodePostResponse> = res.json();
      return data;
    },
    enabled: !!locations?.length && !isAdmin,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  });

  const id = startQuery.data?.id;

  const query = useQuery({
    queryKey: ['geocode-batch', id],
    queryFn: async () => {
      const res = await fetch(`/api/geocode?id=${id}`);

      if (!res.ok) throw new Error('Failed to fetch results');

      const data: GeocodeGetResponse = await res.json();

      if (data.status !== 'success') return data;

      return {
        ...data,
        data: data.data.filter(
          item =>
            item.location &&
            item.country &&
            item.country_code &&
            typeof item.lat === 'number' &&
            typeof item.lon === 'number'
        )
      };
    },
    enabled: !!id,
    refetchInterval: query => {
      const response = query.state.data;
      const attempts = query.state.dataUpdateCount;

      if (attempts > 10 || response?.status === 'success') return false;

      return Math.min(2000 + attempts * 2000, 10000);
    },
    refetchOnWindowFocus: false
  });

  if (isAdmin) {
    const data: GeocodeGetResponse = {
      status: 'success',
      data: adminLocations
    };
    return { data };
  }

  return {
    data: query.data,
    isLoading: startQuery.isLoading || query.isLoading,
    isError: startQuery.isError || query.isError,
    error: startQuery.error ?? query.error
  };
};
