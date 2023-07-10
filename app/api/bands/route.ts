import supabase from '@/app/utils/supabase';
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET() {
  const id = process.env.LOCAL_ID;
  const { data } = await supabase
    .from('Bands')
    .select()
    .eq('user_id', id)
    .order('band', { ascending: true });

  return NextResponse.json(data);
}
