import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['**/__tests__/**/*.e2e.spec.[tj]s'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    testTimeout: 20000,
    isolate: false,
    globals: true,
    setupFiles: '../../playground/setup.ts',
    deps: {
      moduleDirectories: ['node_modules', 'packages', 'servers'],
      interopDefault: true
    }
  },
  esbuild: {
    target: 'node18'
  },
  publicDir: false,
  plugins: [
    // @ts-expect-error - swc.vite is not typed
    swc.vite({
      module: { type: 'es6' }
    }),
    tsconfigPaths()
  ]
})
