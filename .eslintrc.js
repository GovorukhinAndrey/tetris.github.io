module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
  },
  // extends: ['prettier'],
  extends: [
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
    babelOptions: {
      configFile: 'babel.config.js',
    },
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
};
