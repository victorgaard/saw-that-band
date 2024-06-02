'use server';

import getBandById from '../../band-page/utils/getBandById';

export async function getPodiumBandsInfo({
  bandIds,
  userId
}: {
  bandIds: string[];
  userId: string;
}) {
  const [first, second, third] = await Promise.all([
    getBandById(bandIds[0], userId),
    getBandById(bandIds[1], userId),
    getBandById(bandIds[2], userId)
  ]);

  return { first, second, third };
}
