module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:nuxt/recommended',
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    '$nuxt': true,
  },
  // add your custom rules here
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
