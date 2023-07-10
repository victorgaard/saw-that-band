import { Bands } from '@/types/bands';
import sortBandsByConcertDate from '@/app/utils/sortBandsByConcertDate';
import ProfileLatestConcerts from './ProfileLatestConcerts';

type ProfileLatestConcertsWrapperProps = {
  bands: Bands[];
};

function ProfileLatestConcertsWrapper({
  bands
}: ProfileLatestConcertsWrapperProps) {
  const latest = sortBandsByConcertDate(bands);

  return <ProfileLatestConcerts latest={latest} />;
}

export default ProfileLatestConcertsWrapper;
