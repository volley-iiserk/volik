import { createClient } from '@supabase/supabase-js';

// This checks if you are using Vite OR Next.js and grabs the right key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase Environment Variables!');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
