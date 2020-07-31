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
            title="Clientes"
        >
        </datatable>
        <zdialog
            :active="dialog"
            persistent
            title="Clientes"
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
                        text: 'Nombre',
                        value: 'nombre'
                    },
                ],
                url: '/datatables/getclientes',
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
