import Image from 'next/image';
import Link from 'next/link';
import bands from './(components)/bands';

export async function getSpotifyToken() {
  const res = await fetch(`${process.env.SPOTIFY_REQUEST_TOKEN_URL}`).then(
    data => data.json()
  );

  return res.accessToken;
}

export async function getBandInfo(band: string) {
  const token = await getSpotifyToken();
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);

  const res = await fetch(
    `${process.env.SPOTIFY_URL}/search?type=artist&q=${band}&decorate_restrictions=false&best_match=true&include_external=audio&limit=1`,
    { method: 'GET', headers, redirect: 'follow' }
  ).then(data => data.json());

  const bandInfo = {
    picture: res.best_match.items[0].images[0].url,
    genre: res.best_match.items[0].genres
  };

  return bandInfo;
}

export default async function Home() {
  return (
    <main>
      {bands.map(concert => (
        <div
          key={concert.id}
          className="mb-8 flex items-center justify-between rounded-lg p-6 hover:bg-gray-100"
        >
          <div className="flex items-center gap-8">
            <div className="h-24 w-24 overflow-hidden rounded-lg bg-gray-300">
              {/* <picture>
                <img
                  src={image}
                  width={96}
                  height={96}
                  alt={concert.band}
                  className="object-cover"
                />
              </picture> */}
            </div>
            <div>
              <p className="font-semibold">{concert.band}</p>
              <p>{concert.city}</p>
              <p>{concert.date}</p>
            </div>
          </div>
          <Link href={`/concert/${concert.id}`}>&gt;</Link>
        </div>
      ))}
    </main>
  );
}
