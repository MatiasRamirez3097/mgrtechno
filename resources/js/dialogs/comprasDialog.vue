<template>
	<v-dialog persistent v-model="dialog" max-width="600px" >
		<comprasNew></comprasNew> 
  	</v-dialog>
</template>
<script>
	import {mapState} from 'vuex'
	import comprasNew from '../forms/comprasNew'
	export default{
		components:
		{
			comprasNew
		},
		computed:
		{
			getAction: {
				get()
				{
					return this.$store.getters.getAction
				},
				set(value)
				{
					this.$store.commit('setAction', value)
				}
			},
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
			...mapState(['dialog'])
		},
		data()
		{
			return{
				serialesRules: [
          			v => !!v || 'Debe ingresar al menos un serial'
		        ],
		        codbarrasRules: [
		          	v => !!v || 'Producto requerido',
		        ],
		        precio_entradaRules: [
		          	v => !!v || 'Precio de entrada requerido'
		        ],
		        proveedorRules: [
		         	v => !!v || 'Proveedor requerido',
		          //v => (v && v.length <= 10) || 'Name must be less than 10 characters',
		        ],
		        fecha_entradaRules: [
		          	v => !!v || 'Fecha de entrada requerida'
		        ]
			}
		},
		methods:
		{
      		/*close () {
      			this.getDialog = false;
        		setTimeout(() => {
	          		this.$store.commit('setRunSearch', true)
        		}, 300)
      		},*/
		},
		props:
		{
			state: Boolean
		}
		

	}
</script>