import { config } from '@kouts/eslint-config'

export default [
  ...config({
    vue: false,
    semi: true
  }),
  {
    // Custom TypeScript rules
    name: 'skeletos/typescript',
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
]