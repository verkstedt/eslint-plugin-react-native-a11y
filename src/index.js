/* eslint-disable global-require */

module.exports = {
  rules: {
    'accessibility-label': require('./rules/accessibility-label'),
    'has-accessibility-props': require('./rules/has-accessibility-props'),
    'has-valid-accessibility-component-type': require('./rules/has-valid-accessibility-component-type'),
    'has-valid-accessibility-traits': require('./rules/has-valid-accessibility-traits'),
    'no-nested-touchables': require('./rules/no-nested-touchables'),
  },
  configs: {
    recommended: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'react-native-a11y/accessibility-label': 'error',
        'react-native-a11y/has-accessibility-props': 'error',
        'react-native-a11y/has-valid-accessibility-component-type': 'error',
        'react-native-a11y/has-valid-accessibility-traits': 'error',
        'react-native-a11y/no-nested-touchables': 'error',
      },
    },
    strict: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'react-native-a11y/has-accessibility-props': 'error',
        'react-native-a11y/accessible-touchable': 'error',
        'react-native-a11y/accessibility-label': 'error',
      },
    },
  },
};
