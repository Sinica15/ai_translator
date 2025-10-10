import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  define: {
    global: 'window',
  },
  // Конфигурация для GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/ai_translator/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Генерировать sourcemaps для продакшена
    sourcemap: false,
  },
})
