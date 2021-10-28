(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Compras.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Compras.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tables_stock_vdialogs_stockDialog_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tables/stock/vdialogs/stockDialog.vue */ "./resources/js/components/tables/stock/vdialogs/stockDialog.vue");
/* harmony import */ var _components_tables_datatable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/tables/datatable.vue */ "./resources/js/components/tables/datatable.vue");
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
    datatable: _components_tables_datatable_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    vdialog: _components_tables_stock_vdialogs_stockDialog_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      search: '',
      headers: [{
        text: 'Proveedor',
        value: 'proveedor'
      }, {
        text: 'Factura',
        value: 'factura'
      }, {
        text: 'Usuario',
        value: 'usuario'
      }, {
        text: 'Estado',
        value: 'estado'
      }, {
        text: 'Total',
        value: 'total'
      }, {
        text: 'Fecha',
        value: 'fecha'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      expanded: [],
      items: [],
      loading: true,
      multiSalida: [],
      options: {},
      singleExpand: false,
      totalItems: 0,
      val: false
    };
  },
  methods: {
    dialEdit: function dialEdit(value) {
      this.val = value;
    }
    /*getDataFromApi () {
       			this.loading = true
           		const { sortBy, descending, page, itemsPerPage, sortDesc } = this.options
           		axios.post('/datatables/getstock',
     			{
               datafilter: this.disponible,
               sortDesc: this.options.sortDesc,
               search: this.search,
               sortBy: this.options.sortBy,
               descending: this.options.descending,
               page: this.options.page,
               itemsPerPage: this.options.itemsPerPage
         		}).then(response => {
               this.desserts = response.data.data
               this.totalDesserts = response.data.total
               this.loading = false;
               		this.$store.commit('setRunSearch',false)
         		});
     		},*/

  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Compras.vue?vue&type=template&id=4b2f30bc&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Compras.vue?vue&type=template&id=4b2f30bc& ***!
  \*****************************************************************************************************************************************************************************************************/
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
      _c("datatable", {
        attrs: {
          title: "Compras",
          headers: _vm.headers,
          url: "/datatables/getcompras",
        },
        on: {
          edit: _vm.dialEdit,
          new: function ($event) {
            _vm.val = true
          },
        },
      }),
      _vm._v(" "),
      _c("vdialog", {
        ref: "dialog",
        attrs: { state: _vm.val },
        on: {
          "update:state": function ($event) {
            _vm.val = $event
          },
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Compras.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Compras.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Compras_vue_vue_type_template_id_4b2f30bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Compras.vue?vue&type=template&id=4b2f30bc& */ "./resources/js/pages/Compras.vue?vue&type=template&id=4b2f30bc&");
/* harmony import */ var _Compras_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compras.vue?vue&type=script&lang=js& */ "./resources/js/pages/Compras.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Compras_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Compras_vue_vue_type_template_id_4b2f30bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Compras_vue_vue_type_template_id_4b2f30bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Compras.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Compras.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Compras.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Compras.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Compras.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Compras.vue?vue&type=template&id=4b2f30bc&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Compras.vue?vue&type=template&id=4b2f30bc& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_template_id_4b2f30bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Compras.vue?vue&type=template&id=4b2f30bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Compras.vue?vue&type=template&id=4b2f30bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_template_id_4b2f30bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_template_id_4b2f30bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);