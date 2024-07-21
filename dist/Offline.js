"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useConnection = _interopRequireDefault(require("./useConnection"));
var _excluded = ["children"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Offline = function Offline(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var isOnline = (0, _useConnection["default"])();
  if (isOnline) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", props, children);
};
var _default = exports["default"] = Offline;