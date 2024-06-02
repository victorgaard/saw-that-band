import { API_URL } from '@/environments/environments';
import { Bands } from '@/types/bands';
import getUser from './getUser';

async function getBands({ userId }: { userId: string }) {
  const res = await fetch(`${API_URL}/api/bands?id=${userId}`, {
    next: { tags: ['bands'] }
  });
  const bands: Bands[] = await res.json();

  return bands as Bands[];
}

export default getBands;
