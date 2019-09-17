<template>
  <v-app>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm4  v-for="post in posts" :key="post.id">
          <post :post="post" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Post from '~/components/Post'

export default {
  components: {
      Post
  },

  //TODO agregar el paginado

  async asyncData({ app }) {
    try {
      const posts = await app.flamelink.content.get({
        schemaKey: 'post',
        //limitToFirst: 6, //limito la cantidad de registros a mostrar
        //orderByChild: 'datePublish',
        orderByChild: 'publicado',
        equalTo: true,
        populate: true
      })
      //console.log({ posts  })
      return { posts }
    } catch (err) {
      console.log(err)
      return { posts: [] }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>