(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/slottop.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/slottop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vdialogs_stockDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vdialogs/stockDialog */ "./resources/js/components/tables/stock/vdialogs/stockDialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    stockDialog: _vdialogs_stockDialog__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    search: {
      get: function get() {
        return this.$store.getters.getSearch;
      },
      set: function set(value) {
        this.$store.commit('setSearch', value);
      }
    }
  },
  data: function data() {
    return {
      //search: null,
      dialog: false,
      valid: true
    };
  },
  methods: {
    close: function close() {
      var _this = this;

      this.search = false;
      setTimeout(function () {
        _this.selectedItem = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1;

        _this.getDataFromApi();
      }, 300);
    },
    newItem: function newItem() {
      //this.formTitle = "Nuevo producto"
      this.$store.commit('setAction', 'nuevo');
      this.$store.commit('setDialog', true); //this.selectedItem = Object.assign({}, this.defaultItem)
      //this.dialog = true  
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      val: this["default"],
      items: null,
      search: ''
    };
  },
  methods: {
    save: function save() {
      this.$emit('input', this.val);
    }
  },
  props: ['label', 'placeholder', 'url', 'value', 'default', 'itemsValue'],
  watch: {
    val: {
      handler: function handler() {
        this.save();
      },
      deep: true
    },
    search: function search(val) {
      var _this = this;

      this.isLoading = true;
      axios.post(this.url, {
        search: val
      }).then(function (response) {
        _this.items = response.data;
        _this.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _data$methods$props$p;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = (_data$methods$props$p = {
  data: function data() {
    return {
      search: null,
      val: this["default"],
      values: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.post(this.url, {
        search: this.search
      }).then(function (response) {
        if (_this.disabledAll == true) {
          var filter = _this["default"];
          var a = [];
          response.data.forEach(function (item) {
            if (item.text != filter) {
              a.push({
                value: item.value,
                disabled: true,
                text: item.text
              });
            } else if (item.text == filter) {
              console.log(item.value);
              a.push({
                value: item.value,
                disabled: false,
                text: item.text
              });
            }
          });
          _this.values = a;
        } else {
          _this.values = response.data;
        }
      });
    },
    save: function save() {
      this.$emit('input', this.val);
    }
  },
  props: ['url', 'rules', 'label', 'disabledAll', 'multiple', 'default']
}, _defineProperty(_data$methods$props$p, "props", {
  url: {
    type: String
  },
  rules: {
    type: Array
  },
  label: {
    type: String
  },
  disabledAll: {
    type: Boolean
  },
  multiple: {
    type: Boolean
  },
  "default": {}
}), _defineProperty(_data$methods$props$p, "watch", {
  search: {
    handler: function handler() {
      this.getData();
    },
    deep: true
  },
  val: {
    handler: function handler() {
      this.save();
    },
    deep: true
  }
}), _data$methods$props$p);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fecha: false,
      fecha_value: this["default"],
      fecha_entradaRules: [function (v) {
        return !!v || 'Fecha de entrada requerida';
      }]
    };
  },
  props: ['label', 'value', 'default'],
  methods: {
    save: function save(value) {
      this.$refs.fecha.save(this.fecha_value);
      this.$emit('input', this.fecha_value);
    }
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stocktable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stocktable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _stock_slottop_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock/slottop.vue */ "./resources/js/components/tables/stock/slottop.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    slottop: _stock_slottop_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getSearch', 'getDisponible', 'getRunSearch']), {
    edititem: {
      get: function get() {
        return this.$store.getters.getSelectedItem;
      },
      set: function set(value) {
        this.$store.commit('setSelectedItem', value);
      }
    }
  }),
  data: function data() {
    return {
      disponible: null,
      loading: true,
      options: {},
      totalDesserts: 0,
      desserts: [],
      search: '',
      singleExpand: false,
      expanded: [],
      multiSalida: [],
      headers: [{
        text: 'Modelo',
        value: 'modelo'
      }, {
        text: 'Marca',
        value: 'marca'
      }, {
        text: 'Serial',
        value: 'serial'
      }, {
        text: 'Proveedor',
        value: 'proveedor'
      }, {
        text: 'Fecha de entrada',
        value: 'fecha_entrada'
      }, {
        text: 'Precio de entrada',
        value: 'precio_entrada'
      }, {
        text: 'Fecha de salida',
        value: 'fecha_salida'
      }, {
        text: 'Precio de salida',
        value: 'precio_salida'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }]
    };
  },
  methods: {
    editItem: function editItem(item) {
      this.$store.commit('setDialog', true);
      this.$store.commit('setItem', item);
      this.$store.commit('setAction', 'editar');
    },
    close: function close() {
      var _this = this;

      this.dialog = false;
      setTimeout(function () {
        _this.selectedItem = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1;

        _this.getDataFromApi();
      }, 300);
    },
    getDataFromApi: function getDataFromApi() {
      var _this2 = this;

      this.loading = true;
      var _this$options = this.options,
          sortBy = _this$options.sortBy,
          descending = _this$options.descending,
          page = _this$options.page,
          itemsPerPage = _this$options.itemsPerPage,
          sortDesc = _this$options.sortDesc;
      axios.post('/datatables/getstock', {
        datafilter: this.disponible,
        sortDesc: this.options.sortDesc,
        search: this.search,
        sortBy: this.options.sortBy,
        descending: this.options.descending,
        page: this.options.page,
        itemsPerPage: this.options.itemsPerPage
      }).then(function (response) {
        _this2.desserts = response.data.data;
        _this2.totalDesserts = response.data.total;
        _this2.loading = false;

        _this2.$store.commit('setRunSearch', false);
      });
    }
  },
  mounted: function mounted() {
    this.getDataFromApi();
  },
  watch: {
    getSearch: function getSearch(newValue, oldValue) {
      //handler () {
      this.search = newValue;
      this.getDataFromApi();
    },
    getDisponible: function getDisponible(newValue, oldValue) {
      //handler () {
      this.disponible = newValue;
      this.getDataFromApi();
    },
    getRunSearch: function getRunSearch(newValue, oldValue) {
      this.getDataFromApi();
    },
    options: {
      handler: function handler() {
        this.getDataFromApi();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/stock.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/stock.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tables_stocktable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tables/stocktable */ "./resources/js/components/tables/stocktable.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    stocktable: _components_tables_stocktable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      salidaTotal: 0,
      item_fecha_salida: false,
      multiprecio: [],
      multiDialog: false,
      multiSalida: [],
      singleExpand: false,
      expanded: [],
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      isLoadingClientes: false,
      model: null,
      searchAuto: null,
      searchAutoClientes: null,
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

      /*fecha_salidaRules: [
        v => !!v || 'Fecha de salida requerida'
      ],*/
      //disponible: "todos",
      valid: true,
      formTitle: "",
      fecha_entrada: false,
      fecha_salida: false,
      comboboxes: {
        fields: {
          codbarras: [],
          tipos: [],
          marcas: [],
          proveedores: [],
          seriales: [],
          clientes: []
        },
        searching: {
          codbarras: null,
          tipo: null,
          marca: null,
          proveedor: null,
          seriales: null
        },
        loading: {
          proveedores: false,
          clientes: false
        }
      },
      dialog: false,
      search: '',
      totalDesserts: 0,
      desserts: [],
      loading: true,
      options: {},
      headers: [//{ text: 'Código UPC', value: 'upc' },
      //{ text: 'Código EAN', value: 'ean'},
      //{ text: 'Tipo de producto', value: 'tipo' },
      {
        text: 'Modelo',
        value: 'modelo'
      }, {
        text: 'Marca',
        value: 'marca'
      }, {
        text: 'Serial',
        value: 'serial'
      }, {
        text: 'Proveedor',
        value: 'proveedor'
      }, {
        text: 'Fecha de entrada',
        value: 'fecha_entrada'
      }, {
        text: 'Precio de entrada',
        value: 'precio_entrada'
      }, {
        text: 'Fecha de salida',
        value: 'fecha_salida'
      }, {
        text: 'Precio de salida',
        value: 'precio_salida'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }]
    }, _defineProperty(_ref, "headers", [//{ text: 'Código UPC', value: 'upc' },
    //{ text: 'Código EAN', value: 'ean'},
    //{ text: 'Tipo de producto', value: 'tipo' },
    {
      text: 'Modelo',
      value: 'modelo'
    }, {
      text: 'Marca',
      value: 'marca'
    }, {
      text: 'Serial',
      value: 'serial'
    }, {
      text: 'Proveedor',
      value: 'proveedor'
    }, {
      text: 'Fecha de entrada',
      value: 'fecha_entrada'
    }, {
      text: 'Precio de entrada',
      value: 'precio_entrada'
    }, {
      text: 'Fecha de salida',
      value: 'fecha_salida'
    }, {
      text: 'Precio de salida',
      value: 'precio_salida'
    }, {
      text: 'Actions',
      value: 'action',
      sortable: false
    }]), _defineProperty(_ref, "defaultItem", {
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
    }), _defineProperty(_ref, "selectedItem", {
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
    }), _ref;
  },
  computed: {
    disponible: {
      get: function get() {
        return this.$store.getters.getDisponible;
      },
      set: function set(value) {
        this.$store.commit('setDisponible', value);
      }
    },
    fullTitle: function fullTitle() {
      if (this.selectedItem.codbarras) {
        return this.formTitle + ': ' + this.selectedItem.codbarras.modelo;
      } else {
        return this.formTitle;
      }
    },
    formCalc: function formCalc() {
      if (this.formTitle == 'Eliminar producto' || this.formTitle == 'Salida producto') {
        return true;
      } else {
        return false;
      }
    },
    serializado: function serializado() {
      if (this.selectedItem.codbarras) {
        if (this.selectedItem.codbarras.serializado == true) {
          return true;
        }
      }

      return false;
    }
  },
  watch: {
    multiSalida: {
      handler: function handler() {
        if (this.multiSalida.length > this.salidaTotal) {
          this.multiSalida[this.multiSalida.length - 1].fecha_open = false;
          this.salidaTotal = this.salidaTotal + 1;
        } else {
          this.salidaTotal = this.salidaTotal - 1;
        }
      },
      deep: true
    },
    disponible: {
      handler: function handler() {
        this.getDataFromApi();
      },
      deep: true
    },
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
    searchAuto: function searchAuto(val) {
      var _this = this;

      this.isLoading = true;
      axios.post('/ajax/codbarras', {
        search: val
      }).then(function (response) {
        _this.comboboxes.fields.codbarras = response.data;
        _this.isLoading = false;
      });
    },
    searchAutoClientes: function searchAutoClientes(val) {
      var _this2 = this;

      this.comboboxes.loading.clientes = true;
      axios.post('/ajax/clientes', {
        search: val
      }).then(function (response) {
        _this2.comboboxes.fields.clientes = response.data;
        _this2.isLoadingClientes = false;
      });
    },
    'comboboxes.searching.proveedor': function comboboxesSearchingProveedor(val) {
      var _this3 = this;

      this.comboboxes.loading.proveedores = true;
      axios.post('/ajax/proveedores', {
        search: val
      }).then(function (response) {
        _this3.comboboxes.fields.proveedores = response.data;
        _this3.comboboxes.loading.proveedores = false;
      });
    }
  },
  methods: {
    multiInit: function multiInit() {
      this.multiDialog = true;
    },
    fields: function fields() {
      var _this4 = this;

      if (!this.model) return [];
      return Object.keys(this.model).map(function (key) {
        return {
          key: key,
          value: _this4.model[key] || 'n/a'
        };
      });
    },
    items: function items() {
      var _this5 = this;

      return this.entries.map(function (entry) {
        var Description = entry.Description.length > _this5.descriptionLimit ? entry.Description.slice(0, _this5.descriptionLimit) + '...' : entry.Description;
        return Object.assign({}, entry, {
          Description: Description
        });
      });
    },
    newItem: function newItem() {
      this.formTitle = "Nuevo producto";
      this.selectedItem = Object.assign({}, this.defaultItem);
      this.dialog = true;
    },
    editItem: function editItem(item) {
      this.formTitle = "Editar producto";

      if (item.upc != null) {
        this.searchAuto = item.upc;
      } else {
        this.searchAuto = item.ean;
      }

      this.searchAutoClientes = item.nombre;
      this.selectedItem = Object.assign({}, {
        id: item.id,
        codbarras: {
          id: item.productos_id,
          upc: item.upc,
          ean: item.ean,
          modelo: item.modelo,
          serializado: item.serializado
        },
        tipo: item.tipo,
        marca: item.marca,
        modelo: item.modelo,
        proveedor: {
          value: item.proveedores_id,
          text: item.proveedor
        },
        cliente: {
          nombre: item.nombre,
          apellido: item.apellido,
          id: item.clienteid,
          documento: item.documento,
          domicilio: item.domicilio,
          correo: item.correo
        },
        fecha_entrada: item.fecha_entrada,
        fecha_salida: item.fecha_salida,
        precio_entrada: item.precio_entrada,
        precio_salida: item.precio_salida,
        serial: item.serial
      });
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.formTitle = "Eliminar producto";
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
    },
    outItem: function outItem(item) {
      this.formTitle = "Salida producto";
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close: function close() {
      var _this6 = this;

      this.dialog = false;
      setTimeout(function () {
        _this6.selectedItem = Object.assign({}, _this6.defaultItem);
        _this6.editedIndex = -1;

        _this6.getDataFromApi();
      }, 300);
    },
    save: function save() {
      if (this.formTitle == "Nuevo producto") {
        axios.post('/admin/stock/nuevo', this.selectedItem).then(function (response) {});
      } else if (this.formTitle == "Editar producto") {
        axios.post('/admin/stock/editar', this.selectedItem).then(function (response) {});
      } else if (this.formTitle == "Eliminar producto") {
        axios.post('/admin/stock/eliminar', {
          id: this.selectedItem.id
        }).then(function (response) {});
      }

      this.close();
    },
    //CARGAR COMBOBOX
    //cargarSelects: function()
    //{
    //this.getTiposProductos();
    //this.getMarcas();
    //this.getCodbarras();
    //this.getProveedores();
    //this.getSeriales();
    //},
    getTiposProductos: function getTiposProductos() {
      var _this7 = this;

      axios.post('/ajax/tiposprods').then(function (response) {
        _this7.comboboxes.fields.tipos = response.data;
      });
    },
    getMarcas: function getMarcas() {
      var _this8 = this;

      axios.get('/ajax/marcas').then(function (response) {
        _this8.comboboxes.fields.marcas = response.data;
      });
    },
    getCodbarras: function getCodbarras() {
      var _this9 = this;

      axios.get('/ajax/codbarras').then(function (response) {
        _this9.comboboxes.fields.codbarras = response.data;
      });
    },
    getProveedores: function getProveedores() {
      var _this10 = this;

      axios.get('/ajax/proveedores').then(function (response) {
        _this10.comboboxes.fields.proveedores = response.data;
      });
    },
    getSeriales: function getSeriales() {
      var _this11 = this;

      axios.get('/ajax/seriales').then(function (response) {
        var a = [];
        console.log(response.data);
        response.data.forEach(function (item) {
          a.push({
            value: item.value,
            disabled: true,
            text: item.text
          });
        });
        _this11.comboboxes.fields.seriales = a;
      });
    },
    multiClose: function multiClose() {
      this.multiDialog = false;
    },
    multiSave: function multiSave() {
      axios.post('/stock/multisalida', this.multiSalida).then(function (response) {
        console.log(response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/slottop.vue?vue&type=template&id=4f25e582&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/slottop.vue?vue&type=template&id=4f25e582& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "v-toolbar",
    { attrs: { flat: "" } },
    [
      _c("v-toolbar-title", [_vm._v("Productos")]),
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
      ),
      _vm._v(" "),
      _c("stockDialog")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      ref: "form",
      model: {
        value: _vm.valid,
        callback: function($$v) {
          _vm.valid = $$v
        },
        expression: "valid"
      }
    },
    [
      _vm._v("\n\t\t" + _vm._s(_vm.item) + "\n\t\t"),
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [_vm._v("Editar producto")])
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
                              url: "/ajax/codbarras"
                            },
                            model: {
                              value: _vm.item.codbarras,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "codbarras", $$v)
                              },
                              expression: "item.codbarras"
                            }
                          })
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
                              label: "Proveedor"
                            },
                            model: {
                              value: _vm.item.proveedor,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "proveedor", $$v)
                              },
                              expression: "item.proveedor"
                            }
                          })
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
                              label: "Fecha de entrada"
                            },
                            model: {
                              value: _vm.item.fecha_entrada,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "fecha_entrada", $$v)
                              },
                              expression: "item.fecha_entrada"
                            }
                          })
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
                              label: "Precio de entrada"
                            },
                            model: {
                              value: _vm.item.precio_entrada,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "precio_entrada", $$v)
                              },
                              expression: "item.precio_entrada"
                            }
                          })
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
                              label: "Fecha de salida"
                            },
                            model: {
                              value: _vm.item.fecha_salida,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "fecha_salida", $$v)
                              },
                              expression: "item.fecha_salida"
                            }
                          })
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
                              required: ""
                            },
                            model: {
                              value: _vm.item.precio_salida,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "precio_salida", $$v)
                              },
                              expression: "item.precio_salida"
                            }
                          })
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
                              url: "/ajax/clientes"
                            },
                            model: {
                              value: _vm.item.cliente,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "cliente", $$v)
                              },
                              expression: "item.cliente"
                            }
                          })
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
                                  url: "/ajax/seriales"
                                },
                                model: {
                                  value: _vm.item.serial,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "serial", $$v)
                                  },
                                  expression: "item.serial"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
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
                  attrs: { color: "blue darken-1", text: "" },
                  on: { click: _vm.close }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { disabled: !_vm.valid, color: "success", text: "" },
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=template&id=b31eb710&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=template&id=b31eb710& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-autocomplete", {
    attrs: {
      items: _vm.items,
      loading: _vm.isLoading,
      "search-input": _vm.search,
      color: "white",
      "hide-no-data": "",
      "hide-selected": "",
      "item-text": "text",
      "item-value": _vm.itemsValue,
      "no-filter": "",
      label: _vm.label,
      placeholder: _vm.placeholder,
      "prepend-icon": "mdi-database-search",
      "return-object": ""
    },
    on: {
      "update:searchInput": function($event) {
        _vm.search = $event
      },
      "update:search-input": function($event) {
        _vm.search = $event
      }
    },
    scopedSlots: _vm._u([
      {
        key: "item",
        fn: function(item) {
          return [
            _c(
              "v-list-item-content",
              [
                item.item.modelo
                  ? _c("v-list-item-title", {
                      domProps: {
                        innerHTML: _vm._s(
                          item.item.marca + " " + item.item.modelo
                        )
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                item.item.text
                  ? _c("v-list-item-title", {
                      domProps: {
                        innerHTML: _vm._s(
                          item.item.text + " " + item.item.apellido
                        )
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                item.item.documento
                  ? _c("v-list-item-subtitle", {
                      domProps: {
                        innerHTML: _vm._s("DNI:" + item.item.documento)
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                item.item.ean
                  ? _c("v-list-item-subtitle", {
                      domProps: { innerHTML: _vm._s("EAN:" + item.item.ean) }
                    })
                  : _vm._e(),
                _vm._v(" "),
                item.item.ean
                  ? _c("v-list-item-subtitle", {
                      domProps: { innerHTML: _vm._s("EAN:" + item.item.ean) }
                    })
                  : _vm._e(),
                _vm._v(" "),
                item.item.upc
                  ? _c("v-list-item-subtitle", {
                      domProps: { innerHTML: _vm._s("UPC:" + item.item.upc) }
                    })
                  : _vm._e()
              ],
              1
            )
          ]
        }
      }
    ]),
    model: {
      value: _vm.val,
      callback: function($$v) {
        _vm.val = $$v
      },
      expression: "val"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=template&id=05f650e6&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=template&id=05f650e6& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-combobox", {
    attrs: {
      items: _vm.values,
      "search-input": _vm.search,
      "hide-selected": "",
      hint: "Seleccione la marca, si no existe escribala",
      label: _vm.label,
      "no-filter": "",
      "persistent-hint": "",
      rules: _vm.rules,
      multiple: _vm.multiple
    },
    on: {
      "update:searchInput": function($event) {
        _vm.search = $event
      },
      "update:search-input": function($event) {
        _vm.search = $event
      }
    },
    scopedSlots: _vm._u([
      {
        key: "no-data",
        fn: function() {
          return [
            _c(
              "v-list-item",
              [
                _c(
                  "v-list-item-content",
                  [
                    _c("v-list-item-title", [
                      _vm._v('\n\t\t\t\t\tNo se encontraron resultados para "'),
                      _c("strong", [_vm._v(_vm._s(_vm.search))]),
                      _vm._v('". Presiona '),
                      _c("kbd", [_vm._v("enter")]),
                      _vm._v(" para crearlo\n\t\t\t\t")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        },
        proxy: true
      }
    ]),
    model: {
      value: _vm.val,
      callback: function($$v) {
        _vm.val = $$v
      },
      expression: "val"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=template&id=6bd5c64c&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=template&id=6bd5c64c& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    "v-menu",
    {
      ref: "fecha",
      attrs: {
        "close-on-content-click": false,
        "return-value": _vm.fecha_value,
        transition: "scale-transition",
        "offset-y": "",
        "full-width": "",
        "min-width": "290px"
      },
      on: {
        "update:returnValue": function($event) {
          _vm.fecha_value = $event
        },
        "update:return-value": function($event) {
          _vm.fecha_value = $event
        }
      },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            return [
              _c(
                "v-text-field",
                _vm._g(
                  {
                    attrs: {
                      label: _vm.label,
                      "prepend-icon": "event",
                      readonly: "",
                      rules: _vm.fecha_entradaRules
                    },
                    model: {
                      value: _vm.fecha_value,
                      callback: function($$v) {
                        _vm.fecha_value = $$v
                      },
                      expression: "fecha_value"
                    }
                  },
                  on
                )
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.fecha,
        callback: function($$v) {
          _vm.fecha = $$v
        },
        expression: "fecha"
      }
    },
    [
      _vm._v(" "),
      _c(
        "v-date-picker",
        {
          attrs: { locale: "es-419", "no-title": "", scrollable: "" },
          model: {
            value: _vm.fecha_value,
            callback: function($$v) {
              _vm.fecha_value = $$v
            },
            expression: "fecha_value"
          }
        },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "", color: "primary" },
              on: {
                click: function($event) {
                  _vm.fecha = false
                }
              }
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "", color: "primary" },
              on: {
                click: function($event) {
                  return _vm.save(_vm.fecha_value)
                }
              }
            },
            [_vm._v("OK")]
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      ref: "form",
      model: {
        value: _vm.valid,
        callback: function($$v) {
          _vm.valid = $$v
        },
        expression: "valid"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [_vm._v("Nuevo producto")])
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
                              url: "/ajax/codbarras"
                            },
                            model: {
                              value: _vm.item.codbarras,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "codbarras", $$v)
                              },
                              expression: "item.codbarras"
                            }
                          })
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
                              label: "Proveedor"
                            },
                            model: {
                              value: _vm.item.proveedor,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "proveedor", $$v)
                              },
                              expression: "item.proveedor"
                            }
                          })
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
                              callback: function($$v) {
                                _vm.$set(_vm.item, "fecha_entrada", $$v)
                              },
                              expression: "item.fecha_entrada"
                            }
                          })
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
                              label: "Precio de entrada"
                            },
                            model: {
                              value: _vm.item.precio_entrada,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "precio_entrada", $$v)
                              },
                              expression: "item.precio_entrada"
                            }
                          })
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
                              callback: function($$v) {
                                _vm.$set(_vm.item, "fecha_salida", $$v)
                              },
                              expression: "item.fecha_salida"
                            }
                          })
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
                              required: ""
                            },
                            model: {
                              value: _vm.item.precio_salida,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "precio_salida", $$v)
                              },
                              expression: "item.precio_salida"
                            }
                          })
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
                              url: "/ajax/clientes"
                            },
                            model: {
                              value: _vm.item.cliente,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "cliente", $$v)
                              },
                              expression: "item.cliente"
                            }
                          })
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
                                  disabledAll: ""
                                },
                                model: {
                                  value: _vm.item.seriales,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "seriales", $$v)
                                  },
                                  expression: "item.seriales"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
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
                  attrs: { color: "blue darken-1", text: "" },
                  on: { click: _vm.close }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { disabled: !_vm.valid, color: "success", text: "" },
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "600px" },
      model: {
        value: _vm.getDialog,
        callback: function($$v) {
          _vm.getDialog = $$v
        },
        expression: "getDialog"
      }
    },
    [
      _vm.getAction == "nuevo"
        ? _c("newItemForm")
        : _vm.getAction == "editar"
        ? _c("editItemForm")
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stocktable.vue?vue&type=template&id=5881d0a7&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/stocktable.vue?vue&type=template&id=5881d0a7& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      "single-expand": _vm.singleExpand,
      expanded: _vm.expanded,
      search: _vm.search,
      headers: _vm.headers,
      items: _vm.desserts,
      options: _vm.options,
      "server-items-length": _vm.totalDesserts,
      loading: _vm.loading,
      "show-expand": "",
      "show-select": ""
    },
    on: {
      "update:expanded": function($event) {
        _vm.expanded = $event
      },
      "update:options": function($event) {
        _vm.options = $event
      }
    },
    scopedSlots: _vm._u([
      {
        key: "top",
        fn: function() {
          return [_c("slottop")]
        },
        proxy: true
      },
      {
        key: "expanded-item",
        fn: function(ref) {
          var item = ref.item
          return [
            _c(
              "td",
              { attrs: { colspan: _vm.headers.length } },
              [
                _c(
                  "v-simple-table",
                  { attrs: { "fixed-header": "", allign: "center" } },
                  [
                    _c("tbody", [
                      _c("tr", [
                        _c("th", [_vm._v("Nombre")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Apellido")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Documento")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Domicilio")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(item.nombre))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.apellido))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.documento))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.email))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.domicilio))])
                      ])
                    ])
                  ]
                )
              ],
              1
            )
          ]
        }
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
                    return _vm.outItem(item)
                  }
                }
              },
              [_vm._v("\n        done\n      ")]
            ),
            _vm._v(" "),
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
              [_vm._v("\n        edit\n      ")]
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
              [_vm._v("\n        delete\n      ")]
            )
          ]
        }
      }
    ]),
    model: {
      value: _vm.multiSalida,
      callback: function($$v) {
        _vm.multiSalida = $$v
      },
      expression: "multiSalida"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/stock.vue?vue&type=template&id=7608247d&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/stock.vue?vue&type=template&id=7608247d& ***!
  \***************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        [
          _c(
            "v-radio-group",
            {
              attrs: { "hide-details": "", row: "" },
              model: {
                value: _vm.disponible,
                callback: function($$v) {
                  _vm.disponible = $$v
                },
                expression: "disponible"
              }
            },
            [
              _c("v-radio", { attrs: { label: "Todos", value: "todos" } }),
              _vm._v(" "),
              _c("v-radio", {
                attrs: { label: "Disponible", value: "disponible" }
              }),
              _vm._v(" "),
              _c("v-radio", {
                attrs: { label: "No disponible", value: "nodisponible" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("stocktable"),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "" },
          model: {
            value: _vm.multiDialog,
            callback: function($$v) {
              _vm.multiDialog = $$v
            },
            expression: "multiDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c("v-data-table", {
                    attrs: { items: _vm.multiSalida, headers: _vm.headers },
                    scopedSlots: _vm._u([
                      {
                        key: "item.fecha_salida",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-menu",
                              {
                                ref: "fecha_salida" + item.id,
                                attrs: {
                                  "close-on-content-click": false,
                                  "return-value": item.fecha_open,
                                  transition: "scale-transition",
                                  "offset-y": "",
                                  "full-width": "",
                                  "min-width": "290px"
                                },
                                on: {
                                  "update:returnValue": function($event) {
                                    return _vm.$set(item, "fecha_open", $event)
                                  },
                                  "update:return-value": function($event) {
                                    return _vm.$set(item, "fecha_open", $event)
                                  }
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: "Fecha de salida",
                                                  "prepend-icon": "event",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: item.fecha_salida,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      item,
                                                      "fecha_salida",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "item.fecha_salida"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                ),
                                model: {
                                  value: item.fecha_open,
                                  callback: function($$v) {
                                    _vm.$set(item, "fecha_open", $$v)
                                  },
                                  expression: "item.fecha_open"
                                }
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-date-picker",
                                  {
                                    attrs: {
                                      locale: "es-419",
                                      "no-title": "",
                                      scrollable: ""
                                    },
                                    model: {
                                      value: item.fecha_salida,
                                      callback: function($$v) {
                                        _vm.$set(item, "fecha_salida", $$v)
                                      },
                                      expression: "item.fecha_salida"
                                    }
                                  },
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { text: "", color: "primary" },
                                        on: {
                                          click: function($event) {
                                            item.fecha_open = false
                                          }
                                        }
                                      },
                                      [_vm._v("Cancel")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { text: "", color: "primary" },
                                        on: {
                                          click: function($event) {
                                            _vm.$refs[
                                              "fecha_salida" + item.id
                                            ].save(item.fecha_salida)
                                          }
                                        }
                                      },
                                      [_vm._v("OK")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        }
                      },
                      {
                        key: "item.precio_salida",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-text-field", {
                              attrs: {
                                type: "numeric",
                                label: "Precio de salida",
                                required: ""
                              },
                              model: {
                                value: item.precio_salida,
                                callback: function($$v) {
                                  _vm.$set(item, "precio_salida", $$v)
                                },
                                expression: "item.precio_salida"
                              }
                            })
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.multiClose }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.multiSave }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/tables/stock/slottop.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/tables/stock/slottop.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slottop_vue_vue_type_template_id_4f25e582___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slottop.vue?vue&type=template&id=4f25e582& */ "./resources/js/components/tables/stock/slottop.vue?vue&type=template&id=4f25e582&");
/* harmony import */ var _slottop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slottop.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/stock/slottop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _slottop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _slottop_vue_vue_type_template_id_4f25e582___WEBPACK_IMPORTED_MODULE_0__["render"],
  _slottop_vue_vue_type_template_id_4f25e582___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/stock/slottop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/stock/slottop.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/tables/stock/slottop.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slottop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./slottop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/slottop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slottop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/stock/slottop.vue?vue&type=template&id=4f25e582&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/slottop.vue?vue&type=template&id=4f25e582& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slottop_vue_vue_type_template_id_4f25e582___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./slottop.vue?vue&type=template&id=4f25e582& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/slottop.vue?vue&type=template&id=4f25e582&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slottop_vue_vue_type_template_id_4f25e582___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slottop_vue_vue_type_template_id_4f25e582___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete_vue_vue_type_template_id_b31eb710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete.vue?vue&type=template&id=b31eb710& */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=template&id=b31eb710&");
/* harmony import */ var _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _autocomplete_vue_vue_type_template_id_b31eb710___WEBPACK_IMPORTED_MODULE_0__["render"],
  _autocomplete_vue_vue_type_template_id_b31eb710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./autocomplete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=template&id=b31eb710&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=template&id=b31eb710& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_b31eb710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./autocomplete.vue?vue&type=template&id=b31eb710& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/autocomplete.vue?vue&type=template&id=b31eb710&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_b31eb710___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_b31eb710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _combobox_vue_vue_type_template_id_05f650e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combobox.vue?vue&type=template&id=05f650e6& */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=template&id=05f650e6&");
/* harmony import */ var _combobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combobox.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _combobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _combobox_vue_vue_type_template_id_05f650e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _combobox_vue_vue_type_template_id_05f650e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_combobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./combobox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_combobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=template&id=05f650e6&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=template&id=05f650e6& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_combobox_vue_vue_type_template_id_05f650e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./combobox.vue?vue&type=template&id=05f650e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/combobox.vue?vue&type=template&id=05f650e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_combobox_vue_vue_type_template_id_05f650e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_combobox_vue_vue_type_template_id_05f650e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datepicker_vue_vue_type_template_id_6bd5c64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datepicker.vue?vue&type=template&id=6bd5c64c& */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=template&id=6bd5c64c&");
/* harmony import */ var _datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _datepicker_vue_vue_type_template_id_6bd5c64c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _datepicker_vue_vue_type_template_id_6bd5c64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./datepicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=template&id=6bd5c64c&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=template&id=6bd5c64c& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datepicker_vue_vue_type_template_id_6bd5c64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./datepicker.vue?vue&type=template&id=6bd5c64c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stock/vdialogs/forms/formInputs/datepicker.vue?vue&type=template&id=6bd5c64c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datepicker_vue_vue_type_template_id_6bd5c64c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datepicker_vue_vue_type_template_id_6bd5c64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/components/tables/stocktable.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/tables/stocktable.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stocktable_vue_vue_type_template_id_5881d0a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocktable.vue?vue&type=template&id=5881d0a7& */ "./resources/js/components/tables/stocktable.vue?vue&type=template&id=5881d0a7&");
/* harmony import */ var _stocktable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocktable.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/stocktable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _stocktable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stocktable_vue_vue_type_template_id_5881d0a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stocktable_vue_vue_type_template_id_5881d0a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/stocktable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/stocktable.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/tables/stocktable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./stocktable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stocktable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/stocktable.vue?vue&type=template&id=5881d0a7&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/tables/stocktable.vue?vue&type=template&id=5881d0a7& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktable_vue_vue_type_template_id_5881d0a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./stocktable.vue?vue&type=template&id=5881d0a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/stocktable.vue?vue&type=template&id=5881d0a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktable_vue_vue_type_template_id_5881d0a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktable_vue_vue_type_template_id_5881d0a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/stock.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/stock.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stock_vue_vue_type_template_id_7608247d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock.vue?vue&type=template&id=7608247d& */ "./resources/js/pages/stock.vue?vue&type=template&id=7608247d&");
/* harmony import */ var _stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock.vue?vue&type=script&lang=js& */ "./resources/js/pages/stock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stock_vue_vue_type_template_id_7608247d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stock_vue_vue_type_template_id_7608247d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/stock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/stock.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/stock.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./stock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/stock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/stock.vue?vue&type=template&id=7608247d&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/stock.vue?vue&type=template&id=7608247d& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_template_id_7608247d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./stock.vue?vue&type=template&id=7608247d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/stock.vue?vue&type=template&id=7608247d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_template_id_7608247d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_template_id_7608247d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);