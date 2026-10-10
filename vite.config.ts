import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

function webpSupportPlugin(): Plugin {
  return {
    name: 'celestarc-webp-support',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url && req.url.startsWith('/image/') && req.url.includes('.png')) {
          const publicDir = path.resolve(import.meta.dirname, 'public')
          const cleanPath = req.url.split('?')[0]
          const fullPngPath = path.join(publicDir, cleanPath)

          if (!fs.existsSync(fullPngPath)) {
            const webpPath = fullPngPath.replace(/\.png$/i, '.webp')
            if (fs.existsSync(webpPath)) {
              req.url = req.url.replace(/\.png(\?.*)?$/i, '.webp$1')
            }
          }
        }
        next()
      })
    },
    transform(code, id) {
      if (process.env.NODE_ENV === 'production' && (id.endsWith('.ts') || id.endsWith('.tsx') || id.endsWith('.js'))) {
        return {
          code: code.replace(/\/image\/([^"'`\s)]+)\.png/g, '/image/$1.webp'),
          map: null,
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), webpSupportPlugin()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
