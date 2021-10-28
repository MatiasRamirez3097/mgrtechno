(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formInputs_combobox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formInputs/combobox */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue");
/* harmony import */ var _formInputs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInputs/datepicker */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue");
/* harmony import */ var _formInputs_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formInputs/autocomplete */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    autocomplete: _formInputs_autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"],
    combobox: _formInputs_combobox__WEBPACK_IMPORTED_MODULE_0__["default"],
    datepicker: _formInputs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    getItem: {
      get: function get() {
        return this.$store.getters.getItem;
      },
      set: function set(value) {
        this.$store.commit('setItem', value);
      }
    }
  },
  data: function data() {
    return {
      serialesRules: [function (v) {
        return !!v || 'Debe ingresar al menos un serial';
      }],
      codbarrasRules: [function (v) {
        return !!v || 'Producto requerido';
      }],
      precio_entradaRules: [function (v) {
        return !!v || 'Precio de entrada requerido';
      }],
      proveedorRules: [function (v) {
        return !!v || 'Proveedor requerido';
      } //v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      fecha_entradaRules: [function (v) {
        return !!v || 'Fecha de entrada requerida';
      }],
      //fecha_entrada: false,
      //fecha_salida: false,
      isLoading: false,
      //searchAuto: null,
      //searchAutoClientes: null,
      item: {
        id: 0,
        codbarras: null,
        proveedor: null,
        fecha_entrada: null,
        fecha_salida: null,
        precio_entrada: null,
        precio_salida: null,
        serial: null,
        cliente: null
      },
      valid: true
    };
  },
  methods: {
    close: function close() {
      var _this = this;

      this.$store.commit('setDialog', false);
      this.$store.commit('setAction', null);
      this.$store.commit('setItem', null);
      setTimeout(function () {
        _this.item = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1; //this.getDataFromApi();
      }, 300);
    },
    save: function save() {
      axios.post('/admin/stock/editar', this.item).then(function (response) {});
      this.close();
    }
  },
  props: {
    disabledAll: Boolean
  },
  beforeMount: function beforeMount() {
    this.item = Object.assign({}, {
      id: this.getItem.id,
      codbarras: {
        id: this.getItem.productos_id,
        upc: this.getItem.upc,
        ean: this.getItem.ean,
        text: this.getItem.modelo,
        serializado: this.getItem.serializado
      },
      //tipo: this.getItem.tipo,
      //marca: this.getItem.marca,
      //modelo: this.getItem.modelo,
      proveedor: {
        value: this.getItem.proveedores_id,
        text: this.getItem.proveedor
      },
      cliente: {
        nombre: this.getItem.nombre,
        apellido: this.getItem.apellido,
        id: this.getItem.clienteid,
        documento: this.getItem.documento,
        domicilio: this.getItem.domicilio,
        correo: this.getItem.correo
      },
      fecha_entrada: this.getItem.fecha_entrada,
      fecha_salida: this.getItem.fecha_salida,
      precio_entrada: this.getItem.precio_entrada,
      precio_salida: this.getItem.precio_salida,
      serial: this.getItem.serial
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formInputs_combobox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formInputs/combobox */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue");
/* harmony import */ var _formInputs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInputs/datepicker */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue");
/* harmony import */ var _formInputs_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formInputs/autocomplete */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    autocomplete: _formInputs_autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"],
    combobox: _formInputs_combobox__WEBPACK_IMPORTED_MODULE_0__["default"],
    datepicker: _formInputs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    serializado: function serializado() {
      if (this.item.codbarras) {
        if (this.item.codbarras.serializado == true) {
          return true;
        }
      }

      return false;
    }
  },
  data: function data() {
    return {
      serialesRules: [function (v) {
        return !!v || 'Debe ingresar al menos un serial';
      }],
      codbarrasRules: [function (v) {
        return !!v || 'Producto requerido';
      }],
      precio_entradaRules: [function (v) {
        return !!v || 'Precio de entrada requerido';
      }],
      proveedorRules: [function (v) {
        return !!v || 'Proveedor requerido';
      } //v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      fecha_entradaRules: [function (v) {
        return !!v || 'Fecha de entrada requerida';
      }],
      //fecha_entrada: false,
      //fecha_salida: false,
      isLoading: false,
      //searchAuto: null,
      //searchAutoClientes: null,
      item: {
        id: 0,
        codbarras: null,
        tipo: "",
        marca: "",
        modelo: "",
        proveedor: null,
        fecha_entrada: null,
        fecha_salida: null,
        precio_entrada: null,
        precio_salida: null,
        seriales: null,
        cliente: null
      },
      valid: true
    };
  },
  methods: {
    close: function close() {
      var _this = this;

      this.$store.commit('setDialog', false);
      this.$store.commit('setAction', null);
      setTimeout(function () {
        _this.selectedItem = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1; //this.getDataFromApi();
      }, 300);
    },
    save: function save() {
      axios.post('/admin/stock/nuevo', this.item).then(function (response) {});
      this.close();
    }
  },
  props: {
    multiple: Boolean,
    disabledAll: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_editItemForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/editItemForm */ "./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue");
/* harmony import */ var _forms_newItemForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/newItemForm */ "./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    editItemForm: _forms_editItemForm__WEBPACK_IMPORTED_MODULE_0__["default"],
    newItemForm: _forms_newItemForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    getAction: {
      get: function get() {
        return this.$store.getters.getAction;
      },
      set: function set(value) {
        this.$store.commit('setAction', value);
      }
    },
    getDialog: {
      get: function get() {
        return this.$store.getters.getDialog;
      },
      set: function set(value) {
        this.$store.commit('setDialog', value);
      }
    }
  },
  data: function data() {
    return {
      serialesRules: [function (v) {
        return !!v || 'Debe ingresar al menos un serial';
      }],
      codbarrasRules: [function (v) {
        return !!v || 'Producto requerido';
      }],
      precio_entradaRules: [function (v) {
        return !!v || 'Precio de entrada requerido';
      }],
      proveedorRules: [function (v) {
        return !!v || 'Proveedor requerido';
      } //v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      fecha_entradaRules: [function (v) {
        return !!v || 'Fecha de entrada requerida';
      }]
    };
  },
  methods: {
    /*close () {
    	this.getDialog = false;
    		setTimeout(() => {
       		this.$store.commit('setRunSearch', true)
    		}, 300)
    },*/
  },
  props: {
    state: Boolean
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=template&id=13e6c283&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=template&id=13e6c283& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    {
      ref: "form",
      model: {
        value: _vm.valid,
        callback: function ($$v) {
          _vm.valid = $$v
        },
        expression: "valid",
      },
    },
    [
      _vm._v("\n\t\t" + _vm._s(_vm.item) + "\n\t\t"),
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v("Editar producto"),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { attrs: { "grid-list-mid": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("autocomplete", {
                            attrs: {
                              itemsValue: "id",
                              palceholder: "Escribir para buscar",
                              default: _vm.item.codbarras,
                              label: "Producto",
                              url: "/ajax/codbarras",
                            },
                            model: {
                              value: _vm.item.codbarras,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "codbarras", $$v)
                              },
                              expression: "item.codbarras",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("combobox", {
                            attrs: {
                              default: _vm.item.proveedor,
                              rules: _vm.proveedorRules,
                              url: "/ajax/proveedores",
                              label: "Proveedor",
                            },
                            model: {
                              value: _vm.item.proveedor,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "proveedor", $$v)
                              },
                              expression: "item.proveedor",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("datepicker", {
                            ref: "fecha_entrada",
                            attrs: {
                              default: _vm.item.fecha_entrada,
                              label: "Fecha de entrada",
                            },
                            model: {
                              value: _vm.item.fecha_entrada,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "fecha_entrada", $$v)
                              },
                              expression: "item.fecha_entrada",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "numeric",
                              label: "Precio de entrada",
                            },
                            model: {
                              value: _vm.item.precio_entrada,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "precio_entrada", $$v)
                              },
                              expression: "item.precio_entrada",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("datepicker", {
                            ref: "fecha_salida",
                            attrs: {
                              default: _vm.item.fecha_salida,
                              label: "Fecha de salida",
                            },
                            model: {
                              value: _vm.item.fecha_salida,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "fecha_salida", $$v)
                              },
                              expression: "item.fecha_salida",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "numeric",
                              label: "Precio de salida",
                              required: "",
                            },
                            model: {
                              value: _vm.item.precio_salida,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "precio_salida", $$v)
                              },
                              expression: "item.precio_salida",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("autocomplete", {
                            attrs: {
                              itemsValue: "id",
                              label: "Cliente",
                              placeholder: "Escribir para buscar",
                              default: _vm.item.cliente,
                              url: "/ajax/clientes",
                            },
                            model: {
                              value: _vm.item.cliente,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "cliente", $$v)
                              },
                              expression: "item.cliente",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.item.codbarras.serializado == true
                        ? _c(
                            "v-flex",
                            { attrs: { xs36: "", sm18: "", md12: "" } },
                            [
                              _c("combobox", {
                                attrs: {
                                  default: _vm.item.serial,
                                  disabledAll: "",
                                  url: "/ajax/seriales",
                                },
                                model: {
                                  value: _vm.item.serial,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.item, "serial", $$v)
                                  },
                                  expression: "item.serial",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
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
                  attrs: { color: "blue darken-1", text: "" },
                  on: { click: _vm.close },
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { disabled: !_vm.valid, color: "success", text: "" },
                  on: { click: _vm.save },
                },
                [_vm._v("Save")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=template&id=5ebfa045&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=template&id=5ebfa045& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    {
      ref: "form",
      model: {
        value: _vm.valid,
        callback: function ($$v) {
          _vm.valid = $$v
        },
        expression: "valid",
      },
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [_vm._v("Nuevo producto")]),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { attrs: { "grid-list-mid": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("autocomplete", {
                            attrs: {
                              palceholder: "Escribir para buscar",
                              label: "Producto",
                              url: "/ajax/codbarras",
                            },
                            model: {
                              value: _vm.item.codbarras,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "codbarras", $$v)
                              },
                              expression: "item.codbarras",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("combobox", {
                            attrs: {
                              rules: _vm.proveedorRules,
                              url: "/ajax/proveedores",
                              label: "Proveedor",
                            },
                            model: {
                              value: _vm.item.proveedor,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "proveedor", $$v)
                              },
                              expression: "item.proveedor",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(
                        "\n\t\t\t\t    \t" +
                          _vm._s(_vm.item) +
                          "\n\t\t\t\t    \t"
                      ),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("datepicker", {
                            ref: "fecha_entrada",
                            attrs: { label: "Fecha de entrada" },
                            model: {
                              value: _vm.item.fecha_entrada,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "fecha_entrada", $$v)
                              },
                              expression: "item.fecha_entrada",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "numeric",
                              label: "Precio de entrada",
                            },
                            model: {
                              value: _vm.item.precio_entrada,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "precio_entrada", $$v)
                              },
                              expression: "item.precio_entrada",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("datepicker", {
                            ref: "fecha_salida",
                            attrs: { label: "Fecha de salida" },
                            model: {
                              value: _vm.item.fecha_salida,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "fecha_salida", $$v)
                              },
                              expression: "item.fecha_salida",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "numeric",
                              label: "Precio de salida",
                              required: "",
                            },
                            model: {
                              value: _vm.item.precio_salida,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "precio_salida", $$v)
                              },
                              expression: "item.precio_salida",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs18: "", sm9: "", md6: "" } },
                        [
                          _c("autocomplete", {
                            attrs: {
                              label: "Cliente",
                              placeholder: "Escribir para buscar",
                              url: "/ajax/clientes",
                            },
                            model: {
                              value: _vm.item.cliente,
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "cliente", $$v)
                              },
                              expression: "item.cliente",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.serializado == true
                        ? _c(
                            "v-flex",
                            { attrs: { xs36: "", sm18: "", md12: "" } },
                            [
                              _c("combobox", {
                                attrs: {
                                  label: "Seriales",
                                  url: "/ajax/seriales",
                                  multiple: "",
                                  disabledAll: "",
                                },
                                model: {
                                  value: _vm.item.seriales,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.item, "seriales", $$v)
                                  },
                                  expression: "item.seriales",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
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
                  attrs: { color: "blue darken-1", text: "" },
                  on: { click: _vm.close },
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { disabled: !_vm.valid, color: "success", text: "" },
                  on: { click: _vm.save },
                },
                [_vm._v("Save")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=template&id=8b8e7a28&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=template&id=8b8e7a28& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "600px" },
      model: {
        value: _vm.state,
        callback: function ($$v) {
          _vm.state = $$v
        },
        expression: "state",
      },
    },
    [_c("newItemForm")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editItemForm_vue_vue_type_template_id_13e6c283___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editItemForm.vue?vue&type=template&id=13e6c283& */ "./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=template&id=13e6c283&");
/* harmony import */ var _editItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editItemForm.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editItemForm_vue_vue_type_template_id_13e6c283___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editItemForm_vue_vue_type_template_id_13e6c283___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./editItemForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=template&id=13e6c283&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=template&id=13e6c283& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editItemForm_vue_vue_type_template_id_13e6c283___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./editItemForm.vue?vue&type=template&id=13e6c283& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/editItemForm.vue?vue&type=template&id=13e6c283&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editItemForm_vue_vue_type_template_id_13e6c283___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editItemForm_vue_vue_type_template_id_13e6c283___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newItemForm_vue_vue_type_template_id_5ebfa045___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItemForm.vue?vue&type=template&id=5ebfa045& */ "./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=template&id=5ebfa045&");
/* harmony import */ var _newItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newItemForm.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newItemForm_vue_vue_type_template_id_5ebfa045___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newItemForm_vue_vue_type_template_id_5ebfa045___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./newItemForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=template&id=5ebfa045&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=template&id=5ebfa045& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newItemForm_vue_vue_type_template_id_5ebfa045___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./newItemForm.vue?vue&type=template&id=5ebfa045& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/newItemForm.vue?vue&type=template&id=5ebfa045&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newItemForm_vue_vue_type_template_id_5ebfa045___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newItemForm_vue_vue_type_template_id_5ebfa045___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/stockDialog.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/stockDialog.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stockDialog_vue_vue_type_template_id_8b8e7a28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockDialog.vue?vue&type=template&id=8b8e7a28& */ "./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=template&id=8b8e7a28&");
/* harmony import */ var _stockDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stockDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _stockDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stockDialog_vue_vue_type_template_id_8b8e7a28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stockDialog_vue_vue_type_template_id_8b8e7a28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/stock/vdialogs/stockDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./stockDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=template&id=8b8e7a28&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=template&id=8b8e7a28& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stockDialog_vue_vue_type_template_id_8b8e7a28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./stockDialog.vue?vue&type=template&id=8b8e7a28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/stockDialog.vue?vue&type=template&id=8b8e7a28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stockDialog_vue_vue_type_template_id_8b8e7a28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stockDialog_vue_vue_type_template_id_8b8e7a28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);