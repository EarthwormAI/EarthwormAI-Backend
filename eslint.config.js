const pluginJs = require('@eslint/js')
const eslintConfigPrettier = require('eslint-config-prettier')
const prettierPlugin = require('eslint-plugin-prettier')
const globals = require('globals')
const tseslint = require('typescript-eslint')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    files: ['src/**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      ...eslintConfigPrettier.rules,
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
