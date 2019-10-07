webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Company.js":
/*!*******************************!*\
  !*** ./components/Company.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\maryb\\soshace\\projects\\reactnext\\components\\Company.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Company(props) {
  return __jsx("div", {
    className: "company",
    style: {
      backgroundColor: props.color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "company ", props.name), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "address ", props.address));
}

/* harmony default export */ __webpack_exports__["default"] = (Company);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\maryb\\soshace\\projects\\reactnext\\components\\User.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function User(props) {
  return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "user ", props.name);
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_User_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/User.js */ "./components/User.js");
/* harmony import */ var _components_Company_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Company.js */ "./components/Company.js");
var _jsxFileName = "C:\\Users\\maryb\\soshace\\projects\\reactnext\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function test() {
  return __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Hello"), __jsx(_components_User_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Mike",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_components_User_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "John",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_components_Company_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Alpha",
    color: "black",
    address: "Green str 11-190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_components_Company_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Beta",
    color: "yellow",
    address: "Brown str bl 5-23",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (test);

/***/ })

})
//# sourceMappingURL=index.js.bd7ae367c0f45f1ab473.hot-update.js.map