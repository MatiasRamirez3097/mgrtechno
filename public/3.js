(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Combobox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Combobox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      localValue: this.value,
      search: ""
    };
  },
  components: {
    VCombobox: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCombobox"]
  },
  name: 'Combobox',
  props: {
    noFilter: Boolean,
    hideSelected: Boolean,
    label: String,
    loading: Boolean,
    smallChips: Boolean,
    persistentHint: Boolean,
    items: Array,
    value: String,
    noData: String,
    hint: String
  },
  watch: {
    localValue: function localValue(newValue) {
      this.$emit('input', newValue);
    },
    value: function (_value) {
      function value(_x) {
        return _value.apply(this, arguments);
      }

      value.toString = function () {
        return _value.toString();
      };

      return value;
    }(function (newValue) {
      this.localValue = value;
    })
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Datatable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Datatable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VDataTable: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VDataTable"]
  },
  props: {
    classProp: String,
    loading: Boolean,
    search: String,
    headers: Array,
    items: Array,
    serverItemsLength: Number
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/productos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/productos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    combobox: _components__WEBPACK_IMPORTED_MODULE_0__["combobox"],
    datatable: _components__WEBPACK_IMPORTED_MODULE_0__["datatable"]
  },
  data: function data() {
    return {
      headers: [{
        text: 'Name',
        value: 'name'
      }, {
        text: 'Surname',
        value: 'surname'
      }],
      loading: false,
      search: "",
      items: []
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Combobox.vue?vue&type=template&id=77754868&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Combobox.vue?vue&type=template&id=77754868& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-combobox", {
    attrs: {
      items: _vm.items,
      "search-input": _vm.search,
      "hide-selected": _vm.smallChips,
      hint: "Seleccione la marca, si no existe escribala",
      label: _vm.label,
      "small-chips": _vm.smallChips,
      loading: _vm.loading,
      "no-filter": _vm.noFilter,
      "persistent-hint": _vm.persistentHint,
    },
    on: {
      "update:searchInput": function ($event) {
        _vm.search = $event
      },
      "update:search-input": function ($event) {
        _vm.search = $event
      },
    },
    scopedSlots: _vm._u([
      {
        key: "no-data",
        fn: function () {
          return [
            _c(
              "v-list-item",
              [
                _c(
                  "v-list-item-content",
                  [
                    _c("v-list-item-title", [
                      _vm._v(
                        '\n                No se encontraron resultados para "'
                      ),
                      _c("strong", [_vm._v(_vm._s(_vm.noData) + " ")]),
                      _vm._v('". Presiona '),
                      _c("kbd", [_vm._v("enter")]),
                      _vm._v(" para crearlo\n            "),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]
        },
        proxy: true,
      },
    ]),
    model: {
      value: _vm.localValue,
      callback: function ($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Datatable.vue?vue&type=template&id=57b142ee&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Datatable.vue?vue&type=template&id=57b142ee& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-data-table", {
    class: _vm.classProp,
    attrs: {
      search: _vm.search,
      headers: _vm.headers,
      items: _vm.desserts,
      options: _vm.options,
      "server-items-length": _vm.serverItemsLength,
      loading: _vm.loading,
    },
    on: {
      "update:options": function ($event) {
        _vm.options = $event
      },
    },
    scopedSlots: _vm._u([
      {
        key: "item.serializado",
        fn: function (ref) {
          var item = ref.item
          return [
            _c(
              "v-chip",
              { attrs: { color: _vm.getColor(item.serializado), dark: "" } },
              [_vm._v(_vm._s(_vm.getLabel(item.serializado)))]
            ),
          ]
        },
      },
      {
        key: "item.action",
        fn: function (ref) {
          var item = ref.item
          return [
            _c(
              "v-icon",
              {
                staticClass: "mr-2",
                attrs: { small: "" },
                on: {
                  click: function ($event) {
                    return _vm.editItem(item)
                  },
                },
              },
              [_vm._v("\n            edit\n        ")]
            ),
            _vm._v(" "),
            _c(
              "v-icon",
              {
                attrs: { small: "" },
                on: {
                  click: function ($event) {
                    return _vm.deleteItem(item)
                  },
                },
              },
              [_vm._v("\n        delete\n        ")]
            ),
          ]
        },
      },
      {
        key: "no-data",
        fn: function () {
          return [
            _c(
              "v-btn",
              { attrs: { color: "primary" }, on: { click: _vm.initialize } },
              [_vm._v("Refresh")]
            ),
          ]
        },
        proxy: true,
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/productos.vue?vue&type=template&id=26b1c27a&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/productos.vue?vue&type=template&id=26b1c27a& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title"),
      _vm._v(" "),
      _c("datatable", {
        attrs: {
          loading: _vm.loading,
          headers: _vm.headers,
          items: _vm.items,
          classProp: "elevation-1",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Combobox.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Combobox.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combobox_vue_vue_type_template_id_77754868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combobox.vue?vue&type=template&id=77754868& */ "./resources/js/components/Combobox.vue?vue&type=template&id=77754868&");
/* harmony import */ var _Combobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Combobox.vue?vue&type=script&lang=js& */ "./resources/js/components/Combobox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Combobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Combobox_vue_vue_type_template_id_77754868___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Combobox_vue_vue_type_template_id_77754868___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Combobox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Combobox.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Combobox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Combobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Combobox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Combobox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Combobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Combobox.vue?vue&type=template&id=77754868&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Combobox.vue?vue&type=template&id=77754868& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Combobox_vue_vue_type_template_id_77754868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Combobox.vue?vue&type=template&id=77754868& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Combobox.vue?vue&type=template&id=77754868&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Combobox_vue_vue_type_template_id_77754868___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Combobox_vue_vue_type_template_id_77754868___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Datatable.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Datatable.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Datatable_vue_vue_type_template_id_57b142ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datatable.vue?vue&type=template&id=57b142ee& */ "./resources/js/components/Datatable.vue?vue&type=template&id=57b142ee&");
/* harmony import */ var _Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datatable.vue?vue&type=script&lang=js& */ "./resources/js/components/Datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Datatable_vue_vue_type_template_id_57b142ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Datatable_vue_vue_type_template_id_57b142ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Datatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Datatable.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Datatable.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Datatable.vue?vue&type=template&id=57b142ee&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Datatable.vue?vue&type=template&id=57b142ee& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_57b142ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=template&id=57b142ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Datatable.vue?vue&type=template&id=57b142ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_57b142ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_57b142ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/index.js":
/*!******************************************!*\
  !*** ./resources/js/components/index.js ***!
  \******************************************/
/*! exports provided: combobox, datatable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combobox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combobox.vue */ "./resources/js/components/Combobox.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combobox", function() { return _Combobox_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Datatable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datatable.vue */ "./resources/js/components/Datatable.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datatable", function() { return _Datatable_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./resources/js/pages/productos.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/productos.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productos_vue_vue_type_template_id_26b1c27a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos.vue?vue&type=template&id=26b1c27a& */ "./resources/js/pages/productos.vue?vue&type=template&id=26b1c27a&");
/* harmony import */ var _productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productos.vue?vue&type=script&lang=js& */ "./resources/js/pages/productos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productos_vue_vue_type_template_id_26b1c27a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productos_vue_vue_type_template_id_26b1c27a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/productos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/productos.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/productos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./productos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/productos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/productos.vue?vue&type=template&id=26b1c27a&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/productos.vue?vue&type=template&id=26b1c27a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productos_vue_vue_type_template_id_26b1c27a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./productos.vue?vue&type=template&id=26b1c27a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/productos.vue?vue&type=template&id=26b1c27a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productos_vue_vue_type_template_id_26b1c27a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productos_vue_vue_type_template_id_26b1c27a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);