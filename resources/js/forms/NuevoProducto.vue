<template>
    <v-form>
        <v-text-field
            label="Modelo"
        >
        </v-text-field>
        <combobox
            label="Marca"
            smallChips
        >
        </combobox>
        <combobox
            label="Tipo de producto"
        >
        </combobox>
        <combobox
            label="codbarras"
        >
        </combobox>
    </v-form>
</template>
<script>
import {VForm, VTextField} from 'vuetify/lib'
import {combobox} from '../components';
export default {
    components:{
        combobox,
        VForm,
        VTextField
    },
    name: 'NuevoProducto'
}
</script>