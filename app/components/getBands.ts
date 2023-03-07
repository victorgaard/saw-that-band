import { Bands } from '@/data/bands';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getBands() {
  const { data, error } = await supabase.from('Bands').select('*');

  return data as Bands[];
}

export default getBands;
