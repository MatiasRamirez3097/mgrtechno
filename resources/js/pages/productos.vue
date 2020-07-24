<template>
    <v-card>
        <datatable title="Productos" :headers="headers" v-on:edit="dialEdit" v-on:new="val = true" url="/datatables/getproductos"></datatable>        
      
    </v-card>
</template>
<script>
  import vdialog from '../components/tables/stock/vdialogs/stockDialog.vue'
  import datatable from '../components/tables/datatable.vue'
  export default {
    components:
    {
      datatable,
      vdialog
    },
    data () {
      return {
        formTitle: "",
        comboboxes:
        {
          fields:{
            tipos: [],
            marcas: []  
          },
          searching:{
            tipo: null,
            marca: null
          },
          loading:
          {
            tipo: false,
            marca: false
          }
        },
        dialog: false,
        search:'',
        totalDesserts: 0,
        desserts: [],
        loading: true,
        options: {},
        headers: [
          { text: 'Código UPC', value: 'upc' },
          { text: 'Código EAN', value: 'ean'},
          { text: 'Tipo de producto', value: 'tipo.descripcion' },
          { text: 'Modelo', value: 'modelo' },
          { text: 'Marca', value: 'marca.descripcion' },
          { text: 'Serializado', value: 'serializado'},
          { text: 'Actions', value: 'action', sortable: false },
        ],
        //EXPERIMENTAL
        editedIndex: -1,
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
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
      }
    },
    computed:
    {
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
      /*search:{
        handler () {
          this.getDataFromApi()
        },
        deep: true,
      },
      options: {
        handler () {
          this.getDataFromApi()
        },
        deep: true,
      },
      dialog (val) {
        val || this.close()
      },
      'comboboxes.searching.tipo' (val) {
        this.comboboxes.loading.tipo = true
        axios.post('/ajax/tiposprods',
          {
            search:val
          }).then(response => {
            this.comboboxes.fields.tipos = response.data;
            this.comboboxes.loading.tipo = false;
        });
      },
      'comboboxes.searching.marca' (val) {
        this.comboboxes.loading.marca = true
        axios.post('/ajax/marcas',
          {
            search:val  
          }).then(response => {
            this.comboboxes.fields.marcas = response.data;
            this.comboboxes.loading.marca = false
          });
      }*/
    },
    mounted () {
      //this.getDataFromApi()
      //this.cargarSelects()
    },
    methods: {
      dialEdit(value)
      {
        this.val = value
      },
      getColor(item)
      {
        if(item == true)
        {
          return 'green'
        }
        else
        {
          return 'red'
        }
      },
      getLabel(item)
      {
        if(item == true)
        {
          return 'Activo'
        }
        else
        {
          return 'Inactivo'
        }
      },
      getDataFromApi () {
        this.loading = true
          const { sortBy, descending, page, itemsPerPage, sortDesc } = this.options
          axios.post('/datatables/getproductos',
          {
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
          });
      },
      initialize () {
        this.getDataFromApi();
      },
      newItem ()
      {
        this.formTitle = "Nuevo producto"
        this.selectedItem = Object.assign({}, this.defaultItem)
        this.dialog = true  
      },
      editItem (item) {
        this.formTitle = "Editar producto"
        this.selectedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.formTitle = "Eliminar producto"
        this.selectedItem = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.selectedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
          this.getDataFromApi();
        }, 300)
      },

      save () {
        if(this.formTitle == "Nuevo producto")
        {
          axios.post('/admin/productos/nuevo',
                  this.dataForPost
                ).then(response => {
                  
                });
        }
        else if(this.formTitle == "Editar producto")
        {
          axios.post('/admin/productos/editar',
                this.dataForPost
                ).then(response => {
                  
                });
        }
        else if(this.formTitle == "Eliminar producto")
        {
            axios.post('/admin/productos/eliminar',
                {id:this.selectedItem.id}).then(response => {
                    
                });   
        }
        this.close()
      }
      //CARGAR COMBOBOX
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
    
    },
  }

</script>