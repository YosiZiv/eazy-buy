webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/containers/LandingPage.jsx":
/*!***********************************************!*\
  !*** ./components/containers/LandingPage.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "C:\\Users\\Marchi\\projects\\hackathon\\eazy-buy\\clinet\\components\\containers\\LandingPage.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      color: 'white',
      minHeight: '80vh'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    banner: {
      display: 'flex',
      background: "url(\"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\") no-repeat center center fixed",
      backgroundSize: 'cover',
      minHeight: '70vh',
      alignItems: 'center',
      textAlign: 'center'
    },
    container: {},
    bannerContent: {}
  };
});
function LandingPage() {
  _s();

  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.banner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.bannerContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "ezBuy"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, "ezBuy"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, quaerat. Architecto animi illum sapiente blanditiis in. Tempore, ad ut dignissimos mollitia dolorem et, repellat soluta dolores possimus molestias neque laudantium?"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, "Discover More"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, "Join now")))));
}

_s(LandingPage, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = LandingPage;

var _c;

$RefreshReg$(_c, "LandingPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvTGFuZGluZ1BhZ2UuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImNvbG9yIiwibWluSGVpZ2h0IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiYmFubmVyIiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJjb250YWluZXIiLCJiYW5uZXJDb250ZW50IiwiTGFuZGluZ1BhZ2UiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRSxVQUFFQyxLQUFGO0FBQUEsU0FBZTtBQUN6Q0MsUUFBSSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxDQURSO0FBRUZDLFdBQUssRUFBRSxPQUZMO0FBR0ZDLGVBQVMsRUFBRTtBQUhULEtBRG1DO0FBTXpDQyxjQUFVLEVBQUU7QUFDUkMsaUJBQVcsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWUsQ0FBZjtBQURMLEtBTjZCO0FBU3pDQyxTQUFLLEVBQUU7QUFDSE4sY0FBUSxFQUFFO0FBRFAsS0FUa0M7QUFZekNPLFVBQU0sRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBVSx3SkFGTjtBQUdKQyxvQkFBYyxFQUFFLE9BSFo7QUFJSlIsZUFBUyxFQUFFLE1BSlA7QUFLSlMsZ0JBQVUsRUFBRSxRQUxSO0FBTUpDLGVBQVMsRUFBRTtBQU5QLEtBWmlDO0FBb0J6Q0MsYUFBUyxFQUFFLEVBcEI4QjtBQXVCekNDLGlCQUFhLEVBQUU7QUF2QjBCLEdBQWY7QUFBQSxDQUFGLENBQTVCO0FBNEJlLFNBQVNDLFdBQVQsR0FDZjtBQUFBOztBQUNJLE1BQU1DLE9BQU8sR0FBR3BCLFNBQVMsRUFBekI7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFFb0IsT0FBTyxDQUFDakIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFFaUIsT0FBTyxDQUFDVCxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVTLE9BQU8sQ0FBQ0gsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRyxPQUFPLENBQUNGLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRPQUhKLEVBSUk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLEVBS0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLENBREosQ0FESixDQUZKLENBREo7QUFnQkg7O0dBcEJ1QkMsVztVQUVKbkIsUzs7O0tBRkltQixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42Nzc2MzVmNjhmYjQyN2I2ZDdkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyggKCB0aGVtZSApID0+ICgge1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzgwdmgnLFxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZyggMiApLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgYmFubmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNjg1MzMvcGV4ZWxzLXBob3RvLTI2ODUzMy5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkYCxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICc3MHZoJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG5cclxuICAgIH0sXHJcbiAgICBiYW5uZXJDb250ZW50OiB7XHJcblxyXG4gICAgfVxyXG59ICkgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKClcclxue1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIHsvKiBoZXJvIHNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lckNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5lekJ1eTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmV6QnV5PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVuaW0sIHF1YWVyYXQuIEFyY2hpdGVjdG8gYW5pbWkgaWxsdW0gc2FwaWVudGUgYmxhbmRpdGlpcyBpbi4gVGVtcG9yZSwgYWQgdXQgZGlnbmlzc2ltb3MgbW9sbGl0aWEgZG9sb3JlbSBldCwgcmVwZWxsYXQgc29sdXRhIGRvbG9yZXMgcG9zc2ltdXMgbW9sZXN0aWFzIG5lcXVlIGxhdWRhbnRpdW0/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRpc2NvdmVyIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Sm9pbiBub3c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==