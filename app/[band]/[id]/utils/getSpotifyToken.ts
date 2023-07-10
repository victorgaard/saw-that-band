import { Token } from '@/app/api/spotify/route';
import { API_URL } from '@/environments/environments';

export const revalidate = 0;

async function getSpotifyToken() {
  const res = await fetch(`${API_URL}/api/spotify`);

  if (!res.ok) return undefined;

  const json = await res.json();
  const data: Token = json;

  return data;
}

export default getSpotifyToken;
