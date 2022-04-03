import {Linter} from 'eslint'

const bannedTypes = {
  String: {
    message: 'Use string instead',
    fixWith: 'string',
  },
  Boolean: {
    message: 'Use boolean instead',
    fixWith: 'boolean',
  },
  Number: {
    message: 'Use number instead',
    fixWith: 'number',
  },
  Symbol: {
    message: 'Use symbol instead',
    fixWith: 'symbol',
  },

  Function: {
    message: [
      'The `Function` type accepts any function-like value.',
      'It provides no type safety when calling the function, which can be a common source of bugs.',
      'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
      'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
    ].join('\n'),
  },

  // object typing
  Object: {
    message: [
      'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
      '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
      '- If you want a type meaning "any value", you probably want `unknown` instead.',
    ].join('\n'),
  },
  // '{}': {
  //   message: [
  //     '`{}` actually means "any non-nullish value".',
  //     '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
  //     '- If you want a type meaning "any value", you probably want `unknown` instead.',
  //   ].join('\n'),
  // },
  // object: {
  //   message: [
  //     'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
  //     'Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.',
  //   ].join('\n'),
  // },
}

const eslintConfig: Linter.BaseConfig = {
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:node/recommended',
    'plugin:unicorn/recommended',

    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/@typescript-eslint'),
  ],
  overrides: [
    {
      files: '*.ts',
      parser: require.resolve('@typescript-eslint/parser'),
    },
  ],
  rules: {
    '@typescript-eslint/ban-types': ['error', {types: bannedTypes, extendDefaults: false}],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: false, argsIgnorePattern: '^_'},
    ],
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-use-before-define': ['error', {functions: false, classes: false}],
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': ['error', {checkCompoundAssignments: true}],
    '@typescript-eslint/strict-boolean-expressions': ['error', {allowNullableBoolean: true, allowNullableObject: true}],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unbound-method': ['error', {ignoreStatic: true}],
    '@typescript-eslint/unified-signatures': 'error',

    'no-process-exit': 'off',

    'node/no-unsupported-features/es-builtins': ['error', {version: '>=12.0.0'}],
    'node/no-unsupported-features/es-syntax': ['error', {version: '>=12.0.0', ignores: ['modules']}],
    'node/no-unsupported-features/node-builtins': ['error', {version: '>=12.0.0'}],
    'node/no-extraneous-import': 'off',
    'node/no-path-concat': 'error',
    'node/shebang': 'off',

    'unicorn/filename-case': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
  },
}

export = eslintConfig
