<template>
	<v-form ref="form" v-model="valid">
		<v-card>
          	<v-card-title>
            	<span class="headline">Nuevo proveedor</span>
          	</v-card-title>
			<v-card-text>
				<v-container grid-list-mid>
					<v-layout wrap>
						<v-flex xs18 sm9 md6>
							<v-text-field 
								v-model="item.nombre" 
								type="text" 
								label="Nombre"
							>
							</v-text-field>
						</v-flex>
						<v-flex xs18 sm9 md6>
							<v-text-field 
								v-model="item.tel" 
								type="text" 
								label="Telefono"
							>
							</v-text-field>
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
	import combobox from './formInputs/combobox'
	import datepicker from './formInputs/datepicker'
	import autocomplete from './formInputs/autocomplete'

	export default{
		components:
		{
			autocomplete,
			combobox,
			datepicker
		},
		data()
		{
			return{
		        nombreRules: [
		         	v => !!v || 'Cliente requerido',
		        ],
		        item: {
		          	nombre: "",
					tel: ""
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
     			axios.post('/proveedores/nuevo',
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