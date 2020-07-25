<template>
    <v-toolbar flat>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        >
        </v-divider>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="value"
            append-icon="search"
            label="Search"
            single-line
            hide-details
        >
        </v-text-field>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>
<script>
    import {VToolbar,VToolbarTitle} from 'vuetify/lib'
    export default {
        data() {
            return {
                localValue: this.value
            }
        },
        components: {
            VToolbar,
            VToolbarTitle
        },
        name: 'Slottop',
        props:{
            label: String,
            search: String,
            title: String,
        },
        watch: {
            
        }
    }
</script>