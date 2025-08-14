import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  root: './playground',
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `sl_${hash}`,
    }),
  ],
})
