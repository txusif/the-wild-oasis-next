import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = process.env.SUPABASE_URL;

const supabaseKey = process.env.SERVICE_ROLE_SECRET;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
