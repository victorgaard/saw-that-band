import { NextResponse } from 'next/server';

export type Token = {
  clientId: string;
  accessToken: string;
  accessTokenExpirationTimestampMs: number;
  isAnonymous: boolean;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  const res = await fetch(
    `${process.env.GEOAPIFY_URL}/search?text=${city}&apiKey=${process.env.GEOAPIFY_KEY}`,
    {
      headers: {
        Accept: 'application/json'
      }
    }
  );

  if (!res.ok) return null;

  const data: Token = await res.json();
  return NextResponse.json(data);
}
