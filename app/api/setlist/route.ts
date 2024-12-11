import { SetlistData } from '@/app/components/band-page/utils/getSetlist';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const band = searchParams.get('band');
  const location = searchParams.get('location');
  const date = searchParams.get('date');

  const res = await fetch(
    `${process.env.SETLIST_URL}/search/setlists?artistName=${band}&city=${location}&date=${date}`,
    {
      cache: 'default',
      headers: {
        Accept: 'application/json',
        'x-api-key': process.env.SETLIST_API_KEY!
      }
    }
  );

  console.log(res);

  if (!res.ok) return NextResponse.json({ error: 'Network request error' });

  const data: SetlistData = await res.json();
  return NextResponse.json({ data });
}
