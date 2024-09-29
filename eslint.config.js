import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['src/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-exports": "error"
    },
  },
);
