import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    historyApiFallback: true,

    proxy: {
      '/jobsList': {
        target: 'http://localhost:3000', // Your backend or JSON server
        changeOrigin: true,
        secure: false,
        
      },
    },
  }, 
})
