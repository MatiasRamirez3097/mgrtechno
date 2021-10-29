<template>
	<v-form ref="form" v-model="valid">
		<v-card>
          	<v-card-title>
            	<span class="headline">Nueva compra</span>
          	</v-card-title>
			<v-card-text>
				<v-container grid-list-mid>
					<v-layout wrap>
						<v-flex xs18 sm9 md6>
							<combobox 
                                label="Proveedor" 
                                v-model="item.proveedor" 
                                placeholder="Escribir para buscar" 
                                url="/ajax/proveedores">
							</combobox>    
						</v-flex>
						<v-flex xs18 sm9 md6>
							<datepicker>
                                label="Fecha" 
                                v-model="item.fecha" 
							</datepicker>    
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
			<v-card-actions>
	            <v-spacer></v-spacer>
	            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
	            <v-btn :disabled="!valid" color="success" text @click="save">Save</v-btn>
	      	</v-card-actions>
      	</v-card>
    </v-form>
</template>
<script>
import {autocomplete, combobox, datepicker} from '../components'

	export default{
		components:
		{
			autocomplete,
			combobox,
			datepicker
		},
		computed:
		{
			serializado: function()
			{
				if(this.item.codbarras)
				{
					if(this.item.codbarras.serializado == true)
					{
						return true
					}
				}
				return false
			}
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
		        clienteRules: [
		         	v => !!v || 'Cliente requerido',
		          //v => (v && v.length <= 10) || 'Name must be less than 10 characters',
		        ],
		        fechaRules: [
		          	v => !!v || 'Fecha de entrada requerida'
		        ],
		        //fecha_entrada: false,
        		//fecha_salida: false,
		        isLoading: false,
		        //searchAuto: null,
        		//searchAutoClientes: null,
		        item: {
		          	id: 0,
		          	proveedor: null,
					fecha: null
        		},
		        valid: true
	        }
		},
		methods:
		{
			close () {
        		this.$store.commit('setDialog', false)
        		this.$store.commit('setAction', null)
        		setTimeout(() => {
          			this.selectedItem = Object.assign({}, this.defaultItem)
          			this.editedIndex = -1
          			//this.getDataFromApi();
        		}, 300)
     		},
     		save()
     		{
     			axios.post('/admin/stock/nuevo',
                this.item).then(response => {
                  
                });
                this.close();
     		}
		},
		props: {
			multiple: Boolean,
			disabledAll: Boolean
		}
	}
</script>