import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {
            animation: {
              'spin-slow': 'spin 3s linear infinite',
              'loading-bar': 'loadingBar 2s ease-in-out infinite',
            },
            keyframes: {
              loadingBar: {
                '0%': { width: '0%' },
                '50%': { width: '70%' },
                '100%': { width: '100%' },
              }
            }
          },
        },
      }
    })
  ],
})