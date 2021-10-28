(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getSearch', 'getDisponible', 'getRunSearch'])), {}, {
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
var render = function () {
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
          "hide-details": "",
        },
        model: {
          value: _vm.search,
          callback: function ($$v) {
            _vm.search = $$v
          },
          expression: "search",
        },
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
            click: function ($event) {
              return _vm.newItem()
            },
          },
        },
        [_vm._v("New Item")]
      ),
      _vm._v(" "),
      _c("stockDialog"),
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
var render = function () {
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
      "show-select": "",
    },
    on: {
      "update:expanded": function ($event) {
        _vm.expanded = $event
      },
      "update:options": function ($event) {
        _vm.options = $event
      },
    },
    scopedSlots: _vm._u([
      {
        key: "top",
        fn: function () {
          return [_c("slottop")]
        },
        proxy: true,
      },
      {
        key: "expanded-item",
        fn: function (ref) {
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
                        _c("th", [_vm._v("Domicilio")]),
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
                        _c("td", [_vm._v(_vm._s(item.domicilio))]),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
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
                    return _vm.outItem(item)
                  },
                },
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
                  click: function ($event) {
                    return _vm.editItem(item)
                  },
                },
              },
              [_vm._v("\n        edit\n      ")]
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
              [_vm._v("\n        delete\n      ")]
            ),
          ]
        },
      },
    ]),
    model: {
      value: _vm.multiSalida,
      callback: function ($$v) {
        _vm.multiSalida = $$v
      },
      expression: "multiSalida",
    },
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
var render = function () {
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
                callback: function ($$v) {
                  _vm.disponible = $$v
                },
                expression: "disponible",
              },
            },
            [
              _c("v-radio", { attrs: { label: "Todos", value: "todos" } }),
              _vm._v(" "),
              _c("v-radio", {
                attrs: { label: "Disponible", value: "disponible" },
              }),
              _vm._v(" "),
              _c("v-radio", {
                attrs: { label: "No disponible", value: "nodisponible" },
              }),
            ],
            1
          ),
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
            callback: function ($$v) {
              _vm.multiDialog = $$v
            },
            expression: "multiDialog",
          },
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
                        fn: function (ref) {
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
                                  "min-width": "290px",
                                },
                                on: {
                                  "update:returnValue": function ($event) {
                                    return _vm.$set(item, "fecha_open", $event)
                                  },
                                  "update:return-value": function ($event) {
                                    return _vm.$set(item, "fecha_open", $event)
                                  },
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function (ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: "Fecha de salida",
                                                  "prepend-icon": "event",
                                                  readonly: "",
                                                },
                                                model: {
                                                  value: item.fecha_salida,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      item,
                                                      "fecha_salida",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "item.fecha_salida",
                                                },
                                              },
                                              on
                                            )
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                                model: {
                                  value: item.fecha_open,
                                  callback: function ($$v) {
                                    _vm.$set(item, "fecha_open", $$v)
                                  },
                                  expression: "item.fecha_open",
                                },
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-date-picker",
                                  {
                                    attrs: {
                                      locale: "es-419",
                                      "no-title": "",
                                      scrollable: "",
                                    },
                                    model: {
                                      value: item.fecha_salida,
                                      callback: function ($$v) {
                                        _vm.$set(item, "fecha_salida", $$v)
                                      },
                                      expression: "item.fecha_salida",
                                    },
                                  },
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { text: "", color: "primary" },
                                        on: {
                                          click: function ($event) {
                                            item.fecha_open = false
                                          },
                                        },
                                      },
                                      [_vm._v("Cancel")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { text: "", color: "primary" },
                                        on: {
                                          click: function ($event) {
                                            _vm.$refs[
                                              "fecha_salida" + item.id
                                            ].save(item.fecha_salida)
                                          },
                                        },
                                      },
                                      [_vm._v("OK")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                      {
                        key: "item.precio_salida",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            _c("v-text-field", {
                              attrs: {
                                type: "numeric",
                                label: "Precio de salida",
                                required: "",
                              },
                              model: {
                                value: item.precio_salida,
                                callback: function ($$v) {
                                  _vm.$set(item, "precio_salida", $$v)
                                },
                                expression: "item.precio_salida",
                              },
                            }),
                          ]
                        },
                      },
                    ]),
                  }),
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
                      on: { click: _vm.multiClose },
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.multiSave },
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
      ),
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