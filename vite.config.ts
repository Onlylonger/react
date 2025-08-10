import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import { dependencies, peerDependencies } from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      cssFileName: 'global',
      fileName: '[name]',
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies),
        'react/jsx-runtime',
      ],
      output: {
        format: 'esm',
        preserveModules: true,
      },
      treeshake: true,
    },
  },
  plugins: [react(), tailwindcss(), dts()],
})
