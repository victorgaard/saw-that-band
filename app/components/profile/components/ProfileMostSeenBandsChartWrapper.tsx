import { Band } from '@/types/bands';
import ProfileMostSeenBandsChart from './ProfileMostSeenBandsChart';
import structureDataForBumpChart from '../utils/structureDataForBumpChart';

type ProfileMostSeenBandsChartWrapperProps = {
  bands: Band[];
  oldestConcertYear: number;
};

function ProfileMostSeenBandsChartWrapper({
  bands,
  oldestConcertYear
}: ProfileMostSeenBandsChartWrapperProps) {
  const currentYear = new Date().getFullYear();
  const targetYear = currentYear - 7;
  const targetMobile = currentYear - 2;
  const minYear = oldestConcertYear;
  const data = structureDataForBumpChart(
    bands,
    currentYear,
    minYear,
    targetYear
  );
  const dataMobile = structureDataForBumpChart(
    bands,
    currentYear,
    minYear,
    targetMobile
  );

  return (
    <div className="flex flex-col gap-8 rounded-lg border border-zinc-700/60 bg-zinc-850 p-6 text-sm">
      <div className="flex justify-between">
        <p className="text-xs font-semibold text-zinc-400">
          TOP BANDS TIMELINE
        </p>
      </div>
      <div className="hidden max-h-[225px] min-h-[225px] max-w-[calc(100vw-230px)] sm:block lg:max-w-[calc(100vw-550px)] 3xl:pt-12">
        <ProfileMostSeenBandsChart data={data} />
      </div>
      <div className="max-h-[225px] min-h-[225px] sm:hidden">
        <ProfileMostSeenBandsChart data={dataMobile} isMobile />
      </div>
    </div>
  );
}

export default ProfileMostSeenBandsChartWrapper;
