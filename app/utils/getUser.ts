import { API_URL } from '@/environments/environments';
import { User } from '@/types/user';
import { headers } from 'next/headers';

async function getUser() {
  const header = await headers();
  const username = header.get('host')?.split('.')[0] || '';
  const res = await fetch(`${API_URL}/api/find-user?username=${username}`, {
    next: {
      tags: [username]
    },
    cache: 'force-cache'
  });
  const user: User[] = await res.json();
  return user;
}

export default getUser;
