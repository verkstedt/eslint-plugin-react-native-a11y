"use strict";

var _jsxAstUtils = require("jsx-ast-utils");

var _schemas = require("../util/schemas");

/**
 * @fileoverview An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not apparent from the accessibility label.
 * @author JP Driver
 * 
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var schema = (0, _schemas.generateObjSchema)();
module.exports = {
  meta: {
    docs: {},
    schema: [schema]
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        if (!(0, _jsxAstUtils.hasProp)('accessibilityHint')) {
          if ((0, _jsxAstUtils.hasProp)(node.attributes, 'accessibilityLabel')) {
            context.report({
              node,
              message: 'has accessibilityLabel prop but no accessibilityHint'
            });
          } else if ((0, _jsxAstUtils.hasProp)(node.attributes, 'aria-label')) {
            context.report({
              node,
              message: 'has aria-label prop but no accessibilityHint'
            });
          }
        }
      }
    };
  }
};