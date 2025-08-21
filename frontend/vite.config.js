import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    build: {
      assetsInlineLimit: 0, // Disable inlining of assets
    },
    define: {
      'import.meta.env.FRONTEND_PORT': JSON.stringify(process.env.FRONTEND_PORT || 5173),
      'import.meta.env.BACKEND_PORT': JSON.stringify(process.env.BACKEND_PORT || 80),
      'import.meta.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || 'http://localhost'),
    },
    server: {
      watch: {
        usePolling: true, // Use polling for file watching

      },
      allowedHosts: ['localhost', env.FRONTEND_URL]
    },
  };
});
