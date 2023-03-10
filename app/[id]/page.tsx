import getBandById from '@/app/utils/getBandById';
import { Metadata } from 'next';
import Image from 'next/image';
import BackButton from './components/BackButton';
import SetlistLayout from './components/SetlistLayout';
import SetlistWrapper from './components/SetlistWrapper';
import getBandBio from './utils/getBandBio';

type ConcertProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params
}: ConcertProps): Promise<Metadata> {
  const bandName = params.id.split('-')[0].replaceAll('%2B', ' ');
  return { title: bandName };
}

async function Concert({ params }: ConcertProps) {
  const bandId = params.id.split('-')[1];
  const bandArray = await getBandById(bandId);
  const band = bandArray[0];
  const bandBio = await getBandBio(band.band);

  return (
    <SetlistLayout url={band.picture}>
      <div className="relative -m-8 bg-stone-800 p-8">
        <BackButton />
        <div className="m-8"> </div>
        <div className="flex flex-col gap-8">
          <Image
            src={band.picture}
            width={200}
            height={200}
            alt={band.band}
            className="absolute top-20 h-[200px] w-[200px] rounded-lg bg-stone-600 object-cover shadow-2xl"
          />
          <div className="ml-[224px] flex h-[140px] flex-col justify-end gap-3">
            <p className="text-4xl font-bold">{band.band}</p>
            {bandBio && (
              <>
                <div className="relative flex text-sm text-stone-400">
                  <p className="line-clamp-3">{bandBio.bio}</p>
                  {bandBio.bio.length > 80 && (
                    <div className="absolute bottom-0 right-0 flex items-center gap-1 bg-stone-800 pl-[0.15rem] text-sm">
                      <p>...</p>
                      <a
                        href={bandBio.url}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer text-yellow-600 hover:text-yellow-500"
                      >
                        Read full bio
                      </a>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-200">
                  <p>Similar bands</p>
                  {bandBio.similarBands?.slice(0, 3).map(similarBand => (
                    <a
                      href={similarBand.url}
                      target="_blank"
                      rel="noreferrer"
                      key={similarBand.name}
                      className="whitespace-nowrap rounded-lg bg-stone-700 px-2 py-1 text-left text-xs text-white hover:bg-stone-600"
                    >
                      {similarBand.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="m-16"> </div>
      {/* @ts-expect-error */}
      <SetlistWrapper band={band} />
    </SetlistLayout>
  );
}

export default Concert;
