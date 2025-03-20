"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./src/pages/admin.tsx":
/*!*****************************!*\
  !*** ./src/pages/admin.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AdminPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction AdminPage() {\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            // Only redirect if we're not already on the admin HTML page\n            if (!window.location.pathname.includes(\"/admin/index.html\")) {\n                const basePath =  true ? \"\" : 0;\n                const adminPath = `${basePath}/admin/index.html`;\n                // Use replace instead of assign to prevent back button issues\n                window.location.replace(adminPath);\n            } else {\n                setIsLoading(false);\n            }\n        } catch (err) {\n            setError(err instanceof Error ? err.message : \"Failed to load admin interface\");\n            setIsLoading(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Admin - Decap CMS\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mifta\\\\OneDrive\\\\Documents\\\\Git Repos\\\\decapcms-testing\\\\src\\\\pages\\\\admin.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mifta\\\\OneDrive\\\\Documents\\\\Git Repos\\\\decapcms-testing\\\\src\\\\pages\\\\admin.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen items-center justify-center\",\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl mb-2\",\n                            children: \"Loading admin interface...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mifta\\\\OneDrive\\\\Documents\\\\Git Repos\\\\decapcms-testing\\\\src\\\\pages\\\\admin.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500\",\n                            children: \"This may take a few seconds\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mifta\\\\OneDrive\\\\Documents\\\\Git Repos\\\\decapcms-testing\\\\src\\\\pages\\\\admin.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mifta\\\\OneDrive\\\\Documents\\\\Git Repos\\\\decapcms-testing\\\\src\\\\pages\\\\admin.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center text-red-500\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Error: \",\n                            error\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mifta\\\\OneDrive\\\\Documents\\\\Git Repos\\\\decapcms-testing\\\\src\\\\pages\\\\admin.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mifta\\\\OneDrive\\\\Documents\\\\Git Repos\\\\decapcms-testing\\\\src\\\\pages\\\\admin.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this) : null\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mifta\\\\OneDrive\\\\Documents\\\\Git Repos\\\\decapcms-testing\\\\src\\\\pages\\\\admin.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRtaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUN0QjtBQUVkLFNBQVNJLFNBQVMsR0FBRztJQUNsQyxNQUFNLEtBQUNDLFNBQVMsTUFBRUMsWUFBWSxNQUFJSiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUNoRCxNQUFNLEtBQUNLLEtBQUssTUFBRUMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFnQixJQUFJLENBQUM7SUFFdkRELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUk7WUFDRiw0REFBNEQ7WUFDNUQsSUFBSSxDQUFDUSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsRUFBRTtnQkFDM0QsTUFBTUMsUUFBUSxHQUFHQyxLQUFzQyxHQUFHLEVBQUUsR0FBRyxDQUFtQjtnQkFDbEYsTUFBTUMsU0FBUyxHQUFHLENBQUMsRUFBRUYsUUFBUSxDQUFDLGlCQUFpQixDQUFDO2dCQUVoRCw4REFBOEQ7Z0JBQzlESixNQUFNLENBQUNDLFFBQVEsQ0FBQ00sT0FBTyxDQUFDRCxTQUFTLENBQUMsQ0FBQztZQUNyQyxPQUFPO2dCQUNMVCxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQztRQUNILEVBQUUsT0FBT1csR0FBRyxFQUFFO1lBQ1pULFFBQVEsQ0FBQ1MsR0FBRyxZQUFZQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsT0FBTyxHQUFHLGdDQUFnQyxDQUFDLENBQUM7WUFDaEZiLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0U7OzBCQUNFLDhEQUFDSCxrREFBSTswQkFDSCw0RUFBQ2lCLE9BQUs7OEJBQUMsbUJBQWlCOzs7Ozt3QkFBUTs7Ozs7b0JBQzNCOzBCQUNQLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsK0NBQStDOzBCQUMzRGpCLFNBQVMsaUJBQ1IsOERBQUNnQixLQUFHO29CQUFDQyxTQUFTLEVBQUMsYUFBYTs7c0NBQzFCLDhEQUFDQyxHQUFDOzRCQUFDRCxTQUFTLEVBQUMsY0FBYztzQ0FBQyw0QkFBMEI7Ozs7O2dDQUFJO3NDQUMxRCw4REFBQ0MsR0FBQzs0QkFBQ0QsU0FBUyxFQUFDLHVCQUF1QjtzQ0FBQyw2QkFBMkI7Ozs7O2dDQUFJOzs7Ozs7d0JBQ2hFLEdBQ0pmLEtBQUssaUJBQ1AsOERBQUNjLEtBQUc7b0JBQUNDLFNBQVMsRUFBQywwQkFBMEI7OEJBQ3ZDLDRFQUFDQyxHQUFDOzs0QkFBQyxTQUFPOzRCQUFDaEIsS0FBSzs7Ozs7OzRCQUFLOzs7Ozt3QkFDakIsR0FDSixJQUFJOzs7OztvQkFDSjs7b0JBQ0wsQ0FDSDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNhcGNtcy10ZXN0aW5nLy4vc3JjL3BhZ2VzL2FkbWluLnRzeD9lNmM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5QYWdlKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gT25seSByZWRpcmVjdCBpZiB3ZSdyZSBub3QgYWxyZWFkeSBvbiB0aGUgYWRtaW4gSFRNTCBwYWdlXHJcbiAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvYWRtaW4vaW5kZXguaHRtbCcpKSB7XHJcbiAgICAgICAgY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/ICcnIDogJy9kZWNhcGNtcy10ZXN0aW5nJztcclxuICAgICAgICBjb25zdCBhZG1pblBhdGggPSBgJHtiYXNlUGF0aH0vYWRtaW4vaW5kZXguaHRtbGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVXNlIHJlcGxhY2UgaW5zdGVhZCBvZiBhc3NpZ24gdG8gcHJldmVudCBiYWNrIGJ1dHRvbiBpc3N1ZXNcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShhZG1pblBhdGgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBsb2FkIGFkbWluIGludGVyZmFjZScpO1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BZG1pbiAtIERlY2FwIENNUzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTJcIj5Mb2FkaW5nIGFkbWluIGludGVyZmFjZS4uLjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+VGhpcyBtYXkgdGFrZSBhIGZldyBzZWNvbmRzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IGVycm9yID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgPHA+RXJyb3I6IHtlcnJvcn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59ICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkFkbWluUGFnZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJiYXNlUGF0aCIsInByb2Nlc3MiLCJhZG1pblBhdGgiLCJyZXBsYWNlIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/admin.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/admin.tsx"));
module.exports = __webpack_exports__;

})();