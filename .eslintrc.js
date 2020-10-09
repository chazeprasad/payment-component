module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
        'prettier',
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],

    env: {
        es6: true,
        node: true,
    },
    plugins: ['prettier'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
   
    rules: {
        'prettier/prettier': 'error',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        camelcase: 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next', "vars": "all", "args": "none" }],
        'max-classes-per-file': 'off',
        'array-callback-return': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-plusplus': 'off',
        'no-underscore-dangle': 'off',

    }
  };