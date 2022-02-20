module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    ignorePatterns: [
      '**/*.d.ts',
      '**/*.js',
      '**/dist'
    ],
  },
};
