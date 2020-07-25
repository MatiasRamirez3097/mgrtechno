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
            v-model="localValue"
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
            title: String,
        },
        watch: {
            localValue(newValue) {
                this.$emit("input", newValue);
            },
            value(newValue) {
                this.localValue = value;
            }
        }
    }
</script>