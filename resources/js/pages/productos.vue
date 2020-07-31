<template>
    <v-card>
        <v-card-title>
        
        </v-card-title>
        <datatable
            @new-item="newItem"
            :headers="headers"
            :items="items"
            classProp="elevation-1"
            :url="url"
            title="Productos"
        >
        </datatable>
        <zdialog
            :active="dialog"
            persistent
            title="Productos"
        >
        </zdialog>
    </v-card>    
</template>
<script>
    import {combobox, datatable, zdialog} from '../components'
    export default {
        components: {
            combobox,
            datatable,
            zdialog
        },
        data () {
            return {
                dialog: false,
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
        methods:{
            newItem()
            {
                this.dialog = true;
            }
        }
    }
</script>
