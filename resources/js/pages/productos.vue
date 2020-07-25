<template>
    <v-card>
      <v-card-title>
        
      </v-card-title>
      <datatable
        :headers="headers"
        :items="items"
        classProp="elevation-1"
        :url="url"
      >
      </datatable>
    </v-card>
    
</template>
<script>
  import {combobox, datatable} from '../components'
  export default {
    components: {
      combobox,
      datatable
    },
    data () {
      return {
          headers: [
            {
              text: 'ID', 
              value: 'id'
            },
            {
              text: 'Tipo',
              value: 'tipo'
            },
            {
              text: 'Marca',
              value: 'marca'
            },
            {
              text: 'Modelo',
              value: 'modelo'
            },
            {
              text: 'UPC/EAN',
              value: 'codbarras'
            },
            {
              text: 'Cantidad',
              value: 'cantidad'
            }
          ],
          url: '/datatables/getproductos',
          items: []
        }
    },
  }
</script>
