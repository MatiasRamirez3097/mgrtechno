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
import datatable from './components/tables/datatable.vue'
Vue.use(Vuetify)
Vue.use(VueRouter)
const routes = [
                  { 
                    component: () => import('./pages/stock.vue'),
                    path: "/altastock"
                  },
                  { 
                    component: () => import('./pages/Compras.vue'),
                    path: "/compras"
                  },
                  {
                    component: () => import('./pages/productos.vue'),
                    path: "/productos"
                  },
                  {
                    component: () => import('./pages/proveedores.vue'),
                    path: "/proveedores"
                  }
                ] 
const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    store,
    router,
    datatable,
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
        ['Compras','move_to_inbox','/compras'],
        ['Ventas','shopping_cart','/ventas']
      ],
      stock: [
        ['Alta','add','/altastock'],
        ['Recuperar', 'restore_from_trash','/testing2']
      ],
      settings:[
        ['Productos', 'add_circle','/admin/productos'],
        ['Proveedores','people_outline','/proveedores'],
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