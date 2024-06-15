import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/__tests__/**/*.spec.[tj]s'],
    exclude: ['**/node_modules/**', '**/dist/**', './playground/**/*.*'],
    testTimeout: 20000,
    isolate: false,
    globals: true,
    setupFiles: './playground/setup.ts',
  },
  esbuild: {
    target: 'node18',
  },
  publicDir: false,
  plugins: [
    swc.vite({
      module: { type: 'es6' },
    }) as any,
  ],
})
