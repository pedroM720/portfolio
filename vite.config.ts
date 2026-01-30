import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

// Fix for "__dirname is not defined" in ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // ✅ Double check this matches your repo name EXACTLY
  base: "/portfolio/", 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})