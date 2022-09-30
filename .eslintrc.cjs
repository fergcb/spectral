module.exports = {
  extends: ['react-app'],
  rules: {},
  ignorePatterns: ['build/**'],
  overrides: [
    {
      files: ['**/*.?(c){t,j}s?(x)'],
      plugins: ['tailwindcss'],
      extends: ['standard-with-typescript'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        // TS
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        // Tailwind
        'tailwindcss/classnames-order': 'error',
        'tailwindcss/enforces-negative-arbitrary-values': 'error',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/migration-from-tailwind-2': 'off',
        'tailwindcss/no-arbitrary-value': 'off',
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/no-contradicting-classname': 'error',
      },
    },
  ],
}
