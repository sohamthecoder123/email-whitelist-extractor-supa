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

export async function getUser() {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
        return null;
    }

    return data.user;
}

export async function signOut() {
    await supabase.auth.signOut();
}

export async function isAuthorized() {
    const { data, error } = await supabase
        .from("authorized_users")
        .select();

    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
        throw error;
    }

    return data.length === 1;
}

export async function getProtectedPage(page) {
    const { data, error } = await supabase
        .from("protected_pages")
        .select("content")
        .eq("page", page)
        .single();

    if (error) {
        throw error;
    }

    return data.content;
}