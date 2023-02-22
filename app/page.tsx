import Link from 'next/link';
import bands from '../bands/bands';

export default async function Home() {
  return (
    <main>
      <p className="mb-8 text-lg font-semibold">
        Victor saw {bands.length} bands live
      </p>
      {bands.map(concert => (
        <div
          key={concert.id}
          className="mb-8 flex items-center justify-between rounded-lg p-6 hover:bg-gray-100"
        >
          <div className="flex items-center gap-8">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-300">
              <picture>
                <img
                  src={concert.picture}
                  alt={concert.band}
                  className="h-[96px] w-[96px] object-cover"
                />
              </picture>
            </div>
            <div>
              <p className="font-semibold">{concert.band}</p>
              <p>{concert.city}</p>
              <p>{concert.date}</p>
              <div className="flex items-center gap-2">
                {concert.genre.slice(0, 3).map(c => (
                  <p key={c} className="rounded-full bg-gray-200 p-2 text-xs">
                    {c}
                  </p>
                ))}
                {concert.genre.length > 3 && (
                  <p className="rounded-full bg-gray-200 p-2 text-xs">
                    +{concert.genre.length - 3}
                  </p>
                )}
              </div>
            </div>
          </div>
          <Link href={`/concert/${concert.id}`}>&gt;</Link>
        </div>
      ))}
    </main>
  );
}
