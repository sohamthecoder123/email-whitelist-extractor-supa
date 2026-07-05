import { supabase } from "./supabase.js";

export async function signIn(email){
    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo:
                "https://sohamthecoder123.github.io/email-whitelist-extractor-supa/"
        }
    });

    return error;
}