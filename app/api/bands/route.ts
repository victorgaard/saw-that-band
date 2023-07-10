import supabase from '@/app/utils/supabase';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate =
  process.env.NODE_ENV === 'development' ? 6666666666 : 0;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  const { data } = await supabase
    .from('Bands')
    .select()
    .eq('user_id', id)
    .order('band', { ascending: true });

  return NextResponse.json(data);
}
