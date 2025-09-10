import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',          // required for a custom domain at the root
  plugins: [react()],
})
