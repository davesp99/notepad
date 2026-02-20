import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Cambia esto a './' para que busque los estilos 
  // en la misma carpeta donde está el index.html
  base: './', 
})