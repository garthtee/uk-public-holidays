self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_garth_Documents_Code_uk_public_holidays_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_garth_Documents_Code_uk_public_holidays_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Meta */ "./src/components/Meta.js");
/* harmony import */ var _components_HolidayList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HolidayList */ "./src/components/HolidayList.js");
/* harmony import */ var _components_Options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Options */ "./src/components/Options.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\garth\\Documents\\Code\\uk-public-holidays\\src\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var BASE_URL = 'https://www.gov.uk/bank-holidays.json';

var Home = function Home() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null),
      _React$useState2 = (0,C_Users_garth_Documents_Code_uk_public_holidays_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      holidays = _React$useState2[0],
      setHolidays = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null),
      _React$useState4 = (0,C_Users_garth_Documents_Code_uk_public_holidays_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      locations = _React$useState4[0],
      setLocations = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null),
      _React$useState6 = (0,C_Users_garth_Documents_Code_uk_public_holidays_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null),
      _React$useState8 = (0,C_Users_garth_Documents_Code_uk_public_holidays_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState7, 2),
      years = _React$useState8[0],
      setYears = _React$useState8[1];

  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
    fetch(BASE_URL).then(function (response) {
      return response.json();
    }).then(function (data) {
      setHolidays(addDatePast(data));
      var keys = Object.keys(data);
      setLocations([{
        label: "Select a location",
        value: '-1'
      }].concat((0,C_Users_garth_Documents_Code_uk_public_holidays_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(keys.map(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__.formatLocation))));
    })["catch"](function () {
      react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error('Error fetching holidays.');
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
    if (selected) {
      var _holidays$selected$di, _holidays$selected$di2;

      var allYears = (_holidays$selected$di = holidays[selected.division]) === null || _holidays$selected$di === void 0 ? void 0 : (_holidays$selected$di2 = _holidays$selected$di.events) === null || _holidays$selected$di2 === void 0 ? void 0 : _holidays$selected$di2.map(function (e) {
        return e.date.substring(0, 4);
      });
      var yearsDistinct = allYears.reduce(function (acc, curr) {
        if (!(acc !== null && acc !== void 0 && acc.includes(curr))) {
          return [].concat((0,C_Users_garth_Documents_Code_uk_public_holidays_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(acc), [curr]);
        }

        return acc;
      }, []);
      setYears(!years ? ["Select a year"].concat((0,C_Users_garth_Documents_Code_uk_public_holidays_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(yearsDistinct)) : yearsDistinct);
    }
  }, [selected === null || selected === void 0 ? void 0 : selected.division]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Container, {
      fluid: true,
      className: "mt-3",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
        className: "justify-content-md-center text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "UK Public Holidays \uD83C\uDF34"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), !holidays || !locations ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
        className: "justify-content-md-center text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Spinner, {
            animation: "border",
            role: "status",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "sr-only",
              children: "Loading..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Options__WEBPACK_IMPORTED_MODULE_6__.default, {
        setSelected: setSelected,
        setLocations: setLocations,
        selected: selected,
        holidays: holidays,
        locations: locations,
        years: years
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
        className: "justify-content-md-center mb-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
          md: 12,
          lg: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HolidayList__WEBPACK_IMPORTED_MODULE_5__.default, {
            holidays: selected === null || selected === void 0 ? void 0 : selected.events,
            showCount: !!selected && !!selected.year
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, _this);
};

_s(Home, "pBY6fVCtz9kS7Ugcwoq6nIvpEec=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiSG9tZSIsIlJlYWN0IiwiaG9saWRheXMiLCJzZXRIb2xpZGF5cyIsImxvY2F0aW9ucyIsInNldExvY2F0aW9ucyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ5ZWFycyIsInNldFllYXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImFkZERhdGVQYXN0Iiwia2V5cyIsIk9iamVjdCIsImxhYmVsIiwidmFsdWUiLCJtYXAiLCJmb3JtYXRMb2NhdGlvbiIsInRvYXN0IiwiYWxsWWVhcnMiLCJkaXZpc2lvbiIsImV2ZW50cyIsImUiLCJkYXRlIiwic3Vic3RyaW5nIiwieWVhcnNEaXN0aW5jdCIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJpbmNsdWRlcyIsInllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyx1Q0FBakI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLHdCQUNlQyxxREFBQSxDQUFlLElBQWYsQ0FEZjtBQUFBO0FBQUEsTUFDVkMsUUFEVTtBQUFBLE1BQ0FDLFdBREE7O0FBQUEseUJBRWlCRixxREFBQSxDQUFlLElBQWYsQ0FGakI7QUFBQTtBQUFBLE1BRVZHLFNBRlU7QUFBQSxNQUVDQyxZQUZEOztBQUFBLHlCQUdlSixxREFBQSxDQUFlLElBQWYsQ0FIZjtBQUFBO0FBQUEsTUFHVkssUUFIVTtBQUFBLE1BR0FDLFdBSEE7O0FBQUEseUJBSVNOLHFEQUFBLENBQWUsSUFBZixDQUpUO0FBQUE7QUFBQSxNQUlWTyxLQUpVO0FBQUEsTUFJSEMsUUFKRzs7QUFNakJSLHdEQUFBLENBQWdCLFlBQU07QUFDcEJTLFNBQUssQ0FBQ1gs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QXdCRSw4REFBQyxnREFBRDtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQSwrQkFDRSw4REFBQyxnREFBRDtBQUFLLFlBQUUsRUFBRSxFQUFUO0FBQWEsWUFBRSxFQUFFLENBQWpCO0FBQUEsaUNBQ0UsOERBQUMsNERBQUQ7QUFDRSxvQkFBUSxFQUFFRixRQUFGLGFBQUVBLFFBQUYsdUJBQUVBLFFBQVEsQ0FBRW1CLE1BRHRCO0FBRUUscUJBQVMsRUFBRSxDQUFDLENBQUNuQixRQUFGLElBQWMsQ0FBQyxDQUFDQSxRQUFRLENBQUM0QjtBQUZ0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0FqRkQ7O0dBQU1sQyxJOztLQUFBQSxJO0FBbUZOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI4OTViM2EzOWU0M2E2YjUwZDhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3RvYXN0fSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBSb3csIENvbCwgU3Bpbm5lcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhJztcclxuaW1wb3J0IEhvbGlkYXlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSG9saWRheUxpc3QnO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL09wdGlvbnMnO1xyXG5pbXBvcnQge2Zvcm1hdExvY2F0aW9ufSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vd3d3Lmdvdi51ay9iYW5rLWhvbGlkYXlzLmpzb24nO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbaG9saWRheXMsIHNldEhvbGlkYXlzXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2NhdGlvbnMsIHNldExvY2F0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt5ZWFycywgc2V0WWVhcnNdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChCQVNFX1VSTClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBzZXRIb2xpZGF5cyhhZGREYXRlUGFzdChkYXRhKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICAgICAgICBzZXRMb2NhdGlvbnMoW3tcclxuICAgICAgICAgICAgbGFiZWw6IFwiU2VsZWN0IGEgbG9jYXRpb25cIixcclxuICAgICAgICAgICAgdmFsdWU6ICctMScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLi4ua2V5cy5tYXAoZm9ybWF0TG9jYXRpb24pLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBmZXRjaGluZyBob2xpZGF5cy4nKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgIGNvbnN0IGFsbFllYXJzID0gaG9saWRheXNbc2VsZWN0ZWQuZGl2aXNpb25dPy5ldmVudHM/Lm1hcCgoZSkgPT4gZS5kYXRlLnN1YnN0cmluZygwLCA0KSk7XHJcbiAgICAgIGNvbnN0IHllYXJzRGlzdGluY3QgPSBhbGxZZWFycy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICAgIGlmICghYWNjPy5pbmNsdWRlcyhjdXJyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFsuLi5hY2MsIGN1cnJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgc2V0WWVhcnMoIXllYXJzID8gW1xyXG4gICAgICAgIFwiU2VsZWN0IGEgeWVhclwiLFxyXG4gICAgICAgIC4uLnllYXJzRGlzdGluY3QsXHJcbiAgICAgIF0gOiB5ZWFyc0Rpc3RpbmN0KTtcclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWQ/LmRpdmlzaW9uXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8TWV0YSAvPlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgIDxoMz5VSyBQdWJsaWMgSG9saWRheXMg8J+MtDwvaDM+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICB7IWhvbGlkYXlzIHx8ICFsb2NhdGlvbnMgPyAoXHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1NwaW5uZXI+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxPcHRpb25zXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuICAgICAgICAgICAgc2V0TG9jYXRpb25zPXtzZXRMb2NhdGlvbnN9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgaG9saWRheXM9e2hvbGlkYXlzfVxyXG4gICAgICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgeWVhcnM9e3llYXJzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICA8SG9saWRheUxpc3RcclxuICAgICAgICAgICAgICBob2xpZGF5cz17c2VsZWN0ZWQ/LmV2ZW50c31cclxuICAgICAgICAgICAgICBzaG93Q291bnQ9eyEhc2VsZWN0ZWQgJiYgISFzZWxlY3RlZC55ZWFyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=