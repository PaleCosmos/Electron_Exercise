module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    "eslint:recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-components':'off',
    'no-unused-vars':'off',
    'no-trailing-spaces':'off',
    'key-spacing':'off',
    'key-quote-props':'off',
    'padded-blocks':'off',
  }
}
