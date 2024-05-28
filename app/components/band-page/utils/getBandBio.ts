import 'server-only';

type SimilarBands = {
  name: string;
  url: string;
  image: {
    '#text': string;
    size: string;
  }[];
};

export type BandBio = {
  bio: string;
  url: string;
  similarBands: SimilarBands[];
};

async function getBandBio(band: string) {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('x-api-key', process.env.SETLIST_API_KEY!);

  const res = await fetch(
    `${process.env.LASTFM_URL}/?method=artist.getinfo&artist=${band}&api_key=${process.env.LASTFM_API_KEY}&format=json`,
    {
      method: 'GET',
      credentials: 'include',
      redirect: 'follow',
      headers
    }
  );

  if (!res.ok) return undefined;

  const json = await res.json();

  if (json.error) return undefined;

  const bioCleanedUp = json.artist.bio.summary.replace(
    /<a\b[^>]*>(.*?)<\/a>/i,
    ''
  );

  const bio = bioCleanedUp;
  const similarBands = json.artist.similar.artist;
  const url = json.artist.bio.links.link.href;
  const data: BandBio = { bio, url, similarBands };

  return data;
}

export default getBandBio;
