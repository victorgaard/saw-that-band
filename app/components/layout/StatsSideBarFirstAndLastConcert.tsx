import { Bands, Concerts } from '@/app/types/bands';
import getFirstAndLastConcert from '@/app/utils/getFirstAndLastConcert';
import Link from 'next/link';

type StatsSideBarFirstAndLastConcertProps = {
  bands: Bands[];
  allConcerts: Concerts[];
};

function StatsSideBarFirstAndLastConcert({
  bands,
  allConcerts
}: StatsSideBarFirstAndLastConcertProps) {
  const findTheFirstAndLastConcert = getFirstAndLastConcert(allConcerts);
  const firstConcert = bands.find(band =>
    band.concerts.includes(findTheFirstAndLastConcert.firstConcert as Concerts)
  );
  const lastConcert = bands.find(band =>
    band.concerts.includes(findTheFirstAndLastConcert.lastConcert as Concerts)
  );

  return (
    <>
      <div className="group">
        <p className="text-base font-semibold">First concert</p>
        <Link
          href={`/${firstConcert?.band.replaceAll(' ', '+')}-${
            firstConcert?.id
          }`}
          className="group-hover:text-gray-500"
        >
          <p>{firstConcert?.band}</p>
          <p>
            {firstConcert?.concerts[0].date} @{' '}
            {firstConcert?.concerts[0].location}
          </p>
        </Link>
      </div>
      <div className="group">
        <p className="text-base font-semibold">Last concert</p>
        <Link
          href={`/${lastConcert?.band.replaceAll(' ', '+')}-${lastConcert?.id}`}
          className="group-hover:text-gray-500"
        >
          <p>{lastConcert?.band}</p>
          <p>
            {lastConcert?.concerts[0].date} @{' '}
            {lastConcert?.concerts[0].location}
          </p>
        </Link>
      </div>
    </>
  );
}

export default StatsSideBarFirstAndLastConcert;
