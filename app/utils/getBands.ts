import 'server-only';

import { API_URL } from '@/environments/environments';
import { Bands } from '@/types/bands';

async function getBands() {
  const res = await fetch(`${API_URL}/api/bands`, {
    next: { tags: ['bands'] }
  });
  const bands: Bands[] = await res.json();

  return bands as Bands[];
}

export default getBands;
