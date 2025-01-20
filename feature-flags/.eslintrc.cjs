module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:json/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    '@antfu',
  ],
  plugins: ['prettier', 'testing-library'],
  rules: {
    "@typescript-eslint/comma-dangle": 0,
    "space-before-function-paren": ["error", "always"],
    '@typescript-eslint/consistent-type-imports': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-vars': 'off',
    curly: ['error', 'multi-line'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-console': 0,
    'no-debugger': 0,
    'import/no-named-as-default': 0,
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'react/prop-types': 'off',
    'import/no-named-as-default-member': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
}
