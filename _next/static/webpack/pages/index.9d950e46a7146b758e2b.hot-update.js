self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Projects_2021\\portfolio_website-STARTER\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined;




var data = [{
  Image: 'E:\Projects_2021\portfolio_website-STARTER\public\images\Certficate-1.jpg',
  text: "Open Source Projects"
}, {
  Image: 1000,
  text: "Students"
}, {
  Image: 1900,
  text: "Github Followers"
}, {
  Image: 5000,
  text: "Github Stars"
}];

var Acomplishments = function Acomplishments() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      children: "Personal Acheivements"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
      children: data.map(function (card, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
            children: [card.number, "+"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
            children: card.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, _this);
};

_c = Acomplishments;
/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var _c;

$RefreshReg$(_c, "Acomplishments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGF0YSIsIkltYWdlIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwibWFwIiwiY2FyZCIsImluZGV4IiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUtBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsT0FBSyxFQUFFLDJFQUFUO0FBQXNGQyxNQUFJLEVBQUU7QUFBNUYsQ0FEVyxFQUVYO0FBQUVELE9BQUssRUFBRSxJQUFUO0FBQWVDLE1BQUksRUFBRTtBQUFyQixDQUZXLEVBR1g7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBSSxFQUFFO0FBQXJCLENBSFcsRUFJWDtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFJLEVBQUU7QUFBckIsQ0FKVyxDQUFiOztBQU9BLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxzQkFDckIsOERBQUMsNkRBQUQ7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBQSxnQkFDR0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ1IsOERBQUMsc0RBQUQ7QUFBQSxrQ0FDRSw4REFBQyx5REFBRDtBQUFBLHVCQUFTRCxJQUFJLENBQUNFLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQSxzQkFBVUYsSUFBSSxDQUFDSDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxXQUFVSSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURxQjtBQUFBLENBQXZCOztLQUFNSCxjO0FBY04sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWQ5NTBlNDZhNzE0NmI3NThlMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvbkRpdmlkZXIsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5pbXBvcnQgeyBCb3gsIEJveGVzLCBCb3hOdW0sIEJveFRleHQgfSBmcm9tIFwiLi9BY29tcGxpc2htZW50c1N0eWxlc1wiO1xuXG5jb25zdCBkYXRhID0gW1xuICB7IEltYWdlOiAnRTpcXFByb2plY3RzXzIwMjFcXHBvcnRmb2xpb193ZWJzaXRlLVNUQVJURVJcXHB1YmxpY1xcaW1hZ2VzXFxDZXJ0ZmljYXRlLTEuanBnJywgdGV4dDogXCJPcGVuIFNvdXJjZSBQcm9qZWN0c1wiIH0sXG4gIHsgSW1hZ2U6IDEwMDAsIHRleHQ6IFwiU3R1ZGVudHNcIiB9LFxuICB7IEltYWdlOiAxOTAwLCB0ZXh0OiBcIkdpdGh1YiBGb2xsb3dlcnNcIiB9LFxuICB7IEltYWdlOiA1MDAwLCB0ZXh0OiBcIkdpdGh1YiBTdGFyc1wiIH0sXG5dO1xuXG5jb25zdCBBY29tcGxpc2htZW50cyA9ICgpID0+IChcbiAgPFNlY3Rpb24+XG4gICAgPFNlY3Rpb25UaXRsZT5QZXJzb25hbCBBY2hlaXZlbWVudHM8L1NlY3Rpb25UaXRsZT5cbiAgICA8Qm94ZXM+XG4gICAgICB7ZGF0YS5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxCb3gga2V5PXtpbmRleH0+XG4gICAgICAgICAgPEJveE51bT57Y2FyZC5udW1iZXJ9KzwvQm94TnVtPlxuICAgICAgICAgIDxCb3hUZXh0PntjYXJkLnRleHR9PC9Cb3hUZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICkpfVxuICAgIDwvQm94ZXM+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==