<template>
    <v-data-table
        :search="search"
        :headers="headers"
        :items="desserts"
        :options.sync="options"
        :server-items-length="serverItemsLength"
        :loading="loading"
        :class="classProp"
      >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Productos</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical
                    >
                    </v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                    >
                    </v-text-field>
                    <v-spacer></v-spacer>
                    <!--<v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on:click="newItem()">New Item</v-btn>
                        </template>
                        <v-card  v-if="formCalc == false">
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="selectedItem.upc" label="Código UPC"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="selectedItem.ean" label="Código EAN"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <!--<v-text-field v-model="selectedItem.tipo" label="Tipo de producto"></v-text-field>
                                            <v-combobox
                                                v-model="selectedItem.tipo"
                                                :items="comboboxes.fields.tipos"
                                                :search-input.sync="comboboxes.searching.tipo"
                                                hide-selected
                                                hint="Seleccione la marca, si no existe escribala"
                                                label="Tipo de producto"
                                                small-chips
                                                :loading="comboboxes.loading.tipo"
                                                no-filter
                                                persistent-hint
                        >
                          <template v-slot:no-data>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>
                                  No se encontraron resultados para "<strong>{{ comboboxes.searching.tipo }}</strong>". Presiona <kbd>enter</kbd> para crearlo
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </template>
                        </v-combobox>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-combobox
                          v-model="selectedItem.marca"
                          :items="comboboxes.fields.marcas"
                          :search-input.sync="comboboxes.searching.marca"
                          hide-selected
                          hint="Seleccione el tipo de producto, si no existe escribalo"
                          label="Marca"
                          no-filter
                          persistent-hint
                        >
                          <template v-slot:no-data>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>
                                  No se encontraron resultados para "<strong>{{ comboboxes.searching.marca }}</strong>". Presiona <kbd>enter</kbd> para crearlo
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </template>
                        </v-combobox>
                        <!--<v-text-field v-model="selectedItem.marca" label="Marca"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="selectedItem.modelo" label="Modelo"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-container fluid>
                          <v-switch v-model="selectedItem.serializado" color="blue" label="Serializado"></v-switch>
                        </v-container>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
              <v-card v-else>
                <v-card-title>
                  <span class="headline">¿Seguro que quiere eliminar el producto?</span>
                </v-card-title>
                <v-card-text>

                  <v-simple-table
                    :dense="dense"
                    :fixed-header="fixedHeader"
                    :height="height"
                  >
                    <tbody>
                      <tr>
                        <td>Marca:</td>
                        <td>{{ selectedItem.marca }}</td>
                      </tr>
                      <tr>
                        <td>Modelo:</td>
                        <td>{{ selectedItem.modelo }}</td>
                      </tr>
                      <tr>
                        <td>Tipo de producto:</td>
                        <td>{{ selectedItem.tipo }}</td>
                      </tr>
                      <tr>
                        <td>Código de barras:</td>
                        <td>{{ selectedItem.codbarras }}</td>
                                </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>-->
            </v-toolbar>
        </template>
        <template v-slot:item.serializado="{ item }">
            <v-chip :color="getColor(item.serializado)" dark>{{ getLabel(item.serializado)}}</v-chip>
        </template>
        <template v-slot:item.action="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
                edit
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
            delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Refresh</v-btn>
        </template>  
    </v-data-table>
</template>
<script>
    import {VDataTable} from 'vuetify/lib';
    export default {
        data() {
          return {
            localValue: ""
          }
        },
        components:{
          VDataTable
        },
        props:{
            classProp: String,
            loading: Boolean,
            search: String,
            headers: Array,
            items: Array,
            serverItemsLength: Number
        },
        watch: {
          localSearch (newValue){
            this.$emit('input', newValue)
          },
          value (newValue){
            this.localValue = value
          }
        }
    }
</script>