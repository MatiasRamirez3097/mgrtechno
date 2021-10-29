<template>	
	<v-card>
		<datatable 
			title="Proveedores" 
			:headers="headers" 
			v-on:edit="dialEdit" 
			v-on:new="val = true" 
			url="/datatables/getproveedores">
		</datatable>		
		<provDialog ref="dialog" :state.sync="val"></provDialog>
		<!--<v-dialog ref="dialog" persistent v-model="val" max-width="600px">
			<v-card>
				<v-card-text>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>-->
	</v-card>
</template>
<script>
	import provDialog from '../components/tables/stock/vdialogs/provDialog.vue'
	import datatable from '../components/tables/datatable.vue'
	export default
	{
		components:
		{
			datatable,
			provDialog
		},
		data()
		{
			return{
				search: '',
				headers: [
		          	{ text: 'Nombre', value: 'nombre' },
		          	{ text: 'Telefono', value: 'tel'},
		          	{ text: 'Actions', value: 'action', sortable: false },
		        ],
		        expanded: [],
		        items:[],
		        loading: true,
		        multiSalida: [],
		        options:{},
		        singleExpand: false,
		        totalItems:0,
		        val: false
			}
		},
		methods:
		{
			open()
			{
				this.getDialog = true;
			},
			dialEdit(value)
			{
				this.val = value
			}
			/*getDataFromApi () {
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
    		},*/
		},
		watch:
		{

		}
	}
</script>