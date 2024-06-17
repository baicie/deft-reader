import path from 'node:path'
import { defineConfig, defineWorkspace } from 'vitest/config'
import swc from 'unplugin-swc'

const commonConfig = defineConfig({
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
    setupFiles: path.resolve(__dirname, './playground/setup.ts'),
  },
  esbuild: {
    target: 'node18',
  },
  publicDir: false,
  plugins: [
    // @ts-expect-error - swc.vite is not typed
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})

// defineWorkspace 会提供一个很好的类型提示开发体验
export default defineWorkspace([
  {
    root: 'servers/api',
    ...commonConfig,
  },
  {
    root: 'servers/cli',
    ...commonConfig,
  },
])
