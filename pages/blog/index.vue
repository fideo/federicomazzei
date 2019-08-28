<template>
     <v-app>
    <v-container
      bg
      fill-height
      grid-list-md
      align-center
    >
      <v-layout
        row
        wrap
      >
        <v-flex x12>
          <v-card>
            <v-container
              grid-list-sm
              fluid
            >
            <div v-for="post in posts" :key="post.id">
                <post :post="post" />
            </div>
            </v-container>
          </v-card>
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

  async asyncData({ app }) {
    try {
      const posts = await app.flamelink.content.get({
        schemaKey: 'post',
        populate: true
      })
      //console.log({ posts })
      return { posts }
    } catch (err) {
      console.log(err)
      return { posts: [] }
    }
  }
}

</script>