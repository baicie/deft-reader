import { defineBuildConfig } from 'unbuild'
import pkg from './package.json'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  externals: [...Object.keys(pkg.dependencies)],
})
