import swc from 'unplugin-swc'
import { defineProject } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineProject({
  test: {
    include: ['**/__tests__/**/*.e2e.spec.[tj]s'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    testTimeout: 20000,
    isolate: false,
    globals: true,
    setupFiles: './test/vitestSetup.ts',
    deps: {
      interopDefault: true
    }
  },
  esbuild: {
    target: 'node18'
  },
  publicDir: false,
  plugins: [
    swc.vite({
      module: { type: 'es6' }
    }),
    tsconfigPaths()
  ]
})
