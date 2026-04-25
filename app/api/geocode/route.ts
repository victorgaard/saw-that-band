import {
  GeocodeApiResponse,
  GeocodePostResponse,
  GeoLocation,
  GeocodeGetFullResponse
} from '@/types/geocode';
import { NextRequest, NextResponse } from 'next/server';

const url = process.env.GEOAPIFY_API_URL;
const apiKey = process.env.GEOAPIFY_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { locations } = body;

    if (!Array.isArray(locations)) {
      return NextResponse.json(
        { error: 'Invalid payload. Expected { locations: string[] }' },
        { status: 400 }
      );
    }

    if (!apiKey || !url) {
      return NextResponse.json(
        { error: 'Missing GEOAPIFY_API_URL or GEOAPIFY_API_KEY' },
        { status: 500 }
      );
    }

    const response = await fetch(`${url}?apiKey=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(locations)
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: 'Geoapify request failed', details: errorText },
        { status: response.status }
      );
    }

    const data: GeocodePostResponse = await response.json();

    return NextResponse.json({
      id: data.id,
      status: data.status
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Unexpected error', details: String(err) },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing ?id=' }, { status: 400 });
    }

    if (!apiKey || !url) {
      return NextResponse.json(
        { error: 'Missing GEOAPIFY_API_URL or GEOAPIFY_API_KEY' },
        { status: 500 }
      );
    }

    const res = await fetch(`${url}?id=${id}&apiKey=${apiKey}`);

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: 'Geoapify GET failed', details: text },
        { status: res.status }
      );
    }

    const data: unknown = await res.json();

    if (!Array.isArray(data)) {
      return NextResponse.json<GeocodeApiResponse>({
        status: 'pending'
      });
    }

    const results: GeoLocation[] = data
      .filter((item): item is GeocodeGetFullResponse => {
        return (
          typeof item === 'object' &&
          item !== null &&
          'lat' in item &&
          'lon' in item
        );
      })

      .map(item => ({
        location: item.query.text ?? item.city ?? item.name,
        country: item.country,
        country_code: item.country_code,
        lat: item.lat,
        lon: item.lon
      }));

    return NextResponse.json<GeocodeApiResponse>({
      status: 'success',
      data: results
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Unexpected error', details: String(err) },
      { status: 500 }
    );
  }
}
