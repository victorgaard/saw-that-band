import supabase from '@/app/utils/supabase';
import { NextResponse } from 'next/server';

export const revalidate =
  process.env.NODE_ENV === 'development' ? 6666666666 : 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const bandId = searchParams.get('bandId');
  const userId = searchParams.get('userId');

  const { data } = await supabase
    .from('Bands')
    .select()
    .eq('user_id', userId)
    .eq('id', bandId);

  return NextResponse.json(data);
}
