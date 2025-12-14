import { API_URL } from '@/environments/environments';

async function getSong(band: string, song: string) {
  const res = await fetch(`/api/song?band=${band}&song=${song}`);

  if (!res.ok) return undefined;

  const json = await res.json();
  const data = json;

  return data;
}

export default getSong;
