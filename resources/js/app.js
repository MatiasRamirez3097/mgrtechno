require('./bootstrap');

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import VueRouter from 'vue-router'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import store from './store'
Vue.use(Vuetify)
Vue.use(VueRouter)
const routes = [
                  { 
                    component: () => import('./pages/stock.vue'),
                    path: "/altastock"
                  },
                  { 
                    component: () => import('./components/testing2.vue'),
                    path: "/testing2"
                  },
                  {
                    component: () => import('./pages/productos.vue'),
                    path: "/productos"
                  }
                ] 
const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    store,
    router,
    vuetify: new Vuetify({
      theme: { dark: true },
    }),
      data: () => ({
      drawer: null,
      mini: true,
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings'],
      ],
      compras: [
        ['Nueva compra','move_to_inbox','/newcompras'],
        ['Consultar','find_in_page','/consultarcompras']
      ],
      stock: [
        ['Alta','add','/altastock'],
        ['Recuperar', 'restore_from_trash','/testing2']
      ],
      settings:[
        ['Productos', 'add_circle','/admin/productos'],
        ['Proveedores','people_outline','/admin/proveedores'],
        ['Clientes','people','/admin/clientes']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],
    })
});
/*const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
      theme: { dark: true },
    }),
      data: () => ({
      drawer: null,
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings'],
      ],
      stock: [
        ['Alta','add','/admin/stock'],
        ['Recuperar', 'restore_from_trash','/admin']
      ],
      settings:[
        ['Productos', 'add_circle','/admin/productos'],
        ['Proveedores','people_outline','/admin/proveedores'],
        ['Clientes','people','/admin/clientes']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],
    })
});*/