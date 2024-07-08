import swc from 'unplugin-swc'
import { defineProject } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'node:path'

export default defineProject({
  test: {
    include: ['**/__tests__/**/*.spec.[tj]s'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/__tests__/**/*.e2e.spec.[tj]s',
    ],
    testTimeout: 20000,
    isolate: false,
    globals: true,
    setupFiles: '../../playground/test/setup/react.ts',
    environment: 'jsdom',
  },
  esbuild: {
    target: 'node18',
  },
  publicDir: false,
  plugins: [
    swc.vite({
      module: { type: 'es6' },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
