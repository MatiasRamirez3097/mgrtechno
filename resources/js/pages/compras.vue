<template>	
	<v-card>
		<datatable 
			title="Compras" 
			:headers="headers" 
			v-on:edit="dialEdit" 
			v-on:new="open" 
			url="/datatables/getcompras">
		</datatable>		
		<comprasDialog ref="dialog" :state.sync="val"></comprasDialog>
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
	import comprasDialog from '../dialogs/comprasDialog.vue'
	import {datatable} from '../components'
	export default
	{
		components:
		{
			datatable,
			comprasDialog
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
		          	{ text: 'Proveedor', value: 'proveedor' },
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
				this.getDialog = true;
			},
			dialEdit(value)
			{
				this.val = value
			}
		},
	}
</script>