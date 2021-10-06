"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button() {
  return /*#__PURE__*/_react.default.createElement("button", null, "Button");
}

Button.propTypes = {
  variant: _propTypes.default.oneOf(['primary', 'secondary']),
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  variant: 'primary',
  onClick: undefined
};