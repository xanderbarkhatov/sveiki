<script lang="ts">
import type { PageData } from "./$types";

export let data: PageData;

const greeting = `${data.greeting} 👋`;
</script>

<svelte:head>
  <title>{greeting}</title>
  <meta property="og:title" content={greeting} />
  <meta property="og:description" content={data.language} />
  <meta property="og:image" content={"http://localhost:5173/api/og?text=" + greeting} />
</svelte:head>

<main>
  <h1>{greeting}</h1>
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
