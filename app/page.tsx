import Image from 'next/image';
import Link from 'next/link';
import bands from '../data/bands';

export default async function Home() {
  bands.sort((a, b) => {
    if (a.band < b.band) {
      return -1;
    }
    if (a.band > b.band) {
      return 1;
    }
    return 0;
  });

  return (
    <main className="flex flex-col items-center">
      <input
        placeholder="Search for the band, genre or location"
        className="fixed w-[675px] rounded-full border bg-white/80 p-6 backdrop-blur-xl transition-all focus:shadow-2xl"
      />
      <div className="w-[675px] pt-24">
        {bands.map(concert => (
          <Link
            href={`/concert/${concert.id}`}
            key={concert.id}
            className="group mb-8 flex items-center justify-between rounded-lg p-6 hover:bg-gray-100"
          >
            <div className="flex items-center gap-8">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-300">
                <Image
                  width={96}
                  height={96}
                  src={concert.picture}
                  alt={concert.band}
                  className="h-[96px] w-[96px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 text-lg font-semibold">
                  <span>{concert.band}</span>
                  {concert.concerts.length > 1 && (
                    <span>- saw {concert.concerts.length} times</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {concert.genre.slice(0, 3).map(c => (
                    <p
                      key={c}
                      className="whitespace-nowrap rounded-full bg-gray-200 p-2 text-xs"
                    >
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
          </Link>
        ))}
      </div>
    </main>
  );
}
