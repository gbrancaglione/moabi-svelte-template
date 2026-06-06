import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// The platform owns the start contract: Moabi sets PORT (PreviewPort) at boot and
// passes --port $PORT. Vite must serve on that port and accept the E2B per-sandbox
// *.e2b.app preview host, so the readiness probe and the reverse proxy can reach
// it. Defaults to 3000 when PORT is unset so `npm run dev` behaves the same locally.
const port = Number(process.env.PORT) || 3000

export default defineConfig({
  plugins: [svelte()],
  server: {
    host: true, // bind 0.0.0.0 so the E2B edge gateway can reach the dev server
    port,
    allowedHosts: true, // accept the per-sandbox *.e2b.app preview host
  },
})
