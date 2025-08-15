import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['node_modules']
  },
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: { vue },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', prettier],
    rules: {}
  }
]
