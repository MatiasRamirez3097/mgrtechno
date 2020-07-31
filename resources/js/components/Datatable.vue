<template>
    <v-data-table
        :headers="headers"
        :items="data"
        :options.sync="options"
        :server-items-length="serverItemsLength"
        :loading="loading"
        :class="classProp"
    >
        <template v-slot:top>
            <Slottop 
                @new-item="newItem"
                :title="title" 
                v-model="search"> 
            </Slottop>
        </template>
    </v-data-table>
</template>
<script>
import { VDataTable } from "vuetify/lib";
import Slottop from "./Slottop.vue";
export default {
    data() {
        return {
            data: [],
            loading: false,
            localValue: this.value,
            options: {},
            search: '',
            totalOfData: 0
        };
    },
    components: {
        Slottop,
        VDataTable
    },
    methods: {
        getDataFromApi() {
            this.loading = true;
            const {
                sortBy,
                descending,
                page,
                itemsPerPage,
                sortDesc
            } = this.options;
            axios
                .post(this.url, {
                    //datafilter: this.disponible,
                    sortDesc: this.options.sortDesc,
                    search: this.search,
                    sortBy: this.options.sortBy,
                    descending: this.options.descending,
                    page: this.options.page,
                    itemsPerPage: this.options.itemsPerPage
                })
                .then(response => {
                    this.data = response.data.data;
                    this.totalOfData = response.data.total;
                    this.loading = false;
                    this.$store.commit("setRunSearch", false);
                });
        },
        newItem()
        {
            this.$emit('new-item');
        }
    },
    mounted()
    {
        this.getDataFromApi();
    },
    props: {
        classProp: String,
        headers: Array,
        items: Array,
        title: String,
        url: String,
        serverItemsLength: Number
    },
    watch: {
        options: {
            handler () {
                this.getDataFromApi()
            },
            deep: true,
        },
        search: {
            handler () {
                this.getDataFromApi()
            },
            deep: true,
        }
    }
};
</script>
