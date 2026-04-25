import { Band } from '@/types/bands';

function normalizeLocation(input: string) {
  return input
    .toLowerCase()
    .split(/[\/,|-]/)[0]
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractUniqueLocations(bands: Band[]) {
  const map = new Map<string, string>();

  for (const band of bands) {
    for (const concert of band.concerts) {
      const raw = concert.location?.trim();
      if (!raw) continue;

      const normalized = normalizeLocation(raw);

      if (!map.has(normalized)) {
        map.set(normalized, raw);
      }
    }
  }
  return Array.from(map.values());
}
