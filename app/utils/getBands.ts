import { API_URL } from '@/environments/environments';
import { Band } from '@/types/bands';
import getUser from './getUser';

async function getBands({ userId }: { userId: string }) {
  const res = await fetch(`${API_URL}/api/bands?id=${userId}`, {
    next: { tags: ['bands'] }
  });
  const bands: Band[] = await res.json();

  return bands as Band[];
}

export default getBands;
