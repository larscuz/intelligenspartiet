import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/assets/data': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
      },
      '/proxy': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
      }
    }
  }
})
