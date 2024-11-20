import { Band } from '@/types/bands';
import { User } from '@/types/user';
import { BandBio } from '../utils/getBandBio';
import BandPageHeader from './BandPageHeader';
import BandPageLayout from './BandPageLayout';
import SetlistWrapper from './SetlistWrapper';

type BandPageWrapperProps = {
  band: Band;
  bandBio: BandBio | undefined;
  user: User;
};

function BandPageWrapper({ band, bandBio, user }: BandPageWrapperProps) {
  return (
    <BandPageLayout>
      <BandPageHeader band={band} bandBio={bandBio} />
      <SetlistWrapper band={band} user={user} />
    </BandPageLayout>
  );
}

export default BandPageWrapper;
