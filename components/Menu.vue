<template>
  <div>
    <client-only>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        class="lighten-2"
      >
        <v-list>
          <v-list-tile
            v-for="item in menuizq"
            :key="item.title"
            :to="item.link"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        app
        fixed
        dark
      >
        <v-spacer></v-spacer>
        <v-btn
          color="blue"
          dark
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        >
          Menú
        </v-btn>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            flat
            to="/"
          >
            <v-list-tile
              key="index"
              to="/"
            >Inicio</v-list-tile>
          </v-btn>
          <v-btn
            flat
            to="../acercademi"
          >
            <v-list-tile to="../acercademi">Este soy yo</v-list-tile>
          </v-btn>
          <v-btn
            flat
            to="../quehago"
          >
            <v-list-tile to="../quehago">¿Qué se hacer?</v-list-tile>
          </v-btn>
          <v-btn
            flat
            to="../escribime"
          >
            <v-list-tile to="../escribime">Escribime</v-list-tile>
          </v-btn>
          <v-btn
            flat
            to="../blog/"
          >
            <v-list-tile to="../blog/">Blog</v-list-tile>
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
    </client-only>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    menuizq: [
      { title: "Inicio", icon: "home", link: "/" },
      {
        title: "Este soy yo",
        icon: "account_circle",
        link: "../acercademi"
      },
      {
        title: "¿Qué se hacer?",
        icon: "build",
        link: "../quehago"
      },
      {
        title: "Escribime",
        icon: "phone",
        link: "../escribime"
      },
      {
        title: "Blog",
        icon: "note",
        link: "../blog"
      }
    ]
  })
};
</script>