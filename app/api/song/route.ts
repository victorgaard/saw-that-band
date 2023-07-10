import { SetlistData } from '@/app/[band]/[id]/utils/getSetlist';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const token = searchParams.get('token');
  const band = searchParams.get('band');
  const song = searchParams.get('song');

  const res = await fetch(
    `${process.env.SPOTIFY_URL}/search?type=track&q=artist:${band}%20track:${song}&limit=1`,
    {
      cache: 'default',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  );

  const data: SetlistData = await res.json();
  return NextResponse.json(data);
}
