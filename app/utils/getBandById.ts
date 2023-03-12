import 'server-only';

import { Bands } from '@/app/types/bands';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getBandById(id: string) {
  const { data, error } = await supabase.from('Bands').select('*').eq('id', id);

  return data as Bands[];
}

export default getBandById;
