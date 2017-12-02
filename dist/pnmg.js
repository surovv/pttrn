!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.library=e():n.library=e()}(this,function(){return function(n){function e(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\n/// Types\nvar someType = function Some() {\n  _classCallCheck(this, Some);\n};\nvar Some = exports.Some = new someType();\n// isSome :: a -> Bool\nvar isSome = function isSome(x) {\n  return x !== undefined;\n};\n\nvar condType = function Cond() {\n  _classCallCheck(this, Cond);\n};\n// Cond :: Function -> a -> Bool\nvar Cond = exports.Cond = function Cond(f) {\n  return Object.assign(function (arg) {\n    return f(arg);\n  }, { constructor: condType });\n};\n\n/// end Types\n\n\n// matchArray :: (Array, Array) -> Bool\nvar matchArray = function matchArray(patterns, vals) {\n  return patterns.length === 0 && vals.length === 0 || patterns.length <= vals.length && patterns.length !== 0 && patterns.every(function (pattern, index) {\n    return isMatched(pattern, vals[index]);\n  });\n};\n\n// getObjectsKeys :: [Object] -> [String]\nvar getObjectsKeys = function getObjectsKeys(objects) {\n  return objects.map(Object.keys);\n};\n\n// matchObject :: (Object, Object) -> Bool\nvar matchObject = function matchObject(pattern, val) {\n  var _getObjectsKeys = getObjectsKeys([pattern, val]),\n      _getObjectsKeys2 = _slicedToArray(_getObjectsKeys, 2),\n      patternKeys = _getObjectsKeys2[0],\n      valKeys = _getObjectsKeys2[1];\n\n  return patternKeys.length === 0 && valKeys.length === 0 || patternKeys.length <= valKeys.length && patternKeys.length !== 0 && patternKeys.every(function (k) {\n    return valKeys.includes(k) && isMatched(pattern[k], val[k]);\n  });\n};\n\n// isMatched :: (a, b) -> Bool\nvar isMatched = function isMatched(pattern, val) {\n  return pattern === val || pattern === val.constructor || pattern.constructor === someType && isSome(val) || pattern.constructor === condType && pattern(val) || pattern.constructor === Array && matchArray(pattern, val) || pattern.constructor === Object && matchObject(pattern, val);\n};\n;\n\n// match :: (a, [[b, a -> c]]) -> Object\nvar match = exports.match = function match(val) {\n  var patterns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  return {\n    when: function when(pattern, pval) {\n      return match(val, [].concat(_toConsumableArray(patterns), [[pattern, pval]]));\n    },\n\n    default: function _default(defFn) {\n      var finded = patterns.find(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n            pattern = _ref2[0],\n            result = _ref2[1];\n\n        return isMatched(pattern, val);\n      });\n      return (finded ? finded[1] : defFn)(val);\n    }\n  };\n};\n\nexports.default = match;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/pnmg.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/pnmg.js?')}])});