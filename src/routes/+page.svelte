<script lang="ts">
import type { PageData } from "./$types";

export let data: PageData;
</script>

<svelte:head>
  <title>Sveiki 👋</title>
  <meta name="description" content={'Get an equivalent of "Hello" in different languages'} />
  <meta property="og:title" content="Sveiki 👋" />
  <meta property="og:description" content={'Get an equivalent of "Hello" in different languages'} />
</svelte:head>

<main>
  <h1>{data.greeting} 👋</h1>
</main>

<style>
:global(*) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:global(html) {
  height: 100%;
}

:global(body) {
  height: 100%;
  background-color: #1a1a1a;
  color: #e6e6e6;
}

main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
