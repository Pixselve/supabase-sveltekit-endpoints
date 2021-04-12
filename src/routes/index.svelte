<script lang="ts">
async function request(method: "POST" | "GET" | "PUT") {
  const data = await fetch("/endpoint", {
    method
  });
  const json = await data.json()
  response = JSON.stringify(json) ;
}

let response = "Waiting for request...";
</script>

<svelte:head>
  <title>Hello world!</title>
</svelte:head>

<main>
  <div>
    <h1>Response</h1>
    <p>{response}</p>
  </div>

  <button on:click={() => request("POST")}>supabase.auth.api.signInWithEmail</button>
  <button on:click={() => request("PUT")}>supabase.auth.signIn</button>
  <button on:click={() => request("GET")}>supabase.from</button>
</main>

