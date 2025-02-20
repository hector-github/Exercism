import babelParser from '@babel/eslint-parser';
import fs from 'fs';

import eslint from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import prettierConfig from 'eslint-config-prettier';

import globals from 'globals';

const pkg = JSON.parse(
  fs.readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
);

/** @type {import('eslint').ESLint.Plugin} */
export const plugin = {
  meta: {
    name: pkg.name + '/maintainers',
    version: pkg.version,
  },
};

/** @typedef {import('eslint').Linter.Config} Config */
/** @type {[Config, Config, Config]} */
export default [
  {
    ...eslint.configs.recommended,
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.node,
      },
    },

    rules: {
      ...eslint.configs.recommended.rules,

      // eslint rules
      'array-callback-return': ['warn', { checkForEach: false }],
      'default-param-last': 'error',
      eqeqeq: ['warn', 'smart'],
      'linebreak-style': 'off',
      'no-eval': ['error', { allowIndirect: true }],
      'no-extend-native': 'warn',
      'no-implicit-coercion': 'warn',
      'no-promise-executor-return': 'warn',
      'no-shadow': 'warn',
      'no-unreachable-loop': 'warn',
      'no-unsafe-optional-chaining': 'error',
      'require-atomic-updates': 'warn',
    },
  },

  {
    // enable jest rules on test files
    files: ['test/**', '**/*.spec.js*', '**/*.test.js*'],
    ...jestPlugin.configs['flat/recommended'],
    rules: {
      ...jestPlugin.configs['flat/recommended'].rules,
      'jest/no-disabled-tests': 'off',
      'jest/no-test-prefixes': 'off',
    },
    languageOptions: {
      globals: {
        // Don't make jest globals available! These should not be available
        // but imported from @jest/globals.
        //
        // ...globals.jest,
      },
    },
  },

  // https://github.com/import-js/eslint-plugin-import/pull/3018
  // missing: import/* plugins

  prettierConfig,
];
