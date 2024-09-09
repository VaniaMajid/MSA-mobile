module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'import',
    'jsx-a11y',
    'prettier',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
        devDependencies: [
          '**/*.test.[jt]s',
          '**/*.spec.[jt]s',
          '**/*.test.[jt]sx',
          '**/*.spec.[jt]sx',
          'ReactotronConfig.js',
        ],
      },
    ],
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '$/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          ['builtin', 'external'],
          ['internal'],
          ['parent', 'sibling', 'index'],
          'unknown',
        ],
      },
    ],
    'import/no-cycle': [
      'error',
      {
        maxDepth: '∞',
        ignoreExternal: true,
      },
    ],
    /* additional rules previously used */
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      {props: 'never', children: 'never'},
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/no-string-refs': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react-native/no-unused-styles': 'error',
    'react/no-children-prop': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unused-state': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-access-state-in-setstate': 'error',
    'default-case': 'error',
    eqeqeq: ['warn', 'smart'],
    'guard-for-in': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/tag-lines': ['error', 'never'],
    'prefer-const': 'error',
    'no-unused-vars': 'warn',
    'newline-before-return': 'warn',
    'no-unsafe-optional-chaining': 'off',
    'no-extra-boolean-cast': 'off', // redundant double negation
    'no-useless-escape': 'off', // cleans up regexs,
    'no-duplicate-case': 'off', // spots duplicate case statements
    'no-case-declarations': 'off', // prevents hoisting of variables in case statements
    'no-async-promise-executor': 'off', // good suggestion for a code smell
    'no-empty-pattern': 'off', // unexpected empty object
    'no-prototype-builtins': 'off', // this can be dangerous
    'no-constant-condition': ['error', {checkLoops: false}], // this is fine
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'info', // prefer info to log
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context',
        ],
      },
    ],
    'no-eval': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-var': 'error',
    radix: 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'consistent-default-export-name/default-export-match-filename': 'error',
    'consistent-default-export-name/default-import-match-filename': 'error',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'eol-last': ['error', 'always'],
    'no-else-return': 'error',
    'array-callback-return': 'error',
    'no-implicit-coercion': ['error', {allow: ['!!']}],
    'no-throw-literal': 'error',
    yoda: 'error',
    'no-undef-init': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
