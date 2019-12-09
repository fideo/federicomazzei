<template>
  <v-app>
    <v-container grid-list-md>
      <v-layout row wrap>
        <post 
          v-for="post in posts" 
          :key="post.id"
          :post="post" />
        <v-pagination v-model="page" :length="totalPages" @input="next"></v-pagination>
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

  data () {
      return {
        page: 1,
        totalPages: 5,
        next: +1,
      }
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
      
      //console.log(posts)
      return { posts }
    } catch (err) {
      console.log(err)
      return { posts: [] }
    }
  }
}
</script>

<style scoped>

</style>