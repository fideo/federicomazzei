<template>
  <v-app>
    <v-container
      bg
      fill-height
      grid-list-md
      text-xs-center
    >
      <v-layout
        row
        wrap
        align-center
      >
        <v-flex>
          <h1 v-if="error.statusCode === 404"><span class="display-4 red--text text--darken-4">Error 404</span></h1>
          <h1 v-else>An error occurred</h1>
          <h2>Se ha producido un error, por favor dirijase a la <nuxt-link to="/">Home page</nuxt-link> y contacte al webmaster si el problema persiste</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: ["error"]
  //layout: 'blog' // you can set a custom layout for the error page
};
</script>