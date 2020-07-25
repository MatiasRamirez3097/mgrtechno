(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/proveedores.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/proveedores.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      nombreRules: [function (v) {
        return !!v || 'Este campo es requerido';
      }],
      snackbar: {
        active: false,
        text: null,
        color: "success",
        multiline: true,
        icon: null,
        title: null
      },
      formTitle: "",
      comboboxes: {
        fields: {
          tipos: [],
          marcas: []
        },
        searching: {
          tipo: "",
          marca: ""
        }
      },
      dialog: false,
      search: '',
      totalDesserts: 0,
      desserts: [],
      loading: true,
      options: {},
      headers: [{
        text: 'Nombre',
        value: 'nombre'
      }, {
        text: 'Telefono',
        value: 'tel'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      //EXPERIMENTAL
      defaultItem: {
        id: null,
        nombre: null,
        tel: null
      },
      selectedItem: {
        id: 0,
        nombre: null,
        tel: null
      }
    };
  },
  computed: {
    dataForPost: function dataForPost() {
      var post = {};
      Object.entries(this.selectedItem).forEach(function (value, key) {
        if (value[1] != null && value[1] != "") {
          post[value[0]] = value[1];
        }
      });
      return post;
    },
    formCalc: function formCalc() {
      if (this.formTitle == 'Eliminar proveedor') {
        return true;
      } else {
        return false;
      }
    }
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
    }
  },
  mounted: function mounted() {
    this.getDataFromApi(); //this.cargarSelects()
  },
  methods: {
    getDataFromApi: function getDataFromApi() {
      var _this = this;

      this.loading = true;
      var _this$options = this.options,
          sortBy = _this$options.sortBy,
          descending = _this$options.descending,
          page = _this$options.page,
          itemsPerPage = _this$options.itemsPerPage,
          sortDesc = _this$options.sortDesc;
      axios.post('/datatables/getproveedores', {
        search: this.search,
        sortBy: this.options.sortBy,
        sortDesc: this.options.sortDesc,
        descending: this.options.descending,
        page: this.options.page,
        itemsPerPage: this.options.itemsPerPage
      }).then(function (response) {
        _this.desserts = response.data.data;
        _this.totalDesserts = response.data.total;
        _this.loading = false;
      });
    },
    newItem: function newItem() {
      this.formTitle = "Nuevo proveedor";
      this.selectedItem = Object.assign({}, this.defaultItem);
      this.dialog = true;
    },
    editItem: function editItem(item) {
      this.formTitle = "Editar proveedor";
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.formTitle = "Eliminar proveedor";
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      setTimeout(function () {
        _this2.selectedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;

        _this2.getDataFromApi();
      }, 300);
    },
    save: function save() {
      var _this3 = this;

      if (this.formTitle == "Nuevo proveedor") {
        axios.post('/admin/proveedores/nuevo', this.dataForPost).then(function (response) {
          _this3.snackbar.color = "rgba(0,255,0,0.5)";
          _this3.snackbar.text = " Proveedor creado correctamente.";
          _this3.snackbar.title = "Exito:";
          _this3.snackbar.icon = "done";
          _this3.snackbar.active = true;
        })["catch"](function (error) {
          _this3.snackbar.color = "rgba(255,0,0,0.5)";
          _this3.snackbar.title = "ERROR:";
          _this3.snackbar.text = "El Proveedor ya existe!";
          _this3.snackbar.icon = "report_problem";
          _this3.snackbar.active = true;
        });
      } else if (this.formTitle == "Editar proveedor") {
        axios.post('/admin/proveedores/editar', this.selectedItem).then(function (response) {});
      } else if (this.formTitle == "Eliminar proveedor") {
        axios.post('/admin/proveedores/eliminar', {
          id: this.selectedItem.id
        }).then(function (response) {});
      }

      this.close();
    },
    //CARGAR COMBOBOX
    cargarSelects: function cargarSelects() {
      this.getTiposProductos();
      this.getMarcas();
    },
    getTiposProductos: function getTiposProductos() {
      var _this4 = this;

      axios.get('/ajax/tiposprods').then(function (response) {
        _this4.comboboxes.fields.tipos = response.data;
      });
    },
    getMarcas: function getMarcas() {
      var _this5 = this;

      axios.get('/ajax/marcas').then(function (response) {
        _this5.comboboxes.fields.marcas = response.data;
      });
    }
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
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          search: _vm.search,
          headers: _vm.headers,
          items: _vm.desserts,
          options: _vm.options,
          "server-items-length": _vm.totalDesserts,
          loading: _vm.loading
        },
        on: {
          "update:options": function($event) {
            _vm.options = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "" } },
                  [
                    _c("v-toolbar-title", [_vm._v("Proveedores")]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-text-field", {
                      attrs: {
                        "append-icon": "search",
                        label: "Search",
                        "single-line": "",
                        "hide-details": ""
                      },
                      model: {
                        value: _vm.search,
                        callback: function($$v) {
                          _vm.search = $$v
                        },
                        expression: "search"
                      }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "500px" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { color: "primary", dark: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.newItem()
                                      }
                                    }
                                  },
                                  [_vm._v("New Item")]
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.dialog,
                          callback: function($$v) {
                            _vm.dialog = $$v
                          },
                          expression: "dialog"
                        }
                      },
                      [
                        _vm._v(" "),
                        _vm.formCalc == false
                          ? _c(
                              "v-card",
                              [
                                _c("v-card-title", [
                                  _c("span", { staticClass: "headline" }, [
                                    _vm._v(_vm._s(_vm.formTitle))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-container",
                                      { attrs: { "grid-list-md": "" } },
                                      [
                                        _c(
                                          "v-layout",
                                          { attrs: { wrap: "" } },
                                          [
                                            _c(
                                              "v-flex",
                                              {
                                                attrs: {
                                                  xs18: "",
                                                  sm9: "",
                                                  md6: ""
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Nombre",
                                                    rules: _vm.nombreRules
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.selectedItem.nombre,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.selectedItem,
                                                        "nombre",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "selectedItem.nombre"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              {
                                                attrs: {
                                                  xs18: "",
                                                  sm9: "",
                                                  md6: ""
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: { label: "Telefono" },
                                                  model: {
                                                    value: _vm.selectedItem.tel,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.selectedItem,
                                                        "tel",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "selectedItem.tel"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: { click: _vm.close }
                                      },
                                      [_vm._v("Cancel")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: { click: _vm.save }
                                      },
                                      [_vm._v("Save")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _c(
                              "v-card",
                              [
                                _c("v-card-title", [
                                  _c("span", { staticClass: "headline" }, [
                                    _vm._v(
                                      "¿Seguro que quiere eliminar el proveedor?"
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-simple-table",
                                      {
                                        attrs: {
                                          dense: _vm.dense,
                                          "fixed-header": _vm.fixedHeader,
                                          height: _vm.height
                                        }
                                      },
                                      [
                                        _c("tbody", [
                                          _c("tr", [
                                            _c("td", [_vm._v("Marca:")]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(_vm.selectedItem.nombre)
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c("td", [_vm._v("Modelo:")]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(_vm.selectedItem.tel)
                                              )
                                            ])
                                          ])
                                        ])
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: { click: _vm.close }
                                      },
                                      [_vm._v("Cancel")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: { click: _vm.save }
                                      },
                                      [_vm._v("Save")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-2",
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.editItem(item)
                      }
                    }
                  },
                  [_vm._v("\n    edit\n  ")]
                ),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.deleteItem(item)
                      }
                    }
                  },
                  [_vm._v("\n    delete\n  ")]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: _vm.snackbar.color,
            multiLine: _vm.snackbar.multiline
          },
          model: {
            value: _vm.snackbar.active,
            callback: function($$v) {
              _vm.$set(_vm.snackbar, "active", $$v)
            },
            expression: "snackbar.active"
          }
        },
        [
          _c("v-icon", [_vm._v("\n    " + _vm._s(_vm.snackbar.icon) + "\n  ")]),
          _vm._v(" "),
          _c("strong", [_vm._v(_vm._s(_vm.snackbar.title))]),
          _vm._v("\n  \n  " + _vm._s(_vm.snackbar.text) + "\n    "),
          _c(
            "v-btn",
            {
              attrs: { color: "black", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar.active = false
                }
              }
            },
            [_vm._v("\n      Close\n    ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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