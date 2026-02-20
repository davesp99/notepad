import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Asegúrate de que este plugin esté presente
  ],
  base: '/notepad/', // Esta base es correcta para tu repositorio
})