<script>
  let count = $state(0)
</script>

<main>
  <h1>🟠 Moabi custom template — Svelte</h1>
  <p>You are looking at a <strong>Svelte</strong> app, not React + Vite.</p>
  <p>If this rendered, the custom Git template booted successfully.</p>
  <button onclick={() => count++}>clicked {count} times</button>
</main>

<style>
  main {
    font-family: system-ui, -apple-system, sans-serif;
    max-width: 40rem;
    margin: 4rem auto;
    text-align: center;
    line-height: 1.5;
  }
  h1 {
    color: #ff3e00;
  }
  button {
    font-size: 1rem;
    padding: 0.5rem 1.25rem;
    cursor: pointer;
  }
</style>
