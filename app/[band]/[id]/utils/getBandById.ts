import 'server-only';

import { API_URL } from '@/environments/environments';
import { Bands } from '@/types/bands';

async function getBandById(id: string) {
  const res = await fetch(`${API_URL}/api/band?id=${id}`, {
    next: { tags: [id] }
  });
  const band: Bands[] = await res.json();

  return band;
}

export default getBandById;
