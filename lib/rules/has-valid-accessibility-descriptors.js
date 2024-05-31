"use strict";

var _jsxAstUtils = require("jsx-ast-utils");

var _isTouchable = _interopRequireDefault(require("../util/isTouchable"));

var _schemas = require("../util/schemas");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Ensures that Touchable* components have appropriate props to communicate with assistive technologies
 * @author JP Driver
 * 
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var errorMessage = 'Missing a11y props. Expected one of: accessibilityRole/role OR BOTH accessibilityLabel/aria-label + accessibilityHint OR BOTH accessibilityActions + onAccessibilityAction';
var schema = (0, _schemas.generateObjSchema)();

var hasSpreadProps = function hasSpreadProps(attributes) {
  return attributes.some(function (attr) {
    return attr.type === 'JSXSpreadAttribute';
  });
};

module.exports = {
  meta: {
    docs: {},
    schema: [schema],
    fixable: 'code'
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        if ((0, _isTouchable.default)(node, context) || (0, _jsxAstUtils.elementType)(node) === 'TextInput') {
          if (!(0, _jsxAstUtils.hasAnyProp)(node.attributes, ['accessibilityRole', 'role', 'accessibilityLabel', 'aria-label', 'accessibilityActions', 'accessible']) && !hasSpreadProps(node.attributes)) {
            context.report({
              node,
              message: errorMessage
            });
          }
        }
      }
    };
  }
};