import { Bands, Concerts } from '@/app/types/bands';
import { User } from '@/app/types/user';
import Balancer from 'react-wrap-balancer';
import formatDate from '@/app/utils/formatDate';
import getBandGenres from '@/app/utils/getBandsGenres';
import getFirstAndLastConcert from '@/app/utils/getFirstAndLastConcert';
import getMostSeenBand from '@/app/utils/getMostSeenBand';
import Image from 'next/image';
import Link from 'next/link';

type StatsSideBarProps = {
  profile: User;
  bands: Bands[];
};

function StatsSideBar({ profile, bands }: StatsSideBarProps) {
  const hasJoinedAt = formatDate(
    new Date(profile.createdAt.slice(0, 10)).getTime()
  );
  const concerts = bands.map(band => band.concerts);
  const concertsArray: Concerts[] = [];
  const unifiedConcertsDatesAndLocations = concertsArray.concat(...concerts);
  const findTheFirstAndLastConcert = getFirstAndLastConcert(
    unifiedConcertsDatesAndLocations
  );
  const firstConcert = bands.find(band =>
    band.concerts.includes(findTheFirstAndLastConcert.firstConcert as Concerts)
  );
  const lastConcert = bands.find(band =>
    band.concerts.includes(findTheFirstAndLastConcert.lastConcert as Concerts)
  );
  const mostSeenBands = getMostSeenBand(bands);
  const genres = getBandGenres(bands);

  return (
    <div className="flex w-80 shrink-0 flex-col justify-between border-r bg-gray-100 p-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Image
            priority
            src={profile.picture}
            width={88}
            height={88}
            alt={(profile.name, 'photo')}
            className="h-[88px] w-[88px] shrink-0 rounded-lg object-cover shadow-xl"
          />
          <div className="flex flex-col">
            <p className="font-semibold">{profile.fullName}</p>
            <p className="text-sm">{profile.handle}</p>
            <p className="text-sm">joined {hasJoinedAt}</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Bio</p>
          <p>
            <Balancer>{profile.bio}</Balancer>
          </p>
        </div>
        <div>
          <p className="font-semibold">Bands seen live</p>
          <p>{bands?.length}</p>
        </div>
        <div>
          <p className="font-semibold">Total concerts</p>
          <p>{unifiedConcertsDatesAndLocations.length}</p>
        </div>
        <div className="group">
          <p className="font-semibold">First concert</p>
          <Link
            href={`/concert/${firstConcert?.id}`}
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
          <p className="font-semibold">Last concert</p>
          <Link
            href={`/concert/${lastConcert?.id}`}
            className="group-hover:text-gray-500"
          >
            <p>{lastConcert?.band}</p>
            <p>
              {lastConcert?.concerts[0].date} @{' '}
              {lastConcert?.concerts[0].location}
            </p>
          </Link>
        </div>
        <div>
          <p className="font-semibold">Most seen bands</p>
          {mostSeenBands.map(band => (
            <Link
              href={`/?search=${band.band}`}
              key={band.id}
              className="flex justify-between hover:text-gray-500"
            >
              <span>{band.band}</span>
              <span>{band.concerts.length}x</span>
            </Link>
          ))}
        </div>
        <div>
          <p className="font-semibold">Genres</p>
          {genres.map(genre => (
            <Link
              href={`/?search=${genre.genre}`}
              key={genre.genre}
              className="flex justify-between hover:text-gray-500"
            >
              <span>{genre.genre}</span>
              <span>{genre.count}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Links</p>
        <div className="flex gap-2">
          {profile.links.map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500"
            >
              {link.type}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSideBar;
