module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'standard-with-typescript'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: ['./tsconfig.json'],
  },
  root: true,
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      },
    ],

    // React 17+ uses automatic runtime, so no 'React' import necessary
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',

    // No prop-types with typescript
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
}
