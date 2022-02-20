module.exports = {
  root: true,
  env: {
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    '@vue/typescript/recommended'
  ],
  ignorePatterns: ['**/*.d.ts', '**/*.js', '**/dist', '**/*.html']
};
