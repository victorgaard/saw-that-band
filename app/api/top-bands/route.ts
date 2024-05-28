import structureDataForBumpChart from '@/app/components/profile/utils/structureDataForBumpChart';
import supabase from '@/app/utils/supabase';
import { Bands } from '@/types/bands';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data: bands } = await supabase
    .from('Bands')
    .select()
    .order('band', { ascending: true });

  const currentYear = new Date().getFullYear();
  const targetYear = currentYear - 7;
  const targetMobile = currentYear - 2;
  const minYear = 2005;
  const data = structureDataForBumpChart(
    bands as Bands[],
    currentYear,
    minYear,
    targetYear
  );

  return NextResponse.json(data);
}
