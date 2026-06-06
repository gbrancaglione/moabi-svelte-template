# moabi-svelte-template

A minimal **Svelte + Vite** starter used to test Moabi's configurable custom
template. It is deliberately *not* React + Vite (the built-in default) so a booted
project is visibly distinguishable.

## Moabi config (Settings → Template)

- **Repository URL:** `https://github.com/gbrancaglione/moabi-svelte-template.git`
- **Ref:** *(empty — uses default branch)*
- **Subdirectory:** *(empty)*
- **Install command:** `npm install`
- **Start command:** `npm run dev -- --host 0.0.0.0 --port $PORT`

Moabi sets `PORT` (the preview port) in the sandbox; the start command serves the
Vite dev server there, bound to `0.0.0.0` so the preview gateway can reach it.

## Run locally

```bash
npm install
npm run dev
```
