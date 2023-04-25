"use strict";
exports.id = 636;
exports.ids = [636,237];
exports.modules = {

/***/ 434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(753);
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(586);




const Header = ({ children  })=>{
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getData = async ()=>{
            const fetchedData = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchData)();
            //we have to parse the JSON data because it arrives as a string:
            try {
                const parsedData = JSON.parse(fetchedData);
                console.log("parsedData = ", parsedData, "parsedData.Control[0].Control[0] = ", parsedData.Control[0].Control[0].Id);
                const myArr = Object.entries(parsedData.Control[0]);
                setData(parsedData);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Controls__WEBPACK_IMPORTED_MODULE_2__["default"], {
            controls: data.Control
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => (/* binding */ fetchData)
/* harmony export */ });
const fetchData = async ()=>{
    try {
        const response = await fetch("https://stg-test-api.azurewebsites.net/api/OpenJson?fileName=staticheader");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};


/***/ })

};
;