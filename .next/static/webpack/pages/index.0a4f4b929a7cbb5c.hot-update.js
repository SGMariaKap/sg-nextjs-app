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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PageWithJSbasedForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction PageWithJSbasedForm() {\n    // Handles the submit event on form submit.\n    const handleSubmit = async (event)=>{\n        // Stop the form from submitting and refreshing the page.\n        event.preventDefault();\n        // Get data from the form.\n        const data = {\n            userId: event.target.first.value,\n            title: event.target.last.value\n        };\n        // Send the data to the server in JSON format.\n        const JSONdata = JSON.stringify(data);\n        // API endpoint where we send form data.\n        const endpoint = \"https://jsonplaceholder.typicode.com/posts\";\n        // Form the request for sending data to the server.\n        const options = {\n            // The method is POST because we are sending data.\n            method: \"POST\",\n            // Tell the server we're sending JSON.\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            // Body of the request is the JSON data we created above.\n            body: JSONdata\n        };\n        // Send the form data to our forms API on Vercel and get a response.\n        const response = await fetch(endpoint, options);\n        // Get the response data from server as JSON.\n        // If server returns the name submitted, that means the form works.\n        const result = await response.json();\n        alert(\"Is this your full name: \".concat(result.data));\n    };\n    return(// We pass the event to the handleSubmit() function on submit.\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        style: {\n            \"display\": \"table-caption\"\n        },\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"First Name\"\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"first\",\n                name: \"first\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"last\",\n                children: \"Last Name\"\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"last\",\n                name: \"last\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mariakaptur/Documents/my-nextjs-app/pages/js-form.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n}\n_c = PageWithJSbasedForm;\nvar _c;\n$RefreshReg$(_c, \"PageWithJSbasedForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9qcy1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxzQkFBc0I7SUFDNUMsMkNBQTJDO0lBQzNDLE1BQU1DLGVBQWUsT0FBT0MsUUFBVTtRQUNwQyx5REFBeUQ7UUFDekRBLE1BQU1DLGNBQWM7UUFFcEIsMEJBQTBCO1FBQzFCLE1BQU1DLE9BQU87WUFDWEMsUUFBUUgsTUFBTUksTUFBTSxDQUFDQyxLQUFLLENBQUNDLEtBQUs7WUFBRUMsT0FBT1AsTUFBTUksTUFBTSxDQUFDSSxJQUFJLENBQUNGLEtBQUs7UUFDbEU7UUFFQSw4Q0FBOEM7UUFDOUMsTUFBTUcsV0FBV0MsS0FBS0MsU0FBUyxDQUFDVDtRQUVoQyx3Q0FBd0M7UUFDeEMsTUFBTVUsV0FBVztRQUVqQixtREFBbUQ7UUFFbkQsTUFBTUMsVUFBVTtZQUNkLGtEQUFrRDtZQUNsREMsUUFBUTtZQUNSLHNDQUFzQztZQUN0Q0MsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQSx5REFBeUQ7WUFDekRDLE1BQU1QO1FBQ1I7UUFFQSxvRUFBb0U7UUFDcEUsTUFBTVEsV0FBVyxNQUFNQyxNQUFNTixVQUFVQztRQUN2Qyw2Q0FBNkM7UUFDN0MsbUVBQW1FO1FBQ25FLE1BQU1NLFNBQVMsTUFBTUYsU0FBU0csSUFBSTtRQUNsQ0MsTUFBTSwyQkFBdUMsT0FBWkYsT0FBT2pCLElBQUk7SUFDOUM7SUFDQSxPQUNFLDhEQUE4RDtrQkFDOUQsOERBQUNvQjtRQUFLQyxPQUFPO1lBQUMsV0FBVztRQUFlO1FBQUdDLFVBQVV6Qjs7MEJBQ25ELDhEQUFDMEI7Z0JBQU1DLFNBQVE7MEJBQVE7Ozs7OzswQkFDdkIsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxJQUFHO2dCQUFRQyxNQUFLO2dCQUFRQyxRQUFROzs7Ozs7MEJBRW5ELDhEQUFDTjtnQkFBTUMsU0FBUTswQkFBTzs7Ozs7OzBCQUN0Qiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLElBQUc7Z0JBQU9DLE1BQUs7Z0JBQU9DLFFBQVE7Ozs7OzswQkFFakQsOERBQUNDO2dCQUFPSixNQUFLOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFHNUIsQ0FBQztLQWpEdUI5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9qcy1mb3JtLmpzP2Q0N2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVdpdGhKU2Jhc2VkRm9ybSgpIHtcbiAgLy8gSGFuZGxlcyB0aGUgc3VibWl0IGV2ZW50IG9uIGZvcm0gc3VibWl0LlxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAvLyBTdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZyBhbmQgcmVmcmVzaGluZyB0aGUgcGFnZS5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBHZXQgZGF0YSBmcm9tIHRoZSBmb3JtLlxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICB1c2VySWQ6IGV2ZW50LnRhcmdldC5maXJzdC52YWx1ZSwgdGl0bGU6IGV2ZW50LnRhcmdldC5sYXN0LnZhbHVlXG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgZGF0YSB0byB0aGUgc2VydmVyIGluIEpTT04gZm9ybWF0LlxuICAgIGNvbnN0IEpTT05kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcblxuICAgIC8vIEFQSSBlbmRwb2ludCB3aGVyZSB3ZSBzZW5kIGZvcm0gZGF0YS5cbiAgICBjb25zdCBlbmRwb2ludCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnO1xuICAgIFxuICAgIC8vIEZvcm0gdGhlIHJlcXVlc3QgZm9yIHNlbmRpbmcgZGF0YSB0byB0aGUgc2VydmVyLlxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIC8vIFRoZSBtZXRob2QgaXMgUE9TVCBiZWNhdXNlIHdlIGFyZSBzZW5kaW5nIGRhdGEuXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIC8vIFRlbGwgdGhlIHNlcnZlciB3ZSdyZSBzZW5kaW5nIEpTT04uXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgLy8gQm9keSBvZiB0aGUgcmVxdWVzdCBpcyB0aGUgSlNPTiBkYXRhIHdlIGNyZWF0ZWQgYWJvdmUuXG4gICAgICBib2R5OiBKU09OZGF0YVxuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIGZvcm0gZGF0YSB0byBvdXIgZm9ybXMgQVBJIG9uIFZlcmNlbCBhbmQgZ2V0IGEgcmVzcG9uc2UuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgb3B0aW9ucylcbiAgICAvLyBHZXQgdGhlIHJlc3BvbnNlIGRhdGEgZnJvbSBzZXJ2ZXIgYXMgSlNPTi5cbiAgICAvLyBJZiBzZXJ2ZXIgcmV0dXJucyB0aGUgbmFtZSBzdWJtaXR0ZWQsIHRoYXQgbWVhbnMgdGhlIGZvcm0gd29ya3MuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgYWxlcnQoYElzIHRoaXMgeW91ciBmdWxsIG5hbWU6ICR7cmVzdWx0LmRhdGF9YClcbiAgfVxuICByZXR1cm4gKFxuICAgIC8vIFdlIHBhc3MgdGhlIGV2ZW50IHRvIHRoZSBoYW5kbGVTdWJtaXQoKSBmdW5jdGlvbiBvbiBzdWJtaXQuXG4gICAgPGZvcm0gc3R5bGU9e3tcImRpc3BsYXlcIjogXCJ0YWJsZS1jYXB0aW9uXCJ9fSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3RcIiBuYW1lPVwiZmlyc3RcIiByZXF1aXJlZCAvPlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0XCIgbmFtZT1cImxhc3RcIiByZXF1aXJlZCAvPlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn0iXSwibmFtZXMiOlsiUGFnZVdpdGhKU2Jhc2VkRm9ybSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidXNlcklkIiwidGFyZ2V0IiwiZmlyc3QiLCJ2YWx1ZSIsInRpdGxlIiwibGFzdCIsIkpTT05kYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuZHBvaW50Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJhbGVydCIsImZvcm0iLCJzdHlsZSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/js-form.js\n"));

/***/ })

});