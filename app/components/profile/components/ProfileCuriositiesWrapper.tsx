'use client';

import { useContext } from 'react';
import MusicPlayerContext from '@/app/components/music-player/MusicPlayerContext';
import ProfileCuriosities from './ProfileCuriosities';

type ProfileCuriositiesWrapperProps = {
  concertsLength: number;
};

function ProfileCuriositiesWrapper({
  concertsLength
}: ProfileCuriositiesWrapperProps) {
  const avgConcert = 90;
  const timeSpentOnConcerts = concertsLength * avgConcert;
  const hoursSpentOnConcerts = timeSpentOnConcerts / 60;
  const daysSpentOnConcerts = hoursSpentOnConcerts / 24;
  const avgEarthTravel = 45;
  const timesToTravelTheEarthFlying = hoursSpentOnConcerts / avgEarthTravel;
  const avgKmPerHour = 4.5;
  const kmTravelled = hoursSpentOnConcerts * avgKmPerHour;
  const theOffice = 97.5;
  const onePiece = 521.5;
  const theOfficeTimes = hoursSpentOnConcerts / theOffice;
  const onePieceTimes = hoursSpentOnConcerts / onePiece;
  const missingForOnePiece = onePiece - hoursSpentOnConcerts;
  const { isOpen } = useContext(MusicPlayerContext);

  return (
    <ProfileCuriosities
      isOpen={isOpen}
      concertsLength={concertsLength}
      hoursSpentOnConcerts={hoursSpentOnConcerts}
      avgConcert={avgConcert}
      daysSpentOnConcerts={daysSpentOnConcerts}
      kmTravelled={kmTravelled}
      avgKmPerHour={avgKmPerHour}
      timesToTravelTheEarthFlying={timesToTravelTheEarthFlying}
      avgEarthTravel={avgEarthTravel}
      theOffice={theOffice}
      theOfficeTimes={theOfficeTimes}
      onePiece={onePiece}
      onePieceTimes={onePieceTimes}
      missingForOnePiece={missingForOnePiece}
    />
  );
}

export default ProfileCuriositiesWrapper;
