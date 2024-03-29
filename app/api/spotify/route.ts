import { NextResponse } from 'next/server';

export type Token = {
  clientId: string;
  accessToken: string;
  accessTokenExpirationTimestampMs: number;
  isAnonymous: boolean;
};

export const revalidate =
  process.env.NODE_ENV === 'development' ? 6666666666 : 0;

export async function GET() {
  const res = await fetch(`${process.env.SPOTIFY_REQUEST_TOKEN_URL}/`, {
    headers: {
      Accept: 'application/json'
    }
  });

  if (!res.ok) return Promise.reject();

  const data: Token = await res.json();
  return NextResponse.json(data);
}
