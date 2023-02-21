import Link from 'next/link';

export type Data = {
  id: number;
  band: string;
  date: string;
  city: string;
};

export async function getData() {
  const res = await fetch(
    'https://gist.githubusercontent.com/victorgaard/dcd7afebd12b8cbf9fb296fe7fee78a0/raw/855bc5d3abf4fca7b834c40240a9b1c22f446f21/data.json'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data: Data[] = await getData();

  return (
    <main>
      {data.map(concert => (
        <div
          key={concert.id}
          className="mb-8 flex items-center justify-between rounded-lg p-6 hover:bg-gray-100"
        >
          <div>
            <p className="font-semibold">{concert.band}</p>
            <p>{concert.city}</p>
            <p>{concert.date}</p>
          </div>
          <Link href={`/concert/${concert.id}`}>Go to concert</Link>
        </div>
      ))}
    </main>
  );
}
