import { API_URL } from '@/environments/environments';
import { User } from '@/types/user';
import { headers } from 'next/headers';

let userCache: User[];

async function getUser() {
  const username = headers().get('host')?.split('.')[0];
  const cachedUserHasChanged =
    userCache && userCache.length > 0 && userCache[0].username !== username;

  if (!userCache || cachedUserHasChanged) {
    const res = await fetch(`${API_URL}/api/find-user?username=${username}`);
    userCache = await res.json();
  }

  return userCache;
}

export default getUser;
