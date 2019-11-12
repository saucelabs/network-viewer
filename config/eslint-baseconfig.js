module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    document: true,
    window: true,
    localStorage: true,
    browser: true,
    analytics: true,
    fixture: true,
    test: true,
  },
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 0,
    'function-paren-newline': 0,
    'id-length': ['error', {
      min: 2,
      exceptions: ['x', 'y', 'z', 'i', 'j'],
    }],
    indent: [2, 2, {
      SwitchCase: 1,
    }],
    'max-len': [2, {
      code: 100,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'no-debugger': 'warn',
    'object-curly-newline': [2, {
      ObjectExpression: {
        multiline: true,
        consistent: true,
      },
      ObjectPattern: {
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        multiline: true,
        consistent: true,
      },
    }],
    'object-curly-spacing': [2, 'always', {
      arraysInObjects: true,
      objectsInObjects: true,
    }],
    'operator-linebreak': ['error', 'after', {
      overrides: { '=': 'none' },
    }],
    'prefer-destructuring': ['error', {
      array: false,
      object: true,
    }],
    'space-in-parens': [2, 'never'],
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': [2, { json: 'always' }],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 0,
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: [
          './src/tests/**/*',
          './src/setupTests.js',
          './config/*.js',
        ],
      },
    ],
    'import/no-named-as-default': 0,
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 0,
    'import/no-webpack-loader-syntax': 'error',
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
    }],
    'import/prefer-default-export': 0,
  },
};
