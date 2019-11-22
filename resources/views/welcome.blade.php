<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <style type="text/css">
            .icon:before {
                font-family: sans-serif!important;
            }
        </style>
        <!-- Styles -->
        
    </head>
    <body class="bg-light">
<div id="app">
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            mini-variant
            permanent
        >
            <v-list subheader nav>
                <!--<v-list-group prepend-icon="account_circle"
                    value="true">
                    <template v-slot:activator>
                        <v-list-item-title>Admins</v-list-item-title>
                    </template>
                        <v-list-item v-for="(admin, i) in admins" :key="i" link :to="admin[2]">
                            <v-list-item-icon>
                                <v-icon v-text="admin[1]"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title v-text="admin[0]"></v-list-item-title>
                            
                        </v-list-item>
                </v-list-group>-->
                <v-subheader>Moves</v-subheader>
                <v-list-group prepend-icon="all_inbox"
                    value="true">
                <!--    <template v-slot:activator>
                        <v-list-item-title>Compras</v-list-item-title>
                    </template>-->
                    <v-tooltip right v-for="(compra, i) in compras" :key="i">
                        <template v-slot:activator="{ on }">
                            <v-list-item  link :to="compra[2]"  v-on="on">
                                <v-list-item-icon>
                                    <v-icon v-text="compra[1]"></v-icon>     
                                </v-list-item-icon>
                            </v-list-item>
                        </template>
                        <span v-text="compra[0]"></span>
                    </v-tooltip>
                </v-list-group>
                <v-list-group prepend-icon="all_inbox"
                    value="true">
                    <template v-slot:activator>
                        <!--<v-list-item-title>Stock</v-list-item-title>-->
                    </template>
                    <v-list-item v-for="(stocks, i) in stock" :key="i" link :to="stocks[2]">
                        <v-list-item-title v-text="stocks[0]"></v-list-item-title>
                        <v-list-item-icon>
                            <!--<v-icon v-text="stocks[1]"></v-icon>-->
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
                <v-subheader>Configuración</v-subheader>
                <v-list-group prepend-icon="settings"
                    value="true">
                    <template v-slot:activator>
                        <!--<v-list-item-title>Configuración</v-list-item-title>-->
                    </template>
                    <v-list-item v-for="(setting, i) in settings" :key="i" link :href="setting[2]">
                        <!--<v-list-item-title v-text="setting[0]"></v-list-item-title>-->
                        <v-list-item-icon>
                            <v-icon v-text="setting[1]"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
            </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>MGR Techno</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <v-container
            fluid
            fill-height
        >
            <v-layout
                align-top
                allign-space-between
                column
            >
                <router-view></router-view>
            <!--
                align-top
                fill-height
                column
            -->
                
                <!--<v-flex shrink>
                    <v-tooltip right>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          href=""
                          icon
                          large
                          target="_blank"
                          v-on="on"
                        >
                          <v-icon large>mdi-code-tags</v-icon>
                        </v-btn>
                      </template>
                      <span>Source</span>
                    </v-tooltip>
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                icon
                                large
                                href="https://codepen.io/johnjleider/pen/bXNzZL"
                                target="_blank"
                                v-on="on"
                            >
                                <v-icon large>mdi-codepen</v-icon>
                            </v-btn>
                        </template>
                        <span>Codepen</span>
                    </v-tooltip>
                </v-flex>-->
            </v-layout>
        </v-container>
    </v-content>

    <!--<v-footer app>
        <span>&copy; 2019</span>
    </v-footer>-->
  </v-app>

</div>
</body>
<footer>
    <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
</footer>
</html>
