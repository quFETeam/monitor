module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021.
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    '@typescript-eslint/no-var-requires': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-bitwise': 0,
    'import/no-unresolved': 0,
    'import/extensions': ['never' | 'always' | 'ignorePackages'],
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
    '@typescript-eslint/no-explicit-any': ['off'],
    'max-len': ['error', { code: 300 }],
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
  },
};
