import { API_URL } from '@/environments/environments';
import { headers } from 'next/headers';

async function getUser() {
  const username = headers().get('host')?.split('.')[0];
  const res = await fetch(`${API_URL}/api/find-user?username=${username}`);
  return res.json();
}

export default getUser;
