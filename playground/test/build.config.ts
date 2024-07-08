import { defineBuildConfig } from 'unbuild'
import pkg from './package.json'
import { globSync } from 'fast-glob'
const input = globSync('setup/**/*.ts', {
  cwd: __dirname,
  onlyFiles: true,
  absolute: true,
})
console.log(input)

export default defineBuildConfig({
  entries: ['src/index', ...input],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  externals: [...Object.keys(pkg.dependencies)],
})
