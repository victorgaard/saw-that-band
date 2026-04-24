import { NextRequest, NextResponse } from 'next/server';

const url = process.env.GEOAPIFY_API_URL;
const apiKey = process.env.GEOAPIFY_API_KEY;

type PostResponse = {
  id: string;
  status: string;
  url: string;
};

type GeoQuery = {
  query: {
    text: string;
  };
};

type GeoQueryResponse = GeoQuery & {
  datasource: {
    sourcename: string;
    attribution: string;
    license: string;
    url: string;
  };
  name: string;
  other_names: {
    alt_name?: string;
  };
  country: string;
  country_code: string;
  state: string;
  state_code: string;
  county: string;
  county_code: string;
  city: string;
  suburb: string;
  street: string;
  postcode: string;
  iso3166_2: string;
  iso3166_2_sublevel: string;
  lat: number;
  lon: number;
  result_type: string;
  formatted: string;
  address_line1: string;
  address_line2: string;
  timezone: {
    name: string;
    offset_STD: string;
    offset_STD_seconds: number;
    offset_DST: string;
    offset_DST_seconds: number;
    abbreviation_STD: string;
    abbreviation_DST: string;
  };
  plus_code: string;
  plus_code_short: string;
  rank: {
    importance: number;
    popularity: number;
    confidence: number;
    match_type: string;
    confidence_street_level?: number;
  };
  place_id: string;
};

type GetResponse = GeoQuery[] | GeoQueryResponse[];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { cities } = body;

    if (!Array.isArray(cities)) {
      return NextResponse.json(
        { error: 'Invalid payload. Expected { cities: string[] }' },
        { status: 400 }
      );
    }

    if (!apiKey || !url) {
      return NextResponse.json(
        { error: 'Missing GEOAPIFY_API_URL or GEOAPIFY_API_KEY' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${process.env.GEOAPIFY_API_KEY}?apiKey=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cities)
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: 'Geoapify request failed', details: errorText },
        { status: response.status }
      );
    }

    const data: PostResponse = await response.json();

    return NextResponse.json({ id: data.id, status: data.status });
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
      return NextResponse.json(
        { error: 'Missing ?id=' },

        { status: 400 }
      );
    }

    if (!apiKey || !url) {
      return NextResponse.json(
        { error: 'Missing GEOAPIFY_API_URL or GEOAPIFY_API_KEY' },
        { status: 500 }
      );
    }

    const res = await fetch(
      `${process.env.GEOAPIFY_API_KEY}?id=${id}&apiKey=${apiKey}`,
      {
        method: 'GET'
      }
    );

    if (!res.ok) {
      const text = await res.text();

      return NextResponse.json(
        { error: 'Geoapify GET failed', details: text },
        { status: res.status }
      );
    }

    const data: GetResponse = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: 'Unexpected error', details: String(err) },
      { status: 500 }
    );
  }
}
