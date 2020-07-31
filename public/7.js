(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/proveedores.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/proveedores.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./resources/js/components/index.js");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    datatable: _components__WEBPACK_IMPORTED_MODULE_0__["datatable"]
  },
  data: function data() {
    return {
      headers: [{
        text: 'Nombre',
        value: 'nombre'
      }],
      url: '/datatables/getproveedores'
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/proveedores.vue?vue&type=template&id=4a738333&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/proveedores.vue?vue&type=template&id=4a738333& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("datatable", { attrs: { headers: _vm.headers, title: "Proveedores" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/index.js":
/*!******************************************!*\
  !*** ./resources/js/components/index.js ***!
  \******************************************/
/*! exports provided: combobox, datatable, zdialog, Zinput */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\xampp\\htdocs\\mgrtechnospa\\resources\\js\\components\\index.js: Export 'Zinput' is not defined (9:8)\n\n\u001b[0m \u001b[90m 7 | \u001b[39m\u001b[36mexport\u001b[39m {\u001b[33mDatatable\u001b[39m as datatable}\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m\u001b[36mexport\u001b[39m {zdialog as zdialog}\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 9 | \u001b[39m\u001b[36mexport\u001b[39m {\u001b[33mZinput\u001b[39m as \u001b[33mZinput\u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Parser.raise (C:\\xampp\\htdocs\\mgrtechnospa\\node_modules\\@babel\\parser\\lib\\index.js:6930:17)\n    at Parser.parseTopLevel (C:\\xampp\\htdocs\\mgrtechnospa\\node_modules\\@babel\\parser\\lib\\index.js:10548:14)\n    at Parser.parse (C:\\xampp\\htdocs\\mgrtechnospa\\node_modules\\@babel\\parser\\lib\\index.js:12051:10)\n    at parse (C:\\xampp\\htdocs\\mgrtechnospa\\node_modules\\@babel\\parser\\lib\\index.js:12102:38)\n    at parser (C:\\xampp\\htdocs\\mgrtechnospa\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:168:34)\n    at normalizeFile (C:\\xampp\\htdocs\\mgrtechnospa\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:102:11)\n    at runSync (C:\\xampp\\htdocs\\mgrtechnospa\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)\n    at runAsync (C:\\xampp\\htdocs\\mgrtechnospa\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:14)\n    at C:\\xampp\\htdocs\\mgrtechnospa\\node_modules\\@babel\\core\\lib\\transform.js:34:34\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)");

/***/ }),

/***/ "./resources/js/pages/proveedores.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/proveedores.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _proveedores_vue_vue_type_template_id_4a738333___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedores.vue?vue&type=template&id=4a738333& */ "./resources/js/pages/proveedores.vue?vue&type=template&id=4a738333&");
/* harmony import */ var _proveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proveedores.vue?vue&type=script&lang=js& */ "./resources/js/pages/proveedores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _proveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _proveedores_vue_vue_type_template_id_4a738333___WEBPACK_IMPORTED_MODULE_0__["render"],
  _proveedores_vue_vue_type_template_id_4a738333___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/proveedores.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/proveedores.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/proveedores.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./proveedores.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/proveedores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/proveedores.vue?vue&type=template&id=4a738333&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/proveedores.vue?vue&type=template&id=4a738333& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proveedores_vue_vue_type_template_id_4a738333___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./proveedores.vue?vue&type=template&id=4a738333& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/proveedores.vue?vue&type=template&id=4a738333&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proveedores_vue_vue_type_template_id_4a738333___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proveedores_vue_vue_type_template_id_4a738333___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);