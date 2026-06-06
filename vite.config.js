import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// host:true binds 0.0.0.0 so the E2B edge gateway can reach the dev server.
// Moabi launches this with PORT (PreviewPort) set and passes --port $PORT.
export default defineConfig({
  plugins: [svelte()],
  server: { host: true },
})
