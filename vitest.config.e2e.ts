import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/__tests__/**/*.e2e-spec.[tj]s'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    testTimeout: 20000,
    isolate: false,
    globals: true,
    setupFiles: './playground/setup.ts',
    deps: {
      moduleDirectories: ['node_modules', 'packages', 'servers'],
      interopDefault: true,
    },
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
