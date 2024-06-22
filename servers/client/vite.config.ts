import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
    }),
  ],
  build: {
    outDir: '../api/static',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        manualChunks(id) {
          // 处理 pnpm 的依赖路径
          if (id.includes('node_modules')) {
            const directories = id.toString().split('node_modules/')
            if (directories.length > 2) {
              return directories[2].split('/')[0].toString()
            }
            return directories[1].split('/')[0].toString()
          }
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
