module.exports = {
  // 表示当前目录为根目录
  root: true,
  // 表示启用 ESLint 检测的环境
  env: {
    browser: true,
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true,
  },
  // ESLint 中基础配置需要继承的配置
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint'],
  globals: {
    cy: 'readonly',
    clipboardData: 'readonly',
    PKG_VERSION: true,
  },
  // 解析器
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // code style config
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    'no-use-before-define': 'off',
    'func-names': 'off',
    'guard-for-in': 'off',
    'consistent-return': 'off',
    'no-restricted-globals': 'off',
    'default-param-last': 'off',
    'default-case': 'off',
    'prefer-spread': 'off',
    // import config
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-relative-packages': 'off',
    // typescript config
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/prefer-for-of': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
  },
};
