// @ts-check
import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginRegExp from 'eslint-plugin-regexp'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

/**
 * @returns {import('typescript-eslint').ConfigWithExtends}
 */
const getReactConfig = (
  /** @type {{ name: string; files:(string | string[])[]; rules: any }} */ options,
) => {
  /**
   * @type {import('typescript-eslint').ConfigWithExtends}
   */
  const reactConfig = {
    name: options.name,
    files: options.files,
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: path.resolve(__dirname, options.name),
      },
    },
    ...fixupConfigRules(compat.extends('plugin:react/recommended')),
    ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended')),
    ...fixupConfigRules(compat.extends('plugin:jsx-a11y/recommended')),
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...options.rules,
    },
  }
  return reactConfig
}

const getNodeConfig = (
  /** @type {{ name: string; files:(string | string[])[]; rules: any }} */ options,
) => {
  /**
   * @type {import('typescript-eslint').ConfigWithExtends}
   */
  const nodeConfig = {
    name: options.name,
    files: options.files,
    ignores: [
      `${options.name}/vitest.config.ts`,
      `${options.name}/vitest.config.e2e.ts`,
    ],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: path.resolve(__dirname, options.name),
      },
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-console': 'error',
    },
  }
  return nodeConfig
}

export default tseslint.config(
  {
    ignores: [
      'node_modules/',
      '**/dist/**',
      '**/static/**',
      '**/.turbo/**',
      '**/temp/**',
      '**/.vitepress/cache/**',
      '**/*.snap',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  /** @type {any} */ (pluginRegExp.configs['flat/recommended']),

  getReactConfig({
    name: 'servers/client',
    files: ['server/client/**/*.{js,ts}'],
    rules: {},
  }),

  getNodeConfig({
    name: 'servers/api',
    files: ['servers/api/**/*.{js,ts}'],
    rules: {},
  }),

  getNodeConfig({
    name: 'servers/cli',
    files: ['servers/cli/**/*.{js,ts}'],
    rules: {},
  }),

  {
    name: 'disables/js',
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    rules: {
      'typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    name: 'disables/dts',
    files: ['**/*.d.ts'],
    rules: {
      'typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    name: 'disables/test',
    files: ['**/__tests__/**/*.?([cm])[jt]s?(x)'],
    rules: {
      'no-console': 'off',
      'typescript-eslint/ban-ts-comment': 'off',
    },
  },
)
