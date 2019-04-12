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
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
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
