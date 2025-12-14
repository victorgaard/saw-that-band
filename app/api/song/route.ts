import { SetlistData } from '@/app/components/band-page/utils/getSetlist';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const band = searchParams.get('band');
  const song = searchParams.get('song');

  const res = await fetch(
    `${process.env.DEEZER_URL}/search?q=artist:"${band}"%20track:"${song}"`,
    {
      cache: 'default',
      headers: {
        Accept: 'application/json'
      }
    }
  );

  const data: SetlistData = await res.json();
  return NextResponse.json(data);
}
