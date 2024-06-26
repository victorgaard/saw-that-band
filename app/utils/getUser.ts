import { API_URL } from '@/environments/environments';
import { User } from '@/types/user';
import { headers } from 'next/headers';

async function getUser() {
  const username = headers().get('host')?.split('.')[0];
  const res = await fetch(`${API_URL}/api/find-user?username=${username}`);
  const user: User[] = await res.json();
  return user;
}

export default getUser;
