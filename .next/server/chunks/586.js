"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function renderControl(control, index) {
    if (!control) {
        console.log("if (!control)return null;");
        return null;
    }
    if (Array.isArray(control)) {
        console.log("Array.isArray(control)");
        return control.map((c, index)=>renderControl(c, index));
    }
    const { ControlType , Control , Id: id , class: className , ...props } = control;
    const children = Control ? renderControl(Control) : null;
    const updatedProps = className ? {
        ...props,
        className
    } : props;
    const elementProps = ControlType ? {
        ...updatedProps,
        controltype: ControlType
    } : updatedProps;
    const Element = ControlType || "div";
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Element, {
        key: index,
        ...elementProps
    }, children);
}
function Controls({ controls  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: renderControl(controls)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controls);


/***/ })

};
;