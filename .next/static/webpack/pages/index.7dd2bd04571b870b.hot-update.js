"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/js-form.js":
/*!**************************!*\
  !*** ./pages/js-form.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PageWithJSbasedForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction PageWithJSbasedForm() {\n    // Handles the submit event on form submit.\n    const handleSubmit = async (event)=>{\n        // Stop the form from submitting and refreshing the page.\n        event.preventDefault();\n        // Get data from the form.\n        const data = {\n            username: event.target.first.value,\n            password: event.target.last.value,\n            rememberMe: true\n        };\n        // Send the data to the server in JSON format.\n        const JSONdata = JSON.stringify(data);\n        // API endpoint where we send form data.\n        const endpoint = \"https://dev-sg.azurewebsites.net/api/AccountLoginApi/Login\";\n        try {\n            const response = await fetch(\"https://dev-sg.azurewebsites.net/api/AccountLoginApi/Login\");\n            const data = await response.json();\n            return data;\n        } catch (error) {\n            console.error(error);\n        }\n        // Form the request for sending data to the server.\n        const options = {\n            // The method is POST because we are sending data.\n            method: \"OPTIONS\",\n            // Tell the server we're sending JSON.\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            // Body of the request is the JSON data we created above.\n            body: JSONdata\n        };\n        // Send the form data to our forms API on Vercel and get a response.\n        const response = await fetch(endpoint, options);\n        // Get the response data from server as JSON.\n        // If server returns the name submitted, that means the form works.\n        const result = await response.json();\n        alert(\"Is this your full name: \".concat(result.data));\n    };\n    return(// We pass the event to the handleSubmit() function on submit.\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        style: {\n            \"display\": \"table-caption\"\n        },\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"First Name\"\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"first\",\n                name: \"first\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"last\",\n                children: \"Last Name\"\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"last\",\n                name: \"last\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this));\n}\n_c = PageWithJSbasedForm;\nvar _c;\n$RefreshReg$(_c, \"PageWithJSbasedForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9qcy1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxzQkFBc0I7SUFDNUMsMkNBQTJDO0lBQzNDLE1BQU1DLGVBQWUsT0FBT0MsUUFBVTtRQUNwQyx5REFBeUQ7UUFDekRBLE1BQU1DLGNBQWM7UUFFcEIsMEJBQTBCO1FBQzFCLE1BQU1DLE9BQU87WUFDWEMsVUFBVUgsTUFBTUksTUFBTSxDQUFDQyxLQUFLLENBQUNDLEtBQUs7WUFBRUMsVUFBVVAsTUFBTUksTUFBTSxDQUFDSSxJQUFJLENBQUNGLEtBQUs7WUFBRUcsWUFBVyxJQUFJO1FBQ3hGO1FBRUEsOENBQThDO1FBQzlDLE1BQU1DLFdBQVdDLEtBQUtDLFNBQVMsQ0FBQ1Y7UUFFaEMsd0NBQXdDO1FBQ3hDLE1BQU1XLFdBQVc7UUFDakIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNYixPQUFPLE1BQU1ZLFNBQVNFLElBQUk7WUFDaEMsT0FBT2Q7UUFDVCxFQUFFLE9BQU9lLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtRQUNBLG1EQUFtRDtRQUVuRCxNQUFNRSxVQUFVO1lBQ2Qsa0RBQWtEO1lBQ2xEQyxRQUFRO1lBQ1Isc0NBQXNDO1lBQ3RDQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBLHlEQUF5RDtZQUN6REMsTUFBTVo7UUFDUjtRQUVBLG9FQUFvRTtRQUNwRSxNQUFNSSxXQUFXLE1BQU1DLE1BQU1GLFVBQVVNO1FBQ3ZDLDZDQUE2QztRQUM3QyxtRUFBbUU7UUFDbkUsTUFBTUksU0FBUyxNQUFNVCxTQUFTRSxJQUFJO1FBQ2xDUSxNQUFNLDJCQUF1QyxPQUFaRCxPQUFPckIsSUFBSTtJQUM5QztJQUNBLE9BQ0UsOERBQThEO2tCQUM5RCw4REFBQ3VCO1FBQUtDLE9BQU87WUFBQyxXQUFXO1FBQWU7UUFBR0MsVUFBVTVCOzswQkFDbkQsOERBQUM2QjtnQkFBTUMsU0FBUTswQkFBUTs7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLElBQUc7Z0JBQVFDLE1BQUs7Z0JBQVFDLFFBQVE7Ozs7OzswQkFFbkQsOERBQUNOO2dCQUFNQyxTQUFROzBCQUFPOzs7Ozs7MEJBQ3RCLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBT0MsSUFBRztnQkFBT0MsTUFBSztnQkFBT0MsUUFBUTs7Ozs7OzBCQUVqRCw4REFBQ0M7Z0JBQU9KLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc1QixDQUFDO0tBdkR1QmpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2pzLWZvcm0uanM/ZDQ3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlV2l0aEpTYmFzZWRGb3JtKCkge1xuICAvLyBIYW5kbGVzIHRoZSBzdWJtaXQgZXZlbnQgb24gZm9ybSBzdWJtaXQuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIC8vIFN0b3AgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGFuZCByZWZyZXNoaW5nIHRoZSBwYWdlLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIEdldCBkYXRhIGZyb20gdGhlIGZvcm0uXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHVzZXJuYW1lOiBldmVudC50YXJnZXQuZmlyc3QudmFsdWUsIHBhc3N3b3JkOiBldmVudC50YXJnZXQubGFzdC52YWx1ZSwgcmVtZW1iZXJNZTp0cnVlXG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgZGF0YSB0byB0aGUgc2VydmVyIGluIEpTT04gZm9ybWF0LlxuICAgIGNvbnN0IEpTT05kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcblxuICAgIC8vIEFQSSBlbmRwb2ludCB3aGVyZSB3ZSBzZW5kIGZvcm0gZGF0YS5cbiAgICBjb25zdCBlbmRwb2ludCA9ICdodHRwczovL2Rldi1zZy5henVyZXdlYnNpdGVzLm5ldC9hcGkvQWNjb3VudExvZ2luQXBpL0xvZ2luJztcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZXYtc2cuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL0FjY291bnRMb2dpbkFwaS9Mb2dpbicpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgLy8gRm9ybSB0aGUgcmVxdWVzdCBmb3Igc2VuZGluZyBkYXRhIHRvIHRoZSBzZXJ2ZXIuXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgLy8gVGhlIG1ldGhvZCBpcyBQT1NUIGJlY2F1c2Ugd2UgYXJlIHNlbmRpbmcgZGF0YS5cbiAgICAgIG1ldGhvZDogJ09QVElPTlMnLFxuICAgICAgLy8gVGVsbCB0aGUgc2VydmVyIHdlJ3JlIHNlbmRpbmcgSlNPTi5cbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICAvLyBCb2R5IG9mIHRoZSByZXF1ZXN0IGlzIHRoZSBKU09OIGRhdGEgd2UgY3JlYXRlZCBhYm92ZS5cbiAgICAgIGJvZHk6IEpTT05kYXRhXG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgZm9ybSBkYXRhIHRvIG91ciBmb3JtcyBBUEkgb24gVmVyY2VsIGFuZCBnZXQgYSByZXNwb25zZS5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCBvcHRpb25zKVxuICAgIC8vIEdldCB0aGUgcmVzcG9uc2UgZGF0YSBmcm9tIHNlcnZlciBhcyBKU09OLlxuICAgIC8vIElmIHNlcnZlciByZXR1cm5zIHRoZSBuYW1lIHN1Ym1pdHRlZCwgdGhhdCBtZWFucyB0aGUgZm9ybSB3b3Jrcy5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBhbGVydChgSXMgdGhpcyB5b3VyIGZ1bGwgbmFtZTogJHtyZXN1bHQuZGF0YX1gKVxuICB9XG4gIHJldHVybiAoXG4gICAgLy8gV2UgcGFzcyB0aGUgZXZlbnQgdG8gdGhlIGhhbmRsZVN1Ym1pdCgpIGZ1bmN0aW9uIG9uIHN1Ym1pdC5cbiAgICA8Zm9ybSBzdHlsZT17e1wiZGlzcGxheVwiOiBcInRhYmxlLWNhcHRpb25cIn19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdFwiIG5hbWU9XCJmaXJzdFwiIHJlcXVpcmVkIC8+XG5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3RcIiBuYW1lPVwibGFzdFwiIHJlcXVpcmVkIC8+XG5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufSJdLCJuYW1lcyI6WyJQYWdlV2l0aEpTYmFzZWRGb3JtIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ1c2VybmFtZSIsInRhcmdldCIsImZpcnN0IiwidmFsdWUiLCJwYXNzd29yZCIsImxhc3QiLCJyZW1lbWJlck1lIiwiSlNPTmRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5kcG9pbnQiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlc3VsdCIsImFsZXJ0IiwiZm9ybSIsInN0eWxlIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/js-form.js\n"));

/***/ })

});