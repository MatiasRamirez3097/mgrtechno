<template>	
	<v-card>
		<datatable 
			title="Ventas" 
			:headers="headers" 
			v-on:edit="dialEdit" 
			v-on:new="open" 
			url="/datatables/getventas">
		</datatable>		
		<vdialog ref="dialog" :state.sync="val"></vdialog>
	</v-card>
</template>
<script>
	import vdialog from '../dialogs/ventasDialog.vue'
	import {datatable} from '../components'
	export default
	{
		components:
		{
			datatable,
			vdialog
		},
		computed:
		{
			getDialog: {
                get()
				{
					return this.$store.getters.getDialog
				},
				set(value)
				{
					this.$store.commit('setDialog', value)
				}
			},
		},
		data()
		{
			return{
				search: '',
				headers: [
		          	{ text: 'Cliente', value: 'nombre' },
		          	{ text: 'Factura', value: 'factura'},
		          	{ text: 'Usuario', value: 'usuario' },
		          	{ text: 'Estado', value: 'estado' },
		          	{ text: 'Total', value: 'total' },
		          	{ text: 'Fecha', value: 'fecha'},
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
				this.getDialog = true
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