import 'server-only';

import { API_URL } from '@/environments/environments';
import { Bands } from '@/types/bands';

async function getBandById(bandId: string, userId: string) {
  const res = await fetch(
    `${API_URL}/api/band?bandId=${bandId}&userId=${userId}`,
    {
      next: { tags: [bandId, userId] }
    }
  );
  const band: Bands[] = await res.json();

  return band;
}

export default getBandById;
