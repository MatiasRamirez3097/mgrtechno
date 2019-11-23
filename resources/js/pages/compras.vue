<template>
	<v-card>
		<datatable :headers="headers" url="/datatables/getcompras"></datatable>		
	</v-card>
</template>
<script>
	import datatable from '../components/tables/datatable.vue'
	export default
	{
		components:
		{
			datatable
		},
		data()
		{
			return{
				search: '',
				headers: [
		          	{ text: 'Proveedor', value: 'proveedor' },
		          	{ text: 'Factura', value: 'factura'},
		          	//{ text: 'Tipo de producto', value: 'tipo' },
		          	//{ text: 'Modelo', value: 'modelo' },
		          	//{ text: 'Marca', value: 'marca' },
		          	//{ text: 'Serializado', value: 'serializado'},
		          	//{ text: 'Actions', value: 'action', sortable: false },
		        ],
		        expanded: [],
		        items:[],
		        loading: true,
		        multiSalida: [],
		        options:{},
		        singleExpand: false,
		        totalItems:0
			}
		},
		methods:
		{
			getDataFromApi () {
      			this.loading = true
          		const { sortBy, descending, page, itemsPerPage, sortDesc } = this.options
          		axios.post('/datatables/getstock',
    			{
		            datafilter: this.disponible,
		            sortDesc: this.options.sortDesc,
		            search: this.search,
		            sortBy: this.options.sortBy,
		            descending: this.options.descending,
		            page: this.options.page,
		            itemsPerPage: this.options.itemsPerPage
        		}).then(response => {
		            this.desserts = response.data.data
		            this.totalDesserts = response.data.total
		            this.loading = false;
              		this.$store.commit('setRunSearch',false)
        		});
    		},
		}
	}
</script>