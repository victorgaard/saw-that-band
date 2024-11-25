import getBands from '@/app/utils/getBands';
import { Metadata } from 'next';
import getBandById from '@/app/components/band-page/utils/getBandById';
import sortConcertsByDate from '@/app/utils/sortConcertsByDate';
import getBandBio from '@/app/components/band-page/utils/getBandBio';
import BandPageWrapper from '@/app/components/band-page/components/BandPageWrapper';
import { Concert } from '../../../types/bands';
import getUser from '../../utils/getUser';

type ConcertProps = {
  params: Promise<{
    band: string;
    id: string;
  }>;
};

export async function generateMetadata({
  params
}: ConcertProps): Promise<Metadata> {
  const [user] = await getUser();
  const bands = await getBands({ userId: user.id });

  const awaitedParams = await params;
  const bandId = awaitedParams.id;

  const name = user.name?.split(' ')[0] || user.username;
  const bandNameURL = awaitedParams.band;

  const [band] = await getBandById(bandId, user.id);

  if (!band || !user) return { title: null };

  const concerts = bands.map(b => b.concerts);
  const newArray: Concert[] = [];
  const allConcerts = newArray.concat(...concerts);

  return {
    title: band.band,
    description: `${name} saw that band ${band.band}`,
    openGraph: {
      title: band.band,
      description: `${name} saw that band ${band.band}`,
      siteName: `${name} saw that band ${band.band}`,
      url: `https://${user.username}.sawthat.band/${bandNameURL}/${bandId}`,
      images: [
        {
          url: `/api/og?band=${band.band}&picture=${band.picture || ''}&bands=${
            bands.length
          }&concerts=${allConcerts.length}&username=${
            user.username
          }&userPicture=${user.picture || ''}&userFirstName=${name}`,
          width: 1200,
          height: 630
        }
      ],
      locale: 'en-DE',
      type: 'website'
    }
  };
}

async function BandPage({ params }: ConcertProps) {
  const awaitedParams = await params;
  const bandId = awaitedParams.id;

  const [user] = await getUser();
  const [band] = await getBandById(bandId, user.id);
  const bandBio = await getBandBio(band.band);

  band.concerts = sortConcertsByDate(band.concerts);

  return <BandPageWrapper band={band} bandBio={bandBio} user={user} />;
}

export default BandPage;
