import supabase from "$lib/db";

export async function post() {
  const { data, error } = await supabase.auth.api.signInWithEmail("dummy@dummy.com", "password");
  console.log({ data, error });
  return {
    body: ""
  };
}

export async function put() {
  const { data, error } = await supabase.auth.signIn({ email: "dummy@dummy.com", password: "password" });
  console.log({ data, error });
  return {
    body: ""
  };
}

export async function get() {
  const { data, error } = await supabase.from("messages").select();
  console.log({ data, error });
  return {
    body: ""
  };
}
