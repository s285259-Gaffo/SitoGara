import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/SitoGara/',  // 👈 nome del tuo repository
  plugins: [react()]   // o altri plugin che usi
})

