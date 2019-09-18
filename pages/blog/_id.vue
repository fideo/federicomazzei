<template>
  <v-app>
    <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 v-for="post in posts" :key="post.id">
            <h1><strong>{{ post.title }}</strong></h1>
            <h3>{{ post.subtitle }}</h3>
            
              <p v-html="post.body">
                {{ post.body }}
              </p>
          </v-flex>
        </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {

  async asyncData({ app, params, route }) {
    try {
      const posts = await app.flamelink.content.get({
        schemaKey: 'post',
        limitToFirst: 6, //limito la cantidad de registros a mostrar
        orderByKey: 'id',
        equalTo: route.params.id,
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


</style>