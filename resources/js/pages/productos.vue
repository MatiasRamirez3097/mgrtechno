<template>
    <v-card>
      <v-card-title>
        
      </v-card-title>
      <datatable
        :loading="loading" 
        :headers="headers"
        :items="items"
        classProp="elevation-1"
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
              text: 'Name', 
              value: 'name'
            },
            {
              text: 'Surname',
              value: 'surname'
            }
          ],
          loading: false,
          search: "",
          items: []
        }
    },
  }

</script>
