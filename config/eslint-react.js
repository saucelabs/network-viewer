const deepMerge = require('deepmerge');

const baseConfig = require('./eslint-baseconfig');

const config = deepMerge(baseConfig, {
  extends: 'airbnb',
  plugins: [
    'react-hooks',
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-no-bind': 'error',
    'react/jsx-child-element-spacing': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-curly-brace-presence': [2, {
      props: 'never',
      children: 'ignore',
    }],
    'react/jsx-curly-spacing': [2, 'never', {
      allowMultiline: false,
      spacing: {
        objectLiterals: 'never',
        children: 'never',
      },
    }],
    'react/jsx-max-props-per-line': [2, {
      when: 'always',
    }],
    'react/jsx-sort-props': 2,
    'react/sort-default-props': [2, {
      ignoreCase: true,
    }],
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'allow',
    }],
    'react/no-typos': 0,
    'react/sort-prop-types': [2, {
      ignoreCase: true,
      sortShapeProp: true,
    }],
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-props-no-spreading': [0, {
      html: 'ignore',
    }],
    'react/no-array-index-key': 0,
  },
});

module.exports = config;
