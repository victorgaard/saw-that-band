import getBandById from '@/app/[band]/[id]/utils/getBandById';
import getBands from '@/app/utils/getBands';
import { Metadata } from 'next';
import { Concerts } from '../../../types/bands';
import getUser from '../../utils/getUser';
import BandPageWrapper from './components/BandPageWrapper';
import getBandBio from './utils/getBandBio';

type ConcertProps = {
  params: {
    band: string;
    id: string;
  };
};

export async function generateMetadata({
  params
}: ConcertProps): Promise<Metadata> {
  const bands = await getBands();

  const bandNameURL = params.band;
  const bandId = params.id;
  const res = await getUser();
  const user = res[0];
  const bandArray = await getBandById(bandId, user.id);

  if (!bandArray || !user) return { title: null };

  const band = bandArray[0];
  const concerts = bands.map(currentBand => currentBand.concerts);
  const newArray: Concerts[] = [];
  const allConcerts = newArray.concat(...concerts);

  return {
    title: band.band,
    description: `${user.username} saw that band ${band.band}`,
    openGraph: {
      title: band.band,
      description: `${user.username} saw that band ${band.band}`,
      siteName: `${user.username} saw that band ${band.band}`,
      url: `https://server.sawthat.band/${bandNameURL}/${bandId}`,
      images: [
        {
          url: `https://server.sawthat.band/api/og?band=${band.band}&picture=${band.picture}&bands=${bands.length}&concerts=${allConcerts.length}`,
          width: 1200,
          height: 630
        }
      ],
      locale: 'en-DE',
      type: 'website'
    }
  };
}

async function Concert({ params }: ConcertProps) {
  const bandId = params.id;
  const res = await getUser();
  const user = res[0];
  const bandArray = await getBandById(bandId, user.id);
  const band = bandArray[0];
  const bandBio = await getBandBio(band.band);

  return <BandPageWrapper band={band} bandBio={bandBio} user={user} />;
}

export default Concert;
