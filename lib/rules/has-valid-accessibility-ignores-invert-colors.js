"use strict";

var _schemas = require("../util/schemas");

var _jsxAstUtils = require("jsx-ast-utils");

var _isNodePropValueBoolean = _interopRequireDefault(require("../util/isNodePropValueBoolean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var propName = 'accessibilityIgnoresInvertColors';
var schema = (0, _schemas.generateObjSchema)();
var defaultInvertableComponents = ['Image'];

var hasValidIgnoresInvertColorsProp = function hasValidIgnoresInvertColorsProp(_ref) {
  var attributes = _ref.attributes;
  return (0, _jsxAstUtils.hasProp)(attributes, propName) && (0, _isNodePropValueBoolean.default)((0, _jsxAstUtils.getProp)(attributes, propName));
};

var checkParent = function checkParent(_ref2) {
  var openingElement = _ref2.openingElement,
      parent = _ref2.parent;

  if (hasValidIgnoresInvertColorsProp(openingElement)) {
    return false;
  } else if (parent.openingElement) {
    return checkParent(parent);
  }

  return true;
};

module.exports = {
  meta: {
    docs: {},
    schema: [schema]
  },
  create: function create(_ref3) {
    var options = _ref3.options,
        report = _ref3.report;
    return {
      JSXElement: function (_JSXElement) {
        function JSXElement(_x) {
          return _JSXElement.apply(this, arguments);
        }

        JSXElement.toString = function () {
          return _JSXElement.toString();
        };

        return JSXElement;
      }(function (node) {
        // $FlowFixMe
        var children = node.children,
            openingElement = node.openingElement,
            parent = node.parent;

        if ((0, _jsxAstUtils.hasProp)(openingElement.attributes, propName) && !(0, _isNodePropValueBoolean.default)((0, _jsxAstUtils.getProp)(openingElement.attributes, propName))) {
          report({
            node,
            message: 'accessibilityIgnoresInvertColors prop is not a boolean value'
          });
        } else {
          var elementsToCheck = defaultInvertableComponents;

          if (options.length > 0) {
            var invertableComponents = options[0].invertableComponents;

            if (invertableComponents) {
              elementsToCheck.push.apply(elementsToCheck, _toConsumableArray(invertableComponents));
            }
          }

          var type = (0, _jsxAstUtils.elementType)(openingElement);

          if (elementsToCheck.some(function (name) {
            return name instanceof RegExp ? type.match(name) : type === name;
          }) && !hasValidIgnoresInvertColorsProp(openingElement) && children.length === 0) {
            var shouldReport = true;

            if (parent.openingElement) {
              shouldReport = checkParent(parent);
            }

            if (shouldReport) {
              report({
                node,
                message: 'Found an element which will be inverted. Add the accessibilityIgnoresInvertColors prop'
              });
            }
          }
        }
      })
    };
  }
};