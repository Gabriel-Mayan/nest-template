module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    "prettier",
    '@typescript-eslint/eslint-plugin', 
  ],
  ignorePatterns: [
    '.eslintrc.js'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
