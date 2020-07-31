<template>
    <v-dialog
        v-model="active"
        :persistent="persistent"
        max-width="600px"
    >
        <v-card>
            <v-card-title>
                {{title}}
            </v-card-title>
            <nuevoproducto></nuevoproducto>
        </v-card>
    </v-dialog>
</template>
<script>
import {VCard, VCardTitle, VDialog} from 'vuetify/lib';
import {nuevoproducto} from '../forms'
export default {
    components:{
        nuevoproducto,
        VDialog
    },
    name: 'zdialog',
    props:{
        active: Boolean,
        persistent: Boolean,
        title: String
    },
}
</script>