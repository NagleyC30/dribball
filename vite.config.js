import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// On GitHub Pages this project is served from /dribball/, so the production
// build needs that base path. Local dev stays at the root (/).
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/dribball/' : '/',
  plugins: [react()],
}))
