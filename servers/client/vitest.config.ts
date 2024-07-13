import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import swc from 'unplugin-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    include: ['**/__tests__/**/*.spec.{js,jsx,ts,tsx}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/__tests__/**/*.e2e.spec.{js,jsx,ts,tsx}',
    ],
    testTimeout: 20000,
    isolate: false,
    globals: true,
    setupFiles: '../../playground/test/setup/setup-react.ts',
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
          },
        },
      },
    }),
    react({
      tsDecorators: true,
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
