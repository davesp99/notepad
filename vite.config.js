import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Adaptado a tu repositorio: davesp99/notepad
export default defineConfig({
  plugins: [react()],
  base: '/notepad/', 
})