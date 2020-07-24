(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/productos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/productos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    datatable: _components_tables_datatable_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    vdialog: _components_tables_stock_vdialogs_stockDialog_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      formTitle: "",
      comboboxes: {
        fields: {
          tipos: [],
          marcas: []
        },
        searching: {
          tipo: null,
          marca: null
        },
        loading: {
          tipo: false,
          marca: false
        }
      },
      dialog: false,
      search: '',
      totalDesserts: 0,
      desserts: [],
      loading: true,
      options: {},
      headers: [{
        text: 'Código UPC',
        value: 'upc'
      }, {
        text: 'Código EAN',
        value: 'ean'
      }, {
        text: 'Tipo de producto',
        value: 'tipo'
      }, {
        text: 'Modelo',
        value: 'modelo'
      }, {
        text: 'Marca',
        value: 'marca'
      }, {
        text: 'Serializado',
        value: 'serializado'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      //EXPERIMENTAL
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        id: null,
        upc: null,
        ean: null,
        tipo: null,
        marca: null,
        modelo: null,
        serializado: false
      },
      selectedItem: {
        id: null,
        upc: null,
        ean: null,
        tipo: null,
        marca: null,
        modelo: null,
        serializado: false
      }
    };
  },
  computed: {
    /*dataForPost: function()
    {
      var post = {}
      Object.entries(this.selectedItem).forEach(function(value,key)
      {
        if(value[0] == "serializado")
        {
          post[value[0]] = value[1]
        }
        else if(value[1] != null && value[1] != "")
        {
          post[value[0]] = value[1]  
        }
        
        
        
      });
      return post
    },
    formCalc: function()
    {
      if(this.formTitle == 'Eliminar producto')
      {
        return true
      }
      else
      {
        return false
      }
     }*/
  },
  watch: {
    search: {
      handler: function handler() {
        this.getDataFromApi();
      },
      deep: true
    },
    options: {
      handler: function handler() {
        this.getDataFromApi();
      },
      deep: true
    },
    dialog: function dialog(val) {
      val || this.close();
    },
    'comboboxes.searching.tipo': function comboboxesSearchingTipo(val) {
      var _this = this;

      this.comboboxes.loading.tipo = true;
      axios.post('/ajax/tiposprods', {
        search: val
      }).then(function (response) {
        _this.comboboxes.fields.tipos = response.data;
        _this.comboboxes.loading.tipo = false;
      });
    },
    'comboboxes.searching.marca': function comboboxesSearchingMarca(val) {
      var _this2 = this;

      this.comboboxes.loading.marca = true;
      axios.post('/ajax/marcas', {
        search: val
      }).then(function (response) {
        _this2.comboboxes.fields.marcas = response.data;
        _this2.comboboxes.loading.marca = false;
      });
    }
  },
  mounted: function mounted() {
    this.getDataFromApi(); //this.cargarSelects()
  },
  methods: {
    dialEdit: function dialEdit(value) {
      this.val = value;
    },
    getColor: function getColor(item) {
      if (item == true) {
        return 'green';
      } else {
        return 'red';
      }
    },
    getLabel: function getLabel(item) {
      if (item == true) {
        return 'Activo';
      } else {
        return 'Inactivo';
      }
    },
    getDataFromApi: function getDataFromApi() {
      var _this3 = this;

      this.loading = true;
      var _this$options = this.options,
          sortBy = _this$options.sortBy,
          descending = _this$options.descending,
          page = _this$options.page,
          itemsPerPage = _this$options.itemsPerPage,
          sortDesc = _this$options.sortDesc;
      axios.post('/datatables/getproductos', {
        sortDesc: this.options.sortDesc,
        search: this.search,
        sortBy: this.options.sortBy,
        descending: this.options.descending,
        page: this.options.page,
        itemsPerPage: this.options.itemsPerPage
      }).then(function (response) {
        _this3.desserts = response.data.data;
        _this3.totalDesserts = response.data.total;
        _this3.loading = false;
      });
    },
    initialize: function initialize() {
      this.getDataFromApi();
    },
    newItem: function newItem() {
      this.formTitle = "Nuevo producto";
      this.selectedItem = Object.assign({}, this.defaultItem);
      this.dialog = true;
    },
    editItem: function editItem(item) {
      this.formTitle = "Editar producto";
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.formTitle = "Eliminar producto";
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      setTimeout(function () {
        _this4.selectedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;

        _this4.getDataFromApi();
      }, 300);
    },
    save: function save() {
      if (this.formTitle == "Nuevo producto") {
        axios.post('/admin/productos/nuevo', this.dataForPost).then(function (response) {});
      } else if (this.formTitle == "Editar producto") {
        axios.post('/admin/productos/editar', this.dataForPost).then(function (response) {});
      } else if (this.formTitle == "Eliminar producto") {
        axios.post('/admin/productos/eliminar', {
          id: this.selectedItem.id
        }).then(function (response) {});
      }

      this.close();
    } //CARGAR COMBOBOX

    /*getTiposProductos: function()
    {
        axios.get('/ajax/tiposprods')
          .then(response => {
            this.comboboxes.fields.tipos = response.data;
        });
    },*/

    /*getMarcas: function()
    {
      axios.get('/ajax/marcas')
        .then(response => {
          this.comboboxes.fields.marcas = response.data;    
      });
    },*/

  }
});

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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("datatable", {
        attrs: {
          title: "Productos",
          headers: _vm.headers,
          url: "/datatables/getproductos"
        },
        on: {
          edit: _vm.dialEdit,
          new: function($event) {
            _vm.val = true
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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