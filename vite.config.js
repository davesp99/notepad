import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/notepad/', // Asegúrate de que coincida con el nombre del repo en GitHub
})