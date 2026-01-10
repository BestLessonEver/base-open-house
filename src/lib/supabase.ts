import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Registration {
  id?: string;
  created_at?: string;
  parent_name: string;
  email: string;
  phone: string;
  student_name: string;
  student_age: number;
  instrument_interest: string;
  comments?: string;
}
