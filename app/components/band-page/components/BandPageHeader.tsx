import { Bands } from '@/types/bands';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { BandBio } from '../utils/getBandBio';
import BackButton from '../../back/BackButton';

type BandPageHeaderProps = {
  band: Bands;
  bandBio: BandBio | undefined;
};

function BandPageHeader({ band, bandBio }: BandPageHeaderProps) {
  return (
    <div className="-mx-12 -my-8 flex flex-col gap-8 bg-gradient-to-br from-zinc-100/10 to-zinc-870 to-40% px-12 py-8">
      <BackButton />
      <div className="flex flex-col flex-wrap gap-8 sm:flex-row sm:flex-nowrap sm:items-center">
        <Image
          src={band.picture}
          width={200}
          height={200}
          alt={band.band}
          className="h-[200px] w-[200px] shrink-0 rounded-lg bg-zinc-600 object-cover shadow-2xl"
        />
        <div className="flex flex-col justify-end gap-4">
          <p className="text-4xl font-bold text-white">{band.band}</p>
          {bandBio && (
            <div>
              <div className="relative flex text-[13px] text-zinc-300">
                <p className="line-clamp-3">{bandBio.bio}</p>
              </div>
              {bandBio.similarBands?.length > 0 && (
                <div
                  className={classNames(
                    'flex flex-col flex-wrap gap-2 text-sm text-zinc-400 sm:flex-row sm:items-center',
                    {
                      'mt-4': bandBio.bio.trim()
                    }
                  )}
                >
                  <p className="self-start sm:self-center">Similar to</p>
                  <div className="flex flex-wrap items-center gap-2 self-start">
                    {bandBio.similarBands?.slice(0, 3).map(similarBand => (
                      <a
                        href={similarBand.url}
                        target="_blank"
                        rel="noreferrer"
                        key={similarBand.name}
                        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-700/50 px-2 py-1 text-left text-xs font-medium text-zinc-100 hover:bg-zinc-700 hover:text-white"
                      >
                        <span className="... max-w-[7.5rem] truncate">
                          {similarBand.name}
                        </span>
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 text-zinc-500" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BandPageHeader;
