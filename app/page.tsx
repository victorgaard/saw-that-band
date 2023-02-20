import Link from 'next/link';

async function getData() {
  const res = await fetch(
    'https://gist.githubusercontent.com/victorgaard/dcd7afebd12b8cbf9fb296fe7fee78a0/raw/3da1beb4c99ffed476ce76f3a7db3165d01def93/data.json'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Link href="/concert/qualquer-parada">Go to concert</Link>
      <div className="m-8"> </div>
      {JSON.stringify(data)}
    </main>
  );
}
