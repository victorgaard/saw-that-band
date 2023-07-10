import supabase from '@/app/utils/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');

  if (!username) return NextResponse.json({ error: 'missing username' });

  const { data, error } = await supabase
    .from('Users')
    .select()
    .match({ username });

  if (error) return NextResponse.json({ error: error.message });

  return NextResponse.json(data);
}
