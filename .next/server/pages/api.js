"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

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

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(753));
module.exports = __webpack_exports__;

})();