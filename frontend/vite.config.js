import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 
import dotenv from 'dotenv'

dotenv.config() 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Disable inlining of assets
  },
  server: {
    port: `${process.env.FRONTEND_PORT || 3000}`, // Use PORT from environment variables or default to 3000
  }
})
