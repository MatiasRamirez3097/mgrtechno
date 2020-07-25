<template>
    <v-combobox
        :items="items"
        :search-input.sync="value"
        :hide-selected="smallChips"
        hint="Seleccione la marca, si no existe escribala"
        :label="label"
        :small-chips="smallChips"
        :loading="loading"
        :no-filter="noFilter"
        :persistent-hint="persistentHint"
    >
        <template v-slot:no-data>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title>
                    No se encontraron resultados para "<strong>NO DATA </strong>". Presiona <kbd>enter</kbd> para crearlo
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-combobox>
</template>
<script>
    import { VCombobox } from 'vuetify/lib';
    export default {
        components: {
            VCombobox
        },
        name: 'Combobox',
        props: [{
            noFilter: Boolean,
            hideSelected: Boolean,
            label: String,
            loading: Boolean,
            smallChips: Boolean,
            persistentHint: Boolean,
            items: Array,
            value: String,
            noData: String,
            hint: String,
        }],
        watch: {
            value() {
                this.$emit('input', this.value)
            }
        }
    }
</script>