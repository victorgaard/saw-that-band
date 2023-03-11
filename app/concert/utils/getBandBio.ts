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
  const data = json.artist.bio.summary;

  return data;
}

export default getBandBio;
