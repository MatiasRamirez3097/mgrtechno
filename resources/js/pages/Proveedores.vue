<template>
    <v-card>
        <datatable
            :headers="headers"
            title="Proveedores"
        >
        </datatable>
    </v-card>
</template>
<script>
    import {datatable} from '../components';
    export default {
        components: {
            datatable
        },
        data () {
            return {
                headers:[
                    {
                        text: 'Nombre',
                        value: 'nombre'
                    }
                ],
                url:'/datatables/getproveedores'
            }
        },
    }

</script>