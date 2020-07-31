<template>
    <v-text-field
        :label="label"
    >
    </v-text-field>
</template>
<script>
import {VTextField} from 'vuetify/lib'
export default {
    components:{
        VTextField
    },
    data(){
        return {
            localValue: this.value
        }
    },
    name: 'Zinput',
    props:{
        label: String,
    },
    watch:{
        localValue (newValue) {
            this.$emit('input', newValue)
        },
        value (newValue) {
            this.localValue = value
        }
    }
}
</script>