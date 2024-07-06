import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    rollupTypes: true,
    include: [
      'src/components/WheelOfNames/index.vue',
      'src/components/WheelOfNames/hooks/useRotate.ts',
      'src/components/WheelOfNames/hooks/useCanvas.ts',
      'src/components/WheelOfNames/types.ts',
      'src/components/WheelOfNames/utils.ts',
      'src/components/install.ts'],
  })],
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
