import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/install.ts'),
      name: 'vue-wheel-of-names',
      fileName: 'vue-wheel-of-names',
    },
    rollupOptions: {
      // Make sure to externalize dependencies that you don’t want to bundle with your library
      external: ['vue'],
      output: {
        // In UMD build mode, provide a global variable for these externalized dependencies
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
