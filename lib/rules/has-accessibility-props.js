"use strict";

var _jsxAstUtils = require("jsx-ast-utils");

var _isTouchable = _interopRequireDefault(require("../util/isTouchable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Enforce that <Touchable\*> components only have either the accessibilityRole prop or both accessibilityTraits and accessibilityComponentType props set
 * @author Alex Saunders
 * 
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
function errorMessage(touchable) {
  return `<${touchable}> must only have either the accessibilityRole prop or both accessibilityTraits and accessibilityComponentType props set`;
}

var deprecatedProps = ['accessibilityTraits', 'accessibilityComponentType'];
module.exports = {
  meta: {
    docs: {},
    schema: [{
      type: 'object',
      additionalProperties: {
        type: 'array',
        items: {
          type: 'string'
        },
        uniqueItems: true
      }
    }]
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        if ((0, _isTouchable.default)(node, context) && (0, _jsxAstUtils.hasAnyProp)(node.attributes, deprecatedProps) && ((0, _jsxAstUtils.hasProp)(node.attributes, 'accessibilityRole') || (0, _jsxAstUtils.hasProp)('role') || !(0, _jsxAstUtils.hasEveryProp)(node.attributes, deprecatedProps)) && (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(node.attributes, 'accessible')) !== false) {
          context.report({
            node,
            message: errorMessage((0, _jsxAstUtils.elementType)(node))
          });
        }
      }
    };
  }
};