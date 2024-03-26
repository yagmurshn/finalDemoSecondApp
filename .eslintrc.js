module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/prettier'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'no-console': 1,
    'import/extensions': 0,
    'global-require': 0,
    'eol-last': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
    'no-plusplus': 0,
    'max-len': [
      1,
      {
        code: 9999,
      },
    ],
    'prefer-destructuring': [
      2,
      {
        object: true,
        array: false,
      },
    ],
    'no-irregular-whitespace': 0,
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'vue/multi-word-component-names': 'off',
    'no-prototype-builtins': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 160,
        trailingComma: 'all',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
  plugins: ['import'],
};
