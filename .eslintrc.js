module.exports = {
  // 表示当前目录为根目录
  "root": true,
  // 表示启用 ESLint 检测的环境
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  // ESLint 中基础配置需要继承的配置
  "extends": [
    "eslint:recommended",
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "globals": {
    "cy": "readonly",
    "clipboardData": "readonly",
    "PKG_VERSION": true
  },
  // 解析器
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "rules": {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}