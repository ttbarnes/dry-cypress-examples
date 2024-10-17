import pluginJs from '@eslint/js';
import pluginCypress from 'eslint-plugin-cypress/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    plugins: {
      cypress: pluginCypress
    },
    rules: {
      indent: ['error', 2],
      'cypress/unsafe-to-chain-command': 'error',
      'prettier/prettier': [
        'error',
        { singleQuote: true, trailingComma: 'none' }
      ]
    }
  },
  pluginJs.configs.recommended,
  pluginCypress.configs.globals,
  eslintPluginPrettierRecommended
];
