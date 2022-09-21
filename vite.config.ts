import { defineConfig } from 'vite'
import SolidPlugin from 'vite-plugin-solid'
import UnocssPlugin from '@unocss/vite'

export default defineConfig({
  plugins: [
    SolidPlugin(),
    UnocssPlugin(),
  ],
  build: {
    target: 'esnext',
  },
})
