import Link from 'next/link';

type ConcertProps = {
  params: {
    id: string;
  };
};

function Concert({ params }: ConcertProps) {
  return (
    <>
      <Link href="/">Back</Link>
      <div className="m-8"> </div>
      <div>Concert {params.id}</div>
    </>
  );
}

export default Concert;
