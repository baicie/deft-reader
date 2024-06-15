import path from 'node:path'
import { fileURLToPath } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import MagicString from 'magic-string'
import type { Plugin } from 'rollup'
import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

/**
 * Inject CJS Context for each deps chunk
 */
function cjsPatchPlugin(): Plugin {
  const cjsPatch = `
  import { fileURLToPath as __cjs_fileURLToPath } from 'node:url';
  import { dirname as __cjs_dirname } from 'node:path';
  import { createRequire as __cjs_createRequire } from 'node:module';
  
  const __filename = __cjs_fileURLToPath(import.meta.url);
  const __dirname = __cjs_dirname(__filename);
  const require = __cjs_createRequire(import.meta.url);
  const __require = require;
  `.trimStart()

  return {
    name: 'cjs-chunk-patch',
    renderChunk(code, chunk) {
      if (!chunk.fileName.includes('chunks/dep-')) return
      const match = code.match(/^(?:import[\s\S]*?;\s*)+/)
      const index = match ? match.index! + match[0].length : 0
      const s = new MagicString(code)
      // inject after the last `import`
      s.appendRight(index, cjsPatch)
      console.log('patched cjs context: ' + chunk.fileName)
      return s.toString()
    },
  }
}

const nodeConfig = defineConfig({
  input: {
    cli: path.resolve(__dirname, 'src/index.ts'),
  },
  external: ['@deft-reader/api'],
  plugins: [
    nodeResolve({ preferBuiltins: true }),
    esbuild({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
    commonjs({
      extensions: ['.js'],
      ignore: ['bufferutil', 'utf-8-validate'],
      sourceMap: false,
    }),
    json(),
    cjsPatchPlugin(),
  ] as Plugin[],
  treeshake: {
    moduleSideEffects: 'no-external',
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
  },
  output: {
    dir: './dist',
    entryFileNames: `[name].js`,
    chunkFileNames: 'chunks/dep-[hash].js',
    exports: 'named',
    format: 'esm',
    externalLiveBindings: false,
    freeze: false,
  },
  onwarn(warning, warn) {
    if (warning.message.includes('Circular dependency')) {
      return
    }
    warn(warning)
  },
})

export default defineConfig([nodeConfig])
