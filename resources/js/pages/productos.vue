<template>
    <v-card>
      {{search}}
      <v-card-title>
         Stock
        <combobox 
          label="hola" 
          noFilter 
          items="['asd']" 
          v-model="search"
          hideSelected
          noData="no data"
        >
        </combobox>
      </v-card-title>
    </v-card>
    
</template>
<script>
  import {combobox} from '../components'
  export default {
    components: {
      combobox
    },
    data () {
      return {
          search: "a",
        }
    },
  }

</script>
