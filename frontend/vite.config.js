import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,            // frontend runs on localhost:3001
    host: '127.0.0.1',     // IMPORTANT: avoid IPv6 issues (::1)
    proxy: {
      '/api': {
        target: 'http://localhost:8090',  // backend port
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
