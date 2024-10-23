// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    ignores: ['dist/*', 'eslint.config.mjs']
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    }
  },
  {
    rules: {
      'no-console': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn'
    }
  }
)
