import supabase from "$lib/db";

export async function post() {
  try {
    const { data, error } = await supabase.auth.api.signInWithEmail("dummy@dummy.com", "password");
    console.log({ data, error });
    return {
      body: { data, error }
    };
  } catch (e) {
    console.log({e});
    return {
      body: { e }
    };
  }
}

export async function put() {
  try {
    const { data, error } = await supabase.auth.signIn({ email: "dummy@dummy.com", password: "password" });
    console.log({ data, error });
    return {
      body: { data, error }
    };
  } catch (e) {
    console.log({e});
    return {
      body: { e }
    };
  }
}

export async function get() {
  try {
    const { data, error } = await supabase.from("messages").select();
    console.log({ data, error });
    return {
      body: { data, error }
    };
  } catch (e) {
    console.log({e});
    return {
      body: { e }
    };
  }
}
