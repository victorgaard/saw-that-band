import { NextResponse } from 'next/server';

export type Token = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64'
  );

  const res = await fetch(process.env.SPOTIFY_REQUEST_TOKEN_URL!, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials'
    }),
    next: {
      revalidate: 3000
    }
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch token' },
      { status: res.status }
    );
  }

  const data: Token = await res.json();
  return NextResponse.json(data);
}
