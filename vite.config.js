import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Suppress warnings from dependencies
      },
    },
  },
  
  plugins: [react()],
})
