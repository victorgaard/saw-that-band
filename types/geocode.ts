export type GeocodePostResponse = {
  id: string;
  status: string;
  url: string;
};

export type GeocodeGetQuery = {
  query: {
    text: string;
  };
};

export type GeocodeGetFullResponse = GeocodeGetQuery & {
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

export type GeoLocation = {
  location: string;
  country: string;
  country_code: string;
  lat: number;
  lon: number;
};

export type GeocodeGetResponse =
  | {
      status: 'success';
      data: {
        location: string;
        country: string;
        country_code: string;
        lat: number;
        lon: number;
      }[];
    }
  | {
      status: 'no_results';
      message: string;
    }
  | {
      status: 'pending';
    };

export type GeocodeApiResponse =
  | { status: 'pending' }
  | { status: 'success'; data: GeoLocation[] };
