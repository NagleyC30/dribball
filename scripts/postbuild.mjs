/* GitHub Pages serves 404.html for any unknown path and has no SPA fallback.
   Copying the built index.html to 404.html means deep links (e.g. /dribball/rules)
   still load the app, and React Router takes over from the preserved URL. */
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const index = resolve(dist, 'index.html')
const notFound = resolve(dist, '404.html')

if (!existsSync(index)) {
  console.error('postbuild: dist/index.html not found — did the build run?')
  process.exit(1)
}

copyFileSync(index, notFound)
console.log('postbuild: created dist/404.html (SPA fallback for GitHub Pages)')
