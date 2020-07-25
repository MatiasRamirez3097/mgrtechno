<template>
    <v-data-table
        :search="search"
        :headers="headers"
        :items="data"
        :options.sync="options"
        :server-items-length="serverItemsLength"
        :loading="loading"
        :class="classProp"
    >
        <template v-slot:top>
            <Slottop title="Productos"> </Slottop>
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
                .post("/datatables/getstock", {
                    datafilter: this.disponible,
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
        }
    },
    mounted()
    {
        this.getDataFromApi();
    },
    props: {
        classProp: String,
        search: String,
        headers: Array,
        items: Array,
        serverItemsLength: Number
    },
    watch: {
        localSearch(newValue) {
            this.$emit("input", newValue);
        },
        value(newValue) {
            this.localValue = value;
        }
    }
};
</script>
