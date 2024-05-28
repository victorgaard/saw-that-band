import { API_URL } from '@/environments/environments';

async function getSong(token: string, band: string, song: string) {
  const res = await fetch(`/api/song?token=${token}&band=${band}&song=${song}`);

  if (!res.ok) return undefined;

  const json = await res.json();
  const data = json;

  return data;
}

export default getSong;
