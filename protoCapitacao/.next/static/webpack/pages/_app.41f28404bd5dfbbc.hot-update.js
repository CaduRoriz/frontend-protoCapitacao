"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Header() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const path = () => {\n    //         if(router.pathname.includes(\"/search\")){\n    //             return 2\n    //         }else if(router.pathname.includes(\"/contact\")){\n    //             return 3\n    //         } else{\n    //             return 1\n    //         }\n    // }\n    var pathHome = router.pathname.replace(\"/\", \"\") === path;\n    var pathSearch = router.pathname.includes(\"search\");\n    var pathContact = router.pathname.includes(\"contact\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerWrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \" Proto-Capita\\xe7\\xe3o\"\n                    }, void 0, false, {\n                        fileName: \"/home/kadu/Documentos/frontend-protoCapitacao/protoCapitacao/src/components/Header/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 50\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/kadu/Documentos/frontend-protoCapitacao/protoCapitacao/src/components/Header/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().navigation),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return router.push(\"/\");\n                            },\n                            className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttonNav), \" \").concat(pathHome ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().isPath) : \"\", \" \"),\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/home/kadu/Documentos/frontend-protoCapitacao/protoCapitacao/src/components/Header/index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 20\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return router.push(\"/search\");\n                            },\n                            className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttonNav), \" \").concat(pathSearch ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().isPath) : \"\"),\n                            children: \"Buscar\"\n                        }, void 0, false, {\n                            fileName: \"/home/kadu/Documentos/frontend-protoCapitacao/protoCapitacao/src/components/Header/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 20\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return router.push(\"/contact\");\n                            },\n                            className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttonNav), \" \").concat(pathContact ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().isPath) : \"\"),\n                            children: \"Contato\"\n                        }, void 0, false, {\n                            fileName: \"/home/kadu/Documentos/frontend-protoCapitacao/protoCapitacao/src/components/Header/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 20\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kadu/Documentos/frontend-protoCapitacao/protoCapitacao/src/components/Header/index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kadu/Documentos/frontend-protoCapitacao/protoCapitacao/src/components/Header/index.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadu/Documentos/frontend-protoCapitacao/protoCapitacao/src/components/Header/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEM7QUFDRjtBQUdqQyxTQUFTRSxNQUFNLEdBQUU7O0lBRXBCLElBQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBRTtJQUUxQix1QkFBdUI7SUFDdkIsbURBQW1EO0lBQ25ELHVCQUF1QjtJQUN2QiwwREFBMEQ7SUFDMUQsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUVaLElBQUk7SUFFSixJQUFNRyxRQUFRLEdBQUdELE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLQyxJQUFJO0lBQzFELElBQU1DLFVBQVUsR0FBR0wsTUFBTSxDQUFDRSxRQUFRLENBQUNJLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDckQsSUFBTUMsV0FBVyxHQUFHUCxNQUFNLENBQUNFLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUV2RCxxQkFDSSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUVaLDBFQUFvQjtrQkFDaEMsNEVBQUNXLEtBQUc7WUFBQ0MsU0FBUyxFQUFFWiw0RUFBc0I7OzhCQUNsQyw4REFBQ2UsUUFBTTtvQkFBQ0gsU0FBUyxFQUFFWixrRUFBWTs4QkFBRSw0RUFBQ2lCLElBQUU7a0NBQUUsd0JBQWdCOzs7Ozs0QkFBSzs7Ozs7d0JBQVM7OEJBRXBFLDhEQUFDTixLQUFHO29CQUFDQyxTQUFTLEVBQUVaLHVFQUFpQjs7c0NBRTlCLDhEQUFDZSxRQUFNOzRCQUFDSSxPQUFPLEVBQUU7dUNBQU1oQixNQUFNLENBQUNpQixJQUFJLENBQUMsR0FBRyxDQUFDOzZCQUFBOzRCQUFFUixTQUFTLEVBQUUsRUFBQyxDQUF1QlIsTUFBNkIsQ0FBbERKLHNFQUFnQixFQUFDLEdBQUMsQ0FBaUMsT0FBQyxDQUEvQkksUUFBUSxHQUFHSixtRUFBYSxHQUFHLEVBQUUsRUFBQyxHQUFDLENBQUM7c0NBQUUsTUFBSTs7Ozs7Z0NBQVM7c0NBQzNILDhEQUFDZSxRQUFNOzRCQUFDSSxPQUFPLEVBQUU7dUNBQU1oQixNQUFNLENBQUNpQixJQUFJLENBQUMsU0FBUyxDQUFDOzZCQUFBOzRCQUFFUixTQUFTLEVBQUUsRUFBQyxDQUF1QkosTUFBK0IsQ0FBcERSLHNFQUFnQixFQUFDLEdBQUMsQ0FBbUMsUUFBaENRLFVBQVUsR0FBR1IsbUVBQWEsR0FBRyxFQUFFLENBQUU7c0NBQUUsUUFBTTs7Ozs7Z0NBQVM7c0NBQ3BJLDhEQUFDZSxRQUFNOzRCQUFDSSxPQUFPLEVBQUU7dUNBQU1oQixNQUFNLENBQUNpQixJQUFJLENBQUMsVUFBVSxDQUFDOzZCQUFBOzRCQUFFUixTQUFTLEVBQUUsRUFBQyxDQUF1QkYsTUFBZ0MsQ0FBckRWLHNFQUFnQixFQUFDLEdBQUMsQ0FBb0MsUUFBakNVLFdBQVcsR0FBR1YsbUVBQWEsR0FBRyxFQUFFLENBQUU7c0NBQUUsU0FBTzs7Ozs7Z0NBQVM7Ozs7Ozt3QkFDcEk7Ozs7OztnQkFDSjs7Ozs7WUFDSixDQUdSO0FBQ04sQ0FBQztHQW5DZUUsTUFBTTs7UUFFSEQsa0RBQVM7OztBQUZaQyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/NDAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi8uLi9wYWdlcy9zZWFyY2hcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcigpe1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgXG4gICAgLy8gY29uc3QgcGF0aCA9ICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9zZWFyY2hcIikpe1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiAyXG4gICAgLy8gICAgICAgICB9ZWxzZSBpZihyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvY29udGFjdFwiKSl7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIDNcbiAgICAvLyAgICAgICAgIH0gZWxzZXtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gMVxuICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgLy8gfVxuXG4gICAgY29uc3QgcGF0aEhvbWUgPSByb3V0ZXIucGF0aG5hbWUucmVwbGFjZShcIi9cIiwgXCJcIikgPT09IHBhdGg7XG4gICAgY29uc3QgcGF0aFNlYXJjaCA9IHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcInNlYXJjaFwiKTtcbiAgICBjb25zdCBwYXRoQ29udGFjdCA9IHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcImNvbnRhY3RcIik7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyV3JhcHBlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGgxID4gUHJvdG8tQ2FwaXRhw6fDo288L2gxPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbk5hdn0gJHsgcGF0aEhvbWUgPyBzdHlsZXMuaXNQYXRoIDogXCJcIn0gYH0+SG9tZTwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3NlYXJjaFwiKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9uTmF2fSAkeyBwYXRoU2VhcmNoID8gc3R5bGVzLmlzUGF0aCA6IFwiXCJ9YH0+QnVzY2FyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9jb250YWN0XCIpfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b25OYXZ9ICR7IHBhdGhDb250YWN0ID8gc3R5bGVzLmlzUGF0aCA6IFwiXCJ9YH0+Q29udGF0bzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIFxuICAgICk7XG59Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJvdXRlciIsIkhlYWRlciIsInJvdXRlciIsInBhdGhIb21lIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwicGF0aCIsInBhdGhTZWFyY2giLCJpbmNsdWRlcyIsInBhdGhDb250YWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyV3JhcHBlciIsImhlYWRlckNvbnRhaW5lciIsImJ1dHRvbiIsInRpdGxlIiwiaDEiLCJuYXZpZ2F0aW9uIiwib25DbGljayIsInB1c2giLCJidXR0b25OYXYiLCJpc1BhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ })

});