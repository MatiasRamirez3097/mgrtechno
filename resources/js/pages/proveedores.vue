<template>	
	<v-card>
		<datatable 
			title="Proveedores" 
			:headers="headers" 
			v-on:edit="" 
			v-on:new="open" 
			url="/datatables/getproveedores">
		</datatable>		
		<provDialog ref="dialog" :state.sync="val"></provDialog>
	</v-card>
</template>
<script>
	import provDialog from '../dialogs/provDialog.vue'
	import {datatable} from '../components'
	export default
	{
		components:
		{
			datatable,
			provDialog
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
		},
	}
</script>