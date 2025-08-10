import { defineConfig } from 'tsdown'
import postcss from 'rollup-plugin-postcss'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    platform: 'neutral',
    dts: true,
    unbundle: true,
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    // treeshake: false,
    plugins: [
      postcss({
        plugins: [tailwindcss()],
      }),
    ],
    outputOptions: {
      chunkFileNames: '[name].js',
      cssChunkFileNames: '[name].css',
    },
  },
])
