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

/* export async function generateStaticParams() {
  const bands = await getBands();

  return bands.map(band => ({
    band: band.band.replaceAll(' ', '-'),
    id: band.id
  }));
} */

export async function generateMetadata({
  params
}: ConcertProps): Promise<Metadata> {
  const bands = await getBands();

  const bandNameURL = params.band;
  const bandId = params.id;
  const bandArray = await getBandById(bandId);
  const user = await getUser();

  if (!bandArray || !user) return { title: null };

  const band = bandArray[0];
  const concerts = bands.map(currentBand => currentBand.concerts);
  const newArray: Concerts[] = [];
  const allConcerts = newArray.concat(...concerts);

  return {
    title: band.band,
    description: `${user.name} saw that band ${band.band}`,
    openGraph: {
      title: band.band,
      description: `${user.name} saw that band ${band.band}`,
      siteName: `${user.name} saw that band ${band.band}`,
      url: `https://victor.sawthat.band/${bandNameURL}/${bandId}`,
      images: [
        {
          url: `https://victor.sawthat.band/api/og?band=${band.band}&picture=${band.picture}&bands=${bands.length}&concerts=${allConcerts.length}`,
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
  const bandArray = await getBandById(bandId);
  const band = bandArray[0];
  const bandBio = await getBandBio(band.band);
  const user = await getUser();

  return <BandPageWrapper band={band} bandBio={bandBio} user={user} />;
}

export default Concert;
