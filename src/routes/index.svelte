<script lang="ts">
async function request(method: "POST" | "GET" | "PUT") {
  const data = await fetch("/endpoint", {
    method
  });
  const json = await data.json();
  console.log({ json });
}

</script>

<svelte:head>
  <title>Hello world!</title>
</svelte:head>

<main>
  <button on:click={() => request("POST")}>supabase.auth.api.signInWithEmail</button>
  <button on:click={() => request("PUT")}>supabase.auth.signIn</button>
  <button on:click={() => request("GET")}>supabase.from</button>
</main>

