import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseURL ="https://qgdzwhchrdrmkfemiyei.supabase.co";
const supabaseAnonKey = "sb_publishable_rMhr4p7H5PBoTXhICXRSGQ_mwvDbkul";

export const supabase = createClient (
    supabaseURL,
    supabaseAnonKey
);