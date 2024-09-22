import {defineConfig} from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [
    vue(), dts({
      rollupTypes: true,
      include: [
        'src/components/SpinTheWheel/index.vue',
        'src/components/SpinTheWheel/hooks/useRotate.ts',
        'src/components/SpinTheWheel/hooks/useCanvas.ts',
        'src/components/SpinTheWheel/types.ts',
        'src/components/SpinTheWheel/utils.ts',
        'src/components/install.ts'],
    })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/install.ts'),
      name: 'vue-spin-the-wheel',
      fileName: 'vue-spin-the-wheel',
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
