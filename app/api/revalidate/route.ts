import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { APP_URL } from '@/environments/environments';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');
  if (!tag) return NextResponse.json({ error: 'Please provide a valid tag' });
  revalidateTag(tag);

  return new Response(`Revalidated now ${Date.now()}`, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': APP_URL,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
}
