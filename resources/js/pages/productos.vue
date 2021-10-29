<template>
    <v-card>
        <v-card-title> </v-card-title>
        <datatable
            title="Compras" 
			:headers="headers" 
			v-on:edit="dialEdit" 
			v-on:new="open" 
			url="/datatables/getproductos">
        >
        </datatable>
    </v-card>
</template>
<script>
import { combobox, datatable } from "../components";
export default {
    components: {
        combobox,
        datatable,
    },
    data() {
        return {
            headers: [
                { text: "Tipo", value: "tipo" },
                { text: "Marca", value: "marca" },
                { text: "Modelo", value: "modelo" },
                { text: "EAN", value: "ean" },
                { text: "EAN", value: "upc" },
                { text: "Cantidad", value: "cantidad" },
            ],
            loading: false,
            search: "",
            items: [],
        };
    },
};
</script>
