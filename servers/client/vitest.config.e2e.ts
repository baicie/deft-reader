import swc from 'unplugin-swc'
import { defineProject } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineProject({
  test: {
    include: ['**/__tests__/**/*.e2e.spec.[tj]sx'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    testTimeout: 20000,
    isolate: false,
    globals: true,
    setupFiles: '../../playground/test/setup/react.ts',
    deps: {
      interopDefault: true,
    },
    environment: 'jsdom',
  },
  esbuild: {
    target: 'node18',
  },
  publicDir: false,
  plugins: [
    swc.vite({
      module: { type: 'es6' },
      jsc: {
        transform: {
          react: {
            runtime: 'automatic',
            importSource: 'react',
          },
        },
      },
    }),
    tsconfigPaths(),
  ],
})
